_ = require "./Lodash"
Events = require './Events'
EventEmitter = require 'eventemitter3'
SpringSimulator = require "./Simulators/SpringSimulator"
FrictionSimulator = require "./Simulators/FrictionSimulator"
MomentumBounceSimulator = require "./Simulators/MomentumBounceSimulator"
AnimationLoop = require "./AnimationLoop"

Events.SimulationStart = 'simulationStart'
Events.SimulationStep = 'simulationStep'
Events.SimulationStop = 'simulationStop'

SimulatorClasses =
    "spring": SpringSimulator
    "friction": FrictionSimulator
    "inertial-scroll": MomentumBounceSimulator

module.exports = class Simulation extends EventEmitter

    constructor: (options = {}) ->

        super options

        @options = _.defaults options,
            model: "spring"
            modelOptions: {}
            debug: false

        @_running = false

        SimulatorClass = SimulatorClasses[@options.model] or SpringSimulator

        @_simulator = new SimulatorClass @options.modelOptions

    start: =>
        if @options.debug
            console.log "Simulation.start #{@_simulator.constructor.name}", @options.modelOptions
        @_start()
        return true

    stop: (emit = true)->
        return unless @_running
        @_running = false

        @emit(Events.SimulationStop) if emit
        AnimationLoop.off("update", @_update)

    _start: =>
        return if @_running
        @_running = true

        @emit(Events.SimulationStart)
        AnimationLoop.on("update", @_update)

    _update: (delta) =>
        if @_simulator.finished()
            @stop(emit=false)
            @emit("end")
            @emit(Events.SimulationStop)
        else
            result = @_simulator.next(delta)
            @emit(Events.SimulationStep, result, delta)

    ### Passthrough to simulator ###

    Object.defineProperties @prototype,
        simulator:
            get: -> @_simulator

    finished: -> @_simulator.finished()
