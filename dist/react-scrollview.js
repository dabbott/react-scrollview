(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactScrollView"] = factory(require("react"));
	else
		root["ReactScrollView"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_84__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(35);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(4);
	
	/**
	 * Converts `value` to an object if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Object} Returns the object.
	 */
	function toObject(value) {
	  return isObject(value) ? value : Object(value);
	}
	
	module.exports = toObject;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  defaults: __webpack_require__(71),
	  extend: __webpack_require__(72),
	  isFunction: __webpack_require__(31),
	  filter: __webpack_require__(40)
	};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(26),
	    isLength = __webpack_require__(5),
	    isObjectLike = __webpack_require__(6);
	
	/** `Object#toString` result references. */
	var arrayTag = '[object Array]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};
	
	module.exports = isArray;


/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(26),
	    isArrayLike = __webpack_require__(9),
	    isObject = __webpack_require__(4),
	    shimKeys = __webpack_require__(68);
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? shimKeys : function(object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	      (typeof object != 'function' && isArrayLike(object))) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};
	
	module.exports = keys;


/***/ },
/* 8 */
/***/ function(module, exports) {

	
	/**
	 * Abstract base class for physics simulations
	 *
	 * Simulator classes run physics simulations based on a set of input values
	 * at setup({input values}), and emit an output state {x, v}
	 */
	var Simulator;
	
	module.exports = Simulator = (function() {
	  function Simulator(options) {
	    if (options == null) {
	      options = {};
	    }
	    this._state = {
	      x: 0,
	      v: 0
	    };
	    this.options = null;
	    this.setup(options);
	  }
	
	
	  /**
	   * Setup the simulation with input values
	   * @param  {Object} options Input values
	   */
	
	  Simulator.prototype.setup = function(options) {
	    throw Error("Not implemented");
	  };
	
	
	  /**
	   * Advance the simulation by delta
	   * @param  {Number} delta Advance by delta
	   */
	
	  Simulator.prototype.next = function(delta) {
	    throw Error("Not implemented");
	  };
	
	
	  /**
	   * Call to determine whether the simulation is finished
	   * @return {Boolean} Is the simulation finished?
	   */
	
	  Simulator.prototype.finished = function() {
	    throw Error("Not implemented");
	  };
	
	  Simulator.prototype.setState = function(state) {
	    return this._state = {
	      x: state.x,
	      v: state.v
	    };
	  };
	
	  Simulator.prototype.getState = function() {
	    var state;
	    state = {
	      x: this._state.x,
	      v: this._state.v
	    };
	    return state;
	  };
	
	  Simulator.prototype.setOptions = function(options) {
	    var k, results, v;
	    if (options == null) {
	      options = {};
	    }
	    results = [];
	    for (k in options) {
	      v = options[k];
	      results.push(this.options[k] = v);
	    }
	    return results;
	  };
	
	  return Simulator;

	})();


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(25),
	    isLength = __webpack_require__(5);
	
	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}
	
	module.exports = isArrayLike;


/***/ },
/* 10 */
/***/ function(module, exports) {

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}
	
	module.exports = isIndex;


/***/ },
/* 11 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var el
	
	module.exports = function(){
	
		if(!el && !!global.document){
		  	el = global.document.createElement('div')
		}
	
		if (!el){
			el = {style: {}}
		}
	
		return el
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toUpperFirst = __webpack_require__(13)
	var prefixes     = ["ms", "Moz", "Webkit", "O"]
	
	var el = __webpack_require__(11)
	
	var ELEMENT
	var PREFIX
	
	module.exports = function(key){
	
		if (PREFIX !== undefined){
			return PREFIX
		}
	
		ELEMENT = ELEMENT || el()
	
		var i = 0
		var len = prefixes.length
		var tmp
		var prefix
	
		for (; i < len; i++){
			prefix = prefixes[i]
			tmp = prefix + toUpperFirst(key)
	
			if (typeof ELEMENT.style[tmp] != 'undefined'){
				return PREFIX = prefix
			}
		}
	
		return PREFIX
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(str){
		return str?
				str.charAt(0).toUpperCase() + str.slice(1):
				''
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var AnimationLoop, EventEmitter, getTime,
	  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	EventEmitter = __webpack_require__(19);
	
	if (window.performance) {
	  getTime = function() {
	    return window.performance.now() * 1000;
	  };
	} else {
	  getTime = function() {
	    return Date.now() * 1000;
	  };
	}
	
	module.exports = new (AnimationLoop = (function(superClass) {
	  extend(AnimationLoop, superClass);
	
	  function AnimationLoop() {
	    this.start = bind(this.start, this);
	    this.delta = 1 / 60;
	    this.raf = true;
	    this.start();
	  }
	
	  AnimationLoop.prototype.start = function() {
	    var _timestamp, tick, update;
	    _timestamp = getTime();
	    update = (function(_this) {
	      return function() {
	        var delta, timestamp;
	        if (_this.delta) {
	          delta = _this.delta;
	        } else {
	          timestamp = getTime();
	          delta = (timestamp - _timestamp) / 1000;
	          _timestamp = timestamp;
	        }
	        _this.emit("update", delta);
	        return _this.emit("render", delta);
	      };
	    })(this);
	    tick = (function(_this) {
	      return function(timestamp) {
	        if (_this.raf) {
	          update();
	          return window.requestAnimationFrame(tick);
	        } else {
	          return window.setTimeout(function() {
	            update();
	            return window.requestAnimationFrame(tick);
	          }, 0);
	        }
	      };
	    })(this);
	    return tick();
	  };
	
	  return AnimationLoop;
	
	})(EventEmitter));


/***/ },
/* 15 */
/***/ function(module, exports) {

	var Events, isTouch;
	
	Events = {};
	
	isTouch = function() {
	  return window.ontouchstart === null;
	};
	
	if (isTouch()) {
	  Events.TouchStart = "touchstart";
	  Events.TouchEnd = "touchend";
	  Events.TouchMove = "touchmove";
	} else {
	  Events.TouchStart = "mousedown";
	  Events.TouchEnd = "mouseup";
	  Events.TouchMove = "mousemove";
	}
	
	Events.Click = Events.TouchEnd;
	
	Events.MouseOver = "mouseover";
	
	Events.MouseOut = "mouseout";
	
	Events.MouseMove = "mousemove";
	
	Events.MouseWheel = "mousewheel";
	
	Events.AnimationStart = "start";
	
	Events.AnimationStop = "stop";
	
	Events.AnimationEnd = "end";
	
	Events.AnimationDidStart = "start";
	
	Events.AnimationDidStop = "stop";
	
	Events.AnimationDidEnd = "end";
	
	Events.Scroll = "scroll";
	
	Events.ImageLoaded = "load";
	
	Events.ImageLoadError = "error";
	
	Events.touchEvent = function(event) {
	  var ref, ref1, touchEvent;
	  touchEvent = (ref = event.touches) != null ? ref[0] : void 0;
	  if (touchEvent == null) {
	    touchEvent = (ref1 = event.changedTouches) != null ? ref1[0] : void 0;
	  }
	  if (touchEvent == null) {
	    touchEvent = event;
	  }
	  return touchEvent;
	};
	
	module.exports = Events;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var Integrator, _;
	
	_ = __webpack_require__(2);
	
	
	/**
	 * Usage:
	 *   - Instantiate with a function that takes (state) -> acceleration
	 *   - Call integrateState with state={x, v} and delta
	 */
	
	module.exports = Integrator = (function() {
	  function Integrator(_accelerationForState) {
	    this._accelerationForState = _accelerationForState;
	    if (!_.isFunction(this._accelerationForState)) {
	      console.warn("Integrator: an integrator must be constructed with an acceleration function");
	      this._accelerationForState = function() {
	        return 0;
	      };
	    }
	  }
	
	  Integrator.prototype.integrateState = function(state, dt) {
	    var a, b, c, d, dvdt, dxdt;
	    a = this._evaluateState(state);
	    b = this._evaluateStateWithDerivative(state, dt * 0.5, a);
	    c = this._evaluateStateWithDerivative(state, dt * 0.5, b);
	    d = this._evaluateStateWithDerivative(state, dt, c);
	    dxdt = 1.0 / 6.0 * (a.dx + 2.0 * (b.dx + c.dx) + d.dx);
	    dvdt = 1.0 / 6.0 * (a.dv + 2.0 * (b.dv + c.dv) + d.dv);
	    state.x = state.x + dxdt * dt;
	    state.v = state.v + dvdt * dt;
	    return state;
	  };
	
	  Integrator.prototype._evaluateState = function(initialState) {
	    var output;
	    output = {};
	    output.dx = initialState.v;
	    output.dv = this._accelerationForState(initialState);
	    return output;
	  };
	
	  Integrator.prototype._evaluateStateWithDerivative = function(initialState, dt, derivative) {
	    var output, state;
	    state = {};
	    state.x = initialState.x + derivative.dx * dt;
	    state.v = initialState.v + derivative.dv * dt;
	    output = {};
	    output.dx = state.v;
	    output.dv = this._accelerationForState(state);
	    return output;
	  };
	
	  return Integrator;

	})();


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var FrictionSimulator, Integrator, Simulator, _,
	  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	_ = __webpack_require__(2);
	
	Simulator = __webpack_require__(8);
	
	Integrator = __webpack_require__(16);
	
	module.exports = FrictionSimulator = (function(superClass) {
	  var DEFAULTS;
	
	  extend(FrictionSimulator, superClass);
	
	  function FrictionSimulator() {
	    this.finished = bind(this.finished, this);
	    return FrictionSimulator.__super__.constructor.apply(this, arguments);
	  }
	
	  FrictionSimulator.DEFAULTS = DEFAULTS = {
	    friction: 2,
	    tolerance: 1 / 10
	  };
	
	  FrictionSimulator.prototype.setup = function(options) {
	    if (options == null) {
	      options = {};
	    }
	    this.options = _.defaults(options, DEFAULTS, {
	      velocity: 0,
	      position: 0
	    });
	    this._state = {
	      x: this.options.position,
	      v: this.options.velocity
	    };
	    return this._integrator = new Integrator((function(_this) {
	      return function(state) {
	        return -(_this.options.friction * state.v);
	      };
	    })(this));
	  };
	
	  FrictionSimulator.prototype.next = function(delta) {
	    this._state = this._integrator.integrateState(this._state, delta);
	    return this._state;
	  };
	
	  FrictionSimulator.prototype.finished = function() {
	    return Math.abs(this._state.v) < this.options.tolerance;
	  };
	
	  return FrictionSimulator;
	
	})(Simulator);


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var Integrator, Simulator, SpringSimulator, _,
	  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	_ = __webpack_require__(2);
	
	Simulator = __webpack_require__(8);
	
	Integrator = __webpack_require__(16);
	
	module.exports = SpringSimulator = (function(superClass) {
	  var DEFAULTS;
	
	  extend(SpringSimulator, superClass);
	
	  function SpringSimulator() {
	    this.finished = bind(this.finished, this);
	    return SpringSimulator.__super__.constructor.apply(this, arguments);
	  }
	
	  SpringSimulator.DEFAULTS = DEFAULTS = {
	    tension: 500,
	    friction: 10,
	    tolerance: 1 / 10000
	  };
	
	  SpringSimulator.prototype.setup = function(options) {
	    if (options == null) {
	      options = {};
	    }
	    this.options = this.options = _.defaults(options, DEFAULTS, {
	      velocity: 0,
	      position: 0,
	      offset: 0
	    });
	    this._state = {
	      x: this.options.position,
	      v: this.options.velocity
	    };
	    return this._integrator = new Integrator((function(_this) {
	      return function(state) {
	        return -_this.options.tension * state.x - _this.options.friction * state.v;
	      };
	    })(this));
	  };
	
	  SpringSimulator.prototype.next = function(delta) {
	    this._state = this._integrator.integrateState(this._state, delta);
	    return this.getState();
	  };
	
	  SpringSimulator.prototype.finished = function() {
	    var positionNearZero, velocityNearZero;
	    positionNearZero = Math.abs(this._state.x) < this.options.tolerance;
	    velocityNearZero = Math.abs(this._state.v) < this.options.tolerance;
	    return positionNearZero && velocityNearZero;
	  };
	
	  SpringSimulator.prototype.setState = function(state) {
	    return this._state = {
	      x: state.x - this.options.offset,
	      v: state.v
	    };
	  };
	
	  SpringSimulator.prototype.getState = function() {
	    return {
	      x: this._state.x + this.options.offset,
	      v: this._state.v
	    };
	  };
	
	  return SpringSimulator;
	
	})(Simulator);


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	//
	// We store our EE objects in a plain object whose properties are event names.
	// If `Object.create(null)` is not supported we prefix the event names with a
	// `~` to make sure that the built-in object properties are not overridden or
	// used as an attack vector.
	// We also assume that `Object.create(null)` is available when the event name
	// is an ES6 Symbol.
	//
	var prefix = typeof Object.create !== 'function' ? '~' : false;
	
	/**
	 * Representation of a single EventEmitter function.
	 *
	 * @param {Function} fn Event handler to be called.
	 * @param {Mixed} context Context for function execution.
	 * @param {Boolean} once Only emit once
	 * @api private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}
	
	/**
	 * Minimal EventEmitter interface that is molded against the Node.js
	 * EventEmitter interface.
	 *
	 * @constructor
	 * @api public
	 */
	function EventEmitter() { /* Nothing to set */ }
	
	/**
	 * Holds the assigned EventEmitters by name.
	 *
	 * @type {Object}
	 * @private
	 */
	EventEmitter.prototype._events = undefined;
	
	/**
	 * Return a list of assigned event listeners.
	 *
	 * @param {String} event The events that should be listed.
	 * @param {Boolean} exists We only need to know if there are listeners.
	 * @returns {Array|Boolean}
	 * @api public
	 */
	EventEmitter.prototype.listeners = function listeners(event, exists) {
	  var evt = prefix ? prefix + event : event
	    , available = this._events && this._events[evt];
	
	  if (exists) return !!available;
	  if (!available) return [];
	  if (available.fn) return [available.fn];
	
	  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
	    ee[i] = available[i].fn;
	  }
	
	  return ee;
	};
	
	/**
	 * Emit an event to all registered event listeners.
	 *
	 * @param {String} event The name of the event.
	 * @returns {Boolean} Indication if we've emitted an event.
	 * @api public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  var evt = prefix ? prefix + event : event;
	
	  if (!this._events || !this._events[evt]) return false;
	
	  var listeners = this._events[evt]
	    , len = arguments.length
	    , args
	    , i;
	
	  if ('function' === typeof listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
	
	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context), true;
	      case 2: return listeners.fn.call(listeners.context, a1), true;
	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }
	
	    for (i = 1, args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }
	
	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length
	      , j;
	
	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
	
	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	        default:
	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }
	
	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }
	
	  return true;
	};
	
	/**
	 * Register a new EventListener for the given event.
	 *
	 * @param {String} event Name of the event.
	 * @param {Functon} fn Callback function.
	 * @param {Mixed} context The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  var listener = new EE(fn, context || this)
	    , evt = prefix ? prefix + event : event;
	
	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;
	  else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);
	    else this._events[evt] = [
	      this._events[evt], listener
	    ];
	  }
	
	  return this;
	};
	
	/**
	 * Add an EventListener that's only called once.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} context The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  var listener = new EE(fn, context || this, true)
	    , evt = prefix ? prefix + event : event;
	
	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;
	  else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);
	    else this._events[evt] = [
	      this._events[evt], listener
	    ];
	  }
	
	  return this;
	};
	
	/**
	 * Remove event listeners.
	 *
	 * @param {String} event The event we want to remove.
	 * @param {Function} fn The listener that we need to find.
	 * @param {Mixed} context Only remove listeners matching this context.
	 * @param {Boolean} once Only remove once listeners.
	 * @api public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;
	
	  if (!this._events || !this._events[evt]) return this;
	
	  var listeners = this._events[evt]
	    , events = [];
	
	  if (fn) {
	    if (listeners.fn) {
	      if (
	           listeners.fn !== fn
	        || (once && !listeners.once)
	        || (context && listeners.context !== context)
	      ) {
	        events.push(listeners);
	      }
	    } else {
	      for (var i = 0, length = listeners.length; i < length; i++) {
	        if (
	             listeners[i].fn !== fn
	          || (once && !listeners[i].once)
	          || (context && listeners[i].context !== context)
	        ) {
	          events.push(listeners[i]);
	        }
	      }
	    }
	  }
	
	  //
	  // Reset the array, or remove it completely if we have no more listeners.
	  //
	  if (events.length) {
	    this._events[evt] = events.length === 1 ? events[0] : events;
	  } else {
	    delete this._events[evt];
	  }
	
	  return this;
	};
	
	/**
	 * Remove all listeners or only the listeners for the specified event.
	 *
	 * @param {String} event The event want to remove all listeners for.
	 * @api public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  if (!this._events) return this;
	
	  if (event) delete this._events[prefix ? prefix + event : event];
	  else this._events = prefix ? {} : Object.create(null);
	
	  return this;
	};
	
	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;
	
	//
	// This function doesn't apply anymore.
	//
	EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
	  return this;
	};
	
	//
	// Expose the prefix.
	//
	EventEmitter.prefixed = prefix;
	
	//
	// Expose the module.
	//
	if (true) {
	  module.exports = EventEmitter;
	}


/***/ },
/* 20 */
/***/ function(module, exports) {

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as an array.
	 *
	 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/Web/JavaScript/Reference/Functions/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.restParam(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function restParam(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        rest = Array(length);
	
	    while (++index < length) {
	      rest[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, rest);
	      case 1: return func.call(this, args[0], rest);
	      case 2: return func.call(this, args[0], args[1], rest);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = rest;
	    return func.apply(this, otherArgs);
	  };
	}
	
	module.exports = restParam;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(1);
	
	/**
	 * The base implementation of `get` without support for string paths
	 * and default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} path The path of the property to get.
	 * @param {string} [pathKey] The key representation of path.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path, pathKey) {
	  if (object == null) {
	    return;
	  }
	  if (pathKey !== undefined && pathKey in toObject(object)) {
	    path = [pathKey];
	  }
	  var index = 0,
	      length = path.length;
	
	  while (object != null && index < length) {
	    object = object[path[index++]];
	  }
	  return (index && index == length) ? object : undefined;
	}
	
	module.exports = baseGet;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(52),
	    isObject = __webpack_require__(4),
	    isObjectLike = __webpack_require__(6);
	
	/**
	 * The base implementation of `_.isEqual` without support for `this` binding
	 * `customizer` functions.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparing values.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
	}
	
	module.exports = baseIsEqual;


/***/ },
/* 23 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = baseProperty;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(33);
	
	/**
	 * A specialized version of `baseCallback` which only supports `this` binding
	 * and specifying the number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {Function} func The function to bind.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function bindCallback(func, thisArg, argCount) {
	  if (typeof func != 'function') {
	    return identity;
	  }
	  if (thisArg === undefined) {
	    return func;
	  }
	  switch (argCount) {
	    case 1: return function(value) {
	      return func.call(thisArg, value);
	    };
	    case 3: return function(value, index, collection) {
	      return func.call(thisArg, value, index, collection);
	    };
	    case 4: return function(accumulator, value, index, collection) {
	      return func.call(thisArg, accumulator, value, index, collection);
	    };
	    case 5: return function(value, other, key, object, source) {
	      return func.call(thisArg, value, other, key, object, source);
	    };
	  }
	  return function() {
	    return func.apply(thisArg, arguments);
	  };
	}
	
	module.exports = bindCallback;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(23);
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	module.exports = getLength;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(69);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(3),
	    toObject = __webpack_require__(1);
	
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;
	
	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  var type = typeof value;
	  if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
	    return true;
	  }
	  if (isArray(value)) {
	    return false;
	  }
	  var result = !reIsDeepProp.test(value);
	  return result || (object != null && value in toObject(object));
	}
	
	module.exports = isKey;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(4);
	
	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}
	
	module.exports = isStrictComparable;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(58),
	    isArray = __webpack_require__(3);
	
	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;
	
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;
	
	/**
	 * Converts `value` to property path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Array} Returns the property path array.
	 */
	function toPath(value) {
	  if (isArray(value)) {
	    return value;
	  }
	  var result = [];
	  baseToString(value).replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	}
	
	module.exports = toPath;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(9),
	    isObjectLike = __webpack_require__(6);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Native method references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is classified as an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  return isObjectLike(value) && isArrayLike(value) &&
	    hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	}
	
	module.exports = isArguments;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(4);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 which returns 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var assignWith = __webpack_require__(44),
	    baseAssign = __webpack_require__(45),
	    createAssigner = __webpack_require__(59);
	
	/**
	 * Assigns own enumerable properties of source object(s) to the destination
	 * object. Subsequent sources overwrite property assignments of previous sources.
	 * If `customizer` is provided it's invoked to produce the assigned values.
	 * The `customizer` is bound to `thisArg` and invoked with five arguments:
	 * (objectValue, sourceValue, key, object, source).
	 *
	 * **Note:** This method mutates `object` and is based on
	 * [`Object.assign`](http://ecma-international.org/ecma-262/6.0/#sec-object.assign).
	 *
	 * @static
	 * @memberOf _
	 * @alias extend
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {*} [thisArg] The `this` binding of `customizer`.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
	 * // => { 'user': 'fred', 'age': 40 }
	 *
	 * // using a customizer callback
	 * var defaults = _.partialRight(_.assign, function(value, other) {
	 *   return _.isUndefined(value) ? other : value;
	 * });
	 *
	 * defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
	 * // => { 'user': 'barney', 'age': 36 }
	 */
	var assign = createAssigner(function(object, source, customizer) {
	  return customizer
	    ? assignWith(object, source, customizer)
	    : baseAssign(object, source);
	});
	
	module.exports = assign;


/***/ },
/* 33 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument provided to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 34 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	  'alignItems': 1,
	  'justifyContent': 1,
	  'flex': 1,
	  'flexFlow': 1,
	  'flexGrow': 1,
	  'flexShrink': 1,
	  'flexBasis': 1,
	  'flexDirection': 1,
	  'flexWrap': 1,
	  'alignContent': 1,
	  'alignSelf': 1,
	
	  'userSelect': 1,
	  'transform': 1,
	  'transition': 1,
	  'transformOrigin': 1,
	  'transformStyle': 1,
	  'transitionProperty': 1,
	  'transitionDuration': 1,
	  'transitionTimingFunction': 1,
	  'transitionDelay': 1,
	  'borderImage': 1,
	  'borderImageSlice': 1,
	  'boxShadow': 1,
	  'backgroundClip': 1,
	  'backfaceVisibility': 1,
	  'perspective': 1,
	  'perspectiveOrigin': 1,
	  'animation': 1,
	  'animationDuration': 1,
	  'animationName': 1,
	  'animationDelay': 1,
	  'animationDirection': 1,
	  'animationIterationCount': 1,
	  'animationTimingFunction': 1,
	  'animationPlayState': 1,
	  'animationFillMode': 1,
	  'appearance': 1
	}


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var AnimationLoop, EventBuffer, Events, React, ScrollView, Simulation, _, createCSSTransform, normalize,
	  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	React = __webpack_require__(84);
	
	_ = __webpack_require__(2);
	
	Simulation = __webpack_require__(37);
	
	EventBuffer = __webpack_require__(36);
	
	Events = __webpack_require__(15);
	
	AnimationLoop = __webpack_require__(14);
	
	normalize = __webpack_require__(81);
	
	createCSSTransform = function(style) {
	  var out, x, y;
	  x = style.x + 'px';
	  y = style.y + 'px';
	  out = {
	    transform: 'translate3d(' + x + ',' + y + ',0)'
	  };
	  return out;
	};
	
	module.exports = ScrollView = (function(superClass) {
	  var styles;
	
	  extend(ScrollView, superClass);
	
	  ScrollView.defaultProps = {
	    className: '',
	    style: {},
	    contentContainerStyle: {},
	    horizontal: false,
	    keyboardDismissMode: 'none',
	    onScroll: function() {},
	    removeClippedSubviews: false,
	    showsHorizontalScrollIndicator: false,
	    showsVerticalScrollIndicator: false
	  };
	
	  ScrollView.propTypes = {};
	
	
	  /* React Lifecycle */
	
	  function ScrollView(props) {
	    this._stopSimulation = bind(this._stopSimulation, this);
	    this._onSimulationStop = bind(this._onSimulationStop, this);
	    this._onSimulationStep = bind(this._onSimulationStep, this);
	    this.getVelocity = bind(this.getVelocity, this);
	    this.isBeyondConstraints = bind(this.isBeyondConstraints, this);
	    this.getConstraintsOffset = bind(this.getConstraintsOffset, this);
	    this._constrainPosition = bind(this._constrainPosition, this);
	    this._calculateConstraints = bind(this._calculateConstraints, this);
	    this._clampAndScale = bind(this._clampAndScale, this);
	    this._clamp = bind(this._clamp, this);
	    this._stopRecordingMotion = bind(this._stopRecordingMotion, this);
	    this._continueRecordingMotion = bind(this._continueRecordingMotion, this);
	    this._startRecordingMotion = bind(this._startRecordingMotion, this);
	    this._onMouseUp = bind(this._onMouseUp, this);
	    this._onMouseMove = bind(this._onMouseMove, this);
	    this._onMouseDown = bind(this._onMouseDown, this);
	    this._normalizeMouseEvent = bind(this._normalizeMouseEvent, this);
	    this.componentDidUpdate = bind(this.componentDidUpdate, this);
	    this.componentDidMount = bind(this.componentDidMount, this);
	    this._updateContentOffset = bind(this._updateContentOffset, this);
	    this.state = {
	      offset: {
	        x: 0,
	        y: 0
	      }
	    };
	    this._eventBuffer = new EventBuffer;
	    this.overdragScale = 0.5;
	    this.overdrag = true;
	    this.bounce = true;
	    this.speedX = 1;
	    this.speedY = 1;
	    this.momentum = true;
	    this.momentumOptions = {
	      friction: 2.1,
	      tolerance: 1
	    };
	    this.bounceOptions = {
	      friction: 40,
	      tension: 200,
	      tolerance: 1
	    };
	    this.directionLock = false;
	    this.directionLockThreshold = {
	      x: 10,
	      y: 10
	    };
	    this.velocityTimeout = 100;
	    this.momentumVelocityMultiplier = 890;
	    ScrollView.__super__.constructor.call(this, props);
	  }
	
	  ScrollView.prototype._updateContentOffset = function() {};
	
	  ScrollView.prototype.componentDidMount = function() {
	    return this._setupSimulation();
	  };
	
	  ScrollView.prototype.componentDidUpdate = function() {};
	
	
	  /* Event Handlers */
	
	  ScrollView.prototype._normalizeMouseEvent = function(e) {
	    e.stopPropagation();
	    e.preventDefault();
	    return Events.touchEvent(e);
	  };
	
	  ScrollView.prototype._onMouseDown = function(e) {
	    if (Events.TouchStart === 'mousedown') {
	      if (e.nativeEvent.which !== 1) {
	        return;
	      }
	    }
	    e = this._normalizeMouseEvent(e);
	    this._startRecordingMotion(e);
	    document.addEventListener(Events.TouchMove, this._onMouseMove);
	    return document.addEventListener(Events.TouchEnd, this._onMouseUp);
	  };
	
	  ScrollView.prototype._onMouseMove = function(e) {
	    e = this._normalizeMouseEvent(e);
	    return this._continueRecordingMotion(e);
	  };
	
	  ScrollView.prototype._onMouseUp = function(e) {
	    e = this._normalizeMouseEvent(e);
	    this._stopRecordingMotion(e);
	    document.removeEventListener(Events.TouchMove, this._onMouseMove);
	    return document.removeEventListener(Events.TouchEnd, this._onMouseUp);
	  };
	
	
	  /* Recording Motion */
	
	  ScrollView.prototype._startRecordingMotion = function(e) {
	    this._stopSimulation();
	    this._eventBuffer.push({
	      x: e.clientX,
	      y: e.clientY,
	      t: Date.now()
	    });
	    this._correctedLayerStartPoint = this.state.offset;
	    if (this.bounce) {
	      this._correctedLayerStartPoint = this._constrainPosition(this._correctedLayerStartPoint, 1 / this.overdragScale);
	    }
	    this._cursorStartPoint = {
	      x: e.clientX,
	      y: e.clientY
	    };
	    return this._layerCursorOffset = {
	      x: e.clientX - this._correctedLayerStartPoint.x,
	      y: e.clientY - this._correctedLayerStartPoint.y
	    };
	  };
	
	  ScrollView.prototype._continueRecordingMotion = function(e) {
	    var offset, point;
	    this._eventBuffer.push({
	      x: e.clientX,
	      y: e.clientY,
	      t: Date.now()
	    });
	    offset = {
	      x: e.clientX - this._correctedLayerStartPoint.x - this._layerCursorOffset.x,
	      y: e.clientY - this._correctedLayerStartPoint.y - this._layerCursorOffset.y
	    };
	    point = {
	      x: this._correctedLayerStartPoint.x + offset.x,
	      y: this._correctedLayerStartPoint.y + offset.y
	    };
	    point = this._constrainPosition(point, this.overdragScale);
	    return this.setState({
	      offset: point
	    });
	  };
	
	  ScrollView.prototype._stopRecordingMotion = function(e) {
	    return this._startSimulation();
	  };
	
	
	  /* Constraints */
	
	  ScrollView.prototype._clamp = function(value, min, max) {
	    if (value < min) {
	      value = min;
	    }
	    if (value > max) {
	      value = max;
	    }
	    return value;
	  };
	
	  ScrollView.prototype._clampAndScale = function(value, min, max, scale) {
	    if (value < min) {
	      value = min + (value - min) * scale;
	    }
	    if (value > max) {
	      value = max + (value - max) * scale;
	    }
	    return value;
	  };
	
	  ScrollView.prototype._calculateConstraints = function() {
	    var constraints, contentElement, scrollElement;
	    scrollElement = React.findDOMNode(this.refs.scroll);
	    contentElement = React.findDOMNode(this.refs.content);
	    constraints = {
	      minX: -(contentElement.offsetWidth - scrollElement.clientWidth),
	      maxX: 0,
	      minY: -(contentElement.offsetHeight - scrollElement.clientHeight),
	      maxY: 0
	    };
	    return constraints;
	  };
	
	  ScrollView.prototype._constrainPosition = function(proposedPoint, scale) {
	    var maxX, maxY, minX, minY, point, ref;
	    ref = this._calculateConstraints(), minX = ref.minX, maxX = ref.maxX, minY = ref.minY, maxY = ref.maxY;
	    if (this.overdrag) {
	      point = {
	        x: this._clampAndScale(proposedPoint.x, minX, maxX, scale),
	        y: this._clampAndScale(proposedPoint.y, minY, maxY, scale)
	      };
	    } else {
	      point = {
	        x: this._clamp(proposedPoint.x, minX, maxX),
	        y: this._clamp(proposedPoint.y, minY, maxY)
	      };
	    }
	    return point;
	  };
	
	  ScrollView.prototype.getConstraintsOffset = function() {
	    var constrainedPoint, maxX, maxY, minX, minY, offset, point, ref;
	    ref = this._calculateConstraints(), minX = ref.minX, maxX = ref.maxX, minY = ref.minY, maxY = ref.maxY;
	    point = this.state.offset;
	    constrainedPoint = {
	      x: this._clamp(point.x, minX, maxX),
	      y: this._clamp(point.y, minY, maxY)
	    };
	    offset = {
	      x: point.x - constrainedPoint.x,
	      y: point.y - constrainedPoint.y
	    };
	    return offset;
	  };
	
	  ScrollView.prototype.isBeyondConstraints = function() {
	    var constraintsOffset;
	    constraintsOffset = this.getConstraintsOffset();
	    if (constraintsOffset.x !== 0) {
	      return true;
	    }
	    if (constraintsOffset.y !== 0) {
	      return true;
	    }
	    return false;
	  };
	
	
	  /* Inertial scroll simulation */
	
	  ScrollView.prototype.getVelocity = function() {
	    if (this.isAnimating) {
	      return this._calculateSimulationVelocity();
	    }
	    return this._eventBuffer.getVelocity();
	    return {
	      x: 0,
	      y: 0
	    };
	  };
	
	  ScrollView.prototype._setupSimulation = function() {
	    if (this._simulation) {
	      return;
	    }
	    this._simulation = {
	      x: this._setupSimulationForAxis("x"),
	      y: this._setupSimulationForAxis("y")
	    };
	    return this._updateSimulationConstraints();
	  };
	
	  ScrollView.prototype._setupSimulationForAxis = function(axis) {
	    var simulation;
	    simulation = new Simulation({
	      layer: this.layer,
	      model: "inertial-scroll",
	      modelOptions: {
	        momentum: this.momentumOptions,
	        bounce: this.bounceOptions
	      }
	    });
	    simulation.on(Events.SimulationStep, (function(_this) {
	      return function(state) {
	        return _this._onSimulationStep(axis, state);
	      };
	    })(this));
	    simulation.on(Events.SimulationStop, (function(_this) {
	      return function(state) {
	        return _this._onSimulationStop(axis, state);
	      };
	    })(this));
	    return simulation;
	  };
	
	  ScrollView.prototype._updateSimulationConstraints = function() {
	    var maxX, maxY, minX, minY, ref;
	    if (!this._simulation) {
	      return;
	    }
	    ref = this._calculateConstraints(), minX = ref.minX, maxX = ref.maxX, minY = ref.minY, maxY = ref.maxY;
	    this._simulation.x.simulator.options = {
	      min: minX,
	      max: maxX
	    };
	    return this._simulation.y.simulator.options = {
	      min: minY,
	      max: maxY
	    };
	  };
	
	  ScrollView.prototype._onSimulationStep = function(axis, state) {
	    var delta, maxX, maxY, minX, minY, ref, updatePoint;
	    if (this.bounce) {
	      delta = state.x - this.state.offset[axis];
	    } else {
	      ref = this._calculateConstraints(this._constraints), minX = ref.minX, maxX = ref.maxX, minY = ref.minY, maxY = ref.maxY;
	      if (axis === "x") {
	        delta = Utils.clamp(state.x, minX, maxX) - this.state.offset[axis];
	      }
	      if (axis === "y") {
	        delta = Utils.clamp(state.x, minY, maxY) - this.state.offset[axis];
	      }
	    }
	    updatePoint = this.state.offset;
	    if (axis === "x") {
	      updatePoint[axis] = updatePoint[axis] + (delta * this.speedX);
	    }
	    if (axis === "y") {
	      updatePoint[axis] = updatePoint[axis] + (delta * this.speedY);
	    }
	    this.state.offset[axis] = updatePoint[axis];
	    return this.setState({
	      offset: this.state.offset
	    });
	  };
	
	  ScrollView.prototype._onSimulationStop = function(axis, state) {
	    if (!this._simulation) {
	      return;
	    }
	    if (this._simulation.x.finished() && this._simulation.y.finished()) {
	      return this._stopSimulation();
	    }
	  };
	
	  ScrollView.prototype._startSimulation = function() {
	    var maxX, maxY, minX, minY, ref, startSimulationX, startSimulationY, velocity, velocityX, velocityY;
	    if (!(this.momentum || this.bounce)) {
	      return;
	    }
	    if (this.isBeyondConstraints() === false && this.momentum === false) {
	      return;
	    }
	    if (this.isBeyondConstraints() === false && this.isDragging === false) {
	      return;
	    }
	    ref = this._calculateConstraints(), minX = ref.minX, maxX = ref.maxX, minY = ref.minY, maxY = ref.maxY;
	    startSimulationX = this.overdrag === true || (this.state.offset.x > minX && this.state.offset.x < maxX);
	    startSimulationY = this.overdrag === true || (this.state.offset.y > minY && this.state.offset.y < maxY);
	    if ((startSimulationX === startSimulationY && startSimulationY === false)) {
	      return;
	    }
	    velocity = this.getVelocity();
	    velocityX = velocity.x * this.momentumVelocityMultiplier * this.speedX;
	    velocityY = velocity.y * this.momentumVelocityMultiplier * this.speedY;
	    this._setupSimulation();
	    this._isAnimating = true;
	    this._isMoving = true;
	    this._simulation.x.simulator.setState({
	      x: this.state.offset.x,
	      v: velocityX
	    });
	    if (startSimulationX) {
	      this._simulation.x.start();
	    }
	    this._simulation.y.simulator.setState({
	      x: this.state.offset.y,
	      v: velocityY
	    });
	    if (startSimulationY) {
	      return this._simulation.y.start();
	    }
	  };
	
	  ScrollView.prototype._stopSimulation = function() {
	    var ref, ref1;
	    this._isAnimating = false;
	    if (!this._simulation) {
	      return;
	    }
	    if ((ref = this._simulation) != null) {
	      ref.x.stop();
	    }
	    if ((ref1 = this._simulation) != null) {
	      ref1.y.stop();
	    }
	    return this._simulation = null;
	  };
	
	
	  /* Render */
	
	  styles = {
	    nativeBase: {
	      boxSizing: 'border-box',
	      position: 'relative',
	      display: 'flex',
	      flexDirection: 'column',
	      alignItems: 'stretch',
	      flexShrink: 0,
	      alignContent: 'flex-start',
	      border: '0 solid black',
	      margin: '0',
	      padding: '0'
	    },
	    base: {
	      flex: 1
	    },
	    contentContainerHorizontal: {
	      alignSelf: 'flex-start',
	      flexDirection: 'row'
	    },
	    horizontal: {
	      alignSelf: 'flex-start',
	      flexDirection: 'row'
	    }
	  };
	
	  ScrollView.prototype.render = function() {
	    var contentContainerHorizontal, contentContainerOffset, contentStyle, horizontal, style;
	    horizontal = {};
	    contentContainerHorizontal = {};
	    if (this.props.horizontal) {
	      horizontal = styles.horizontal;
	      contentContainerHorizontal = styles.contentContainerHorizontal;
	    }
	    style = _.extend({}, styles.nativeBase, styles.base, {
	      overflow: 'hidden',
	      transform: 'translate3d(0,0,0)'
	    }, this.props.style, horizontal);
	    contentContainerOffset = createCSSTransform({
	      x: this.state.offset.x,
	      y: this.state.offset.y
	    });
	    contentStyle = _.extend({}, styles.nativeBase, this.props.contentContainerStyle, contentContainerOffset, contentContainerHorizontal);
	    return React.createElement("div", {
	      "style": normalize(style),
	      "ref": 'scroll',
	      "onMouseDown": this._onMouseDown,
	      "onTouchStart": this._onMouseDown
	    }, React.createElement("div", {
	      "style": normalize(contentStyle),
	      "ref": 'content'
	    }, this.props.children));
	  };
	
	  return ScrollView;
	
	})(React.Component);
	
	
	/* Native Props
	
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
	 */


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var EventBuffer, Events, _;
	
	_ = __webpack_require__(2);
	
	Events = {
	  EventBufferReset: "eventbufferreset",
	  EventBufferUpdated: "eventbufferupdated"
	};
	
	module.exports = EventBuffer = (function() {
	  function EventBuffer(options) {
	    if (options == null) {
	      options = {};
	    }
	    this.options = _.defaults(options, {
	      velocityTimeout: 100
	    });
	    this._events = [];
	  }
	
	  EventBuffer.prototype.push = function(event) {
	    return this._events.push(event);
	  };
	
	  EventBuffer.prototype.reset = function() {
	    return this._events.length = 0;
	  };
	
	  EventBuffer.prototype.getLength = function() {
	    return this._events.length;
	  };
	
	  EventBuffer.prototype.getFirst = function() {
	    return this._events[0];
	  };
	
	  EventBuffer.prototype.getOffset = function() {
	    var current, first, offset;
	    if (events.length < 2) {
	      return {
	        x: 0,
	        y: 0
	      };
	    }
	    current = events[events.length - 1];
	    first = events[0];
	    offset = {
	      x: current.x - first.x,
	      y: current.y - first.y
	    };
	    return offset;
	  };
	
	  EventBuffer.prototype.getEvents = function() {
	    var timeout;
	    timeout = Date.now() - this.options.velocityTimeout;
	    return _.filter(this._events, (function(_this) {
	      return function(event) {
	        return event.t > timeout;
	      };
	    })(this));
	  };
	
	  EventBuffer.prototype.getAngle = function() {
	    var events, p1, p2;
	    events = this.getEvents();
	    if (events.length < 2) {
	      return 0;
	    }
	    p1 = events[0];
	    p2 = events[1];
	    return Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
	  };
	
	  EventBuffer.prototype.getVelocity = function() {
	    var current, events, first, time, velocity;
	    events = this.getEvents();
	    if (events.length < 2) {
	      return {
	        x: 0,
	        y: 0
	      };
	    }
	    current = events[events.length - 1];
	    first = events[0];
	    time = current.t - first.t;
	    velocity = {
	      x: (current.x - first.x) / time,
	      y: (current.y - first.y) / time
	    };
	    if (velocity.x === Infinity) {
	      velocity.x = 0;
	    }
	    if (velocity.y === Infinity) {
	      velocity.y = 0;
	    }
	    return velocity;
	  };
	
	  return EventBuffer;

	})();


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var AnimationLoop, EventEmitter, Events, FrictionSimulator, MomentumBounceSimulator, Simulation, SimulatorClasses, SpringSimulator, _,
	  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	_ = __webpack_require__(2);
	
	Events = __webpack_require__(15);
	
	EventEmitter = __webpack_require__(19);
	
	SpringSimulator = __webpack_require__(18);
	
	FrictionSimulator = __webpack_require__(17);
	
	MomentumBounceSimulator = __webpack_require__(38);
	
	AnimationLoop = __webpack_require__(14);
	
	Events.SimulationStart = 'simulationStart';
	
	Events.SimulationStep = 'simulationStep';
	
	Events.SimulationStop = 'simulationStop';
	
	SimulatorClasses = {
	  "spring": SpringSimulator,
	  "friction": FrictionSimulator,
	  "inertial-scroll": MomentumBounceSimulator
	};
	
	module.exports = Simulation = (function(superClass) {
	  extend(Simulation, superClass);
	
	  function Simulation(options) {
	    var SimulatorClass;
	    if (options == null) {
	      options = {};
	    }
	    this._update = bind(this._update, this);
	    this._start = bind(this._start, this);
	    this.start = bind(this.start, this);
	    Simulation.__super__.constructor.call(this, options);
	    this.options = _.defaults(options, {
	      model: "spring",
	      modelOptions: {},
	      debug: false
	    });
	    this._running = false;
	    SimulatorClass = SimulatorClasses[this.options.model] || SpringSimulator;
	    this._simulator = new SimulatorClass(this.options.modelOptions);
	  }
	
	  Simulation.prototype.start = function() {
	    if (this.options.debug) {
	      console.log("Simulation.start " + this._simulator.constructor.name, this.options.modelOptions);
	    }
	    this._start();
	    return true;
	  };
	
	  Simulation.prototype.stop = function(emit) {
	    if (emit == null) {
	      emit = true;
	    }
	    if (!this._running) {
	      return;
	    }
	    this._running = false;
	    if (emit) {
	      this.emit(Events.SimulationStop);
	    }
	    return AnimationLoop.off("update", this._update);
	  };
	
	  Simulation.prototype._start = function() {
	    if (this._running) {
	      return;
	    }
	    this._running = true;
	    this.emit(Events.SimulationStart);
	    return AnimationLoop.on("update", this._update);
	  };
	
	  Simulation.prototype._update = function(delta) {
	    var emit, result;
	    if (this._simulator.finished()) {
	      this.stop(emit = false);
	      this.emit("end");
	      return this.emit(Events.SimulationStop);
	    } else {
	      result = this._simulator.next(delta);
	      return this.emit(Events.SimulationStep, result, delta);
	    }
	  };
	
	
	  /* Passthrough to simulator */
	
	  Object.defineProperties(Simulation.prototype, {
	    simulator: {
	      get: function() {
	        return this._simulator;
	      }
	    }
	  });
	
	  Simulation.prototype.finished = function() {
	    return this._simulator.finished();
	  };
	
	  return Simulation;
	
	})(EventEmitter);


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var FrictionSimulator, MomentumBounceSimulator, Simulator, SpringSimulator, _,
	  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	_ = __webpack_require__(2);
	
	Simulator = __webpack_require__(8);
	
	SpringSimulator = __webpack_require__(18);
	
	FrictionSimulator = __webpack_require__(17);
	
	module.exports = MomentumBounceSimulator = (function(superClass) {
	  var DEFAULTS;
	
	  extend(MomentumBounceSimulator, superClass);
	
	  function MomentumBounceSimulator() {
	    this.finished = bind(this.finished, this);
	    return MomentumBounceSimulator.__super__.constructor.apply(this, arguments);
	  }
	
	  MomentumBounceSimulator.DEFAULTS = DEFAULTS = {
	    momentum: {
	      friction: 2,
	      tolerance: 10
	    },
	    bounce: {
	      tension: 500,
	      friction: 10,
	      tolerance: 1
	    }
	  };
	
	  MomentumBounceSimulator.prototype.setup = function(options) {
	    this.options = _.defaults(options, DEFAULTS, {
	      velocity: 0,
	      position: 0,
	      min: 0,
	      max: 0
	    });
	    this._frictionSimulator = new FrictionSimulator({
	      friction: this.options.momentum.friction,
	      tolerance: this.options.momentum.tolerance,
	      velocity: this.options.velocity,
	      position: this.options.position
	    });
	    this._springSimulator = new SpringSimulator({
	      tension: this.options.bounce.tension,
	      friction: this.options.bounce.friction,
	      tolerance: this.options.bounce.tolerance,
	      velocity: this.options.velocity,
	      position: this.options.position
	    });
	    this._state = {
	      x: this.options.position,
	      v: this.options.velocity
	    };
	    return this._useSpring = false;
	  };
	
	  MomentumBounceSimulator.prototype.next = function(delta) {
	    if (this._useSpring) {
	      this._state = this._springSimulator.next(delta);
	    } else {
	      this._state = this._frictionSimulator.next(delta);
	      this._tryTransitionToSpring(this._state);
	    }
	    return this._state;
	  };
	
	  MomentumBounceSimulator.prototype.finished = function() {
	    if (this._useSpring) {
	      return this._springSimulator.finished();
	    }
	    return this._frictionSimulator.finished();
	  };
	
	  MomentumBounceSimulator.prototype.setState = function(state) {
	    var bound;
	    this._state = {
	      x: state.x,
	      v: state.v
	    };
	    this._frictionSimulator.setState(this._state);
	    if (this._isValidState()) {
	      return this._tryTransitionToSpring();
	    } else {
	      if (this._state.x <= this.options.min) {
	        bound = this.options.min;
	      }
	      if (this._state.x >= this.options.max) {
	        bound = this.options.max;
	      }
	      return this._transitionToSpring(bound);
	    }
	  };
	
	  MomentumBounceSimulator.prototype._tryTransitionToSpring = function(force) {
	    var aboveMaxWithVelocity, belowMinWithVelocity, bound;
	    belowMinWithVelocity = this._state.x < this.options.min && this._state.v <= 0;
	    aboveMaxWithVelocity = this._state.x > this.options.max && this._state.v >= 0;
	    if (belowMinWithVelocity || aboveMaxWithVelocity) {
	      if (belowMinWithVelocity) {
	        bound = this.options.min;
	      }
	      if (aboveMaxWithVelocity) {
	        bound = this.options.max;
	      }
	      return this._transitionToSpring(bound);
	    } else {
	      return this._useSpring = false;
	    }
	  };
	
	  MomentumBounceSimulator.prototype._transitionToSpring = function(bound) {
	    this._useSpring = true;
	    this._springSimulator.options.offset = bound;
	    return this._springSimulator.setState(this._state);
	  };
	
	  MomentumBounceSimulator.prototype._isValidState = function() {
	    var aboveMaxTravelingBack, belowMinTravelingBack, bound, check, friction, solution;
	    belowMinTravelingBack = this._state.x < this.options.min && this._state.v > 0;
	    aboveMaxTravelingBack = this._state.x > this.options.max && this._state.v < 0;
	    check = false;
	    if (belowMinTravelingBack) {
	      bound = this.options.min;
	      check = true;
	    } else if (aboveMaxTravelingBack) {
	      bound = this.options.max;
	      check = true;
	    }
	    if (check) {
	      friction = this._frictionSimulator.options.friction;
	      solution = 1 - (friction * (bound - this._state.x)) / this._state.v;
	      return solution > 0;
	    }
	    return true;
	  };
	
	  return MomentumBounceSimulator;
	
	})(Simulator);


/***/ },
/* 39 */
/***/ function(module, exports) {

	/**
	 * Gets the last element of `array`.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {Array} array The array to query.
	 * @returns {*} Returns the last element of `array`.
	 * @example
	 *
	 * _.last([1, 2, 3]);
	 * // => 3
	 */
	function last(array) {
	  var length = array ? array.length : 0;
	  return length ? array[length - 1] : undefined;
	}
	
	module.exports = last;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var arrayFilter = __webpack_require__(41),
	    baseCallback = __webpack_require__(46),
	    baseFilter = __webpack_require__(49),
	    isArray = __webpack_require__(3);
	
	/**
	 * Iterates over elements of `collection`, returning an array of all elements
	 * `predicate` returns truthy for. The predicate is bound to `thisArg` and
	 * invoked with three arguments: (value, index|key, collection).
	 *
	 * If a property name is provided for `predicate` the created `_.property`
	 * style callback returns the property value of the given element.
	 *
	 * If a value is also provided for `thisArg` the created `_.matchesProperty`
	 * style callback returns `true` for elements that have a matching property
	 * value, else `false`.
	 *
	 * If an object is provided for `predicate` the created `_.matches` style
	 * callback returns `true` for elements that have the properties of the given
	 * object, else `false`.
	 *
	 * @static
	 * @memberOf _
	 * @alias select
	 * @category Collection
	 * @param {Array|Object|string} collection The collection to iterate over.
	 * @param {Function|Object|string} [predicate=_.identity] The function invoked
	 *  per iteration.
	 * @param {*} [thisArg] The `this` binding of `predicate`.
	 * @returns {Array} Returns the new filtered array.
	 * @example
	 *
	 * _.filter([4, 5, 6], function(n) {
	 *   return n % 2 == 0;
	 * });
	 * // => [4, 6]
	 *
	 * var users = [
	 *   { 'user': 'barney', 'age': 36, 'active': true },
	 *   { 'user': 'fred',   'age': 40, 'active': false }
	 * ];
	 *
	 * // using the `_.matches` callback shorthand
	 * _.pluck(_.filter(users, { 'age': 36, 'active': true }), 'user');
	 * // => ['barney']
	 *
	 * // using the `_.matchesProperty` callback shorthand
	 * _.pluck(_.filter(users, 'active', false), 'user');
	 * // => ['fred']
	 *
	 * // using the `_.property` callback shorthand
	 * _.pluck(_.filter(users, 'active'), 'user');
	 * // => ['barney']
	 */
	function filter(collection, predicate, thisArg) {
	  var func = isArray(collection) ? arrayFilter : baseFilter;
	  predicate = baseCallback(predicate, thisArg, 3);
	  return func(collection, predicate);
	}
	
	module.exports = filter;


/***/ },
/* 41 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.filter` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array.length,
	      resIndex = -1,
	      result = [];
	
	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[++resIndex] = value;
	    }
	  }
	  return result;
	}
	
	module.exports = arrayFilter;


/***/ },
/* 42 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = arraySome;


/***/ },
/* 43 */
/***/ function(module, exports) {

	/**
	 * Used by `_.defaults` to customize its `_.assign` use.
	 *
	 * @private
	 * @param {*} objectValue The destination object property value.
	 * @param {*} sourceValue The source object property value.
	 * @returns {*} Returns the value to assign to the destination object.
	 */
	function assignDefaults(objectValue, sourceValue) {
	  return objectValue === undefined ? sourceValue : objectValue;
	}
	
	module.exports = assignDefaults;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(7);
	
	/**
	 * A specialized version of `_.assign` for customizing assigned values without
	 * support for argument juggling, multiple sources, and `this` binding `customizer`
	 * functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {Function} customizer The function to customize assigned values.
	 * @returns {Object} Returns `object`.
	 */
	function assignWith(object, source, customizer) {
	  var index = -1,
	      props = keys(source),
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index],
	        value = object[key],
	        result = customizer(value, source[key], key, object, source);
	
	    if ((result === result ? (result !== value) : (value === value)) ||
	        (value === undefined && !(key in object))) {
	      object[key] = result;
	    }
	  }
	  return object;
	}
	
	module.exports = assignWith;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var baseCopy = __webpack_require__(47),
	    keys = __webpack_require__(7);
	
	/**
	 * The base implementation of `_.assign` without support for argument juggling,
	 * multiple sources, and `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return source == null
	    ? object
	    : baseCopy(source, keys(source), object);
	}
	
	module.exports = baseAssign;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(54),
	    baseMatchesProperty = __webpack_require__(55),
	    bindCallback = __webpack_require__(24),
	    identity = __webpack_require__(33),
	    property = __webpack_require__(75);
	
	/**
	 * The base implementation of `_.callback` which supports specifying the
	 * number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {*} [func=_.identity] The value to convert to a callback.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function baseCallback(func, thisArg, argCount) {
	  var type = typeof func;
	  if (type == 'function') {
	    return thisArg === undefined
	      ? func
	      : bindCallback(func, thisArg, argCount);
	  }
	  if (func == null) {
	    return identity;
	  }
	  if (type == 'object') {
	    return baseMatches(func);
	  }
	  return thisArg === undefined
	    ? property(func)
	    : baseMatchesProperty(func, thisArg);
	}
	
	module.exports = baseCallback;


/***/ },
/* 47 */
/***/ function(module, exports) {

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property names to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @returns {Object} Returns `object`.
	 */
	function baseCopy(source, props, object) {
	  object || (object = {});
	
	  var index = -1,
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index];
	    object[key] = source[key];
	  }
	  return object;
	}
	
	module.exports = baseCopy;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(51),
	    createBaseEach = __webpack_require__(60);
	
	/**
	 * The base implementation of `_.forEach` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array|Object|string} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object|string} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);
	
	module.exports = baseEach;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var baseEach = __webpack_require__(48);
	
	/**
	 * The base implementation of `_.filter` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array|Object|string} collection The collection to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function baseFilter(collection, predicate) {
	  var result = [];
	  baseEach(collection, function(value, index, collection) {
	    if (predicate(value, index, collection)) {
	      result.push(value);
	    }
	  });
	  return result;
	}
	
	module.exports = baseFilter;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(61);
	
	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iteratee functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();
	
	module.exports = baseFor;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(50),
	    keys = __webpack_require__(7);
	
	/**
	 * The base implementation of `_.forOwn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return baseFor(object, iteratee, keys);
	}
	
	module.exports = baseForOwn;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var equalArrays = __webpack_require__(63),
	    equalByTag = __webpack_require__(64),
	    equalObjects = __webpack_require__(65),
	    isArray = __webpack_require__(3),
	    isTypedArray = __webpack_require__(70);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing objects.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA=[]] Tracks traversed `value` objects.
	 * @param {Array} [stackB=[]] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;
	
	  if (!objIsArr) {
	    objTag = objToString.call(object);
	    if (objTag == argsTag) {
	      objTag = objectTag;
	    } else if (objTag != objectTag) {
	      objIsArr = isTypedArray(object);
	    }
	  }
	  if (!othIsArr) {
	    othTag = objToString.call(other);
	    if (othTag == argsTag) {
	      othTag = objectTag;
	    } else if (othTag != objectTag) {
	      othIsArr = isTypedArray(other);
	    }
	  }
	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;
	
	  if (isSameTag && !(objIsArr || objIsObj)) {
	    return equalByTag(object, other, objTag);
	  }
	  if (!isLoose) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	
	    if (objIsWrapped || othIsWrapped) {
	      return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  // For more information on detecting circular references see https://es5.github.io/#JO.
	  stackA || (stackA = []);
	  stackB || (stackB = []);
	
	  var length = stackA.length;
	  while (length--) {
	    if (stackA[length] == object) {
	      return stackB[length] == other;
	    }
	  }
	  // Add `object` and `other` to the stack of traversed objects.
	  stackA.push(object);
	  stackB.push(other);
	
	  var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);
	
	  stackA.pop();
	  stackB.pop();
	
	  return result;
	}
	
	module.exports = baseIsEqualDeep;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(22),
	    toObject = __webpack_require__(1);
	
	/**
	 * The base implementation of `_.isMatch` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Array} matchData The propery names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparing objects.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;
	
	  if (object == null) {
	    return !length;
	  }
	  object = toObject(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];
	
	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var result = customizer ? customizer(objValue, srcValue, key) : undefined;
	      if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
	        return false;
	      }
	    }
	  }
	  return true;
	}
	
	module.exports = baseIsMatch;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(53),
	    getMatchData = __webpack_require__(66),
	    toObject = __webpack_require__(1);
	
	/**
	 * The base implementation of `_.matches` which does not clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    var key = matchData[0][0],
	        value = matchData[0][1];
	
	    return function(object) {
	      if (object == null) {
	        return false;
	      }
	      return object[key] === value && (value !== undefined || (key in toObject(object)));
	    };
	  }
	  return function(object) {
	    return baseIsMatch(object, matchData);
	  };
	}
	
	module.exports = baseMatches;


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(21),
	    baseIsEqual = __webpack_require__(22),
	    baseSlice = __webpack_require__(57),
	    isArray = __webpack_require__(3),
	    isKey = __webpack_require__(27),
	    isStrictComparable = __webpack_require__(28),
	    last = __webpack_require__(39),
	    toObject = __webpack_require__(1),
	    toPath = __webpack_require__(29);
	
	/**
	 * The base implementation of `_.matchesProperty` which does not clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to compare.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  var isArr = isArray(path),
	      isCommon = isKey(path) && isStrictComparable(srcValue),
	      pathKey = (path + '');
	
	  path = toPath(path);
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    var key = pathKey;
	    object = toObject(object);
	    if ((isArr || !isCommon) && !(key in object)) {
	      object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	      if (object == null) {
	        return false;
	      }
	      key = last(path);
	      object = toObject(object);
	    }
	    return object[key] === srcValue
	      ? (srcValue !== undefined || (key in object))
	      : baseIsEqual(srcValue, object[key], undefined, true);
	  };
	}
	
	module.exports = baseMatchesProperty;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(21),
	    toPath = __webpack_require__(29);
	
	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function basePropertyDeep(path) {
	  var pathKey = (path + '');
	  path = toPath(path);
	  return function(object) {
	    return baseGet(object, path, pathKey);
	  };
	}
	
	module.exports = basePropertyDeep;


/***/ },
/* 57 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;
	
	  start = start == null ? 0 : (+start || 0);
	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = (end === undefined || end > length) ? length : (+end || 0);
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;
	
	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}
	
	module.exports = baseSlice;


/***/ },
/* 58 */
/***/ function(module, exports) {

	/**
	 * Converts `value` to a string if it's not one. An empty string is returned
	 * for `null` or `undefined` values.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  return value == null ? '' : (value + '');
	}
	
	module.exports = baseToString;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var bindCallback = __webpack_require__(24),
	    isIterateeCall = __webpack_require__(67),
	    restParam = __webpack_require__(20);
	
	/**
	 * Creates a `_.assign`, `_.defaults`, or `_.merge` function.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return restParam(function(object, sources) {
	    var index = -1,
	        length = object == null ? 0 : sources.length,
	        customizer = length > 2 ? sources[length - 2] : undefined,
	        guard = length > 2 ? sources[2] : undefined,
	        thisArg = length > 1 ? sources[length - 1] : undefined;
	
	    if (typeof customizer == 'function') {
	      customizer = bindCallback(customizer, thisArg, 5);
	      length -= 2;
	    } else {
	      customizer = typeof thisArg == 'function' ? thisArg : undefined;
	      length -= (customizer ? 1 : 0);
	    }
	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, customizer);
	      }
	    }
	    return object;
	  });
	}
	
	module.exports = createAssigner;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(25),
	    isLength = __webpack_require__(5),
	    toObject = __webpack_require__(1);
	
	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    var length = collection ? getLength(collection) : 0;
	    if (!isLength(length)) {
	      return eachFunc(collection, iteratee);
	    }
	    var index = fromRight ? length : -1,
	        iterable = toObject(collection);
	
	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}
	
	module.exports = createBaseEach;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(1);
	
	/**
	 * Creates a base function for `_.forIn` or `_.forInRight`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var iterable = toObject(object),
	        props = keysFunc(object),
	        length = props.length,
	        index = fromRight ? length : -1;
	
	    while ((fromRight ? index-- : ++index < length)) {
	      var key = props[index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}
	
	module.exports = createBaseFor;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var restParam = __webpack_require__(20);
	
	/**
	 * Creates a `_.defaults` or `_.defaultsDeep` function.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @param {Function} customizer The function to customize assigned values.
	 * @returns {Function} Returns the new defaults function.
	 */
	function createDefaults(assigner, customizer) {
	  return restParam(function(args) {
	    var object = args[0];
	    if (object == null) {
	      return object;
	    }
	    args.push(customizer);
	    return assigner.apply(undefined, args);
	  });
	}
	
	module.exports = createDefaults;


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var arraySome = __webpack_require__(42);
	
	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing arrays.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var index = -1,
	      arrLength = array.length,
	      othLength = other.length;
	
	  if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
	    return false;
	  }
	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index],
	        result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;
	
	    if (result !== undefined) {
	      if (result) {
	        continue;
	      }
	      return false;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (isLoose) {
	      if (!arraySome(other, function(othValue) {
	            return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
	          })) {
	        return false;
	      }
	    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = equalArrays;


/***/ },
/* 64 */
/***/ function(module, exports) {

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    stringTag = '[object String]';
	
	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag) {
	  switch (tag) {
	    case boolTag:
	    case dateTag:
	      // Coerce dates and booleans to numbers, dates to milliseconds and booleans
	      // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
	      return +object == +other;
	
	    case errorTag:
	      return object.name == other.name && object.message == other.message;
	
	    case numberTag:
	      // Treat `NaN` vs. `NaN` as equal.
	      return (object != +object)
	        ? other != +other
	        : object == +other;
	
	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings primitives and string
	      // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
	      return object == (other + '');
	  }
	  return false;
	}
	
	module.exports = equalByTag;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(7);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing values.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;
	
	  if (objLength != othLength && !isLoose) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  var skipCtor = isLoose;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key],
	        result = customizer ? customizer(isLoose ? othValue : objValue, isLoose? objValue : othValue, key) : undefined;
	
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
	      return false;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (!skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;
	
	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = equalObjects;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(28),
	    pairs = __webpack_require__(74);
	
	/**
	 * Gets the propery names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = pairs(object),
	      length = result.length;
	
	  while (length--) {
	    result[length][2] = isStrictComparable(result[length][1]);
	  }
	  return result;
	}
	
	module.exports = getMatchData;


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(9),
	    isIndex = __webpack_require__(10),
	    isObject = __webpack_require__(4);
	
	/**
	 * Checks if the provided arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	      ? (isArrayLike(object) && isIndex(index, object.length))
	      : (type == 'string' && index in object)) {
	    var other = object[index];
	    return value === value ? (value === other) : (other !== other);
	  }
	  return false;
	}
	
	module.exports = isIterateeCall;


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(30),
	    isArray = __webpack_require__(3),
	    isIndex = __webpack_require__(10),
	    isLength = __webpack_require__(5),
	    keysIn = __webpack_require__(73);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = keysIn(object),
	      propsLength = props.length,
	      length = propsLength && object.length;
	
	  var allowIndexes = !!length && isLength(length) &&
	    (isArray(object) || isArguments(object));
	
	  var index = -1,
	      result = [];
	
	  while (++index < propsLength) {
	    var key = props[index];
	    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = shimKeys;


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(31),
	    isObjectLike = __webpack_require__(6);
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = isNative;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(5),
	    isObjectLike = __webpack_require__(6);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dateTag] = typedArrayTags[errorTag] =
	typedArrayTags[funcTag] = typedArrayTags[mapTag] =
	typedArrayTags[numberTag] = typedArrayTags[objectTag] =
	typedArrayTags[regexpTag] = typedArrayTags[setTag] =
	typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	function isTypedArray(value) {
	  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
	}
	
	module.exports = isTypedArray;


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var assign = __webpack_require__(32),
	    assignDefaults = __webpack_require__(43),
	    createDefaults = __webpack_require__(62);
	
	/**
	 * Assigns own enumerable properties of source object(s) to the destination
	 * object for all destination properties that resolve to `undefined`. Once a
	 * property is set, additional values of the same property are ignored.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * _.defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
	 * // => { 'user': 'barney', 'age': 36 }
	 */
	var defaults = createDefaults(assign, assignDefaults);
	
	module.exports = defaults;


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(32);


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(30),
	    isArray = __webpack_require__(3),
	    isIndex = __webpack_require__(10),
	    isLength = __webpack_require__(5),
	    isObject = __webpack_require__(4);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;
	
	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;
	
	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = keysIn;


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(7),
	    toObject = __webpack_require__(1);
	
	/**
	 * Creates a two dimensional array of the key-value pairs for `object`,
	 * e.g. `[[key1, value1], [key2, value2]]`.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the new array of key-value pairs.
	 * @example
	 *
	 * _.pairs({ 'barney': 36, 'fred': 40 });
	 * // => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)
	 */
	function pairs(object) {
	  object = toObject(object);
	
	  var index = -1,
	      props = keys(object),
	      length = props.length,
	      result = Array(length);
	
	  while (++index < length) {
	    var key = props[index];
	    result[index] = [key, object[key]];
	  }
	  return result;
	}
	
	module.exports = pairs;


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(23),
	    basePropertyDeep = __webpack_require__(56),
	    isKey = __webpack_require__(27);
	
	/**
	 * Creates a function that returns the property value at `path` on a
	 * given object.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': { 'c': 2 } } },
	 *   { 'a': { 'b': { 'c': 1 } } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b.c'));
	 * // => [2, 1]
	 *
	 * _.pluck(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
	}
	
	module.exports = property;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toUpperFirst = __webpack_require__(13)
	var getPrefix    = __webpack_require__(12)
	var properties   = __webpack_require__(34)
	
	/**
	 * Returns the given key prefixed, if the property is found in the prefixProps map.
	 *
	 * Does not test if the property supports the given value unprefixed.
	 * If you need this, use './getPrefixed' instead
	 */
	module.exports = function(key, value){
	
		if (!properties[key]){
			return key
		}
	
		var prefix = getPrefix(key)
	
		return prefix?
					prefix + toUpperFirst(key):
					key
	}

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getPrefix     = __webpack_require__(12)
	var forcePrefixed = __webpack_require__(76)
	var el            = __webpack_require__(11)
	
	var MEMORY = {}
	var STYLE
	var ELEMENT
	
	module.exports = function(key, value, force){
	
	    ELEMENT = ELEMENT || el()
	    STYLE   = STYLE   ||  ELEMENT.style
	
	    var k = key + ': ' + value
	
	    if (MEMORY[k]){
	        return MEMORY[k]
	    }
	
	    var prefix
	    var prefixed
	    var prefixedValue
	
	    if (force || !(key in STYLE)){
	
	        prefix = getPrefix('appearance')
	
	        if (prefix){
	            prefixed = forcePrefixed(key, value)
	
	            prefixedValue = '-' + prefix.toLowerCase() + '-' + value
	
	            if (prefixed in STYLE){
	                ELEMENT.style[prefixed] = ''
	                ELEMENT.style[prefixed] = prefixedValue
	
	                if (ELEMENT.style[prefixed] !== ''){
	                    value = prefixedValue
	                }
	            }
	        }
	    }
	
	    MEMORY[k] = value
	
	    return value
	}

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getStylePrefixed = __webpack_require__(79)
	var properties       = __webpack_require__(34)
	
	module.exports = function(key, value){
	
		if (!properties[key]){
			return key
		}
	
		return getStylePrefixed(key, value)
	}

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toUpperFirst = __webpack_require__(13)
	var getPrefix    = __webpack_require__(12)
	var el           = __webpack_require__(11)
	
	var MEMORY = {}
	var STYLE
	var ELEMENT
	
	var PREFIX
	
	module.exports = function(key, value){
	
	    ELEMENT = ELEMENT || el()
	    STYLE   = STYLE   || ELEMENT.style
	
	    var k = key// + ': ' + value
	
	    if (MEMORY[k]){
	        return MEMORY[k]
	    }
	
	    var prefix
	    var prefixed
	
	    if (!(key in STYLE)){//we have to prefix
	
	        // if (PREFIX){
	        //     prefix = PREFIX
	        // } else {
	            prefix = getPrefix('appearance')
	
	        //     if (prefix){
	        //         prefix = PREFIX = prefix.toLowerCase()
	        //     }
	        // }
	
	        if (prefix){
	            prefixed = prefix + toUpperFirst(key)
	
	            if (prefixed in STYLE){
	                key = prefixed
	            }
	        }
	    }
	
	    MEMORY[k] = key
	
	    return key
	}

/***/ },
/* 80 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(obj, prop){
		return Object.prototype.hasOwnProperty.call(obj, prop)
	}


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var hasOwn      = __webpack_require__(80)
	var getPrefixed = __webpack_require__(78)
	
	var map      = __webpack_require__(82)
	var plugable = __webpack_require__(83)
	
	function plugins(key, value){
	
		var result = {
			key  : key,
			value: value
		}
	
		;(RESULT.plugins || []).forEach(function(fn){
	
			var tmp = map(function(res){
				return fn(key, value, res)
			}, result)
	
			if (tmp){
				result = tmp
			}
		})
	
		return result
	}
	
	function normalize(key, value){
	
		var result = plugins(key, value)
	
		return map(function(result){
			return {
				key  : getPrefixed(result.key, result.value),
				value: result.value
			}
		}, result)
	
		return result
	}
	
	var RESULT = function(style){
	
		var k
		var item
		var result = {}
	
		for (k in style) if (hasOwn(style, k)){
			item = normalize(k, style[k])
	
			if (!item){
				continue
			}
	
			map(function(item){
				result[item.key] = item.value
			}, item)
		}
	
		return result
	}
	
	module.exports = plugable(RESULT)

/***/ },
/* 82 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function(fn, item){
	
		if (!item){
			return
		}
	
		if (Array.isArray(item)){
			return item.map(fn).filter(function(x){
				return !!x
			})
		} else {
			return fn(item)
		}
	}

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getCssPrefixedValue = __webpack_require__(77)
	
	module.exports = function(target){
		target.plugins = target.plugins || [
			(function(){
				var values = {
					'flex':1,
					'inline-flex':1
				}
	
				return function(key, value){
					if (key === 'display' && value in values){
						return {
							key  : key,
							value: getCssPrefixedValue(key, value, true)
						}
					}
				}
			})()
		]
	
		target.plugin = function(fn){
			target.plugins = target.plugins || []
	
			target.plugins.push(fn)
		}
	
		return target
	}

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_84__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-scrollview.js.map