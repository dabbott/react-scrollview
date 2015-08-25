###*
 * Abstract base class for physics simulations
 *
 * Simulator classes run physics simulations based on a set of input values
 * at setup({input values}), and emit an output state {x, v}
###
module.exports = class Simulator

    constructor: (options={}) ->
        @_state =
            x: 0
            v: 0
        @options = null
        @setup options

    ###*
     * Setup the simulation with input values
     * @param  {Object} options Input values
    ###
    setup: (options) ->
        throw Error "Not implemented"

    ###*
     * Advance the simulation by delta
     * @param  {Number} delta Advance by delta
    ###
    next: (delta) ->
        throw Error "Not implemented"

    ###*
     * Call to determine whether the simulation is finished
     * @return {Boolean} Is the simulation finished?
    ###
    finished: ->
        throw Error "Not implemented"

    setState: (state) ->
        @_state =
            x: state.x
            v: state.v

    getState: ->
        state =
            x: @_state.x
            v: @_state.v
        return state

    setOptions: (options={}) ->
        for k, v of options
            @options[k] = v
