React = require 'react'
_ = require './Lodash'
# ReactCSSTransitionGroup = React.addons.CSSTransitionGroup
Simulation = require './Simulation'
EventBuffer = require './EventBuffer'
Events = require './Events'
AnimationLoop = require './AnimationLoop'
# browserPrefix = require('./getPrefix')();
normalize = require 'react-style-normalizer'

createCSSTransform = (style) ->
    # Replace unitless items with px
    x = style.x + 'px'
    y = style.y + 'px'
    out = transform: 'translate3d(' + x + ',' + y + ',0)'
    # Add single prefixed property as well
    # if browserPrefix
    #     out[browserPrefix + 'Transform'] = out.transform
    return out

module.exports = class ScrollView extends React.Component

    @defaultProps =
        className: ''
        style: {}
        contentContainerStyle: {}
        horizontal: false
        keyboardDismissMode: 'none'
        onScroll: ->
        removeClippedSubviews: false
        showsHorizontalScrollIndicator: false
        showsVerticalScrollIndicator: false

    @propTypes = {}

    ### React Lifecycle ###

    constructor: (props) ->
        @state =
            offset:
                x: 0
                y: 0
        @_eventBuffer = new EventBuffer
        @overdragScale = 0.5
        @overdrag = true
        @bounce = true
        @speedX = 1
        @speedY = 1

        @momentum = true
        @momentumOptions =
            friction: 2.1
            tolerance: 1
        # @bounce = true
        @bounceOptions =
            friction: 40
            tension: 200
            tolerance: 1
        @directionLock = false
        @directionLockThreshold =
            x: 10
            y: 10
        # @overdrag = true
        # @overdragScale = 0.5
        # @pixelAlign = true
        @velocityTimeout = 100
        @momentumVelocityMultiplier = 890


        super props

    _updateContentOffset: =>
        # contentElement = React.findDOMNode @refs.content
        # contentElement.scrollLeft = @state.offset.x
        # contentElement.scrollTop = @state.offset.y

    componentDidMount: =>
        # @_updateContentOffset()
        @_setupSimulation()

    componentDidUpdate: =>
        # @_updateContentOffset()

    ### Event Handlers ###

    _normalizeMouseEvent: (e) =>
        e.stopPropagation()
        e.preventDefault()
        return Events.touchEvent e

    _onMouseDown: (e) =>
        if Events.TouchStart == 'mousedown'
            return if e.nativeEvent.which != 1
        e = @_normalizeMouseEvent e
        @_startRecordingMotion e

        document.addEventListener Events.TouchMove, @_onMouseMove
        document.addEventListener Events.TouchEnd, @_onMouseUp

    _onMouseMove: (e) =>
        e = @_normalizeMouseEvent e
        @_continueRecordingMotion e

    _onMouseUp: (e) =>
        e = @_normalizeMouseEvent e
        @_stopRecordingMotion e

        document.removeEventListener Events.TouchMove, @_onMouseMove
        document.removeEventListener Events.TouchEnd, @_onMouseUp

    ### Recording Motion ###

    _startRecordingMotion: (e) =>
        @_stopSimulation()

        @_eventBuffer.push
            x: e.clientX
            y: e.clientY
            t: Date.now()

        @_correctedLayerStartPoint = @state.offset

        # If we are beyond bounds, we need to correct for the scaled clamping from the last drag,
        # hence the 1 / overdragScale
        # TODO: constraints and bounce
        if @bounce
            @_correctedLayerStartPoint = @_constrainPosition(
                @_correctedLayerStartPoint, 1 / @overdragScale)

        # Store start cursor position
        @_cursorStartPoint =
            x: e.clientX
            y: e.clientY

        # Store cursor/layer offset
        @_layerCursorOffset =
            x: e.clientX - @_correctedLayerStartPoint.x
            y: e.clientY - @_correctedLayerStartPoint.y

    _continueRecordingMotion: (e) =>
        @_eventBuffer.push
            x: e.clientX
            y: e.clientY
            t: Date.now() # We don't use timeStamp because it's different on Chrome/Safari

        offset =
            x: e.clientX - @_correctedLayerStartPoint.x - @_layerCursorOffset.x
            y: e.clientY - @_correctedLayerStartPoint.y - @_layerCursorOffset.y

        # See if horizontal/vertical was set and set the offset
        point =
            x: @_correctedLayerStartPoint.x + offset.x #if @horizontal
            y: @_correctedLayerStartPoint.y + offset.y #if @vertical

        # Constraints and overdrag
        point = @_constrainPosition point, @overdragScale

        # Direction lock
        # if @directionLock
        #     if not @_directionLockEnabledX and not @_directionLockEnabledY
        #         @_updatedirectionLock(offset)
        #         return
        #     else
        #         point.x = @_layerStartPoint.x if @_directionLockEnabledX
        #         point.y = @_layerStartPoint.y if @_directionLockEnabledY

        @setState
            offset: point

        # @layer.point = @updatePosition(point)

    _stopRecordingMotion: (e) =>
        @_startSimulation()

    ### Constraints ###

    _clamp: (value, min, max) =>
        value = min if value < min
        value = max if value > max
        return value

    _clampAndScale: (value, min, max, scale) =>
        value = min + (value - min) * scale if value < min
        value = max + (value - max) * scale if value > max
        return value

    _calculateConstraints: =>
        scrollElement = React.findDOMNode @refs.scroll
        contentElement = React.findDOMNode @refs.content

        constraints =
            minX: - (contentElement.offsetWidth - scrollElement.clientWidth)
            maxX: 0
            minY: - (contentElement.offsetHeight - scrollElement.clientHeight)
            maxY: 0

        return constraints

    _constrainPosition: (proposedPoint, scale) =>

        {minX, maxX, minY, maxY} = @_calculateConstraints()

        if @overdrag
            point =
                x: @_clampAndScale proposedPoint.x, minX, maxX, scale
                y: @_clampAndScale proposedPoint.y, minY, maxY, scale
        else
            point =
                x: @_clamp proposedPoint.x, minX, maxX
                y: @_clamp proposedPoint.y, minY, maxY

        # point.x = proposedPoint.x if @speedX == 0 or @horizontal is false
        # point.y = proposedPoint.y if @speedY == 0 or @vertical   is false

        return point

    getConstraintsOffset: =>
        {minX, maxX, minY, maxY} = this._calculateConstraints()
        point = @state.offset
        constrainedPoint =
            x: @_clamp point.x, minX, maxX
            y: @_clamp point.y, minY, maxY
        offset =
            x: point.x - constrainedPoint.x
            y: point.y - constrainedPoint.y
        return offset

    isBeyondConstraints: =>
        constraintsOffset = @getConstraintsOffset()
        return true if constraintsOffset.x != 0
        return true if constraintsOffset.y != 0
        return false

    ### Inertial scroll simulation ###

    getVelocity: =>
        return @_calculateSimulationVelocity() if @isAnimating
        return @_eventBuffer.getVelocity()
        return {x:0, y:0}

        # return @_eventBuffer.velocity if @isDragging
        # return @_calculateSimulationVelocity() if @isAnimating
        # return {x:0, y:0}

    _setupSimulation: ->
        return if @_simulation

        @_simulation =
            x: @_setupSimulationForAxis "x"
            y: @_setupSimulationForAxis "y"

        @_updateSimulationConstraints()

    _setupSimulationForAxis: (axis) ->

        simulation = new Simulation
            layer: @layer
            model: "inertial-scroll"
            modelOptions:
                momentum: @momentumOptions
                bounce: @bounceOptions

        simulation.on Events.SimulationStep, (state) => @_onSimulationStep(axis, state)
        simulation.on Events.SimulationStop, (state) => @_onSimulationStop(axis, state)
        simulation

    _updateSimulationConstraints: ->
        # This is where we let the simulator know about our constraints
        return unless @_simulation
        {minX, maxX, minY, maxY} = @_calculateConstraints()
        @_simulation.x.simulator.options = {min:minX, max:maxX}
        @_simulation.y.simulator.options = {min:minY, max:maxY}

    _onSimulationStep: (axis, state) =>
        # return if axis is "x" and @horizontal is false
        # return if axis is "y" and @vertical is false

        # The simulation state has x as value, it can look confusing here
        # as we're working with x and y.

        if @bounce
            delta = state.x - @state.offset[axis]
        else
            {minX, maxX, minY, maxY} = @_calculateConstraints(@_constraints)
            delta = Utils.clamp(state.x, minX, maxX) - @state.offset[axis] if axis is "x"
            delta = Utils.clamp(state.x, minY, maxY) - @state.offset[axis] if axis is "y"

        updatePoint = @state.offset
        updatePoint[axis] = updatePoint[axis] + (delta * @speedX) if axis is "x"
        updatePoint[axis] = updatePoint[axis] + (delta * @speedY) if axis is "y"

        @state.offset[axis] = updatePoint[axis]

        @setState
            offset: @state.offset

    _onSimulationStop: (axis, state) =>

        return unless @_simulation

        # # Round the end position to whole pixels
        # @layer[axis] = parseInt(@layer[axis]) if @pixelAlign

        # See if both simulators are stopped
        if @_simulation.x.finished() and @_simulation.y.finished()
            @_stopSimulation()

    _startSimulation: ->
        # The types of simulation that we can have are:
        # 1) Momentum inside constraints
        # 2) Momentum inside constraints to outside constraints bounce
        # 3) Release outside constraints bounce
        # 4) Momentum without constraints

        return unless @momentum or @bounce
        return if @isBeyondConstraints() is false and @momentum is false
        return if @isBeyondConstraints() is false and @isDragging is false

        # If overdrag is disabled, we need to not have a bounce animation
        # when the cursor is outside of the dragging bounds for an axis.
        {minX, maxX, minY, maxY} = @_calculateConstraints()

        startSimulationX = @overdrag is true or (@state.offset.x > minX and @state.offset.x < maxX)
        startSimulationY = @overdrag is true or (@state.offset.y > minY and @state.offset.y < maxY)

        if startSimulationX is startSimulationY is false
            return

        velocity = @getVelocity()
        velocityX = velocity.x * @momentumVelocityMultiplier * @speedX
        velocityY = velocity.y * @momentumVelocityMultiplier * @speedY

        @_setupSimulation()
        @_isAnimating = true
        @_isMoving = true

        @_simulation.x.simulator.setState
            x: @state.offset.x
            v: velocityX
        @_simulation.x.start() if startSimulationX

        @_simulation.y.simulator.setState
            x: @state.offset.y
            v: velocityY
        @_simulation.y.start() if startSimulationY

    _stopSimulation: =>
        @_isAnimating = false
        return unless @_simulation
        @_simulation?.x.stop()
        @_simulation?.y.stop()
        @_simulation = null
        # @emit(Events.Move, @layer.point)
        # @emit(Events.DragAnimationDidEnd)

    ### Render ###

    # Default styles should mirror react-native
    styles =
        # For sensible CSS defaults:
        # https://github.com/facebook/css-layout#default-values
        nativeBase:
            boxSizing: 'border-box';
            position: 'relative';
            display: 'flex';
            flexDirection: 'column';
            alignItems: 'stretch';
            flexShrink: 0;
            alignContent: 'flex-start';
            border: '0 solid black';
            margin: '0';
            padding: '0';

        # For ScrollView defaults per react-native:
        # https://github.com/facebook/react-native/blob/master/Libraries/Components/ScrollView/ScrollView.js
        base:
            flex: 1
        contentContainerHorizontal:
            alignSelf: 'flex-start'
            flexDirection: 'row'

        # Needed for ordering horizontal on web
        horizontal:
            alignSelf: 'flex-start'
            flexDirection: 'row'

    render: ->
        horizontal = {}
        contentContainerHorizontal = {}
        if @props.horizontal
            horizontal = styles.horizontal
            contentContainerHorizontal = styles.contentContainerHorizontal

        style = _.extend {}, styles.nativeBase, styles.base,
            overflow: 'hidden'
            transform: 'translate3d(0,0,0)'
        , @props.style, horizontal

        contentContainerOffset = createCSSTransform
            x: @state.offset.x
            y: @state.offset.y

        contentStyle = _.extend {}, styles.nativeBase, @props.contentContainerStyle,
                contentContainerOffset, contentContainerHorizontal

        <div style={normalize(style)}
            ref='scroll'
            onMouseDown={@_onMouseDown}
            onTouchStart={@_onMouseDown}>
            <div style={normalize(contentStyle)}
                ref='content'>
                    {@props.children}
            </div>
        </div>

### Native Props

contentContainerStyle
horizontal
keyboardDismissMode
onScroll
removeClippedSubviews
showsHorizontalScrollIndicator
showsVerticalScrollIndicator

ios
    alwaysBounceHorizontal
    alwaysBounceVertical
    automaticallyAdjustContentInsets
    bounces
    bouncesZoom
    canCancelContentTouches
    centerContent
    contentInset
    contentOffset
    decelerationRate
    directionalLockEnabled
    keyboardShouldPersistTaps
    maximumZoomScale
    minimumZoomScale
    onScrollAnimationEnd
    pagingEnabled
    scrollEnabled
    scrollEventThrottle
    scrollIndicatorInsets
    scrollsToTop
    stickyHeaderIndices
    zoomScale

style
    flexbox
    transforms
    backfaceVisibility
    backgroundColor
    borderColor
    borderTopColor
    borderRightColor
    borderBottomColor
    borderLeftColor
    borderRadius
    borderTopLeftRadius
    borderTopRightRadius
    borderBottomLeftRadius
    borderBottomRightRadius
    borderStyle
    opacity
    overflow
    shadowColor
    shadowOffset
    shadowOpacity
    shadowRadius

###
