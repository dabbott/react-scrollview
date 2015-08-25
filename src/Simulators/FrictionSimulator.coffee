_ = require '../Lodash'

Simulator = require "../Simulator"
Integrator = require "../Integrator"

module.exports = class FrictionSimulator extends Simulator

	@DEFAULTS = DEFAULTS =
		friction: 2
		tolerance: 1/10

	setup: (options = {}) ->

		@options = _.defaults options, DEFAULTS,
			velocity: 0
			position: 0

		@_state =
			x: @options.position
			v: @options.velocity

		@_integrator = new Integrator (state) =>
			return - (@options.friction * state.v)

	next: (delta) ->

		@_state = @_integrator.integrateState @_state, delta

		return @_state

	finished: =>

		Math.abs(@_state.v) < @options.tolerance
