EventEmitter = require "eventemitter3"

if window.performance
    getTime = -> window.performance.now() * 1000
else
    getTime = -> Date.now() * 1000

module.exports = new class AnimationLoop extends EventEmitter

    constructor: ->

        # For now we set the delta to a fixed time because using performance.now plus
        # raf seems to cause weird issues.
        @delta = 1/60
        @raf = true

        @start()

        # Workaraound for RAF bug on 10.10
        # https://bugs.webkit.org/show_bug.cgi?id=137599

        # if Utils.webkitVersion() > 600 and Utils.isDesktop()
        #     @raf = false
        #
        # if Utils.webkitVersion() > 600 and Utils.isFramerStudio()
        #     @raf = false

    start: =>
        _timestamp = getTime()

        update = =>
            if @delta
                delta = @delta
            else
                timestamp = getTime()
                delta = (timestamp - _timestamp) / 1000
                _timestamp = timestamp

            @emit("update", delta)
            @emit("render", delta)

        tick = (timestamp) =>

            if @raf
                update()
                window.requestAnimationFrame(tick)
            else
                window.setTimeout =>
                    update()
                    window.requestAnimationFrame(tick)
                , 0

        tick()
