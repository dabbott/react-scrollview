_ = require '../Lodash'

Simulator = require "../Simulator"
Integrator = require "../Integrator"

module.exports = class SpringSimulator extends Simulator

	@DEFAULTS = DEFAULTS =
		tension: 500
		friction: 10
		tolerance: 1/10000

	setup: (options = {}) ->

		@options = @options = _.defaults options, DEFAULTS,
			velocity: 0
			position: 0
			offset: 0

		@_state =
			x: @options.position
			v: @options.velocity

		@_integrator = new Integrator (state) =>
			return - @options.tension * state.x - @options.friction * state.v

	next: (delta) ->
		@_state = @_integrator.integrateState(@_state, delta)

		# Return a copy of the state so it cannot be modified
		return @getState()

	finished: =>
		positionNearZero = Math.abs(@_state.x) < @options.tolerance
		velocityNearZero = Math.abs(@_state.v) < @options.tolerance
		return positionNearZero && velocityNearZero

	# Internally, the spring always rests at state.x == 0. However, since it's a
	# common use case to rest at a non-zero position, offset is automatically
	# applied to position for convenience when interfacing with the outside world.
	setState: (state) ->
		@_state =
			x: state.x - @options.offset
			v: state.v

	getState: ->
		return {
			x: @_state.x + @options.offset
			v: @_state.v
		}
