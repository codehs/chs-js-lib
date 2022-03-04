var CHSJS = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // node_modules/@babel/runtime/helpers/arrayWithHoles.js
  var require_arrayWithHoles = __commonJS({
    "node_modules/@babel/runtime/helpers/arrayWithHoles.js"(exports, module) {
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr))
          return arr;
      }
      module.exports = _arrayWithHoles;
      module.exports["default"] = module.exports, module.exports.__esModule = true;
    }
  });

  // node_modules/@babel/runtime/helpers/iterableToArrayLimit.js
  var require_iterableToArrayLimit = __commonJS({
    "node_modules/@babel/runtime/helpers/iterableToArrayLimit.js"(exports, module) {
      function _iterableToArrayLimit(arr, i) {
        var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
        if (_i == null)
          return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _s, _e;
        try {
          for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i)
              break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"] != null)
              _i["return"]();
          } finally {
            if (_d)
              throw _e;
          }
        }
        return _arr;
      }
      module.exports = _iterableToArrayLimit;
      module.exports["default"] = module.exports, module.exports.__esModule = true;
    }
  });

  // node_modules/@babel/runtime/helpers/arrayLikeToArray.js
  var require_arrayLikeToArray = __commonJS({
    "node_modules/@babel/runtime/helpers/arrayLikeToArray.js"(exports, module) {
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
      module.exports = _arrayLikeToArray;
      module.exports["default"] = module.exports, module.exports.__esModule = true;
    }
  });

  // node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js
  var require_unsupportedIterableToArray = __commonJS({
    "node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js"(exports, module) {
      var arrayLikeToArray = require_arrayLikeToArray();
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return arrayLikeToArray(o, minLen);
      }
      module.exports = _unsupportedIterableToArray;
      module.exports["default"] = module.exports, module.exports.__esModule = true;
    }
  });

  // node_modules/@babel/runtime/helpers/nonIterableRest.js
  var require_nonIterableRest = __commonJS({
    "node_modules/@babel/runtime/helpers/nonIterableRest.js"(exports, module) {
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      module.exports = _nonIterableRest;
      module.exports["default"] = module.exports, module.exports.__esModule = true;
    }
  });

  // node_modules/@babel/runtime/helpers/slicedToArray.js
  var require_slicedToArray = __commonJS({
    "node_modules/@babel/runtime/helpers/slicedToArray.js"(exports, module) {
      var arrayWithHoles = require_arrayWithHoles();
      var iterableToArrayLimit = require_iterableToArrayLimit();
      var unsupportedIterableToArray = require_unsupportedIterableToArray();
      var nonIterableRest = require_nonIterableRest();
      function _slicedToArray(arr, i) {
        return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
      }
      module.exports = _slicedToArray;
      module.exports["default"] = module.exports, module.exports.__esModule = true;
    }
  });

  // node_modules/@babel/runtime/helpers/classCallCheck.js
  var require_classCallCheck = __commonJS({
    "node_modules/@babel/runtime/helpers/classCallCheck.js"(exports, module) {
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      module.exports = _classCallCheck;
      module.exports["default"] = module.exports, module.exports.__esModule = true;
    }
  });

  // node_modules/@babel/runtime/helpers/createClass.js
  var require_createClass = __commonJS({
    "node_modules/@babel/runtime/helpers/createClass.js"(exports, module) {
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      module.exports = _createClass;
      module.exports["default"] = module.exports, module.exports.__esModule = true;
    }
  });

  // node_modules/automation-events/build/es5/bundle.js
  var require_bundle = __commonJS({
    "node_modules/automation-events/build/es5/bundle.js"(exports, module) {
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require_slicedToArray(), require_classCallCheck(), require_createClass()) : typeof define === "function" && define.amd ? define(["exports", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.automationEvents = {}, global2._slicedToArray, global2._classCallCheck, global2._createClass));
      })(exports, function(exports2, _slicedToArray, _classCallCheck, _createClass) {
        "use strict";
        function _interopDefaultLegacy(e) {
          return e && typeof e === "object" && "default" in e ? e : { "default": e };
        }
        var _slicedToArray__default = /* @__PURE__ */ _interopDefaultLegacy(_slicedToArray);
        var _classCallCheck__default = /* @__PURE__ */ _interopDefaultLegacy(_classCallCheck);
        var _createClass__default = /* @__PURE__ */ _interopDefaultLegacy(_createClass);
        var createExtendedExponentialRampToValueAutomationEvent = function createExtendedExponentialRampToValueAutomationEvent2(value, endTime, insertTime) {
          return {
            endTime,
            insertTime,
            type: "exponentialRampToValue",
            value
          };
        };
        var createExtendedLinearRampToValueAutomationEvent = function createExtendedLinearRampToValueAutomationEvent2(value, endTime, insertTime) {
          return {
            endTime,
            insertTime,
            type: "linearRampToValue",
            value
          };
        };
        var createSetValueAutomationEvent2 = function createSetValueAutomationEvent3(value, startTime) {
          return {
            startTime,
            type: "setValue",
            value
          };
        };
        var createSetValueCurveAutomationEvent2 = function createSetValueCurveAutomationEvent3(values, startTime, duration) {
          return {
            duration,
            startTime,
            type: "setValueCurve",
            values
          };
        };
        var getTargetValueAtTime = function getTargetValueAtTime2(time, valueAtStartTime, _ref) {
          var startTime = _ref.startTime, target = _ref.target, timeConstant = _ref.timeConstant;
          return target + (valueAtStartTime - target) * Math.exp((startTime - time) / timeConstant);
        };
        var isExponentialRampToValueAutomationEvent = function isExponentialRampToValueAutomationEvent2(automationEvent) {
          return automationEvent.type === "exponentialRampToValue";
        };
        var isLinearRampToValueAutomationEvent = function isLinearRampToValueAutomationEvent2(automationEvent) {
          return automationEvent.type === "linearRampToValue";
        };
        var isAnyRampToValueAutomationEvent = function isAnyRampToValueAutomationEvent2(automationEvent) {
          return isExponentialRampToValueAutomationEvent(automationEvent) || isLinearRampToValueAutomationEvent(automationEvent);
        };
        var isSetValueAutomationEvent = function isSetValueAutomationEvent2(automationEvent) {
          return automationEvent.type === "setValue";
        };
        var isSetValueCurveAutomationEvent = function isSetValueCurveAutomationEvent2(automationEvent) {
          return automationEvent.type === "setValueCurve";
        };
        var getValueOfAutomationEventAtIndexAtTime = function getValueOfAutomationEventAtIndexAtTime2(automationEvents, index, time, defaultValue) {
          var automationEvent = automationEvents[index];
          return automationEvent === void 0 ? defaultValue : isAnyRampToValueAutomationEvent(automationEvent) || isSetValueAutomationEvent(automationEvent) ? automationEvent.value : isSetValueCurveAutomationEvent(automationEvent) ? automationEvent.values[automationEvent.values.length - 1] : getTargetValueAtTime(time, getValueOfAutomationEventAtIndexAtTime2(automationEvents, index - 1, automationEvent.startTime, defaultValue), automationEvent);
        };
        var getEndTimeAndValueOfPreviousAutomationEvent = function getEndTimeAndValueOfPreviousAutomationEvent2(automationEvents, index, currentAutomationEvent, nextAutomationEvent, defaultValue) {
          return currentAutomationEvent === void 0 ? [nextAutomationEvent.insertTime, defaultValue] : isAnyRampToValueAutomationEvent(currentAutomationEvent) ? [currentAutomationEvent.endTime, currentAutomationEvent.value] : isSetValueAutomationEvent(currentAutomationEvent) ? [currentAutomationEvent.startTime, currentAutomationEvent.value] : isSetValueCurveAutomationEvent(currentAutomationEvent) ? [currentAutomationEvent.startTime + currentAutomationEvent.duration, currentAutomationEvent.values[currentAutomationEvent.values.length - 1]] : [currentAutomationEvent.startTime, getValueOfAutomationEventAtIndexAtTime(automationEvents, index - 1, currentAutomationEvent.startTime, defaultValue)];
        };
        var isCancelAndHoldAutomationEvent = function isCancelAndHoldAutomationEvent2(automationEvent) {
          return automationEvent.type === "cancelAndHold";
        };
        var isCancelScheduledValuesAutomationEvent = function isCancelScheduledValuesAutomationEvent2(automationEvent) {
          return automationEvent.type === "cancelScheduledValues";
        };
        var getEventTime = function getEventTime2(automationEvent) {
          if (isCancelAndHoldAutomationEvent(automationEvent) || isCancelScheduledValuesAutomationEvent(automationEvent)) {
            return automationEvent.cancelTime;
          }
          if (isExponentialRampToValueAutomationEvent(automationEvent) || isLinearRampToValueAutomationEvent(automationEvent)) {
            return automationEvent.endTime;
          }
          return automationEvent.startTime;
        };
        var getExponentialRampValueAtTime = function getExponentialRampValueAtTime2(time, startTime, valueAtStartTime, _ref) {
          var endTime = _ref.endTime, value = _ref.value;
          if (valueAtStartTime === value) {
            return value;
          }
          if (0 < valueAtStartTime && 0 < value || valueAtStartTime < 0 && value < 0) {
            return valueAtStartTime * Math.pow(value / valueAtStartTime, (time - startTime) / (endTime - startTime));
          }
          return 0;
        };
        var getLinearRampValueAtTime = function getLinearRampValueAtTime2(time, startTime, valueAtStartTime, _ref) {
          var endTime = _ref.endTime, value = _ref.value;
          return valueAtStartTime + (time - startTime) / (endTime - startTime) * (value - valueAtStartTime);
        };
        var interpolateValue = function interpolateValue2(values, theoreticIndex) {
          var lowerIndex = Math.floor(theoreticIndex);
          var upperIndex = Math.ceil(theoreticIndex);
          if (lowerIndex === upperIndex) {
            return values[lowerIndex];
          }
          return (1 - (theoreticIndex - lowerIndex)) * values[lowerIndex] + (1 - (upperIndex - theoreticIndex)) * values[upperIndex];
        };
        var getValueCurveValueAtTime = function getValueCurveValueAtTime2(time, _ref) {
          var duration = _ref.duration, startTime = _ref.startTime, values = _ref.values;
          var theoreticIndex = (time - startTime) / duration * (values.length - 1);
          return interpolateValue(values, theoreticIndex);
        };
        var isSetTargetAutomationEvent = function isSetTargetAutomationEvent2(automationEvent) {
          return automationEvent.type === "setTarget";
        };
        var AutomationEventList2 = /* @__PURE__ */ function(_Symbol$iterator) {
          function AutomationEventList3(defaultValue) {
            _classCallCheck__default["default"](this, AutomationEventList3);
            this._automationEvents = [];
            this._currenTime = 0;
            this._defaultValue = defaultValue;
          }
          _createClass__default["default"](AutomationEventList3, [{
            key: _Symbol$iterator,
            value: function value() {
              return this._automationEvents[Symbol.iterator]();
            }
          }, {
            key: "add",
            value: function add(automationEvent) {
              var eventTime = getEventTime(automationEvent);
              if (isCancelAndHoldAutomationEvent(automationEvent) || isCancelScheduledValuesAutomationEvent(automationEvent)) {
                var index = this._automationEvents.findIndex(function(currentAutomationEvent) {
                  if (isCancelScheduledValuesAutomationEvent(automationEvent) && isSetValueCurveAutomationEvent(currentAutomationEvent)) {
                    return currentAutomationEvent.startTime + currentAutomationEvent.duration >= eventTime;
                  }
                  return getEventTime(currentAutomationEvent) >= eventTime;
                });
                var removedAutomationEvent = this._automationEvents[index];
                if (index !== -1) {
                  this._automationEvents = this._automationEvents.slice(0, index);
                }
                if (isCancelAndHoldAutomationEvent(automationEvent)) {
                  var lastAutomationEvent = this._automationEvents[this._automationEvents.length - 1];
                  if (removedAutomationEvent !== void 0 && isAnyRampToValueAutomationEvent(removedAutomationEvent)) {
                    if (isSetTargetAutomationEvent(lastAutomationEvent)) {
                      throw new Error("The internal list is malformed.");
                    }
                    var startTime = isSetValueCurveAutomationEvent(lastAutomationEvent) ? lastAutomationEvent.startTime + lastAutomationEvent.duration : getEventTime(lastAutomationEvent);
                    var startValue = isSetValueCurveAutomationEvent(lastAutomationEvent) ? lastAutomationEvent.values[lastAutomationEvent.values.length - 1] : lastAutomationEvent.value;
                    var value = isExponentialRampToValueAutomationEvent(removedAutomationEvent) ? getExponentialRampValueAtTime(eventTime, startTime, startValue, removedAutomationEvent) : getLinearRampValueAtTime(eventTime, startTime, startValue, removedAutomationEvent);
                    var truncatedAutomationEvent = isExponentialRampToValueAutomationEvent(removedAutomationEvent) ? createExtendedExponentialRampToValueAutomationEvent(value, eventTime, this._currenTime) : createExtendedLinearRampToValueAutomationEvent(value, eventTime, this._currenTime);
                    this._automationEvents.push(truncatedAutomationEvent);
                  }
                  if (lastAutomationEvent !== void 0 && isSetTargetAutomationEvent(lastAutomationEvent)) {
                    this._automationEvents.push(createSetValueAutomationEvent2(this.getValue(eventTime), eventTime));
                  }
                  if (lastAutomationEvent !== void 0 && isSetValueCurveAutomationEvent(lastAutomationEvent) && lastAutomationEvent.startTime + lastAutomationEvent.duration > eventTime) {
                    this._automationEvents[this._automationEvents.length - 1] = createSetValueCurveAutomationEvent2(new Float32Array([6, 7]), lastAutomationEvent.startTime, eventTime - lastAutomationEvent.startTime);
                  }
                }
              } else {
                var _index = this._automationEvents.findIndex(function(currentAutomationEvent) {
                  return getEventTime(currentAutomationEvent) > eventTime;
                });
                var previousAutomationEvent = _index === -1 ? this._automationEvents[this._automationEvents.length - 1] : this._automationEvents[_index - 1];
                if (previousAutomationEvent !== void 0 && isSetValueCurveAutomationEvent(previousAutomationEvent) && getEventTime(previousAutomationEvent) + previousAutomationEvent.duration > eventTime) {
                  return false;
                }
                var persistentAutomationEvent = isExponentialRampToValueAutomationEvent(automationEvent) ? createExtendedExponentialRampToValueAutomationEvent(automationEvent.value, automationEvent.endTime, this._currenTime) : isLinearRampToValueAutomationEvent(automationEvent) ? createExtendedLinearRampToValueAutomationEvent(automationEvent.value, eventTime, this._currenTime) : automationEvent;
                if (_index === -1) {
                  this._automationEvents.push(persistentAutomationEvent);
                } else {
                  if (isSetValueCurveAutomationEvent(automationEvent) && eventTime + automationEvent.duration > getEventTime(this._automationEvents[_index])) {
                    return false;
                  }
                  this._automationEvents.splice(_index, 0, persistentAutomationEvent);
                }
              }
              return true;
            }
          }, {
            key: "flush",
            value: function flush(time) {
              var index = this._automationEvents.findIndex(function(currentAutomationEvent) {
                return getEventTime(currentAutomationEvent) > time;
              });
              if (index > 1) {
                var remainingAutomationEvents = this._automationEvents.slice(index - 1);
                var firstRemainingAutomationEvent = remainingAutomationEvents[0];
                if (isSetTargetAutomationEvent(firstRemainingAutomationEvent)) {
                  remainingAutomationEvents.unshift(createSetValueAutomationEvent2(getValueOfAutomationEventAtIndexAtTime(this._automationEvents, index - 2, firstRemainingAutomationEvent.startTime, this._defaultValue), firstRemainingAutomationEvent.startTime));
                }
                this._automationEvents = remainingAutomationEvents;
              }
            }
          }, {
            key: "getValue",
            value: function getValue(time) {
              if (this._automationEvents.length === 0) {
                return this._defaultValue;
              }
              var indexOfNextEvent = this._automationEvents.findIndex(function(automationEvent) {
                return getEventTime(automationEvent) > time;
              });
              var nextAutomationEvent = this._automationEvents[indexOfNextEvent];
              var indexOfCurrentEvent = (indexOfNextEvent === -1 ? this._automationEvents.length : indexOfNextEvent) - 1;
              var currentAutomationEvent = this._automationEvents[indexOfCurrentEvent];
              if (currentAutomationEvent !== void 0 && isSetTargetAutomationEvent(currentAutomationEvent) && (nextAutomationEvent === void 0 || !isAnyRampToValueAutomationEvent(nextAutomationEvent) || nextAutomationEvent.insertTime > time)) {
                return getTargetValueAtTime(time, getValueOfAutomationEventAtIndexAtTime(this._automationEvents, indexOfCurrentEvent - 1, currentAutomationEvent.startTime, this._defaultValue), currentAutomationEvent);
              }
              if (currentAutomationEvent !== void 0 && isSetValueAutomationEvent(currentAutomationEvent) && (nextAutomationEvent === void 0 || !isAnyRampToValueAutomationEvent(nextAutomationEvent))) {
                return currentAutomationEvent.value;
              }
              if (currentAutomationEvent !== void 0 && isSetValueCurveAutomationEvent(currentAutomationEvent) && (nextAutomationEvent === void 0 || !isAnyRampToValueAutomationEvent(nextAutomationEvent) || currentAutomationEvent.startTime + currentAutomationEvent.duration > time)) {
                if (time < currentAutomationEvent.startTime + currentAutomationEvent.duration) {
                  return getValueCurveValueAtTime(time, currentAutomationEvent);
                }
                return currentAutomationEvent.values[currentAutomationEvent.values.length - 1];
              }
              if (currentAutomationEvent !== void 0 && isAnyRampToValueAutomationEvent(currentAutomationEvent) && (nextAutomationEvent === void 0 || !isAnyRampToValueAutomationEvent(nextAutomationEvent))) {
                return currentAutomationEvent.value;
              }
              if (nextAutomationEvent !== void 0 && isExponentialRampToValueAutomationEvent(nextAutomationEvent)) {
                var _getEndTimeAndValueOf = getEndTimeAndValueOfPreviousAutomationEvent(this._automationEvents, indexOfCurrentEvent, currentAutomationEvent, nextAutomationEvent, this._defaultValue), _getEndTimeAndValueOf2 = _slicedToArray__default["default"](_getEndTimeAndValueOf, 2), startTime = _getEndTimeAndValueOf2[0], value = _getEndTimeAndValueOf2[1];
                return getExponentialRampValueAtTime(time, startTime, value, nextAutomationEvent);
              }
              if (nextAutomationEvent !== void 0 && isLinearRampToValueAutomationEvent(nextAutomationEvent)) {
                var _getEndTimeAndValueOf3 = getEndTimeAndValueOfPreviousAutomationEvent(this._automationEvents, indexOfCurrentEvent, currentAutomationEvent, nextAutomationEvent, this._defaultValue), _getEndTimeAndValueOf4 = _slicedToArray__default["default"](_getEndTimeAndValueOf3, 2), _startTime = _getEndTimeAndValueOf4[0], _value = _getEndTimeAndValueOf4[1];
                return getLinearRampValueAtTime(time, _startTime, _value, nextAutomationEvent);
              }
              return this._defaultValue;
            }
          }]);
          return AutomationEventList3;
        }(Symbol.iterator);
        var createCancelAndHoldAutomationEvent2 = function createCancelAndHoldAutomationEvent3(cancelTime) {
          return {
            cancelTime,
            type: "cancelAndHold"
          };
        };
        var createCancelScheduledValuesAutomationEvent2 = function createCancelScheduledValuesAutomationEvent3(cancelTime) {
          return {
            cancelTime,
            type: "cancelScheduledValues"
          };
        };
        var createExponentialRampToValueAutomationEvent2 = function createExponentialRampToValueAutomationEvent3(value, endTime) {
          return {
            endTime,
            type: "exponentialRampToValue",
            value
          };
        };
        var createLinearRampToValueAutomationEvent2 = function createLinearRampToValueAutomationEvent3(value, endTime) {
          return {
            endTime,
            type: "linearRampToValue",
            value
          };
        };
        var createSetTargetAutomationEvent2 = function createSetTargetAutomationEvent3(target, startTime, timeConstant) {
          return {
            startTime,
            target,
            timeConstant,
            type: "setTarget"
          };
        };
        exports2.AutomationEventList = AutomationEventList2;
        exports2.createCancelAndHoldAutomationEvent = createCancelAndHoldAutomationEvent2;
        exports2.createCancelScheduledValuesAutomationEvent = createCancelScheduledValuesAutomationEvent2;
        exports2.createExponentialRampToValueAutomationEvent = createExponentialRampToValueAutomationEvent2;
        exports2.createLinearRampToValueAutomationEvent = createLinearRampToValueAutomationEvent2;
        exports2.createSetTargetAutomationEvent = createSetTargetAutomationEvent2;
        exports2.createSetValueAutomationEvent = createSetValueAutomationEvent2;
        exports2.createSetValueCurveAutomationEvent = createSetValueCurveAutomationEvent2;
        Object.defineProperty(exports2, "__esModule", { value: true });
      });
    }
  });

  // node_modules/tone/node_modules/tslib/tslib.js
  var require_tslib = __commonJS({
    "node_modules/tone/node_modules/tslib/tslib.js"(exports, module) {
      var __extends2;
      var __assign2;
      var __rest2;
      var __decorate2;
      var __param2;
      var __metadata2;
      var __awaiter2;
      var __generator2;
      var __exportStar2;
      var __values2;
      var __read2;
      var __spread2;
      var __spreadArrays2;
      var __spreadArray2;
      var __await2;
      var __asyncGenerator2;
      var __asyncDelegator2;
      var __asyncValues2;
      var __makeTemplateObject2;
      var __importStar2;
      var __importDefault2;
      var __classPrivateFieldGet2;
      var __classPrivateFieldSet2;
      var __createBinding2;
      (function(factory) {
        var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
        if (typeof define === "function" && define.amd) {
          define("tslib", ["exports"], function(exports2) {
            factory(createExporter(root, createExporter(exports2)));
          });
        } else if (typeof module === "object" && typeof module.exports === "object") {
          factory(createExporter(root, createExporter(module.exports)));
        } else {
          factory(createExporter(root));
        }
        function createExporter(exports2, previous) {
          if (exports2 !== root) {
            if (typeof Object.create === "function") {
              Object.defineProperty(exports2, "__esModule", { value: true });
            } else {
              exports2.__esModule = true;
            }
          }
          return function(id, v) {
            return exports2[id] = previous ? previous(id, v) : v;
          };
        }
      })(function(exporter) {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p))
              d[p] = b[p];
        };
        __extends2 = function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
        __assign2 = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        __rest2 = function(s, e) {
          var t = {};
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
              t[p] = s[p];
          if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
            }
          return t;
        };
        __decorate2 = function(decorators, target, key, desc) {
          var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
          if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
        __param2 = function(paramIndex, decorator) {
          return function(target, key) {
            decorator(target, key, paramIndex);
          };
        };
        __metadata2 = function(metadataKey, metadataValue) {
          if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
        };
        __awaiter2 = function(thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P ? value : new P(function(resolve) {
              resolve(value);
            });
          }
          return new (P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        };
        __generator2 = function(thisArg, body) {
          var _ = { label: 0, sent: function() {
            if (t[0] & 1)
              throw t[1];
            return t[1];
          }, trys: [], ops: [] }, f, y, t, g;
          return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
            return this;
          }), g;
          function verb(n) {
            return function(v) {
              return step([n, v]);
            };
          }
          function step(op) {
            if (f)
              throw new TypeError("Generator is already executing.");
            while (_)
              try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                  return t;
                if (y = 0, t)
                  op = [op[0] & 2, t.value];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t = op;
                    break;
                  case 4:
                    _.label++;
                    return { value: op[1], done: false };
                  case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;
                  case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                  default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                      _ = 0;
                      continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                      _.label = op[1];
                      break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                      _.label = t[1];
                      t = op;
                      break;
                    }
                    if (t && _.label < t[2]) {
                      _.label = t[2];
                      _.ops.push(op);
                      break;
                    }
                    if (t[2])
                      _.ops.pop();
                    _.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _);
              } catch (e) {
                op = [6, e];
                y = 0;
              } finally {
                f = t = 0;
              }
            if (op[0] & 5)
              throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
          }
        };
        __exportStar2 = function(m, o) {
          for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
              __createBinding2(o, m, p);
        };
        __createBinding2 = Object.create ? function(o, m, k, k2) {
          if (k2 === void 0)
            k2 = k;
          Object.defineProperty(o, k2, { enumerable: true, get: function() {
            return m[k];
          } });
        } : function(o, m, k, k2) {
          if (k2 === void 0)
            k2 = k;
          o[k2] = m[k];
        };
        __values2 = function(o) {
          var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
          if (m)
            return m.call(o);
          if (o && typeof o.length === "number")
            return {
              next: function() {
                if (o && i >= o.length)
                  o = void 0;
                return { value: o && o[i++], done: !o };
              }
            };
          throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
        __read2 = function(o, n) {
          var m = typeof Symbol === "function" && o[Symbol.iterator];
          if (!m)
            return o;
          var i = m.call(o), r, ar = [], e;
          try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
              ar.push(r.value);
          } catch (error) {
            e = { error };
          } finally {
            try {
              if (r && !r.done && (m = i["return"]))
                m.call(i);
            } finally {
              if (e)
                throw e.error;
            }
          }
          return ar;
        };
        __spread2 = function() {
          for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read2(arguments[i]));
          return ar;
        };
        __spreadArrays2 = function() {
          for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
          for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
              r[k] = a[j];
          return r;
        };
        __spreadArray2 = function(to, from, pack) {
          if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
              if (ar || !(i in from)) {
                if (!ar)
                  ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
              }
            }
          return to.concat(ar || Array.prototype.slice.call(from));
        };
        __await2 = function(v) {
          return this instanceof __await2 ? (this.v = v, this) : new __await2(v);
        };
        __asyncGenerator2 = function(thisArg, _arguments, generator) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var g = generator.apply(thisArg, _arguments || []), i, q = [];
          return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i;
          function verb(n) {
            if (g[n])
              i[n] = function(v) {
                return new Promise(function(a, b) {
                  q.push([n, v, a, b]) > 1 || resume(n, v);
                });
              };
          }
          function resume(n, v) {
            try {
              step(g[n](v));
            } catch (e) {
              settle(q[0][3], e);
            }
          }
          function step(r) {
            r.value instanceof __await2 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
          }
          function fulfill(value) {
            resume("next", value);
          }
          function reject(value) {
            resume("throw", value);
          }
          function settle(f, v) {
            if (f(v), q.shift(), q.length)
              resume(q[0][0], q[0][1]);
          }
        };
        __asyncDelegator2 = function(o) {
          var i, p;
          return i = {}, verb("next"), verb("throw", function(e) {
            throw e;
          }), verb("return"), i[Symbol.iterator] = function() {
            return this;
          }, i;
          function verb(n, f) {
            i[n] = o[n] ? function(v) {
              return (p = !p) ? { value: __await2(o[n](v)), done: n === "return" } : f ? f(v) : v;
            } : f;
          }
        };
        __asyncValues2 = function(o) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var m = o[Symbol.asyncIterator], i;
          return m ? m.call(o) : (o = typeof __values2 === "function" ? __values2(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i);
          function verb(n) {
            i[n] = o[n] && function(v) {
              return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
              });
            };
          }
          function settle(resolve, reject, d, v) {
            Promise.resolve(v).then(function(v2) {
              resolve({ value: v2, done: d });
            }, reject);
          }
        };
        __makeTemplateObject2 = function(cooked, raw) {
          if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
          } else {
            cooked.raw = raw;
          }
          return cooked;
        };
        var __setModuleDefault = Object.create ? function(o, v) {
          Object.defineProperty(o, "default", { enumerable: true, value: v });
        } : function(o, v) {
          o["default"] = v;
        };
        __importStar2 = function(mod) {
          if (mod && mod.__esModule)
            return mod;
          var result = {};
          if (mod != null) {
            for (var k in mod)
              if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                __createBinding2(result, mod, k);
          }
          __setModuleDefault(result, mod);
          return result;
        };
        __importDefault2 = function(mod) {
          return mod && mod.__esModule ? mod : { "default": mod };
        };
        __classPrivateFieldGet2 = function(receiver, state, kind, f) {
          if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
          if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
        };
        __classPrivateFieldSet2 = function(receiver, state, value, kind, f) {
          if (kind === "m")
            throw new TypeError("Private method is not writable");
          if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
          if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
        };
        exporter("__extends", __extends2);
        exporter("__assign", __assign2);
        exporter("__rest", __rest2);
        exporter("__decorate", __decorate2);
        exporter("__param", __param2);
        exporter("__metadata", __metadata2);
        exporter("__awaiter", __awaiter2);
        exporter("__generator", __generator2);
        exporter("__exportStar", __exportStar2);
        exporter("__createBinding", __createBinding2);
        exporter("__values", __values2);
        exporter("__read", __read2);
        exporter("__spread", __spread2);
        exporter("__spreadArrays", __spreadArrays2);
        exporter("__spreadArray", __spreadArray2);
        exporter("__await", __await2);
        exporter("__asyncGenerator", __asyncGenerator2);
        exporter("__asyncDelegator", __asyncDelegator2);
        exporter("__asyncValues", __asyncValues2);
        exporter("__makeTemplateObject", __makeTemplateObject2);
        exporter("__importStar", __importStar2);
        exporter("__importDefault", __importDefault2);
        exporter("__classPrivateFieldGet", __classPrivateFieldGet2);
        exporter("__classPrivateFieldSet", __classPrivateFieldSet2);
      });
    }
  });

  // src/console/index.js
  var Console = class {
    constructor(options = {}) {
      var _a3, _b, _c;
      this.onPrompt = (_a3 = options.onPrompt) != null ? _a3 : window.prompt.bind(window);
      this.onPrint = (_b = options.onPrint) != null ? _b : window.console.log.bind(window.console);
      this.onClear = (_c = options.onClear) != null ? _c : () => {
      };
    }
    configure(options = {}) {
      var _a3, _b, _c;
      this.onPrompt = (_a3 = options.onPrompt) != null ? _a3 : this.onPrompt;
      this.onPrint = (_b = options.onPrint) != null ? _b : this.onPrint;
      this.onClear = (_c = options.onClear) != null ? _c : this.onClear;
    }
    readLinePrivate(promptString) {
      const input = this.onPrompt(promptString);
      return input;
    }
    clear() {
      this.onClear();
    }
    print(...args) {
      if (args.length < 1) {
        throw new Error("You should pass at least 1 argument to print");
      }
      this.onPrint(...args);
    }
    println(value) {
      if (arguments.length === 0) {
        value = "";
      } else if (arguments.length !== 1) {
        throw new Error("You should pass exactly 1 argument to println");
      }
      this.print(value, "\n");
    }
    readNumber(str, parseFn, errorMsgType) {
      const DEFAULT = 0;
      const INFINITE_LOOP_CHECK = 100;
      let promptString = str;
      let loopCount = 0;
      let successful = false;
      let parsedResult;
      while (true) {
        const result = this.readLinePrivate(promptString);
        if (result === null) {
          parsedResult = null;
          successful = false;
          break;
        }
        parsedResult = parseFn(result);
        if (!isNaN(parsedResult)) {
          successful = true;
          break;
        }
        if (parsedResult === null) {
          successful = false;
          break;
        }
        if (loopCount > INFINITE_LOOP_CHECK) {
          successful = false;
          parsedResult = DEFAULT;
          break;
        }
        promptString = `'${result}' was not ${errorMsgType}. Please try again.
${str}`;
        loopCount++;
      }
      if (successful) {
        this.print(str);
        this.println(parsedResult);
      }
      return parsedResult;
    }
    readLine(str) {
      if (arguments.length !== 1) {
        throw new Error("You should pass exactly 1 argument to readLine");
      }
      const result = this.readLinePrivate(str);
      this.print(str);
      this.println(result);
      return result;
    }
    readBoolean(str) {
      if (arguments.length !== 1) {
        throw new Error("You should pass exactly 1 argument to readBoolean");
      }
      return this.readNumber(str, (line) => {
        if (line === null) {
          return NaN;
        }
        line = line.toLowerCase();
        if (line === "true" || line === "yes") {
          return true;
        }
        if (line === "false" || line === "no") {
          return false;
        }
        return NaN;
      }, "a boolean (true/false)");
    }
    readInt(str) {
      if (arguments.length !== 1) {
        throw new Error("You should pass exactly 1 argument to readInt");
      }
      return this.readNumber(str, function(x) {
        var resultInt = parseInt(x);
        var resultFloat = parseFloat(x);
        if (resultInt === resultFloat) {
          return resultInt;
        }
        return NaN;
      }, "an integer");
    }
    readFloat(str) {
      if (arguments.length !== 1) {
        throw new Error("You should pass exactly 1 argument to readFloat");
      }
      return this.readNumber(str, parseFloat, "a float");
    }
  };

  // src/datastructures/queue.js
  "use strict";
  var Queue = class extends Array {
    constructor() {
      super(...arguments);
      __publicField(this, "enqueue", this.push);
      __publicField(this, "dequeue", this.shift);
    }
    size() {
      return this.length;
    }
    clear() {
      this.length = 0;
    }
    peek() {
      return this[0];
    }
    hasNext() {
      return !this.isEmpty();
    }
    isEmpty() {
      return this.length === 0;
    }
  };

  // src/datastructures/stack.js
  var Stack = class extends Array {
    size() {
      return this.length;
    }
    clear() {
      this.length = 0;
    }
    peek() {
      return this[this.length - 1];
    }
    hasNext() {
      return !this.isEmpty();
    }
    isEmpty() {
      return this.length === 0;
    }
  };

  // src/datastructures/grid.js
  var Grid = class {
    constructor(rows, cols) {
      __publicField(this, "type", "Grid");
      if (arguments.length !== 2) {
        throw new Error("You should pass exactly 2 arguments to `new Grid(rows, cols)`");
      }
      if (typeof rows !== "number" || !isFinite(rows)) {
        throw new TypeError("Invalid value for `rows`. Make sure you are passing finite numbers to `new Grid(rows, cols)`.");
      }
      if (typeof cols !== "number" || !isFinite(cols)) {
        throw new TypeError("Invalid value for `cols`. Make sure you are passing finite numbers to `new Grid(rows, cols)`.");
      }
      rows = Math.max(0, rows);
      cols = Math.max(0, cols);
      this.grid = new Array(rows);
      for (let i = 0; i < rows; i++) {
        this.grid[i] = new Array(cols);
      }
    }
    initFromArray(arr) {
      if (arguments.length !== 1) {
        throw new Error("You should pass exactly 1 argument to `initFromArray`");
      }
      if (!Array.isArray(arr)) {
        throw new Error("Invalid value passed to `initFromArray`. Make sure you are passing an array.");
      }
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          if (this.inBounds(i, j)) {
            this.set(i, j, arr[i][j]);
          }
        }
      }
      return this;
    }
    init(value) {
      if (arguments.length !== 1) {
        throw new Error("You should pass exactly 1 argument to `init`.");
      }
      if (typeof value === "number" && !isFinite(value)) {
        throw new TypeError("Non finite number passed to `init`. If you are passing a number, make sure it is a finite number.");
      }
      for (let i = 0; i < this.numRows(); i++) {
        for (let j = 0; j < this.numCols(); j++) {
          this.grid[i][j] = value;
        }
      }
      return this;
    }
    get(row, col) {
      if (arguments.length !== 2) {
        throw new Error("You should pass exactly 2 arguments to `get(row, col)`.");
      }
      if (typeof row !== "number" || !isFinite(row)) {
        throw new TypeError("Invalid value for `row`. Make sure you are passing finite numbers to `get(row, col)`.");
      }
      if (typeof col !== "number" || !isFinite(col)) {
        throw new TypeError("Invalid value for `col`. Make sure you are passing finite numbers to `get(row, col)`.");
      }
      return this.grid[row][col];
    }
    set(row, col, value) {
      if (arguments.length !== 3) {
        throw new Error("You should pass exactly 3 arguments to `set(row, col, value)`.");
      }
      if (typeof row !== "number" || !isFinite(row)) {
        throw new TypeError("Invalid value for `row`. You passed a value of type " + typeof row + ". Make sure you are passing a number.");
      }
      if (typeof col !== "number" || !isFinite(col)) {
        throw new TypeError("Invalid value for `col`. You passed a value of type " + typeof col + ". Make sure you are passing a number.");
      }
      if (typeof value === "number" && !isFinite(value)) {
        throw new TypeError("Non finite value passed to `set`. If you are passing a number, make sure it is a finite number.");
      }
      this.grid[row][col] = value;
    }
    numRows() {
      return this.grid.length;
    }
    numCols() {
      return this.grid[0].length;
    }
    inBounds(row, col) {
      if (arguments.length !== 2) {
        throw new Error("You should pass exactly 2 arguments to `inBounds(row, col)`.");
      }
      if (typeof row !== "number" || !isFinite(row)) {
        throw new TypeError("Invalid value for `row`. Make sure you are passing finite numbers to `inBounds(row, col)`.");
      }
      if (typeof col !== "number" || !isFinite(col)) {
        throw new TypeError("Invalid value for `col`. Make sure you are passing finite numbers to `inBounds(row, col)`.");
      }
      if (row < 0 || col < 0) {
        return false;
      }
      if (row >= this.numRows() || col >= this.numCols()) {
        return false;
      }
      return true;
    }
    toList() {
      let list = [];
      for (let i = 0; i < this.grid.length; i++) {
        for (let j = 0; j < this.grid[0].length; j++) {
          list.push([i, j, this.grid[i][j]]);
        }
      }
      return list;
    }
    toString() {
      let result = "";
      for (let i = 0; i < this.numRows(); i++) {
        for (let j = 0; j < this.numCols(); j++) {
          result += this.get(i, j) + " ";
        }
        result += "\n";
      }
      return result;
    }
  };
  var grid_default = Grid;

  // src/datastructures/set.js
  var ExtendedSet = class extends Set {
    constructor() {
      super(...arguments);
      __publicField(this, "remove", this.delete);
      __publicField(this, "contains", this.has);
    }
    isEmpty() {
      return this.size === 0;
    }
    getKey(elem) {
      return elem.toString();
    }
    elems() {
      return Array.from(this);
    }
    union(other) {
      return new ExtendedSet([...this, ...other]);
    }
    intersect(other) {
      return new ExtendedSet([...this].filter((el) => other.has(el)));
    }
    toString() {
      return [...this].reduce((str, el, i) => {
        const lastElement = i === this.size - 1;
        return str + `${el}${lastElement ? "}" : ", "}`;
      }, "Set: {");
    }
  };
  var set_default = ExtendedSet;

  // src/graphics/thing.js
  var _Thing = class {
    constructor() {
      __publicField(this, "type", "Thing");
      __publicField(this, "anchor", { horizontal: 0, vertical: 0 });
      this._id = _Thing.thingID++;
      this.alive = true;
      this._x = 0;
      this._y = 0;
      this._height;
      this._width;
      this.color = "#000000";
      this.stroke = "#000000";
      this.lineWidth = 1;
      this.filled = true;
      this.hasBorder = false;
      this.focused = false;
      this._rotation = 0;
      this._layer = 1;
      this._lastCalculatedBoundsID = 0;
      this._sortInvalidated = true;
      this._boundsInvalidated = true;
      this._invalidationDependants = [];
      this.bounds = null;
    }
    set layer(newLayer) {
      this._sortInvalidated = true;
      this._layer = newLayer;
    }
    get layer() {
      return this._layer;
    }
    set width(width) {
      this._width = width;
      this._invalidateBounds();
    }
    get width() {
      return this._width;
    }
    set height(height) {
      this._height = height;
      this._invalidateBounds();
    }
    get height() {
      return this._height;
    }
    set rotation(rotation) {
      this._rotation = rotation;
      this._invalidateBounds();
    }
    get rotation() {
      return this._rotation;
    }
    getX() {
      return this.x;
    }
    getY() {
      return this.y;
    }
    set x(x) {
      this._x = x;
      this._invalidateBounds();
    }
    get x() {
      return this._x;
    }
    set y(y) {
      this._y = y;
      this._invalidateBounds();
    }
    get y() {
      return this._y;
    }
    setType(type) {
      this.type = type;
    }
    getType() {
      return this.type;
    }
    setFilled(filled) {
      if (arguments.length !== 1) {
        throw new Error("You should pass exactly 1 argument to `setFilled`.");
      }
      if (typeof filled !== "boolean") {
        throw new Error("Invalid value passed to `setFilled`. Make sure you are passing a boolean value.");
      }
      this.filled = filled;
    }
    isFilled() {
      return this.filled;
    }
    setBorder(hasBorder) {
      if (arguments.length !== 1) {
        throw new Error("You should pass exactly 1 argument to `setBorder(hasBorder)`.");
      }
      if (typeof hasBorder !== "boolean") {
        throw new Error("Invalid value passed to `setBorder`. Make sure you are passing a boolean value.");
      }
      this.hasBorder = hasBorder;
    }
    hasBorder() {
      return this.hasBorder;
    }
    setOpacity(opacity) {
      this.opacity = opacity;
    }
    setPosition(x, y) {
      if (arguments.length !== 2) {
        throw new Error("You should pass exactly 2 arguments to `setPosition(x, y)`.");
      }
      if (typeof x !== "number" || !isFinite(x)) {
        throw new TypeError("Invalid value for x-coordinate. Make sure you are passing finite numbers to `setPosition(x, y)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?");
      }
      if (typeof y !== "number" || !isFinite(y)) {
        throw new TypeError("Invalid value for y-coordinate. Make sure you are passing finite numbers to `setPosition(x, y)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?");
      }
      this.x = x;
      this.y = y;
    }
    setRotation(degrees, angleUnit) {
      if (arguments.length < 1 || arguments.length > 2) {
        throw new Error("You should pass 1 or 2 arguments to `setRotation(degrees, angleUnit)`.");
      }
      if (typeof degrees !== "number" || !isFinite(degrees)) {
        throw new TypeError("Invalid value for degrees. Make sure you are passing finite numbers to `setRotation(degrees, angleUnit)`. Did you perform a calculation on a variable that is not a number?");
      }
      if (!angleUnit) {
        angleUnit = _Thing.DEGREES;
      }
      if (typeof angleUnit !== "number" || !isFinite(angleUnit)) {
        throw new TypeError("Invalid value for `angleUnit`. Make sure you are passing finite numbers to `setRotation(degrees, angleUnit)`.");
      }
      if (angleUnit === _Thing.DEGREES) {
        this._rotation = degrees * Math.PI / 180;
      } else {
        this._rotation = degrees;
      }
    }
    rotate(degrees, angleUnit) {
      if (arguments.length < 1 || arguments.length > 2) {
        throw new Error("You should pass exactly 1 argument to `rotate(degrees, angleUnit)`.");
      }
      if (typeof degrees !== "number" || !isFinite(degrees)) {
        throw new TypeError("Invalid value for degrees. Make sure you are passing finite numbers to `rotate(degrees, angleUnit)`. Did you perform a calculation on a variable that is not a number?");
      }
      if (!angleUnit) {
        angleUnit = _Thing.DEGREES;
      }
      if (typeof angleUnit !== "number" || !isFinite(angleUnit)) {
        throw new TypeError("Invalid value for `angleUnit`. Make sure you are passing finite numbers to `rotate(degrees, angleUnit)`.");
      }
      if (angleUnit == _Thing.DEGREES) {
        this.rotation += degrees * Math.PI / 180;
      } else {
        this.rotation += degrees;
      }
      this._invalidateBounds();
    }
    setColor(color) {
      if (arguments.length !== 1) {
        throw new Error('You should pass exactly 1 argument to <span class="code">setColor`');
      }
      if (color === void 0) {
        throw new TypeError("Invalid color");
      }
      this.color = color;
    }
    getColor() {
      return this.color;
    }
    setBorderColor(color) {
      if (arguments.length !== 1) {
        throw new Error("You should pass exactly 1 argument to `setBorderColor(color)`.");
      }
      if (color === void 0) {
        throw new TypeError("Invalid color.");
      }
      this.stroke = color;
      this.hasBorder = true;
    }
    getBorderColor() {
      return this.stroke;
    }
    setBorderWidth(width) {
      if (arguments.length !== 1) {
        throw new Error("You should pass exactly 1 argument to `setBorderWidth(width)`.");
      }
      if (typeof width !== "number" || !isFinite(width)) {
        throw new Error("Invalid value for border width. Make sure you are passing a finite number to `setBorderWidth(width)`.");
      }
      this.lineWidth = width;
      this.hasBorder = true;
    }
    getBorderWidth() {
      return this.lineWidth;
    }
    move(dx, dy) {
      if (arguments.length !== 2) {
        throw new Error("You should pass exactly 2 arguments to `move(dx, dy)`.");
      }
      if (typeof dx !== "number" || !isFinite(dx)) {
        throw new TypeError("Invalid number passed for `dx`. Make sure you are passing finite numbers to `move(dx, dy)`.");
      }
      if (typeof dy !== "number" || !isFinite(dy)) {
        throw new TypeError("Invalid number passed for `dy`. Make sure you are passing finite numbers to `move(dx, dy)`.");
      }
      this.x += dx;
      this.y += dy;
    }
    draw(context2, subclassDraw) {
      context2.save();
      if (this.hasBorder) {
        context2.strokeStyle = this.stroke.toString();
        context2.lineWidth = this.lineWidth;
      }
      if (this.focused) {
        context2.shadowColor = "#0066ff";
        context2.shadowBlur = 20;
      }
      if (this.filled) {
        context2.fillStyle = this.color.toString();
      }
      context2.globalAlpha = this.opacity;
      const anchorX = this.width * this.anchor.horizontal;
      const anchorY = this.height * this.anchor.vertical;
      const drawX = this.x - anchorX;
      const drawY = this.y - anchorY;
      context2.translate(drawX, drawY);
      if (this.rotation) {
        context2.translate(this.width / 2, this.height / 2);
        context2.rotate(this.rotation);
        context2.translate(-this.width / 2, -this.height / 2);
      }
      subclassDraw == null ? void 0 : subclassDraw();
      if (this.filled) {
        context2.fill();
      }
      if (this.hasBorder) {
        context2.stroke();
      }
      if (this.debug) {
        context2.beginPath();
        context2.arc(anchorX, anchorY, 3, 0, 2 * Math.PI);
        context2.closePath();
        context2.fillStyle = "red";
        context2.strokeStyle = "red";
        context2.fill();
        const bounds = this.getBounds();
        context2.translate(-drawX, -drawY);
        context2.strokeRect(bounds.left, bounds.top, bounds.right - bounds.left, bounds.bottom - bounds.top);
      }
      context2.restore();
    }
    focus() {
      this.focused = true;
    }
    unfocus() {
      this.focused = false;
    }
    describe() {
      return `A ${this.type} at ${this.x}, ${this.y}. Colored: ${this.color}.`;
    }
    containsPoint(x, y) {
      if (this.rotation) {
        const anchorX = this.width * this.anchor.horizontal;
        const anchorY = this.height * this.anchor.vertical;
        const rotX = this.x - anchorX + this.width / 2;
        const rotY = this.y - anchorY + this.height / 2;
        [x, y] = rotatePointAboutPosition([x, y], [rotX, rotY], -this.rotation);
      }
      return this._containsPoint(x, y);
    }
    setAnchor(anchor) {
      this.anchor = anchor;
      this._invalidateBounds();
    }
    getAnchor() {
      return this.anchor;
    }
    getBounds() {
      if (this._boundsInvalidated) {
        this._updateBounds();
      }
      return this.bounds;
    }
    _invalidateBounds() {
      this._boundsInvalidated = true;
      this._invalidationDependants.forEach((element) => {
        element._invalidateBounds();
      });
    }
    _updateBounds() {
      let left = Math.ceil(this.x - this.anchor.horizontal * this.width);
      let right = Math.ceil(this.x + (1 - this.anchor.horizontal) * this.width);
      let top = Math.ceil(this.y - this.anchor.vertical * this.height);
      let bottom = Math.ceil(this.y + (1 - this.anchor.vertical) * this.height);
      this.bounds = {
        left,
        right,
        top,
        bottom
      };
      this._lastCalculatedBoundsID++;
      this._boundsInvalidated = false;
    }
  };
  var Thing = _Thing;
  __publicField(Thing, "DEGREES", 0);
  __publicField(Thing, "RADIANS", 1);
  __publicField(Thing, "thingID", 0);
  var rotatePointAboutPosition = ([x, y], [rotX, rotY], angle) => {
    return [
      (x - rotX) * Math.cos(angle) - (y - rotY) * Math.sin(angle) + rotX,
      (x - rotX) * Math.sin(angle) + (y - rotY) * Math.cos(angle) + rotY
    ];
  };
  var thing_default = Thing;

  // src/graphics/graphics-utils.js
  var getDistance = function(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  };
  var map = (value, start1, end1, start2, end2) => {
    return (value - start1) / (end1 - start1) * (end2 - start2) + start2;
  };

  // src/graphics/arc.js
  var _Arc = class extends thing_default {
    constructor(radius, startAngle, endAngle, angleUnit) {
      super();
      __publicField(this, "type", "Arc");
      __publicField(this, "anchor", { vertical: 0.5, horizontal: 0.5 });
      if (arguments.length !== 4) {
        throw new Error("You should pass exactly 4 arguments to `new Arc(radius, startAngle, endAngle, angleUnit)`");
      }
      if (typeof radius !== "number" || !isFinite(radius) || isNaN(radius)) {
        throw new TypeError("Invalid value for `radius`. Make sure you are passing finite numbers to `new Arc(radius, startAngle, endAngle, angleUnit)`");
      }
      if (typeof startAngle !== "number" || !isFinite(startAngle) || isNaN(startAngle)) {
        throw new TypeError("Invalid value for `startAngle`. Make sure you are passing finite numbers to `new Arc(radius, startAngle, endAngle, angleUnit)`");
      }
      if (typeof endAngle !== "number" || !isFinite(endAngle) || isNaN(endAngle)) {
        throw new TypeError("Invalid value for `endAngle`. Make sure you are passing finite numbers to `new Arc(radius, startAngle, endAngle, angleUnit)`");
      }
      if (typeof angleUnit !== "number" || !isFinite(angleUnit) || isNaN(angleUnit) || angleUnit > 1 || angleUnit < 0) {
        throw new TypeError("Invalid value for `angleUnit`. Make sure you are passing finite numbers to `new Arc(radius, startAngle, endAngle, angleUnit)`");
      }
      this.radius = radius;
      this.angleUnit = angleUnit != null ? angleUnit : _Arc.RADIANS;
      this.counterclockwise = _Arc.COUNTER_CLOCKWISE;
      if (this.angleUnit == _Arc.DEGREES) {
        startAngle = degreesToRadians(startAngle);
        endAngle = degreesToRadians(endAngle);
      }
      this.startAngle = startAngle;
      this.endAngle = endAngle;
    }
    get width() {
      return this.radius * 2;
    }
    get height() {
      return this.radius * 2;
    }
    draw(context2) {
      super.draw(context2, () => {
        context2.translate(this.radius, this.radius);
        context2.beginPath();
        context2.arc(0, 0, this.radius, prepareAngle(this.startAngle), prepareAngle(this.endAngle), this.counterclockwise);
        context2.lineTo(0, 0);
        context2.closePath();
        context2.translate(-this.radius, -this.radius);
      });
    }
    setStartAngle(angle) {
      if (arguments.length !== 1) {
        throw new Error("You should pass exactly 1 argument to `setStartAngle`");
      }
      if (typeof angle !== "number" || !isFinite(angle)) {
        throw new Error("Invalid value passed to `setStartAngle`. Make sure you are passing a finite number.");
      }
      if (this.angleUnit == _Arc.DEGREES) {
        angle = degreesToRadians(angle);
      }
      this.startAngle = angle;
    }
    setEndAngle(angle) {
      if (arguments.length !== 1) {
        throw new Error("You should pass exactly 1 argument to `setEndAngle`");
      }
      if (typeof angle !== "number" || !isFinite(angle)) {
        throw new Error("Invalid value passed to `setEndAngle`. Make sure you are passing a finite number.");
      }
      if (this.angleUnit == _Arc.DEGREES) {
        angle = degreesToRadians(angle);
      }
      this.endAngle = angle;
    }
    getStartAngle() {
      if (this.angleUnit == _Arc.DEGREES) {
        return Math.round(radiansToDegrees(this.startAngle));
      } else {
        return this.startAngle;
      }
    }
    getEndAngle() {
      if (this.angleUnit == _Arc.DEGREES) {
        return Math.round(radiansToDegrees(this.endAngle));
      } else {
        return this.endAngle;
      }
    }
    setDirection(val) {
      if (arguments.length !== 1) {
        throw new Error("You should pass exactly 1 argument to `setDirection`");
      }
      if (typeof val !== "boolean") {
        throw new Error("Invalid value passed to `setDirection`. Make sure you are passing a boolean value. `true` for counterclockwise, false for clockwise.");
      }
      this.counterclockwise = val;
    }
    _containsPoint(x, y) {
      var dist = getDistance(this.x, this.y, x, y);
      if (dist > this.radius) {
        return false;
      }
      const vx = x - this.x;
      const vy = this.y - y;
      let theta = Math.atan(vy / vx);
      if (vx < 0) {
        theta += Math.PI;
      } else if (vy < 0) {
        theta += 2 * Math.PI;
      }
      var betweenCCW = theta >= this.startAngle && theta <= this.endAngle;
      if (this.counterclockwise) {
        return betweenCCW;
      } else {
        return !betweenCCW;
      }
    }
  };
  var Arc = _Arc;
  __publicField(Arc, "COUNTER_CLOCKWISE", true);
  __publicField(Arc, "CLOCKWISE", false);
  __publicField(Arc, "DEGREES", 0);
  __publicField(Arc, "RADIANS", 1);
  var prepareAngle = function(angle) {
    angle = radiansToDegrees(angle);
    angle = Math.round(angle);
    angle = (360 - angle) % 360;
    angle = degreesToRadians(angle);
    return angle;
  };
  var degreesToRadians = function(angleInDegrees) {
    return angleInDegrees / 180 * Math.PI;
  };
  var radiansToDegrees = function(angleInRadians) {
    return angleInRadians / Math.PI * 180;
  };
  var arc_default = Arc;

  // src/datastructures/vector.js
  var Vector = class {
    constructor(x = 0, y = 0, z = 0) {
      this.x = x;
      this.y = y;
      this.z = z;
    }
    add(x, y, z) {
      if (x instanceof Vector) {
        const vector = x;
        this.x += vector.x || 0;
        this.y += vector.y || 0;
        this.z += vector.z || 0;
      } else if (x instanceof Array) {
        const array = x;
        this.x += array[0] || 0;
        this.y += array[1] || 0;
        this.z += array[2] || 0;
      } else {
        this.x += x || 0;
        this.y += y || 0;
        this.z += z || 0;
      }
      return this;
    }
    subtract(x, y, z) {
      if (x instanceof Vector) {
        const vector = x;
        this.x -= vector.x || 0;
        this.y -= vector.y || 0;
        this.z -= vector.z || 0;
      } else if (x instanceof Array) {
        const array = x;
        this.x -= array[0] || 0;
        this.y -= array[1] || 0;
        this.z -= array[2] || 0;
      } else {
        this.x -= x || 0;
        this.y -= y || 0;
        this.z -= z || 0;
      }
      return this;
    }
    multiply(x, y, z) {
      if (x instanceof Vector) {
        const vector = x;
        this.x *= vector.x;
        this.y *= vector.y;
        this.z *= vector.z;
      } else if (x instanceof Array) {
        const array = x;
        if (x.length === 1) {
          this.x *= array[0];
          this.y *= array[0];
          this.z *= array[0];
        } else if (x.length === 2) {
          this.x *= array[0];
          this.y *= array[1];
        } else if (x.length === 3) {
          this.x *= array[0];
          this.y *= array[1];
          this.z *= array[2];
        }
      } else if ([...arguments].every((arg) => typeof arg === "number")) {
        if (arguments.length === 1) {
          this.x *= x;
          this.y *= x;
          this.z *= x;
        }
        if (arguments.length === 2) {
          this.x *= x;
          this.y *= y;
        }
        if (arguments.length === 3) {
          this.x *= x;
          this.y *= y;
          this.z *= z;
        }
      } else {
        throw new TypeError("Invalid arguments for multiply.");
      }
      return this;
    }
    clone() {
      return new Vector(this.x, this.y, this.z);
    }
    copy() {
      return this.clone(arguments);
    }
    normalize() {
      const magnitude = this.magnitude();
      if (magnitude !== 0) {
        this.multiply(1 / magnitude);
      }
      return this;
    }
    magnitude() {
      const x = this.x;
      const y = this.y;
      const z = this.z;
      return Math.sqrt(x * x + y * y + z * z);
    }
    heading() {
      return radiansToDegrees(Math.atan2(this.y, this.x));
    }
    setHeading(heading) {
      const magnitude = this.magnitude();
      const radians = degreesToRadians(heading);
      this.x = magnitude * Math.cos(radians);
      this.y = magnitude * Math.sin(radians);
      return this;
    }
    rotate(angle) {
      const heading = this.heading() + angle;
      const magnitude = this.magnitude();
      const headingRadians = degreesToRadians(heading);
      this.x = magnitude * Math.cos(headingRadians);
      this.y = magnitude * Math.sin(headingRadians);
      return this;
    }
    dot(x, y, z = 1) {
      if (x instanceof Vector) {
        const vector = x;
        return this.dot(vector.x, vector.y, vector.z);
      }
      return this.x * x + this.y * y + this.z * z;
    }
    cross(v) {
      const x = this.y * v.z - this.z * v.y;
      const y = this.z * v.x - this.x * v.z;
      const z = this.x * v.y - this.y * v.x;
      return new Vector(x, y, z);
    }
    angleBetween(vector) {
      const clamp2 = (v, min, max) => Math.max(min, Math.min(max, v));
      let angle = Math.acos(this.dot(vector) / (this.magnitude() * vector.magnitude()));
      angle = angle * Math.sign(this.cross(vector).z || 1);
      return radiansToDegrees(angle);
    }
    array() {
      return [this.x, this.y, this.z];
    }
  };
  var vector_default = Vector;

  // src/randomizer.js
  var randomizer_exports = {};
  __export(randomizer_exports, {
    nextBoolean: () => nextBoolean,
    nextColor: () => nextColor,
    nextFloat: () => nextFloat,
    nextHex: () => nextHex,
    nextInt: () => nextInt,
    noise: () => noise
  });
  var nextInt = function(min, max) {
    if (max === void 0) {
      max = min - 1;
      min = 0;
    }
    min = Math.floor(min);
    var r = Math.random();
    return min + Math.floor(r * (max - min + 1));
  };
  var nextFloat = function(min, max) {
    if (max === void 0) {
      max = min;
      min = 0;
    }
    return min + (max - min) * Math.random();
  };
  var nextHex = function() {
    var val = nextInt(0, 255);
    if (val < 16) {
      return "0" + val.toString(16);
    }
    return val.toString(16);
  };
  var nextColor = function() {
    var r = nextHex();
    var g = nextHex();
    var b = nextHex();
    return "#" + r + g + b;
  };
  var nextBoolean = (probabilityTrue) => {
    if (probabilityTrue === void 0) {
      probabilityTrue = 0.5;
    }
    return Math.random() < probabilityTrue;
  };
  var perlin;
  var perlin2;
  var PERLIN_SIZE = 4095;
  var PERLIN_SIZE_2D = 63;
  var lerp = (a, b, x) => {
    return a * (1 - x) + b * x;
  };
  var fade = (t) => {
    return t * t * (3 - 2 * t);
  };
  var noise = (x, y) => {
    if (!perlin) {
      perlin = new Array(PERLIN_SIZE + 1);
      for (let i = 0; i < PERLIN_SIZE + 1; i++) {
        perlin[i] = Math.random();
      }
    }
    if (y !== void 0) {
      if (!perlin2) {
        perlin2 = new Array(PERLIN_SIZE_2D + 1).fill(0).map((row) => {
          return new Array(PERLIN_SIZE_2D + 1).fill(0).map(() => {
            return new vector_default(1, 0).rotate(Math.random() * 360);
          });
        });
      }
      const x0 = Math.floor(x) % PERLIN_SIZE_2D;
      const x1 = (x0 + 1) % PERLIN_SIZE_2D;
      const y0 = Math.floor(y) % PERLIN_SIZE_2D;
      const y1 = (y0 + 1) % PERLIN_SIZE_2D;
      const dx = (x - x0) % PERLIN_SIZE_2D;
      const dy = (y - y0) % PERLIN_SIZE_2D;
      const gradientTL = perlin2[x0][y0];
      const gradientTR = perlin2[x1][y0];
      const gradientBL = perlin2[x0][y1];
      const gradientBR = perlin2[x1][y1];
      const noiseTL = gradientTL.dot(dx, dy);
      const noiseTR = gradientTR.dot(dx - 1, dy);
      const noiseBL = gradientBL.dot(dx, dy - 1);
      const noiseBR = gradientBR.dot(dx - 1, dy - 1);
      const xFade = fade(dx);
      return (lerp(lerp(noiseTL, noiseTR, xFade), lerp(noiseBL, noiseBR, xFade), fade(dy)) + 1) / 2;
    }
    x = Math.abs(x);
    const xFloor = Math.floor(x);
    const t = x - xFloor;
    const xMin = xFloor % PERLIN_SIZE;
    const xMax = (xMin + 1) % PERLIN_SIZE;
    return lerp(perlin[xMin], perlin[xMax], fade(t));
  };

  // src/graphics/color.js
  var _Color = class {
    constructor(r, g, b) {
      __publicField(this, "type", "Color");
      this.r = r;
      this.g = g;
      this.b = b;
    }
    toString() {
      return _Color.createFromRGB(this.r, this.g, this.b);
    }
    static createFromRGB(r, g, b) {
      return getColor(r, g, b);
    }
    static randomRed() {
      var r = nextInt(50, 255);
      return _Color.createFromRGB(r, 0, 0);
    }
    static randomGreen() {
      var g = nextInt(50, 255);
      return _Color.createFromRGB(0, g, 0);
    }
    static randomBlue() {
      var b = nextInt(50, 255);
      return _Color.createFromRGB(0, 0, b);
    }
    static createFromRGBL(r, g, b, l) {
      var hsl = _Color.rgbToHsl(r, g, b);
      if (l < 0) {
        l = 0;
      }
      if (l > 1) {
        l = 1;
      }
      var rgb = _Color.hslToRgb(hsl[0], hsl[1], l);
      return _Color.createFromRGB(rgb[0], rgb[1], rgb[2]);
    }
    static rgbToHsl(r, g, b) {
      r /= 255, g /= 255, b /= 255;
      var max = Math.max(r, g, b), min = Math.min(r, g, b);
      var h, s, l = (max + min) / 2;
      if (max == min) {
        h = s = 0;
      } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
        }
        h /= 6;
      }
      return [h, s, l];
    }
    static hslToRgb(h, s, l) {
      var r, g, b;
      if (s === 0) {
        r = g = b = l;
      } else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
      }
      return [r * 255, g * 255, b * 255];
    }
    static average(colorOne, colorTwo) {
      function getHex(num) {
        return num.toString(16);
      }
      function getDec(hex) {
        return parseInt(hex, 16);
      }
      var componentRegEx = /[\da-z]{2}/gi;
      var componentsOne = colorOne.match(componentRegEx);
      var componentsTwo = colorTwo.match(componentRegEx);
      var averageHex = "#";
      var colorOneComponent;
      var colorTwoComponent;
      var averageDec;
      var h;
      for (var i = 0; i < componentsOne.length; i++) {
        colorOneComponent = getDec(componentsOne[i]);
        colorTwoComponent = getDec(componentsTwo[i]);
        averageDec = Math.floor(colorOneComponent + colorTwoComponent >> 1);
        h = getHex(averageDec);
        if (h.length == 1)
          h = "0" + h;
        averageHex += h;
      }
      return averageHex;
    }
    static getColor(colorString) {
      return _Color.constants[colorString];
    }
  };
  var Color = _Color;
  __publicField(Color, "random", nextColor);
  __publicField(Color, "red", "#FF0000");
  __publicField(Color, "RED", "#FF0000");
  __publicField(Color, "green", "#00FF00");
  __publicField(Color, "GREEN", "#00FF00");
  __publicField(Color, "blue", "#0000FF");
  __publicField(Color, "BLUE", "#0000FF");
  __publicField(Color, "yellow", "#FFFF00");
  __publicField(Color, "YELLOW", "#FFFF00");
  __publicField(Color, "cyan", "#00FFFF");
  __publicField(Color, "CYAN", "#00FFFF");
  __publicField(Color, "orange", "#FFA500");
  __publicField(Color, "ORANGE", "#FFA500");
  __publicField(Color, "white", "#FFFFFF");
  __publicField(Color, "WHITE", "#FFFFFF");
  __publicField(Color, "black", "#000000");
  __publicField(Color, "BLACK", "#000000");
  __publicField(Color, "gray", "#cccccc");
  __publicField(Color, "GRAY", "#cccccc");
  __publicField(Color, "grey", "#cccccc");
  __publicField(Color, "GREY", "#cccccc");
  __publicField(Color, "purple", "#9B30FF");
  __publicField(Color, "PURPLE", "#9B30FF");
  var rgbToHex = (r, g, b) => {
    r = Math.floor(r);
    g = Math.floor(g);
    b = Math.floor(b);
    if (r > 255 || g > 255 || b > 255) {
      throw "Invalid color component";
    }
    return (r << 16 | g << 8 | b).toString(16);
  };
  var getColor = (r, g, b) => {
    return "#" + ("000000" + rgbToHex(r, g, b)).slice(-6);
  };
  var hue2rgb = (p, q, t) => {
    if (t < 0)
      t += 1;
    if (t > 1)
      t -= 1;
    if (t < 1 / 6)
      return p + (q - p) * 6 * t;
    if (t < 1 / 2)
      return q;
    if (t < 2 / 3)
      return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };

  // src/graphics/circle.js
  var Circle = class extends thing_default {
    constructor(radius) {
      super();
      __publicField(this, "type", "Circle");
      __publicField(this, "anchor", { horizontal: 0.5, vertical: 0.5 });
      if (arguments.length !== 1) {
        throw new Error("You should pass exactly 1 argument to `new Circle(radius)`.");
      }
      if (typeof radius !== "number" || !isFinite(radius)) {
        throw new TypeError("You must pass a finite number to `new Circle(radius)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?");
      }
      this.radius = Math.max(0, radius);
      this.color = Color.black;
      this.lineWidth = 3;
    }
    draw(context2) {
      super.draw(context2, () => {
        context2.translate(this.radius, this.radius);
        context2.beginPath();
        context2.arc(0, 0, this.radius, 0, Math.PI * 2, true);
        context2.closePath();
        context2.translate(-this.radius, -this.radius);
      });
    }
    getRadius() {
      return this.radius;
    }
    get radius() {
      return this._radius;
    }
    getHeight() {
      return this.radius * 2;
    }
    get height() {
      return this.radius * 2;
    }
    getWidth() {
      return this.radius * 2;
    }
    get width() {
      return this.radius * 2;
    }
    setRadius(radius) {
      if (arguments.length !== 1) {
        throw new Error("You should pass exactly 1 argument to `setRadius(radius)`.");
      }
      if (typeof radius !== "number" || !isFinite(radius)) {
        throw new Error("You must pass a finite number to `setRadius(radius)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?");
      }
      this.radius = Math.max(0, radius);
    }
    set radius(radius) {
      this._radius = radius;
      super._invalidateBounds();
    }
    _containsPoint(x, y) {
      x -= this.width * (0.5 - this.anchor.horizontal);
      y -= this.height * (0.5 - this.anchor.vertical);
      var circleEdge = this.radius;
      if (this.hasBorder) {
        circleEdge += this.lineWidth;
      }
      var dist = getDistance(this.x, this.y, x, y);
      return dist < circleEdge;
    }
  };
  var circle_default = Circle;

  // src/graphics/group.js
  var _a;
  var Group = class extends thing_default {
    constructor(...elements) {
      super();
      __publicField(this, "type", "Group");
      __publicField(this, "elements");
      __publicField(this, "devicePixelRatio", (_a = Math.ceil(window.devicePixelRatio)) != null ? _a : 1);
      this.elements = elements;
      this._hiddenCanvas = document.createElement("canvas");
      this._hiddenCanvas.width = 1;
      this._hiddenCanvas.height = 1;
      this._hiddenContext = this._hiddenCanvas.getContext("2d");
      this._lastRecordedBounds = {};
      this.bounds = null;
    }
    get x() {
      return this.getBounds().left;
    }
    set x(x) {
      if (!this.bounds) {
        return;
      }
      this.setPosition(x, this.bounds.top);
    }
    get y() {
      return this.getBounds().top;
    }
    set y(y) {
      if (!this.bounds) {
        return;
      }
      this.setPosition(this.bounds.left, y);
    }
    get width() {
      const bounds = this.getBounds();
      return bounds.right - bounds.left;
    }
    get height() {
      const bounds = this.getBounds();
      return bounds.bottom - bounds.top;
    }
    getElements() {
      return this.elements;
    }
    add(element) {
      this.elements.push(element);
      this._invalidateBounds();
      element._invalidationDependants.push(this);
    }
    remove(element) {
      element._invalidationDependants.splice(element._invalidationDependants.indexOf(this), 1);
      const i = this.elements.indexOf(element);
      if (i < 0) {
        return;
      }
      this.elements.splice(i, 1);
      this._invalidateBounds();
    }
    move(dx, dy) {
      this.elements.forEach((element) => {
        element.move(dx, dy);
      });
      this._invalidateBounds();
    }
    setPosition(x, y) {
      const bounds = this.getBounds();
      const dx = x - bounds.left;
      const dy = y - bounds.top;
      this.move(dx, dy);
    }
    draw(context2) {
      if (this.elements.length === 0) {
        return;
      }
      super.draw(context2, () => {
        context2.beginPath();
        const bounds = this.getBounds();
        const width = bounds.right - bounds.left;
        const height = bounds.bottom - bounds.top;
        if (!width || !height) {
          return;
        }
        this._hiddenContext.clearRect(0, 0, width, height);
        this._hiddenContext.translate(-bounds.left, -bounds.top);
        this.elements.filter((element) => element.alive).sort((a, b) => a.layer - b.layer).forEach((element) => {
          element.draw(this._hiddenContext);
        });
        this._hiddenContext.translate(bounds.left, bounds.top);
        context2.drawImage(this._hiddenCanvas, 0, 0, width, height);
        context2.closePath();
      });
    }
    describe() {
      return `A Group at ${this.x}, ${this.y}, containing: ${this.elements.map((element) => element.describe()).join(" ")}`;
    }
    _containsPoint(x, y) {
      x += this.width * this.anchor.horizontal;
      y += this.height * this.anchor.vertical;
      return this.elements.some((e) => e.containsPoint(x, y));
    }
    _updateBounds() {
      let maxX = 0;
      let maxY = 0;
      let minX = Infinity;
      let minY = Infinity;
      this.elements.forEach((element) => {
        if (element._lastCalculatedBoundsID > (this._lastRecordedBounds[element._id] || 0)) {
          this._lastRecordedBounds[element._id] = element._lastCalculatedBoundsID;
        }
        const elementBounds = element.getBounds();
        let { left, right, top, bottom } = elementBounds;
        if (element.rotation) {
          const rotX = (right - left) / 2 + left;
          const rotY = (bottom - top) / 2 + top;
          let topLeft = rotatePointAboutPosition([left, top], [rotX, rotY], element.rotation);
          let topRight = rotatePointAboutPosition([right, top], [rotX, rotY], element.rotation);
          let bottomLeft = rotatePointAboutPosition([left, bottom], [rotX, rotY], element.rotation);
          let bottomRight = rotatePointAboutPosition([right, bottom], [rotX, rotY], element.rotation);
          const points = [topLeft, topRight, bottomLeft, bottomRight];
          const xCoordinates = points.map((point) => point[0]);
          const yCoordinates = points.map((point) => point[1]);
          left = Math.min(...xCoordinates);
          right = Math.max(...xCoordinates);
          top = Math.min(...yCoordinates);
          bottom = Math.max(...yCoordinates);
        }
        minX = Math.min(minX, left);
        minY = Math.min(minY, top);
        maxX = Math.max(maxX, right);
        maxY = Math.max(maxY, bottom);
      });
      this.bounds = {
        left: minX,
        right: maxX,
        top: minY,
        bottom: maxY
      };
      const width = maxX - minX;
      const height = maxY - minY;
      this._hiddenCanvas.width = this.devicePixelRatio * width;
      this._hiddenCanvas.height = this.devicePixelRatio * height;
      this._hiddenCanvas.style.width = `${width}px`;
      this._hiddenCanvas.style.height = `${height}px`;
      this._hiddenContext.scale(this.devicePixelRatio, this.devicePixelRatio);
      this._lastCalculatedBoundsID++;
      this._boundsInvalidated = false;
    }
  };
  var group_default = Group;

  // src/manager.js
  var DEFAULT_UPDATE_INTERVAL = 40;
  var Manager = class {
    constructor(options = {}) {
      this.onError = options.onError;
      this.timers = {};
    }
    withErrorHandler(fn) {
      return (...args) => {
        try {
          fn == null ? void 0 : fn(...args);
        } catch (e) {
          if (typeof this.onError === "function") {
            this.onError(e);
          } else {
            throw e;
          }
        }
      };
    }
    setTimer(fn, interval, data, name) {
      interval = interval != null ? interval : DEFAULT_UPDATE_INTERVAL;
      name = name != null ? name : fn.name;
      const stop = (() => {
        let shouldUpdate = true;
        let lastUpdate = Date.now();
        const timer = () => {
          if (!shouldUpdate) {
            return;
          }
          const now = Date.now();
          if (now - lastUpdate > interval) {
            fn(data);
            lastUpdate = now;
          }
          requestAnimationFrame(timer);
        };
        requestAnimationFrame(timer);
        return () => {
          shouldUpdate = false;
        };
      })();
      if (this.timers[name]) {
        this.timers[name].push(stop);
      } else {
        this.timers[name] = [stop];
      }
    }
    stopTimer(fn) {
      var _a3;
      const name = typeof fn === "function" ? fn.name : fn;
      (_a3 = this.timers[name]) == null ? void 0 : _a3.forEach((stopper) => stopper());
      this.timers[name] = [];
    }
    stopAllTimers() {
      Object.keys(this.timers).map((name) => {
        this.stopTimer(name);
      });
    }
  };
  var manager_default = Manager;

  // src/graphics/webvideo.js
  "use strict";
  var DEFAULT_WIDTH = 150;
  var DEFAULT_HEIGHT = DEFAULT_WIDTH * 3 / 4;
  var WEBCAM_INDICATOR = "WEBCAM";
  var WebVideo = class extends thing_default {
    constructor(filename) {
      super();
      __publicField(this, "type", "WebVideo");
      if (typeof filename !== "string") {
        throw new TypeError("You must pass a string to `new WebVideo(filename)` that has the video's location.");
      }
      var vid = document.createElement("video");
      this.width = DEFAULT_WIDTH;
      this.height = DEFAULT_HEIGHT;
      this.isWebCam = filename === WEBCAM_INDICATOR;
      this.browserSupportsVideo = !!vid.canPlayType;
      if (this.browserSupportsVideo) {
        this.video = vid;
        if (!this.isWebCam) {
          this.video.src = filename;
        } else if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
            this.video.srcObject = stream;
            this.video.play();
          }).catch(function(error) {
            throw new Error("Web camera access was denied: " + error);
          });
        } else {
          throw new TypeError("Your browser does not support web camera access");
        }
        this.filename = filename;
        this.video.autoplay = true;
        this.video.loop = false;
        this.video.crossOrigin = "anonymous";
      }
    }
    draw(context2) {
      if (!this.browserSupportsVideo) {
        return;
      }
      super.draw(context2, () => {
        context2.drawImage(this.video, 0, 0, this.width, this.height);
      });
    }
    _containsPoint(x, y) {
      if (this.browserSupportsVideo) {
        x += this.width * this.anchor.horizontal;
        y += this.height * this.anchor.vertical;
        return x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height;
      }
      return false;
    }
    getWidth() {
      return this.width;
    }
    getHeight() {
      return this.height;
    }
    setSize(width, height) {
      this.width = width;
      this.height = height;
    }
    setAutoplay(autoplay) {
      if (this.browserSupportsVideo) {
        this.video.autoplay = autoplay;
      }
    }
    setLoop(loop) {
      if (this.browserSupportsVideo) {
        this.video.loop = loop;
      }
    }
    setMuted(muted) {
      if (this.browserSupportsVideo) {
        this.video.muted = muted;
      }
    }
    play() {
      if (this.browserSupportsVideo) {
        this.video.play();
      }
    }
    pause() {
      if (this.browserSupportsVideo) {
        this.video.pause();
      }
    }
    stop() {
      if (this.browserSupportsVideo) {
        this.video.pause();
        this.video.currentTime = 0;
        if (this.isWebCam && this.video.srcObject) {
          this.video.srcObject.getTracks().forEach(function(track) {
            track.stop();
          });
        }
      }
    }
    isPlaying() {
      if (this.browserSupportsVideo) {
        return !(this.video.paused || this.video.ended);
      }
      return false;
    }
    isMuted() {
      if (this.browserSupportsVideo) {
        return this.video.muted;
      }
      return false;
    }
    onReadyToPlay(fn) {
      if (this.browserSupportsVideo) {
        this.video.oncanplay = fn;
      }
    }
  };
  __publicField(WebVideo, "WEBCAM", WEBCAM_INDICATOR);
  var webvideo_default = WebVideo;

  // src/graphics/index.js
  var FULLSCREEN_PADDING = 5;
  var KEYBOARD_NAVIGATION_DOM_ELEMENT_STYLE = "position: absolute; width: 1px; height: 1px; top: -10px; overflow: hidden;";
  var HIDDEN_KEYBOARD_NAVIGATION_DOM_ELEMENT_STYLE = KEYBOARD_NAVIGATION_DOM_ELEMENT_STYLE + "display: none;";
  var HIDDEN_KEYBOARD_NAVIGATION_DOM_ELEMENT_ID = (id) => `${id}focusbutton`;
  var GraphicsInstances = {};
  var pressedKeys = [];
  var graphicsInstanceID = 0;
  var _a2;
  var GraphicsManager = class extends manager_default {
    constructor(options = {}) {
      super(options);
      __publicField(this, "elementPool", []);
      __publicField(this, "elementPoolSize", 0);
      __publicField(this, "accessibleDOMElements", []);
      __publicField(this, "devicePixelRatio", (_a2 = Math.ceil(window.devicePixelRatio)) != null ? _a2 : 1);
      __publicField(this, "onKeyDown", (e) => {
        var _a3;
        const index = pressedKeys.indexOf(e.keyCode);
        if (index === -1) {
          pressedKeys.push(e.keyCode);
        }
        if (e.key === "Tab") {
          for (let i = 0; i < this.elementPoolSize; i++) {
            const elem = this.elementPool[i];
            if (!elem._hasAccessibleDOMElement) {
              this.createAccessibleDOMElement(elem);
            }
          }
          this.userNavigatingWithKeyboard = true;
          this.showKeyboardNavigationDOMElements();
        }
        (_a3 = this.keyDownCallback) == null ? void 0 : _a3.call(this, e);
        return true;
      });
      __publicField(this, "onKeyUp", (e) => {
        var _a3;
        const index = pressedKeys.indexOf(e.keyCode);
        if (index !== -1) {
          pressedKeys.splice(index, 1);
        }
        (_a3 = this.keyUpCallback) == null ? void 0 : _a3.call(this, e);
      });
      __publicField(this, "onResize", (e) => {
        if (!this._resizeTimeout) {
          this._resizeTimeout = setTimeout(() => {
            var _a3;
            this._resizeTimeout = null;
            this.fullscreenMode && ((_a3 = this.setFullscreen) == null ? void 0 : _a3.call(this));
          }, DEFAULT_UPDATE_INTERVAL);
        }
      });
      __publicField(this, "onOrientationChange", (e) => {
        var _a3;
        (_a3 = this.deviceOrientationCallback) == null ? void 0 : _a3.call(this, e);
      });
      __publicField(this, "onDeviceMotion", (e) => {
        var _a3;
        (_a3 = this.deviceMotionCallback) == null ? void 0 : _a3.call(this, e);
      });
      var _a3;
      this.resetAllState();
      this.setCurrentCanvas(options.canvas);
      this.onError = options.onError || void 0;
      this.fullscreenMode = false;
      this.fpsInterval = 1e3 / DEFAULT_UPDATE_INTERVAL;
      this.lastDrawTime = Date.now();
      this.userNavigatingWithKeyboard = false;
      this.addEventListeners();
      this.shouldUpdate = (_a3 = options.shouldUpdate) != null ? _a3 : true;
      GraphicsInstances[graphicsInstanceID++] = this;
    }
    addEventListeners() {
      window.addEventListener("keydown", this.onKeyDown);
      window.addEventListener("keyup", this.onKeyUp);
      window.addEventListener("resize", this.onResize);
      if (window.DeviceOrientationEvent) {
        window.addEventListener("orientationchange", this.onOrientationChange);
      }
      if (window.DeviceMotionEvent) {
        window.addEventListener("devicemotion", this.onDeviceMotion);
      }
    }
    cleanup() {
      window.removeEventListener("keydown", this.onKeyDown);
      window.removeEventListener("keyup", this.onKeyUp);
      window.removeEventListener("resize", this.onResize);
      window.removeEventListener("orientationchange", this.onOrientationChange);
      window.removeEventListener("devicemotion", this.onDeviceMotion);
    }
    configure(options = {}) {
      this.onError = options.onError || void 0;
    }
    getElements() {
      return this.elementPool.filter((element) => element.alive);
    }
    add(elem) {
      elem.alive = true;
      this.elementPool[this.elementPoolSize++] = elem;
    }
    createAccessibleDOMElement(elem) {
      const button = document.createElement("button");
      button.style = this.userNavigatingWithKeyboard ? KEYBOARD_NAVIGATION_DOM_ELEMENT_STYLE : HIDDEN_KEYBOARD_NAVIGATION_DOM_ELEMENT_STYLE;
      button.id = HIDDEN_KEYBOARD_NAVIGATION_DOM_ELEMENT_ID(elem._id);
      button.onfocus = () => {
        var _a3, _b;
        elem.focus();
        button.textContent = (_b = (_a3 = elem.describe) == null ? void 0 : _a3.call(elem)) != null ? _b : "An unknown graphics element";
      };
      button.onblur = () => {
        elem.unfocus();
      };
      button.onkeydown = (e) => {
        var _a3;
        if (e.code === "Space" && !e.repeat) {
          const event = new Event("mousedown");
          event.getX = () => elem.x;
          event.getY = () => elem.y;
          (_a3 = this.mouseDownCallback) == null ? void 0 : _a3.call(this, event);
        }
      };
      button.onkeyup = (e) => {
        var _a3;
        if (e.code === "Space") {
          const event = new Event("mouseup");
          event.getX = () => elem.x;
          event.getY = () => elem.y;
          (_a3 = this.mouseUpCallback) == null ? void 0 : _a3.call(this, event);
        }
      };
      document.body.appendChild(button);
      this.accessibleDOMElements.push(button);
      elem._hasAccessibleDOMElement = true;
    }
    exitKeyboardNavigation() {
      this.userNavigatingWithKeyboard = false;
      this.hideKeyboardNavigationDOMElements();
    }
    showKeyboardNavigationDOMElements() {
      this.accessibleDOMElements.forEach((element) => element.style = KEYBOARD_NAVIGATION_DOM_ELEMENT_STYLE);
    }
    hideKeyboardNavigationDOMElements() {
      this.accessibleDOMElements.forEach((element) => element.style = HIDDEN_KEYBOARD_NAVIGATION_DOM_ELEMENT_STYLE);
    }
    waitForClick() {
      this.clickCount++;
    }
    mouseClickMethod(fn) {
      this.clickCallback = this.withErrorHandler(fn);
    }
    mouseMoveMethod(fn) {
      this.moveCallback = this.withErrorHandler(fn);
    }
    mouseDownMethod(fn) {
      this.mouseDownCallback = this.withErrorHandler(fn);
    }
    mouseUpMethod(fn) {
      this.mouseUpCallback = this.withErrorHandler(fn);
    }
    mouseDragMethod(fn) {
      this.dragCallback = this.withErrorHandler(fn);
    }
    keyDownMethod(fn) {
      this.keyDownCallback = this.withErrorHandler(fn);
    }
    keyUpMethod(fn) {
      this.keyUpCallback = this.withErrorHandler(fn);
    }
    deviceOrientationMethod(fn) {
      this.deviceOrientationCallback = this.withErrorHandler(fn);
    }
    deviceMotionMethod(fn) {
      this.deviceMotionCallback = this.withErrorHandler(fn);
    }
    isKeyPressed(keyCode) {
      return pressedKeys.indexOf(keyCode) !== -1;
    }
    getWidth() {
      const canvas = this.getCanvas();
      return parseFloat(canvas.getAttribute("width") / this.devicePixelRatio);
    }
    getHeight() {
      const canvas = this.getCanvas();
      return parseFloat(canvas.getAttribute("height") / this.devicePixelRatio);
    }
    stopAllTimers() {
      for (let i = 1; i < 99999; i++) {
        window.clearInterval(i);
      }
      super.stopAllTimers();
      this.setMainTimer();
    }
    setTimer(fn, time, data, name) {
      if (arguments.length < 2) {
        throw new Error("2 parameters required for `setTimer`, " + arguments.length + " found. You must provide a callback function and a number representing the time delay to `setTimer`.");
      }
      if (typeof fn !== "function") {
        throw new TypeError("Invalid callback function. Make sure you are passing an actual function to `setTimer`.");
      }
      if (typeof time !== "number" || !isFinite(time)) {
        throw new TypeError("Invalid value for time delay. Make sure you are passing a finite number to `setTimer` for the delay.");
      }
      if (this.waitingForClick()) {
        this.delayedTimers.push({
          fn,
          time,
          data,
          clicks: this.clickCount,
          name
        });
      } else {
        return super.setTimer(this.withErrorHandler(fn), time, data, name != null ? name : fn.name);
      }
    }
    setBackgroundColor(color) {
      this.backgroundColor = color;
    }
    clear(context2) {
      var ctx = context2 || this.getContext();
      ctx.clearRect(0, 0, this.getWidth(), this.getHeight());
    }
    getElementAt(x, y) {
      for (let i = this.elementPool.length; i--; ) {
        if (this.elementPool[i].alive && this.elementPool[i].containsPoint(x, y)) {
          return this.elementPool[i];
        }
      }
      return null;
    }
    getElementsAt(x, y) {
      return this.elementPool.filter((e) => {
        return e.alive && e.containsPoint(x, y);
      });
    }
    elementExistsWithParameters(params) {
      for (let i = this.elementPool.length; i--; ) {
        const elem = this.elementPool[i];
        const checkedParams = Object.entries(params).map(([name, value]) => {
          return value === elem[name];
        });
        if (elem.alive && checkedParams.every((param) => param)) {
          return true;
        }
      }
      return false;
    }
    removeAll() {
      this.stopAllVideo();
      this.elementPool = [];
      this.elementPoolSize = 0;
      this.accessibleDOMElements.forEach((node) => node.remove());
      this.accessibleDOMElements = [];
    }
    remove(elem) {
      var _a3;
      if (!(elem instanceof thing_default)) {
        return;
      }
      if (elem instanceof webvideo_default) {
        elem.stop();
      }
      elem.alive = false;
      elem._sortInvalidated = true;
      if (elem._hasAccessibleDOMElement) {
        const focusButtonID = HIDDEN_KEYBOARD_NAVIGATION_DOM_ELEMENT_ID(elem._id);
        (_a3 = document.getElementById(focusButtonID)) == null ? void 0 : _a3.remove();
        elem._hasAccessibleDOMElement = false;
      }
    }
    _resize(w, h) {
      w = Math.floor(w);
      h = Math.floor(h);
      const canvas = this.getCanvas();
      const temporaryCanvas = document.createElement("canvas");
      temporaryCanvas.width = canvas.width;
      temporaryCanvas.height = canvas.height;
      temporaryCanvas.style.width = `${canvas.width / this.devicePixelRatio}px`;
      temporaryCanvas.style.height = `${canvas.height / this.devicePixelRatio}px`;
      const temporaryContext = temporaryCanvas.getContext("2d");
      temporaryContext.drawImage(canvas, 0, 0);
      canvas.width = w * this.devicePixelRatio;
      canvas.height = h * this.devicePixelRatio;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      const context2 = this.getContext();
      context2.drawImage(temporaryCanvas, 0, 0);
      context2.scale(this.devicePixelRatio, this.devicePixelRatio);
      temporaryCanvas.remove();
    }
    setSize(w, h) {
      this.fullscreenMode = false;
      this._resize(w, h);
    }
    setFullscreen() {
      this.fullscreenMode = true;
      const canvas = this.getCanvas();
      const width = canvas.parentElement.offsetWidth - FULLSCREEN_PADDING;
      const height = canvas.parentElement.offsetHeight - FULLSCREEN_PADDING;
      this._resize(width, height);
    }
    resetAllTimers() {
      for (var cur in this.timers) {
        clearInterval(this.timers[cur]);
      }
    }
    stopAllVideo() {
      for (var i = this.elementPool.length; i--; ) {
        if (this.elementPool[i] instanceof webvideo_default) {
          this.elementPool[i].stop();
        }
      }
    }
    resetAllState() {
      this.backgroundColor = null;
      this.removeAll();
      this.clickCallback = null;
      this.moveCallback = null;
      this.mouseDownCallback = null;
      this.mouseUpCallback = null;
      this.dragCallback = null;
      this.keyDownCallback = null;
      this.keyUpCallback = null;
      this.deviceOrientationCallback = null;
      this.deviceMotionCallback = null;
      this.timers = {};
      this.timersList = [];
      this.clickCount = 0;
      this.delayedTimers = [];
      this.fullscreenMode = false;
    }
    fullReset() {
      this.stopAllVideo();
      this.resetAllTimers();
      this.resetAllState();
      this.setMainTimer();
    }
    canvasExists() {
      return this.getCanvas() !== null;
    }
    getCanvas() {
      return this.currentCanvas;
    }
    setCurrentCanvas(canvasSelector) {
      let currentCanvas;
      if (canvasSelector) {
        currentCanvas = document.querySelector(canvasSelector);
      } else {
        currentCanvas = document.getElementsByTagName("canvas")[0];
      }
      if (!currentCanvas) {
        currentCanvas = document.createElement("canvas");
        currentCanvas.width = 400;
        currentCanvas.height = 400;
        document.body.appendChild(currentCanvas);
      }
      this.currentCanvas = currentCanvas;
      this.setSize(currentCanvas.width, currentCanvas.height);
      this.fullReset();
      this.setup();
    }
    drawBackground() {
      if (this.backgroundColor) {
        var context2 = this.getContext();
        context2.fillStyle = this.backgroundColor;
        context2.beginPath();
        context2.rect(0, 0, this.getWidth(), this.getHeight());
        context2.closePath();
        context2.fill();
      }
    }
    getContext() {
      var _a3, _b;
      return (_b = (_a3 = this.getCanvas()) == null ? void 0 : _a3.getContext) == null ? void 0 : _b.call(_a3, "2d");
    }
    getPixel(x, y) {
      const context2 = this.getContext();
      x *= this.devicePixelRatio;
      y *= this.devicePixelRatio;
      const pixelData = context2.getImageData(x, y, 1, 1).data;
      const index = 0;
      return [
        pixelData[index + 0],
        pixelData[index + 1],
        pixelData[index + 2],
        pixelData[index + 3]
      ];
    }
    redraw() {
      this.clear();
      this.drawBackground();
      let elem;
      let sortPool;
      const context2 = this.getContext();
      for (let i = 0; i < this.elementPoolSize; i++) {
        elem = this.elementPool[i];
        if (elem._sortInvalidated) {
          sortPool = true;
          elem._sortInvalidated = false;
        }
        if (elem.alive) {
          elem.draw(context2);
        } else {
          sortPool = true;
        }
      }
      if (sortPool) {
        this.elementPool.sort((a, b) => b.alive - a.alive || a.layer - b.layer);
        let lastAliveElementIndex = -1;
        for (let i = this.elementPool.length - 1; i >= 0; i--) {
          if (this.elementPool[i].alive) {
            lastAliveElementIndex = i;
            break;
          }
        }
        this.elementPoolSize = lastAliveElementIndex + 1;
      }
    }
    setMainTimer() {
      this.shouldUpdate = true;
      this.update();
    }
    update() {
      if (this.shouldUpdate) {
        requestAnimationFrame(this.update.bind(this));
      }
      this.now = Date.now();
      const elapsed = this.now - this.lastDrawTime;
      if (elapsed > this.fpsInterval) {
        this.lastDrawTime = this.now - elapsed % this.fpsInterval;
        this.redraw();
      }
    }
    waitingForClick() {
      return this.clickCount !== 0;
    }
    canvasHasInstance(canvas) {
      let instance;
      for (let i = 0; i < allGraphicsInstances.length; i++) {
        instance = allGraphicsInstances[i];
        if (instance.instanceId !== this.instanceId && instance.getCanvas() === canvas) {
          return instance.instanceId;
        }
      }
      return null;
    }
    setup() {
      var drawingCanvas = this.getCanvas();
      drawingCanvas.onclick = (e) => {
        if (this.waitingForClick()) {
          this.clickCount--;
          for (var i = 0; i < this.delayedTimers.length; i++) {
            var timer = this.delayedTimers[i];
            timer.clicks--;
            if (timer.clicks === 0) {
              this.setTimer(this.withErrorHandler(timer.fn), timer.time, timer.data);
            }
          }
          return;
        }
        if (this.clickCallback) {
          this.clickCallback(e);
        }
      };
      var mouseDown = false;
      drawingCanvas.onmousemove = this.withErrorHandler((e) => {
        if (this.userNavigatingWithKeyboard) {
          this.exitKeyboardNavigation();
        }
        if (this.moveCallback) {
          this.moveCallback(e);
        }
        if (mouseDown && this.dragCallback) {
          this.dragCallback(e);
        }
      });
      drawingCanvas.onmousedown = (e) => {
        if (this.userNavigatingWithKeyboard) {
          this.exitKeyboardNavigation();
        }
        mouseDown = true;
        if (this.mouseDownCallback) {
          this.mouseDownCallback(e);
        }
      };
      drawingCanvas.onmouseup = (e) => {
        if (this.userNavigatingWithKeyboard) {
          this.exitKeyboardNavigation();
        }
        mouseDown = false;
        if (this.mouseUpCallback) {
          this.mouseUpCallback(e);
        }
      };
      drawingCanvas.ontouchmove = (e) => {
        if (this.userNavigatingWithKeyboard) {
          this.exitKeyboardNavigation();
        }
        e.preventDefault();
        if (this.dragCallback) {
          this.dragCallback(e);
        } else if (this.moveCallback) {
          this.moveCallback(e);
        }
      };
      drawingCanvas.ontouchstart = (e) => {
        if (this.userNavigatingWithKeyboard) {
          this.exitKeyboardNavigation();
        }
        e.preventDefault();
        if (this.mouseDownCallback) {
          this.mouseDownCallback(e);
        } else if (this.clickCallback) {
          this.clickCallback(e);
        }
        if (this.waitingForClick()) {
          this.clickCount--;
          for (var i = 0; i < this.delayedTimers.length; i++) {
            var timer = this.delayedTimers[i];
            timer.clicks--;
            if (timer.clicks === 0) {
              this.setTimer(timer.fn, timer.time, timer.data);
            }
          }
          return;
        }
      };
      drawingCanvas.ontouchend = (e) => {
        if (this.userNavigatingWithKeyboard) {
          this.exitKeyboardNavigation();
        }
        e.preventDefault();
        if (this.mouseUpCallback) {
          this.mouseUpCallback(e);
        }
      };
    }
  };
  var calculateCoordinates = (e) => {
    const canvas = e.target;
    const rect = canvas.getBoundingClientRect();
    return {
      x: Math.round(e.clientX - rect.left),
      y: Math.round(e.clientY - rect.top)
    };
  };
  MouseEvent.prototype.getX = function() {
    return calculateCoordinates(this).x;
  };
  MouseEvent.prototype.getY = function() {
    return calculateCoordinates(this).y;
  };
  if (typeof TouchEvent !== "undefined") {
    TouchEvent.prototype.getX = function() {
      return this.touches.length && calculateCoordinates(this.touches[0]).x || null;
    };
    TouchEvent.prototype.getY = function() {
      return this.touches.length && calculateCoordinates(this.touches[0]).y || null;
    };
  }
  var graphics_default = GraphicsManager;

  // src/graphics/keyboard.js
  var Keyboard = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    ENTER: 13,
    SHIFT: 16,
    SPACE: 32,
    BACKSPACE: 8,
    TAB: 9,
    CTRL: 17,
    ALT: 18,
    CAPS_LOCK: 20,
    LEFT_COMMAND: 91,
    LEFT_WINDOW: 91,
    RIGHT_WINDOW: 92,
    RIGHT_COMMAND: 93,
    SELECT: 93
  };
  Keyboard.nonEditingKeys = [
    Keyboard.LEFT,
    Keyboard.RIGHT,
    Keyboard.UP,
    Keyboard.DOWN,
    Keyboard.CTRL,
    Keyboard.SHIFT,
    Keyboard.ALT,
    Keyboard.CAPS_LOCK,
    Keyboard.LEFT_COMMAND,
    Keyboard.RIGHT_COMMAND,
    Keyboard.SELECT,
    Keyboard.LEFT_WINDOW,
    Keyboard.RIGHT_WINDOW
  ];
  Keyboard.digit = function(dig) {
    dig = dig % 10;
    return dig + 48;
  };
  Keyboard.letter = function(letter) {
    if (letter.length !== 1) {
      return -1;
    }
    return letter.toUpperCase().charCodeAt(0);
  };
  Keyboard.isEditingKey = function(keyCode) {
    return Keyboard.nonEditingKeys.indexOf(keyCode) === -1;
  };
  var keyboard_default = Keyboard;

  // src/graphics/line.js
  var Line = class extends thing_default {
    constructor(x1, y1, x2, y2) {
      super();
      __publicField(this, "type", "Line");
      if (arguments.length !== 4) {
        throw new Error("You should pass exactly 4 arguments to `new Line(x1, y1, x2, y2)`.");
      }
      if (typeof x1 !== "number" || typeof y1 !== "number" || typeof x2 !== "number" || typeof y2 !== "number") {
        throw new TypeError("You must pass 4 numbers to `new Line(x1, y1, x2, y2)`. Make sure each parameter you are passing is a number.");
      }
      if (!isFinite(x1) || !isFinite(y1) || !isFinite(x2) || !isFinite(y2)) {
        throw new TypeError("One or more of the values you passed to `new Line(x1, y1, x2, y2)` is an illegal number. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?");
      }
      this.x1 = x1;
      this.y1 = y1;
      this.x2 = x2;
      this.y2 = y2;
      this.lineWidth = 2;
      this.hasBorder = true;
    }
    get width() {
      return Math.abs(this.x2 - this.x1);
    }
    get height() {
      return Math.abs(this.y2 - this.y1);
    }
    getWidth() {
      return this.width;
    }
    getHeight() {
      return this.height;
    }
    getX() {
      return this.x;
    }
    get x() {
      return Math.min(this.x1, this.x2);
    }
    getY() {
      return this.y1;
    }
    get y() {
      return Math.min(this.y1, this.y2);
    }
    getStartX() {
      return this.x1;
    }
    getStartY() {
      return this.y1;
    }
    getEndX() {
      return this.x2;
    }
    getEndY() {
      return this.y2;
    }
    setColor(color) {
      if (arguments.length !== 1) {
        throw new Error("You should pass exactly 1 argument to `setColor(color)`.");
      }
      if (color === void 0) {
        throw new TypeError("Invalid color");
      }
      this.stroke = color;
    }
    getColor() {
      return this.stroke;
    }
    draw(context2) {
      super.draw(context2, () => {
        context2.beginPath();
        context2.moveTo(this.x1 - this.x, this.y1 - this.y);
        context2.lineTo(this.x2 - this.x, this.y2 - this.y);
        context2.closePath();
      });
    }
    containsPoint(x, y) {
      const betweenXs = this.x1 <= x && x <= this.x2 || this.x2 <= x && x <= this.x1;
      const betweenYs = this.y1 <= y && y <= this.y2 || this.y2 <= y && y <= this.y1;
      if (this.x1 == this.x2) {
        return this.x1 == x && betweenYs;
      } else {
        const slope = (this.y2 - this.y1) / (this.x2 - this.x1);
        return Math.abs(slope * (x - this.x1) - (y - this.y1)) <= this.lineWidth && betweenXs && betweenYs;
      }
    }
    setLineWidth(width) {
      if (arguments.length !== 1) {
        throw new Error("You should pass exactly 1 argument to `setLineWidth`");
      }
      if (typeof width !== "number" || !isFinite(width)) {
        throw new TypeError("You must pass a finite number to `setLineWidth(width)`. Did you perform a calculation on a variable that is not a number?");
      }
      this.lineWidth = width;
    }
    setStartpoint(x, y) {
      if (arguments.length !== 2) {
        throw new Error("You should pass exactly 2 arguments to `setStartpoint(x, y)`.");
      }
      if (typeof x !== "number" || !isFinite(x)) {
        throw new TypeError("Invalid value for x-coordinate. Make sure you are passing finite numbers to `setStartpoint(x, y)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?");
      }
      if (typeof y !== "number" || !isFinite(y)) {
        throw new TypeError("Invalid value for y-coordinate. Make sure you are passing finite numbers to `setStartpoint(x, y)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?");
      }
      this.setPosition(x, y);
    }
    setPosition(x, y) {
      if (arguments.length !== 2) {
        throw new Error("You should pass exactly 2 arguments to `setPosition(x, y)`.");
      }
      if (typeof x !== "number" || !isFinite(x)) {
        throw new TypeError("Invalid value for x-coordinate. Make sure you are passing finite numbers to `setPosition(x, y)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?");
      }
      if (typeof y !== "number" || !isFinite(y)) {
        throw new TypeError("Invalid value for y-coordinate. Make sure you are passing finite numbers to `setPosition(x, y)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?");
      }
      this.x1 = x;
      this.y1 = y;
    }
    setEndpoint(x, y) {
      if (arguments.length !== 2) {
        throw new Error("You should pass exactly 2 arguments to `setEndpoint(x, y)`.");
      }
      if (typeof x !== "number" || !isFinite(x)) {
        throw new TypeError("Invalid value for x-coordinate. Make sure you are passing finite numbers to `setEndpoint(x, y)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?");
      }
      if (typeof y !== "number" || !isFinite(y)) {
        throw new TypeError("Invalid value for y-coordinate. Make sure you are passing finite numbers to `setEndpoint(x, y)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?");
      }
      this.x2 = x;
      this.y2 = y;
    }
    move(dx, dy) {
      if (arguments.length !== 2) {
        throw new Error("You should pass exactly 2 arguments to `move(dx, dy)`.");
      }
      if (typeof dx !== "number" || !isFinite(dx)) {
        throw new TypeError("Invalid number passed for `dx`. Make sure you are passing finite numbers to `move(dx, dy)`.");
      }
      if (typeof dy !== "number" || !isFinite(dy)) {
        throw new TypeError("Invalid number passed for `dy`. Make sure you are passing finite numbers to `move(dx, dy)`.");
      }
      this.x1 += dx;
      this.y1 += dy;
      this.x2 += dx;
      this.y2 += dy;
    }
  };

  // src/graphics/oval.js
  var Oval = class extends thing_default {
    constructor(width, height) {
      super();
      __publicField(this, "type", "Oval");
      __publicField(this, "anchor", { vertical: 0.5, horizontal: 0.5 });
      if (arguments.length !== 2) {
        throw new Error("You should pass exactly 2 arguments to `new Oval(width, height)`.");
      }
      if (typeof width !== "number" || !isFinite(width)) {
        throw new TypeError("Invalid value for `width`. Make sure you are passing finite numbers to `new Oval(width, height)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?");
      }
      if (typeof height !== "number" || !isFinite(height)) {
        throw new TypeError("Invalid value for `height`. Make sure you are passing finite numbers to `new Oval(width, height)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?");
      }
      this.width = Math.max(0, width);
      this.height = Math.max(0, height);
    }
    draw(context2) {
      super.draw(context2, () => {
        context2.translate(this.width / 2, this.height / 2);
        context2.beginPath();
        context2.ellipse(0, 0, this.width / 2, this.height / 2, 2 * Math.PI, 0, 2 * Math.PI);
        context2.closePath();
        context2.translate(-this.width / 2, -this.height / 2);
      });
    }
    getHeight() {
      return this.height;
    }
    getWidth() {
      return this.width;
    }
    setWidth(width) {
      if (arguments.length !== 1) {
        throw new Error("You should pass exactly 1 argument to `setWidth(width)`.");
      }
      if (typeof width !== "number" || !isFinite(width)) {
        throw new TypeError("You must pass a finite number to `setWidth(width)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?");
      }
      this.width = Math.max(0, width);
    }
    setHeight(height) {
      if (arguments.length !== 1) {
        throw new Error("You should pass exactly 1 argument to `setHeight(height)`.");
      }
      if (typeof height !== "number" || !isFinite(height)) {
        throw new TypeError("You must pass a finite number to `setHeight(height)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?");
      }
      this.height = Math.max(0, height);
    }
    _containsPoint(x, y) {
      x -= this.width * (0.5 - this.anchor.horizontal);
      y -= this.height * (0.5 - this.anchor.vertical);
      var xRadiusSquared = Math.pow(this.width / 2, 2);
      var yRadiusSquared = Math.pow(this.height / 2, 2);
      var xDifferenceSquared = Math.pow(x - this.x, 2);
      var yDifferenceSquared = Math.pow(y - this.y, 2);
      var result = xDifferenceSquared / xRadiusSquared + yDifferenceSquared / yRadiusSquared;
      return result <= 1;
    }
  };

  // src/graphics/polygon.js
  var Polygon = class extends thing_default {
    constructor() {
      super();
      __publicField(this, "type", "Polygon");
      if (arguments.length !== 0) {
        throw new Error("You should pass exactly 0 arguments to `new Polygon()`");
      }
      this.points = [];
      this.width = 0;
      this.height = 0;
    }
    draw(context2) {
      if (this.points.length === 0) {
        return;
      }
      super.draw(context2, () => {
        context2.save();
        context2.translate(-this.x, -this.y);
        context2.beginPath();
        const first = this.points[0];
        let current;
        context2.moveTo(first.x, first.y);
        for (let i = 1; i < this.points.length; i++) {
          current = this.points[i];
          context2.lineTo(current.x, current.y);
        }
        context2.closePath();
        context2.restore();
      });
    }
    _containsPoint(x, y) {
      x += this.width * this.anchor.horizontal;
      y += this.height * this.anchor.vertical;
      let previousOrientation = -1;
      let x1, x2, y1, y2;
      for (let i = 0; i < this.points.length; i++) {
        x1 = this.points[i].x;
        y1 = this.points[i].y;
        x2 = this.points[(i + 1) % this.points.length].x;
        y2 = this.points[(i + 1) % this.points.length].y;
        let orientation = (y - y1) * (x2 - x1) - (x - x1) * (y2 - y1) <= 0;
        if (previousOrientation < 0) {
          previousOrientation = orientation;
        } else {
          if (previousOrientation !== orientation) {
            return false;
          }
        }
      }
      return true;
    }
    getWidth() {
      return this.width;
    }
    getHeight() {
      return this.height;
    }
    addPoint(x, y) {
      if (arguments.length !== 2) {
        throw new Error("You should pass exactly 2 arguments to `addPoint(x, y)`");
      }
      if (typeof x !== "number" || !isFinite(x)) {
        throw new TypeError("Invalid value for x-coordinate. Make sure you are passing finite numbers to `addPoint(x, y)`.");
      }
      if (typeof y !== "number" || !isFinite(y)) {
        throw new TypeError("Invalid value for y-coordinate. Make sure you are passing finite numbers to `addPoint(x, y)`.");
      }
      this.points.push({ x, y });
      for (let i = 0; i < this.points.length; i++) {
        if (Math.abs(x - this.points[i].x) > this.width) {
          this.width = Math.abs(x - this.points[i].x);
        }
        if (Math.abs(y - this.points[i].y) > this.height) {
          this.height = Math.abs(y - this.points[i].y);
        }
      }
    }
    move(dx, dy) {
      if (arguments.length !== 2) {
        throw new Error("You should pass exactly 2 arguments to `move(dx, dy).`");
      }
      if (typeof dx !== "number" || !isFinite(dx)) {
        throw new TypeError("Invalid number passed for `dx`. Make sure you are passing finite numbers to `move(dx, dy)`.");
      }
      if (typeof dy !== "number" || !isFinite(dy)) {
        throw new TypeError("Invalid number passed for `dy`. Make sure you are passing finite numbers to `move(dx, dy)`.");
      }
      for (let i = 0; i < this.points.length; i++) {
        this.points[i].x += dx;
        this.points[i].y += dy;
      }
      this.x += dx;
      this.y += dy;
    }
    setPosition(x, y) {
      const dx = x - this.x;
      const dy = y - this.y;
      this.move(dx, dy);
    }
    _updateBounds() {
      let minX = Infinity;
      let maxX = -Infinity;
      let minY = Infinity;
      let maxY = -Infinity;
      this.points.forEach(({ x, y }) => {
        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x);
        minY = Math.min(minY, y);
        maxY = Math.max(maxY, y);
      });
      const width = maxX - minX;
      const height = maxY - minY;
      this.bounds = {
        left: minX - this.anchor.horizontal * width,
        right: maxX - this.anchor.horizontal * width,
        top: minY - this.anchor.vertical * height,
        bottom: maxY - this.anchor.vertical * height
      };
      this._boundsInvalidated = false;
      this._lastCalculatedBoundsID++;
    }
  };
  var polygon_default = Polygon;

  // src/graphics/rectangle.js
  var Rectangle = class extends thing_default {
    constructor(width, height) {
      super();
      __publicField(this, "type", "Rectangle");
      if (arguments.length !== 2) {
        throw new Error("You should pass exactly 2 arguments to `new Rectangle(width, height)`.");
      }
      if (typeof width !== "number" || !isFinite(width)) {
        throw new TypeError("Invalid value for `width`. Make sure you are passing finite numbers to `new Rectangle(width, height)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?");
      }
      if (typeof height !== "number" || !isFinite(height)) {
        throw new TypeError("Invalid value for `height`. Make sure you are passing finite numbers to `new Rectangle(width, height)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?");
      }
      this.width = Math.max(0, width);
      this.height = Math.max(0, height);
    }
    draw(context2) {
      super.draw(context2, () => {
        context2.beginPath();
        context2.rect(0, 0, this.width, this.height);
        context2.closePath();
      });
    }
    setSize(width, height) {
      if (arguments.length !== 2) {
        throw new Error("You should pass exactly 2 arguments to `setSize(width, height)`.");
      }
      if (typeof width !== "number" || !isFinite(width)) {
        throw new TypeError("Invalid value for `width`. Make sure you are passing finite numbers to `setSize(width, height)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?");
      }
      if (typeof height !== "number" || !isFinite(height)) {
        throw new TypeError("Invalid value for `height`. Make sure you are passing finite numbers to `setSize(width, height)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?");
      }
      this.width = Math.max(0, width);
      this.height = Math.max(0, height);
    }
    setWidth(width) {
      if (arguments.length !== 1) {
        throw new Error("You should pass exactly 1 argument to `setWidth(width)`");
      }
      if (typeof width !== "number" || !isFinite(width)) {
        throw new TypeError("Invalid value for `width`. Make sure you are passing finite numbers to `setWidth(width)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?");
      }
      this.width = Math.max(0, width);
    }
    setHeight(height) {
      if (arguments.length !== 1) {
        throw new Error("You should pass exactly 1 argument to `setHeight(height)`");
      }
      if (typeof height !== "number" || !isFinite(height)) {
        throw new TypeError("Invalid value for `height`. Make sure you are passing finite numbers to `setHeight(height)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?");
      }
      this.height = Math.max(0, height);
    }
    _containsPoint(x, y) {
      x += this.width * this.anchor.horizontal;
      y += this.height * this.anchor.vertical;
      return x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height;
    }
    getWidth() {
      return this.width;
    }
    getHeight() {
      return this.height;
    }
  };
  var rectangle_default = Rectangle;

  // src/graphics/text.js
  var Text = class extends thing_default {
    constructor(label, font = "20pt Arial") {
      super();
      __publicField(this, "type", "Text");
      __publicField(this, "anchor", { horizontal: 0, vertical: 1 });
      if (arguments.length < 1) {
        throw new Error("You should pass at least one argument to `new Text(label, font)`. `label` is a required parameter.");
      }
      if (typeof label !== "string" && typeof label !== "number") {
        throw new TypeError("Invalid value for `label`. You passed a value of type " + typeof label + " but a string or number is required.");
      }
      if (typeof font !== "string") {
        throw new TypeError("Invalid value for `font`. You passed a value of type " + typeof label + " but a string is required.");
      }
      this.label = label;
      this.font = font;
      this.resetDimensions();
    }
    resetDimensions() {
      const canvas = document.createElement("canvas");
      const context2 = canvas.getContext("2d");
      context2.font = this.font;
      this.width = context2.measureText(this.label).width;
      this.height = context2.measureText("m").width * 1.2;
    }
    draw(context2) {
      this.resetDimensions();
      super.draw(context2, () => {
        context2.translate(0, this.height);
        context2.font = this.font;
        context2.beginPath();
        context2.fillText(this.label, 0, 0);
        context2.translate(0, -this.height);
      });
    }
    describe() {
      return super.describe() + this.label;
    }
    setFont(font) {
      if (arguments.length !== 1) {
        throw new Error("You should pass exactly 1 argument to `setFont`");
      }
      if (typeof font !== "string") {
        throw new TypeError("Invalid value passed to `setFont`. You passed a value of type " + typeof font + ", but a string is required.");
      }
      this.font = font;
      this.resetDimensions();
    }
    setLabel(label) {
      if (arguments.length !== 1) {
        throw new Error("You should pass exactly 1 argument to `setLabel`");
      }
      if (typeof label !== "string" && typeof label !== "number") {
        throw new TypeError("Invalid value passed to `setLabel`. You passed a value of type " + typeof label + ", but a string or number is required.");
      }
      this.label = label;
    }
    setText(label) {
      if (arguments.length !== 1) {
        throw new Error("You should pass exactly 1 argument to `setText`");
      }
      if (typeof label !== "string" && typeof label !== "number") {
        throw new TypeError("Invalid value passed to `setText`. You passed a value of type " + typeof label + ", but a string or number is required.");
      }
      this.label = label;
    }
    getLabel() {
      return this.label;
    }
    getText() {
      return this.label;
    }
    getWidth() {
      return this.width;
    }
    getHeight() {
      return this.height;
    }
    _containsPoint(x, y) {
      x += this.width * this.anchor.horizontal;
      y -= this.height * (1 - this.anchor.vertical);
      return x >= this.x && x <= this.x + this.width && y <= this.y && y >= this.y - this.height;
    }
  };
  __publicField(Text, "defaultContext", null);
  var text_default = Text;

  // src/graphics/webimage.js
  var UNDEFINED = -1;
  var NOT_LOADED = 0;
  var NUM_CHANNELS = 4;
  var RED = 0;
  var GREEN = 1;
  var BLUE = 2;
  var ALPHA = 3;
  var WebImage = class extends thing_default {
    constructor(filename) {
      super();
      __publicField(this, "type", "WebImage");
      if (typeof filename !== "string") {
        throw new TypeError(`You must pass a string to \`new WebImage(filename)\` that has the image's URL. Received type ${typeof filename}`);
      }
      this.setImage(filename);
      this._hiddenCanvasOutOfSync = false;
      this.imageLoaded = false;
    }
    loaded(callback) {
      if (this.imageLoaded) {
        callback();
      }
      this.loadfn = callback;
    }
    setImage(filename) {
      if (typeof filename !== "string") {
        throw new TypeError(`You must pass a string to \`setImage(filename)\` that has the image's URL. Received type ${typeof filename}`);
      }
      this._hiddenCanvas = document.createElement("canvas");
      this._hiddenCanvas.width = 1;
      this._hiddenCanvas.height = 1;
      if (this.image) {
        this.image.onload = null;
      }
      this.image = new Image();
      this.image.crossOrigin = "anonymous";
      this.image.src = filename;
      this.filename = filename;
      this.width = null;
      this.height = null;
      this.data = NOT_LOADED;
      this.image.onload = () => {
        this.imageLoaded = true;
        this.checkDimensions();
        this.loadPixelData();
        if (this.loadfn) {
          this.loadfn();
        }
      };
    }
    checkDimensions() {
      if (this.width === null || this.height === null) {
        this.width = this.image.width;
        this.height = this.image.height;
      }
    }
    draw(context2) {
      if (this.data === NOT_LOADED) {
        return;
      }
      if (this._hiddenCanvasOutOfSync) {
        this.updateHiddenCanvas();
      }
      super.draw(context2, () => {
        context2.beginPath();
        context2.drawImage(this._hiddenCanvas, 0, 0, this.width * this.width / this.data.width, this.height * this.height / this.data.height);
        context2.closePath();
      });
    }
    loadPixelData() {
      if (this.data === NOT_LOADED) {
        this._hiddenCanvas.width = this.width;
        this._hiddenCanvas.height = this.height;
        const context2 = this._hiddenCanvas.getContext("2d");
        context2.drawImage(this.image, 0, 0, this.width, this.height);
        this.data = context2.getImageData(0, 0, this.width, this.height);
        this._hiddenCanvasOutOfSync = false;
      }
      return this.data;
    }
    _containsPoint(x, y) {
      x += this.width * this.anchor.horizontal;
      y += this.height * this.anchor.vertical;
      return x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height;
    }
    getWidth() {
      return this.width;
    }
    getHeight() {
      return this.height;
    }
    setSize(width, height) {
      if (arguments.length !== 2) {
        throw new Error("You should pass exactly 2 arguments to `setSize(width, height)`.");
      }
      if (typeof width !== "number" || !isFinite(width)) {
        throw new TypeError(`Invalid value for \`width\`. Received type ${typeof width}`);
      }
      if (typeof height !== "number" || !isFinite(height)) {
        throw new TypeError(`Invalid value for \`height\`. Received type ${typeof height}`);
      }
      this.width = Math.max(0, width);
      this.height = Math.max(0, height);
      this._hiddenCanvasOutOfSync = true;
    }
    getPixel(x, y) {
      if (this.data === NOT_LOADED || x > this.width || x < 0 || y > this.height || y < 0) {
        return [UNDEFINED, UNDEFINED, UNDEFINED, UNDEFINED];
      } else {
        const index = NUM_CHANNELS * (y * this.width + x);
        const pixel = [
          this.data.data[index + RED],
          this.data.data[index + GREEN],
          this.data.data[index + BLUE],
          this.data.data[index + ALPHA]
        ];
        return pixel;
      }
    }
    getRed(x, y) {
      return this.getPixel(x, y)[RED];
    }
    getGreen(x, y) {
      return this.getPixel(x, y)[GREEN];
    }
    getBlue(x, y) {
      return this.getPixel(x, y)[BLUE];
    }
    getAlpha(x, y) {
      return this.getPixel(x, y)[ALPHA];
    }
    setPixel(x, y, component, val) {
      if (this.data !== NOT_LOADED && !(x < 0 || y < 0 || x > this.width || y > this.height)) {
        const index = NUM_CHANNELS * (y * this.width + x);
        this.data.data[index + component] = val;
        this._hiddenCanvasOutOfSync = true;
      }
    }
    setRed(x, y, val) {
      this.setPixel(x, y, RED, val);
    }
    setGreen(x, y, val) {
      this.setPixel(x, y, GREEN, val);
    }
    setBlue(x, y, val) {
      this.setPixel(x, y, BLUE, val);
    }
    setAlpha(x, y, val) {
      this.setPixel(x, y, ALPHA, val);
    }
    setImageData(imageData) {
      this.image = null;
      this.data = imageData;
      this.width = imageData.width;
      this.height = imageData.height;
      this._hiddenCanvasOutOfSync = true;
    }
    updateHiddenCanvas() {
      this._hiddenCanvas.width = Math.max(this._hiddenCanvas.width, this.width);
      this._hiddenCanvas.height = Math.max(this._hiddenCanvas.height, this.height);
      const context2 = this._hiddenCanvas.getContext("2d");
      context2.putImageData(this.data, 0, 0);
      this._hiddenCanvasOutOfSync = false;
    }
  };
  var webimage_default = WebImage;

  // src/graphics/imagelibrary.js
  var imagelibrary_default = {
    Characters: {
      penguin: "https://static.codehs.com/img/library/characters/penguin.png",
      monkey: "https://static.codehs.com/img/library/characters/monkey.jpg",
      leopard: "https://static.codehs.com/img/library/characters/leopard.jpg",
      chameleon: "https://static.codehs.com/img/library/characters/chameleon.jpg",
      lizard: "https://static.codehs.com/img/library/characters/lizard.jpg",
      butterfly: "https://static.codehs.com/img/library/characters/butterfly.jpg",
      secretMessage: "https://static.codehs.com/img/library/characters/secretMessage.png"
    },
    Objects: {
      icicle: "https://static.codehs.com/img/library/objects/icicle.png",
      helicopter: "https://static.codehs.com/img/library/objects/helicopter.png",
      asteroid: "https://static.codehs.com/img/library/objects/asteroid.png",
      soccerBall: "https://static.codehs.com/img/library/objects/soccerBall.png"
    },
    Landscapes: {
      flowers: "https://static.codehs.com/img/library/landscapes/flowers.jpg"
    }
  };

  // src/sound/audio.js
  var NativeAudio = Audio;
  var CrossOriginAudio = class {
    constructor(url) {
      const audioElement = new NativeAudio(url);
      audioElement.crossOrigin = "anonymous";
      return audioElement;
    }
  };

  // src/sound/audioContext.js
  var getAudioContext = () => {
    const ContextClass = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.oAudioContext || window.msAudioContext;
    if (ContextClass) {
      try {
        return new ContextClass();
      } catch (e) {
        console.error("Too many AudioContexts are in use. Please close all browser windows and retry.");
        return 0;
      }
    } else {
      console.error("Web Audio is not supported in this browser. Please use the most up to date version of Chrome, Firefox, or Safari.");
      return 0;
    }
  };

  // src/sound/index.js
  var AudioManager = class extends manager_default {
    constructor(options = {}) {
      super(options);
    }
    cleanup() {
      var _a3;
      this.audioChangeCallback = null;
      (_a3 = this.audioContext) == null ? void 0 : _a3.close();
    }
    getAudioContext() {
      if (this.audioContext) {
        return this.audioContext;
      }
      this.audioContext = getAudioContext();
      return this.audioContext;
    }
    audioChangeMethod(mediaElement, fn) {
      const audioContext = this.getAudioContext();
      if (!audioContext) {
        return;
      }
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 128;
      const source = audioContext.createMediaElementSource(mediaElement);
      source.crossOrigin = "anonymous";
      source.connect(analyser);
      const gainNode = audioContext.createGain();
      source.connect(gainNode);
      gainNode.connect(audioContext.destination);
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      const audioChangeCallback = this.withErrorHandler(fn);
      this.setTimer(() => {
        analyser.getByteFrequencyData(dataArray);
        audioChangeCallback(dataArray);
      });
    }
  };

  // node_modules/tone/build/esm/version.js
  var version = "14.7.77";

  // node_modules/standardized-audio-context/build/es2019/module.js
  var import_automation_events2 = __toModule(require_bundle());

  // node_modules/standardized-audio-context/build/es2019/factories/abort-error.js
  var createAbortError = () => new DOMException("", "AbortError");

  // node_modules/standardized-audio-context/build/es2019/factories/add-active-input-connection-to-audio-node.js
  var createAddActiveInputConnectionToAudioNode = (insertElementInSet2) => {
    return (activeInputs, source, [output, input, eventListener], ignoreDuplicates) => {
      insertElementInSet2(activeInputs[input], [source, output, eventListener], (activeInputConnection) => activeInputConnection[0] === source && activeInputConnection[1] === output, ignoreDuplicates);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/add-audio-node-connections.js
  var createAddAudioNodeConnections = (audioNodeConnectionsStore) => {
    return (audioNode, audioNodeRenderer, nativeAudioNode) => {
      const activeInputs = [];
      for (let i = 0; i < nativeAudioNode.numberOfInputs; i += 1) {
        activeInputs.push(new Set());
      }
      audioNodeConnectionsStore.set(audioNode, {
        activeInputs,
        outputs: new Set(),
        passiveInputs: new WeakMap(),
        renderer: audioNodeRenderer
      });
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/add-audio-param-connections.js
  var createAddAudioParamConnections = (audioParamConnectionsStore) => {
    return (audioParam, audioParamRenderer) => {
      audioParamConnectionsStore.set(audioParam, { activeInputs: new Set(), passiveInputs: new WeakMap(), renderer: audioParamRenderer });
    };
  };

  // node_modules/standardized-audio-context/build/es2019/globals.js
  var ACTIVE_AUDIO_NODE_STORE = new WeakSet();
  var AUDIO_NODE_CONNECTIONS_STORE = new WeakMap();
  var AUDIO_NODE_STORE = new WeakMap();
  var AUDIO_PARAM_CONNECTIONS_STORE = new WeakMap();
  var AUDIO_PARAM_STORE = new WeakMap();
  var CONTEXT_STORE = new WeakMap();
  var EVENT_LISTENERS = new WeakMap();
  var CYCLE_COUNTERS = new WeakMap();
  var NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS = new WeakMap();
  var NODE_TO_PROCESSOR_MAPS = new WeakMap();

  // node_modules/standardized-audio-context/build/es2019/helpers/is-constructible.js
  var handler = {
    construct() {
      return handler;
    }
  };
  var isConstructible = (constructible) => {
    try {
      const proxy = new Proxy(constructible, handler);
      new proxy();
    } catch (e) {
      return false;
    }
    return true;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/split-import-statements.js
  var IMPORT_STATEMENT_REGEX = /^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/;
  var splitImportStatements = (source, url) => {
    const importStatements = [];
    let sourceWithoutImportStatements = source.replace(/^[\s]+/, "");
    let result = sourceWithoutImportStatements.match(IMPORT_STATEMENT_REGEX);
    while (result !== null) {
      const unresolvedUrl = result[1].slice(1, -1);
      const importStatementWithResolvedUrl = result[0].replace(/([\s]+)?;?$/, "").replace(unresolvedUrl, new URL(unresolvedUrl, url).toString());
      importStatements.push(importStatementWithResolvedUrl);
      sourceWithoutImportStatements = sourceWithoutImportStatements.slice(result[0].length).replace(/^[\s]+/, "");
      result = sourceWithoutImportStatements.match(IMPORT_STATEMENT_REGEX);
    }
    return [importStatements.join(";"), sourceWithoutImportStatements];
  };

  // node_modules/standardized-audio-context/build/es2019/factories/add-audio-worklet-module.js
  var verifyParameterDescriptors = (parameterDescriptors) => {
    if (parameterDescriptors !== void 0 && !Array.isArray(parameterDescriptors)) {
      throw new TypeError("The parameterDescriptors property of given value for processorCtor is not an array.");
    }
  };
  var verifyProcessorCtor = (processorCtor) => {
    if (!isConstructible(processorCtor)) {
      throw new TypeError("The given value for processorCtor should be a constructor.");
    }
    if (processorCtor.prototype === null || typeof processorCtor.prototype !== "object") {
      throw new TypeError("The given value for processorCtor should have a prototype.");
    }
  };
  var createAddAudioWorkletModule = (cacheTestResult2, createNotSupportedError2, evaluateSource, exposeCurrentFrameAndCurrentTime2, fetchSource, getNativeContext2, getOrCreateBackupOfflineAudioContext2, isNativeOfflineAudioContext2, nativeAudioWorkletNodeConstructor2, ongoingRequests, resolvedRequests, testAudioWorkletProcessorPostMessageSupport, window3) => {
    let index = 0;
    return (context2, moduleURL, options = { credentials: "omit" }) => {
      const resolvedRequestsOfContext = resolvedRequests.get(context2);
      if (resolvedRequestsOfContext !== void 0 && resolvedRequestsOfContext.has(moduleURL)) {
        return Promise.resolve();
      }
      const ongoingRequestsOfContext = ongoingRequests.get(context2);
      if (ongoingRequestsOfContext !== void 0) {
        const promiseOfOngoingRequest = ongoingRequestsOfContext.get(moduleURL);
        if (promiseOfOngoingRequest !== void 0) {
          return promiseOfOngoingRequest;
        }
      }
      const nativeContext = getNativeContext2(context2);
      const promise = nativeContext.audioWorklet === void 0 ? fetchSource(moduleURL).then(([source, absoluteUrl]) => {
        const [importStatements, sourceWithoutImportStatements] = splitImportStatements(source, absoluteUrl);
        const wrappedSource = `${importStatements};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${sourceWithoutImportStatements}
})})(window,'_AWGS')`;
        return evaluateSource(wrappedSource);
      }).then(() => {
        const evaluateAudioWorkletGlobalScope = window3._AWGS.pop();
        if (evaluateAudioWorkletGlobalScope === void 0) {
          throw new SyntaxError();
        }
        exposeCurrentFrameAndCurrentTime2(nativeContext.currentTime, nativeContext.sampleRate, () => evaluateAudioWorkletGlobalScope(class AudioWorkletProcessor {
        }, void 0, (name, processorCtor) => {
          if (name.trim() === "") {
            throw createNotSupportedError2();
          }
          const nodeNameToProcessorConstructorMap = NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS.get(nativeContext);
          if (nodeNameToProcessorConstructorMap !== void 0) {
            if (nodeNameToProcessorConstructorMap.has(name)) {
              throw createNotSupportedError2();
            }
            verifyProcessorCtor(processorCtor);
            verifyParameterDescriptors(processorCtor.parameterDescriptors);
            nodeNameToProcessorConstructorMap.set(name, processorCtor);
          } else {
            verifyProcessorCtor(processorCtor);
            verifyParameterDescriptors(processorCtor.parameterDescriptors);
            NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS.set(nativeContext, new Map([[name, processorCtor]]));
          }
        }, nativeContext.sampleRate, void 0, void 0));
      }) : Promise.all([
        fetchSource(moduleURL),
        Promise.resolve(cacheTestResult2(testAudioWorkletProcessorPostMessageSupport, testAudioWorkletProcessorPostMessageSupport))
      ]).then(([[source, absoluteUrl], isSupportingPostMessage]) => {
        const currentIndex = index + 1;
        index = currentIndex;
        const [importStatements, sourceWithoutImportStatements] = splitImportStatements(source, absoluteUrl);
        const patchedAudioWorkletProcessor = isSupportingPostMessage ? "AudioWorkletProcessor" : "class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}";
        const memberDefinition = isSupportingPostMessage ? "" : "__c = (a) => a.forEach(e=>this.__b.add(e.buffer));";
        const bufferRegistration = isSupportingPostMessage ? "" : "i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));";
        const wrappedSource = `${importStatements};((AudioWorkletProcessor,registerProcessor)=>{${sourceWithoutImportStatements}
})(${patchedAudioWorkletProcessor},(n,p)=>registerProcessor(n,class extends p{${memberDefinition}process(i,o,p){${bufferRegistration}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${currentIndex}',class extends AudioWorkletProcessor{process(){return !1}})`;
        const blob = new Blob([wrappedSource], { type: "application/javascript; charset=utf-8" });
        const url = URL.createObjectURL(blob);
        return nativeContext.audioWorklet.addModule(url, options).then(() => {
          if (isNativeOfflineAudioContext2(nativeContext)) {
            return nativeContext;
          }
          const backupOfflineAudioContext = getOrCreateBackupOfflineAudioContext2(nativeContext);
          return backupOfflineAudioContext.audioWorklet.addModule(url, options).then(() => backupOfflineAudioContext);
        }).then((nativeContextOrBackupOfflineAudioContext) => {
          if (nativeAudioWorkletNodeConstructor2 === null) {
            throw new SyntaxError();
          }
          try {
            new nativeAudioWorkletNodeConstructor2(nativeContextOrBackupOfflineAudioContext, `__sac${currentIndex}`);
          } catch (e) {
            throw new SyntaxError();
          }
        }).finally(() => URL.revokeObjectURL(url));
      });
      if (ongoingRequestsOfContext === void 0) {
        ongoingRequests.set(context2, new Map([[moduleURL, promise]]));
      } else {
        ongoingRequestsOfContext.set(moduleURL, promise);
      }
      promise.then(() => {
        const updatedResolvedRequestsOfContext = resolvedRequests.get(context2);
        if (updatedResolvedRequestsOfContext === void 0) {
          resolvedRequests.set(context2, new Set([moduleURL]));
        } else {
          updatedResolvedRequestsOfContext.add(moduleURL);
        }
      }).finally(() => {
        const updatedOngoingRequestsOfContext = ongoingRequests.get(context2);
        if (updatedOngoingRequestsOfContext !== void 0) {
          updatedOngoingRequestsOfContext.delete(moduleURL);
        }
      });
      return promise;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/get-value-for-key.js
  var getValueForKey = (map2, key) => {
    const value = map2.get(key);
    if (value === void 0) {
      throw new Error("A value with the given key could not be found.");
    }
    return value;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/pick-element-from-set.js
  var pickElementFromSet = (set, predicate) => {
    const matchingElements = Array.from(set).filter(predicate);
    if (matchingElements.length > 1) {
      throw Error("More than one element was found.");
    }
    if (matchingElements.length === 0) {
      throw Error("No element was found.");
    }
    const [matchingElement] = matchingElements;
    set.delete(matchingElement);
    return matchingElement;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/delete-passive-input-connection-to-audio-node.js
  var deletePassiveInputConnectionToAudioNode = (passiveInputs, source, output, input) => {
    const passiveInputConnections = getValueForKey(passiveInputs, source);
    const matchingConnection = pickElementFromSet(passiveInputConnections, (passiveInputConnection) => passiveInputConnection[0] === output && passiveInputConnection[1] === input);
    if (passiveInputConnections.size === 0) {
      passiveInputs.delete(source);
    }
    return matchingConnection;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/get-event-listeners-of-audio-node.js
  var getEventListenersOfAudioNode = (audioNode) => {
    return getValueForKey(EVENT_LISTENERS, audioNode);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/set-internal-state-to-active.js
  var setInternalStateToActive = (audioNode) => {
    if (ACTIVE_AUDIO_NODE_STORE.has(audioNode)) {
      throw new Error("The AudioNode is already stored.");
    }
    ACTIVE_AUDIO_NODE_STORE.add(audioNode);
    getEventListenersOfAudioNode(audioNode).forEach((eventListener) => eventListener(true));
  };

  // node_modules/standardized-audio-context/build/es2019/guards/audio-worklet-node.js
  var isAudioWorkletNode = (audioNode) => {
    return "port" in audioNode;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/set-internal-state-to-passive.js
  var setInternalStateToPassive = (audioNode) => {
    if (!ACTIVE_AUDIO_NODE_STORE.has(audioNode)) {
      throw new Error("The AudioNode is not stored.");
    }
    ACTIVE_AUDIO_NODE_STORE.delete(audioNode);
    getEventListenersOfAudioNode(audioNode).forEach((eventListener) => eventListener(false));
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/set-internal-state-to-passive-when-necessary.js
  var setInternalStateToPassiveWhenNecessary = (audioNode, activeInputs) => {
    if (!isAudioWorkletNode(audioNode) && activeInputs.every((connections) => connections.size === 0)) {
      setInternalStateToPassive(audioNode);
    }
  };

  // node_modules/standardized-audio-context/build/es2019/factories/add-connection-to-audio-node.js
  var createAddConnectionToAudioNode = (addActiveInputConnectionToAudioNode2, addPassiveInputConnectionToAudioNode2, connectNativeAudioNodeToNativeAudioNode2, deleteActiveInputConnectionToAudioNode2, disconnectNativeAudioNodeFromNativeAudioNode2, getAudioNodeConnections2, getAudioNodeTailTime2, getEventListenersOfAudioNode2, getNativeAudioNode2, insertElementInSet2, isActiveAudioNode2, isPartOfACycle2, isPassiveAudioNode2) => {
    const tailTimeTimeoutIds = new WeakMap();
    return (source, destination, output, input, isOffline) => {
      const { activeInputs, passiveInputs } = getAudioNodeConnections2(destination);
      const { outputs } = getAudioNodeConnections2(source);
      const eventListeners = getEventListenersOfAudioNode2(source);
      const eventListener = (isActive) => {
        const nativeDestinationAudioNode = getNativeAudioNode2(destination);
        const nativeSourceAudioNode = getNativeAudioNode2(source);
        if (isActive) {
          const partialConnection = deletePassiveInputConnectionToAudioNode(passiveInputs, source, output, input);
          addActiveInputConnectionToAudioNode2(activeInputs, source, partialConnection, false);
          if (!isOffline && !isPartOfACycle2(source)) {
            connectNativeAudioNodeToNativeAudioNode2(nativeSourceAudioNode, nativeDestinationAudioNode, output, input);
          }
          if (isPassiveAudioNode2(destination)) {
            setInternalStateToActive(destination);
          }
        } else {
          const partialConnection = deleteActiveInputConnectionToAudioNode2(activeInputs, source, output, input);
          addPassiveInputConnectionToAudioNode2(passiveInputs, input, partialConnection, false);
          if (!isOffline && !isPartOfACycle2(source)) {
            disconnectNativeAudioNodeFromNativeAudioNode2(nativeSourceAudioNode, nativeDestinationAudioNode, output, input);
          }
          const tailTime = getAudioNodeTailTime2(destination);
          if (tailTime === 0) {
            if (isActiveAudioNode2(destination)) {
              setInternalStateToPassiveWhenNecessary(destination, activeInputs);
            }
          } else {
            const tailTimeTimeoutId = tailTimeTimeoutIds.get(destination);
            if (tailTimeTimeoutId !== void 0) {
              clearTimeout(tailTimeTimeoutId);
            }
            tailTimeTimeoutIds.set(destination, setTimeout(() => {
              if (isActiveAudioNode2(destination)) {
                setInternalStateToPassiveWhenNecessary(destination, activeInputs);
              }
            }, tailTime * 1e3));
          }
        }
      };
      if (insertElementInSet2(outputs, [destination, output, input], (outputConnection) => outputConnection[0] === destination && outputConnection[1] === output && outputConnection[2] === input, true)) {
        eventListeners.add(eventListener);
        if (isActiveAudioNode2(source)) {
          addActiveInputConnectionToAudioNode2(activeInputs, source, [output, input, eventListener], true);
        } else {
          addPassiveInputConnectionToAudioNode2(passiveInputs, input, [source, output, eventListener], true);
        }
        return true;
      }
      return false;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/add-passive-input-connection-to-audio-node.js
  var createAddPassiveInputConnectionToAudioNode = (insertElementInSet2) => {
    return (passiveInputs, input, [source, output, eventListener], ignoreDuplicates) => {
      const passiveInputConnections = passiveInputs.get(source);
      if (passiveInputConnections === void 0) {
        passiveInputs.set(source, new Set([[output, input, eventListener]]));
      } else {
        insertElementInSet2(passiveInputConnections, [output, input, eventListener], (passiveInputConnection) => passiveInputConnection[0] === output && passiveInputConnection[1] === input, ignoreDuplicates);
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/add-silent-connection.js
  var createAddSilentConnection = (createNativeGainNode2) => {
    return (nativeContext, nativeAudioScheduledSourceNode) => {
      const nativeGainNode = createNativeGainNode2(nativeContext, {
        channelCount: 1,
        channelCountMode: "explicit",
        channelInterpretation: "discrete",
        gain: 0
      });
      nativeAudioScheduledSourceNode.connect(nativeGainNode).connect(nativeContext.destination);
      const disconnect2 = () => {
        nativeAudioScheduledSourceNode.removeEventListener("ended", disconnect2);
        nativeAudioScheduledSourceNode.disconnect(nativeGainNode);
        nativeGainNode.disconnect();
      };
      nativeAudioScheduledSourceNode.addEventListener("ended", disconnect2);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/add-unrendered-audio-worklet-node.js
  var createAddUnrenderedAudioWorkletNode = (getUnrenderedAudioWorkletNodes2) => {
    return (nativeContext, audioWorkletNode) => {
      getUnrenderedAudioWorkletNodes2(nativeContext).add(audioWorkletNode);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/analyser-node-constructor.js
  var DEFAULT_OPTIONS = {
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers",
    fftSize: 2048,
    maxDecibels: -30,
    minDecibels: -100,
    smoothingTimeConstant: 0.8
  };
  var createAnalyserNodeConstructor = (audionNodeConstructor, createAnalyserNodeRenderer2, createIndexSizeError2, createNativeAnalyserNode2, getNativeContext2, isNativeOfflineAudioContext2) => {
    return class AnalyserNode extends audionNodeConstructor {
      constructor(context2, options) {
        const nativeContext = getNativeContext2(context2);
        const mergedOptions = __spreadValues(__spreadValues({}, DEFAULT_OPTIONS), options);
        const nativeAnalyserNode = createNativeAnalyserNode2(nativeContext, mergedOptions);
        const analyserNodeRenderer = isNativeOfflineAudioContext2(nativeContext) ? createAnalyserNodeRenderer2() : null;
        super(context2, false, nativeAnalyserNode, analyserNodeRenderer);
        this._nativeAnalyserNode = nativeAnalyserNode;
      }
      get fftSize() {
        return this._nativeAnalyserNode.fftSize;
      }
      set fftSize(value) {
        this._nativeAnalyserNode.fftSize = value;
      }
      get frequencyBinCount() {
        return this._nativeAnalyserNode.frequencyBinCount;
      }
      get maxDecibels() {
        return this._nativeAnalyserNode.maxDecibels;
      }
      set maxDecibels(value) {
        const maxDecibels = this._nativeAnalyserNode.maxDecibels;
        this._nativeAnalyserNode.maxDecibels = value;
        if (!(value > this._nativeAnalyserNode.minDecibels)) {
          this._nativeAnalyserNode.maxDecibels = maxDecibels;
          throw createIndexSizeError2();
        }
      }
      get minDecibels() {
        return this._nativeAnalyserNode.minDecibels;
      }
      set minDecibels(value) {
        const minDecibels = this._nativeAnalyserNode.minDecibels;
        this._nativeAnalyserNode.minDecibels = value;
        if (!(this._nativeAnalyserNode.maxDecibels > value)) {
          this._nativeAnalyserNode.minDecibels = minDecibels;
          throw createIndexSizeError2();
        }
      }
      get smoothingTimeConstant() {
        return this._nativeAnalyserNode.smoothingTimeConstant;
      }
      set smoothingTimeConstant(value) {
        this._nativeAnalyserNode.smoothingTimeConstant = value;
      }
      getByteFrequencyData(array) {
        this._nativeAnalyserNode.getByteFrequencyData(array);
      }
      getByteTimeDomainData(array) {
        this._nativeAnalyserNode.getByteTimeDomainData(array);
      }
      getFloatFrequencyData(array) {
        this._nativeAnalyserNode.getFloatFrequencyData(array);
      }
      getFloatTimeDomainData(array) {
        this._nativeAnalyserNode.getFloatTimeDomainData(array);
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/is-owned-by-context.js
  var isOwnedByContext = (nativeAudioNode, nativeContext) => {
    return nativeAudioNode.context === nativeContext;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/analyser-node-renderer-factory.js
  var createAnalyserNodeRendererFactory = (createNativeAnalyserNode2, getNativeAudioNode2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeAnalyserNodes = new WeakMap();
      const createAnalyserNode = (proxy, nativeOfflineAudioContext) => __async(void 0, null, function* () {
        let nativeAnalyserNode = getNativeAudioNode2(proxy);
        const nativeAnalyserNodeIsOwnedByContext = isOwnedByContext(nativeAnalyserNode, nativeOfflineAudioContext);
        if (!nativeAnalyserNodeIsOwnedByContext) {
          const options = {
            channelCount: nativeAnalyserNode.channelCount,
            channelCountMode: nativeAnalyserNode.channelCountMode,
            channelInterpretation: nativeAnalyserNode.channelInterpretation,
            fftSize: nativeAnalyserNode.fftSize,
            maxDecibels: nativeAnalyserNode.maxDecibels,
            minDecibels: nativeAnalyserNode.minDecibels,
            smoothingTimeConstant: nativeAnalyserNode.smoothingTimeConstant
          };
          nativeAnalyserNode = createNativeAnalyserNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeAnalyserNodes.set(nativeOfflineAudioContext, nativeAnalyserNode);
        yield renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeAnalyserNode);
        return nativeAnalyserNode;
      });
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeAnalyserNode = renderedNativeAnalyserNodes.get(nativeOfflineAudioContext);
          if (renderedNativeAnalyserNode !== void 0) {
            return Promise.resolve(renderedNativeAnalyserNode);
          }
          return createAnalyserNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/test-audio-buffer-copy-channel-methods-out-of-bounds-support.js
  var testAudioBufferCopyChannelMethodsOutOfBoundsSupport = (nativeAudioBuffer) => {
    try {
      nativeAudioBuffer.copyToChannel(new Float32Array(1), 0, -1);
    } catch (e) {
      return false;
    }
    return true;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/index-size-error.js
  var createIndexSizeError = () => new DOMException("", "IndexSizeError");

  // node_modules/standardized-audio-context/build/es2019/helpers/wrap-audio-buffer-get-channel-data-method.js
  var wrapAudioBufferGetChannelDataMethod = (audioBuffer) => {
    audioBuffer.getChannelData = ((getChannelData) => {
      return (channel) => {
        try {
          return getChannelData.call(audioBuffer, channel);
        } catch (err) {
          if (err.code === 12) {
            throw createIndexSizeError();
          }
          throw err;
        }
      };
    })(audioBuffer.getChannelData);
  };

  // node_modules/standardized-audio-context/build/es2019/factories/audio-buffer-constructor.js
  var DEFAULT_OPTIONS2 = {
    numberOfChannels: 1
  };
  var createAudioBufferConstructor = (audioBufferStore2, cacheTestResult2, createNotSupportedError2, nativeAudioBufferConstructor2, nativeOfflineAudioContextConstructor2, testNativeAudioBufferConstructorSupport, wrapAudioBufferCopyChannelMethods2, wrapAudioBufferCopyChannelMethodsOutOfBounds2) => {
    let nativeOfflineAudioContext = null;
    return class AudioBuffer2 {
      constructor(options) {
        if (nativeOfflineAudioContextConstructor2 === null) {
          throw new Error("Missing the native OfflineAudioContext constructor.");
        }
        const { length, numberOfChannels, sampleRate } = __spreadValues(__spreadValues({}, DEFAULT_OPTIONS2), options);
        if (nativeOfflineAudioContext === null) {
          nativeOfflineAudioContext = new nativeOfflineAudioContextConstructor2(1, 1, 44100);
        }
        const audioBuffer = nativeAudioBufferConstructor2 !== null && cacheTestResult2(testNativeAudioBufferConstructorSupport, testNativeAudioBufferConstructorSupport) ? new nativeAudioBufferConstructor2({ length, numberOfChannels, sampleRate }) : nativeOfflineAudioContext.createBuffer(numberOfChannels, length, sampleRate);
        if (audioBuffer.numberOfChannels === 0) {
          throw createNotSupportedError2();
        }
        if (typeof audioBuffer.copyFromChannel !== "function") {
          wrapAudioBufferCopyChannelMethods2(audioBuffer);
          wrapAudioBufferGetChannelDataMethod(audioBuffer);
        } else if (!cacheTestResult2(testAudioBufferCopyChannelMethodsOutOfBoundsSupport, () => testAudioBufferCopyChannelMethodsOutOfBoundsSupport(audioBuffer))) {
          wrapAudioBufferCopyChannelMethodsOutOfBounds2(audioBuffer);
        }
        audioBufferStore2.add(audioBuffer);
        return audioBuffer;
      }
      static [Symbol.hasInstance](instance) {
        return instance !== null && typeof instance === "object" && Object.getPrototypeOf(instance) === AudioBuffer2.prototype || audioBufferStore2.has(instance);
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/constants.js
  var MOST_NEGATIVE_SINGLE_FLOAT = -34028234663852886e22;
  var MOST_POSITIVE_SINGLE_FLOAT = -MOST_NEGATIVE_SINGLE_FLOAT;

  // node_modules/standardized-audio-context/build/es2019/helpers/is-active-audio-node.js
  var isActiveAudioNode = (audioNode) => ACTIVE_AUDIO_NODE_STORE.has(audioNode);

  // node_modules/standardized-audio-context/build/es2019/factories/audio-buffer-source-node-constructor.js
  var DEFAULT_OPTIONS3 = {
    buffer: null,
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers",
    loop: false,
    loopEnd: 0,
    loopStart: 0,
    playbackRate: 1
  };
  var createAudioBufferSourceNodeConstructor = (audioNodeConstructor2, createAudioBufferSourceNodeRenderer2, createAudioParam2, createInvalidStateError2, createNativeAudioBufferSourceNode2, getNativeContext2, isNativeOfflineAudioContext2, wrapEventListener2) => {
    return class AudioBufferSourceNode extends audioNodeConstructor2 {
      constructor(context2, options) {
        const nativeContext = getNativeContext2(context2);
        const mergedOptions = __spreadValues(__spreadValues({}, DEFAULT_OPTIONS3), options);
        const nativeAudioBufferSourceNode = createNativeAudioBufferSourceNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const audioBufferSourceNodeRenderer = isOffline ? createAudioBufferSourceNodeRenderer2() : null;
        super(context2, false, nativeAudioBufferSourceNode, audioBufferSourceNodeRenderer);
        this._audioBufferSourceNodeRenderer = audioBufferSourceNodeRenderer;
        this._isBufferNullified = false;
        this._isBufferSet = mergedOptions.buffer !== null;
        this._nativeAudioBufferSourceNode = nativeAudioBufferSourceNode;
        this._onended = null;
        this._playbackRate = createAudioParam2(this, isOffline, nativeAudioBufferSourceNode.playbackRate, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
      }
      get buffer() {
        if (this._isBufferNullified) {
          return null;
        }
        return this._nativeAudioBufferSourceNode.buffer;
      }
      set buffer(value) {
        this._nativeAudioBufferSourceNode.buffer = value;
        if (value !== null) {
          if (this._isBufferSet) {
            throw createInvalidStateError2();
          }
          this._isBufferSet = true;
        }
      }
      get loop() {
        return this._nativeAudioBufferSourceNode.loop;
      }
      set loop(value) {
        this._nativeAudioBufferSourceNode.loop = value;
      }
      get loopEnd() {
        return this._nativeAudioBufferSourceNode.loopEnd;
      }
      set loopEnd(value) {
        this._nativeAudioBufferSourceNode.loopEnd = value;
      }
      get loopStart() {
        return this._nativeAudioBufferSourceNode.loopStart;
      }
      set loopStart(value) {
        this._nativeAudioBufferSourceNode.loopStart = value;
      }
      get onended() {
        return this._onended;
      }
      set onended(value) {
        const wrappedListener = typeof value === "function" ? wrapEventListener2(this, value) : null;
        this._nativeAudioBufferSourceNode.onended = wrappedListener;
        const nativeOnEnded = this._nativeAudioBufferSourceNode.onended;
        this._onended = nativeOnEnded !== null && nativeOnEnded === wrappedListener ? value : nativeOnEnded;
      }
      get playbackRate() {
        return this._playbackRate;
      }
      start(when = 0, offset = 0, duration) {
        this._nativeAudioBufferSourceNode.start(when, offset, duration);
        if (this._audioBufferSourceNodeRenderer !== null) {
          this._audioBufferSourceNodeRenderer.start = duration === void 0 ? [when, offset] : [when, offset, duration];
        }
        if (this.context.state !== "closed") {
          setInternalStateToActive(this);
          const resetInternalStateToPassive = () => {
            this._nativeAudioBufferSourceNode.removeEventListener("ended", resetInternalStateToPassive);
            if (isActiveAudioNode(this)) {
              setInternalStateToPassive(this);
            }
          };
          this._nativeAudioBufferSourceNode.addEventListener("ended", resetInternalStateToPassive);
        }
      }
      stop(when = 0) {
        this._nativeAudioBufferSourceNode.stop(when);
        if (this._audioBufferSourceNodeRenderer !== null) {
          this._audioBufferSourceNodeRenderer.stop = when;
        }
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/audio-buffer-source-node-renderer-factory.js
  var createAudioBufferSourceNodeRendererFactory = (connectAudioParam2, createNativeAudioBufferSourceNode2, getNativeAudioNode2, renderAutomation2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeAudioBufferSourceNodes = new WeakMap();
      let start2 = null;
      let stop = null;
      const createAudioBufferSourceNode = (proxy, nativeOfflineAudioContext) => __async(void 0, null, function* () {
        let nativeAudioBufferSourceNode = getNativeAudioNode2(proxy);
        const nativeAudioBufferSourceNodeIsOwnedByContext = isOwnedByContext(nativeAudioBufferSourceNode, nativeOfflineAudioContext);
        if (!nativeAudioBufferSourceNodeIsOwnedByContext) {
          const options = {
            buffer: nativeAudioBufferSourceNode.buffer,
            channelCount: nativeAudioBufferSourceNode.channelCount,
            channelCountMode: nativeAudioBufferSourceNode.channelCountMode,
            channelInterpretation: nativeAudioBufferSourceNode.channelInterpretation,
            loop: nativeAudioBufferSourceNode.loop,
            loopEnd: nativeAudioBufferSourceNode.loopEnd,
            loopStart: nativeAudioBufferSourceNode.loopStart,
            playbackRate: nativeAudioBufferSourceNode.playbackRate.value
          };
          nativeAudioBufferSourceNode = createNativeAudioBufferSourceNode2(nativeOfflineAudioContext, options);
          if (start2 !== null) {
            nativeAudioBufferSourceNode.start(...start2);
          }
          if (stop !== null) {
            nativeAudioBufferSourceNode.stop(stop);
          }
        }
        renderedNativeAudioBufferSourceNodes.set(nativeOfflineAudioContext, nativeAudioBufferSourceNode);
        if (!nativeAudioBufferSourceNodeIsOwnedByContext) {
          yield renderAutomation2(nativeOfflineAudioContext, proxy.playbackRate, nativeAudioBufferSourceNode.playbackRate);
        } else {
          yield connectAudioParam2(nativeOfflineAudioContext, proxy.playbackRate, nativeAudioBufferSourceNode.playbackRate);
        }
        yield renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeAudioBufferSourceNode);
        return nativeAudioBufferSourceNode;
      });
      return {
        set start(value) {
          start2 = value;
        },
        set stop(value) {
          stop = value;
        },
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeAudioBufferSourceNode = renderedNativeAudioBufferSourceNodes.get(nativeOfflineAudioContext);
          if (renderedNativeAudioBufferSourceNode !== void 0) {
            return Promise.resolve(renderedNativeAudioBufferSourceNode);
          }
          return createAudioBufferSourceNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/guards/audio-buffer-source-node.js
  var isAudioBufferSourceNode = (audioNode) => {
    return "playbackRate" in audioNode;
  };

  // node_modules/standardized-audio-context/build/es2019/guards/biquad-filter-node.js
  var isBiquadFilterNode = (audioNode) => {
    return "frequency" in audioNode && "gain" in audioNode;
  };

  // node_modules/standardized-audio-context/build/es2019/guards/constant-source-node.js
  var isConstantSourceNode = (audioNode) => {
    return "offset" in audioNode;
  };

  // node_modules/standardized-audio-context/build/es2019/guards/gain-node.js
  var isGainNode = (audioNode) => {
    return !("frequency" in audioNode) && "gain" in audioNode;
  };

  // node_modules/standardized-audio-context/build/es2019/guards/oscillator-node.js
  var isOscillatorNode = (audioNode) => {
    return "detune" in audioNode && "frequency" in audioNode;
  };

  // node_modules/standardized-audio-context/build/es2019/guards/stereo-panner-node.js
  var isStereoPannerNode = (audioNode) => {
    return "pan" in audioNode;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/get-audio-node-connections.js
  var getAudioNodeConnections = (audioNode) => {
    return getValueForKey(AUDIO_NODE_CONNECTIONS_STORE, audioNode);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/get-audio-param-connections.js
  var getAudioParamConnections = (audioParam) => {
    return getValueForKey(AUDIO_PARAM_CONNECTIONS_STORE, audioParam);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/deactivate-active-audio-node-input-connections.js
  var deactivateActiveAudioNodeInputConnections = (audioNode, trace) => {
    const { activeInputs } = getAudioNodeConnections(audioNode);
    activeInputs.forEach((connections) => connections.forEach(([source]) => {
      if (!trace.includes(audioNode)) {
        deactivateActiveAudioNodeInputConnections(source, [...trace, audioNode]);
      }
    }));
    const audioParams = isAudioBufferSourceNode(audioNode) ? [
      audioNode.playbackRate
    ] : isAudioWorkletNode(audioNode) ? Array.from(audioNode.parameters.values()) : isBiquadFilterNode(audioNode) ? [audioNode.Q, audioNode.detune, audioNode.frequency, audioNode.gain] : isConstantSourceNode(audioNode) ? [audioNode.offset] : isGainNode(audioNode) ? [audioNode.gain] : isOscillatorNode(audioNode) ? [audioNode.detune, audioNode.frequency] : isStereoPannerNode(audioNode) ? [audioNode.pan] : [];
    for (const audioParam of audioParams) {
      const audioParamConnections = getAudioParamConnections(audioParam);
      if (audioParamConnections !== void 0) {
        audioParamConnections.activeInputs.forEach(([source]) => deactivateActiveAudioNodeInputConnections(source, trace));
      }
    }
    if (isActiveAudioNode(audioNode)) {
      setInternalStateToPassive(audioNode);
    }
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/deactivate-audio-graph.js
  var deactivateAudioGraph = (context2) => {
    deactivateActiveAudioNodeInputConnections(context2.destination, []);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/is-valid-latency-hint.js
  var isValidLatencyHint = (latencyHint) => {
    return latencyHint === void 0 || typeof latencyHint === "number" || typeof latencyHint === "string" && (latencyHint === "balanced" || latencyHint === "interactive" || latencyHint === "playback");
  };

  // node_modules/standardized-audio-context/build/es2019/factories/audio-context-constructor.js
  var createAudioContextConstructor = (baseAudioContextConstructor2, createInvalidStateError2, createNotSupportedError2, createUnknownError2, mediaElementAudioSourceNodeConstructor2, mediaStreamAudioDestinationNodeConstructor2, mediaStreamAudioSourceNodeConstructor2, mediaStreamTrackAudioSourceNodeConstructor2, nativeAudioContextConstructor2) => {
    return class AudioContext extends baseAudioContextConstructor2 {
      constructor(options = {}) {
        if (nativeAudioContextConstructor2 === null) {
          throw new Error("Missing the native AudioContext constructor.");
        }
        let nativeAudioContext;
        try {
          nativeAudioContext = new nativeAudioContextConstructor2(options);
        } catch (err) {
          if (err.code === 12 && err.message === "sampleRate is not in range") {
            throw createNotSupportedError2();
          }
          throw err;
        }
        if (nativeAudioContext === null) {
          throw createUnknownError2();
        }
        if (!isValidLatencyHint(options.latencyHint)) {
          throw new TypeError(`The provided value '${options.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);
        }
        if (options.sampleRate !== void 0 && nativeAudioContext.sampleRate !== options.sampleRate) {
          throw createNotSupportedError2();
        }
        super(nativeAudioContext, 2);
        const { latencyHint } = options;
        const { sampleRate } = nativeAudioContext;
        this._baseLatency = typeof nativeAudioContext.baseLatency === "number" ? nativeAudioContext.baseLatency : latencyHint === "balanced" ? 512 / sampleRate : latencyHint === "interactive" || latencyHint === void 0 ? 256 / sampleRate : latencyHint === "playback" ? 1024 / sampleRate : Math.max(2, Math.min(128, Math.round(latencyHint * sampleRate / 128))) * 128 / sampleRate;
        this._nativeAudioContext = nativeAudioContext;
        if (nativeAudioContextConstructor2.name === "webkitAudioContext") {
          this._nativeGainNode = nativeAudioContext.createGain();
          this._nativeOscillatorNode = nativeAudioContext.createOscillator();
          this._nativeGainNode.gain.value = 1e-37;
          this._nativeOscillatorNode.connect(this._nativeGainNode).connect(nativeAudioContext.destination);
          this._nativeOscillatorNode.start();
        } else {
          this._nativeGainNode = null;
          this._nativeOscillatorNode = null;
        }
        this._state = null;
        if (nativeAudioContext.state === "running") {
          this._state = "suspended";
          const revokeState = () => {
            if (this._state === "suspended") {
              this._state = null;
            }
            nativeAudioContext.removeEventListener("statechange", revokeState);
          };
          nativeAudioContext.addEventListener("statechange", revokeState);
        }
      }
      get baseLatency() {
        return this._baseLatency;
      }
      get state() {
        return this._state !== null ? this._state : this._nativeAudioContext.state;
      }
      close() {
        if (this.state === "closed") {
          return this._nativeAudioContext.close().then(() => {
            throw createInvalidStateError2();
          });
        }
        if (this._state === "suspended") {
          this._state = null;
        }
        return this._nativeAudioContext.close().then(() => {
          if (this._nativeGainNode !== null && this._nativeOscillatorNode !== null) {
            this._nativeOscillatorNode.stop();
            this._nativeGainNode.disconnect();
            this._nativeOscillatorNode.disconnect();
          }
          deactivateAudioGraph(this);
        });
      }
      createMediaElementSource(mediaElement) {
        return new mediaElementAudioSourceNodeConstructor2(this, { mediaElement });
      }
      createMediaStreamDestination() {
        return new mediaStreamAudioDestinationNodeConstructor2(this);
      }
      createMediaStreamSource(mediaStream) {
        return new mediaStreamAudioSourceNodeConstructor2(this, { mediaStream });
      }
      createMediaStreamTrackSource(mediaStreamTrack) {
        return new mediaStreamTrackAudioSourceNodeConstructor2(this, { mediaStreamTrack });
      }
      resume() {
        if (this._state === "suspended") {
          return new Promise((resolve, reject) => {
            const resolvePromise = () => {
              this._nativeAudioContext.removeEventListener("statechange", resolvePromise);
              if (this._nativeAudioContext.state === "running") {
                resolve();
              } else {
                this.resume().then(resolve, reject);
              }
            };
            this._nativeAudioContext.addEventListener("statechange", resolvePromise);
          });
        }
        return this._nativeAudioContext.resume().catch((err) => {
          if (err === void 0 || err.code === 15) {
            throw createInvalidStateError2();
          }
          throw err;
        });
      }
      suspend() {
        return this._nativeAudioContext.suspend().catch((err) => {
          if (err === void 0) {
            throw createInvalidStateError2();
          }
          throw err;
        });
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/audio-destination-node-constructor.js
  var createAudioDestinationNodeConstructor = (audioNodeConstructor2, createAudioDestinationNodeRenderer2, createIndexSizeError2, createInvalidStateError2, createNativeAudioDestinationNode, getNativeContext2, isNativeOfflineAudioContext2, renderInputsOfAudioNode2) => {
    return class AudioDestinationNode extends audioNodeConstructor2 {
      constructor(context2, channelCount) {
        const nativeContext = getNativeContext2(context2);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const nativeAudioDestinationNode = createNativeAudioDestinationNode(nativeContext, channelCount, isOffline);
        const audioDestinationNodeRenderer = isOffline ? createAudioDestinationNodeRenderer2(renderInputsOfAudioNode2) : null;
        super(context2, false, nativeAudioDestinationNode, audioDestinationNodeRenderer);
        this._isNodeOfNativeOfflineAudioContext = isOffline;
        this._nativeAudioDestinationNode = nativeAudioDestinationNode;
      }
      get channelCount() {
        return this._nativeAudioDestinationNode.channelCount;
      }
      set channelCount(value) {
        if (this._isNodeOfNativeOfflineAudioContext) {
          throw createInvalidStateError2();
        }
        if (value > this._nativeAudioDestinationNode.maxChannelCount) {
          throw createIndexSizeError2();
        }
        this._nativeAudioDestinationNode.channelCount = value;
      }
      get channelCountMode() {
        return this._nativeAudioDestinationNode.channelCountMode;
      }
      set channelCountMode(value) {
        if (this._isNodeOfNativeOfflineAudioContext) {
          throw createInvalidStateError2();
        }
        this._nativeAudioDestinationNode.channelCountMode = value;
      }
      get maxChannelCount() {
        return this._nativeAudioDestinationNode.maxChannelCount;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/audio-destination-node-renderer-factory.js
  var createAudioDestinationNodeRenderer = (renderInputsOfAudioNode2) => {
    const renderedNativeAudioDestinationNodes = new WeakMap();
    const createAudioDestinationNode = (proxy, nativeOfflineAudioContext) => __async(void 0, null, function* () {
      const nativeAudioDestinationNode = nativeOfflineAudioContext.destination;
      renderedNativeAudioDestinationNodes.set(nativeOfflineAudioContext, nativeAudioDestinationNode);
      yield renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeAudioDestinationNode);
      return nativeAudioDestinationNode;
    });
    return {
      render(proxy, nativeOfflineAudioContext) {
        const renderedNativeAudioDestinationNode = renderedNativeAudioDestinationNodes.get(nativeOfflineAudioContext);
        if (renderedNativeAudioDestinationNode !== void 0) {
          return Promise.resolve(renderedNativeAudioDestinationNode);
        }
        return createAudioDestinationNode(proxy, nativeOfflineAudioContext);
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/audio-listener-factory.js
  var createAudioListenerFactory = (createAudioParam2, createNativeChannelMergerNode2, createNativeConstantSourceNode2, createNativeScriptProcessorNode2, createNotSupportedError2, getFirstSample2, isNativeOfflineAudioContext2, overwriteAccessors2) => {
    return (context2, nativeContext) => {
      const nativeListener = nativeContext.listener;
      const createFakeAudioParams = () => {
        const buffer = new Float32Array(1);
        const channelMergerNode = createNativeChannelMergerNode2(nativeContext, {
          channelCount: 1,
          channelCountMode: "explicit",
          channelInterpretation: "speakers",
          numberOfInputs: 9
        });
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        let isScriptProcessorNodeCreated = false;
        let lastOrientation = [0, 0, -1, 0, 1, 0];
        let lastPosition = [0, 0, 0];
        const createScriptProcessorNode = () => {
          if (isScriptProcessorNodeCreated) {
            return;
          }
          isScriptProcessorNodeCreated = true;
          const scriptProcessorNode = createNativeScriptProcessorNode2(nativeContext, 256, 9, 0);
          scriptProcessorNode.onaudioprocess = ({ inputBuffer }) => {
            const orientation = [
              getFirstSample2(inputBuffer, buffer, 0),
              getFirstSample2(inputBuffer, buffer, 1),
              getFirstSample2(inputBuffer, buffer, 2),
              getFirstSample2(inputBuffer, buffer, 3),
              getFirstSample2(inputBuffer, buffer, 4),
              getFirstSample2(inputBuffer, buffer, 5)
            ];
            if (orientation.some((value, index) => value !== lastOrientation[index])) {
              nativeListener.setOrientation(...orientation);
              lastOrientation = orientation;
            }
            const positon = [
              getFirstSample2(inputBuffer, buffer, 6),
              getFirstSample2(inputBuffer, buffer, 7),
              getFirstSample2(inputBuffer, buffer, 8)
            ];
            if (positon.some((value, index) => value !== lastPosition[index])) {
              nativeListener.setPosition(...positon);
              lastPosition = positon;
            }
          };
          channelMergerNode.connect(scriptProcessorNode);
        };
        const createSetOrientation = (index) => (value) => {
          if (value !== lastOrientation[index]) {
            lastOrientation[index] = value;
            nativeListener.setOrientation(...lastOrientation);
          }
        };
        const createSetPosition = (index) => (value) => {
          if (value !== lastPosition[index]) {
            lastPosition[index] = value;
            nativeListener.setPosition(...lastPosition);
          }
        };
        const createFakeAudioParam = (input, initialValue, setValue) => {
          const constantSourceNode = createNativeConstantSourceNode2(nativeContext, {
            channelCount: 1,
            channelCountMode: "explicit",
            channelInterpretation: "discrete",
            offset: initialValue
          });
          constantSourceNode.connect(channelMergerNode, 0, input);
          constantSourceNode.start();
          Object.defineProperty(constantSourceNode.offset, "defaultValue", {
            get() {
              return initialValue;
            }
          });
          const audioParam = createAudioParam2({ context: context2 }, isOffline, constantSourceNode.offset, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
          overwriteAccessors2(audioParam, "value", (get) => () => get.call(audioParam), (set) => (value) => {
            try {
              set.call(audioParam, value);
            } catch (err) {
              if (err.code !== 9) {
                throw err;
              }
            }
            createScriptProcessorNode();
            if (isOffline) {
              setValue(value);
            }
          });
          audioParam.cancelAndHoldAtTime = ((cancelAndHoldAtTime) => {
            if (isOffline) {
              return () => {
                throw createNotSupportedError2();
              };
            }
            return (...args) => {
              const value = cancelAndHoldAtTime.apply(audioParam, args);
              createScriptProcessorNode();
              return value;
            };
          })(audioParam.cancelAndHoldAtTime);
          audioParam.cancelScheduledValues = ((cancelScheduledValues) => {
            if (isOffline) {
              return () => {
                throw createNotSupportedError2();
              };
            }
            return (...args) => {
              const value = cancelScheduledValues.apply(audioParam, args);
              createScriptProcessorNode();
              return value;
            };
          })(audioParam.cancelScheduledValues);
          audioParam.exponentialRampToValueAtTime = ((exponentialRampToValueAtTime) => {
            if (isOffline) {
              return () => {
                throw createNotSupportedError2();
              };
            }
            return (...args) => {
              const value = exponentialRampToValueAtTime.apply(audioParam, args);
              createScriptProcessorNode();
              return value;
            };
          })(audioParam.exponentialRampToValueAtTime);
          audioParam.linearRampToValueAtTime = ((linearRampToValueAtTime) => {
            if (isOffline) {
              return () => {
                throw createNotSupportedError2();
              };
            }
            return (...args) => {
              const value = linearRampToValueAtTime.apply(audioParam, args);
              createScriptProcessorNode();
              return value;
            };
          })(audioParam.linearRampToValueAtTime);
          audioParam.setTargetAtTime = ((setTargetAtTime) => {
            if (isOffline) {
              return () => {
                throw createNotSupportedError2();
              };
            }
            return (...args) => {
              const value = setTargetAtTime.apply(audioParam, args);
              createScriptProcessorNode();
              return value;
            };
          })(audioParam.setTargetAtTime);
          audioParam.setValueAtTime = ((setValueAtTime) => {
            if (isOffline) {
              return () => {
                throw createNotSupportedError2();
              };
            }
            return (...args) => {
              const value = setValueAtTime.apply(audioParam, args);
              createScriptProcessorNode();
              return value;
            };
          })(audioParam.setValueAtTime);
          audioParam.setValueCurveAtTime = ((setValueCurveAtTime) => {
            if (isOffline) {
              return () => {
                throw createNotSupportedError2();
              };
            }
            return (...args) => {
              const value = setValueCurveAtTime.apply(audioParam, args);
              createScriptProcessorNode();
              return value;
            };
          })(audioParam.setValueCurveAtTime);
          return audioParam;
        };
        return {
          forwardX: createFakeAudioParam(0, 0, createSetOrientation(0)),
          forwardY: createFakeAudioParam(1, 0, createSetOrientation(1)),
          forwardZ: createFakeAudioParam(2, -1, createSetOrientation(2)),
          positionX: createFakeAudioParam(6, 0, createSetPosition(0)),
          positionY: createFakeAudioParam(7, 0, createSetPosition(1)),
          positionZ: createFakeAudioParam(8, 0, createSetPosition(2)),
          upX: createFakeAudioParam(3, 0, createSetOrientation(3)),
          upY: createFakeAudioParam(4, 1, createSetOrientation(4)),
          upZ: createFakeAudioParam(5, 0, createSetOrientation(5))
        };
      };
      const { forwardX, forwardY, forwardZ, positionX, positionY, positionZ, upX, upY, upZ } = nativeListener.forwardX === void 0 ? createFakeAudioParams() : nativeListener;
      return {
        get forwardX() {
          return forwardX;
        },
        get forwardY() {
          return forwardY;
        },
        get forwardZ() {
          return forwardZ;
        },
        get positionX() {
          return positionX;
        },
        get positionY() {
          return positionY;
        },
        get positionZ() {
          return positionZ;
        },
        get upX() {
          return upX;
        },
        get upY() {
          return upY;
        },
        get upZ() {
          return upZ;
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/guards/audio-node.js
  var isAudioNode = (audioNodeOrAudioParam) => {
    return "context" in audioNodeOrAudioParam;
  };

  // node_modules/standardized-audio-context/build/es2019/guards/audio-node-output-connection.js
  var isAudioNodeOutputConnection = (outputConnection) => {
    return isAudioNode(outputConnection[0]);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/insert-element-in-set.js
  var insertElementInSet = (set, element, predicate, ignoreDuplicates) => {
    for (const lmnt of set) {
      if (predicate(lmnt)) {
        if (ignoreDuplicates) {
          return false;
        }
        throw Error("The set contains at least one similar element.");
      }
    }
    set.add(element);
    return true;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/add-active-input-connection-to-audio-param.js
  var addActiveInputConnectionToAudioParam = (activeInputs, source, [output, eventListener], ignoreDuplicates) => {
    insertElementInSet(activeInputs, [source, output, eventListener], (activeInputConnection) => activeInputConnection[0] === source && activeInputConnection[1] === output, ignoreDuplicates);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/add-passive-input-connection-to-audio-param.js
  var addPassiveInputConnectionToAudioParam = (passiveInputs, [source, output, eventListener], ignoreDuplicates) => {
    const passiveInputConnections = passiveInputs.get(source);
    if (passiveInputConnections === void 0) {
      passiveInputs.set(source, new Set([[output, eventListener]]));
    } else {
      insertElementInSet(passiveInputConnections, [output, eventListener], (passiveInputConnection) => passiveInputConnection[0] === output, ignoreDuplicates);
    }
  };

  // node_modules/standardized-audio-context/build/es2019/guards/native-audio-node-faker.js
  var isNativeAudioNodeFaker = (nativeAudioNodeOrNativeAudioNodeFaker) => {
    return "inputs" in nativeAudioNodeOrNativeAudioNodeFaker;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/connect-native-audio-node-to-native-audio-node.js
  var connectNativeAudioNodeToNativeAudioNode = (nativeSourceAudioNode, nativeDestinationAudioNode, output, input) => {
    if (isNativeAudioNodeFaker(nativeDestinationAudioNode)) {
      const fakeNativeDestinationAudioNode = nativeDestinationAudioNode.inputs[input];
      nativeSourceAudioNode.connect(fakeNativeDestinationAudioNode, output, 0);
      return [fakeNativeDestinationAudioNode, output, 0];
    }
    nativeSourceAudioNode.connect(nativeDestinationAudioNode, output, input);
    return [nativeDestinationAudioNode, output, input];
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/delete-active-input-connection.js
  var deleteActiveInputConnection = (activeInputConnections, source, output) => {
    for (const activeInputConnection of activeInputConnections) {
      if (activeInputConnection[0] === source && activeInputConnection[1] === output) {
        activeInputConnections.delete(activeInputConnection);
        return activeInputConnection;
      }
    }
    return null;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/delete-active-input-connection-to-audio-param.js
  var deleteActiveInputConnectionToAudioParam = (activeInputs, source, output) => {
    return pickElementFromSet(activeInputs, (activeInputConnection) => activeInputConnection[0] === source && activeInputConnection[1] === output);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/delete-event-listeners-of-audio-node.js
  var deleteEventListenerOfAudioNode = (audioNode, eventListener) => {
    const eventListeners = getEventListenersOfAudioNode(audioNode);
    if (!eventListeners.delete(eventListener)) {
      throw new Error("Missing the expected event listener.");
    }
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/delete-passive-input-connection-to-audio-param.js
  var deletePassiveInputConnectionToAudioParam = (passiveInputs, source, output) => {
    const passiveInputConnections = getValueForKey(passiveInputs, source);
    const matchingConnection = pickElementFromSet(passiveInputConnections, (passiveInputConnection) => passiveInputConnection[0] === output);
    if (passiveInputConnections.size === 0) {
      passiveInputs.delete(source);
    }
    return matchingConnection;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/disconnect-native-audio-node-from-native-audio-node.js
  var disconnectNativeAudioNodeFromNativeAudioNode = (nativeSourceAudioNode, nativeDestinationAudioNode, output, input) => {
    if (isNativeAudioNodeFaker(nativeDestinationAudioNode)) {
      nativeSourceAudioNode.disconnect(nativeDestinationAudioNode.inputs[input], output, 0);
    } else {
      nativeSourceAudioNode.disconnect(nativeDestinationAudioNode, output, input);
    }
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/get-native-audio-node.js
  var getNativeAudioNode = (audioNode) => {
    return getValueForKey(AUDIO_NODE_STORE, audioNode);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/get-native-audio-param.js
  var getNativeAudioParam = (audioParam) => {
    return getValueForKey(AUDIO_PARAM_STORE, audioParam);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/is-part-of-a-cycle.js
  var isPartOfACycle = (audioNode) => {
    return CYCLE_COUNTERS.has(audioNode);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/is-passive-audio-node.js
  var isPassiveAudioNode = (audioNode) => {
    return !ACTIVE_AUDIO_NODE_STORE.has(audioNode);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/test-audio-node-disconnect-method-support.js
  var testAudioNodeDisconnectMethodSupport = (nativeAudioContext, nativeAudioWorkletNodeConstructor2) => {
    return new Promise((resolve) => {
      if (nativeAudioWorkletNodeConstructor2 !== null) {
        resolve(true);
      } else {
        const analyzer = nativeAudioContext.createScriptProcessor(256, 1, 1);
        const dummy = nativeAudioContext.createGain();
        const ones = nativeAudioContext.createBuffer(1, 2, 44100);
        const channelData = ones.getChannelData(0);
        channelData[0] = 1;
        channelData[1] = 1;
        const source = nativeAudioContext.createBufferSource();
        source.buffer = ones;
        source.loop = true;
        source.connect(analyzer).connect(nativeAudioContext.destination);
        source.connect(dummy);
        source.disconnect(dummy);
        analyzer.onaudioprocess = (event) => {
          const chnnlDt = event.inputBuffer.getChannelData(0);
          if (Array.prototype.some.call(chnnlDt, (sample) => sample === 1)) {
            resolve(true);
          } else {
            resolve(false);
          }
          source.stop();
          analyzer.onaudioprocess = null;
          source.disconnect(analyzer);
          analyzer.disconnect(nativeAudioContext.destination);
        };
        source.start();
      }
    });
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/visit-each-audio-node-once.js
  var visitEachAudioNodeOnce = (cycles, visitor) => {
    const counts = new Map();
    for (const cycle of cycles) {
      for (const audioNode of cycle) {
        const count = counts.get(audioNode);
        counts.set(audioNode, count === void 0 ? 1 : count + 1);
      }
    }
    counts.forEach((count, audioNode) => visitor(audioNode, count));
  };

  // node_modules/standardized-audio-context/build/es2019/guards/native-audio-node.js
  var isNativeAudioNode = (nativeAudioNodeOrAudioParam) => {
    return "context" in nativeAudioNodeOrAudioParam;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/wrap-audio-node-disconnect-method.js
  var wrapAudioNodeDisconnectMethod = (nativeAudioNode) => {
    const connections = new Map();
    nativeAudioNode.connect = ((connect2) => {
      return (destination, output = 0, input = 0) => {
        const returnValue = isNativeAudioNode(destination) ? connect2(destination, output, input) : connect2(destination, output);
        const connectionsToDestination = connections.get(destination);
        if (connectionsToDestination === void 0) {
          connections.set(destination, [{ input, output }]);
        } else {
          if (connectionsToDestination.every((connection) => connection.input !== input || connection.output !== output)) {
            connectionsToDestination.push({ input, output });
          }
        }
        return returnValue;
      };
    })(nativeAudioNode.connect.bind(nativeAudioNode));
    nativeAudioNode.disconnect = ((disconnect2) => {
      return (destinationOrOutput, output, input) => {
        disconnect2.apply(nativeAudioNode);
        if (destinationOrOutput === void 0) {
          connections.clear();
        } else if (typeof destinationOrOutput === "number") {
          for (const [destination, connectionsToDestination] of connections) {
            const filteredConnections = connectionsToDestination.filter((connection) => connection.output !== destinationOrOutput);
            if (filteredConnections.length === 0) {
              connections.delete(destination);
            } else {
              connections.set(destination, filteredConnections);
            }
          }
        } else if (connections.has(destinationOrOutput)) {
          if (output === void 0) {
            connections.delete(destinationOrOutput);
          } else {
            const connectionsToDestination = connections.get(destinationOrOutput);
            if (connectionsToDestination !== void 0) {
              const filteredConnections = connectionsToDestination.filter((connection) => connection.output !== output && (connection.input !== input || input === void 0));
              if (filteredConnections.length === 0) {
                connections.delete(destinationOrOutput);
              } else {
                connections.set(destinationOrOutput, filteredConnections);
              }
            }
          }
        }
        for (const [destination, connectionsToDestination] of connections) {
          connectionsToDestination.forEach((connection) => {
            if (isNativeAudioNode(destination)) {
              nativeAudioNode.connect(destination, connection.output, connection.input);
            } else {
              nativeAudioNode.connect(destination, connection.output);
            }
          });
        }
      };
    })(nativeAudioNode.disconnect);
  };

  // node_modules/standardized-audio-context/build/es2019/factories/audio-node-constructor.js
  var addConnectionToAudioParamOfAudioContext = (source, destination, output, isOffline) => {
    const { activeInputs, passiveInputs } = getAudioParamConnections(destination);
    const { outputs } = getAudioNodeConnections(source);
    const eventListeners = getEventListenersOfAudioNode(source);
    const eventListener = (isActive) => {
      const nativeAudioNode = getNativeAudioNode(source);
      const nativeAudioParam = getNativeAudioParam(destination);
      if (isActive) {
        const partialConnection = deletePassiveInputConnectionToAudioParam(passiveInputs, source, output);
        addActiveInputConnectionToAudioParam(activeInputs, source, partialConnection, false);
        if (!isOffline && !isPartOfACycle(source)) {
          nativeAudioNode.connect(nativeAudioParam, output);
        }
      } else {
        const partialConnection = deleteActiveInputConnectionToAudioParam(activeInputs, source, output);
        addPassiveInputConnectionToAudioParam(passiveInputs, partialConnection, false);
        if (!isOffline && !isPartOfACycle(source)) {
          nativeAudioNode.disconnect(nativeAudioParam, output);
        }
      }
    };
    if (insertElementInSet(outputs, [destination, output], (outputConnection) => outputConnection[0] === destination && outputConnection[1] === output, true)) {
      eventListeners.add(eventListener);
      if (isActiveAudioNode(source)) {
        addActiveInputConnectionToAudioParam(activeInputs, source, [output, eventListener], true);
      } else {
        addPassiveInputConnectionToAudioParam(passiveInputs, [source, output, eventListener], true);
      }
      return true;
    }
    return false;
  };
  var deleteInputConnectionOfAudioNode = (source, destination, output, input) => {
    const { activeInputs, passiveInputs } = getAudioNodeConnections(destination);
    const activeInputConnection = deleteActiveInputConnection(activeInputs[input], source, output);
    if (activeInputConnection === null) {
      const passiveInputConnection = deletePassiveInputConnectionToAudioNode(passiveInputs, source, output, input);
      return [passiveInputConnection[2], false];
    }
    return [activeInputConnection[2], true];
  };
  var deleteInputConnectionOfAudioParam = (source, destination, output) => {
    const { activeInputs, passiveInputs } = getAudioParamConnections(destination);
    const activeInputConnection = deleteActiveInputConnection(activeInputs, source, output);
    if (activeInputConnection === null) {
      const passiveInputConnection = deletePassiveInputConnectionToAudioParam(passiveInputs, source, output);
      return [passiveInputConnection[1], false];
    }
    return [activeInputConnection[2], true];
  };
  var deleteInputsOfAudioNode = (source, isOffline, destination, output, input) => {
    const [listener, isActive] = deleteInputConnectionOfAudioNode(source, destination, output, input);
    if (listener !== null) {
      deleteEventListenerOfAudioNode(source, listener);
      if (isActive && !isOffline && !isPartOfACycle(source)) {
        disconnectNativeAudioNodeFromNativeAudioNode(getNativeAudioNode(source), getNativeAudioNode(destination), output, input);
      }
    }
    if (isActiveAudioNode(destination)) {
      const { activeInputs } = getAudioNodeConnections(destination);
      setInternalStateToPassiveWhenNecessary(destination, activeInputs);
    }
  };
  var deleteInputsOfAudioParam = (source, isOffline, destination, output) => {
    const [listener, isActive] = deleteInputConnectionOfAudioParam(source, destination, output);
    if (listener !== null) {
      deleteEventListenerOfAudioNode(source, listener);
      if (isActive && !isOffline && !isPartOfACycle(source)) {
        getNativeAudioNode(source).disconnect(getNativeAudioParam(destination), output);
      }
    }
  };
  var deleteAnyConnection = (source, isOffline) => {
    const audioNodeConnectionsOfSource = getAudioNodeConnections(source);
    const destinations = [];
    for (const outputConnection of audioNodeConnectionsOfSource.outputs) {
      if (isAudioNodeOutputConnection(outputConnection)) {
        deleteInputsOfAudioNode(source, isOffline, ...outputConnection);
      } else {
        deleteInputsOfAudioParam(source, isOffline, ...outputConnection);
      }
      destinations.push(outputConnection[0]);
    }
    audioNodeConnectionsOfSource.outputs.clear();
    return destinations;
  };
  var deleteConnectionAtOutput = (source, isOffline, output) => {
    const audioNodeConnectionsOfSource = getAudioNodeConnections(source);
    const destinations = [];
    for (const outputConnection of audioNodeConnectionsOfSource.outputs) {
      if (outputConnection[1] === output) {
        if (isAudioNodeOutputConnection(outputConnection)) {
          deleteInputsOfAudioNode(source, isOffline, ...outputConnection);
        } else {
          deleteInputsOfAudioParam(source, isOffline, ...outputConnection);
        }
        destinations.push(outputConnection[0]);
        audioNodeConnectionsOfSource.outputs.delete(outputConnection);
      }
    }
    return destinations;
  };
  var deleteConnectionToDestination = (source, isOffline, destination, output, input) => {
    const audioNodeConnectionsOfSource = getAudioNodeConnections(source);
    return Array.from(audioNodeConnectionsOfSource.outputs).filter((outputConnection) => outputConnection[0] === destination && (output === void 0 || outputConnection[1] === output) && (input === void 0 || outputConnection[2] === input)).map((outputConnection) => {
      if (isAudioNodeOutputConnection(outputConnection)) {
        deleteInputsOfAudioNode(source, isOffline, ...outputConnection);
      } else {
        deleteInputsOfAudioParam(source, isOffline, ...outputConnection);
      }
      audioNodeConnectionsOfSource.outputs.delete(outputConnection);
      return outputConnection[0];
    });
  };
  var createAudioNodeConstructor = (addAudioNodeConnections, addConnectionToAudioNode, cacheTestResult2, createIncrementCycleCounter, createIndexSizeError2, createInvalidAccessError2, createNotSupportedError2, decrementCycleCounter, detectCycles, eventTargetConstructor2, getNativeContext2, isNativeAudioContext2, isNativeAudioNode3, isNativeAudioParam2, isNativeOfflineAudioContext2, nativeAudioWorkletNodeConstructor2) => {
    return class AudioNode extends eventTargetConstructor2 {
      constructor(context2, isActive, nativeAudioNode, audioNodeRenderer) {
        super(nativeAudioNode);
        this._context = context2;
        this._nativeAudioNode = nativeAudioNode;
        const nativeContext = getNativeContext2(context2);
        if (isNativeAudioContext2(nativeContext) && cacheTestResult2(testAudioNodeDisconnectMethodSupport, () => {
          return testAudioNodeDisconnectMethodSupport(nativeContext, nativeAudioWorkletNodeConstructor2);
        }) !== true) {
          wrapAudioNodeDisconnectMethod(nativeAudioNode);
        }
        AUDIO_NODE_STORE.set(this, nativeAudioNode);
        EVENT_LISTENERS.set(this, new Set());
        if (context2.state !== "closed" && isActive) {
          setInternalStateToActive(this);
        }
        addAudioNodeConnections(this, audioNodeRenderer, nativeAudioNode);
      }
      get channelCount() {
        return this._nativeAudioNode.channelCount;
      }
      set channelCount(value) {
        this._nativeAudioNode.channelCount = value;
      }
      get channelCountMode() {
        return this._nativeAudioNode.channelCountMode;
      }
      set channelCountMode(value) {
        this._nativeAudioNode.channelCountMode = value;
      }
      get channelInterpretation() {
        return this._nativeAudioNode.channelInterpretation;
      }
      set channelInterpretation(value) {
        this._nativeAudioNode.channelInterpretation = value;
      }
      get context() {
        return this._context;
      }
      get numberOfInputs() {
        return this._nativeAudioNode.numberOfInputs;
      }
      get numberOfOutputs() {
        return this._nativeAudioNode.numberOfOutputs;
      }
      connect(destination, output = 0, input = 0) {
        if (output < 0 || output >= this._nativeAudioNode.numberOfOutputs) {
          throw createIndexSizeError2();
        }
        const nativeContext = getNativeContext2(this._context);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        if (isNativeAudioNode3(destination) || isNativeAudioParam2(destination)) {
          throw createInvalidAccessError2();
        }
        if (isAudioNode(destination)) {
          const nativeDestinationAudioNode = getNativeAudioNode(destination);
          try {
            const connection = connectNativeAudioNodeToNativeAudioNode(this._nativeAudioNode, nativeDestinationAudioNode, output, input);
            const isPassive = isPassiveAudioNode(this);
            if (isOffline || isPassive) {
              this._nativeAudioNode.disconnect(...connection);
            }
            if (this.context.state !== "closed" && !isPassive && isPassiveAudioNode(destination)) {
              setInternalStateToActive(destination);
            }
          } catch (err) {
            if (err.code === 12) {
              throw createInvalidAccessError2();
            }
            throw err;
          }
          const isNewConnectionToAudioNode = addConnectionToAudioNode(this, destination, output, input, isOffline);
          if (isNewConnectionToAudioNode) {
            const cycles = detectCycles([this], destination);
            visitEachAudioNodeOnce(cycles, createIncrementCycleCounter(isOffline));
          }
          return destination;
        }
        const nativeAudioParam = getNativeAudioParam(destination);
        if (nativeAudioParam.name === "playbackRate" && nativeAudioParam.maxValue === 1024) {
          throw createNotSupportedError2();
        }
        try {
          this._nativeAudioNode.connect(nativeAudioParam, output);
          if (isOffline || isPassiveAudioNode(this)) {
            this._nativeAudioNode.disconnect(nativeAudioParam, output);
          }
        } catch (err) {
          if (err.code === 12) {
            throw createInvalidAccessError2();
          }
          throw err;
        }
        const isNewConnectionToAudioParam = addConnectionToAudioParamOfAudioContext(this, destination, output, isOffline);
        if (isNewConnectionToAudioParam) {
          const cycles = detectCycles([this], destination);
          visitEachAudioNodeOnce(cycles, createIncrementCycleCounter(isOffline));
        }
      }
      disconnect(destinationOrOutput, output, input) {
        let destinations;
        const nativeContext = getNativeContext2(this._context);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        if (destinationOrOutput === void 0) {
          destinations = deleteAnyConnection(this, isOffline);
        } else if (typeof destinationOrOutput === "number") {
          if (destinationOrOutput < 0 || destinationOrOutput >= this.numberOfOutputs) {
            throw createIndexSizeError2();
          }
          destinations = deleteConnectionAtOutput(this, isOffline, destinationOrOutput);
        } else {
          if (output !== void 0 && (output < 0 || output >= this.numberOfOutputs)) {
            throw createIndexSizeError2();
          }
          if (isAudioNode(destinationOrOutput) && input !== void 0 && (input < 0 || input >= destinationOrOutput.numberOfInputs)) {
            throw createIndexSizeError2();
          }
          destinations = deleteConnectionToDestination(this, isOffline, destinationOrOutput, output, input);
          if (destinations.length === 0) {
            throw createInvalidAccessError2();
          }
        }
        for (const destination of destinations) {
          const cycles = detectCycles([this], destination);
          visitEachAudioNodeOnce(cycles, decrementCycleCounter);
        }
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/audio-param-factory.js
  var import_automation_events = __toModule(require_bundle());
  var createAudioParamFactory = (addAudioParamConnections, audioParamAudioNodeStore2, audioParamStore, createAudioParamRenderer2, createCancelAndHoldAutomationEvent2, createCancelScheduledValuesAutomationEvent2, createExponentialRampToValueAutomationEvent2, createLinearRampToValueAutomationEvent2, createSetTargetAutomationEvent2, createSetValueAutomationEvent2, createSetValueCurveAutomationEvent2, nativeAudioContextConstructor2, setValueAtTimeUntilPossible2) => {
    return (audioNode, isAudioParamOfOfflineAudioContext, nativeAudioParam, maxValue = null, minValue = null) => {
      const automationEventList = new import_automation_events.AutomationEventList(nativeAudioParam.defaultValue);
      const audioParamRenderer = isAudioParamOfOfflineAudioContext ? createAudioParamRenderer2(automationEventList) : null;
      const audioParam = {
        get defaultValue() {
          return nativeAudioParam.defaultValue;
        },
        get maxValue() {
          return maxValue === null ? nativeAudioParam.maxValue : maxValue;
        },
        get minValue() {
          return minValue === null ? nativeAudioParam.minValue : minValue;
        },
        get value() {
          return nativeAudioParam.value;
        },
        set value(value) {
          nativeAudioParam.value = value;
          audioParam.setValueAtTime(value, audioNode.context.currentTime);
        },
        cancelAndHoldAtTime(cancelTime) {
          if (typeof nativeAudioParam.cancelAndHoldAtTime === "function") {
            if (audioParamRenderer === null) {
              automationEventList.flush(audioNode.context.currentTime);
            }
            automationEventList.add(createCancelAndHoldAutomationEvent2(cancelTime));
            nativeAudioParam.cancelAndHoldAtTime(cancelTime);
          } else {
            const previousLastEvent = Array.from(automationEventList).pop();
            if (audioParamRenderer === null) {
              automationEventList.flush(audioNode.context.currentTime);
            }
            automationEventList.add(createCancelAndHoldAutomationEvent2(cancelTime));
            const currentLastEvent = Array.from(automationEventList).pop();
            nativeAudioParam.cancelScheduledValues(cancelTime);
            if (previousLastEvent !== currentLastEvent && currentLastEvent !== void 0) {
              if (currentLastEvent.type === "exponentialRampToValue") {
                nativeAudioParam.exponentialRampToValueAtTime(currentLastEvent.value, currentLastEvent.endTime);
              } else if (currentLastEvent.type === "linearRampToValue") {
                nativeAudioParam.linearRampToValueAtTime(currentLastEvent.value, currentLastEvent.endTime);
              } else if (currentLastEvent.type === "setValue") {
                nativeAudioParam.setValueAtTime(currentLastEvent.value, currentLastEvent.startTime);
              } else if (currentLastEvent.type === "setValueCurve") {
                nativeAudioParam.setValueCurveAtTime(currentLastEvent.values, currentLastEvent.startTime, currentLastEvent.duration);
              }
            }
          }
          return audioParam;
        },
        cancelScheduledValues(cancelTime) {
          if (audioParamRenderer === null) {
            automationEventList.flush(audioNode.context.currentTime);
          }
          automationEventList.add(createCancelScheduledValuesAutomationEvent2(cancelTime));
          nativeAudioParam.cancelScheduledValues(cancelTime);
          return audioParam;
        },
        exponentialRampToValueAtTime(value, endTime) {
          if (value === 0) {
            throw new RangeError();
          }
          if (!Number.isFinite(endTime) || endTime < 0) {
            throw new RangeError();
          }
          if (audioParamRenderer === null) {
            automationEventList.flush(audioNode.context.currentTime);
          }
          automationEventList.add(createExponentialRampToValueAutomationEvent2(value, endTime));
          nativeAudioParam.exponentialRampToValueAtTime(value, endTime);
          return audioParam;
        },
        linearRampToValueAtTime(value, endTime) {
          if (audioParamRenderer === null) {
            automationEventList.flush(audioNode.context.currentTime);
          }
          automationEventList.add(createLinearRampToValueAutomationEvent2(value, endTime));
          nativeAudioParam.linearRampToValueAtTime(value, endTime);
          return audioParam;
        },
        setTargetAtTime(target, startTime, timeConstant) {
          if (audioParamRenderer === null) {
            automationEventList.flush(audioNode.context.currentTime);
          }
          automationEventList.add(createSetTargetAutomationEvent2(target, startTime, timeConstant));
          nativeAudioParam.setTargetAtTime(target, startTime, timeConstant);
          return audioParam;
        },
        setValueAtTime(value, startTime) {
          if (audioParamRenderer === null) {
            automationEventList.flush(audioNode.context.currentTime);
          }
          automationEventList.add(createSetValueAutomationEvent2(value, startTime));
          nativeAudioParam.setValueAtTime(value, startTime);
          return audioParam;
        },
        setValueCurveAtTime(values, startTime, duration) {
          const convertedValues = values instanceof Float32Array ? values : new Float32Array(values);
          if (nativeAudioContextConstructor2 !== null && nativeAudioContextConstructor2.name === "webkitAudioContext") {
            const endTime = startTime + duration;
            const sampleRate = audioNode.context.sampleRate;
            const firstSample = Math.ceil(startTime * sampleRate);
            const lastSample = Math.floor(endTime * sampleRate);
            const numberOfInterpolatedValues = lastSample - firstSample;
            const interpolatedValues = new Float32Array(numberOfInterpolatedValues);
            for (let i = 0; i < numberOfInterpolatedValues; i += 1) {
              const theoreticIndex = (convertedValues.length - 1) / duration * ((firstSample + i) / sampleRate - startTime);
              const lowerIndex = Math.floor(theoreticIndex);
              const upperIndex = Math.ceil(theoreticIndex);
              interpolatedValues[i] = lowerIndex === upperIndex ? convertedValues[lowerIndex] : (1 - (theoreticIndex - lowerIndex)) * convertedValues[lowerIndex] + (1 - (upperIndex - theoreticIndex)) * convertedValues[upperIndex];
            }
            if (audioParamRenderer === null) {
              automationEventList.flush(audioNode.context.currentTime);
            }
            automationEventList.add(createSetValueCurveAutomationEvent2(interpolatedValues, startTime, duration));
            nativeAudioParam.setValueCurveAtTime(interpolatedValues, startTime, duration);
            const timeOfLastSample = lastSample / sampleRate;
            if (timeOfLastSample < endTime) {
              setValueAtTimeUntilPossible2(audioParam, interpolatedValues[interpolatedValues.length - 1], timeOfLastSample);
            }
            setValueAtTimeUntilPossible2(audioParam, convertedValues[convertedValues.length - 1], endTime);
          } else {
            if (audioParamRenderer === null) {
              automationEventList.flush(audioNode.context.currentTime);
            }
            automationEventList.add(createSetValueCurveAutomationEvent2(convertedValues, startTime, duration));
            nativeAudioParam.setValueCurveAtTime(convertedValues, startTime, duration);
          }
          return audioParam;
        }
      };
      audioParamStore.set(audioParam, nativeAudioParam);
      audioParamAudioNodeStore2.set(audioParam, audioNode);
      addAudioParamConnections(audioParam, audioParamRenderer);
      return audioParam;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/audio-param-renderer.js
  var createAudioParamRenderer = (automationEventList) => {
    return {
      replay(audioParam) {
        for (const automationEvent of automationEventList) {
          if (automationEvent.type === "exponentialRampToValue") {
            const { endTime, value } = automationEvent;
            audioParam.exponentialRampToValueAtTime(value, endTime);
          } else if (automationEvent.type === "linearRampToValue") {
            const { endTime, value } = automationEvent;
            audioParam.linearRampToValueAtTime(value, endTime);
          } else if (automationEvent.type === "setTarget") {
            const { startTime, target, timeConstant } = automationEvent;
            audioParam.setTargetAtTime(target, startTime, timeConstant);
          } else if (automationEvent.type === "setValue") {
            const { startTime, value } = automationEvent;
            audioParam.setValueAtTime(value, startTime);
          } else if (automationEvent.type === "setValueCurve") {
            const { duration, startTime, values } = automationEvent;
            audioParam.setValueCurveAtTime(values, startTime, duration);
          } else {
            throw new Error("Can't apply an unknown automation.");
          }
        }
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/read-only-map.js
  var ReadOnlyMap = class {
    constructor(parameters) {
      this._map = new Map(parameters);
    }
    get size() {
      return this._map.size;
    }
    entries() {
      return this._map.entries();
    }
    forEach(callback, thisArg = null) {
      return this._map.forEach((value, key) => callback.call(thisArg, value, key, this));
    }
    get(name) {
      return this._map.get(name);
    }
    has(name) {
      return this._map.has(name);
    }
    keys() {
      return this._map.keys();
    }
    values() {
      return this._map.values();
    }
  };

  // node_modules/standardized-audio-context/build/es2019/factories/audio-worklet-node-constructor.js
  var DEFAULT_OPTIONS4 = {
    channelCount: 2,
    channelCountMode: "explicit",
    channelInterpretation: "speakers",
    numberOfInputs: 1,
    numberOfOutputs: 1,
    parameterData: {},
    processorOptions: {}
  };
  var createAudioWorkletNodeConstructor = (addUnrenderedAudioWorkletNode2, audioNodeConstructor2, createAudioParam2, createAudioWorkletNodeRenderer2, createNativeAudioWorkletNode2, getAudioNodeConnections2, getBackupOfflineAudioContext2, getNativeContext2, isNativeOfflineAudioContext2, nativeAudioWorkletNodeConstructor2, sanitizeAudioWorkletNodeOptions2, setActiveAudioWorkletNodeInputs2, testAudioWorkletNodeOptionsClonability2, wrapEventListener2) => {
    return class AudioWorkletNode extends audioNodeConstructor2 {
      constructor(context2, name, options) {
        var _a3;
        const nativeContext = getNativeContext2(context2);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const mergedOptions = sanitizeAudioWorkletNodeOptions2(__spreadValues(__spreadValues({}, DEFAULT_OPTIONS4), options));
        testAudioWorkletNodeOptionsClonability2(mergedOptions);
        const nodeNameToProcessorConstructorMap = NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS.get(nativeContext);
        const processorConstructor = nodeNameToProcessorConstructorMap === null || nodeNameToProcessorConstructorMap === void 0 ? void 0 : nodeNameToProcessorConstructorMap.get(name);
        const nativeContextOrBackupOfflineAudioContext = isOffline || nativeContext.state !== "closed" ? nativeContext : (_a3 = getBackupOfflineAudioContext2(nativeContext)) !== null && _a3 !== void 0 ? _a3 : nativeContext;
        const nativeAudioWorkletNode = createNativeAudioWorkletNode2(nativeContextOrBackupOfflineAudioContext, isOffline ? null : context2.baseLatency, nativeAudioWorkletNodeConstructor2, name, processorConstructor, mergedOptions);
        const audioWorkletNodeRenderer = isOffline ? createAudioWorkletNodeRenderer2(name, mergedOptions, processorConstructor) : null;
        super(context2, true, nativeAudioWorkletNode, audioWorkletNodeRenderer);
        const parameters = [];
        nativeAudioWorkletNode.parameters.forEach((nativeAudioParam, nm) => {
          const audioParam = createAudioParam2(this, isOffline, nativeAudioParam);
          parameters.push([nm, audioParam]);
        });
        this._nativeAudioWorkletNode = nativeAudioWorkletNode;
        this._onprocessorerror = null;
        this._parameters = new ReadOnlyMap(parameters);
        if (isOffline) {
          addUnrenderedAudioWorkletNode2(nativeContext, this);
        }
        const { activeInputs } = getAudioNodeConnections2(this);
        setActiveAudioWorkletNodeInputs2(nativeAudioWorkletNode, activeInputs);
      }
      get onprocessorerror() {
        return this._onprocessorerror;
      }
      set onprocessorerror(value) {
        const wrappedListener = typeof value === "function" ? wrapEventListener2(this, value) : null;
        this._nativeAudioWorkletNode.onprocessorerror = wrappedListener;
        const nativeOnProcessorError = this._nativeAudioWorkletNode.onprocessorerror;
        this._onprocessorerror = nativeOnProcessorError !== null && nativeOnProcessorError === wrappedListener ? value : nativeOnProcessorError;
      }
      get parameters() {
        if (this._parameters === null) {
          return this._nativeAudioWorkletNode.parameters;
        }
        return this._parameters;
      }
      get port() {
        return this._nativeAudioWorkletNode.port;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/copy-from-channel.js
  function copyFromChannel(audioBuffer, parent, key, channelNumber, bufferOffset) {
    if (typeof audioBuffer.copyFromChannel === "function") {
      if (parent[key].byteLength === 0) {
        parent[key] = new Float32Array(128);
      }
      audioBuffer.copyFromChannel(parent[key], channelNumber, bufferOffset);
    } else {
      const channelData = audioBuffer.getChannelData(channelNumber);
      if (parent[key].byteLength === 0) {
        parent[key] = channelData.slice(bufferOffset, bufferOffset + 128);
      } else {
        const slicedInput = new Float32Array(channelData.buffer, bufferOffset * Float32Array.BYTES_PER_ELEMENT, 128);
        parent[key].set(slicedInput);
      }
    }
  }

  // node_modules/standardized-audio-context/build/es2019/helpers/copy-to-channel.js
  var copyToChannel = (audioBuffer, parent, key, channelNumber, bufferOffset) => {
    if (typeof audioBuffer.copyToChannel === "function") {
      if (parent[key].byteLength !== 0) {
        audioBuffer.copyToChannel(parent[key], channelNumber, bufferOffset);
      }
    } else {
      if (parent[key].byteLength !== 0) {
        audioBuffer.getChannelData(channelNumber).set(parent[key], bufferOffset);
      }
    }
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/create-nested-arrays.js
  var createNestedArrays = (x, y) => {
    const arrays = [];
    for (let i = 0; i < x; i += 1) {
      const array = [];
      const length = typeof y === "number" ? y : y[i];
      for (let j = 0; j < length; j += 1) {
        array.push(new Float32Array(128));
      }
      arrays.push(array);
    }
    return arrays;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/get-audio-worklet-processor.js
  var getAudioWorkletProcessor = (nativeOfflineAudioContext, proxy) => {
    const nodeToProcessorMap = getValueForKey(NODE_TO_PROCESSOR_MAPS, nativeOfflineAudioContext);
    const nativeAudioWorkletNode = getNativeAudioNode(proxy);
    return getValueForKey(nodeToProcessorMap, nativeAudioWorkletNode);
  };

  // node_modules/standardized-audio-context/build/es2019/factories/audio-worklet-node-renderer-factory.js
  var processBuffer = (proxy, renderedBuffer, nativeOfflineAudioContext, options, outputChannelCount, processorConstructor, exposeCurrentFrameAndCurrentTime2) => __async(void 0, null, function* () {
    const length = renderedBuffer === null ? Math.ceil(proxy.context.length / 128) * 128 : renderedBuffer.length;
    const numberOfInputChannels = options.channelCount * options.numberOfInputs;
    const numberOfOutputChannels = outputChannelCount.reduce((sum, value) => sum + value, 0);
    const processedBuffer = numberOfOutputChannels === 0 ? null : nativeOfflineAudioContext.createBuffer(numberOfOutputChannels, length, nativeOfflineAudioContext.sampleRate);
    if (processorConstructor === void 0) {
      throw new Error("Missing the processor constructor.");
    }
    const audioNodeConnections = getAudioNodeConnections(proxy);
    const audioWorkletProcessor = yield getAudioWorkletProcessor(nativeOfflineAudioContext, proxy);
    const inputs = createNestedArrays(options.numberOfInputs, options.channelCount);
    const outputs = createNestedArrays(options.numberOfOutputs, outputChannelCount);
    const parameters = Array.from(proxy.parameters.keys()).reduce((prmtrs, name) => __spreadProps(__spreadValues({}, prmtrs), { [name]: new Float32Array(128) }), {});
    for (let i = 0; i < length; i += 128) {
      if (options.numberOfInputs > 0 && renderedBuffer !== null) {
        for (let j = 0; j < options.numberOfInputs; j += 1) {
          for (let k = 0; k < options.channelCount; k += 1) {
            copyFromChannel(renderedBuffer, inputs[j], k, k, i);
          }
        }
      }
      if (processorConstructor.parameterDescriptors !== void 0 && renderedBuffer !== null) {
        processorConstructor.parameterDescriptors.forEach(({ name }, index) => {
          copyFromChannel(renderedBuffer, parameters, name, numberOfInputChannels + index, i);
        });
      }
      for (let j = 0; j < options.numberOfInputs; j += 1) {
        for (let k = 0; k < outputChannelCount[j]; k += 1) {
          if (outputs[j][k].byteLength === 0) {
            outputs[j][k] = new Float32Array(128);
          }
        }
      }
      try {
        const potentiallyEmptyInputs = inputs.map((input, index) => {
          if (audioNodeConnections.activeInputs[index].size === 0) {
            return [];
          }
          return input;
        });
        const activeSourceFlag = exposeCurrentFrameAndCurrentTime2(i / nativeOfflineAudioContext.sampleRate, nativeOfflineAudioContext.sampleRate, () => audioWorkletProcessor.process(potentiallyEmptyInputs, outputs, parameters));
        if (processedBuffer !== null) {
          for (let j = 0, outputChannelSplitterNodeOutput = 0; j < options.numberOfOutputs; j += 1) {
            for (let k = 0; k < outputChannelCount[j]; k += 1) {
              copyToChannel(processedBuffer, outputs[j], k, outputChannelSplitterNodeOutput + k, i);
            }
            outputChannelSplitterNodeOutput += outputChannelCount[j];
          }
        }
        if (!activeSourceFlag) {
          break;
        }
      } catch (error) {
        proxy.dispatchEvent(new ErrorEvent("processorerror", {
          colno: error.colno,
          filename: error.filename,
          lineno: error.lineno,
          message: error.message
        }));
        break;
      }
    }
    return processedBuffer;
  });
  var createAudioWorkletNodeRendererFactory = (connectAudioParam2, connectMultipleOutputs2, createNativeAudioBufferSourceNode2, createNativeChannelMergerNode2, createNativeChannelSplitterNode2, createNativeConstantSourceNode2, createNativeGainNode2, deleteUnrenderedAudioWorkletNode2, disconnectMultipleOutputs2, exposeCurrentFrameAndCurrentTime2, getNativeAudioNode2, nativeAudioWorkletNodeConstructor2, nativeOfflineAudioContextConstructor2, renderAutomation2, renderInputsOfAudioNode2, renderNativeOfflineAudioContext2) => {
    return (name, options, processorConstructor) => {
      const renderedNativeAudioNodes = new WeakMap();
      let processedBufferPromise = null;
      const createAudioNode = (proxy, nativeOfflineAudioContext) => __async(void 0, null, function* () {
        let nativeAudioWorkletNode = getNativeAudioNode2(proxy);
        let nativeOutputNodes = null;
        const nativeAudioWorkletNodeIsOwnedByContext = isOwnedByContext(nativeAudioWorkletNode, nativeOfflineAudioContext);
        const outputChannelCount = Array.isArray(options.outputChannelCount) ? options.outputChannelCount : Array.from(options.outputChannelCount);
        if (nativeAudioWorkletNodeConstructor2 === null) {
          const numberOfOutputChannels = outputChannelCount.reduce((sum, value) => sum + value, 0);
          const outputChannelSplitterNode = createNativeChannelSplitterNode2(nativeOfflineAudioContext, {
            channelCount: Math.max(1, numberOfOutputChannels),
            channelCountMode: "explicit",
            channelInterpretation: "discrete",
            numberOfOutputs: Math.max(1, numberOfOutputChannels)
          });
          const outputChannelMergerNodes = [];
          for (let i = 0; i < proxy.numberOfOutputs; i += 1) {
            outputChannelMergerNodes.push(createNativeChannelMergerNode2(nativeOfflineAudioContext, {
              channelCount: 1,
              channelCountMode: "explicit",
              channelInterpretation: "speakers",
              numberOfInputs: outputChannelCount[i]
            }));
          }
          const outputGainNode = createNativeGainNode2(nativeOfflineAudioContext, {
            channelCount: options.channelCount,
            channelCountMode: options.channelCountMode,
            channelInterpretation: options.channelInterpretation,
            gain: 1
          });
          outputGainNode.connect = connectMultipleOutputs2.bind(null, outputChannelMergerNodes);
          outputGainNode.disconnect = disconnectMultipleOutputs2.bind(null, outputChannelMergerNodes);
          nativeOutputNodes = [outputChannelSplitterNode, outputChannelMergerNodes, outputGainNode];
        } else if (!nativeAudioWorkletNodeIsOwnedByContext) {
          nativeAudioWorkletNode = new nativeAudioWorkletNodeConstructor2(nativeOfflineAudioContext, name);
        }
        renderedNativeAudioNodes.set(nativeOfflineAudioContext, nativeOutputNodes === null ? nativeAudioWorkletNode : nativeOutputNodes[2]);
        if (nativeOutputNodes !== null) {
          if (processedBufferPromise === null) {
            if (processorConstructor === void 0) {
              throw new Error("Missing the processor constructor.");
            }
            if (nativeOfflineAudioContextConstructor2 === null) {
              throw new Error("Missing the native OfflineAudioContext constructor.");
            }
            const numberOfInputChannels = proxy.channelCount * proxy.numberOfInputs;
            const numberOfParameters = processorConstructor.parameterDescriptors === void 0 ? 0 : processorConstructor.parameterDescriptors.length;
            const numberOfChannels = numberOfInputChannels + numberOfParameters;
            const renderBuffer = () => __async(void 0, null, function* () {
              const partialOfflineAudioContext = new nativeOfflineAudioContextConstructor2(numberOfChannels, Math.ceil(proxy.context.length / 128) * 128, nativeOfflineAudioContext.sampleRate);
              const gainNodes = [];
              const inputChannelSplitterNodes = [];
              for (let i = 0; i < options.numberOfInputs; i += 1) {
                gainNodes.push(createNativeGainNode2(partialOfflineAudioContext, {
                  channelCount: options.channelCount,
                  channelCountMode: options.channelCountMode,
                  channelInterpretation: options.channelInterpretation,
                  gain: 1
                }));
                inputChannelSplitterNodes.push(createNativeChannelSplitterNode2(partialOfflineAudioContext, {
                  channelCount: options.channelCount,
                  channelCountMode: "explicit",
                  channelInterpretation: "discrete",
                  numberOfOutputs: options.channelCount
                }));
              }
              const constantSourceNodes = yield Promise.all(Array.from(proxy.parameters.values()).map((audioParam) => __async(void 0, null, function* () {
                const constantSourceNode = createNativeConstantSourceNode2(partialOfflineAudioContext, {
                  channelCount: 1,
                  channelCountMode: "explicit",
                  channelInterpretation: "discrete",
                  offset: audioParam.value
                });
                yield renderAutomation2(partialOfflineAudioContext, audioParam, constantSourceNode.offset);
                return constantSourceNode;
              })));
              const inputChannelMergerNode = createNativeChannelMergerNode2(partialOfflineAudioContext, {
                channelCount: 1,
                channelCountMode: "explicit",
                channelInterpretation: "speakers",
                numberOfInputs: Math.max(1, numberOfInputChannels + numberOfParameters)
              });
              for (let i = 0; i < options.numberOfInputs; i += 1) {
                gainNodes[i].connect(inputChannelSplitterNodes[i]);
                for (let j = 0; j < options.channelCount; j += 1) {
                  inputChannelSplitterNodes[i].connect(inputChannelMergerNode, j, i * options.channelCount + j);
                }
              }
              for (const [index, constantSourceNode] of constantSourceNodes.entries()) {
                constantSourceNode.connect(inputChannelMergerNode, 0, numberOfInputChannels + index);
                constantSourceNode.start(0);
              }
              inputChannelMergerNode.connect(partialOfflineAudioContext.destination);
              yield Promise.all(gainNodes.map((gainNode) => renderInputsOfAudioNode2(proxy, partialOfflineAudioContext, gainNode)));
              return renderNativeOfflineAudioContext2(partialOfflineAudioContext);
            });
            processedBufferPromise = processBuffer(proxy, numberOfChannels === 0 ? null : yield renderBuffer(), nativeOfflineAudioContext, options, outputChannelCount, processorConstructor, exposeCurrentFrameAndCurrentTime2);
          }
          const processedBuffer = yield processedBufferPromise;
          const audioBufferSourceNode = createNativeAudioBufferSourceNode2(nativeOfflineAudioContext, {
            buffer: null,
            channelCount: 2,
            channelCountMode: "max",
            channelInterpretation: "speakers",
            loop: false,
            loopEnd: 0,
            loopStart: 0,
            playbackRate: 1
          });
          const [outputChannelSplitterNode, outputChannelMergerNodes, outputGainNode] = nativeOutputNodes;
          if (processedBuffer !== null) {
            audioBufferSourceNode.buffer = processedBuffer;
            audioBufferSourceNode.start(0);
          }
          audioBufferSourceNode.connect(outputChannelSplitterNode);
          for (let i = 0, outputChannelSplitterNodeOutput = 0; i < proxy.numberOfOutputs; i += 1) {
            const outputChannelMergerNode = outputChannelMergerNodes[i];
            for (let j = 0; j < outputChannelCount[i]; j += 1) {
              outputChannelSplitterNode.connect(outputChannelMergerNode, outputChannelSplitterNodeOutput + j, j);
            }
            outputChannelSplitterNodeOutput += outputChannelCount[i];
          }
          return outputGainNode;
        }
        if (!nativeAudioWorkletNodeIsOwnedByContext) {
          for (const [nm, audioParam] of proxy.parameters.entries()) {
            yield renderAutomation2(nativeOfflineAudioContext, audioParam, nativeAudioWorkletNode.parameters.get(nm));
          }
        } else {
          for (const [nm, audioParam] of proxy.parameters.entries()) {
            yield connectAudioParam2(nativeOfflineAudioContext, audioParam, nativeAudioWorkletNode.parameters.get(nm));
          }
        }
        yield renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeAudioWorkletNode);
        return nativeAudioWorkletNode;
      });
      return {
        render(proxy, nativeOfflineAudioContext) {
          deleteUnrenderedAudioWorkletNode2(nativeOfflineAudioContext, proxy);
          const renderedNativeAudioWorkletNodeOrGainNode = renderedNativeAudioNodes.get(nativeOfflineAudioContext);
          if (renderedNativeAudioWorkletNodeOrGainNode !== void 0) {
            return Promise.resolve(renderedNativeAudioWorkletNodeOrGainNode);
          }
          return createAudioNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/base-audio-context-constructor.js
  var createBaseAudioContextConstructor = (addAudioWorkletModule2, analyserNodeConstructor2, audioBufferConstructor2, audioBufferSourceNodeConstructor2, biquadFilterNodeConstructor2, channelMergerNodeConstructor2, channelSplitterNodeConstructor2, constantSourceNodeConstructor2, convolverNodeConstructor2, decodeAudioData2, delayNodeConstructor2, dynamicsCompressorNodeConstructor2, gainNodeConstructor2, iIRFilterNodeConstructor2, minimalBaseAudioContextConstructor2, oscillatorNodeConstructor2, pannerNodeConstructor2, periodicWaveConstructor2, stereoPannerNodeConstructor2, waveShaperNodeConstructor2) => {
    return class BaseAudioContext extends minimalBaseAudioContextConstructor2 {
      constructor(_nativeContext, numberOfChannels) {
        super(_nativeContext, numberOfChannels);
        this._nativeContext = _nativeContext;
        this._audioWorklet = addAudioWorkletModule2 === void 0 ? void 0 : {
          addModule: (moduleURL, options) => {
            return addAudioWorkletModule2(this, moduleURL, options);
          }
        };
      }
      get audioWorklet() {
        return this._audioWorklet;
      }
      createAnalyser() {
        return new analyserNodeConstructor2(this);
      }
      createBiquadFilter() {
        return new biquadFilterNodeConstructor2(this);
      }
      createBuffer(numberOfChannels, length, sampleRate) {
        return new audioBufferConstructor2({ length, numberOfChannels, sampleRate });
      }
      createBufferSource() {
        return new audioBufferSourceNodeConstructor2(this);
      }
      createChannelMerger(numberOfInputs = 6) {
        return new channelMergerNodeConstructor2(this, { numberOfInputs });
      }
      createChannelSplitter(numberOfOutputs = 6) {
        return new channelSplitterNodeConstructor2(this, { numberOfOutputs });
      }
      createConstantSource() {
        return new constantSourceNodeConstructor2(this);
      }
      createConvolver() {
        return new convolverNodeConstructor2(this);
      }
      createDelay(maxDelayTime = 1) {
        return new delayNodeConstructor2(this, { maxDelayTime });
      }
      createDynamicsCompressor() {
        return new dynamicsCompressorNodeConstructor2(this);
      }
      createGain() {
        return new gainNodeConstructor2(this);
      }
      createIIRFilter(feedforward, feedback) {
        return new iIRFilterNodeConstructor2(this, { feedback, feedforward });
      }
      createOscillator() {
        return new oscillatorNodeConstructor2(this);
      }
      createPanner() {
        return new pannerNodeConstructor2(this);
      }
      createPeriodicWave(real, imag, constraints = { disableNormalization: false }) {
        return new periodicWaveConstructor2(this, __spreadProps(__spreadValues({}, constraints), { imag, real }));
      }
      createStereoPanner() {
        return new stereoPannerNodeConstructor2(this);
      }
      createWaveShaper() {
        return new waveShaperNodeConstructor2(this);
      }
      decodeAudioData(audioData, successCallback, errorCallback) {
        return decodeAudioData2(this._nativeContext, audioData).then((audioBuffer) => {
          if (typeof successCallback === "function") {
            successCallback(audioBuffer);
          }
          return audioBuffer;
        }, (err) => {
          if (typeof errorCallback === "function") {
            errorCallback(err);
          }
          throw err;
        });
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/biquad-filter-node-constructor.js
  var DEFAULT_OPTIONS5 = {
    Q: 1,
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers",
    detune: 0,
    frequency: 350,
    gain: 0,
    type: "lowpass"
  };
  var createBiquadFilterNodeConstructor = (audioNodeConstructor2, createAudioParam2, createBiquadFilterNodeRenderer2, createInvalidAccessError2, createNativeBiquadFilterNode2, getNativeContext2, isNativeOfflineAudioContext2, setAudioNodeTailTime2) => {
    return class BiquadFilterNode extends audioNodeConstructor2 {
      constructor(context2, options) {
        const nativeContext = getNativeContext2(context2);
        const mergedOptions = __spreadValues(__spreadValues({}, DEFAULT_OPTIONS5), options);
        const nativeBiquadFilterNode = createNativeBiquadFilterNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const biquadFilterNodeRenderer = isOffline ? createBiquadFilterNodeRenderer2() : null;
        super(context2, false, nativeBiquadFilterNode, biquadFilterNodeRenderer);
        this._Q = createAudioParam2(this, isOffline, nativeBiquadFilterNode.Q, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
        this._detune = createAudioParam2(this, isOffline, nativeBiquadFilterNode.detune, 1200 * Math.log2(MOST_POSITIVE_SINGLE_FLOAT), -1200 * Math.log2(MOST_POSITIVE_SINGLE_FLOAT));
        this._frequency = createAudioParam2(this, isOffline, nativeBiquadFilterNode.frequency, context2.sampleRate / 2, 0);
        this._gain = createAudioParam2(this, isOffline, nativeBiquadFilterNode.gain, 40 * Math.log10(MOST_POSITIVE_SINGLE_FLOAT), MOST_NEGATIVE_SINGLE_FLOAT);
        this._nativeBiquadFilterNode = nativeBiquadFilterNode;
        setAudioNodeTailTime2(this, 1);
      }
      get detune() {
        return this._detune;
      }
      get frequency() {
        return this._frequency;
      }
      get gain() {
        return this._gain;
      }
      get Q() {
        return this._Q;
      }
      get type() {
        return this._nativeBiquadFilterNode.type;
      }
      set type(value) {
        this._nativeBiquadFilterNode.type = value;
      }
      getFrequencyResponse(frequencyHz, magResponse, phaseResponse) {
        try {
          this._nativeBiquadFilterNode.getFrequencyResponse(frequencyHz, magResponse, phaseResponse);
        } catch (err) {
          if (err.code === 11) {
            throw createInvalidAccessError2();
          }
          throw err;
        }
        if (frequencyHz.length !== magResponse.length || magResponse.length !== phaseResponse.length) {
          throw createInvalidAccessError2();
        }
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/biquad-filter-node-renderer-factory.js
  var createBiquadFilterNodeRendererFactory = (connectAudioParam2, createNativeBiquadFilterNode2, getNativeAudioNode2, renderAutomation2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeBiquadFilterNodes = new WeakMap();
      const createBiquadFilterNode = (proxy, nativeOfflineAudioContext) => __async(void 0, null, function* () {
        let nativeBiquadFilterNode = getNativeAudioNode2(proxy);
        const nativeBiquadFilterNodeIsOwnedByContext = isOwnedByContext(nativeBiquadFilterNode, nativeOfflineAudioContext);
        if (!nativeBiquadFilterNodeIsOwnedByContext) {
          const options = {
            Q: nativeBiquadFilterNode.Q.value,
            channelCount: nativeBiquadFilterNode.channelCount,
            channelCountMode: nativeBiquadFilterNode.channelCountMode,
            channelInterpretation: nativeBiquadFilterNode.channelInterpretation,
            detune: nativeBiquadFilterNode.detune.value,
            frequency: nativeBiquadFilterNode.frequency.value,
            gain: nativeBiquadFilterNode.gain.value,
            type: nativeBiquadFilterNode.type
          };
          nativeBiquadFilterNode = createNativeBiquadFilterNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeBiquadFilterNodes.set(nativeOfflineAudioContext, nativeBiquadFilterNode);
        if (!nativeBiquadFilterNodeIsOwnedByContext) {
          yield renderAutomation2(nativeOfflineAudioContext, proxy.Q, nativeBiquadFilterNode.Q);
          yield renderAutomation2(nativeOfflineAudioContext, proxy.detune, nativeBiquadFilterNode.detune);
          yield renderAutomation2(nativeOfflineAudioContext, proxy.frequency, nativeBiquadFilterNode.frequency);
          yield renderAutomation2(nativeOfflineAudioContext, proxy.gain, nativeBiquadFilterNode.gain);
        } else {
          yield connectAudioParam2(nativeOfflineAudioContext, proxy.Q, nativeBiquadFilterNode.Q);
          yield connectAudioParam2(nativeOfflineAudioContext, proxy.detune, nativeBiquadFilterNode.detune);
          yield connectAudioParam2(nativeOfflineAudioContext, proxy.frequency, nativeBiquadFilterNode.frequency);
          yield connectAudioParam2(nativeOfflineAudioContext, proxy.gain, nativeBiquadFilterNode.gain);
        }
        yield renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeBiquadFilterNode);
        return nativeBiquadFilterNode;
      });
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeBiquadFilterNode = renderedNativeBiquadFilterNodes.get(nativeOfflineAudioContext);
          if (renderedNativeBiquadFilterNode !== void 0) {
            return Promise.resolve(renderedNativeBiquadFilterNode);
          }
          return createBiquadFilterNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/cache-test-result.js
  var createCacheTestResult = (ongoingTests, testResults) => {
    return (tester, test) => {
      const cachedTestResult = testResults.get(tester);
      if (cachedTestResult !== void 0) {
        return cachedTestResult;
      }
      const ongoingTest = ongoingTests.get(tester);
      if (ongoingTest !== void 0) {
        return ongoingTest;
      }
      try {
        const synchronousTestResult = test();
        if (synchronousTestResult instanceof Promise) {
          ongoingTests.set(tester, synchronousTestResult);
          return synchronousTestResult.catch(() => false).then((finalTestResult) => {
            ongoingTests.delete(tester);
            testResults.set(tester, finalTestResult);
            return finalTestResult;
          });
        }
        testResults.set(tester, synchronousTestResult);
        return synchronousTestResult;
      } catch (e) {
        testResults.set(tester, false);
        return false;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/channel-merger-node-constructor.js
  var DEFAULT_OPTIONS6 = {
    channelCount: 1,
    channelCountMode: "explicit",
    channelInterpretation: "speakers",
    numberOfInputs: 6
  };
  var createChannelMergerNodeConstructor = (audioNodeConstructor2, createChannelMergerNodeRenderer2, createNativeChannelMergerNode2, getNativeContext2, isNativeOfflineAudioContext2) => {
    return class ChannelMergerNode extends audioNodeConstructor2 {
      constructor(context2, options) {
        const nativeContext = getNativeContext2(context2);
        const mergedOptions = __spreadValues(__spreadValues({}, DEFAULT_OPTIONS6), options);
        const nativeChannelMergerNode = createNativeChannelMergerNode2(nativeContext, mergedOptions);
        const channelMergerNodeRenderer = isNativeOfflineAudioContext2(nativeContext) ? createChannelMergerNodeRenderer2() : null;
        super(context2, false, nativeChannelMergerNode, channelMergerNodeRenderer);
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/channel-merger-node-renderer-factory.js
  var createChannelMergerNodeRendererFactory = (createNativeChannelMergerNode2, getNativeAudioNode2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeAudioNodes = new WeakMap();
      const createAudioNode = (proxy, nativeOfflineAudioContext) => __async(void 0, null, function* () {
        let nativeAudioNode = getNativeAudioNode2(proxy);
        const nativeAudioNodeIsOwnedByContext = isOwnedByContext(nativeAudioNode, nativeOfflineAudioContext);
        if (!nativeAudioNodeIsOwnedByContext) {
          const options = {
            channelCount: nativeAudioNode.channelCount,
            channelCountMode: nativeAudioNode.channelCountMode,
            channelInterpretation: nativeAudioNode.channelInterpretation,
            numberOfInputs: nativeAudioNode.numberOfInputs
          };
          nativeAudioNode = createNativeChannelMergerNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeAudioNodes.set(nativeOfflineAudioContext, nativeAudioNode);
        yield renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeAudioNode);
        return nativeAudioNode;
      });
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeAudioNode = renderedNativeAudioNodes.get(nativeOfflineAudioContext);
          if (renderedNativeAudioNode !== void 0) {
            return Promise.resolve(renderedNativeAudioNode);
          }
          return createAudioNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/channel-splitter-node-constructor.js
  var DEFAULT_OPTIONS7 = {
    channelCount: 6,
    channelCountMode: "explicit",
    channelInterpretation: "discrete",
    numberOfOutputs: 6
  };
  var createChannelSplitterNodeConstructor = (audioNodeConstructor2, createChannelSplitterNodeRenderer2, createNativeChannelSplitterNode2, getNativeContext2, isNativeOfflineAudioContext2, sanitizeChannelSplitterOptions2) => {
    return class ChannelSplitterNode extends audioNodeConstructor2 {
      constructor(context2, options) {
        const nativeContext = getNativeContext2(context2);
        const mergedOptions = sanitizeChannelSplitterOptions2(__spreadValues(__spreadValues({}, DEFAULT_OPTIONS7), options));
        const nativeChannelSplitterNode = createNativeChannelSplitterNode2(nativeContext, mergedOptions);
        const channelSplitterNodeRenderer = isNativeOfflineAudioContext2(nativeContext) ? createChannelSplitterNodeRenderer2() : null;
        super(context2, false, nativeChannelSplitterNode, channelSplitterNodeRenderer);
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/channel-splitter-node-renderer-factory.js
  var createChannelSplitterNodeRendererFactory = (createNativeChannelSplitterNode2, getNativeAudioNode2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeAudioNodes = new WeakMap();
      const createAudioNode = (proxy, nativeOfflineAudioContext) => __async(void 0, null, function* () {
        let nativeAudioNode = getNativeAudioNode2(proxy);
        const nativeAudioNodeIsOwnedByContext = isOwnedByContext(nativeAudioNode, nativeOfflineAudioContext);
        if (!nativeAudioNodeIsOwnedByContext) {
          const options = {
            channelCount: nativeAudioNode.channelCount,
            channelCountMode: nativeAudioNode.channelCountMode,
            channelInterpretation: nativeAudioNode.channelInterpretation,
            numberOfOutputs: nativeAudioNode.numberOfOutputs
          };
          nativeAudioNode = createNativeChannelSplitterNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeAudioNodes.set(nativeOfflineAudioContext, nativeAudioNode);
        yield renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeAudioNode);
        return nativeAudioNode;
      });
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeAudioNode = renderedNativeAudioNodes.get(nativeOfflineAudioContext);
          if (renderedNativeAudioNode !== void 0) {
            return Promise.resolve(renderedNativeAudioNode);
          }
          return createAudioNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/connect-audio-param.js
  var createConnectAudioParam = (renderInputsOfAudioParam2) => {
    return (nativeOfflineAudioContext, audioParam, nativeAudioParam) => {
      return renderInputsOfAudioParam2(audioParam, nativeOfflineAudioContext, nativeAudioParam);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/connect-multiple-outputs.js
  var createConnectMultipleOutputs = (createIndexSizeError2) => {
    return (outputAudioNodes, destination, output = 0, input = 0) => {
      const outputAudioNode = outputAudioNodes[output];
      if (outputAudioNode === void 0) {
        throw createIndexSizeError2();
      }
      if (isNativeAudioNode(destination)) {
        return outputAudioNode.connect(destination, 0, input);
      }
      return outputAudioNode.connect(destination, 0);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/connected-native-audio-buffer-source-node-factory.js
  var createConnectedNativeAudioBufferSourceNodeFactory = (createNativeAudioBufferSourceNode2) => {
    return (nativeContext, nativeAudioNode) => {
      const nativeAudioBufferSourceNode = createNativeAudioBufferSourceNode2(nativeContext, {
        buffer: null,
        channelCount: 2,
        channelCountMode: "max",
        channelInterpretation: "speakers",
        loop: false,
        loopEnd: 0,
        loopStart: 0,
        playbackRate: 1
      });
      const nativeAudioBuffer = nativeContext.createBuffer(1, 2, 44100);
      nativeAudioBufferSourceNode.buffer = nativeAudioBuffer;
      nativeAudioBufferSourceNode.loop = true;
      nativeAudioBufferSourceNode.connect(nativeAudioNode);
      nativeAudioBufferSourceNode.start();
      return () => {
        nativeAudioBufferSourceNode.stop();
        nativeAudioBufferSourceNode.disconnect(nativeAudioNode);
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/constant-source-node-constructor.js
  var DEFAULT_OPTIONS8 = {
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers",
    offset: 1
  };
  var createConstantSourceNodeConstructor = (audioNodeConstructor2, createAudioParam2, createConstantSourceNodeRendererFactory2, createNativeConstantSourceNode2, getNativeContext2, isNativeOfflineAudioContext2, wrapEventListener2) => {
    return class ConstantSourceNode extends audioNodeConstructor2 {
      constructor(context2, options) {
        const nativeContext = getNativeContext2(context2);
        const mergedOptions = __spreadValues(__spreadValues({}, DEFAULT_OPTIONS8), options);
        const nativeConstantSourceNode = createNativeConstantSourceNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const constantSourceNodeRenderer = isOffline ? createConstantSourceNodeRendererFactory2() : null;
        super(context2, false, nativeConstantSourceNode, constantSourceNodeRenderer);
        this._constantSourceNodeRenderer = constantSourceNodeRenderer;
        this._nativeConstantSourceNode = nativeConstantSourceNode;
        this._offset = createAudioParam2(this, isOffline, nativeConstantSourceNode.offset, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
        this._onended = null;
      }
      get offset() {
        return this._offset;
      }
      get onended() {
        return this._onended;
      }
      set onended(value) {
        const wrappedListener = typeof value === "function" ? wrapEventListener2(this, value) : null;
        this._nativeConstantSourceNode.onended = wrappedListener;
        const nativeOnEnded = this._nativeConstantSourceNode.onended;
        this._onended = nativeOnEnded !== null && nativeOnEnded === wrappedListener ? value : nativeOnEnded;
      }
      start(when = 0) {
        this._nativeConstantSourceNode.start(when);
        if (this._constantSourceNodeRenderer !== null) {
          this._constantSourceNodeRenderer.start = when;
        }
        if (this.context.state !== "closed") {
          setInternalStateToActive(this);
          const resetInternalStateToPassive = () => {
            this._nativeConstantSourceNode.removeEventListener("ended", resetInternalStateToPassive);
            if (isActiveAudioNode(this)) {
              setInternalStateToPassive(this);
            }
          };
          this._nativeConstantSourceNode.addEventListener("ended", resetInternalStateToPassive);
        }
      }
      stop(when = 0) {
        this._nativeConstantSourceNode.stop(when);
        if (this._constantSourceNodeRenderer !== null) {
          this._constantSourceNodeRenderer.stop = when;
        }
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/constant-source-node-renderer-factory.js
  var createConstantSourceNodeRendererFactory = (connectAudioParam2, createNativeConstantSourceNode2, getNativeAudioNode2, renderAutomation2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeConstantSourceNodes = new WeakMap();
      let start2 = null;
      let stop = null;
      const createConstantSourceNode = (proxy, nativeOfflineAudioContext) => __async(void 0, null, function* () {
        let nativeConstantSourceNode = getNativeAudioNode2(proxy);
        const nativeConstantSourceNodeIsOwnedByContext = isOwnedByContext(nativeConstantSourceNode, nativeOfflineAudioContext);
        if (!nativeConstantSourceNodeIsOwnedByContext) {
          const options = {
            channelCount: nativeConstantSourceNode.channelCount,
            channelCountMode: nativeConstantSourceNode.channelCountMode,
            channelInterpretation: nativeConstantSourceNode.channelInterpretation,
            offset: nativeConstantSourceNode.offset.value
          };
          nativeConstantSourceNode = createNativeConstantSourceNode2(nativeOfflineAudioContext, options);
          if (start2 !== null) {
            nativeConstantSourceNode.start(start2);
          }
          if (stop !== null) {
            nativeConstantSourceNode.stop(stop);
          }
        }
        renderedNativeConstantSourceNodes.set(nativeOfflineAudioContext, nativeConstantSourceNode);
        if (!nativeConstantSourceNodeIsOwnedByContext) {
          yield renderAutomation2(nativeOfflineAudioContext, proxy.offset, nativeConstantSourceNode.offset);
        } else {
          yield connectAudioParam2(nativeOfflineAudioContext, proxy.offset, nativeConstantSourceNode.offset);
        }
        yield renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeConstantSourceNode);
        return nativeConstantSourceNode;
      });
      return {
        set start(value) {
          start2 = value;
        },
        set stop(value) {
          stop = value;
        },
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeConstantSourceNode = renderedNativeConstantSourceNodes.get(nativeOfflineAudioContext);
          if (renderedNativeConstantSourceNode !== void 0) {
            return Promise.resolve(renderedNativeConstantSourceNode);
          }
          return createConstantSourceNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/convert-number-to-unsigned-long.js
  var createConvertNumberToUnsignedLong = (unit32Array) => {
    return (value) => {
      unit32Array[0] = value;
      return unit32Array[0];
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/convolver-node-constructor.js
  var DEFAULT_OPTIONS9 = {
    buffer: null,
    channelCount: 2,
    channelCountMode: "clamped-max",
    channelInterpretation: "speakers",
    disableNormalization: false
  };
  var createConvolverNodeConstructor = (audioNodeConstructor2, createConvolverNodeRenderer2, createNativeConvolverNode2, getNativeContext2, isNativeOfflineAudioContext2, setAudioNodeTailTime2) => {
    return class ConvolverNode extends audioNodeConstructor2 {
      constructor(context2, options) {
        const nativeContext = getNativeContext2(context2);
        const mergedOptions = __spreadValues(__spreadValues({}, DEFAULT_OPTIONS9), options);
        const nativeConvolverNode = createNativeConvolverNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const convolverNodeRenderer = isOffline ? createConvolverNodeRenderer2() : null;
        super(context2, false, nativeConvolverNode, convolverNodeRenderer);
        this._isBufferNullified = false;
        this._nativeConvolverNode = nativeConvolverNode;
        if (mergedOptions.buffer !== null) {
          setAudioNodeTailTime2(this, mergedOptions.buffer.duration);
        }
      }
      get buffer() {
        if (this._isBufferNullified) {
          return null;
        }
        return this._nativeConvolverNode.buffer;
      }
      set buffer(value) {
        this._nativeConvolverNode.buffer = value;
        if (value === null && this._nativeConvolverNode.buffer !== null) {
          const nativeContext = this._nativeConvolverNode.context;
          this._nativeConvolverNode.buffer = nativeContext.createBuffer(1, 1, 44100);
          this._isBufferNullified = true;
          setAudioNodeTailTime2(this, 0);
        } else {
          this._isBufferNullified = false;
          setAudioNodeTailTime2(this, this._nativeConvolverNode.buffer === null ? 0 : this._nativeConvolverNode.buffer.duration);
        }
      }
      get normalize() {
        return this._nativeConvolverNode.normalize;
      }
      set normalize(value) {
        this._nativeConvolverNode.normalize = value;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/convolver-node-renderer-factory.js
  var createConvolverNodeRendererFactory = (createNativeConvolverNode2, getNativeAudioNode2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeConvolverNodes = new WeakMap();
      const createConvolverNode = (proxy, nativeOfflineAudioContext) => __async(void 0, null, function* () {
        let nativeConvolverNode = getNativeAudioNode2(proxy);
        const nativeConvolverNodeIsOwnedByContext = isOwnedByContext(nativeConvolverNode, nativeOfflineAudioContext);
        if (!nativeConvolverNodeIsOwnedByContext) {
          const options = {
            buffer: nativeConvolverNode.buffer,
            channelCount: nativeConvolverNode.channelCount,
            channelCountMode: nativeConvolverNode.channelCountMode,
            channelInterpretation: nativeConvolverNode.channelInterpretation,
            disableNormalization: !nativeConvolverNode.normalize
          };
          nativeConvolverNode = createNativeConvolverNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeConvolverNodes.set(nativeOfflineAudioContext, nativeConvolverNode);
        if (isNativeAudioNodeFaker(nativeConvolverNode)) {
          yield renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeConvolverNode.inputs[0]);
        } else {
          yield renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeConvolverNode);
        }
        return nativeConvolverNode;
      });
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeConvolverNode = renderedNativeConvolverNodes.get(nativeOfflineAudioContext);
          if (renderedNativeConvolverNode !== void 0) {
            return Promise.resolve(renderedNativeConvolverNode);
          }
          return createConvolverNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/create-native-offline-audio-context.js
  var createCreateNativeOfflineAudioContext = (createNotSupportedError2, nativeOfflineAudioContextConstructor2) => {
    return (numberOfChannels, length, sampleRate) => {
      if (nativeOfflineAudioContextConstructor2 === null) {
        throw new Error("Missing the native OfflineAudioContext constructor.");
      }
      try {
        return new nativeOfflineAudioContextConstructor2(numberOfChannels, length, sampleRate);
      } catch (err) {
        if (err.name === "SyntaxError") {
          throw createNotSupportedError2();
        }
        throw err;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/data-clone-error.js
  var createDataCloneError = () => new DOMException("", "DataCloneError");

  // node_modules/standardized-audio-context/build/es2019/helpers/detach-array-buffer.js
  var detachArrayBuffer = (arrayBuffer) => {
    const { port1, port2 } = new MessageChannel();
    return new Promise((resolve) => {
      const closeAndResolve = () => {
        port2.onmessage = null;
        port1.close();
        port2.close();
        resolve();
      };
      port2.onmessage = () => closeAndResolve();
      try {
        port1.postMessage(arrayBuffer, [arrayBuffer]);
      } finally {
        closeAndResolve();
      }
    });
  };

  // node_modules/standardized-audio-context/build/es2019/factories/decode-audio-data.js
  var createDecodeAudioData = (audioBufferStore2, cacheTestResult2, createDataCloneError2, createEncodingError2, detachedArrayBuffers, getNativeContext2, isNativeContext2, testAudioBufferCopyChannelMethodsOutOfBoundsSupport2, testPromiseSupport2, wrapAudioBufferCopyChannelMethods2, wrapAudioBufferCopyChannelMethodsOutOfBounds2) => {
    return (anyContext, audioData) => {
      const nativeContext = isNativeContext2(anyContext) ? anyContext : getNativeContext2(anyContext);
      if (detachedArrayBuffers.has(audioData)) {
        const err = createDataCloneError2();
        return Promise.reject(err);
      }
      try {
        detachedArrayBuffers.add(audioData);
      } catch (e) {
      }
      if (cacheTestResult2(testPromiseSupport2, () => testPromiseSupport2(nativeContext))) {
        return nativeContext.decodeAudioData(audioData).then((audioBuffer) => {
          detachArrayBuffer(audioData).catch(() => {
          });
          if (!cacheTestResult2(testAudioBufferCopyChannelMethodsOutOfBoundsSupport2, () => testAudioBufferCopyChannelMethodsOutOfBoundsSupport2(audioBuffer))) {
            wrapAudioBufferCopyChannelMethodsOutOfBounds2(audioBuffer);
          }
          audioBufferStore2.add(audioBuffer);
          return audioBuffer;
        });
      }
      return new Promise((resolve, reject) => {
        const complete = () => __async(void 0, null, function* () {
          try {
            yield detachArrayBuffer(audioData);
          } catch (e) {
          }
        });
        const fail = (err) => {
          reject(err);
          complete();
        };
        try {
          nativeContext.decodeAudioData(audioData, (audioBuffer) => {
            if (typeof audioBuffer.copyFromChannel !== "function") {
              wrapAudioBufferCopyChannelMethods2(audioBuffer);
              wrapAudioBufferGetChannelDataMethod(audioBuffer);
            }
            audioBufferStore2.add(audioBuffer);
            complete().then(() => resolve(audioBuffer));
          }, (err) => {
            if (err === null) {
              fail(createEncodingError2());
            } else {
              fail(err);
            }
          });
        } catch (err) {
          fail(err);
        }
      });
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/decrement-cycle-counter.js
  var createDecrementCycleCounter = (connectNativeAudioNodeToNativeAudioNode2, cycleCounters, getAudioNodeConnections2, getNativeAudioNode2, getNativeAudioParam2, getNativeContext2, isActiveAudioNode2, isNativeOfflineAudioContext2) => {
    return (audioNode, count) => {
      const cycleCounter = cycleCounters.get(audioNode);
      if (cycleCounter === void 0) {
        throw new Error("Missing the expected cycle count.");
      }
      const nativeContext = getNativeContext2(audioNode.context);
      const isOffline = isNativeOfflineAudioContext2(nativeContext);
      if (cycleCounter === count) {
        cycleCounters.delete(audioNode);
        if (!isOffline && isActiveAudioNode2(audioNode)) {
          const nativeSourceAudioNode = getNativeAudioNode2(audioNode);
          const { outputs } = getAudioNodeConnections2(audioNode);
          for (const output of outputs) {
            if (isAudioNodeOutputConnection(output)) {
              const nativeDestinationAudioNode = getNativeAudioNode2(output[0]);
              connectNativeAudioNodeToNativeAudioNode2(nativeSourceAudioNode, nativeDestinationAudioNode, output[1], output[2]);
            } else {
              const nativeDestinationAudioParam = getNativeAudioParam2(output[0]);
              nativeSourceAudioNode.connect(nativeDestinationAudioParam, output[1]);
            }
          }
        }
      } else {
        cycleCounters.set(audioNode, cycleCounter - count);
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/delay-node-constructor.js
  var DEFAULT_OPTIONS10 = {
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers",
    delayTime: 0,
    maxDelayTime: 1
  };
  var createDelayNodeConstructor = (audioNodeConstructor2, createAudioParam2, createDelayNodeRenderer2, createNativeDelayNode2, getNativeContext2, isNativeOfflineAudioContext2, setAudioNodeTailTime2) => {
    return class DelayNode extends audioNodeConstructor2 {
      constructor(context2, options) {
        const nativeContext = getNativeContext2(context2);
        const mergedOptions = __spreadValues(__spreadValues({}, DEFAULT_OPTIONS10), options);
        const nativeDelayNode = createNativeDelayNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const delayNodeRenderer = isOffline ? createDelayNodeRenderer2(mergedOptions.maxDelayTime) : null;
        super(context2, false, nativeDelayNode, delayNodeRenderer);
        this._delayTime = createAudioParam2(this, isOffline, nativeDelayNode.delayTime);
        setAudioNodeTailTime2(this, mergedOptions.maxDelayTime);
      }
      get delayTime() {
        return this._delayTime;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/delay-node-renderer-factory.js
  var createDelayNodeRendererFactory = (connectAudioParam2, createNativeDelayNode2, getNativeAudioNode2, renderAutomation2, renderInputsOfAudioNode2) => {
    return (maxDelayTime) => {
      const renderedNativeDelayNodes = new WeakMap();
      const createDelayNode = (proxy, nativeOfflineAudioContext) => __async(void 0, null, function* () {
        let nativeDelayNode = getNativeAudioNode2(proxy);
        const nativeDelayNodeIsOwnedByContext = isOwnedByContext(nativeDelayNode, nativeOfflineAudioContext);
        if (!nativeDelayNodeIsOwnedByContext) {
          const options = {
            channelCount: nativeDelayNode.channelCount,
            channelCountMode: nativeDelayNode.channelCountMode,
            channelInterpretation: nativeDelayNode.channelInterpretation,
            delayTime: nativeDelayNode.delayTime.value,
            maxDelayTime
          };
          nativeDelayNode = createNativeDelayNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeDelayNodes.set(nativeOfflineAudioContext, nativeDelayNode);
        if (!nativeDelayNodeIsOwnedByContext) {
          yield renderAutomation2(nativeOfflineAudioContext, proxy.delayTime, nativeDelayNode.delayTime);
        } else {
          yield connectAudioParam2(nativeOfflineAudioContext, proxy.delayTime, nativeDelayNode.delayTime);
        }
        yield renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeDelayNode);
        return nativeDelayNode;
      });
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeDelayNode = renderedNativeDelayNodes.get(nativeOfflineAudioContext);
          if (renderedNativeDelayNode !== void 0) {
            return Promise.resolve(renderedNativeDelayNode);
          }
          return createDelayNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/delete-active-input-connection-to-audio-node.js
  var createDeleteActiveInputConnectionToAudioNode = (pickElementFromSet2) => {
    return (activeInputs, source, output, input) => {
      return pickElementFromSet2(activeInputs[input], (activeInputConnection) => activeInputConnection[0] === source && activeInputConnection[1] === output);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/delete-unrendered-audio-worklet-node.js
  var createDeleteUnrenderedAudioWorkletNode = (getUnrenderedAudioWorkletNodes2) => {
    return (nativeContext, audioWorkletNode) => {
      getUnrenderedAudioWorkletNodes2(nativeContext).delete(audioWorkletNode);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/guards/delay-node.js
  var isDelayNode = (audioNode) => {
    return "delayTime" in audioNode;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/detect-cycles.js
  var createDetectCycles = (audioParamAudioNodeStore2, getAudioNodeConnections2, getValueForKey2) => {
    return function detectCycles(chain, nextLink) {
      const audioNode = isAudioNode(nextLink) ? nextLink : getValueForKey2(audioParamAudioNodeStore2, nextLink);
      if (isDelayNode(audioNode)) {
        return [];
      }
      if (chain[0] === audioNode) {
        return [chain];
      }
      if (chain.includes(audioNode)) {
        return [];
      }
      const { outputs } = getAudioNodeConnections2(audioNode);
      return Array.from(outputs).map((outputConnection) => detectCycles([...chain, audioNode], outputConnection[0])).reduce((mergedCycles, nestedCycles) => mergedCycles.concat(nestedCycles), []);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/disconnect-multiple-outputs.js
  var getOutputAudioNodeAtIndex = (createIndexSizeError2, outputAudioNodes, output) => {
    const outputAudioNode = outputAudioNodes[output];
    if (outputAudioNode === void 0) {
      throw createIndexSizeError2();
    }
    return outputAudioNode;
  };
  var createDisconnectMultipleOutputs = (createIndexSizeError2) => {
    return (outputAudioNodes, destinationOrOutput = void 0, output = void 0, input = 0) => {
      if (destinationOrOutput === void 0) {
        return outputAudioNodes.forEach((outputAudioNode) => outputAudioNode.disconnect());
      }
      if (typeof destinationOrOutput === "number") {
        return getOutputAudioNodeAtIndex(createIndexSizeError2, outputAudioNodes, destinationOrOutput).disconnect();
      }
      if (isNativeAudioNode(destinationOrOutput)) {
        if (output === void 0) {
          return outputAudioNodes.forEach((outputAudioNode) => outputAudioNode.disconnect(destinationOrOutput));
        }
        if (input === void 0) {
          return getOutputAudioNodeAtIndex(createIndexSizeError2, outputAudioNodes, output).disconnect(destinationOrOutput, 0);
        }
        return getOutputAudioNodeAtIndex(createIndexSizeError2, outputAudioNodes, output).disconnect(destinationOrOutput, 0, input);
      }
      if (output === void 0) {
        return outputAudioNodes.forEach((outputAudioNode) => outputAudioNode.disconnect(destinationOrOutput));
      }
      return getOutputAudioNodeAtIndex(createIndexSizeError2, outputAudioNodes, output).disconnect(destinationOrOutput, 0);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/dynamics-compressor-node-constructor.js
  var DEFAULT_OPTIONS11 = {
    attack: 3e-3,
    channelCount: 2,
    channelCountMode: "clamped-max",
    channelInterpretation: "speakers",
    knee: 30,
    ratio: 12,
    release: 0.25,
    threshold: -24
  };
  var createDynamicsCompressorNodeConstructor = (audioNodeConstructor2, createAudioParam2, createDynamicsCompressorNodeRenderer2, createNativeDynamicsCompressorNode2, createNotSupportedError2, getNativeContext2, isNativeOfflineAudioContext2, setAudioNodeTailTime2) => {
    return class DynamicsCompressorNode extends audioNodeConstructor2 {
      constructor(context2, options) {
        const nativeContext = getNativeContext2(context2);
        const mergedOptions = __spreadValues(__spreadValues({}, DEFAULT_OPTIONS11), options);
        const nativeDynamicsCompressorNode = createNativeDynamicsCompressorNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const dynamicsCompressorNodeRenderer = isOffline ? createDynamicsCompressorNodeRenderer2() : null;
        super(context2, false, nativeDynamicsCompressorNode, dynamicsCompressorNodeRenderer);
        this._attack = createAudioParam2(this, isOffline, nativeDynamicsCompressorNode.attack);
        this._knee = createAudioParam2(this, isOffline, nativeDynamicsCompressorNode.knee);
        this._nativeDynamicsCompressorNode = nativeDynamicsCompressorNode;
        this._ratio = createAudioParam2(this, isOffline, nativeDynamicsCompressorNode.ratio);
        this._release = createAudioParam2(this, isOffline, nativeDynamicsCompressorNode.release);
        this._threshold = createAudioParam2(this, isOffline, nativeDynamicsCompressorNode.threshold);
        setAudioNodeTailTime2(this, 6e-3);
      }
      get attack() {
        return this._attack;
      }
      get channelCount() {
        return this._nativeDynamicsCompressorNode.channelCount;
      }
      set channelCount(value) {
        const previousChannelCount = this._nativeDynamicsCompressorNode.channelCount;
        this._nativeDynamicsCompressorNode.channelCount = value;
        if (value > 2) {
          this._nativeDynamicsCompressorNode.channelCount = previousChannelCount;
          throw createNotSupportedError2();
        }
      }
      get channelCountMode() {
        return this._nativeDynamicsCompressorNode.channelCountMode;
      }
      set channelCountMode(value) {
        const previousChannelCount = this._nativeDynamicsCompressorNode.channelCountMode;
        this._nativeDynamicsCompressorNode.channelCountMode = value;
        if (value === "max") {
          this._nativeDynamicsCompressorNode.channelCountMode = previousChannelCount;
          throw createNotSupportedError2();
        }
      }
      get knee() {
        return this._knee;
      }
      get ratio() {
        return this._ratio;
      }
      get reduction() {
        if (typeof this._nativeDynamicsCompressorNode.reduction.value === "number") {
          return this._nativeDynamicsCompressorNode.reduction.value;
        }
        return this._nativeDynamicsCompressorNode.reduction;
      }
      get release() {
        return this._release;
      }
      get threshold() {
        return this._threshold;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/dynamics-compressor-node-renderer-factory.js
  var createDynamicsCompressorNodeRendererFactory = (connectAudioParam2, createNativeDynamicsCompressorNode2, getNativeAudioNode2, renderAutomation2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeDynamicsCompressorNodes = new WeakMap();
      const createDynamicsCompressorNode = (proxy, nativeOfflineAudioContext) => __async(void 0, null, function* () {
        let nativeDynamicsCompressorNode = getNativeAudioNode2(proxy);
        const nativeDynamicsCompressorNodeIsOwnedByContext = isOwnedByContext(nativeDynamicsCompressorNode, nativeOfflineAudioContext);
        if (!nativeDynamicsCompressorNodeIsOwnedByContext) {
          const options = {
            attack: nativeDynamicsCompressorNode.attack.value,
            channelCount: nativeDynamicsCompressorNode.channelCount,
            channelCountMode: nativeDynamicsCompressorNode.channelCountMode,
            channelInterpretation: nativeDynamicsCompressorNode.channelInterpretation,
            knee: nativeDynamicsCompressorNode.knee.value,
            ratio: nativeDynamicsCompressorNode.ratio.value,
            release: nativeDynamicsCompressorNode.release.value,
            threshold: nativeDynamicsCompressorNode.threshold.value
          };
          nativeDynamicsCompressorNode = createNativeDynamicsCompressorNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeDynamicsCompressorNodes.set(nativeOfflineAudioContext, nativeDynamicsCompressorNode);
        if (!nativeDynamicsCompressorNodeIsOwnedByContext) {
          yield renderAutomation2(nativeOfflineAudioContext, proxy.attack, nativeDynamicsCompressorNode.attack);
          yield renderAutomation2(nativeOfflineAudioContext, proxy.knee, nativeDynamicsCompressorNode.knee);
          yield renderAutomation2(nativeOfflineAudioContext, proxy.ratio, nativeDynamicsCompressorNode.ratio);
          yield renderAutomation2(nativeOfflineAudioContext, proxy.release, nativeDynamicsCompressorNode.release);
          yield renderAutomation2(nativeOfflineAudioContext, proxy.threshold, nativeDynamicsCompressorNode.threshold);
        } else {
          yield connectAudioParam2(nativeOfflineAudioContext, proxy.attack, nativeDynamicsCompressorNode.attack);
          yield connectAudioParam2(nativeOfflineAudioContext, proxy.knee, nativeDynamicsCompressorNode.knee);
          yield connectAudioParam2(nativeOfflineAudioContext, proxy.ratio, nativeDynamicsCompressorNode.ratio);
          yield connectAudioParam2(nativeOfflineAudioContext, proxy.release, nativeDynamicsCompressorNode.release);
          yield connectAudioParam2(nativeOfflineAudioContext, proxy.threshold, nativeDynamicsCompressorNode.threshold);
        }
        yield renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeDynamicsCompressorNode);
        return nativeDynamicsCompressorNode;
      });
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeDynamicsCompressorNode = renderedNativeDynamicsCompressorNodes.get(nativeOfflineAudioContext);
          if (renderedNativeDynamicsCompressorNode !== void 0) {
            return Promise.resolve(renderedNativeDynamicsCompressorNode);
          }
          return createDynamicsCompressorNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/encoding-error.js
  var createEncodingError = () => new DOMException("", "EncodingError");

  // node_modules/standardized-audio-context/build/es2019/factories/evaluate-source.js
  var createEvaluateSource = (window3) => {
    return (source) => new Promise((resolve, reject) => {
      if (window3 === null) {
        reject(new SyntaxError());
        return;
      }
      const head = window3.document.head;
      if (head === null) {
        reject(new SyntaxError());
      } else {
        const script = window3.document.createElement("script");
        const blob = new Blob([source], { type: "application/javascript" });
        const url = URL.createObjectURL(blob);
        const originalOnErrorHandler = window3.onerror;
        const removeErrorEventListenerAndRevokeUrl = () => {
          window3.onerror = originalOnErrorHandler;
          URL.revokeObjectURL(url);
        };
        window3.onerror = (message, src, lineno, colno, error) => {
          if (src === url || src === window3.location.href && lineno === 1 && colno === 1) {
            removeErrorEventListenerAndRevokeUrl();
            reject(error);
            return false;
          }
          if (originalOnErrorHandler !== null) {
            return originalOnErrorHandler(message, src, lineno, colno, error);
          }
        };
        script.onerror = () => {
          removeErrorEventListenerAndRevokeUrl();
          reject(new SyntaxError());
        };
        script.onload = () => {
          removeErrorEventListenerAndRevokeUrl();
          resolve();
        };
        script.src = url;
        script.type = "module";
        head.appendChild(script);
      }
    });
  };

  // node_modules/standardized-audio-context/build/es2019/factories/event-target-constructor.js
  var createEventTargetConstructor = (wrapEventListener2) => {
    return class EventTarget {
      constructor(_nativeEventTarget) {
        this._nativeEventTarget = _nativeEventTarget;
        this._listeners = new WeakMap();
      }
      addEventListener(type, listener, options) {
        if (listener !== null) {
          let wrappedEventListener = this._listeners.get(listener);
          if (wrappedEventListener === void 0) {
            wrappedEventListener = wrapEventListener2(this, listener);
            if (typeof listener === "function") {
              this._listeners.set(listener, wrappedEventListener);
            }
          }
          this._nativeEventTarget.addEventListener(type, wrappedEventListener, options);
        }
      }
      dispatchEvent(event) {
        return this._nativeEventTarget.dispatchEvent(event);
      }
      removeEventListener(type, listener, options) {
        const wrappedEventListener = listener === null ? void 0 : this._listeners.get(listener);
        this._nativeEventTarget.removeEventListener(type, wrappedEventListener === void 0 ? null : wrappedEventListener, options);
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/expose-current-frame-and-current-time.js
  var createExposeCurrentFrameAndCurrentTime = (window3) => {
    return (currentTime, sampleRate, fn) => {
      Object.defineProperties(window3, {
        currentFrame: {
          configurable: true,
          get() {
            return Math.round(currentTime * sampleRate);
          }
        },
        currentTime: {
          configurable: true,
          get() {
            return currentTime;
          }
        }
      });
      try {
        return fn();
      } finally {
        if (window3 !== null) {
          delete window3.currentFrame;
          delete window3.currentTime;
        }
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/fetch-source.js
  var createFetchSource = (createAbortError2) => {
    return (url) => __async(void 0, null, function* () {
      try {
        const response = yield fetch(url);
        if (response.ok) {
          return [yield response.text(), response.url];
        }
      } catch (e) {
      }
      throw createAbortError2();
    });
  };

  // node_modules/standardized-audio-context/build/es2019/factories/gain-node-constructor.js
  var DEFAULT_OPTIONS12 = {
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers",
    gain: 1
  };
  var createGainNodeConstructor = (audioNodeConstructor2, createAudioParam2, createGainNodeRenderer2, createNativeGainNode2, getNativeContext2, isNativeOfflineAudioContext2) => {
    return class GainNode extends audioNodeConstructor2 {
      constructor(context2, options) {
        const nativeContext = getNativeContext2(context2);
        const mergedOptions = __spreadValues(__spreadValues({}, DEFAULT_OPTIONS12), options);
        const nativeGainNode = createNativeGainNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const gainNodeRenderer = isOffline ? createGainNodeRenderer2() : null;
        super(context2, false, nativeGainNode, gainNodeRenderer);
        this._gain = createAudioParam2(this, isOffline, nativeGainNode.gain, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
      }
      get gain() {
        return this._gain;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/gain-node-renderer-factory.js
  var createGainNodeRendererFactory = (connectAudioParam2, createNativeGainNode2, getNativeAudioNode2, renderAutomation2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeGainNodes = new WeakMap();
      const createGainNode = (proxy, nativeOfflineAudioContext) => __async(void 0, null, function* () {
        let nativeGainNode = getNativeAudioNode2(proxy);
        const nativeGainNodeIsOwnedByContext = isOwnedByContext(nativeGainNode, nativeOfflineAudioContext);
        if (!nativeGainNodeIsOwnedByContext) {
          const options = {
            channelCount: nativeGainNode.channelCount,
            channelCountMode: nativeGainNode.channelCountMode,
            channelInterpretation: nativeGainNode.channelInterpretation,
            gain: nativeGainNode.gain.value
          };
          nativeGainNode = createNativeGainNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeGainNodes.set(nativeOfflineAudioContext, nativeGainNode);
        if (!nativeGainNodeIsOwnedByContext) {
          yield renderAutomation2(nativeOfflineAudioContext, proxy.gain, nativeGainNode.gain);
        } else {
          yield connectAudioParam2(nativeOfflineAudioContext, proxy.gain, nativeGainNode.gain);
        }
        yield renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeGainNode);
        return nativeGainNode;
      });
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeGainNode = renderedNativeGainNodes.get(nativeOfflineAudioContext);
          if (renderedNativeGainNode !== void 0) {
            return Promise.resolve(renderedNativeGainNode);
          }
          return createGainNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/get-active-audio-worklet-node-inputs.js
  var createGetActiveAudioWorkletNodeInputs = (activeAudioWorkletNodeInputsStore2, getValueForKey2) => {
    return (nativeAudioWorkletNode) => getValueForKey2(activeAudioWorkletNodeInputsStore2, nativeAudioWorkletNode);
  };

  // node_modules/standardized-audio-context/build/es2019/factories/get-audio-node-renderer.js
  var createGetAudioNodeRenderer = (getAudioNodeConnections2) => {
    return (audioNode) => {
      const audioNodeConnections = getAudioNodeConnections2(audioNode);
      if (audioNodeConnections.renderer === null) {
        throw new Error("Missing the renderer of the given AudioNode in the audio graph.");
      }
      return audioNodeConnections.renderer;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/get-audio-node-tail-time.js
  var createGetAudioNodeTailTime = (audioNodeTailTimeStore2) => {
    return (audioNode) => {
      var _a3;
      return (_a3 = audioNodeTailTimeStore2.get(audioNode)) !== null && _a3 !== void 0 ? _a3 : 0;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/get-audio-param-renderer.js
  var createGetAudioParamRenderer = (getAudioParamConnections2) => {
    return (audioParam) => {
      const audioParamConnections = getAudioParamConnections2(audioParam);
      if (audioParamConnections.renderer === null) {
        throw new Error("Missing the renderer of the given AudioParam in the audio graph.");
      }
      return audioParamConnections.renderer;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/get-backup-offline-audio-context.js
  var createGetBackupOfflineAudioContext = (backupOfflineAudioContextStore2) => {
    return (nativeContext) => {
      return backupOfflineAudioContextStore2.get(nativeContext);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/invalid-state-error.js
  var createInvalidStateError = () => new DOMException("", "InvalidStateError");

  // node_modules/standardized-audio-context/build/es2019/factories/get-native-context.js
  var createGetNativeContext = (contextStore) => {
    return (context2) => {
      const nativeContext = contextStore.get(context2);
      if (nativeContext === void 0) {
        throw createInvalidStateError();
      }
      return nativeContext;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/get-or-create-backup-offline-audio-context.js
  var createGetOrCreateBackupOfflineAudioContext = (backupOfflineAudioContextStore2, nativeOfflineAudioContextConstructor2) => {
    return (nativeContext) => {
      let backupOfflineAudioContext = backupOfflineAudioContextStore2.get(nativeContext);
      if (backupOfflineAudioContext !== void 0) {
        return backupOfflineAudioContext;
      }
      if (nativeOfflineAudioContextConstructor2 === null) {
        throw new Error("Missing the native OfflineAudioContext constructor.");
      }
      backupOfflineAudioContext = new nativeOfflineAudioContextConstructor2(1, 1, 44100);
      backupOfflineAudioContextStore2.set(nativeContext, backupOfflineAudioContext);
      return backupOfflineAudioContext;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/get-unrendered-audio-worklet-nodes.js
  var createGetUnrenderedAudioWorkletNodes = (unrenderedAudioWorkletNodeStore2) => {
    return (nativeContext) => {
      const unrenderedAudioWorkletNodes = unrenderedAudioWorkletNodeStore2.get(nativeContext);
      if (unrenderedAudioWorkletNodes === void 0) {
        throw new Error("The context has no set of AudioWorkletNodes.");
      }
      return unrenderedAudioWorkletNodes;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/invalid-access-error.js
  var createInvalidAccessError = () => new DOMException("", "InvalidAccessError");

  // node_modules/standardized-audio-context/build/es2019/helpers/wrap-iir-filter-node-get-frequency-response-method.js
  var wrapIIRFilterNodeGetFrequencyResponseMethod = (nativeIIRFilterNode) => {
    nativeIIRFilterNode.getFrequencyResponse = ((getFrequencyResponse) => {
      return (frequencyHz, magResponse, phaseResponse) => {
        if (frequencyHz.length !== magResponse.length || magResponse.length !== phaseResponse.length) {
          throw createInvalidAccessError();
        }
        return getFrequencyResponse.call(nativeIIRFilterNode, frequencyHz, magResponse, phaseResponse);
      };
    })(nativeIIRFilterNode.getFrequencyResponse);
  };

  // node_modules/standardized-audio-context/build/es2019/factories/iir-filter-node-constructor.js
  var DEFAULT_OPTIONS13 = {
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers"
  };
  var createIIRFilterNodeConstructor = (audioNodeConstructor2, createNativeIIRFilterNode2, createIIRFilterNodeRenderer2, getNativeContext2, isNativeOfflineAudioContext2, setAudioNodeTailTime2) => {
    return class IIRFilterNode extends audioNodeConstructor2 {
      constructor(context2, options) {
        const nativeContext = getNativeContext2(context2);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const mergedOptions = __spreadValues(__spreadValues({}, DEFAULT_OPTIONS13), options);
        const nativeIIRFilterNode = createNativeIIRFilterNode2(nativeContext, isOffline ? null : context2.baseLatency, mergedOptions);
        const iirFilterNodeRenderer = isOffline ? createIIRFilterNodeRenderer2(mergedOptions.feedback, mergedOptions.feedforward) : null;
        super(context2, false, nativeIIRFilterNode, iirFilterNodeRenderer);
        wrapIIRFilterNodeGetFrequencyResponseMethod(nativeIIRFilterNode);
        this._nativeIIRFilterNode = nativeIIRFilterNode;
        setAudioNodeTailTime2(this, 1);
      }
      getFrequencyResponse(frequencyHz, magResponse, phaseResponse) {
        return this._nativeIIRFilterNode.getFrequencyResponse(frequencyHz, magResponse, phaseResponse);
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/filter-buffer.js
  var filterBuffer = (feedback, feedbackLength, feedforward, feedforwardLength, minLength, xBuffer, yBuffer, bufferIndex, bufferLength, input, output) => {
    const inputLength = input.length;
    let i = bufferIndex;
    for (let j = 0; j < inputLength; j += 1) {
      let y = feedforward[0] * input[j];
      for (let k = 1; k < minLength; k += 1) {
        const x = i - k & bufferLength - 1;
        y += feedforward[k] * xBuffer[x];
        y -= feedback[k] * yBuffer[x];
      }
      for (let k = minLength; k < feedforwardLength; k += 1) {
        y += feedforward[k] * xBuffer[i - k & bufferLength - 1];
      }
      for (let k = minLength; k < feedbackLength; k += 1) {
        y -= feedback[k] * yBuffer[i - k & bufferLength - 1];
      }
      xBuffer[i] = input[j];
      yBuffer[i] = y;
      i = i + 1 & bufferLength - 1;
      output[j] = y;
    }
    return i;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/iir-filter-node-renderer-factory.js
  var filterFullBuffer = (renderedBuffer, nativeOfflineAudioContext, feedback, feedforward) => {
    const convertedFeedback = feedback instanceof Float64Array ? feedback : new Float64Array(feedback);
    const convertedFeedforward = feedforward instanceof Float64Array ? feedforward : new Float64Array(feedforward);
    const feedbackLength = convertedFeedback.length;
    const feedforwardLength = convertedFeedforward.length;
    const minLength = Math.min(feedbackLength, feedforwardLength);
    if (convertedFeedback[0] !== 1) {
      for (let i = 0; i < feedbackLength; i += 1) {
        convertedFeedforward[i] /= convertedFeedback[0];
      }
      for (let i = 1; i < feedforwardLength; i += 1) {
        convertedFeedback[i] /= convertedFeedback[0];
      }
    }
    const bufferLength = 32;
    const xBuffer = new Float32Array(bufferLength);
    const yBuffer = new Float32Array(bufferLength);
    const filteredBuffer = nativeOfflineAudioContext.createBuffer(renderedBuffer.numberOfChannels, renderedBuffer.length, renderedBuffer.sampleRate);
    const numberOfChannels = renderedBuffer.numberOfChannels;
    for (let i = 0; i < numberOfChannels; i += 1) {
      const input = renderedBuffer.getChannelData(i);
      const output = filteredBuffer.getChannelData(i);
      xBuffer.fill(0);
      yBuffer.fill(0);
      filterBuffer(convertedFeedback, feedbackLength, convertedFeedforward, feedforwardLength, minLength, xBuffer, yBuffer, 0, bufferLength, input, output);
    }
    return filteredBuffer;
  };
  var createIIRFilterNodeRendererFactory = (createNativeAudioBufferSourceNode2, getNativeAudioNode2, nativeOfflineAudioContextConstructor2, renderInputsOfAudioNode2, renderNativeOfflineAudioContext2) => {
    return (feedback, feedforward) => {
      const renderedNativeAudioNodes = new WeakMap();
      let filteredBufferPromise = null;
      const createAudioNode = (proxy, nativeOfflineAudioContext) => __async(void 0, null, function* () {
        let nativeAudioBufferSourceNode = null;
        let nativeIIRFilterNode = getNativeAudioNode2(proxy);
        const nativeIIRFilterNodeIsOwnedByContext = isOwnedByContext(nativeIIRFilterNode, nativeOfflineAudioContext);
        if (nativeOfflineAudioContext.createIIRFilter === void 0) {
          nativeAudioBufferSourceNode = createNativeAudioBufferSourceNode2(nativeOfflineAudioContext, {
            buffer: null,
            channelCount: 2,
            channelCountMode: "max",
            channelInterpretation: "speakers",
            loop: false,
            loopEnd: 0,
            loopStart: 0,
            playbackRate: 1
          });
        } else if (!nativeIIRFilterNodeIsOwnedByContext) {
          nativeIIRFilterNode = nativeOfflineAudioContext.createIIRFilter(feedforward, feedback);
        }
        renderedNativeAudioNodes.set(nativeOfflineAudioContext, nativeAudioBufferSourceNode === null ? nativeIIRFilterNode : nativeAudioBufferSourceNode);
        if (nativeAudioBufferSourceNode !== null) {
          if (filteredBufferPromise === null) {
            if (nativeOfflineAudioContextConstructor2 === null) {
              throw new Error("Missing the native OfflineAudioContext constructor.");
            }
            const partialOfflineAudioContext = new nativeOfflineAudioContextConstructor2(proxy.context.destination.channelCount, proxy.context.length, nativeOfflineAudioContext.sampleRate);
            filteredBufferPromise = (() => __async(void 0, null, function* () {
              yield renderInputsOfAudioNode2(proxy, partialOfflineAudioContext, partialOfflineAudioContext.destination);
              const renderedBuffer = yield renderNativeOfflineAudioContext2(partialOfflineAudioContext);
              return filterFullBuffer(renderedBuffer, nativeOfflineAudioContext, feedback, feedforward);
            }))();
          }
          const filteredBuffer = yield filteredBufferPromise;
          nativeAudioBufferSourceNode.buffer = filteredBuffer;
          nativeAudioBufferSourceNode.start(0);
          return nativeAudioBufferSourceNode;
        }
        yield renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeIIRFilterNode);
        return nativeIIRFilterNode;
      });
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeAudioNode = renderedNativeAudioNodes.get(nativeOfflineAudioContext);
          if (renderedNativeAudioNode !== void 0) {
            return Promise.resolve(renderedNativeAudioNode);
          }
          return createAudioNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/increment-cycle-counter-factory.js
  var createIncrementCycleCounterFactory = (cycleCounters, disconnectNativeAudioNodeFromNativeAudioNode2, getAudioNodeConnections2, getNativeAudioNode2, getNativeAudioParam2, isActiveAudioNode2) => {
    return (isOffline) => {
      return (audioNode, count) => {
        const cycleCounter = cycleCounters.get(audioNode);
        if (cycleCounter === void 0) {
          if (!isOffline && isActiveAudioNode2(audioNode)) {
            const nativeSourceAudioNode = getNativeAudioNode2(audioNode);
            const { outputs } = getAudioNodeConnections2(audioNode);
            for (const output of outputs) {
              if (isAudioNodeOutputConnection(output)) {
                const nativeDestinationAudioNode = getNativeAudioNode2(output[0]);
                disconnectNativeAudioNodeFromNativeAudioNode2(nativeSourceAudioNode, nativeDestinationAudioNode, output[1], output[2]);
              } else {
                const nativeDestinationAudioParam = getNativeAudioParam2(output[0]);
                nativeSourceAudioNode.disconnect(nativeDestinationAudioParam, output[1]);
              }
            }
          }
          cycleCounters.set(audioNode, count);
        } else {
          cycleCounters.set(audioNode, cycleCounter + count);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/is-any-audio-context.js
  var createIsAnyAudioContext = (contextStore, isNativeAudioContext2) => {
    return (anything) => {
      const nativeContext = contextStore.get(anything);
      return isNativeAudioContext2(nativeContext) || isNativeAudioContext2(anything);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/is-any-audio-node.js
  var createIsAnyAudioNode = (audioNodeStore, isNativeAudioNode3) => {
    return (anything) => audioNodeStore.has(anything) || isNativeAudioNode3(anything);
  };

  // node_modules/standardized-audio-context/build/es2019/factories/is-any-audio-param.js
  var createIsAnyAudioParam = (audioParamStore, isNativeAudioParam2) => {
    return (anything) => audioParamStore.has(anything) || isNativeAudioParam2(anything);
  };

  // node_modules/standardized-audio-context/build/es2019/factories/is-any-offline-audio-context.js
  var createIsAnyOfflineAudioContext = (contextStore, isNativeOfflineAudioContext2) => {
    return (anything) => {
      const nativeContext = contextStore.get(anything);
      return isNativeOfflineAudioContext2(nativeContext) || isNativeOfflineAudioContext2(anything);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/is-native-audio-context.js
  var createIsNativeAudioContext = (nativeAudioContextConstructor2) => {
    return (anything) => {
      return nativeAudioContextConstructor2 !== null && anything instanceof nativeAudioContextConstructor2;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/is-native-audio-node.js
  var createIsNativeAudioNode = (window3) => {
    return (anything) => {
      return window3 !== null && typeof window3.AudioNode === "function" && anything instanceof window3.AudioNode;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/is-native-audio-param.js
  var createIsNativeAudioParam = (window3) => {
    return (anything) => {
      return window3 !== null && typeof window3.AudioParam === "function" && anything instanceof window3.AudioParam;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/is-native-context.js
  var createIsNativeContext = (isNativeAudioContext2, isNativeOfflineAudioContext2) => {
    return (anything) => {
      return isNativeAudioContext2(anything) || isNativeOfflineAudioContext2(anything);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/is-native-offline-audio-context.js
  var createIsNativeOfflineAudioContext = (nativeOfflineAudioContextConstructor2) => {
    return (anything) => {
      return nativeOfflineAudioContextConstructor2 !== null && anything instanceof nativeOfflineAudioContextConstructor2;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/is-secure-context.js
  var createIsSecureContext = (window3) => window3 !== null && window3.isSecureContext;

  // node_modules/standardized-audio-context/build/es2019/factories/media-element-audio-source-node-constructor.js
  var createMediaElementAudioSourceNodeConstructor = (audioNodeConstructor2, createNativeMediaElementAudioSourceNode2, getNativeContext2, isNativeOfflineAudioContext2) => {
    return class MediaElementAudioSourceNode extends audioNodeConstructor2 {
      constructor(context2, options) {
        const nativeContext = getNativeContext2(context2);
        const nativeMediaElementAudioSourceNode = createNativeMediaElementAudioSourceNode2(nativeContext, options);
        if (isNativeOfflineAudioContext2(nativeContext)) {
          throw TypeError();
        }
        super(context2, true, nativeMediaElementAudioSourceNode, null);
        this._nativeMediaElementAudioSourceNode = nativeMediaElementAudioSourceNode;
      }
      get mediaElement() {
        return this._nativeMediaElementAudioSourceNode.mediaElement;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/media-stream-audio-destination-node-constructor.js
  var DEFAULT_OPTIONS14 = {
    channelCount: 2,
    channelCountMode: "explicit",
    channelInterpretation: "speakers"
  };
  var createMediaStreamAudioDestinationNodeConstructor = (audioNodeConstructor2, createNativeMediaStreamAudioDestinationNode2, getNativeContext2, isNativeOfflineAudioContext2) => {
    return class MediaStreamAudioDestinationNode extends audioNodeConstructor2 {
      constructor(context2, options) {
        const nativeContext = getNativeContext2(context2);
        if (isNativeOfflineAudioContext2(nativeContext)) {
          throw new TypeError();
        }
        const mergedOptions = __spreadValues(__spreadValues({}, DEFAULT_OPTIONS14), options);
        const nativeMediaStreamAudioDestinationNode = createNativeMediaStreamAudioDestinationNode2(nativeContext, mergedOptions);
        super(context2, false, nativeMediaStreamAudioDestinationNode, null);
        this._nativeMediaStreamAudioDestinationNode = nativeMediaStreamAudioDestinationNode;
      }
      get stream() {
        return this._nativeMediaStreamAudioDestinationNode.stream;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/media-stream-audio-source-node-constructor.js
  var createMediaStreamAudioSourceNodeConstructor = (audioNodeConstructor2, createNativeMediaStreamAudioSourceNode2, getNativeContext2, isNativeOfflineAudioContext2) => {
    return class MediaStreamAudioSourceNode extends audioNodeConstructor2 {
      constructor(context2, options) {
        const nativeContext = getNativeContext2(context2);
        const nativeMediaStreamAudioSourceNode = createNativeMediaStreamAudioSourceNode2(nativeContext, options);
        if (isNativeOfflineAudioContext2(nativeContext)) {
          throw new TypeError();
        }
        super(context2, true, nativeMediaStreamAudioSourceNode, null);
        this._nativeMediaStreamAudioSourceNode = nativeMediaStreamAudioSourceNode;
      }
      get mediaStream() {
        return this._nativeMediaStreamAudioSourceNode.mediaStream;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/media-stream-track-audio-source-node-constructor.js
  var createMediaStreamTrackAudioSourceNodeConstructor = (audioNodeConstructor2, createNativeMediaStreamTrackAudioSourceNode2, getNativeContext2) => {
    return class MediaStreamTrackAudioSourceNode extends audioNodeConstructor2 {
      constructor(context2, options) {
        const nativeContext = getNativeContext2(context2);
        const nativeMediaStreamTrackAudioSourceNode = createNativeMediaStreamTrackAudioSourceNode2(nativeContext, options);
        super(context2, true, nativeMediaStreamTrackAudioSourceNode, null);
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/minimal-audio-context-constructor.js
  var createMinimalAudioContextConstructor = (createInvalidStateError2, createNotSupportedError2, createUnknownError2, minimalBaseAudioContextConstructor2, nativeAudioContextConstructor2) => {
    return class MinimalAudioContext extends minimalBaseAudioContextConstructor2 {
      constructor(options = {}) {
        if (nativeAudioContextConstructor2 === null) {
          throw new Error("Missing the native AudioContext constructor.");
        }
        let nativeAudioContext;
        try {
          nativeAudioContext = new nativeAudioContextConstructor2(options);
        } catch (err) {
          if (err.code === 12 && err.message === "sampleRate is not in range") {
            throw createNotSupportedError2();
          }
          throw err;
        }
        if (nativeAudioContext === null) {
          throw createUnknownError2();
        }
        if (!isValidLatencyHint(options.latencyHint)) {
          throw new TypeError(`The provided value '${options.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);
        }
        if (options.sampleRate !== void 0 && nativeAudioContext.sampleRate !== options.sampleRate) {
          throw createNotSupportedError2();
        }
        super(nativeAudioContext, 2);
        const { latencyHint } = options;
        const { sampleRate } = nativeAudioContext;
        this._baseLatency = typeof nativeAudioContext.baseLatency === "number" ? nativeAudioContext.baseLatency : latencyHint === "balanced" ? 512 / sampleRate : latencyHint === "interactive" || latencyHint === void 0 ? 256 / sampleRate : latencyHint === "playback" ? 1024 / sampleRate : Math.max(2, Math.min(128, Math.round(latencyHint * sampleRate / 128))) * 128 / sampleRate;
        this._nativeAudioContext = nativeAudioContext;
        if (nativeAudioContextConstructor2.name === "webkitAudioContext") {
          this._nativeGainNode = nativeAudioContext.createGain();
          this._nativeOscillatorNode = nativeAudioContext.createOscillator();
          this._nativeGainNode.gain.value = 1e-37;
          this._nativeOscillatorNode.connect(this._nativeGainNode).connect(nativeAudioContext.destination);
          this._nativeOscillatorNode.start();
        } else {
          this._nativeGainNode = null;
          this._nativeOscillatorNode = null;
        }
        this._state = null;
        if (nativeAudioContext.state === "running") {
          this._state = "suspended";
          const revokeState = () => {
            if (this._state === "suspended") {
              this._state = null;
            }
            nativeAudioContext.removeEventListener("statechange", revokeState);
          };
          nativeAudioContext.addEventListener("statechange", revokeState);
        }
      }
      get baseLatency() {
        return this._baseLatency;
      }
      get state() {
        return this._state !== null ? this._state : this._nativeAudioContext.state;
      }
      close() {
        if (this.state === "closed") {
          return this._nativeAudioContext.close().then(() => {
            throw createInvalidStateError2();
          });
        }
        if (this._state === "suspended") {
          this._state = null;
        }
        return this._nativeAudioContext.close().then(() => {
          if (this._nativeGainNode !== null && this._nativeOscillatorNode !== null) {
            this._nativeOscillatorNode.stop();
            this._nativeGainNode.disconnect();
            this._nativeOscillatorNode.disconnect();
          }
          deactivateAudioGraph(this);
        });
      }
      resume() {
        if (this._state === "suspended") {
          return new Promise((resolve, reject) => {
            const resolvePromise = () => {
              this._nativeAudioContext.removeEventListener("statechange", resolvePromise);
              if (this._nativeAudioContext.state === "running") {
                resolve();
              } else {
                this.resume().then(resolve, reject);
              }
            };
            this._nativeAudioContext.addEventListener("statechange", resolvePromise);
          });
        }
        return this._nativeAudioContext.resume().catch((err) => {
          if (err === void 0 || err.code === 15) {
            throw createInvalidStateError2();
          }
          throw err;
        });
      }
      suspend() {
        return this._nativeAudioContext.suspend().catch((err) => {
          if (err === void 0) {
            throw createInvalidStateError2();
          }
          throw err;
        });
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/minimal-base-audio-context-constructor.js
  var createMinimalBaseAudioContextConstructor = (audioDestinationNodeConstructor2, createAudioListener2, eventTargetConstructor2, isNativeOfflineAudioContext2, unrenderedAudioWorkletNodeStore2, wrapEventListener2) => {
    return class MinimalBaseAudioContext extends eventTargetConstructor2 {
      constructor(_nativeContext, numberOfChannels) {
        super(_nativeContext);
        this._nativeContext = _nativeContext;
        CONTEXT_STORE.set(this, _nativeContext);
        if (isNativeOfflineAudioContext2(_nativeContext)) {
          unrenderedAudioWorkletNodeStore2.set(_nativeContext, new Set());
        }
        this._destination = new audioDestinationNodeConstructor2(this, numberOfChannels);
        this._listener = createAudioListener2(this, _nativeContext);
        this._onstatechange = null;
      }
      get currentTime() {
        return this._nativeContext.currentTime;
      }
      get destination() {
        return this._destination;
      }
      get listener() {
        return this._listener;
      }
      get onstatechange() {
        return this._onstatechange;
      }
      set onstatechange(value) {
        const wrappedListener = typeof value === "function" ? wrapEventListener2(this, value) : null;
        this._nativeContext.onstatechange = wrappedListener;
        const nativeOnStateChange = this._nativeContext.onstatechange;
        this._onstatechange = nativeOnStateChange !== null && nativeOnStateChange === wrappedListener ? value : nativeOnStateChange;
      }
      get sampleRate() {
        return this._nativeContext.sampleRate;
      }
      get state() {
        return this._nativeContext.state;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/test-promise-support.js
  var testPromiseSupport = (nativeContext) => {
    const uint32Array = new Uint32Array([1179011410, 40, 1163280727, 544501094, 16, 131073, 44100, 176400, 1048580, 1635017060, 4, 0]);
    try {
      const promise = nativeContext.decodeAudioData(uint32Array.buffer, () => {
      });
      if (promise === void 0) {
        return false;
      }
      promise.catch(() => {
      });
      return true;
    } catch (e) {
    }
    return false;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/minimal-offline-audio-context-constructor.js
  var DEFAULT_OPTIONS15 = {
    numberOfChannels: 1
  };
  var createMinimalOfflineAudioContextConstructor = (cacheTestResult2, createInvalidStateError2, createNativeOfflineAudioContext2, minimalBaseAudioContextConstructor2, startRendering2) => {
    return class MinimalOfflineAudioContext extends minimalBaseAudioContextConstructor2 {
      constructor(options) {
        const { length, numberOfChannels, sampleRate } = __spreadValues(__spreadValues({}, DEFAULT_OPTIONS15), options);
        const nativeOfflineAudioContext = createNativeOfflineAudioContext2(numberOfChannels, length, sampleRate);
        if (!cacheTestResult2(testPromiseSupport, () => testPromiseSupport(nativeOfflineAudioContext))) {
          nativeOfflineAudioContext.addEventListener("statechange", (() => {
            let i = 0;
            const delayStateChangeEvent = (event) => {
              if (this._state === "running") {
                if (i > 0) {
                  nativeOfflineAudioContext.removeEventListener("statechange", delayStateChangeEvent);
                  event.stopImmediatePropagation();
                  this._waitForThePromiseToSettle(event);
                } else {
                  i += 1;
                }
              }
            };
            return delayStateChangeEvent;
          })());
        }
        super(nativeOfflineAudioContext, numberOfChannels);
        this._length = length;
        this._nativeOfflineAudioContext = nativeOfflineAudioContext;
        this._state = null;
      }
      get length() {
        if (this._nativeOfflineAudioContext.length === void 0) {
          return this._length;
        }
        return this._nativeOfflineAudioContext.length;
      }
      get state() {
        return this._state === null ? this._nativeOfflineAudioContext.state : this._state;
      }
      startRendering() {
        if (this._state === "running") {
          return Promise.reject(createInvalidStateError2());
        }
        this._state = "running";
        return startRendering2(this.destination, this._nativeOfflineAudioContext).finally(() => {
          this._state = null;
          deactivateAudioGraph(this);
        });
      }
      _waitForThePromiseToSettle(event) {
        if (this._state === null) {
          this._nativeOfflineAudioContext.dispatchEvent(event);
        } else {
          setTimeout(() => this._waitForThePromiseToSettle(event));
        }
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/monitor-connections.js
  var createMonitorConnections = (insertElementInSet2, isNativeAudioNode3) => {
    return (nativeAudioNode, whenConnected, whenDisconnected) => {
      const connections = new Set();
      nativeAudioNode.connect = ((connect2) => {
        return (destination, output = 0, input = 0) => {
          const wasDisconnected = connections.size === 0;
          if (isNativeAudioNode3(destination)) {
            connect2.call(nativeAudioNode, destination, output, input);
            insertElementInSet2(connections, [destination, output, input], (connection) => connection[0] === destination && connection[1] === output && connection[2] === input, true);
            if (wasDisconnected) {
              whenConnected();
            }
            return destination;
          }
          connect2.call(nativeAudioNode, destination, output);
          insertElementInSet2(connections, [destination, output], (connection) => connection[0] === destination && connection[1] === output, true);
          if (wasDisconnected) {
            whenConnected();
          }
          return;
        };
      })(nativeAudioNode.connect);
      nativeAudioNode.disconnect = ((disconnect2) => {
        return (destinationOrOutput, output, input) => {
          const wasConnected = connections.size > 0;
          if (destinationOrOutput === void 0) {
            disconnect2.apply(nativeAudioNode);
            connections.clear();
          } else if (typeof destinationOrOutput === "number") {
            disconnect2.call(nativeAudioNode, destinationOrOutput);
            for (const connection of connections) {
              if (connection[1] === destinationOrOutput) {
                connections.delete(connection);
              }
            }
          } else {
            if (isNativeAudioNode3(destinationOrOutput)) {
              disconnect2.call(nativeAudioNode, destinationOrOutput, output, input);
            } else {
              disconnect2.call(nativeAudioNode, destinationOrOutput, output);
            }
            for (const connection of connections) {
              if (connection[0] === destinationOrOutput && (output === void 0 || connection[1] === output) && (input === void 0 || connection[2] === input)) {
                connections.delete(connection);
              }
            }
          }
          const isDisconnected = connections.size === 0;
          if (wasConnected && isDisconnected) {
            whenDisconnected();
          }
        };
      })(nativeAudioNode.disconnect);
      return nativeAudioNode;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/assign-native-audio-node-option.js
  var assignNativeAudioNodeOption = (nativeAudioNode, options, option) => {
    const value = options[option];
    if (value !== void 0 && value !== nativeAudioNode[option]) {
      nativeAudioNode[option] = value;
    }
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/assign-native-audio-node-options.js
  var assignNativeAudioNodeOptions = (nativeAudioNode, options) => {
    assignNativeAudioNodeOption(nativeAudioNode, options, "channelCount");
    assignNativeAudioNodeOption(nativeAudioNode, options, "channelCountMode");
    assignNativeAudioNodeOption(nativeAudioNode, options, "channelInterpretation");
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/test-analyser-node-get-float-time-domain-data-method-support.js
  var testAnalyserNodeGetFloatTimeDomainDataMethodSupport = (nativeAnalyserNode) => {
    return typeof nativeAnalyserNode.getFloatTimeDomainData === "function";
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/wrap-analyser-node-get-float-time-domain-data-method.js
  var wrapAnalyserNodeGetFloatTimeDomainDataMethod = (nativeAnalyserNode) => {
    nativeAnalyserNode.getFloatTimeDomainData = (array) => {
      const byteTimeDomainData = new Uint8Array(array.length);
      nativeAnalyserNode.getByteTimeDomainData(byteTimeDomainData);
      const length = Math.max(byteTimeDomainData.length, nativeAnalyserNode.fftSize);
      for (let i = 0; i < length; i += 1) {
        array[i] = (byteTimeDomainData[i] - 128) * 78125e-7;
      }
      return array;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-analyser-node-factory.js
  var createNativeAnalyserNodeFactory = (cacheTestResult2, createIndexSizeError2) => {
    return (nativeContext, options) => {
      const nativeAnalyserNode = nativeContext.createAnalyser();
      assignNativeAudioNodeOptions(nativeAnalyserNode, options);
      if (!(options.maxDecibels > options.minDecibels)) {
        throw createIndexSizeError2();
      }
      assignNativeAudioNodeOption(nativeAnalyserNode, options, "fftSize");
      assignNativeAudioNodeOption(nativeAnalyserNode, options, "maxDecibels");
      assignNativeAudioNodeOption(nativeAnalyserNode, options, "minDecibels");
      assignNativeAudioNodeOption(nativeAnalyserNode, options, "smoothingTimeConstant");
      if (!cacheTestResult2(testAnalyserNodeGetFloatTimeDomainDataMethodSupport, () => testAnalyserNodeGetFloatTimeDomainDataMethodSupport(nativeAnalyserNode))) {
        wrapAnalyserNodeGetFloatTimeDomainDataMethod(nativeAnalyserNode);
      }
      return nativeAnalyserNode;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-audio-buffer-constructor.js
  var createNativeAudioBufferConstructor = (window3) => {
    if (window3 === null) {
      return null;
    }
    if (window3.hasOwnProperty("AudioBuffer")) {
      return window3.AudioBuffer;
    }
    return null;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/assign-native-audio-node-audio-param-value.js
  var assignNativeAudioNodeAudioParamValue = (nativeAudioNode, options, audioParam) => {
    const value = options[audioParam];
    if (value !== void 0 && value !== nativeAudioNode[audioParam].value) {
      nativeAudioNode[audioParam].value = value;
    }
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/wrap-audio-buffer-source-node-start-method-consecutive-calls.js
  var wrapAudioBufferSourceNodeStartMethodConsecutiveCalls = (nativeAudioBufferSourceNode) => {
    nativeAudioBufferSourceNode.start = ((start2) => {
      let isScheduled = false;
      return (when = 0, offset = 0, duration) => {
        if (isScheduled) {
          throw createInvalidStateError();
        }
        start2.call(nativeAudioBufferSourceNode, when, offset, duration);
        isScheduled = true;
      };
    })(nativeAudioBufferSourceNode.start);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/wrap-audio-scheduled-source-node-start-method-negative-parameters.js
  var wrapAudioScheduledSourceNodeStartMethodNegativeParameters = (nativeAudioScheduledSourceNode) => {
    nativeAudioScheduledSourceNode.start = ((start2) => {
      return (when = 0, offset = 0, duration) => {
        if (typeof duration === "number" && duration < 0 || offset < 0 || when < 0) {
          throw new RangeError("The parameters can't be negative.");
        }
        start2.call(nativeAudioScheduledSourceNode, when, offset, duration);
      };
    })(nativeAudioScheduledSourceNode.start);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/wrap-audio-scheduled-source-node-stop-method-negative-parameters.js
  var wrapAudioScheduledSourceNodeStopMethodNegativeParameters = (nativeAudioScheduledSourceNode) => {
    nativeAudioScheduledSourceNode.stop = ((stop) => {
      return (when = 0) => {
        if (when < 0) {
          throw new RangeError("The parameter can't be negative.");
        }
        stop.call(nativeAudioScheduledSourceNode, when);
      };
    })(nativeAudioScheduledSourceNode.stop);
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-audio-buffer-source-node-factory.js
  var createNativeAudioBufferSourceNodeFactory = (addSilentConnection2, cacheTestResult2, testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport2, testAudioBufferSourceNodeStartMethodOffsetClampingSupport2, testAudioBufferSourceNodeStopMethodNullifiedBufferSupport2, testAudioScheduledSourceNodeStartMethodNegativeParametersSupport2, testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport2, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2, wrapAudioBufferSourceNodeStartMethodOffsetClampling, wrapAudioBufferSourceNodeStopMethodNullifiedBuffer, wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls2) => {
    return (nativeContext, options) => {
      const nativeAudioBufferSourceNode = nativeContext.createBufferSource();
      assignNativeAudioNodeOptions(nativeAudioBufferSourceNode, options);
      assignNativeAudioNodeAudioParamValue(nativeAudioBufferSourceNode, options, "playbackRate");
      assignNativeAudioNodeOption(nativeAudioBufferSourceNode, options, "buffer");
      assignNativeAudioNodeOption(nativeAudioBufferSourceNode, options, "loop");
      assignNativeAudioNodeOption(nativeAudioBufferSourceNode, options, "loopEnd");
      assignNativeAudioNodeOption(nativeAudioBufferSourceNode, options, "loopStart");
      if (!cacheTestResult2(testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport2, () => testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport2(nativeContext))) {
        wrapAudioBufferSourceNodeStartMethodConsecutiveCalls(nativeAudioBufferSourceNode);
      }
      if (!cacheTestResult2(testAudioBufferSourceNodeStartMethodOffsetClampingSupport2, () => testAudioBufferSourceNodeStartMethodOffsetClampingSupport2(nativeContext))) {
        wrapAudioBufferSourceNodeStartMethodOffsetClampling(nativeAudioBufferSourceNode);
      }
      if (!cacheTestResult2(testAudioBufferSourceNodeStopMethodNullifiedBufferSupport2, () => testAudioBufferSourceNodeStopMethodNullifiedBufferSupport2(nativeContext))) {
        wrapAudioBufferSourceNodeStopMethodNullifiedBuffer(nativeAudioBufferSourceNode, nativeContext);
      }
      if (!cacheTestResult2(testAudioScheduledSourceNodeStartMethodNegativeParametersSupport2, () => testAudioScheduledSourceNodeStartMethodNegativeParametersSupport2(nativeContext))) {
        wrapAudioScheduledSourceNodeStartMethodNegativeParameters(nativeAudioBufferSourceNode);
      }
      if (!cacheTestResult2(testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport2, () => testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport2(nativeContext))) {
        wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls2(nativeAudioBufferSourceNode, nativeContext);
      }
      if (!cacheTestResult2(testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2, () => testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2(nativeContext))) {
        wrapAudioScheduledSourceNodeStopMethodNegativeParameters(nativeAudioBufferSourceNode);
      }
      addSilentConnection2(nativeContext, nativeAudioBufferSourceNode);
      return nativeAudioBufferSourceNode;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-audio-context-constructor.js
  var createNativeAudioContextConstructor = (window3) => {
    if (window3 === null) {
      return null;
    }
    if (window3.hasOwnProperty("AudioContext")) {
      return window3.AudioContext;
    }
    return window3.hasOwnProperty("webkitAudioContext") ? window3.webkitAudioContext : null;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-audio-destination-node.js
  var createNativeAudioDestinationNodeFactory = (createNativeGainNode2, overwriteAccessors2) => {
    return (nativeContext, channelCount, isNodeOfNativeOfflineAudioContext) => {
      const nativeAudioDestinationNode = nativeContext.destination;
      if (nativeAudioDestinationNode.channelCount !== channelCount) {
        try {
          nativeAudioDestinationNode.channelCount = channelCount;
        } catch (e) {
        }
      }
      if (isNodeOfNativeOfflineAudioContext && nativeAudioDestinationNode.channelCountMode !== "explicit") {
        nativeAudioDestinationNode.channelCountMode = "explicit";
      }
      if (nativeAudioDestinationNode.maxChannelCount === 0) {
        Object.defineProperty(nativeAudioDestinationNode, "maxChannelCount", {
          value: channelCount
        });
      }
      const gainNode = createNativeGainNode2(nativeContext, {
        channelCount,
        channelCountMode: nativeAudioDestinationNode.channelCountMode,
        channelInterpretation: nativeAudioDestinationNode.channelInterpretation,
        gain: 1
      });
      overwriteAccessors2(gainNode, "channelCount", (get) => () => get.call(gainNode), (set) => (value) => {
        set.call(gainNode, value);
        try {
          nativeAudioDestinationNode.channelCount = value;
        } catch (err) {
          if (value > nativeAudioDestinationNode.maxChannelCount) {
            throw err;
          }
        }
      });
      overwriteAccessors2(gainNode, "channelCountMode", (get) => () => get.call(gainNode), (set) => (value) => {
        set.call(gainNode, value);
        nativeAudioDestinationNode.channelCountMode = value;
      });
      overwriteAccessors2(gainNode, "channelInterpretation", (get) => () => get.call(gainNode), (set) => (value) => {
        set.call(gainNode, value);
        nativeAudioDestinationNode.channelInterpretation = value;
      });
      Object.defineProperty(gainNode, "maxChannelCount", {
        get: () => nativeAudioDestinationNode.maxChannelCount
      });
      gainNode.connect(nativeAudioDestinationNode);
      return gainNode;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-audio-worklet-node-constructor.js
  var createNativeAudioWorkletNodeConstructor = (window3) => {
    if (window3 === null) {
      return null;
    }
    return window3.hasOwnProperty("AudioWorkletNode") ? window3.AudioWorkletNode : null;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/test-clonability-of-audio-worklet-node-options.js
  var testClonabilityOfAudioWorkletNodeOptions = (audioWorkletNodeOptions) => {
    const { port1 } = new MessageChannel();
    try {
      port1.postMessage(audioWorkletNodeOptions);
    } finally {
      port1.close();
    }
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-audio-worklet-node-factory.js
  var createNativeAudioWorkletNodeFactory = (createInvalidStateError2, createNativeAudioWorkletNodeFaker2, createNativeGainNode2, createNotSupportedError2, monitorConnections2) => {
    return (nativeContext, baseLatency, nativeAudioWorkletNodeConstructor2, name, processorConstructor, options) => {
      if (nativeAudioWorkletNodeConstructor2 !== null) {
        try {
          const nativeAudioWorkletNode = new nativeAudioWorkletNodeConstructor2(nativeContext, name, options);
          const patchedEventListeners = new Map();
          let onprocessorerror = null;
          Object.defineProperties(nativeAudioWorkletNode, {
            channelCount: {
              get: () => options.channelCount,
              set: () => {
                throw createInvalidStateError2();
              }
            },
            channelCountMode: {
              get: () => "explicit",
              set: () => {
                throw createInvalidStateError2();
              }
            },
            onprocessorerror: {
              get: () => onprocessorerror,
              set: (value) => {
                if (typeof onprocessorerror === "function") {
                  nativeAudioWorkletNode.removeEventListener("processorerror", onprocessorerror);
                }
                onprocessorerror = typeof value === "function" ? value : null;
                if (typeof onprocessorerror === "function") {
                  nativeAudioWorkletNode.addEventListener("processorerror", onprocessorerror);
                }
              }
            }
          });
          nativeAudioWorkletNode.addEventListener = ((addEventListener) => {
            return (...args) => {
              if (args[0] === "processorerror") {
                const unpatchedEventListener = typeof args[1] === "function" ? args[1] : typeof args[1] === "object" && args[1] !== null && typeof args[1].handleEvent === "function" ? args[1].handleEvent : null;
                if (unpatchedEventListener !== null) {
                  const patchedEventListener = patchedEventListeners.get(args[1]);
                  if (patchedEventListener !== void 0) {
                    args[1] = patchedEventListener;
                  } else {
                    args[1] = (event) => {
                      if (event.type === "error") {
                        Object.defineProperties(event, {
                          type: { value: "processorerror" }
                        });
                        unpatchedEventListener(event);
                      } else {
                        unpatchedEventListener(new ErrorEvent(args[0], __spreadValues({}, event)));
                      }
                    };
                    patchedEventListeners.set(unpatchedEventListener, args[1]);
                  }
                }
              }
              addEventListener.call(nativeAudioWorkletNode, "error", args[1], args[2]);
              return addEventListener.call(nativeAudioWorkletNode, ...args);
            };
          })(nativeAudioWorkletNode.addEventListener);
          nativeAudioWorkletNode.removeEventListener = ((removeEventListener) => {
            return (...args) => {
              if (args[0] === "processorerror") {
                const patchedEventListener = patchedEventListeners.get(args[1]);
                if (patchedEventListener !== void 0) {
                  patchedEventListeners.delete(args[1]);
                  args[1] = patchedEventListener;
                }
              }
              removeEventListener.call(nativeAudioWorkletNode, "error", args[1], args[2]);
              return removeEventListener.call(nativeAudioWorkletNode, args[0], args[1], args[2]);
            };
          })(nativeAudioWorkletNode.removeEventListener);
          if (options.numberOfOutputs !== 0) {
            const nativeGainNode = createNativeGainNode2(nativeContext, {
              channelCount: 1,
              channelCountMode: "explicit",
              channelInterpretation: "discrete",
              gain: 0
            });
            nativeAudioWorkletNode.connect(nativeGainNode).connect(nativeContext.destination);
            const whenConnected = () => nativeGainNode.disconnect();
            const whenDisconnected = () => nativeGainNode.connect(nativeContext.destination);
            return monitorConnections2(nativeAudioWorkletNode, whenConnected, whenDisconnected);
          }
          return nativeAudioWorkletNode;
        } catch (err) {
          if (err.code === 11) {
            throw createNotSupportedError2();
          }
          throw err;
        }
      }
      if (processorConstructor === void 0) {
        throw createNotSupportedError2();
      }
      testClonabilityOfAudioWorkletNodeOptions(options);
      return createNativeAudioWorkletNodeFaker2(nativeContext, baseLatency, processorConstructor, options);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/compute-buffer-size.js
  var computeBufferSize = (baseLatency, sampleRate) => {
    if (baseLatency === null) {
      return 512;
    }
    return Math.max(512, Math.min(16384, Math.pow(2, Math.round(Math.log2(baseLatency * sampleRate)))));
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/clone-audio-worklet-node-options.js
  var cloneAudioWorkletNodeOptions = (audioWorkletNodeOptions) => {
    return new Promise((resolve, reject) => {
      const { port1, port2 } = new MessageChannel();
      port1.onmessage = ({ data }) => {
        port1.close();
        port2.close();
        resolve(data);
      };
      port1.onmessageerror = ({ data }) => {
        port1.close();
        port2.close();
        reject(data);
      };
      port2.postMessage(audioWorkletNodeOptions);
    });
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/create-audio-worklet-processor-promise.js
  var createAudioWorkletProcessorPromise = (processorConstructor, audioWorkletNodeOptions) => __async(void 0, null, function* () {
    const clonedAudioWorkletNodeOptions = yield cloneAudioWorkletNodeOptions(audioWorkletNodeOptions);
    return new processorConstructor(clonedAudioWorkletNodeOptions);
  });

  // node_modules/standardized-audio-context/build/es2019/helpers/create-audio-worklet-processor.js
  var createAudioWorkletProcessor = (nativeContext, nativeAudioWorkletNode, processorConstructor, audioWorkletNodeOptions) => {
    let nodeToProcessorMap = NODE_TO_PROCESSOR_MAPS.get(nativeContext);
    if (nodeToProcessorMap === void 0) {
      nodeToProcessorMap = new WeakMap();
      NODE_TO_PROCESSOR_MAPS.set(nativeContext, nodeToProcessorMap);
    }
    const audioWorkletProcessorPromise = createAudioWorkletProcessorPromise(processorConstructor, audioWorkletNodeOptions);
    nodeToProcessorMap.set(nativeAudioWorkletNode, audioWorkletProcessorPromise);
    return audioWorkletProcessorPromise;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-audio-worklet-node-faker-factory.js
  var createNativeAudioWorkletNodeFakerFactory = (connectMultipleOutputs2, createIndexSizeError2, createInvalidStateError2, createNativeChannelMergerNode2, createNativeChannelSplitterNode2, createNativeConstantSourceNode2, createNativeGainNode2, createNativeScriptProcessorNode2, createNotSupportedError2, disconnectMultipleOutputs2, exposeCurrentFrameAndCurrentTime2, getActiveAudioWorkletNodeInputs2, monitorConnections2) => {
    return (nativeContext, baseLatency, processorConstructor, options) => {
      if (options.numberOfInputs === 0 && options.numberOfOutputs === 0) {
        throw createNotSupportedError2();
      }
      const outputChannelCount = Array.isArray(options.outputChannelCount) ? options.outputChannelCount : Array.from(options.outputChannelCount);
      if (outputChannelCount.some((channelCount) => channelCount < 1)) {
        throw createNotSupportedError2();
      }
      if (outputChannelCount.length !== options.numberOfOutputs) {
        throw createIndexSizeError2();
      }
      if (options.channelCountMode !== "explicit") {
        throw createNotSupportedError2();
      }
      const numberOfInputChannels = options.channelCount * options.numberOfInputs;
      const numberOfOutputChannels = outputChannelCount.reduce((sum, value) => sum + value, 0);
      const numberOfParameters = processorConstructor.parameterDescriptors === void 0 ? 0 : processorConstructor.parameterDescriptors.length;
      if (numberOfInputChannels + numberOfParameters > 6 || numberOfOutputChannels > 6) {
        throw createNotSupportedError2();
      }
      const messageChannel = new MessageChannel();
      const gainNodes = [];
      const inputChannelSplitterNodes = [];
      for (let i = 0; i < options.numberOfInputs; i += 1) {
        gainNodes.push(createNativeGainNode2(nativeContext, {
          channelCount: options.channelCount,
          channelCountMode: options.channelCountMode,
          channelInterpretation: options.channelInterpretation,
          gain: 1
        }));
        inputChannelSplitterNodes.push(createNativeChannelSplitterNode2(nativeContext, {
          channelCount: options.channelCount,
          channelCountMode: "explicit",
          channelInterpretation: "discrete",
          numberOfOutputs: options.channelCount
        }));
      }
      const constantSourceNodes = [];
      if (processorConstructor.parameterDescriptors !== void 0) {
        for (const { defaultValue, maxValue, minValue, name } of processorConstructor.parameterDescriptors) {
          const constantSourceNode = createNativeConstantSourceNode2(nativeContext, {
            channelCount: 1,
            channelCountMode: "explicit",
            channelInterpretation: "discrete",
            offset: options.parameterData[name] !== void 0 ? options.parameterData[name] : defaultValue === void 0 ? 0 : defaultValue
          });
          Object.defineProperties(constantSourceNode.offset, {
            defaultValue: {
              get: () => defaultValue === void 0 ? 0 : defaultValue
            },
            maxValue: {
              get: () => maxValue === void 0 ? MOST_POSITIVE_SINGLE_FLOAT : maxValue
            },
            minValue: {
              get: () => minValue === void 0 ? MOST_NEGATIVE_SINGLE_FLOAT : minValue
            }
          });
          constantSourceNodes.push(constantSourceNode);
        }
      }
      const inputChannelMergerNode = createNativeChannelMergerNode2(nativeContext, {
        channelCount: 1,
        channelCountMode: "explicit",
        channelInterpretation: "speakers",
        numberOfInputs: Math.max(1, numberOfInputChannels + numberOfParameters)
      });
      const bufferSize = computeBufferSize(baseLatency, nativeContext.sampleRate);
      const scriptProcessorNode = createNativeScriptProcessorNode2(nativeContext, bufferSize, numberOfInputChannels + numberOfParameters, Math.max(1, numberOfOutputChannels));
      const outputChannelSplitterNode = createNativeChannelSplitterNode2(nativeContext, {
        channelCount: Math.max(1, numberOfOutputChannels),
        channelCountMode: "explicit",
        channelInterpretation: "discrete",
        numberOfOutputs: Math.max(1, numberOfOutputChannels)
      });
      const outputChannelMergerNodes = [];
      for (let i = 0; i < options.numberOfOutputs; i += 1) {
        outputChannelMergerNodes.push(createNativeChannelMergerNode2(nativeContext, {
          channelCount: 1,
          channelCountMode: "explicit",
          channelInterpretation: "speakers",
          numberOfInputs: outputChannelCount[i]
        }));
      }
      for (let i = 0; i < options.numberOfInputs; i += 1) {
        gainNodes[i].connect(inputChannelSplitterNodes[i]);
        for (let j = 0; j < options.channelCount; j += 1) {
          inputChannelSplitterNodes[i].connect(inputChannelMergerNode, j, i * options.channelCount + j);
        }
      }
      const parameterMap = new ReadOnlyMap(processorConstructor.parameterDescriptors === void 0 ? [] : processorConstructor.parameterDescriptors.map(({ name }, index) => {
        const constantSourceNode = constantSourceNodes[index];
        constantSourceNode.connect(inputChannelMergerNode, 0, numberOfInputChannels + index);
        constantSourceNode.start(0);
        return [name, constantSourceNode.offset];
      }));
      inputChannelMergerNode.connect(scriptProcessorNode);
      let channelInterpretation = options.channelInterpretation;
      let onprocessorerror = null;
      const outputAudioNodes = options.numberOfOutputs === 0 ? [scriptProcessorNode] : outputChannelMergerNodes;
      const nativeAudioWorkletNodeFaker = {
        get bufferSize() {
          return bufferSize;
        },
        get channelCount() {
          return options.channelCount;
        },
        set channelCount(_) {
          throw createInvalidStateError2();
        },
        get channelCountMode() {
          return options.channelCountMode;
        },
        set channelCountMode(_) {
          throw createInvalidStateError2();
        },
        get channelInterpretation() {
          return channelInterpretation;
        },
        set channelInterpretation(value) {
          for (const gainNode of gainNodes) {
            gainNode.channelInterpretation = value;
          }
          channelInterpretation = value;
        },
        get context() {
          return scriptProcessorNode.context;
        },
        get inputs() {
          return gainNodes;
        },
        get numberOfInputs() {
          return options.numberOfInputs;
        },
        get numberOfOutputs() {
          return options.numberOfOutputs;
        },
        get onprocessorerror() {
          return onprocessorerror;
        },
        set onprocessorerror(value) {
          if (typeof onprocessorerror === "function") {
            nativeAudioWorkletNodeFaker.removeEventListener("processorerror", onprocessorerror);
          }
          onprocessorerror = typeof value === "function" ? value : null;
          if (typeof onprocessorerror === "function") {
            nativeAudioWorkletNodeFaker.addEventListener("processorerror", onprocessorerror);
          }
        },
        get parameters() {
          return parameterMap;
        },
        get port() {
          return messageChannel.port2;
        },
        addEventListener(...args) {
          return scriptProcessorNode.addEventListener(args[0], args[1], args[2]);
        },
        connect: connectMultipleOutputs2.bind(null, outputAudioNodes),
        disconnect: disconnectMultipleOutputs2.bind(null, outputAudioNodes),
        dispatchEvent(...args) {
          return scriptProcessorNode.dispatchEvent(args[0]);
        },
        removeEventListener(...args) {
          return scriptProcessorNode.removeEventListener(args[0], args[1], args[2]);
        }
      };
      const patchedEventListeners = new Map();
      messageChannel.port1.addEventListener = ((addEventListener) => {
        return (...args) => {
          if (args[0] === "message") {
            const unpatchedEventListener = typeof args[1] === "function" ? args[1] : typeof args[1] === "object" && args[1] !== null && typeof args[1].handleEvent === "function" ? args[1].handleEvent : null;
            if (unpatchedEventListener !== null) {
              const patchedEventListener = patchedEventListeners.get(args[1]);
              if (patchedEventListener !== void 0) {
                args[1] = patchedEventListener;
              } else {
                args[1] = (event) => {
                  exposeCurrentFrameAndCurrentTime2(nativeContext.currentTime, nativeContext.sampleRate, () => unpatchedEventListener(event));
                };
                patchedEventListeners.set(unpatchedEventListener, args[1]);
              }
            }
          }
          return addEventListener.call(messageChannel.port1, args[0], args[1], args[2]);
        };
      })(messageChannel.port1.addEventListener);
      messageChannel.port1.removeEventListener = ((removeEventListener) => {
        return (...args) => {
          if (args[0] === "message") {
            const patchedEventListener = patchedEventListeners.get(args[1]);
            if (patchedEventListener !== void 0) {
              patchedEventListeners.delete(args[1]);
              args[1] = patchedEventListener;
            }
          }
          return removeEventListener.call(messageChannel.port1, args[0], args[1], args[2]);
        };
      })(messageChannel.port1.removeEventListener);
      let onmessage = null;
      Object.defineProperty(messageChannel.port1, "onmessage", {
        get: () => onmessage,
        set: (value) => {
          if (typeof onmessage === "function") {
            messageChannel.port1.removeEventListener("message", onmessage);
          }
          onmessage = typeof value === "function" ? value : null;
          if (typeof onmessage === "function") {
            messageChannel.port1.addEventListener("message", onmessage);
            messageChannel.port1.start();
          }
        }
      });
      processorConstructor.prototype.port = messageChannel.port1;
      let audioWorkletProcessor = null;
      const audioWorkletProcessorPromise = createAudioWorkletProcessor(nativeContext, nativeAudioWorkletNodeFaker, processorConstructor, options);
      audioWorkletProcessorPromise.then((dWrkltPrcssr) => audioWorkletProcessor = dWrkltPrcssr);
      const inputs = createNestedArrays(options.numberOfInputs, options.channelCount);
      const outputs = createNestedArrays(options.numberOfOutputs, outputChannelCount);
      const parameters = processorConstructor.parameterDescriptors === void 0 ? [] : processorConstructor.parameterDescriptors.reduce((prmtrs, { name }) => __spreadProps(__spreadValues({}, prmtrs), { [name]: new Float32Array(128) }), {});
      let isActive = true;
      const disconnectOutputsGraph = () => {
        if (options.numberOfOutputs > 0) {
          scriptProcessorNode.disconnect(outputChannelSplitterNode);
        }
        for (let i = 0, outputChannelSplitterNodeOutput = 0; i < options.numberOfOutputs; i += 1) {
          const outputChannelMergerNode = outputChannelMergerNodes[i];
          for (let j = 0; j < outputChannelCount[i]; j += 1) {
            outputChannelSplitterNode.disconnect(outputChannelMergerNode, outputChannelSplitterNodeOutput + j, j);
          }
          outputChannelSplitterNodeOutput += outputChannelCount[i];
        }
      };
      const activeInputIndexes = new Map();
      scriptProcessorNode.onaudioprocess = ({ inputBuffer, outputBuffer }) => {
        if (audioWorkletProcessor !== null) {
          const activeInputs = getActiveAudioWorkletNodeInputs2(nativeAudioWorkletNodeFaker);
          for (let i = 0; i < bufferSize; i += 128) {
            for (let j = 0; j < options.numberOfInputs; j += 1) {
              for (let k = 0; k < options.channelCount; k += 1) {
                copyFromChannel(inputBuffer, inputs[j], k, k, i);
              }
            }
            if (processorConstructor.parameterDescriptors !== void 0) {
              processorConstructor.parameterDescriptors.forEach(({ name }, index) => {
                copyFromChannel(inputBuffer, parameters, name, numberOfInputChannels + index, i);
              });
            }
            for (let j = 0; j < options.numberOfInputs; j += 1) {
              for (let k = 0; k < outputChannelCount[j]; k += 1) {
                if (outputs[j][k].byteLength === 0) {
                  outputs[j][k] = new Float32Array(128);
                }
              }
            }
            try {
              const potentiallyEmptyInputs = inputs.map((input, index) => {
                const activeInput = activeInputs[index];
                if (activeInput.size > 0) {
                  activeInputIndexes.set(index, bufferSize / 128);
                  return input;
                }
                const count = activeInputIndexes.get(index);
                if (count === void 0) {
                  return [];
                }
                if (input.every((channelData) => channelData.every((sample) => sample === 0))) {
                  if (count === 1) {
                    activeInputIndexes.delete(index);
                  } else {
                    activeInputIndexes.set(index, count - 1);
                  }
                }
                return input;
              });
              const activeSourceFlag = exposeCurrentFrameAndCurrentTime2(nativeContext.currentTime + i / nativeContext.sampleRate, nativeContext.sampleRate, () => audioWorkletProcessor.process(potentiallyEmptyInputs, outputs, parameters));
              isActive = activeSourceFlag;
              for (let j = 0, outputChannelSplitterNodeOutput = 0; j < options.numberOfOutputs; j += 1) {
                for (let k = 0; k < outputChannelCount[j]; k += 1) {
                  copyToChannel(outputBuffer, outputs[j], k, outputChannelSplitterNodeOutput + k, i);
                }
                outputChannelSplitterNodeOutput += outputChannelCount[j];
              }
            } catch (error) {
              isActive = false;
              nativeAudioWorkletNodeFaker.dispatchEvent(new ErrorEvent("processorerror", {
                colno: error.colno,
                filename: error.filename,
                lineno: error.lineno,
                message: error.message
              }));
            }
            if (!isActive) {
              for (let j = 0; j < options.numberOfInputs; j += 1) {
                gainNodes[j].disconnect(inputChannelSplitterNodes[j]);
                for (let k = 0; k < options.channelCount; k += 1) {
                  inputChannelSplitterNodes[i].disconnect(inputChannelMergerNode, k, j * options.channelCount + k);
                }
              }
              if (processorConstructor.parameterDescriptors !== void 0) {
                const length = processorConstructor.parameterDescriptors.length;
                for (let j = 0; j < length; j += 1) {
                  const constantSourceNode = constantSourceNodes[j];
                  constantSourceNode.disconnect(inputChannelMergerNode, 0, numberOfInputChannels + j);
                  constantSourceNode.stop();
                }
              }
              inputChannelMergerNode.disconnect(scriptProcessorNode);
              scriptProcessorNode.onaudioprocess = null;
              if (isConnected) {
                disconnectOutputsGraph();
              } else {
                disconnectFakeGraph();
              }
              break;
            }
          }
        }
      };
      let isConnected = false;
      const nativeGainNode = createNativeGainNode2(nativeContext, {
        channelCount: 1,
        channelCountMode: "explicit",
        channelInterpretation: "discrete",
        gain: 0
      });
      const connectFakeGraph = () => scriptProcessorNode.connect(nativeGainNode).connect(nativeContext.destination);
      const disconnectFakeGraph = () => {
        scriptProcessorNode.disconnect(nativeGainNode);
        nativeGainNode.disconnect();
      };
      const whenConnected = () => {
        if (isActive) {
          disconnectFakeGraph();
          if (options.numberOfOutputs > 0) {
            scriptProcessorNode.connect(outputChannelSplitterNode);
          }
          for (let i = 0, outputChannelSplitterNodeOutput = 0; i < options.numberOfOutputs; i += 1) {
            const outputChannelMergerNode = outputChannelMergerNodes[i];
            for (let j = 0; j < outputChannelCount[i]; j += 1) {
              outputChannelSplitterNode.connect(outputChannelMergerNode, outputChannelSplitterNodeOutput + j, j);
            }
            outputChannelSplitterNodeOutput += outputChannelCount[i];
          }
        }
        isConnected = true;
      };
      const whenDisconnected = () => {
        if (isActive) {
          connectFakeGraph();
          disconnectOutputsGraph();
        }
        isConnected = false;
      };
      connectFakeGraph();
      return monitorConnections2(nativeAudioWorkletNodeFaker, whenConnected, whenDisconnected);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-biquad-filter-node.js
  var createNativeBiquadFilterNode = (nativeContext, options) => {
    const nativeBiquadFilterNode = nativeContext.createBiquadFilter();
    assignNativeAudioNodeOptions(nativeBiquadFilterNode, options);
    assignNativeAudioNodeAudioParamValue(nativeBiquadFilterNode, options, "Q");
    assignNativeAudioNodeAudioParamValue(nativeBiquadFilterNode, options, "detune");
    assignNativeAudioNodeAudioParamValue(nativeBiquadFilterNode, options, "frequency");
    assignNativeAudioNodeAudioParamValue(nativeBiquadFilterNode, options, "gain");
    assignNativeAudioNodeOption(nativeBiquadFilterNode, options, "type");
    return nativeBiquadFilterNode;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-channel-merger-node-factory.js
  var createNativeChannelMergerNodeFactory = (nativeAudioContextConstructor2, wrapChannelMergerNode2) => {
    return (nativeContext, options) => {
      const nativeChannelMergerNode = nativeContext.createChannelMerger(options.numberOfInputs);
      if (nativeAudioContextConstructor2 !== null && nativeAudioContextConstructor2.name === "webkitAudioContext") {
        wrapChannelMergerNode2(nativeContext, nativeChannelMergerNode);
      }
      assignNativeAudioNodeOptions(nativeChannelMergerNode, options);
      return nativeChannelMergerNode;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/wrap-channel-splitter-node.js
  var wrapChannelSplitterNode = (channelSplitterNode) => {
    const channelCount = channelSplitterNode.numberOfOutputs;
    Object.defineProperty(channelSplitterNode, "channelCount", {
      get: () => channelCount,
      set: (value) => {
        if (value !== channelCount) {
          throw createInvalidStateError();
        }
      }
    });
    Object.defineProperty(channelSplitterNode, "channelCountMode", {
      get: () => "explicit",
      set: (value) => {
        if (value !== "explicit") {
          throw createInvalidStateError();
        }
      }
    });
    Object.defineProperty(channelSplitterNode, "channelInterpretation", {
      get: () => "discrete",
      set: (value) => {
        if (value !== "discrete") {
          throw createInvalidStateError();
        }
      }
    });
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-channel-splitter-node.js
  var createNativeChannelSplitterNode = (nativeContext, options) => {
    const nativeChannelSplitterNode = nativeContext.createChannelSplitter(options.numberOfOutputs);
    assignNativeAudioNodeOptions(nativeChannelSplitterNode, options);
    wrapChannelSplitterNode(nativeChannelSplitterNode);
    return nativeChannelSplitterNode;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-constant-source-node-factory.js
  var createNativeConstantSourceNodeFactory = (addSilentConnection2, cacheTestResult2, createNativeConstantSourceNodeFaker2, testAudioScheduledSourceNodeStartMethodNegativeParametersSupport2, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2) => {
    return (nativeContext, options) => {
      if (nativeContext.createConstantSource === void 0) {
        return createNativeConstantSourceNodeFaker2(nativeContext, options);
      }
      const nativeConstantSourceNode = nativeContext.createConstantSource();
      assignNativeAudioNodeOptions(nativeConstantSourceNode, options);
      assignNativeAudioNodeAudioParamValue(nativeConstantSourceNode, options, "offset");
      if (!cacheTestResult2(testAudioScheduledSourceNodeStartMethodNegativeParametersSupport2, () => testAudioScheduledSourceNodeStartMethodNegativeParametersSupport2(nativeContext))) {
        wrapAudioScheduledSourceNodeStartMethodNegativeParameters(nativeConstantSourceNode);
      }
      if (!cacheTestResult2(testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2, () => testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2(nativeContext))) {
        wrapAudioScheduledSourceNodeStopMethodNegativeParameters(nativeConstantSourceNode);
      }
      addSilentConnection2(nativeContext, nativeConstantSourceNode);
      return nativeConstantSourceNode;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/intercept-connections.js
  var interceptConnections = (original, interceptor) => {
    original.connect = interceptor.connect.bind(interceptor);
    original.disconnect = interceptor.disconnect.bind(interceptor);
    return original;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-constant-source-node-faker-factory.js
  var createNativeConstantSourceNodeFakerFactory = (addSilentConnection2, createNativeAudioBufferSourceNode2, createNativeGainNode2, monitorConnections2) => {
    return (nativeContext, _a3) => {
      var _b = _a3, { offset } = _b, audioNodeOptions = __objRest(_b, ["offset"]);
      const audioBuffer = nativeContext.createBuffer(1, 2, 44100);
      const audioBufferSourceNode = createNativeAudioBufferSourceNode2(nativeContext, {
        buffer: null,
        channelCount: 2,
        channelCountMode: "max",
        channelInterpretation: "speakers",
        loop: false,
        loopEnd: 0,
        loopStart: 0,
        playbackRate: 1
      });
      const gainNode = createNativeGainNode2(nativeContext, __spreadProps(__spreadValues({}, audioNodeOptions), { gain: offset }));
      const channelData = audioBuffer.getChannelData(0);
      channelData[0] = 1;
      channelData[1] = 1;
      audioBufferSourceNode.buffer = audioBuffer;
      audioBufferSourceNode.loop = true;
      const nativeConstantSourceNodeFaker = {
        get bufferSize() {
          return void 0;
        },
        get channelCount() {
          return gainNode.channelCount;
        },
        set channelCount(value) {
          gainNode.channelCount = value;
        },
        get channelCountMode() {
          return gainNode.channelCountMode;
        },
        set channelCountMode(value) {
          gainNode.channelCountMode = value;
        },
        get channelInterpretation() {
          return gainNode.channelInterpretation;
        },
        set channelInterpretation(value) {
          gainNode.channelInterpretation = value;
        },
        get context() {
          return gainNode.context;
        },
        get inputs() {
          return [];
        },
        get numberOfInputs() {
          return audioBufferSourceNode.numberOfInputs;
        },
        get numberOfOutputs() {
          return gainNode.numberOfOutputs;
        },
        get offset() {
          return gainNode.gain;
        },
        get onended() {
          return audioBufferSourceNode.onended;
        },
        set onended(value) {
          audioBufferSourceNode.onended = value;
        },
        addEventListener(...args) {
          return audioBufferSourceNode.addEventListener(args[0], args[1], args[2]);
        },
        dispatchEvent(...args) {
          return audioBufferSourceNode.dispatchEvent(args[0]);
        },
        removeEventListener(...args) {
          return audioBufferSourceNode.removeEventListener(args[0], args[1], args[2]);
        },
        start(when = 0) {
          audioBufferSourceNode.start.call(audioBufferSourceNode, when);
        },
        stop(when = 0) {
          audioBufferSourceNode.stop.call(audioBufferSourceNode, when);
        }
      };
      const whenConnected = () => audioBufferSourceNode.connect(gainNode);
      const whenDisconnected = () => audioBufferSourceNode.disconnect(gainNode);
      addSilentConnection2(nativeContext, audioBufferSourceNode);
      return monitorConnections2(interceptConnections(nativeConstantSourceNodeFaker, gainNode), whenConnected, whenDisconnected);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-convolver-node-factory.js
  var createNativeConvolverNodeFactory = (createNotSupportedError2, overwriteAccessors2) => {
    return (nativeContext, options) => {
      const nativeConvolverNode = nativeContext.createConvolver();
      assignNativeAudioNodeOptions(nativeConvolverNode, options);
      if (options.disableNormalization === nativeConvolverNode.normalize) {
        nativeConvolverNode.normalize = !options.disableNormalization;
      }
      assignNativeAudioNodeOption(nativeConvolverNode, options, "buffer");
      if (options.channelCount > 2) {
        throw createNotSupportedError2();
      }
      overwriteAccessors2(nativeConvolverNode, "channelCount", (get) => () => get.call(nativeConvolverNode), (set) => (value) => {
        if (value > 2) {
          throw createNotSupportedError2();
        }
        return set.call(nativeConvolverNode, value);
      });
      if (options.channelCountMode === "max") {
        throw createNotSupportedError2();
      }
      overwriteAccessors2(nativeConvolverNode, "channelCountMode", (get) => () => get.call(nativeConvolverNode), (set) => (value) => {
        if (value === "max") {
          throw createNotSupportedError2();
        }
        return set.call(nativeConvolverNode, value);
      });
      return nativeConvolverNode;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-delay-node.js
  var createNativeDelayNode = (nativeContext, options) => {
    const nativeDelayNode = nativeContext.createDelay(options.maxDelayTime);
    assignNativeAudioNodeOptions(nativeDelayNode, options);
    assignNativeAudioNodeAudioParamValue(nativeDelayNode, options, "delayTime");
    return nativeDelayNode;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-dynamics-compressor-node-factory.js
  var createNativeDynamicsCompressorNodeFactory = (createNotSupportedError2) => {
    return (nativeContext, options) => {
      const nativeDynamicsCompressorNode = nativeContext.createDynamicsCompressor();
      assignNativeAudioNodeOptions(nativeDynamicsCompressorNode, options);
      if (options.channelCount > 2) {
        throw createNotSupportedError2();
      }
      if (options.channelCountMode === "max") {
        throw createNotSupportedError2();
      }
      assignNativeAudioNodeAudioParamValue(nativeDynamicsCompressorNode, options, "attack");
      assignNativeAudioNodeAudioParamValue(nativeDynamicsCompressorNode, options, "knee");
      assignNativeAudioNodeAudioParamValue(nativeDynamicsCompressorNode, options, "ratio");
      assignNativeAudioNodeAudioParamValue(nativeDynamicsCompressorNode, options, "release");
      assignNativeAudioNodeAudioParamValue(nativeDynamicsCompressorNode, options, "threshold");
      return nativeDynamicsCompressorNode;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-gain-node.js
  var createNativeGainNode = (nativeContext, options) => {
    const nativeGainNode = nativeContext.createGain();
    assignNativeAudioNodeOptions(nativeGainNode, options);
    assignNativeAudioNodeAudioParamValue(nativeGainNode, options, "gain");
    return nativeGainNode;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-iir-filter-node-factory.js
  var createNativeIIRFilterNodeFactory = (createNativeIIRFilterNodeFaker2) => {
    return (nativeContext, baseLatency, options) => {
      if (nativeContext.createIIRFilter === void 0) {
        return createNativeIIRFilterNodeFaker2(nativeContext, baseLatency, options);
      }
      const nativeIIRFilterNode = nativeContext.createIIRFilter(options.feedforward, options.feedback);
      assignNativeAudioNodeOptions(nativeIIRFilterNode, options);
      return nativeIIRFilterNode;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-iir-filter-node-faker-factory.js
  function divide(a, b) {
    const denominator = b[0] * b[0] + b[1] * b[1];
    return [(a[0] * b[0] + a[1] * b[1]) / denominator, (a[1] * b[0] - a[0] * b[1]) / denominator];
  }
  function multiply(a, b) {
    return [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
  }
  function evaluatePolynomial(coefficient, z) {
    let result = [0, 0];
    for (let i = coefficient.length - 1; i >= 0; i -= 1) {
      result = multiply(result, z);
      result[0] += coefficient[i];
    }
    return result;
  }
  var createNativeIIRFilterNodeFakerFactory = (createInvalidAccessError2, createInvalidStateError2, createNativeScriptProcessorNode2, createNotSupportedError2) => {
    return (nativeContext, baseLatency, { channelCount, channelCountMode, channelInterpretation, feedback, feedforward }) => {
      const bufferSize = computeBufferSize(baseLatency, nativeContext.sampleRate);
      const convertedFeedback = feedback instanceof Float64Array ? feedback : new Float64Array(feedback);
      const convertedFeedforward = feedforward instanceof Float64Array ? feedforward : new Float64Array(feedforward);
      const feedbackLength = convertedFeedback.length;
      const feedforwardLength = convertedFeedforward.length;
      const minLength = Math.min(feedbackLength, feedforwardLength);
      if (feedbackLength === 0 || feedbackLength > 20) {
        throw createNotSupportedError2();
      }
      if (convertedFeedback[0] === 0) {
        throw createInvalidStateError2();
      }
      if (feedforwardLength === 0 || feedforwardLength > 20) {
        throw createNotSupportedError2();
      }
      if (convertedFeedforward[0] === 0) {
        throw createInvalidStateError2();
      }
      if (convertedFeedback[0] !== 1) {
        for (let i = 0; i < feedforwardLength; i += 1) {
          convertedFeedforward[i] /= convertedFeedback[0];
        }
        for (let i = 1; i < feedbackLength; i += 1) {
          convertedFeedback[i] /= convertedFeedback[0];
        }
      }
      const scriptProcessorNode = createNativeScriptProcessorNode2(nativeContext, bufferSize, channelCount, channelCount);
      scriptProcessorNode.channelCount = channelCount;
      scriptProcessorNode.channelCountMode = channelCountMode;
      scriptProcessorNode.channelInterpretation = channelInterpretation;
      const bufferLength = 32;
      const bufferIndexes = [];
      const xBuffers = [];
      const yBuffers = [];
      for (let i = 0; i < channelCount; i += 1) {
        bufferIndexes.push(0);
        const xBuffer = new Float32Array(bufferLength);
        const yBuffer = new Float32Array(bufferLength);
        xBuffer.fill(0);
        yBuffer.fill(0);
        xBuffers.push(xBuffer);
        yBuffers.push(yBuffer);
      }
      scriptProcessorNode.onaudioprocess = (event) => {
        const inputBuffer = event.inputBuffer;
        const outputBuffer = event.outputBuffer;
        const numberOfChannels = inputBuffer.numberOfChannels;
        for (let i = 0; i < numberOfChannels; i += 1) {
          const input = inputBuffer.getChannelData(i);
          const output = outputBuffer.getChannelData(i);
          bufferIndexes[i] = filterBuffer(convertedFeedback, feedbackLength, convertedFeedforward, feedforwardLength, minLength, xBuffers[i], yBuffers[i], bufferIndexes[i], bufferLength, input, output);
        }
      };
      const nyquist = nativeContext.sampleRate / 2;
      const nativeIIRFilterNodeFaker = {
        get bufferSize() {
          return bufferSize;
        },
        get channelCount() {
          return scriptProcessorNode.channelCount;
        },
        set channelCount(value) {
          scriptProcessorNode.channelCount = value;
        },
        get channelCountMode() {
          return scriptProcessorNode.channelCountMode;
        },
        set channelCountMode(value) {
          scriptProcessorNode.channelCountMode = value;
        },
        get channelInterpretation() {
          return scriptProcessorNode.channelInterpretation;
        },
        set channelInterpretation(value) {
          scriptProcessorNode.channelInterpretation = value;
        },
        get context() {
          return scriptProcessorNode.context;
        },
        get inputs() {
          return [scriptProcessorNode];
        },
        get numberOfInputs() {
          return scriptProcessorNode.numberOfInputs;
        },
        get numberOfOutputs() {
          return scriptProcessorNode.numberOfOutputs;
        },
        addEventListener(...args) {
          return scriptProcessorNode.addEventListener(args[0], args[1], args[2]);
        },
        dispatchEvent(...args) {
          return scriptProcessorNode.dispatchEvent(args[0]);
        },
        getFrequencyResponse(frequencyHz, magResponse, phaseResponse) {
          if (frequencyHz.length !== magResponse.length || magResponse.length !== phaseResponse.length) {
            throw createInvalidAccessError2();
          }
          const length = frequencyHz.length;
          for (let i = 0; i < length; i += 1) {
            const omega = -Math.PI * (frequencyHz[i] / nyquist);
            const z = [Math.cos(omega), Math.sin(omega)];
            const numerator = evaluatePolynomial(convertedFeedforward, z);
            const denominator = evaluatePolynomial(convertedFeedback, z);
            const response = divide(numerator, denominator);
            magResponse[i] = Math.sqrt(response[0] * response[0] + response[1] * response[1]);
            phaseResponse[i] = Math.atan2(response[1], response[0]);
          }
        },
        removeEventListener(...args) {
          return scriptProcessorNode.removeEventListener(args[0], args[1], args[2]);
        }
      };
      return interceptConnections(nativeIIRFilterNodeFaker, scriptProcessorNode);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-media-element-audio-source-node.js
  var createNativeMediaElementAudioSourceNode = (nativeAudioContext, options) => {
    return nativeAudioContext.createMediaElementSource(options.mediaElement);
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-media-stream-audio-destination-node.js
  var createNativeMediaStreamAudioDestinationNode = (nativeAudioContext, options) => {
    const nativeMediaStreamAudioDestinationNode = nativeAudioContext.createMediaStreamDestination();
    assignNativeAudioNodeOptions(nativeMediaStreamAudioDestinationNode, options);
    if (nativeMediaStreamAudioDestinationNode.numberOfOutputs === 1) {
      Object.defineProperty(nativeMediaStreamAudioDestinationNode, "numberOfOutputs", { get: () => 0 });
    }
    return nativeMediaStreamAudioDestinationNode;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-media-stream-audio-source-node.js
  var createNativeMediaStreamAudioSourceNode = (nativeAudioContext, { mediaStream }) => {
    const audioStreamTracks = mediaStream.getAudioTracks();
    audioStreamTracks.sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
    const filteredAudioStreamTracks = audioStreamTracks.slice(0, 1);
    const nativeMediaStreamAudioSourceNode = nativeAudioContext.createMediaStreamSource(new MediaStream(filteredAudioStreamTracks));
    Object.defineProperty(nativeMediaStreamAudioSourceNode, "mediaStream", { value: mediaStream });
    return nativeMediaStreamAudioSourceNode;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-media-stream-track-audio-source-node-factory.js
  var createNativeMediaStreamTrackAudioSourceNodeFactory = (createInvalidStateError2, isNativeOfflineAudioContext2) => {
    return (nativeAudioContext, { mediaStreamTrack }) => {
      if (typeof nativeAudioContext.createMediaStreamTrackSource === "function") {
        return nativeAudioContext.createMediaStreamTrackSource(mediaStreamTrack);
      }
      const mediaStream = new MediaStream([mediaStreamTrack]);
      const nativeMediaStreamAudioSourceNode = nativeAudioContext.createMediaStreamSource(mediaStream);
      if (mediaStreamTrack.kind !== "audio") {
        throw createInvalidStateError2();
      }
      if (isNativeOfflineAudioContext2(nativeAudioContext)) {
        throw new TypeError();
      }
      return nativeMediaStreamAudioSourceNode;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-offline-audio-context-constructor.js
  var createNativeOfflineAudioContextConstructor = (window3) => {
    if (window3 === null) {
      return null;
    }
    if (window3.hasOwnProperty("OfflineAudioContext")) {
      return window3.OfflineAudioContext;
    }
    return window3.hasOwnProperty("webkitOfflineAudioContext") ? window3.webkitOfflineAudioContext : null;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-oscillator-node-factory.js
  var createNativeOscillatorNodeFactory = (addSilentConnection2, cacheTestResult2, testAudioScheduledSourceNodeStartMethodNegativeParametersSupport2, testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport2, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2, wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls2) => {
    return (nativeContext, options) => {
      const nativeOscillatorNode = nativeContext.createOscillator();
      assignNativeAudioNodeOptions(nativeOscillatorNode, options);
      assignNativeAudioNodeAudioParamValue(nativeOscillatorNode, options, "detune");
      assignNativeAudioNodeAudioParamValue(nativeOscillatorNode, options, "frequency");
      if (options.periodicWave !== void 0) {
        nativeOscillatorNode.setPeriodicWave(options.periodicWave);
      } else {
        assignNativeAudioNodeOption(nativeOscillatorNode, options, "type");
      }
      if (!cacheTestResult2(testAudioScheduledSourceNodeStartMethodNegativeParametersSupport2, () => testAudioScheduledSourceNodeStartMethodNegativeParametersSupport2(nativeContext))) {
        wrapAudioScheduledSourceNodeStartMethodNegativeParameters(nativeOscillatorNode);
      }
      if (!cacheTestResult2(testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport2, () => testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport2(nativeContext))) {
        wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls2(nativeOscillatorNode, nativeContext);
      }
      if (!cacheTestResult2(testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2, () => testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2(nativeContext))) {
        wrapAudioScheduledSourceNodeStopMethodNegativeParameters(nativeOscillatorNode);
      }
      addSilentConnection2(nativeContext, nativeOscillatorNode);
      return nativeOscillatorNode;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-panner-node-factory.js
  var createNativePannerNodeFactory = (createNativePannerNodeFaker2) => {
    return (nativeContext, options) => {
      const nativePannerNode = nativeContext.createPanner();
      if (nativePannerNode.orientationX === void 0) {
        return createNativePannerNodeFaker2(nativeContext, options);
      }
      assignNativeAudioNodeOptions(nativePannerNode, options);
      assignNativeAudioNodeAudioParamValue(nativePannerNode, options, "orientationX");
      assignNativeAudioNodeAudioParamValue(nativePannerNode, options, "orientationY");
      assignNativeAudioNodeAudioParamValue(nativePannerNode, options, "orientationZ");
      assignNativeAudioNodeAudioParamValue(nativePannerNode, options, "positionX");
      assignNativeAudioNodeAudioParamValue(nativePannerNode, options, "positionY");
      assignNativeAudioNodeAudioParamValue(nativePannerNode, options, "positionZ");
      assignNativeAudioNodeOption(nativePannerNode, options, "coneInnerAngle");
      assignNativeAudioNodeOption(nativePannerNode, options, "coneOuterAngle");
      assignNativeAudioNodeOption(nativePannerNode, options, "coneOuterGain");
      assignNativeAudioNodeOption(nativePannerNode, options, "distanceModel");
      assignNativeAudioNodeOption(nativePannerNode, options, "maxDistance");
      assignNativeAudioNodeOption(nativePannerNode, options, "panningModel");
      assignNativeAudioNodeOption(nativePannerNode, options, "refDistance");
      assignNativeAudioNodeOption(nativePannerNode, options, "rolloffFactor");
      return nativePannerNode;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-panner-node-faker-factory.js
  var createNativePannerNodeFakerFactory = (connectNativeAudioNodeToNativeAudioNode2, createInvalidStateError2, createNativeChannelMergerNode2, createNativeGainNode2, createNativeScriptProcessorNode2, createNativeWaveShaperNode2, createNotSupportedError2, disconnectNativeAudioNodeFromNativeAudioNode2, getFirstSample2, monitorConnections2) => {
    return (nativeContext, _a3) => {
      var _b = _a3, { coneInnerAngle, coneOuterAngle, coneOuterGain, distanceModel, maxDistance, orientationX, orientationY, orientationZ, panningModel, positionX, positionY, positionZ, refDistance, rolloffFactor } = _b, audioNodeOptions = __objRest(_b, ["coneInnerAngle", "coneOuterAngle", "coneOuterGain", "distanceModel", "maxDistance", "orientationX", "orientationY", "orientationZ", "panningModel", "positionX", "positionY", "positionZ", "refDistance", "rolloffFactor"]);
      const pannerNode = nativeContext.createPanner();
      if (audioNodeOptions.channelCount > 2) {
        throw createNotSupportedError2();
      }
      if (audioNodeOptions.channelCountMode === "max") {
        throw createNotSupportedError2();
      }
      assignNativeAudioNodeOptions(pannerNode, audioNodeOptions);
      const SINGLE_CHANNEL_OPTIONS = {
        channelCount: 1,
        channelCountMode: "explicit",
        channelInterpretation: "discrete"
      };
      const channelMergerNode = createNativeChannelMergerNode2(nativeContext, __spreadProps(__spreadValues({}, SINGLE_CHANNEL_OPTIONS), {
        channelInterpretation: "speakers",
        numberOfInputs: 6
      }));
      const inputGainNode = createNativeGainNode2(nativeContext, __spreadProps(__spreadValues({}, audioNodeOptions), { gain: 1 }));
      const orientationXGainNode = createNativeGainNode2(nativeContext, __spreadProps(__spreadValues({}, SINGLE_CHANNEL_OPTIONS), { gain: 1 }));
      const orientationYGainNode = createNativeGainNode2(nativeContext, __spreadProps(__spreadValues({}, SINGLE_CHANNEL_OPTIONS), { gain: 0 }));
      const orientationZGainNode = createNativeGainNode2(nativeContext, __spreadProps(__spreadValues({}, SINGLE_CHANNEL_OPTIONS), { gain: 0 }));
      const positionXGainNode = createNativeGainNode2(nativeContext, __spreadProps(__spreadValues({}, SINGLE_CHANNEL_OPTIONS), { gain: 0 }));
      const positionYGainNode = createNativeGainNode2(nativeContext, __spreadProps(__spreadValues({}, SINGLE_CHANNEL_OPTIONS), { gain: 0 }));
      const positionZGainNode = createNativeGainNode2(nativeContext, __spreadProps(__spreadValues({}, SINGLE_CHANNEL_OPTIONS), { gain: 0 }));
      const scriptProcessorNode = createNativeScriptProcessorNode2(nativeContext, 256, 6, 1);
      const waveShaperNode = createNativeWaveShaperNode2(nativeContext, __spreadProps(__spreadValues({}, SINGLE_CHANNEL_OPTIONS), {
        curve: new Float32Array([1, 1]),
        oversample: "none"
      }));
      let lastOrientation = [orientationX, orientationY, orientationZ];
      let lastPosition = [positionX, positionY, positionZ];
      const buffer = new Float32Array(1);
      scriptProcessorNode.onaudioprocess = ({ inputBuffer }) => {
        const orientation = [
          getFirstSample2(inputBuffer, buffer, 0),
          getFirstSample2(inputBuffer, buffer, 1),
          getFirstSample2(inputBuffer, buffer, 2)
        ];
        if (orientation.some((value, index) => value !== lastOrientation[index])) {
          pannerNode.setOrientation(...orientation);
          lastOrientation = orientation;
        }
        const positon = [
          getFirstSample2(inputBuffer, buffer, 3),
          getFirstSample2(inputBuffer, buffer, 4),
          getFirstSample2(inputBuffer, buffer, 5)
        ];
        if (positon.some((value, index) => value !== lastPosition[index])) {
          pannerNode.setPosition(...positon);
          lastPosition = positon;
        }
      };
      Object.defineProperty(orientationYGainNode.gain, "defaultValue", { get: () => 0 });
      Object.defineProperty(orientationZGainNode.gain, "defaultValue", { get: () => 0 });
      Object.defineProperty(positionXGainNode.gain, "defaultValue", { get: () => 0 });
      Object.defineProperty(positionYGainNode.gain, "defaultValue", { get: () => 0 });
      Object.defineProperty(positionZGainNode.gain, "defaultValue", { get: () => 0 });
      const nativePannerNodeFaker = {
        get bufferSize() {
          return void 0;
        },
        get channelCount() {
          return pannerNode.channelCount;
        },
        set channelCount(value) {
          if (value > 2) {
            throw createNotSupportedError2();
          }
          inputGainNode.channelCount = value;
          pannerNode.channelCount = value;
        },
        get channelCountMode() {
          return pannerNode.channelCountMode;
        },
        set channelCountMode(value) {
          if (value === "max") {
            throw createNotSupportedError2();
          }
          inputGainNode.channelCountMode = value;
          pannerNode.channelCountMode = value;
        },
        get channelInterpretation() {
          return pannerNode.channelInterpretation;
        },
        set channelInterpretation(value) {
          inputGainNode.channelInterpretation = value;
          pannerNode.channelInterpretation = value;
        },
        get coneInnerAngle() {
          return pannerNode.coneInnerAngle;
        },
        set coneInnerAngle(value) {
          pannerNode.coneInnerAngle = value;
        },
        get coneOuterAngle() {
          return pannerNode.coneOuterAngle;
        },
        set coneOuterAngle(value) {
          pannerNode.coneOuterAngle = value;
        },
        get coneOuterGain() {
          return pannerNode.coneOuterGain;
        },
        set coneOuterGain(value) {
          if (value < 0 || value > 1) {
            throw createInvalidStateError2();
          }
          pannerNode.coneOuterGain = value;
        },
        get context() {
          return pannerNode.context;
        },
        get distanceModel() {
          return pannerNode.distanceModel;
        },
        set distanceModel(value) {
          pannerNode.distanceModel = value;
        },
        get inputs() {
          return [inputGainNode];
        },
        get maxDistance() {
          return pannerNode.maxDistance;
        },
        set maxDistance(value) {
          if (value < 0) {
            throw new RangeError();
          }
          pannerNode.maxDistance = value;
        },
        get numberOfInputs() {
          return pannerNode.numberOfInputs;
        },
        get numberOfOutputs() {
          return pannerNode.numberOfOutputs;
        },
        get orientationX() {
          return orientationXGainNode.gain;
        },
        get orientationY() {
          return orientationYGainNode.gain;
        },
        get orientationZ() {
          return orientationZGainNode.gain;
        },
        get panningModel() {
          return pannerNode.panningModel;
        },
        set panningModel(value) {
          pannerNode.panningModel = value;
        },
        get positionX() {
          return positionXGainNode.gain;
        },
        get positionY() {
          return positionYGainNode.gain;
        },
        get positionZ() {
          return positionZGainNode.gain;
        },
        get refDistance() {
          return pannerNode.refDistance;
        },
        set refDistance(value) {
          if (value < 0) {
            throw new RangeError();
          }
          pannerNode.refDistance = value;
        },
        get rolloffFactor() {
          return pannerNode.rolloffFactor;
        },
        set rolloffFactor(value) {
          if (value < 0) {
            throw new RangeError();
          }
          pannerNode.rolloffFactor = value;
        },
        addEventListener(...args) {
          return inputGainNode.addEventListener(args[0], args[1], args[2]);
        },
        dispatchEvent(...args) {
          return inputGainNode.dispatchEvent(args[0]);
        },
        removeEventListener(...args) {
          return inputGainNode.removeEventListener(args[0], args[1], args[2]);
        }
      };
      if (coneInnerAngle !== nativePannerNodeFaker.coneInnerAngle) {
        nativePannerNodeFaker.coneInnerAngle = coneInnerAngle;
      }
      if (coneOuterAngle !== nativePannerNodeFaker.coneOuterAngle) {
        nativePannerNodeFaker.coneOuterAngle = coneOuterAngle;
      }
      if (coneOuterGain !== nativePannerNodeFaker.coneOuterGain) {
        nativePannerNodeFaker.coneOuterGain = coneOuterGain;
      }
      if (distanceModel !== nativePannerNodeFaker.distanceModel) {
        nativePannerNodeFaker.distanceModel = distanceModel;
      }
      if (maxDistance !== nativePannerNodeFaker.maxDistance) {
        nativePannerNodeFaker.maxDistance = maxDistance;
      }
      if (orientationX !== nativePannerNodeFaker.orientationX.value) {
        nativePannerNodeFaker.orientationX.value = orientationX;
      }
      if (orientationY !== nativePannerNodeFaker.orientationY.value) {
        nativePannerNodeFaker.orientationY.value = orientationY;
      }
      if (orientationZ !== nativePannerNodeFaker.orientationZ.value) {
        nativePannerNodeFaker.orientationZ.value = orientationZ;
      }
      if (panningModel !== nativePannerNodeFaker.panningModel) {
        nativePannerNodeFaker.panningModel = panningModel;
      }
      if (positionX !== nativePannerNodeFaker.positionX.value) {
        nativePannerNodeFaker.positionX.value = positionX;
      }
      if (positionY !== nativePannerNodeFaker.positionY.value) {
        nativePannerNodeFaker.positionY.value = positionY;
      }
      if (positionZ !== nativePannerNodeFaker.positionZ.value) {
        nativePannerNodeFaker.positionZ.value = positionZ;
      }
      if (refDistance !== nativePannerNodeFaker.refDistance) {
        nativePannerNodeFaker.refDistance = refDistance;
      }
      if (rolloffFactor !== nativePannerNodeFaker.rolloffFactor) {
        nativePannerNodeFaker.rolloffFactor = rolloffFactor;
      }
      if (lastOrientation[0] !== 1 || lastOrientation[1] !== 0 || lastOrientation[2] !== 0) {
        pannerNode.setOrientation(...lastOrientation);
      }
      if (lastPosition[0] !== 0 || lastPosition[1] !== 0 || lastPosition[2] !== 0) {
        pannerNode.setPosition(...lastPosition);
      }
      const whenConnected = () => {
        inputGainNode.connect(pannerNode);
        connectNativeAudioNodeToNativeAudioNode2(inputGainNode, waveShaperNode, 0, 0);
        waveShaperNode.connect(orientationXGainNode).connect(channelMergerNode, 0, 0);
        waveShaperNode.connect(orientationYGainNode).connect(channelMergerNode, 0, 1);
        waveShaperNode.connect(orientationZGainNode).connect(channelMergerNode, 0, 2);
        waveShaperNode.connect(positionXGainNode).connect(channelMergerNode, 0, 3);
        waveShaperNode.connect(positionYGainNode).connect(channelMergerNode, 0, 4);
        waveShaperNode.connect(positionZGainNode).connect(channelMergerNode, 0, 5);
        channelMergerNode.connect(scriptProcessorNode).connect(nativeContext.destination);
      };
      const whenDisconnected = () => {
        inputGainNode.disconnect(pannerNode);
        disconnectNativeAudioNodeFromNativeAudioNode2(inputGainNode, waveShaperNode, 0, 0);
        waveShaperNode.disconnect(orientationXGainNode);
        orientationXGainNode.disconnect(channelMergerNode);
        waveShaperNode.disconnect(orientationYGainNode);
        orientationYGainNode.disconnect(channelMergerNode);
        waveShaperNode.disconnect(orientationZGainNode);
        orientationZGainNode.disconnect(channelMergerNode);
        waveShaperNode.disconnect(positionXGainNode);
        positionXGainNode.disconnect(channelMergerNode);
        waveShaperNode.disconnect(positionYGainNode);
        positionYGainNode.disconnect(channelMergerNode);
        waveShaperNode.disconnect(positionZGainNode);
        positionZGainNode.disconnect(channelMergerNode);
        channelMergerNode.disconnect(scriptProcessorNode);
        scriptProcessorNode.disconnect(nativeContext.destination);
      };
      return monitorConnections2(interceptConnections(nativePannerNodeFaker, pannerNode), whenConnected, whenDisconnected);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-periodic-wave-factory.js
  var createNativePeriodicWaveFactory = (createIndexSizeError2) => {
    return (nativeContext, { disableNormalization, imag, real }) => {
      const convertedImag = imag instanceof Float32Array ? imag : new Float32Array(imag);
      const convertedReal = real instanceof Float32Array ? real : new Float32Array(real);
      const nativePeriodicWave = nativeContext.createPeriodicWave(convertedReal, convertedImag, { disableNormalization });
      if (Array.from(imag).length < 2) {
        throw createIndexSizeError2();
      }
      return nativePeriodicWave;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-script-processor-node.js
  var createNativeScriptProcessorNode = (nativeContext, bufferSize, numberOfInputChannels, numberOfOutputChannels) => {
    return nativeContext.createScriptProcessor(bufferSize, numberOfInputChannels, numberOfOutputChannels);
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-stereo-panner-node-factory.js
  var createNativeStereoPannerNodeFactory = (createNativeStereoPannerNodeFaker, createNotSupportedError2) => {
    return (nativeContext, options) => {
      const channelCountMode = options.channelCountMode;
      if (channelCountMode === "clamped-max") {
        throw createNotSupportedError2();
      }
      if (nativeContext.createStereoPanner === void 0) {
        return createNativeStereoPannerNodeFaker(nativeContext, options);
      }
      const nativeStereoPannerNode = nativeContext.createStereoPanner();
      assignNativeAudioNodeOptions(nativeStereoPannerNode, options);
      assignNativeAudioNodeAudioParamValue(nativeStereoPannerNode, options, "pan");
      Object.defineProperty(nativeStereoPannerNode, "channelCountMode", {
        get: () => channelCountMode,
        set: (value) => {
          if (value !== channelCountMode) {
            throw createNotSupportedError2();
          }
        }
      });
      return nativeStereoPannerNode;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-stereo-panner-node-faker-factory.js
  var createNativeStereoPannerNodeFakerFactory = (createNativeChannelMergerNode2, createNativeChannelSplitterNode2, createNativeGainNode2, createNativeWaveShaperNode2, createNotSupportedError2, monitorConnections2) => {
    const CURVE_SIZE = 16385;
    const DC_CURVE = new Float32Array([1, 1]);
    const HALF_PI = Math.PI / 2;
    const SINGLE_CHANNEL_OPTIONS = { channelCount: 1, channelCountMode: "explicit", channelInterpretation: "discrete" };
    const SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS = __spreadProps(__spreadValues({}, SINGLE_CHANNEL_OPTIONS), { oversample: "none" });
    const buildInternalGraphForMono = (nativeContext, inputGainNode, panGainNode, channelMergerNode) => {
      const leftWaveShaperCurve = new Float32Array(CURVE_SIZE);
      const rightWaveShaperCurve = new Float32Array(CURVE_SIZE);
      for (let i = 0; i < CURVE_SIZE; i += 1) {
        const x = i / (CURVE_SIZE - 1) * HALF_PI;
        leftWaveShaperCurve[i] = Math.cos(x);
        rightWaveShaperCurve[i] = Math.sin(x);
      }
      const leftGainNode = createNativeGainNode2(nativeContext, __spreadProps(__spreadValues({}, SINGLE_CHANNEL_OPTIONS), { gain: 0 }));
      const leftWaveShaperNode = createNativeWaveShaperNode2(nativeContext, __spreadProps(__spreadValues({}, SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS), { curve: leftWaveShaperCurve }));
      const panWaveShaperNode = createNativeWaveShaperNode2(nativeContext, __spreadProps(__spreadValues({}, SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS), { curve: DC_CURVE }));
      const rightGainNode = createNativeGainNode2(nativeContext, __spreadProps(__spreadValues({}, SINGLE_CHANNEL_OPTIONS), { gain: 0 }));
      const rightWaveShaperNode = createNativeWaveShaperNode2(nativeContext, __spreadProps(__spreadValues({}, SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS), { curve: rightWaveShaperCurve }));
      return {
        connectGraph() {
          inputGainNode.connect(leftGainNode);
          inputGainNode.connect(panWaveShaperNode.inputs === void 0 ? panWaveShaperNode : panWaveShaperNode.inputs[0]);
          inputGainNode.connect(rightGainNode);
          panWaveShaperNode.connect(panGainNode);
          panGainNode.connect(leftWaveShaperNode.inputs === void 0 ? leftWaveShaperNode : leftWaveShaperNode.inputs[0]);
          panGainNode.connect(rightWaveShaperNode.inputs === void 0 ? rightWaveShaperNode : rightWaveShaperNode.inputs[0]);
          leftWaveShaperNode.connect(leftGainNode.gain);
          rightWaveShaperNode.connect(rightGainNode.gain);
          leftGainNode.connect(channelMergerNode, 0, 0);
          rightGainNode.connect(channelMergerNode, 0, 1);
        },
        disconnectGraph() {
          inputGainNode.disconnect(leftGainNode);
          inputGainNode.disconnect(panWaveShaperNode.inputs === void 0 ? panWaveShaperNode : panWaveShaperNode.inputs[0]);
          inputGainNode.disconnect(rightGainNode);
          panWaveShaperNode.disconnect(panGainNode);
          panGainNode.disconnect(leftWaveShaperNode.inputs === void 0 ? leftWaveShaperNode : leftWaveShaperNode.inputs[0]);
          panGainNode.disconnect(rightWaveShaperNode.inputs === void 0 ? rightWaveShaperNode : rightWaveShaperNode.inputs[0]);
          leftWaveShaperNode.disconnect(leftGainNode.gain);
          rightWaveShaperNode.disconnect(rightGainNode.gain);
          leftGainNode.disconnect(channelMergerNode, 0, 0);
          rightGainNode.disconnect(channelMergerNode, 0, 1);
        }
      };
    };
    const buildInternalGraphForStereo = (nativeContext, inputGainNode, panGainNode, channelMergerNode) => {
      const leftInputForLeftOutputWaveShaperCurve = new Float32Array(CURVE_SIZE);
      const leftInputForRightOutputWaveShaperCurve = new Float32Array(CURVE_SIZE);
      const rightInputForLeftOutputWaveShaperCurve = new Float32Array(CURVE_SIZE);
      const rightInputForRightOutputWaveShaperCurve = new Float32Array(CURVE_SIZE);
      const centerIndex = Math.floor(CURVE_SIZE / 2);
      for (let i = 0; i < CURVE_SIZE; i += 1) {
        if (i > centerIndex) {
          const x = (i - centerIndex) / (CURVE_SIZE - 1 - centerIndex) * HALF_PI;
          leftInputForLeftOutputWaveShaperCurve[i] = Math.cos(x);
          leftInputForRightOutputWaveShaperCurve[i] = Math.sin(x);
          rightInputForLeftOutputWaveShaperCurve[i] = 0;
          rightInputForRightOutputWaveShaperCurve[i] = 1;
        } else {
          const x = i / (CURVE_SIZE - 1 - centerIndex) * HALF_PI;
          leftInputForLeftOutputWaveShaperCurve[i] = 1;
          leftInputForRightOutputWaveShaperCurve[i] = 0;
          rightInputForLeftOutputWaveShaperCurve[i] = Math.cos(x);
          rightInputForRightOutputWaveShaperCurve[i] = Math.sin(x);
        }
      }
      const channelSplitterNode = createNativeChannelSplitterNode2(nativeContext, {
        channelCount: 2,
        channelCountMode: "explicit",
        channelInterpretation: "discrete",
        numberOfOutputs: 2
      });
      const leftInputForLeftOutputGainNode = createNativeGainNode2(nativeContext, __spreadProps(__spreadValues({}, SINGLE_CHANNEL_OPTIONS), { gain: 0 }));
      const leftInputForLeftOutputWaveShaperNode = createNativeWaveShaperNode2(nativeContext, __spreadProps(__spreadValues({}, SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS), {
        curve: leftInputForLeftOutputWaveShaperCurve
      }));
      const leftInputForRightOutputGainNode = createNativeGainNode2(nativeContext, __spreadProps(__spreadValues({}, SINGLE_CHANNEL_OPTIONS), { gain: 0 }));
      const leftInputForRightOutputWaveShaperNode = createNativeWaveShaperNode2(nativeContext, __spreadProps(__spreadValues({}, SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS), {
        curve: leftInputForRightOutputWaveShaperCurve
      }));
      const panWaveShaperNode = createNativeWaveShaperNode2(nativeContext, __spreadProps(__spreadValues({}, SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS), { curve: DC_CURVE }));
      const rightInputForLeftOutputGainNode = createNativeGainNode2(nativeContext, __spreadProps(__spreadValues({}, SINGLE_CHANNEL_OPTIONS), { gain: 0 }));
      const rightInputForLeftOutputWaveShaperNode = createNativeWaveShaperNode2(nativeContext, __spreadProps(__spreadValues({}, SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS), {
        curve: rightInputForLeftOutputWaveShaperCurve
      }));
      const rightInputForRightOutputGainNode = createNativeGainNode2(nativeContext, __spreadProps(__spreadValues({}, SINGLE_CHANNEL_OPTIONS), { gain: 0 }));
      const rightInputForRightOutputWaveShaperNode = createNativeWaveShaperNode2(nativeContext, __spreadProps(__spreadValues({}, SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS), {
        curve: rightInputForRightOutputWaveShaperCurve
      }));
      return {
        connectGraph() {
          inputGainNode.connect(channelSplitterNode);
          inputGainNode.connect(panWaveShaperNode.inputs === void 0 ? panWaveShaperNode : panWaveShaperNode.inputs[0]);
          channelSplitterNode.connect(leftInputForLeftOutputGainNode, 0);
          channelSplitterNode.connect(leftInputForRightOutputGainNode, 0);
          channelSplitterNode.connect(rightInputForLeftOutputGainNode, 1);
          channelSplitterNode.connect(rightInputForRightOutputGainNode, 1);
          panWaveShaperNode.connect(panGainNode);
          panGainNode.connect(leftInputForLeftOutputWaveShaperNode.inputs === void 0 ? leftInputForLeftOutputWaveShaperNode : leftInputForLeftOutputWaveShaperNode.inputs[0]);
          panGainNode.connect(leftInputForRightOutputWaveShaperNode.inputs === void 0 ? leftInputForRightOutputWaveShaperNode : leftInputForRightOutputWaveShaperNode.inputs[0]);
          panGainNode.connect(rightInputForLeftOutputWaveShaperNode.inputs === void 0 ? rightInputForLeftOutputWaveShaperNode : rightInputForLeftOutputWaveShaperNode.inputs[0]);
          panGainNode.connect(rightInputForRightOutputWaveShaperNode.inputs === void 0 ? rightInputForRightOutputWaveShaperNode : rightInputForRightOutputWaveShaperNode.inputs[0]);
          leftInputForLeftOutputWaveShaperNode.connect(leftInputForLeftOutputGainNode.gain);
          leftInputForRightOutputWaveShaperNode.connect(leftInputForRightOutputGainNode.gain);
          rightInputForLeftOutputWaveShaperNode.connect(rightInputForLeftOutputGainNode.gain);
          rightInputForRightOutputWaveShaperNode.connect(rightInputForRightOutputGainNode.gain);
          leftInputForLeftOutputGainNode.connect(channelMergerNode, 0, 0);
          rightInputForLeftOutputGainNode.connect(channelMergerNode, 0, 0);
          leftInputForRightOutputGainNode.connect(channelMergerNode, 0, 1);
          rightInputForRightOutputGainNode.connect(channelMergerNode, 0, 1);
        },
        disconnectGraph() {
          inputGainNode.disconnect(channelSplitterNode);
          inputGainNode.disconnect(panWaveShaperNode.inputs === void 0 ? panWaveShaperNode : panWaveShaperNode.inputs[0]);
          channelSplitterNode.disconnect(leftInputForLeftOutputGainNode, 0);
          channelSplitterNode.disconnect(leftInputForRightOutputGainNode, 0);
          channelSplitterNode.disconnect(rightInputForLeftOutputGainNode, 1);
          channelSplitterNode.disconnect(rightInputForRightOutputGainNode, 1);
          panWaveShaperNode.disconnect(panGainNode);
          panGainNode.disconnect(leftInputForLeftOutputWaveShaperNode.inputs === void 0 ? leftInputForLeftOutputWaveShaperNode : leftInputForLeftOutputWaveShaperNode.inputs[0]);
          panGainNode.disconnect(leftInputForRightOutputWaveShaperNode.inputs === void 0 ? leftInputForRightOutputWaveShaperNode : leftInputForRightOutputWaveShaperNode.inputs[0]);
          panGainNode.disconnect(rightInputForLeftOutputWaveShaperNode.inputs === void 0 ? rightInputForLeftOutputWaveShaperNode : rightInputForLeftOutputWaveShaperNode.inputs[0]);
          panGainNode.disconnect(rightInputForRightOutputWaveShaperNode.inputs === void 0 ? rightInputForRightOutputWaveShaperNode : rightInputForRightOutputWaveShaperNode.inputs[0]);
          leftInputForLeftOutputWaveShaperNode.disconnect(leftInputForLeftOutputGainNode.gain);
          leftInputForRightOutputWaveShaperNode.disconnect(leftInputForRightOutputGainNode.gain);
          rightInputForLeftOutputWaveShaperNode.disconnect(rightInputForLeftOutputGainNode.gain);
          rightInputForRightOutputWaveShaperNode.disconnect(rightInputForRightOutputGainNode.gain);
          leftInputForLeftOutputGainNode.disconnect(channelMergerNode, 0, 0);
          rightInputForLeftOutputGainNode.disconnect(channelMergerNode, 0, 0);
          leftInputForRightOutputGainNode.disconnect(channelMergerNode, 0, 1);
          rightInputForRightOutputGainNode.disconnect(channelMergerNode, 0, 1);
        }
      };
    };
    const buildInternalGraph = (nativeContext, channelCount, inputGainNode, panGainNode, channelMergerNode) => {
      if (channelCount === 1) {
        return buildInternalGraphForMono(nativeContext, inputGainNode, panGainNode, channelMergerNode);
      }
      if (channelCount === 2) {
        return buildInternalGraphForStereo(nativeContext, inputGainNode, panGainNode, channelMergerNode);
      }
      throw createNotSupportedError2();
    };
    return (nativeContext, _a3) => {
      var _b = _a3, { channelCount, channelCountMode, pan } = _b, audioNodeOptions = __objRest(_b, ["channelCount", "channelCountMode", "pan"]);
      if (channelCountMode === "max") {
        throw createNotSupportedError2();
      }
      const channelMergerNode = createNativeChannelMergerNode2(nativeContext, __spreadProps(__spreadValues({}, audioNodeOptions), {
        channelCount: 1,
        channelCountMode,
        numberOfInputs: 2
      }));
      const inputGainNode = createNativeGainNode2(nativeContext, __spreadProps(__spreadValues({}, audioNodeOptions), { channelCount, channelCountMode, gain: 1 }));
      const panGainNode = createNativeGainNode2(nativeContext, {
        channelCount: 1,
        channelCountMode: "explicit",
        channelInterpretation: "discrete",
        gain: pan
      });
      let { connectGraph, disconnectGraph } = buildInternalGraph(nativeContext, channelCount, inputGainNode, panGainNode, channelMergerNode);
      Object.defineProperty(panGainNode.gain, "defaultValue", { get: () => 0 });
      Object.defineProperty(panGainNode.gain, "maxValue", { get: () => 1 });
      Object.defineProperty(panGainNode.gain, "minValue", { get: () => -1 });
      const nativeStereoPannerNodeFakerFactory2 = {
        get bufferSize() {
          return void 0;
        },
        get channelCount() {
          return inputGainNode.channelCount;
        },
        set channelCount(value) {
          if (inputGainNode.channelCount !== value) {
            if (isConnected) {
              disconnectGraph();
            }
            ({ connectGraph, disconnectGraph } = buildInternalGraph(nativeContext, value, inputGainNode, panGainNode, channelMergerNode));
            if (isConnected) {
              connectGraph();
            }
          }
          inputGainNode.channelCount = value;
        },
        get channelCountMode() {
          return inputGainNode.channelCountMode;
        },
        set channelCountMode(value) {
          if (value === "clamped-max" || value === "max") {
            throw createNotSupportedError2();
          }
          inputGainNode.channelCountMode = value;
        },
        get channelInterpretation() {
          return inputGainNode.channelInterpretation;
        },
        set channelInterpretation(value) {
          inputGainNode.channelInterpretation = value;
        },
        get context() {
          return inputGainNode.context;
        },
        get inputs() {
          return [inputGainNode];
        },
        get numberOfInputs() {
          return inputGainNode.numberOfInputs;
        },
        get numberOfOutputs() {
          return inputGainNode.numberOfOutputs;
        },
        get pan() {
          return panGainNode.gain;
        },
        addEventListener(...args) {
          return inputGainNode.addEventListener(args[0], args[1], args[2]);
        },
        dispatchEvent(...args) {
          return inputGainNode.dispatchEvent(args[0]);
        },
        removeEventListener(...args) {
          return inputGainNode.removeEventListener(args[0], args[1], args[2]);
        }
      };
      let isConnected = false;
      const whenConnected = () => {
        connectGraph();
        isConnected = true;
      };
      const whenDisconnected = () => {
        disconnectGraph();
        isConnected = false;
      };
      return monitorConnections2(interceptConnections(nativeStereoPannerNodeFakerFactory2, channelMergerNode), whenConnected, whenDisconnected);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-wave-shaper-node-factory.js
  var createNativeWaveShaperNodeFactory = (createConnectedNativeAudioBufferSourceNode2, createInvalidStateError2, createNativeWaveShaperNodeFaker2, isDCCurve2, monitorConnections2, nativeAudioContextConstructor2, overwriteAccessors2) => {
    return (nativeContext, options) => {
      const nativeWaveShaperNode = nativeContext.createWaveShaper();
      if (nativeAudioContextConstructor2 !== null && nativeAudioContextConstructor2.name === "webkitAudioContext" && nativeContext.createGain().gain.automationRate === void 0) {
        return createNativeWaveShaperNodeFaker2(nativeContext, options);
      }
      assignNativeAudioNodeOptions(nativeWaveShaperNode, options);
      const curve = options.curve === null || options.curve instanceof Float32Array ? options.curve : new Float32Array(options.curve);
      if (curve !== null && curve.length < 2) {
        throw createInvalidStateError2();
      }
      assignNativeAudioNodeOption(nativeWaveShaperNode, { curve }, "curve");
      assignNativeAudioNodeOption(nativeWaveShaperNode, options, "oversample");
      let disconnectNativeAudioBufferSourceNode = null;
      let isConnected = false;
      overwriteAccessors2(nativeWaveShaperNode, "curve", (get) => () => get.call(nativeWaveShaperNode), (set) => (value) => {
        set.call(nativeWaveShaperNode, value);
        if (isConnected) {
          if (isDCCurve2(value) && disconnectNativeAudioBufferSourceNode === null) {
            disconnectNativeAudioBufferSourceNode = createConnectedNativeAudioBufferSourceNode2(nativeContext, nativeWaveShaperNode);
          } else if (!isDCCurve2(value) && disconnectNativeAudioBufferSourceNode !== null) {
            disconnectNativeAudioBufferSourceNode();
            disconnectNativeAudioBufferSourceNode = null;
          }
        }
        return value;
      });
      const whenConnected = () => {
        isConnected = true;
        if (isDCCurve2(nativeWaveShaperNode.curve)) {
          disconnectNativeAudioBufferSourceNode = createConnectedNativeAudioBufferSourceNode2(nativeContext, nativeWaveShaperNode);
        }
      };
      const whenDisconnected = () => {
        isConnected = false;
        if (disconnectNativeAudioBufferSourceNode !== null) {
          disconnectNativeAudioBufferSourceNode();
          disconnectNativeAudioBufferSourceNode = null;
        }
      };
      return monitorConnections2(nativeWaveShaperNode, whenConnected, whenDisconnected);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-wave-shaper-node-faker-factory.js
  var createNativeWaveShaperNodeFakerFactory = (createConnectedNativeAudioBufferSourceNode2, createInvalidStateError2, createNativeGainNode2, isDCCurve2, monitorConnections2) => {
    return (nativeContext, _a3) => {
      var _b = _a3, { curve, oversample } = _b, audioNodeOptions = __objRest(_b, ["curve", "oversample"]);
      const negativeWaveShaperNode = nativeContext.createWaveShaper();
      const positiveWaveShaperNode = nativeContext.createWaveShaper();
      assignNativeAudioNodeOptions(negativeWaveShaperNode, audioNodeOptions);
      assignNativeAudioNodeOptions(positiveWaveShaperNode, audioNodeOptions);
      const inputGainNode = createNativeGainNode2(nativeContext, __spreadProps(__spreadValues({}, audioNodeOptions), { gain: 1 }));
      const invertGainNode = createNativeGainNode2(nativeContext, __spreadProps(__spreadValues({}, audioNodeOptions), { gain: -1 }));
      const outputGainNode = createNativeGainNode2(nativeContext, __spreadProps(__spreadValues({}, audioNodeOptions), { gain: 1 }));
      const revertGainNode = createNativeGainNode2(nativeContext, __spreadProps(__spreadValues({}, audioNodeOptions), { gain: -1 }));
      let disconnectNativeAudioBufferSourceNode = null;
      let isConnected = false;
      let unmodifiedCurve = null;
      const nativeWaveShaperNodeFaker = {
        get bufferSize() {
          return void 0;
        },
        get channelCount() {
          return negativeWaveShaperNode.channelCount;
        },
        set channelCount(value) {
          inputGainNode.channelCount = value;
          invertGainNode.channelCount = value;
          negativeWaveShaperNode.channelCount = value;
          outputGainNode.channelCount = value;
          positiveWaveShaperNode.channelCount = value;
          revertGainNode.channelCount = value;
        },
        get channelCountMode() {
          return negativeWaveShaperNode.channelCountMode;
        },
        set channelCountMode(value) {
          inputGainNode.channelCountMode = value;
          invertGainNode.channelCountMode = value;
          negativeWaveShaperNode.channelCountMode = value;
          outputGainNode.channelCountMode = value;
          positiveWaveShaperNode.channelCountMode = value;
          revertGainNode.channelCountMode = value;
        },
        get channelInterpretation() {
          return negativeWaveShaperNode.channelInterpretation;
        },
        set channelInterpretation(value) {
          inputGainNode.channelInterpretation = value;
          invertGainNode.channelInterpretation = value;
          negativeWaveShaperNode.channelInterpretation = value;
          outputGainNode.channelInterpretation = value;
          positiveWaveShaperNode.channelInterpretation = value;
          revertGainNode.channelInterpretation = value;
        },
        get context() {
          return negativeWaveShaperNode.context;
        },
        get curve() {
          return unmodifiedCurve;
        },
        set curve(value) {
          if (value !== null && value.length < 2) {
            throw createInvalidStateError2();
          }
          if (value === null) {
            negativeWaveShaperNode.curve = value;
            positiveWaveShaperNode.curve = value;
          } else {
            const curveLength = value.length;
            const negativeCurve = new Float32Array(curveLength + 2 - curveLength % 2);
            const positiveCurve = new Float32Array(curveLength + 2 - curveLength % 2);
            negativeCurve[0] = value[0];
            positiveCurve[0] = -value[curveLength - 1];
            const length = Math.ceil((curveLength + 1) / 2);
            const centerIndex = (curveLength + 1) / 2 - 1;
            for (let i = 1; i < length; i += 1) {
              const theoreticIndex = i / length * centerIndex;
              const lowerIndex = Math.floor(theoreticIndex);
              const upperIndex = Math.ceil(theoreticIndex);
              negativeCurve[i] = lowerIndex === upperIndex ? value[lowerIndex] : (1 - (theoreticIndex - lowerIndex)) * value[lowerIndex] + (1 - (upperIndex - theoreticIndex)) * value[upperIndex];
              positiveCurve[i] = lowerIndex === upperIndex ? -value[curveLength - 1 - lowerIndex] : -((1 - (theoreticIndex - lowerIndex)) * value[curveLength - 1 - lowerIndex]) - (1 - (upperIndex - theoreticIndex)) * value[curveLength - 1 - upperIndex];
            }
            negativeCurve[length] = curveLength % 2 === 1 ? value[length - 1] : (value[length - 2] + value[length - 1]) / 2;
            negativeWaveShaperNode.curve = negativeCurve;
            positiveWaveShaperNode.curve = positiveCurve;
          }
          unmodifiedCurve = value;
          if (isConnected) {
            if (isDCCurve2(unmodifiedCurve) && disconnectNativeAudioBufferSourceNode === null) {
              disconnectNativeAudioBufferSourceNode = createConnectedNativeAudioBufferSourceNode2(nativeContext, inputGainNode);
            } else if (disconnectNativeAudioBufferSourceNode !== null) {
              disconnectNativeAudioBufferSourceNode();
              disconnectNativeAudioBufferSourceNode = null;
            }
          }
        },
        get inputs() {
          return [inputGainNode];
        },
        get numberOfInputs() {
          return negativeWaveShaperNode.numberOfInputs;
        },
        get numberOfOutputs() {
          return negativeWaveShaperNode.numberOfOutputs;
        },
        get oversample() {
          return negativeWaveShaperNode.oversample;
        },
        set oversample(value) {
          negativeWaveShaperNode.oversample = value;
          positiveWaveShaperNode.oversample = value;
        },
        addEventListener(...args) {
          return inputGainNode.addEventListener(args[0], args[1], args[2]);
        },
        dispatchEvent(...args) {
          return inputGainNode.dispatchEvent(args[0]);
        },
        removeEventListener(...args) {
          return inputGainNode.removeEventListener(args[0], args[1], args[2]);
        }
      };
      if (curve !== null) {
        nativeWaveShaperNodeFaker.curve = curve instanceof Float32Array ? curve : new Float32Array(curve);
      }
      if (oversample !== nativeWaveShaperNodeFaker.oversample) {
        nativeWaveShaperNodeFaker.oversample = oversample;
      }
      const whenConnected = () => {
        inputGainNode.connect(negativeWaveShaperNode).connect(outputGainNode);
        inputGainNode.connect(invertGainNode).connect(positiveWaveShaperNode).connect(revertGainNode).connect(outputGainNode);
        isConnected = true;
        if (isDCCurve2(unmodifiedCurve)) {
          disconnectNativeAudioBufferSourceNode = createConnectedNativeAudioBufferSourceNode2(nativeContext, inputGainNode);
        }
      };
      const whenDisconnected = () => {
        inputGainNode.disconnect(negativeWaveShaperNode);
        negativeWaveShaperNode.disconnect(outputGainNode);
        inputGainNode.disconnect(invertGainNode);
        invertGainNode.disconnect(positiveWaveShaperNode);
        positiveWaveShaperNode.disconnect(revertGainNode);
        revertGainNode.disconnect(outputGainNode);
        isConnected = false;
        if (disconnectNativeAudioBufferSourceNode !== null) {
          disconnectNativeAudioBufferSourceNode();
          disconnectNativeAudioBufferSourceNode = null;
        }
      };
      return monitorConnections2(interceptConnections(nativeWaveShaperNodeFaker, outputGainNode), whenConnected, whenDisconnected);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/not-supported-error.js
  var createNotSupportedError = () => new DOMException("", "NotSupportedError");

  // node_modules/standardized-audio-context/build/es2019/factories/offline-audio-context-constructor.js
  var DEFAULT_OPTIONS16 = {
    numberOfChannels: 1
  };
  var createOfflineAudioContextConstructor = (baseAudioContextConstructor2, cacheTestResult2, createInvalidStateError2, createNativeOfflineAudioContext2, startRendering2) => {
    return class OfflineAudioContext extends baseAudioContextConstructor2 {
      constructor(a, b, c) {
        let options;
        if (typeof a === "number" && b !== void 0 && c !== void 0) {
          options = { length: b, numberOfChannels: a, sampleRate: c };
        } else if (typeof a === "object") {
          options = a;
        } else {
          throw new Error("The given parameters are not valid.");
        }
        const { length, numberOfChannels, sampleRate } = __spreadValues(__spreadValues({}, DEFAULT_OPTIONS16), options);
        const nativeOfflineAudioContext = createNativeOfflineAudioContext2(numberOfChannels, length, sampleRate);
        if (!cacheTestResult2(testPromiseSupport, () => testPromiseSupport(nativeOfflineAudioContext))) {
          nativeOfflineAudioContext.addEventListener("statechange", (() => {
            let i = 0;
            const delayStateChangeEvent = (event) => {
              if (this._state === "running") {
                if (i > 0) {
                  nativeOfflineAudioContext.removeEventListener("statechange", delayStateChangeEvent);
                  event.stopImmediatePropagation();
                  this._waitForThePromiseToSettle(event);
                } else {
                  i += 1;
                }
              }
            };
            return delayStateChangeEvent;
          })());
        }
        super(nativeOfflineAudioContext, numberOfChannels);
        this._length = length;
        this._nativeOfflineAudioContext = nativeOfflineAudioContext;
        this._state = null;
      }
      get length() {
        if (this._nativeOfflineAudioContext.length === void 0) {
          return this._length;
        }
        return this._nativeOfflineAudioContext.length;
      }
      get state() {
        return this._state === null ? this._nativeOfflineAudioContext.state : this._state;
      }
      startRendering() {
        if (this._state === "running") {
          return Promise.reject(createInvalidStateError2());
        }
        this._state = "running";
        return startRendering2(this.destination, this._nativeOfflineAudioContext).finally(() => {
          this._state = null;
          deactivateAudioGraph(this);
        });
      }
      _waitForThePromiseToSettle(event) {
        if (this._state === null) {
          this._nativeOfflineAudioContext.dispatchEvent(event);
        } else {
          setTimeout(() => this._waitForThePromiseToSettle(event));
        }
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/oscillator-node-constructor.js
  var DEFAULT_OPTIONS17 = {
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers",
    detune: 0,
    frequency: 440,
    periodicWave: void 0,
    type: "sine"
  };
  var createOscillatorNodeConstructor = (audioNodeConstructor2, createAudioParam2, createNativeOscillatorNode2, createOscillatorNodeRenderer2, getNativeContext2, isNativeOfflineAudioContext2, wrapEventListener2) => {
    return class OscillatorNode extends audioNodeConstructor2 {
      constructor(context2, options) {
        const nativeContext = getNativeContext2(context2);
        const mergedOptions = __spreadValues(__spreadValues({}, DEFAULT_OPTIONS17), options);
        const nativeOscillatorNode = createNativeOscillatorNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const oscillatorNodeRenderer = isOffline ? createOscillatorNodeRenderer2() : null;
        const nyquist = context2.sampleRate / 2;
        super(context2, false, nativeOscillatorNode, oscillatorNodeRenderer);
        this._detune = createAudioParam2(this, isOffline, nativeOscillatorNode.detune, 153600, -153600);
        this._frequency = createAudioParam2(this, isOffline, nativeOscillatorNode.frequency, nyquist, -nyquist);
        this._nativeOscillatorNode = nativeOscillatorNode;
        this._onended = null;
        this._oscillatorNodeRenderer = oscillatorNodeRenderer;
        if (this._oscillatorNodeRenderer !== null && mergedOptions.periodicWave !== void 0) {
          this._oscillatorNodeRenderer.periodicWave = mergedOptions.periodicWave;
        }
      }
      get detune() {
        return this._detune;
      }
      get frequency() {
        return this._frequency;
      }
      get onended() {
        return this._onended;
      }
      set onended(value) {
        const wrappedListener = typeof value === "function" ? wrapEventListener2(this, value) : null;
        this._nativeOscillatorNode.onended = wrappedListener;
        const nativeOnEnded = this._nativeOscillatorNode.onended;
        this._onended = nativeOnEnded !== null && nativeOnEnded === wrappedListener ? value : nativeOnEnded;
      }
      get type() {
        return this._nativeOscillatorNode.type;
      }
      set type(value) {
        this._nativeOscillatorNode.type = value;
        if (this._oscillatorNodeRenderer !== null) {
          this._oscillatorNodeRenderer.periodicWave = null;
        }
      }
      setPeriodicWave(periodicWave) {
        this._nativeOscillatorNode.setPeriodicWave(periodicWave);
        if (this._oscillatorNodeRenderer !== null) {
          this._oscillatorNodeRenderer.periodicWave = periodicWave;
        }
      }
      start(when = 0) {
        this._nativeOscillatorNode.start(when);
        if (this._oscillatorNodeRenderer !== null) {
          this._oscillatorNodeRenderer.start = when;
        }
        if (this.context.state !== "closed") {
          setInternalStateToActive(this);
          const resetInternalStateToPassive = () => {
            this._nativeOscillatorNode.removeEventListener("ended", resetInternalStateToPassive);
            if (isActiveAudioNode(this)) {
              setInternalStateToPassive(this);
            }
          };
          this._nativeOscillatorNode.addEventListener("ended", resetInternalStateToPassive);
        }
      }
      stop(when = 0) {
        this._nativeOscillatorNode.stop(when);
        if (this._oscillatorNodeRenderer !== null) {
          this._oscillatorNodeRenderer.stop = when;
        }
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/oscillator-node-renderer-factory.js
  var createOscillatorNodeRendererFactory = (connectAudioParam2, createNativeOscillatorNode2, getNativeAudioNode2, renderAutomation2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeOscillatorNodes = new WeakMap();
      let periodicWave = null;
      let start2 = null;
      let stop = null;
      const createOscillatorNode = (proxy, nativeOfflineAudioContext) => __async(void 0, null, function* () {
        let nativeOscillatorNode = getNativeAudioNode2(proxy);
        const nativeOscillatorNodeIsOwnedByContext = isOwnedByContext(nativeOscillatorNode, nativeOfflineAudioContext);
        if (!nativeOscillatorNodeIsOwnedByContext) {
          const options = {
            channelCount: nativeOscillatorNode.channelCount,
            channelCountMode: nativeOscillatorNode.channelCountMode,
            channelInterpretation: nativeOscillatorNode.channelInterpretation,
            detune: nativeOscillatorNode.detune.value,
            frequency: nativeOscillatorNode.frequency.value,
            periodicWave: periodicWave === null ? void 0 : periodicWave,
            type: nativeOscillatorNode.type
          };
          nativeOscillatorNode = createNativeOscillatorNode2(nativeOfflineAudioContext, options);
          if (start2 !== null) {
            nativeOscillatorNode.start(start2);
          }
          if (stop !== null) {
            nativeOscillatorNode.stop(stop);
          }
        }
        renderedNativeOscillatorNodes.set(nativeOfflineAudioContext, nativeOscillatorNode);
        if (!nativeOscillatorNodeIsOwnedByContext) {
          yield renderAutomation2(nativeOfflineAudioContext, proxy.detune, nativeOscillatorNode.detune);
          yield renderAutomation2(nativeOfflineAudioContext, proxy.frequency, nativeOscillatorNode.frequency);
        } else {
          yield connectAudioParam2(nativeOfflineAudioContext, proxy.detune, nativeOscillatorNode.detune);
          yield connectAudioParam2(nativeOfflineAudioContext, proxy.frequency, nativeOscillatorNode.frequency);
        }
        yield renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeOscillatorNode);
        return nativeOscillatorNode;
      });
      return {
        set periodicWave(value) {
          periodicWave = value;
        },
        set start(value) {
          start2 = value;
        },
        set stop(value) {
          stop = value;
        },
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeOscillatorNode = renderedNativeOscillatorNodes.get(nativeOfflineAudioContext);
          if (renderedNativeOscillatorNode !== void 0) {
            return Promise.resolve(renderedNativeOscillatorNode);
          }
          return createOscillatorNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/panner-node-constructor.js
  var DEFAULT_OPTIONS18 = {
    channelCount: 2,
    channelCountMode: "clamped-max",
    channelInterpretation: "speakers",
    coneInnerAngle: 360,
    coneOuterAngle: 360,
    coneOuterGain: 0,
    distanceModel: "inverse",
    maxDistance: 1e4,
    orientationX: 1,
    orientationY: 0,
    orientationZ: 0,
    panningModel: "equalpower",
    positionX: 0,
    positionY: 0,
    positionZ: 0,
    refDistance: 1,
    rolloffFactor: 1
  };
  var createPannerNodeConstructor = (audioNodeConstructor2, createAudioParam2, createNativePannerNode2, createPannerNodeRenderer2, getNativeContext2, isNativeOfflineAudioContext2, setAudioNodeTailTime2) => {
    return class PannerNode extends audioNodeConstructor2 {
      constructor(context2, options) {
        const nativeContext = getNativeContext2(context2);
        const mergedOptions = __spreadValues(__spreadValues({}, DEFAULT_OPTIONS18), options);
        const nativePannerNode = createNativePannerNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const pannerNodeRenderer = isOffline ? createPannerNodeRenderer2() : null;
        super(context2, false, nativePannerNode, pannerNodeRenderer);
        this._nativePannerNode = nativePannerNode;
        this._orientationX = createAudioParam2(this, isOffline, nativePannerNode.orientationX, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
        this._orientationY = createAudioParam2(this, isOffline, nativePannerNode.orientationY, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
        this._orientationZ = createAudioParam2(this, isOffline, nativePannerNode.orientationZ, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
        this._positionX = createAudioParam2(this, isOffline, nativePannerNode.positionX, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
        this._positionY = createAudioParam2(this, isOffline, nativePannerNode.positionY, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
        this._positionZ = createAudioParam2(this, isOffline, nativePannerNode.positionZ, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
        setAudioNodeTailTime2(this, 1);
      }
      get coneInnerAngle() {
        return this._nativePannerNode.coneInnerAngle;
      }
      set coneInnerAngle(value) {
        this._nativePannerNode.coneInnerAngle = value;
      }
      get coneOuterAngle() {
        return this._nativePannerNode.coneOuterAngle;
      }
      set coneOuterAngle(value) {
        this._nativePannerNode.coneOuterAngle = value;
      }
      get coneOuterGain() {
        return this._nativePannerNode.coneOuterGain;
      }
      set coneOuterGain(value) {
        this._nativePannerNode.coneOuterGain = value;
      }
      get distanceModel() {
        return this._nativePannerNode.distanceModel;
      }
      set distanceModel(value) {
        this._nativePannerNode.distanceModel = value;
      }
      get maxDistance() {
        return this._nativePannerNode.maxDistance;
      }
      set maxDistance(value) {
        this._nativePannerNode.maxDistance = value;
      }
      get orientationX() {
        return this._orientationX;
      }
      get orientationY() {
        return this._orientationY;
      }
      get orientationZ() {
        return this._orientationZ;
      }
      get panningModel() {
        return this._nativePannerNode.panningModel;
      }
      set panningModel(value) {
        this._nativePannerNode.panningModel = value;
      }
      get positionX() {
        return this._positionX;
      }
      get positionY() {
        return this._positionY;
      }
      get positionZ() {
        return this._positionZ;
      }
      get refDistance() {
        return this._nativePannerNode.refDistance;
      }
      set refDistance(value) {
        this._nativePannerNode.refDistance = value;
      }
      get rolloffFactor() {
        return this._nativePannerNode.rolloffFactor;
      }
      set rolloffFactor(value) {
        this._nativePannerNode.rolloffFactor = value;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/panner-node-renderer-factory.js
  var createPannerNodeRendererFactory = (connectAudioParam2, createNativeChannelMergerNode2, createNativeConstantSourceNode2, createNativeGainNode2, createNativePannerNode2, getNativeAudioNode2, nativeOfflineAudioContextConstructor2, renderAutomation2, renderInputsOfAudioNode2, renderNativeOfflineAudioContext2) => {
    return () => {
      const renderedNativeAudioNodes = new WeakMap();
      let renderedBufferPromise = null;
      const createAudioNode = (proxy, nativeOfflineAudioContext) => __async(void 0, null, function* () {
        let nativeGainNode = null;
        let nativePannerNode = getNativeAudioNode2(proxy);
        const commonAudioNodeOptions = {
          channelCount: nativePannerNode.channelCount,
          channelCountMode: nativePannerNode.channelCountMode,
          channelInterpretation: nativePannerNode.channelInterpretation
        };
        const commonNativePannerNodeOptions = __spreadProps(__spreadValues({}, commonAudioNodeOptions), {
          coneInnerAngle: nativePannerNode.coneInnerAngle,
          coneOuterAngle: nativePannerNode.coneOuterAngle,
          coneOuterGain: nativePannerNode.coneOuterGain,
          distanceModel: nativePannerNode.distanceModel,
          maxDistance: nativePannerNode.maxDistance,
          panningModel: nativePannerNode.panningModel,
          refDistance: nativePannerNode.refDistance,
          rolloffFactor: nativePannerNode.rolloffFactor
        });
        const nativePannerNodeIsOwnedByContext = isOwnedByContext(nativePannerNode, nativeOfflineAudioContext);
        if ("bufferSize" in nativePannerNode) {
          nativeGainNode = createNativeGainNode2(nativeOfflineAudioContext, __spreadProps(__spreadValues({}, commonAudioNodeOptions), { gain: 1 }));
        } else if (!nativePannerNodeIsOwnedByContext) {
          const options = __spreadProps(__spreadValues({}, commonNativePannerNodeOptions), {
            orientationX: nativePannerNode.orientationX.value,
            orientationY: nativePannerNode.orientationY.value,
            orientationZ: nativePannerNode.orientationZ.value,
            positionX: nativePannerNode.positionX.value,
            positionY: nativePannerNode.positionY.value,
            positionZ: nativePannerNode.positionZ.value
          });
          nativePannerNode = createNativePannerNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeAudioNodes.set(nativeOfflineAudioContext, nativeGainNode === null ? nativePannerNode : nativeGainNode);
        if (nativeGainNode !== null) {
          if (renderedBufferPromise === null) {
            if (nativeOfflineAudioContextConstructor2 === null) {
              throw new Error("Missing the native OfflineAudioContext constructor.");
            }
            const partialOfflineAudioContext = new nativeOfflineAudioContextConstructor2(6, proxy.context.length, nativeOfflineAudioContext.sampleRate);
            const nativeChannelMergerNode = createNativeChannelMergerNode2(partialOfflineAudioContext, {
              channelCount: 1,
              channelCountMode: "explicit",
              channelInterpretation: "speakers",
              numberOfInputs: 6
            });
            nativeChannelMergerNode.connect(partialOfflineAudioContext.destination);
            renderedBufferPromise = (() => __async(void 0, null, function* () {
              const nativeConstantSourceNodes = yield Promise.all([
                proxy.orientationX,
                proxy.orientationY,
                proxy.orientationZ,
                proxy.positionX,
                proxy.positionY,
                proxy.positionZ
              ].map((audioParam, index) => __async(void 0, null, function* () {
                const nativeConstantSourceNode = createNativeConstantSourceNode2(partialOfflineAudioContext, {
                  channelCount: 1,
                  channelCountMode: "explicit",
                  channelInterpretation: "discrete",
                  offset: index === 0 ? 1 : 0
                });
                yield renderAutomation2(partialOfflineAudioContext, audioParam, nativeConstantSourceNode.offset);
                return nativeConstantSourceNode;
              })));
              for (let i = 0; i < 6; i += 1) {
                nativeConstantSourceNodes[i].connect(nativeChannelMergerNode, 0, i);
                nativeConstantSourceNodes[i].start(0);
              }
              return renderNativeOfflineAudioContext2(partialOfflineAudioContext);
            }))();
          }
          const renderedBuffer = yield renderedBufferPromise;
          const inputGainNode = createNativeGainNode2(nativeOfflineAudioContext, __spreadProps(__spreadValues({}, commonAudioNodeOptions), { gain: 1 }));
          yield renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, inputGainNode);
          const channelDatas = [];
          for (let i = 0; i < renderedBuffer.numberOfChannels; i += 1) {
            channelDatas.push(renderedBuffer.getChannelData(i));
          }
          let lastOrientation = [channelDatas[0][0], channelDatas[1][0], channelDatas[2][0]];
          let lastPosition = [channelDatas[3][0], channelDatas[4][0], channelDatas[5][0]];
          let gateGainNode = createNativeGainNode2(nativeOfflineAudioContext, __spreadProps(__spreadValues({}, commonAudioNodeOptions), { gain: 1 }));
          let partialPannerNode = createNativePannerNode2(nativeOfflineAudioContext, __spreadProps(__spreadValues({}, commonNativePannerNodeOptions), {
            orientationX: lastOrientation[0],
            orientationY: lastOrientation[1],
            orientationZ: lastOrientation[2],
            positionX: lastPosition[0],
            positionY: lastPosition[1],
            positionZ: lastPosition[2]
          }));
          inputGainNode.connect(gateGainNode).connect(partialPannerNode.inputs[0]);
          partialPannerNode.connect(nativeGainNode);
          for (let i = 128; i < renderedBuffer.length; i += 128) {
            const orientation = [channelDatas[0][i], channelDatas[1][i], channelDatas[2][i]];
            const positon = [channelDatas[3][i], channelDatas[4][i], channelDatas[5][i]];
            if (orientation.some((value, index) => value !== lastOrientation[index]) || positon.some((value, index) => value !== lastPosition[index])) {
              lastOrientation = orientation;
              lastPosition = positon;
              const currentTime = i / nativeOfflineAudioContext.sampleRate;
              gateGainNode.gain.setValueAtTime(0, currentTime);
              gateGainNode = createNativeGainNode2(nativeOfflineAudioContext, __spreadProps(__spreadValues({}, commonAudioNodeOptions), { gain: 0 }));
              partialPannerNode = createNativePannerNode2(nativeOfflineAudioContext, __spreadProps(__spreadValues({}, commonNativePannerNodeOptions), {
                orientationX: lastOrientation[0],
                orientationY: lastOrientation[1],
                orientationZ: lastOrientation[2],
                positionX: lastPosition[0],
                positionY: lastPosition[1],
                positionZ: lastPosition[2]
              }));
              gateGainNode.gain.setValueAtTime(1, currentTime);
              inputGainNode.connect(gateGainNode).connect(partialPannerNode.inputs[0]);
              partialPannerNode.connect(nativeGainNode);
            }
          }
          return nativeGainNode;
        }
        if (!nativePannerNodeIsOwnedByContext) {
          yield renderAutomation2(nativeOfflineAudioContext, proxy.orientationX, nativePannerNode.orientationX);
          yield renderAutomation2(nativeOfflineAudioContext, proxy.orientationY, nativePannerNode.orientationY);
          yield renderAutomation2(nativeOfflineAudioContext, proxy.orientationZ, nativePannerNode.orientationZ);
          yield renderAutomation2(nativeOfflineAudioContext, proxy.positionX, nativePannerNode.positionX);
          yield renderAutomation2(nativeOfflineAudioContext, proxy.positionY, nativePannerNode.positionY);
          yield renderAutomation2(nativeOfflineAudioContext, proxy.positionZ, nativePannerNode.positionZ);
        } else {
          yield connectAudioParam2(nativeOfflineAudioContext, proxy.orientationX, nativePannerNode.orientationX);
          yield connectAudioParam2(nativeOfflineAudioContext, proxy.orientationY, nativePannerNode.orientationY);
          yield connectAudioParam2(nativeOfflineAudioContext, proxy.orientationZ, nativePannerNode.orientationZ);
          yield connectAudioParam2(nativeOfflineAudioContext, proxy.positionX, nativePannerNode.positionX);
          yield connectAudioParam2(nativeOfflineAudioContext, proxy.positionY, nativePannerNode.positionY);
          yield connectAudioParam2(nativeOfflineAudioContext, proxy.positionZ, nativePannerNode.positionZ);
        }
        if (isNativeAudioNodeFaker(nativePannerNode)) {
          yield renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativePannerNode.inputs[0]);
        } else {
          yield renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativePannerNode);
        }
        return nativePannerNode;
      });
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeGainNodeOrNativePannerNode = renderedNativeAudioNodes.get(nativeOfflineAudioContext);
          if (renderedNativeGainNodeOrNativePannerNode !== void 0) {
            return Promise.resolve(renderedNativeGainNodeOrNativePannerNode);
          }
          return createAudioNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/periodic-wave-constructor.js
  var DEFAULT_OPTIONS19 = {
    disableNormalization: false
  };
  var createPeriodicWaveConstructor = (createNativePeriodicWave2, getNativeContext2, periodicWaveStore, sanitizePeriodicWaveOptions2) => {
    return class PeriodicWave {
      constructor(context2, options) {
        const nativeContext = getNativeContext2(context2);
        const mergedOptions = sanitizePeriodicWaveOptions2(__spreadValues(__spreadValues({}, DEFAULT_OPTIONS19), options));
        const periodicWave = createNativePeriodicWave2(nativeContext, mergedOptions);
        periodicWaveStore.add(periodicWave);
        return periodicWave;
      }
      static [Symbol.hasInstance](instance) {
        return instance !== null && typeof instance === "object" && Object.getPrototypeOf(instance) === PeriodicWave.prototype || periodicWaveStore.has(instance);
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/render-automation.js
  var createRenderAutomation = (getAudioParamRenderer, renderInputsOfAudioParam2) => {
    return (nativeOfflineAudioContext, audioParam, nativeAudioParam) => {
      const audioParamRenderer = getAudioParamRenderer(audioParam);
      audioParamRenderer.replay(nativeAudioParam);
      return renderInputsOfAudioParam2(audioParam, nativeOfflineAudioContext, nativeAudioParam);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/render-inputs-of-audio-node.js
  var createRenderInputsOfAudioNode = (getAudioNodeConnections2, getAudioNodeRenderer2, isPartOfACycle2) => {
    return (audioNode, nativeOfflineAudioContext, nativeAudioNode) => __async(void 0, null, function* () {
      const audioNodeConnections = getAudioNodeConnections2(audioNode);
      yield Promise.all(audioNodeConnections.activeInputs.map((connections, input) => Array.from(connections).map((_0) => __async(void 0, [_0], function* ([source, output]) {
        const audioNodeRenderer = getAudioNodeRenderer2(source);
        const renderedNativeAudioNode = yield audioNodeRenderer.render(source, nativeOfflineAudioContext);
        const destination = audioNode.context.destination;
        if (!isPartOfACycle2(source) && (audioNode !== destination || !isPartOfACycle2(audioNode))) {
          renderedNativeAudioNode.connect(nativeAudioNode, output, input);
        }
      }))).reduce((allRenderingPromises, renderingPromises) => [...allRenderingPromises, ...renderingPromises], []));
    });
  };

  // node_modules/standardized-audio-context/build/es2019/factories/render-inputs-of-audio-param.js
  var createRenderInputsOfAudioParam = (getAudioNodeRenderer2, getAudioParamConnections2, isPartOfACycle2) => {
    return (audioParam, nativeOfflineAudioContext, nativeAudioParam) => __async(void 0, null, function* () {
      const audioParamConnections = getAudioParamConnections2(audioParam);
      yield Promise.all(Array.from(audioParamConnections.activeInputs).map((_0) => __async(void 0, [_0], function* ([source, output]) {
        const audioNodeRenderer = getAudioNodeRenderer2(source);
        const renderedNativeAudioNode = yield audioNodeRenderer.render(source, nativeOfflineAudioContext);
        if (!isPartOfACycle2(source)) {
          renderedNativeAudioNode.connect(nativeAudioParam, output);
        }
      })));
    });
  };

  // node_modules/standardized-audio-context/build/es2019/factories/render-native-offline-audio-context.js
  var createRenderNativeOfflineAudioContext = (cacheTestResult2, createNativeGainNode2, createNativeScriptProcessorNode2, testOfflineAudioContextCurrentTimeSupport) => {
    return (nativeOfflineAudioContext) => {
      if (cacheTestResult2(testPromiseSupport, () => testPromiseSupport(nativeOfflineAudioContext))) {
        return Promise.resolve(cacheTestResult2(testOfflineAudioContextCurrentTimeSupport, testOfflineAudioContextCurrentTimeSupport)).then((isOfflineAudioContextCurrentTimeSupported) => {
          if (!isOfflineAudioContextCurrentTimeSupported) {
            const scriptProcessorNode = createNativeScriptProcessorNode2(nativeOfflineAudioContext, 512, 0, 1);
            nativeOfflineAudioContext.oncomplete = () => {
              scriptProcessorNode.onaudioprocess = null;
              scriptProcessorNode.disconnect();
            };
            scriptProcessorNode.onaudioprocess = () => nativeOfflineAudioContext.currentTime;
            scriptProcessorNode.connect(nativeOfflineAudioContext.destination);
          }
          return nativeOfflineAudioContext.startRendering();
        });
      }
      return new Promise((resolve) => {
        const gainNode = createNativeGainNode2(nativeOfflineAudioContext, {
          channelCount: 1,
          channelCountMode: "explicit",
          channelInterpretation: "discrete",
          gain: 0
        });
        nativeOfflineAudioContext.oncomplete = (event) => {
          gainNode.disconnect();
          resolve(event.renderedBuffer);
        };
        gainNode.connect(nativeOfflineAudioContext.destination);
        nativeOfflineAudioContext.startRendering();
      });
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/set-active-audio-worklet-node-inputs.js
  var createSetActiveAudioWorkletNodeInputs = (activeAudioWorkletNodeInputsStore2) => {
    return (nativeAudioWorkletNode, activeInputs) => {
      activeAudioWorkletNodeInputsStore2.set(nativeAudioWorkletNode, activeInputs);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/set-audio-node-tail-time.js
  var createSetAudioNodeTailTime = (audioNodeTailTimeStore2) => {
    return (audioNode, tailTime) => audioNodeTailTimeStore2.set(audioNode, tailTime);
  };

  // node_modules/standardized-audio-context/build/es2019/factories/start-rendering.js
  var createStartRendering = (audioBufferStore2, cacheTestResult2, getAudioNodeRenderer2, getUnrenderedAudioWorkletNodes2, renderNativeOfflineAudioContext2, testAudioBufferCopyChannelMethodsOutOfBoundsSupport2, wrapAudioBufferCopyChannelMethods2, wrapAudioBufferCopyChannelMethodsOutOfBounds2) => {
    return (destination, nativeOfflineAudioContext) => getAudioNodeRenderer2(destination).render(destination, nativeOfflineAudioContext).then(() => Promise.all(Array.from(getUnrenderedAudioWorkletNodes2(nativeOfflineAudioContext)).map((audioWorkletNode) => getAudioNodeRenderer2(audioWorkletNode).render(audioWorkletNode, nativeOfflineAudioContext)))).then(() => renderNativeOfflineAudioContext2(nativeOfflineAudioContext)).then((audioBuffer) => {
      if (typeof audioBuffer.copyFromChannel !== "function") {
        wrapAudioBufferCopyChannelMethods2(audioBuffer);
        wrapAudioBufferGetChannelDataMethod(audioBuffer);
      } else if (!cacheTestResult2(testAudioBufferCopyChannelMethodsOutOfBoundsSupport2, () => testAudioBufferCopyChannelMethodsOutOfBoundsSupport2(audioBuffer))) {
        wrapAudioBufferCopyChannelMethodsOutOfBounds2(audioBuffer);
      }
      audioBufferStore2.add(audioBuffer);
      return audioBuffer;
    });
  };

  // node_modules/standardized-audio-context/build/es2019/factories/stereo-panner-node-constructor.js
  var DEFAULT_OPTIONS20 = {
    channelCount: 2,
    channelCountMode: "explicit",
    channelInterpretation: "speakers",
    pan: 0
  };
  var createStereoPannerNodeConstructor = (audioNodeConstructor2, createAudioParam2, createNativeStereoPannerNode2, createStereoPannerNodeRenderer2, getNativeContext2, isNativeOfflineAudioContext2) => {
    return class StereoPannerNode extends audioNodeConstructor2 {
      constructor(context2, options) {
        const nativeContext = getNativeContext2(context2);
        const mergedOptions = __spreadValues(__spreadValues({}, DEFAULT_OPTIONS20), options);
        const nativeStereoPannerNode = createNativeStereoPannerNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const stereoPannerNodeRenderer = isOffline ? createStereoPannerNodeRenderer2() : null;
        super(context2, false, nativeStereoPannerNode, stereoPannerNodeRenderer);
        this._pan = createAudioParam2(this, isOffline, nativeStereoPannerNode.pan);
      }
      get pan() {
        return this._pan;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/stereo-panner-node-renderer-factory.js
  var createStereoPannerNodeRendererFactory = (connectAudioParam2, createNativeStereoPannerNode2, getNativeAudioNode2, renderAutomation2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeStereoPannerNodes = new WeakMap();
      const createStereoPannerNode = (proxy, nativeOfflineAudioContext) => __async(void 0, null, function* () {
        let nativeStereoPannerNode = getNativeAudioNode2(proxy);
        const nativeStereoPannerNodeIsOwnedByContext = isOwnedByContext(nativeStereoPannerNode, nativeOfflineAudioContext);
        if (!nativeStereoPannerNodeIsOwnedByContext) {
          const options = {
            channelCount: nativeStereoPannerNode.channelCount,
            channelCountMode: nativeStereoPannerNode.channelCountMode,
            channelInterpretation: nativeStereoPannerNode.channelInterpretation,
            pan: nativeStereoPannerNode.pan.value
          };
          nativeStereoPannerNode = createNativeStereoPannerNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeStereoPannerNodes.set(nativeOfflineAudioContext, nativeStereoPannerNode);
        if (!nativeStereoPannerNodeIsOwnedByContext) {
          yield renderAutomation2(nativeOfflineAudioContext, proxy.pan, nativeStereoPannerNode.pan);
        } else {
          yield connectAudioParam2(nativeOfflineAudioContext, proxy.pan, nativeStereoPannerNode.pan);
        }
        if (isNativeAudioNodeFaker(nativeStereoPannerNode)) {
          yield renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeStereoPannerNode.inputs[0]);
        } else {
          yield renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeStereoPannerNode);
        }
        return nativeStereoPannerNode;
      });
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeStereoPannerNode = renderedNativeStereoPannerNodes.get(nativeOfflineAudioContext);
          if (renderedNativeStereoPannerNode !== void 0) {
            return Promise.resolve(renderedNativeStereoPannerNode);
          }
          return createStereoPannerNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/test-audio-buffer-constructor-support.js
  var createTestAudioBufferConstructorSupport = (nativeAudioBufferConstructor2) => {
    return () => {
      if (nativeAudioBufferConstructor2 === null) {
        return false;
      }
      try {
        new nativeAudioBufferConstructor2({ length: 1, sampleRate: 44100 });
      } catch (e) {
        return false;
      }
      return true;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/test-audio-worklet-processor-post-message-support.js
  var createTestAudioWorkletProcessorPostMessageSupport = (nativeAudioWorkletNodeConstructor2, nativeOfflineAudioContextConstructor2) => {
    return () => __async(void 0, null, function* () {
      if (nativeAudioWorkletNodeConstructor2 === null) {
        return true;
      }
      if (nativeOfflineAudioContextConstructor2 === null) {
        return false;
      }
      const blob = new Blob(['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'], {
        type: "application/javascript; charset=utf-8"
      });
      const offlineAudioContext = new nativeOfflineAudioContextConstructor2(1, 128, 44100);
      const url = URL.createObjectURL(blob);
      let isEmittingMessageEvents = false;
      let isEmittingProcessorErrorEvents = false;
      try {
        yield offlineAudioContext.audioWorklet.addModule(url);
        const audioWorkletNode = new nativeAudioWorkletNodeConstructor2(offlineAudioContext, "a", { numberOfOutputs: 0 });
        const oscillator = offlineAudioContext.createOscillator();
        audioWorkletNode.port.onmessage = () => isEmittingMessageEvents = true;
        audioWorkletNode.onprocessorerror = () => isEmittingProcessorErrorEvents = true;
        oscillator.connect(audioWorkletNode);
        oscillator.start(0);
        yield offlineAudioContext.startRendering();
      } catch (e) {
      } finally {
        URL.revokeObjectURL(url);
      }
      return isEmittingMessageEvents && !isEmittingProcessorErrorEvents;
    });
  };

  // node_modules/standardized-audio-context/build/es2019/factories/test-offline-audio-context-current-time-support.js
  var createTestOfflineAudioContextCurrentTimeSupport = (createNativeGainNode2, nativeOfflineAudioContextConstructor2) => {
    return () => {
      if (nativeOfflineAudioContextConstructor2 === null) {
        return Promise.resolve(false);
      }
      const nativeOfflineAudioContext = new nativeOfflineAudioContextConstructor2(1, 1, 44100);
      const gainNode = createNativeGainNode2(nativeOfflineAudioContext, {
        channelCount: 1,
        channelCountMode: "explicit",
        channelInterpretation: "discrete",
        gain: 0
      });
      return new Promise((resolve) => {
        nativeOfflineAudioContext.oncomplete = () => {
          gainNode.disconnect();
          resolve(nativeOfflineAudioContext.currentTime !== 0);
        };
        nativeOfflineAudioContext.startRendering();
      });
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/unknown-error.js
  var createUnknownError = () => new DOMException("", "UnknownError");

  // node_modules/standardized-audio-context/build/es2019/factories/wave-shaper-node-constructor.js
  var DEFAULT_OPTIONS21 = {
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers",
    curve: null,
    oversample: "none"
  };
  var createWaveShaperNodeConstructor = (audioNodeConstructor2, createInvalidStateError2, createNativeWaveShaperNode2, createWaveShaperNodeRenderer2, getNativeContext2, isNativeOfflineAudioContext2, setAudioNodeTailTime2) => {
    return class WaveShaperNode extends audioNodeConstructor2 {
      constructor(context2, options) {
        const nativeContext = getNativeContext2(context2);
        const mergedOptions = __spreadValues(__spreadValues({}, DEFAULT_OPTIONS21), options);
        const nativeWaveShaperNode = createNativeWaveShaperNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const waveShaperNodeRenderer = isOffline ? createWaveShaperNodeRenderer2() : null;
        super(context2, true, nativeWaveShaperNode, waveShaperNodeRenderer);
        this._isCurveNullified = false;
        this._nativeWaveShaperNode = nativeWaveShaperNode;
        setAudioNodeTailTime2(this, 1);
      }
      get curve() {
        if (this._isCurveNullified) {
          return null;
        }
        return this._nativeWaveShaperNode.curve;
      }
      set curve(value) {
        if (value === null) {
          this._isCurveNullified = true;
          this._nativeWaveShaperNode.curve = new Float32Array([0, 0]);
        } else {
          if (value.length < 2) {
            throw createInvalidStateError2();
          }
          this._isCurveNullified = false;
          this._nativeWaveShaperNode.curve = value;
        }
      }
      get oversample() {
        return this._nativeWaveShaperNode.oversample;
      }
      set oversample(value) {
        this._nativeWaveShaperNode.oversample = value;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/wave-shaper-node-renderer-factory.js
  var createWaveShaperNodeRendererFactory = (createNativeWaveShaperNode2, getNativeAudioNode2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeWaveShaperNodes = new WeakMap();
      const createWaveShaperNode = (proxy, nativeOfflineAudioContext) => __async(void 0, null, function* () {
        let nativeWaveShaperNode = getNativeAudioNode2(proxy);
        const nativeWaveShaperNodeIsOwnedByContext = isOwnedByContext(nativeWaveShaperNode, nativeOfflineAudioContext);
        if (!nativeWaveShaperNodeIsOwnedByContext) {
          const options = {
            channelCount: nativeWaveShaperNode.channelCount,
            channelCountMode: nativeWaveShaperNode.channelCountMode,
            channelInterpretation: nativeWaveShaperNode.channelInterpretation,
            curve: nativeWaveShaperNode.curve,
            oversample: nativeWaveShaperNode.oversample
          };
          nativeWaveShaperNode = createNativeWaveShaperNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeWaveShaperNodes.set(nativeOfflineAudioContext, nativeWaveShaperNode);
        if (isNativeAudioNodeFaker(nativeWaveShaperNode)) {
          yield renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeWaveShaperNode.inputs[0]);
        } else {
          yield renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeWaveShaperNode);
        }
        return nativeWaveShaperNode;
      });
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeWaveShaperNode = renderedNativeWaveShaperNodes.get(nativeOfflineAudioContext);
          if (renderedNativeWaveShaperNode !== void 0) {
            return Promise.resolve(renderedNativeWaveShaperNode);
          }
          return createWaveShaperNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/window.js
  var createWindow = () => typeof window === "undefined" ? null : window;

  // node_modules/standardized-audio-context/build/es2019/factories/wrap-audio-buffer-copy-channel-methods.js
  var createWrapAudioBufferCopyChannelMethods = (convertNumberToUnsignedLong2, createIndexSizeError2) => {
    return (audioBuffer) => {
      audioBuffer.copyFromChannel = (destination, channelNumberAsNumber, bufferOffsetAsNumber = 0) => {
        const bufferOffset = convertNumberToUnsignedLong2(bufferOffsetAsNumber);
        const channelNumber = convertNumberToUnsignedLong2(channelNumberAsNumber);
        if (channelNumber >= audioBuffer.numberOfChannels) {
          throw createIndexSizeError2();
        }
        const audioBufferLength = audioBuffer.length;
        const channelData = audioBuffer.getChannelData(channelNumber);
        const destinationLength = destination.length;
        for (let i = bufferOffset < 0 ? -bufferOffset : 0; i + bufferOffset < audioBufferLength && i < destinationLength; i += 1) {
          destination[i] = channelData[i + bufferOffset];
        }
      };
      audioBuffer.copyToChannel = (source, channelNumberAsNumber, bufferOffsetAsNumber = 0) => {
        const bufferOffset = convertNumberToUnsignedLong2(bufferOffsetAsNumber);
        const channelNumber = convertNumberToUnsignedLong2(channelNumberAsNumber);
        if (channelNumber >= audioBuffer.numberOfChannels) {
          throw createIndexSizeError2();
        }
        const audioBufferLength = audioBuffer.length;
        const channelData = audioBuffer.getChannelData(channelNumber);
        const sourceLength = source.length;
        for (let i = bufferOffset < 0 ? -bufferOffset : 0; i + bufferOffset < audioBufferLength && i < sourceLength; i += 1) {
          channelData[i + bufferOffset] = source[i];
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/wrap-audio-buffer-copy-channel-methods-out-of-bounds.js
  var createWrapAudioBufferCopyChannelMethodsOutOfBounds = (convertNumberToUnsignedLong2) => {
    return (audioBuffer) => {
      audioBuffer.copyFromChannel = ((copyFromChannel2) => {
        return (destination, channelNumberAsNumber, bufferOffsetAsNumber = 0) => {
          const bufferOffset = convertNumberToUnsignedLong2(bufferOffsetAsNumber);
          const channelNumber = convertNumberToUnsignedLong2(channelNumberAsNumber);
          if (bufferOffset < audioBuffer.length) {
            return copyFromChannel2.call(audioBuffer, destination, channelNumber, bufferOffset);
          }
        };
      })(audioBuffer.copyFromChannel);
      audioBuffer.copyToChannel = ((copyToChannel2) => {
        return (source, channelNumberAsNumber, bufferOffsetAsNumber = 0) => {
          const bufferOffset = convertNumberToUnsignedLong2(bufferOffsetAsNumber);
          const channelNumber = convertNumberToUnsignedLong2(channelNumberAsNumber);
          if (bufferOffset < audioBuffer.length) {
            return copyToChannel2.call(audioBuffer, source, channelNumber, bufferOffset);
          }
        };
      })(audioBuffer.copyToChannel);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/wrap-audio-buffer-source-node-stop-method-nullified-buffer.js
  var createWrapAudioBufferSourceNodeStopMethodNullifiedBuffer = (overwriteAccessors2) => {
    return (nativeAudioBufferSourceNode, nativeContext) => {
      const nullifiedBuffer = nativeContext.createBuffer(1, 1, 44100);
      if (nativeAudioBufferSourceNode.buffer === null) {
        nativeAudioBufferSourceNode.buffer = nullifiedBuffer;
      }
      overwriteAccessors2(nativeAudioBufferSourceNode, "buffer", (get) => () => {
        const value = get.call(nativeAudioBufferSourceNode);
        return value === nullifiedBuffer ? null : value;
      }, (set) => (value) => {
        return set.call(nativeAudioBufferSourceNode, value === null ? nullifiedBuffer : value);
      });
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/wrap-channel-merger-node.js
  var createWrapChannelMergerNode = (createInvalidStateError2, monitorConnections2) => {
    return (nativeContext, channelMergerNode) => {
      channelMergerNode.channelCount = 1;
      channelMergerNode.channelCountMode = "explicit";
      Object.defineProperty(channelMergerNode, "channelCount", {
        get: () => 1,
        set: () => {
          throw createInvalidStateError2();
        }
      });
      Object.defineProperty(channelMergerNode, "channelCountMode", {
        get: () => "explicit",
        set: () => {
          throw createInvalidStateError2();
        }
      });
      const audioBufferSourceNode = nativeContext.createBufferSource();
      const whenConnected = () => {
        const length = channelMergerNode.numberOfInputs;
        for (let i = 0; i < length; i += 1) {
          audioBufferSourceNode.connect(channelMergerNode, 0, i);
        }
      };
      const whenDisconnected = () => audioBufferSourceNode.disconnect(channelMergerNode);
      monitorConnections2(channelMergerNode, whenConnected, whenDisconnected);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/get-first-sample.js
  var getFirstSample = (audioBuffer, buffer, channelNumber) => {
    if (audioBuffer.copyFromChannel === void 0) {
      return audioBuffer.getChannelData(channelNumber)[0];
    }
    audioBuffer.copyFromChannel(buffer, channelNumber);
    return buffer[0];
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/is-dc-curve.js
  var isDCCurve = (curve) => {
    if (curve === null) {
      return false;
    }
    const length = curve.length;
    if (length % 2 !== 0) {
      return curve[Math.floor(length / 2)] !== 0;
    }
    return curve[length / 2 - 1] + curve[length / 2] !== 0;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/overwrite-accessors.js
  var overwriteAccessors = (object, property, createGetter, createSetter) => {
    let prototype = object;
    while (!prototype.hasOwnProperty(property)) {
      prototype = Object.getPrototypeOf(prototype);
    }
    const { get, set } = Object.getOwnPropertyDescriptor(prototype, property);
    Object.defineProperty(object, property, { get: createGetter(get), set: createSetter(set) });
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/sanitize-audio-worklet-node-options.js
  var sanitizeAudioWorkletNodeOptions = (options) => {
    return __spreadProps(__spreadValues({}, options), {
      outputChannelCount: options.outputChannelCount !== void 0 ? options.outputChannelCount : options.numberOfInputs === 1 && options.numberOfOutputs === 1 ? [options.channelCount] : Array.from({ length: options.numberOfOutputs }, () => 1)
    });
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/sanitize-channel-splitter-options.js
  var sanitizeChannelSplitterOptions = (options) => {
    return __spreadProps(__spreadValues({}, options), { channelCount: options.numberOfOutputs });
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/sanitize-periodic-wave-options.js
  var sanitizePeriodicWaveOptions = (options) => {
    const { imag, real } = options;
    if (imag === void 0) {
      if (real === void 0) {
        return __spreadProps(__spreadValues({}, options), { imag: [0, 0], real: [0, 0] });
      }
      return __spreadProps(__spreadValues({}, options), { imag: Array.from(real, () => 0), real });
    }
    if (real === void 0) {
      return __spreadProps(__spreadValues({}, options), { imag, real: Array.from(imag, () => 0) });
    }
    return __spreadProps(__spreadValues({}, options), { imag, real });
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/set-value-at-time-until-possible.js
  var setValueAtTimeUntilPossible = (audioParam, value, startTime) => {
    try {
      audioParam.setValueAtTime(value, startTime);
    } catch (err) {
      if (err.code !== 9) {
        throw err;
      }
      setValueAtTimeUntilPossible(audioParam, value, startTime + 1e-7);
    }
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/test-audio-buffer-source-node-start-method-consecutive-calls-support.js
  var testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport = (nativeContext) => {
    const nativeAudioBufferSourceNode = nativeContext.createBufferSource();
    nativeAudioBufferSourceNode.start();
    try {
      nativeAudioBufferSourceNode.start();
    } catch (e) {
      return true;
    }
    return false;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/test-audio-buffer-source-node-start-method-offset-clamping-support.js
  var testAudioBufferSourceNodeStartMethodOffsetClampingSupport = (nativeContext) => {
    const nativeAudioBufferSourceNode = nativeContext.createBufferSource();
    const nativeAudioBuffer = nativeContext.createBuffer(1, 1, 44100);
    nativeAudioBufferSourceNode.buffer = nativeAudioBuffer;
    try {
      nativeAudioBufferSourceNode.start(0, 1);
    } catch (e) {
      return false;
    }
    return true;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/test-audio-buffer-source-node-stop-method-nullified-buffer-support.js
  var testAudioBufferSourceNodeStopMethodNullifiedBufferSupport = (nativeContext) => {
    const nativeAudioBufferSourceNode = nativeContext.createBufferSource();
    nativeAudioBufferSourceNode.start();
    try {
      nativeAudioBufferSourceNode.stop();
    } catch (e) {
      return false;
    }
    return true;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/test-audio-scheduled-source-node-start-method-negative-parameters-support.js
  var testAudioScheduledSourceNodeStartMethodNegativeParametersSupport = (nativeContext) => {
    const nativeAudioBufferSourceNode = nativeContext.createOscillator();
    try {
      nativeAudioBufferSourceNode.start(-1);
    } catch (err) {
      return err instanceof RangeError;
    }
    return false;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/test-audio-scheduled-source-node-stop-method-consecutive-calls-support.js
  var testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport = (nativeContext) => {
    const nativeAudioBuffer = nativeContext.createBuffer(1, 1, 44100);
    const nativeAudioBufferSourceNode = nativeContext.createBufferSource();
    nativeAudioBufferSourceNode.buffer = nativeAudioBuffer;
    nativeAudioBufferSourceNode.start();
    nativeAudioBufferSourceNode.stop();
    try {
      nativeAudioBufferSourceNode.stop();
      return true;
    } catch (e) {
      return false;
    }
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/test-audio-scheduled-source-node-stop-method-negative-parameters-support.js
  var testAudioScheduledSourceNodeStopMethodNegativeParametersSupport = (nativeContext) => {
    const nativeAudioBufferSourceNode = nativeContext.createOscillator();
    try {
      nativeAudioBufferSourceNode.stop(-1);
    } catch (err) {
      return err instanceof RangeError;
    }
    return false;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/test-audio-worklet-node-options-clonability.js
  var testAudioWorkletNodeOptionsClonability = (audioWorkletNodeOptions) => {
    const { port1, port2 } = new MessageChannel();
    try {
      port1.postMessage(audioWorkletNodeOptions);
    } finally {
      port1.close();
      port2.close();
    }
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/wrap-audio-buffer-source-node-start-method-offset-clamping.js
  var wrapAudioBufferSourceNodeStartMethodOffsetClamping = (nativeAudioBufferSourceNode) => {
    nativeAudioBufferSourceNode.start = ((start2) => {
      return (when = 0, offset = 0, duration) => {
        const buffer = nativeAudioBufferSourceNode.buffer;
        const clampedOffset = buffer === null ? offset : Math.min(buffer.duration, offset);
        if (buffer !== null && clampedOffset > buffer.duration - 0.5 / nativeAudioBufferSourceNode.context.sampleRate) {
          start2.call(nativeAudioBufferSourceNode, when, 0, 0);
        } else {
          start2.call(nativeAudioBufferSourceNode, when, clampedOffset, duration);
        }
      };
    })(nativeAudioBufferSourceNode.start);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/wrap-audio-scheduled-source-node-stop-method-consecutive-calls.js
  var wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls = (nativeAudioScheduledSourceNode, nativeContext) => {
    const nativeGainNode = nativeContext.createGain();
    nativeAudioScheduledSourceNode.connect(nativeGainNode);
    const disconnectGainNode = ((disconnect2) => {
      return () => {
        disconnect2.call(nativeAudioScheduledSourceNode, nativeGainNode);
        nativeAudioScheduledSourceNode.removeEventListener("ended", disconnectGainNode);
      };
    })(nativeAudioScheduledSourceNode.disconnect);
    nativeAudioScheduledSourceNode.addEventListener("ended", disconnectGainNode);
    interceptConnections(nativeAudioScheduledSourceNode, nativeGainNode);
    nativeAudioScheduledSourceNode.stop = ((stop) => {
      let isStopped = false;
      return (when = 0) => {
        if (isStopped) {
          try {
            stop.call(nativeAudioScheduledSourceNode, when);
          } catch (e) {
            nativeGainNode.gain.setValueAtTime(0, when);
          }
        } else {
          stop.call(nativeAudioScheduledSourceNode, when);
          isStopped = true;
        }
      };
    })(nativeAudioScheduledSourceNode.stop);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/wrap-event-listener.js
  var wrapEventListener = (target, eventListener) => {
    return (event) => {
      const descriptor = { value: target };
      Object.defineProperties(event, {
        currentTarget: descriptor,
        target: descriptor
      });
      if (typeof eventListener === "function") {
        return eventListener.call(target, event);
      }
      return eventListener.handleEvent.call(target, event);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/module.js
  var addActiveInputConnectionToAudioNode = createAddActiveInputConnectionToAudioNode(insertElementInSet);
  var addPassiveInputConnectionToAudioNode = createAddPassiveInputConnectionToAudioNode(insertElementInSet);
  var deleteActiveInputConnectionToAudioNode = createDeleteActiveInputConnectionToAudioNode(pickElementFromSet);
  var audioNodeTailTimeStore = new WeakMap();
  var getAudioNodeTailTime = createGetAudioNodeTailTime(audioNodeTailTimeStore);
  var cacheTestResult = createCacheTestResult(new Map(), new WeakMap());
  var window2 = createWindow();
  var createNativeAnalyserNode = createNativeAnalyserNodeFactory(cacheTestResult, createIndexSizeError);
  var getAudioNodeRenderer = createGetAudioNodeRenderer(getAudioNodeConnections);
  var renderInputsOfAudioNode = createRenderInputsOfAudioNode(getAudioNodeConnections, getAudioNodeRenderer, isPartOfACycle);
  var createAnalyserNodeRenderer = createAnalyserNodeRendererFactory(createNativeAnalyserNode, getNativeAudioNode, renderInputsOfAudioNode);
  var getNativeContext = createGetNativeContext(CONTEXT_STORE);
  var nativeOfflineAudioContextConstructor = createNativeOfflineAudioContextConstructor(window2);
  var isNativeOfflineAudioContext = createIsNativeOfflineAudioContext(nativeOfflineAudioContextConstructor);
  var audioParamAudioNodeStore = new WeakMap();
  var eventTargetConstructor = createEventTargetConstructor(wrapEventListener);
  var nativeAudioContextConstructor = createNativeAudioContextConstructor(window2);
  var isNativeAudioContext = createIsNativeAudioContext(nativeAudioContextConstructor);
  var isNativeAudioNode2 = createIsNativeAudioNode(window2);
  var isNativeAudioParam = createIsNativeAudioParam(window2);
  var nativeAudioWorkletNodeConstructor = createNativeAudioWorkletNodeConstructor(window2);
  var audioNodeConstructor = createAudioNodeConstructor(createAddAudioNodeConnections(AUDIO_NODE_CONNECTIONS_STORE), createAddConnectionToAudioNode(addActiveInputConnectionToAudioNode, addPassiveInputConnectionToAudioNode, connectNativeAudioNodeToNativeAudioNode, deleteActiveInputConnectionToAudioNode, disconnectNativeAudioNodeFromNativeAudioNode, getAudioNodeConnections, getAudioNodeTailTime, getEventListenersOfAudioNode, getNativeAudioNode, insertElementInSet, isActiveAudioNode, isPartOfACycle, isPassiveAudioNode), cacheTestResult, createIncrementCycleCounterFactory(CYCLE_COUNTERS, disconnectNativeAudioNodeFromNativeAudioNode, getAudioNodeConnections, getNativeAudioNode, getNativeAudioParam, isActiveAudioNode), createIndexSizeError, createInvalidAccessError, createNotSupportedError, createDecrementCycleCounter(connectNativeAudioNodeToNativeAudioNode, CYCLE_COUNTERS, getAudioNodeConnections, getNativeAudioNode, getNativeAudioParam, getNativeContext, isActiveAudioNode, isNativeOfflineAudioContext), createDetectCycles(audioParamAudioNodeStore, getAudioNodeConnections, getValueForKey), eventTargetConstructor, getNativeContext, isNativeAudioContext, isNativeAudioNode2, isNativeAudioParam, isNativeOfflineAudioContext, nativeAudioWorkletNodeConstructor);
  var analyserNodeConstructor = createAnalyserNodeConstructor(audioNodeConstructor, createAnalyserNodeRenderer, createIndexSizeError, createNativeAnalyserNode, getNativeContext, isNativeOfflineAudioContext);
  var audioBufferStore = new WeakSet();
  var nativeAudioBufferConstructor = createNativeAudioBufferConstructor(window2);
  var convertNumberToUnsignedLong = createConvertNumberToUnsignedLong(new Uint32Array(1));
  var wrapAudioBufferCopyChannelMethods = createWrapAudioBufferCopyChannelMethods(convertNumberToUnsignedLong, createIndexSizeError);
  var wrapAudioBufferCopyChannelMethodsOutOfBounds = createWrapAudioBufferCopyChannelMethodsOutOfBounds(convertNumberToUnsignedLong);
  var audioBufferConstructor = createAudioBufferConstructor(audioBufferStore, cacheTestResult, createNotSupportedError, nativeAudioBufferConstructor, nativeOfflineAudioContextConstructor, createTestAudioBufferConstructorSupport(nativeAudioBufferConstructor), wrapAudioBufferCopyChannelMethods, wrapAudioBufferCopyChannelMethodsOutOfBounds);
  var addSilentConnection = createAddSilentConnection(createNativeGainNode);
  var renderInputsOfAudioParam = createRenderInputsOfAudioParam(getAudioNodeRenderer, getAudioParamConnections, isPartOfACycle);
  var connectAudioParam = createConnectAudioParam(renderInputsOfAudioParam);
  var createNativeAudioBufferSourceNode = createNativeAudioBufferSourceNodeFactory(addSilentConnection, cacheTestResult, testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport, testAudioBufferSourceNodeStartMethodOffsetClampingSupport, testAudioBufferSourceNodeStopMethodNullifiedBufferSupport, testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport, wrapAudioBufferSourceNodeStartMethodOffsetClamping, createWrapAudioBufferSourceNodeStopMethodNullifiedBuffer(overwriteAccessors), wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls);
  var renderAutomation = createRenderAutomation(createGetAudioParamRenderer(getAudioParamConnections), renderInputsOfAudioParam);
  var createAudioBufferSourceNodeRenderer = createAudioBufferSourceNodeRendererFactory(connectAudioParam, createNativeAudioBufferSourceNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode);
  var createAudioParam = createAudioParamFactory(createAddAudioParamConnections(AUDIO_PARAM_CONNECTIONS_STORE), audioParamAudioNodeStore, AUDIO_PARAM_STORE, createAudioParamRenderer, import_automation_events2.createCancelAndHoldAutomationEvent, import_automation_events2.createCancelScheduledValuesAutomationEvent, import_automation_events2.createExponentialRampToValueAutomationEvent, import_automation_events2.createLinearRampToValueAutomationEvent, import_automation_events2.createSetTargetAutomationEvent, import_automation_events2.createSetValueAutomationEvent, import_automation_events2.createSetValueCurveAutomationEvent, nativeAudioContextConstructor, setValueAtTimeUntilPossible);
  var audioBufferSourceNodeConstructor = createAudioBufferSourceNodeConstructor(audioNodeConstructor, createAudioBufferSourceNodeRenderer, createAudioParam, createInvalidStateError, createNativeAudioBufferSourceNode, getNativeContext, isNativeOfflineAudioContext, wrapEventListener);
  var audioDestinationNodeConstructor = createAudioDestinationNodeConstructor(audioNodeConstructor, createAudioDestinationNodeRenderer, createIndexSizeError, createInvalidStateError, createNativeAudioDestinationNodeFactory(createNativeGainNode, overwriteAccessors), getNativeContext, isNativeOfflineAudioContext, renderInputsOfAudioNode);
  var createBiquadFilterNodeRenderer = createBiquadFilterNodeRendererFactory(connectAudioParam, createNativeBiquadFilterNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode);
  var setAudioNodeTailTime = createSetAudioNodeTailTime(audioNodeTailTimeStore);
  var biquadFilterNodeConstructor = createBiquadFilterNodeConstructor(audioNodeConstructor, createAudioParam, createBiquadFilterNodeRenderer, createInvalidAccessError, createNativeBiquadFilterNode, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime);
  var monitorConnections = createMonitorConnections(insertElementInSet, isNativeAudioNode2);
  var wrapChannelMergerNode = createWrapChannelMergerNode(createInvalidStateError, monitorConnections);
  var createNativeChannelMergerNode = createNativeChannelMergerNodeFactory(nativeAudioContextConstructor, wrapChannelMergerNode);
  var createChannelMergerNodeRenderer = createChannelMergerNodeRendererFactory(createNativeChannelMergerNode, getNativeAudioNode, renderInputsOfAudioNode);
  var channelMergerNodeConstructor = createChannelMergerNodeConstructor(audioNodeConstructor, createChannelMergerNodeRenderer, createNativeChannelMergerNode, getNativeContext, isNativeOfflineAudioContext);
  var createChannelSplitterNodeRenderer = createChannelSplitterNodeRendererFactory(createNativeChannelSplitterNode, getNativeAudioNode, renderInputsOfAudioNode);
  var channelSplitterNodeConstructor = createChannelSplitterNodeConstructor(audioNodeConstructor, createChannelSplitterNodeRenderer, createNativeChannelSplitterNode, getNativeContext, isNativeOfflineAudioContext, sanitizeChannelSplitterOptions);
  var createNativeConstantSourceNodeFaker = createNativeConstantSourceNodeFakerFactory(addSilentConnection, createNativeAudioBufferSourceNode, createNativeGainNode, monitorConnections);
  var createNativeConstantSourceNode = createNativeConstantSourceNodeFactory(addSilentConnection, cacheTestResult, createNativeConstantSourceNodeFaker, testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport);
  var createConstantSourceNodeRenderer = createConstantSourceNodeRendererFactory(connectAudioParam, createNativeConstantSourceNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode);
  var constantSourceNodeConstructor = createConstantSourceNodeConstructor(audioNodeConstructor, createAudioParam, createConstantSourceNodeRenderer, createNativeConstantSourceNode, getNativeContext, isNativeOfflineAudioContext, wrapEventListener);
  var createNativeConvolverNode = createNativeConvolverNodeFactory(createNotSupportedError, overwriteAccessors);
  var createConvolverNodeRenderer = createConvolverNodeRendererFactory(createNativeConvolverNode, getNativeAudioNode, renderInputsOfAudioNode);
  var convolverNodeConstructor = createConvolverNodeConstructor(audioNodeConstructor, createConvolverNodeRenderer, createNativeConvolverNode, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime);
  var createDelayNodeRenderer = createDelayNodeRendererFactory(connectAudioParam, createNativeDelayNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode);
  var delayNodeConstructor = createDelayNodeConstructor(audioNodeConstructor, createAudioParam, createDelayNodeRenderer, createNativeDelayNode, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime);
  var createNativeDynamicsCompressorNode = createNativeDynamicsCompressorNodeFactory(createNotSupportedError);
  var createDynamicsCompressorNodeRenderer = createDynamicsCompressorNodeRendererFactory(connectAudioParam, createNativeDynamicsCompressorNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode);
  var dynamicsCompressorNodeConstructor = createDynamicsCompressorNodeConstructor(audioNodeConstructor, createAudioParam, createDynamicsCompressorNodeRenderer, createNativeDynamicsCompressorNode, createNotSupportedError, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime);
  var createGainNodeRenderer = createGainNodeRendererFactory(connectAudioParam, createNativeGainNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode);
  var gainNodeConstructor = createGainNodeConstructor(audioNodeConstructor, createAudioParam, createGainNodeRenderer, createNativeGainNode, getNativeContext, isNativeOfflineAudioContext);
  var createNativeIIRFilterNodeFaker = createNativeIIRFilterNodeFakerFactory(createInvalidAccessError, createInvalidStateError, createNativeScriptProcessorNode, createNotSupportedError);
  var renderNativeOfflineAudioContext = createRenderNativeOfflineAudioContext(cacheTestResult, createNativeGainNode, createNativeScriptProcessorNode, createTestOfflineAudioContextCurrentTimeSupport(createNativeGainNode, nativeOfflineAudioContextConstructor));
  var createIIRFilterNodeRenderer = createIIRFilterNodeRendererFactory(createNativeAudioBufferSourceNode, getNativeAudioNode, nativeOfflineAudioContextConstructor, renderInputsOfAudioNode, renderNativeOfflineAudioContext);
  var createNativeIIRFilterNode = createNativeIIRFilterNodeFactory(createNativeIIRFilterNodeFaker);
  var iIRFilterNodeConstructor = createIIRFilterNodeConstructor(audioNodeConstructor, createNativeIIRFilterNode, createIIRFilterNodeRenderer, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime);
  var createAudioListener = createAudioListenerFactory(createAudioParam, createNativeChannelMergerNode, createNativeConstantSourceNode, createNativeScriptProcessorNode, createNotSupportedError, getFirstSample, isNativeOfflineAudioContext, overwriteAccessors);
  var unrenderedAudioWorkletNodeStore = new WeakMap();
  var minimalBaseAudioContextConstructor = createMinimalBaseAudioContextConstructor(audioDestinationNodeConstructor, createAudioListener, eventTargetConstructor, isNativeOfflineAudioContext, unrenderedAudioWorkletNodeStore, wrapEventListener);
  var createNativeOscillatorNode = createNativeOscillatorNodeFactory(addSilentConnection, cacheTestResult, testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport, wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls);
  var createOscillatorNodeRenderer = createOscillatorNodeRendererFactory(connectAudioParam, createNativeOscillatorNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode);
  var oscillatorNodeConstructor = createOscillatorNodeConstructor(audioNodeConstructor, createAudioParam, createNativeOscillatorNode, createOscillatorNodeRenderer, getNativeContext, isNativeOfflineAudioContext, wrapEventListener);
  var createConnectedNativeAudioBufferSourceNode = createConnectedNativeAudioBufferSourceNodeFactory(createNativeAudioBufferSourceNode);
  var createNativeWaveShaperNodeFaker = createNativeWaveShaperNodeFakerFactory(createConnectedNativeAudioBufferSourceNode, createInvalidStateError, createNativeGainNode, isDCCurve, monitorConnections);
  var createNativeWaveShaperNode = createNativeWaveShaperNodeFactory(createConnectedNativeAudioBufferSourceNode, createInvalidStateError, createNativeWaveShaperNodeFaker, isDCCurve, monitorConnections, nativeAudioContextConstructor, overwriteAccessors);
  var createNativePannerNodeFaker = createNativePannerNodeFakerFactory(connectNativeAudioNodeToNativeAudioNode, createInvalidStateError, createNativeChannelMergerNode, createNativeGainNode, createNativeScriptProcessorNode, createNativeWaveShaperNode, createNotSupportedError, disconnectNativeAudioNodeFromNativeAudioNode, getFirstSample, monitorConnections);
  var createNativePannerNode = createNativePannerNodeFactory(createNativePannerNodeFaker);
  var createPannerNodeRenderer = createPannerNodeRendererFactory(connectAudioParam, createNativeChannelMergerNode, createNativeConstantSourceNode, createNativeGainNode, createNativePannerNode, getNativeAudioNode, nativeOfflineAudioContextConstructor, renderAutomation, renderInputsOfAudioNode, renderNativeOfflineAudioContext);
  var pannerNodeConstructor = createPannerNodeConstructor(audioNodeConstructor, createAudioParam, createNativePannerNode, createPannerNodeRenderer, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime);
  var createNativePeriodicWave = createNativePeriodicWaveFactory(createIndexSizeError);
  var periodicWaveConstructor = createPeriodicWaveConstructor(createNativePeriodicWave, getNativeContext, new WeakSet(), sanitizePeriodicWaveOptions);
  var nativeStereoPannerNodeFakerFactory = createNativeStereoPannerNodeFakerFactory(createNativeChannelMergerNode, createNativeChannelSplitterNode, createNativeGainNode, createNativeWaveShaperNode, createNotSupportedError, monitorConnections);
  var createNativeStereoPannerNode = createNativeStereoPannerNodeFactory(nativeStereoPannerNodeFakerFactory, createNotSupportedError);
  var createStereoPannerNodeRenderer = createStereoPannerNodeRendererFactory(connectAudioParam, createNativeStereoPannerNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode);
  var stereoPannerNodeConstructor = createStereoPannerNodeConstructor(audioNodeConstructor, createAudioParam, createNativeStereoPannerNode, createStereoPannerNodeRenderer, getNativeContext, isNativeOfflineAudioContext);
  var createWaveShaperNodeRenderer = createWaveShaperNodeRendererFactory(createNativeWaveShaperNode, getNativeAudioNode, renderInputsOfAudioNode);
  var waveShaperNodeConstructor = createWaveShaperNodeConstructor(audioNodeConstructor, createInvalidStateError, createNativeWaveShaperNode, createWaveShaperNodeRenderer, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime);
  var isSecureContext = createIsSecureContext(window2);
  var exposeCurrentFrameAndCurrentTime = createExposeCurrentFrameAndCurrentTime(window2);
  var backupOfflineAudioContextStore = new WeakMap();
  var getOrCreateBackupOfflineAudioContext = createGetOrCreateBackupOfflineAudioContext(backupOfflineAudioContextStore, nativeOfflineAudioContextConstructor);
  var addAudioWorkletModule = isSecureContext ? createAddAudioWorkletModule(cacheTestResult, createNotSupportedError, createEvaluateSource(window2), exposeCurrentFrameAndCurrentTime, createFetchSource(createAbortError), getNativeContext, getOrCreateBackupOfflineAudioContext, isNativeOfflineAudioContext, nativeAudioWorkletNodeConstructor, new WeakMap(), new WeakMap(), createTestAudioWorkletProcessorPostMessageSupport(nativeAudioWorkletNodeConstructor, nativeOfflineAudioContextConstructor), window2) : void 0;
  var isNativeContext = createIsNativeContext(isNativeAudioContext, isNativeOfflineAudioContext);
  var decodeAudioData = createDecodeAudioData(audioBufferStore, cacheTestResult, createDataCloneError, createEncodingError, new WeakSet(), getNativeContext, isNativeContext, testAudioBufferCopyChannelMethodsOutOfBoundsSupport, testPromiseSupport, wrapAudioBufferCopyChannelMethods, wrapAudioBufferCopyChannelMethodsOutOfBounds);
  var baseAudioContextConstructor = createBaseAudioContextConstructor(addAudioWorkletModule, analyserNodeConstructor, audioBufferConstructor, audioBufferSourceNodeConstructor, biquadFilterNodeConstructor, channelMergerNodeConstructor, channelSplitterNodeConstructor, constantSourceNodeConstructor, convolverNodeConstructor, decodeAudioData, delayNodeConstructor, dynamicsCompressorNodeConstructor, gainNodeConstructor, iIRFilterNodeConstructor, minimalBaseAudioContextConstructor, oscillatorNodeConstructor, pannerNodeConstructor, periodicWaveConstructor, stereoPannerNodeConstructor, waveShaperNodeConstructor);
  var mediaElementAudioSourceNodeConstructor = createMediaElementAudioSourceNodeConstructor(audioNodeConstructor, createNativeMediaElementAudioSourceNode, getNativeContext, isNativeOfflineAudioContext);
  var mediaStreamAudioDestinationNodeConstructor = createMediaStreamAudioDestinationNodeConstructor(audioNodeConstructor, createNativeMediaStreamAudioDestinationNode, getNativeContext, isNativeOfflineAudioContext);
  var mediaStreamAudioSourceNodeConstructor = createMediaStreamAudioSourceNodeConstructor(audioNodeConstructor, createNativeMediaStreamAudioSourceNode, getNativeContext, isNativeOfflineAudioContext);
  var createNativeMediaStreamTrackAudioSourceNode = createNativeMediaStreamTrackAudioSourceNodeFactory(createInvalidStateError, isNativeOfflineAudioContext);
  var mediaStreamTrackAudioSourceNodeConstructor = createMediaStreamTrackAudioSourceNodeConstructor(audioNodeConstructor, createNativeMediaStreamTrackAudioSourceNode, getNativeContext);
  var audioContextConstructor = createAudioContextConstructor(baseAudioContextConstructor, createInvalidStateError, createNotSupportedError, createUnknownError, mediaElementAudioSourceNodeConstructor, mediaStreamAudioDestinationNodeConstructor, mediaStreamAudioSourceNodeConstructor, mediaStreamTrackAudioSourceNodeConstructor, nativeAudioContextConstructor);
  var getUnrenderedAudioWorkletNodes = createGetUnrenderedAudioWorkletNodes(unrenderedAudioWorkletNodeStore);
  var addUnrenderedAudioWorkletNode = createAddUnrenderedAudioWorkletNode(getUnrenderedAudioWorkletNodes);
  var connectMultipleOutputs = createConnectMultipleOutputs(createIndexSizeError);
  var deleteUnrenderedAudioWorkletNode = createDeleteUnrenderedAudioWorkletNode(getUnrenderedAudioWorkletNodes);
  var disconnectMultipleOutputs = createDisconnectMultipleOutputs(createIndexSizeError);
  var activeAudioWorkletNodeInputsStore = new WeakMap();
  var getActiveAudioWorkletNodeInputs = createGetActiveAudioWorkletNodeInputs(activeAudioWorkletNodeInputsStore, getValueForKey);
  var createNativeAudioWorkletNodeFaker = createNativeAudioWorkletNodeFakerFactory(connectMultipleOutputs, createIndexSizeError, createInvalidStateError, createNativeChannelMergerNode, createNativeChannelSplitterNode, createNativeConstantSourceNode, createNativeGainNode, createNativeScriptProcessorNode, createNotSupportedError, disconnectMultipleOutputs, exposeCurrentFrameAndCurrentTime, getActiveAudioWorkletNodeInputs, monitorConnections);
  var createNativeAudioWorkletNode = createNativeAudioWorkletNodeFactory(createInvalidStateError, createNativeAudioWorkletNodeFaker, createNativeGainNode, createNotSupportedError, monitorConnections);
  var createAudioWorkletNodeRenderer = createAudioWorkletNodeRendererFactory(connectAudioParam, connectMultipleOutputs, createNativeAudioBufferSourceNode, createNativeChannelMergerNode, createNativeChannelSplitterNode, createNativeConstantSourceNode, createNativeGainNode, deleteUnrenderedAudioWorkletNode, disconnectMultipleOutputs, exposeCurrentFrameAndCurrentTime, getNativeAudioNode, nativeAudioWorkletNodeConstructor, nativeOfflineAudioContextConstructor, renderAutomation, renderInputsOfAudioNode, renderNativeOfflineAudioContext);
  var getBackupOfflineAudioContext = createGetBackupOfflineAudioContext(backupOfflineAudioContextStore);
  var setActiveAudioWorkletNodeInputs = createSetActiveAudioWorkletNodeInputs(activeAudioWorkletNodeInputsStore);
  var audioWorkletNodeConstructor = isSecureContext ? createAudioWorkletNodeConstructor(addUnrenderedAudioWorkletNode, audioNodeConstructor, createAudioParam, createAudioWorkletNodeRenderer, createNativeAudioWorkletNode, getAudioNodeConnections, getBackupOfflineAudioContext, getNativeContext, isNativeOfflineAudioContext, nativeAudioWorkletNodeConstructor, sanitizeAudioWorkletNodeOptions, setActiveAudioWorkletNodeInputs, testAudioWorkletNodeOptionsClonability, wrapEventListener) : void 0;
  var minimalAudioContextConstructor = createMinimalAudioContextConstructor(createInvalidStateError, createNotSupportedError, createUnknownError, minimalBaseAudioContextConstructor, nativeAudioContextConstructor);
  var createNativeOfflineAudioContext = createCreateNativeOfflineAudioContext(createNotSupportedError, nativeOfflineAudioContextConstructor);
  var startRendering = createStartRendering(audioBufferStore, cacheTestResult, getAudioNodeRenderer, getUnrenderedAudioWorkletNodes, renderNativeOfflineAudioContext, testAudioBufferCopyChannelMethodsOutOfBoundsSupport, wrapAudioBufferCopyChannelMethods, wrapAudioBufferCopyChannelMethodsOutOfBounds);
  var minimalOfflineAudioContextConstructor = createMinimalOfflineAudioContextConstructor(cacheTestResult, createInvalidStateError, createNativeOfflineAudioContext, minimalBaseAudioContextConstructor, startRendering);
  var offlineAudioContextConstructor = createOfflineAudioContextConstructor(baseAudioContextConstructor, cacheTestResult, createInvalidStateError, createNativeOfflineAudioContext, startRendering);
  var isAnyAudioContext = createIsAnyAudioContext(CONTEXT_STORE, isNativeAudioContext);
  var isAnyAudioNode = createIsAnyAudioNode(AUDIO_NODE_STORE, isNativeAudioNode2);
  var isAnyAudioParam = createIsAnyAudioParam(AUDIO_PARAM_STORE, isNativeAudioParam);
  var isAnyOfflineAudioContext = createIsAnyOfflineAudioContext(CONTEXT_STORE, isNativeOfflineAudioContext);

  // node_modules/tone/build/esm/core/util/Debug.js
  function assert(statement, error) {
    if (!statement) {
      throw new Error(error);
    }
  }
  function assertRange(value, gte, lte = Infinity) {
    if (!(gte <= value && value <= lte)) {
      throw new RangeError(`Value must be within [${gte}, ${lte}], got: ${value}`);
    }
  }
  function assertContextRunning(context2) {
    if (!context2.isOffline && context2.state !== "running") {
      warn('The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.');
    }
  }
  var defaultLogger = console;
  function log(...args) {
    defaultLogger.log(...args);
  }
  function warn(...args) {
    defaultLogger.warn(...args);
  }

  // node_modules/tone/build/esm/core/util/TypeCheck.js
  function isUndef(arg) {
    return typeof arg === "undefined";
  }
  function isDefined(arg) {
    return !isUndef(arg);
  }
  function isFunction(arg) {
    return typeof arg === "function";
  }
  function isNumber(arg) {
    return typeof arg === "number";
  }
  function isObject(arg) {
    return Object.prototype.toString.call(arg) === "[object Object]" && arg.constructor === Object;
  }
  function isBoolean(arg) {
    return typeof arg === "boolean";
  }
  function isArray(arg) {
    return Array.isArray(arg);
  }
  function isString(arg) {
    return typeof arg === "string";
  }
  function isNote(arg) {
    return isString(arg) && /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(arg);
  }

  // node_modules/tone/build/esm/core/context/AudioContext.js
  function createAudioContext(options) {
    return new audioContextConstructor(options);
  }
  function createOfflineAudioContext(channels, length, sampleRate) {
    return new offlineAudioContextConstructor(channels, length, sampleRate);
  }
  var theWindow = typeof self === "object" ? self : null;
  var hasAudioContext = theWindow && (theWindow.hasOwnProperty("AudioContext") || theWindow.hasOwnProperty("webkitAudioContext"));
  function createAudioWorkletNode(context2, name, options) {
    assert(isDefined(audioWorkletNodeConstructor), "This node only works in a secure context (https or localhost)");
    return new audioWorkletNodeConstructor(context2, name, options);
  }

  // node_modules/tone/node_modules/tslib/modules/index.js
  var import_tslib = __toModule(require_tslib());
  var {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __metadata,
    __awaiter,
    __generator,
    __exportStar,
    __createBinding,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet
  } = import_tslib.default;

  // node_modules/tone/build/esm/core/clock/Ticker.js
  var Ticker = class {
    constructor(callback, type, updateInterval) {
      this._callback = callback;
      this._type = type;
      this._updateInterval = updateInterval;
      this._createClock();
    }
    _createWorker() {
      const blob = new Blob([
        `
			// the initial timeout time
			let timeoutTime =  ${(this._updateInterval * 1e3).toFixed(1)};
			// onmessage callback
			self.onmessage = function(msg){
				timeoutTime = parseInt(msg.data);
			};
			// the tick function which posts a message
			// and schedules a new tick
			function tick(){
				setTimeout(tick, timeoutTime);
				self.postMessage('tick');
			}
			// call tick initially
			tick();
			`
      ], { type: "text/javascript" });
      const blobUrl = URL.createObjectURL(blob);
      const worker = new Worker(blobUrl);
      worker.onmessage = this._callback.bind(this);
      this._worker = worker;
    }
    _createTimeout() {
      this._timeout = setTimeout(() => {
        this._createTimeout();
        this._callback();
      }, this._updateInterval * 1e3);
    }
    _createClock() {
      if (this._type === "worker") {
        try {
          this._createWorker();
        } catch (e) {
          this._type = "timeout";
          this._createClock();
        }
      } else if (this._type === "timeout") {
        this._createTimeout();
      }
    }
    _disposeClock() {
      if (this._timeout) {
        clearTimeout(this._timeout);
        this._timeout = 0;
      }
      if (this._worker) {
        this._worker.terminate();
        this._worker.onmessage = null;
      }
    }
    get updateInterval() {
      return this._updateInterval;
    }
    set updateInterval(interval) {
      this._updateInterval = Math.max(interval, 128 / 44100);
      if (this._type === "worker") {
        this._worker.postMessage(Math.max(interval * 1e3, 1));
      }
    }
    get type() {
      return this._type;
    }
    set type(type) {
      this._disposeClock();
      this._type = type;
      this._createClock();
    }
    dispose() {
      this._disposeClock();
    }
  };

  // node_modules/tone/build/esm/core/util/AdvancedTypeCheck.js
  function isAudioParam(arg) {
    return isAnyAudioParam(arg);
  }
  function isAudioNode2(arg) {
    return isAnyAudioNode(arg);
  }
  function isOfflineAudioContext(arg) {
    return isAnyOfflineAudioContext(arg);
  }
  function isAudioContext(arg) {
    return isAnyAudioContext(arg);
  }
  function isAudioBuffer(arg) {
    return arg instanceof AudioBuffer;
  }

  // node_modules/tone/build/esm/core/util/Defaults.js
  function noCopy(key, arg) {
    return key === "value" || isAudioParam(arg) || isAudioNode2(arg) || isAudioBuffer(arg);
  }
  function deepMerge(target, ...sources) {
    if (!sources.length) {
      return target;
    }
    const source = sources.shift();
    if (isObject(target) && isObject(source)) {
      for (const key in source) {
        if (noCopy(key, source[key])) {
          target[key] = source[key];
        } else if (isObject(source[key])) {
          if (!target[key]) {
            Object.assign(target, { [key]: {} });
          }
          deepMerge(target[key], source[key]);
        } else {
          Object.assign(target, { [key]: source[key] });
        }
      }
    }
    return deepMerge(target, ...sources);
  }
  function deepEquals(arrayA, arrayB) {
    return arrayA.length === arrayB.length && arrayA.every((element, index) => arrayB[index] === element);
  }
  function optionsFromArguments(defaults, argsArray, keys = [], objKey) {
    const opts = {};
    const args = Array.from(argsArray);
    if (isObject(args[0]) && objKey && !Reflect.has(args[0], objKey)) {
      const partOfDefaults = Object.keys(args[0]).some((key) => Reflect.has(defaults, key));
      if (!partOfDefaults) {
        deepMerge(opts, { [objKey]: args[0] });
        keys.splice(keys.indexOf(objKey), 1);
        args.shift();
      }
    }
    if (args.length === 1 && isObject(args[0])) {
      deepMerge(opts, args[0]);
    } else {
      for (let i = 0; i < keys.length; i++) {
        if (isDefined(args[i])) {
          opts[keys[i]] = args[i];
        }
      }
    }
    return deepMerge(defaults, opts);
  }
  function getDefaultsFromInstance(instance) {
    return instance.constructor.getDefaults();
  }
  function defaultArg(given, fallback) {
    if (isUndef(given)) {
      return fallback;
    } else {
      return given;
    }
  }
  function omitFromObject(obj, omit) {
    omit.forEach((prop) => {
      if (Reflect.has(obj, prop)) {
        delete obj[prop];
      }
    });
    return obj;
  }

  // node_modules/tone/build/esm/core/Tone.js
  var Tone = class {
    constructor() {
      this.debug = false;
      this._wasDisposed = false;
    }
    static getDefaults() {
      return {};
    }
    log(...args) {
      if (this.debug || theWindow && this.toString() === theWindow.TONE_DEBUG_CLASS) {
        log(this, ...args);
      }
    }
    dispose() {
      this._wasDisposed = true;
      return this;
    }
    get disposed() {
      return this._wasDisposed;
    }
    toString() {
      return this.name;
    }
  };
  Tone.version = version;

  // node_modules/tone/build/esm/core/util/Math.js
  var EPSILON = 1e-6;
  function GT(a, b) {
    return a > b + EPSILON;
  }
  function GTE(a, b) {
    return GT(a, b) || EQ(a, b);
  }
  function LT(a, b) {
    return a + EPSILON < b;
  }
  function EQ(a, b) {
    return Math.abs(a - b) < EPSILON;
  }
  function clamp(value, min, max) {
    return Math.max(Math.min(value, max), min);
  }

  // node_modules/tone/build/esm/core/util/Timeline.js
  var Timeline = class extends Tone {
    constructor() {
      super();
      this.name = "Timeline";
      this._timeline = [];
      const options = optionsFromArguments(Timeline.getDefaults(), arguments, ["memory"]);
      this.memory = options.memory;
      this.increasing = options.increasing;
    }
    static getDefaults() {
      return {
        memory: Infinity,
        increasing: false
      };
    }
    get length() {
      return this._timeline.length;
    }
    add(event) {
      assert(Reflect.has(event, "time"), "Timeline: events must have a time attribute");
      event.time = event.time.valueOf();
      if (this.increasing && this.length) {
        const lastValue = this._timeline[this.length - 1];
        assert(GTE(event.time, lastValue.time), "The time must be greater than or equal to the last scheduled time");
        this._timeline.push(event);
      } else {
        const index = this._search(event.time);
        this._timeline.splice(index + 1, 0, event);
      }
      if (this.length > this.memory) {
        const diff = this.length - this.memory;
        this._timeline.splice(0, diff);
      }
      return this;
    }
    remove(event) {
      const index = this._timeline.indexOf(event);
      if (index !== -1) {
        this._timeline.splice(index, 1);
      }
      return this;
    }
    get(time, param = "time") {
      const index = this._search(time, param);
      if (index !== -1) {
        return this._timeline[index];
      } else {
        return null;
      }
    }
    peek() {
      return this._timeline[0];
    }
    shift() {
      return this._timeline.shift();
    }
    getAfter(time, param = "time") {
      const index = this._search(time, param);
      if (index + 1 < this._timeline.length) {
        return this._timeline[index + 1];
      } else {
        return null;
      }
    }
    getBefore(time) {
      const len = this._timeline.length;
      if (len > 0 && this._timeline[len - 1].time < time) {
        return this._timeline[len - 1];
      }
      const index = this._search(time);
      if (index - 1 >= 0) {
        return this._timeline[index - 1];
      } else {
        return null;
      }
    }
    cancel(after) {
      if (this._timeline.length > 1) {
        let index = this._search(after);
        if (index >= 0) {
          if (EQ(this._timeline[index].time, after)) {
            for (let i = index; i >= 0; i--) {
              if (EQ(this._timeline[i].time, after)) {
                index = i;
              } else {
                break;
              }
            }
            this._timeline = this._timeline.slice(0, index);
          } else {
            this._timeline = this._timeline.slice(0, index + 1);
          }
        } else {
          this._timeline = [];
        }
      } else if (this._timeline.length === 1) {
        if (GTE(this._timeline[0].time, after)) {
          this._timeline = [];
        }
      }
      return this;
    }
    cancelBefore(time) {
      const index = this._search(time);
      if (index >= 0) {
        this._timeline = this._timeline.slice(index + 1);
      }
      return this;
    }
    previousEvent(event) {
      const index = this._timeline.indexOf(event);
      if (index > 0) {
        return this._timeline[index - 1];
      } else {
        return null;
      }
    }
    _search(time, param = "time") {
      if (this._timeline.length === 0) {
        return -1;
      }
      let beginning = 0;
      const len = this._timeline.length;
      let end = len;
      if (len > 0 && this._timeline[len - 1][param] <= time) {
        return len - 1;
      }
      while (beginning < end) {
        let midPoint = Math.floor(beginning + (end - beginning) / 2);
        const event = this._timeline[midPoint];
        const nextEvent = this._timeline[midPoint + 1];
        if (EQ(event[param], time)) {
          for (let i = midPoint; i < this._timeline.length; i++) {
            const testEvent = this._timeline[i];
            if (EQ(testEvent[param], time)) {
              midPoint = i;
            } else {
              break;
            }
          }
          return midPoint;
        } else if (LT(event[param], time) && GT(nextEvent[param], time)) {
          return midPoint;
        } else if (GT(event[param], time)) {
          end = midPoint;
        } else {
          beginning = midPoint + 1;
        }
      }
      return -1;
    }
    _iterate(callback, lowerBound = 0, upperBound = this._timeline.length - 1) {
      this._timeline.slice(lowerBound, upperBound + 1).forEach(callback);
    }
    forEach(callback) {
      this._iterate(callback);
      return this;
    }
    forEachBefore(time, callback) {
      const upperBound = this._search(time);
      if (upperBound !== -1) {
        this._iterate(callback, 0, upperBound);
      }
      return this;
    }
    forEachAfter(time, callback) {
      const lowerBound = this._search(time);
      this._iterate(callback, lowerBound + 1);
      return this;
    }
    forEachBetween(startTime, endTime, callback) {
      let lowerBound = this._search(startTime);
      let upperBound = this._search(endTime);
      if (lowerBound !== -1 && upperBound !== -1) {
        if (this._timeline[lowerBound].time !== startTime) {
          lowerBound += 1;
        }
        if (this._timeline[upperBound].time === endTime) {
          upperBound -= 1;
        }
        this._iterate(callback, lowerBound, upperBound);
      } else if (lowerBound === -1) {
        this._iterate(callback, 0, upperBound);
      }
      return this;
    }
    forEachFrom(time, callback) {
      let lowerBound = this._search(time);
      while (lowerBound >= 0 && this._timeline[lowerBound].time >= time) {
        lowerBound--;
      }
      this._iterate(callback, lowerBound + 1);
      return this;
    }
    forEachAtTime(time, callback) {
      const upperBound = this._search(time);
      if (upperBound !== -1 && EQ(this._timeline[upperBound].time, time)) {
        let lowerBound = upperBound;
        for (let i = upperBound; i >= 0; i--) {
          if (EQ(this._timeline[i].time, time)) {
            lowerBound = i;
          } else {
            break;
          }
        }
        this._iterate((event) => {
          callback(event);
        }, lowerBound, upperBound);
      }
      return this;
    }
    dispose() {
      super.dispose();
      this._timeline = [];
      return this;
    }
  };

  // node_modules/tone/build/esm/core/context/ContextInitialization.js
  var notifyNewContext = [];
  function onContextInit(cb) {
    notifyNewContext.push(cb);
  }
  function initializeContext(ctx) {
    notifyNewContext.forEach((cb) => cb(ctx));
  }
  var notifyCloseContext = [];
  function onContextClose(cb) {
    notifyCloseContext.push(cb);
  }
  function closeContext(ctx) {
    notifyCloseContext.forEach((cb) => cb(ctx));
  }

  // node_modules/tone/build/esm/core/util/Emitter.js
  var Emitter = class extends Tone {
    constructor() {
      super(...arguments);
      this.name = "Emitter";
    }
    on(event, callback) {
      const events = event.split(/\W+/);
      events.forEach((eventName) => {
        if (isUndef(this._events)) {
          this._events = {};
        }
        if (!this._events.hasOwnProperty(eventName)) {
          this._events[eventName] = [];
        }
        this._events[eventName].push(callback);
      });
      return this;
    }
    once(event, callback) {
      const boundCallback = (...args) => {
        callback(...args);
        this.off(event, boundCallback);
      };
      this.on(event, boundCallback);
      return this;
    }
    off(event, callback) {
      const events = event.split(/\W+/);
      events.forEach((eventName) => {
        if (isUndef(this._events)) {
          this._events = {};
        }
        if (this._events.hasOwnProperty(event)) {
          if (isUndef(callback)) {
            this._events[event] = [];
          } else {
            const eventList = this._events[event];
            for (let i = eventList.length - 1; i >= 0; i--) {
              if (eventList[i] === callback) {
                eventList.splice(i, 1);
              }
            }
          }
        }
      });
      return this;
    }
    emit(event, ...args) {
      if (this._events) {
        if (this._events.hasOwnProperty(event)) {
          const eventList = this._events[event].slice(0);
          for (let i = 0, len = eventList.length; i < len; i++) {
            eventList[i].apply(this, args);
          }
        }
      }
      return this;
    }
    static mixin(constr) {
      ["on", "once", "off", "emit"].forEach((name) => {
        const property = Object.getOwnPropertyDescriptor(Emitter.prototype, name);
        Object.defineProperty(constr.prototype, name, property);
      });
    }
    dispose() {
      super.dispose();
      this._events = void 0;
      return this;
    }
  };

  // node_modules/tone/build/esm/core/context/BaseContext.js
  var BaseContext = class extends Emitter {
    constructor() {
      super(...arguments);
      this.isOffline = false;
    }
    toJSON() {
      return {};
    }
  };

  // node_modules/tone/build/esm/core/context/Context.js
  var Context = class extends BaseContext {
    constructor() {
      super();
      this.name = "Context";
      this._constants = new Map();
      this._timeouts = new Timeline();
      this._timeoutIds = 0;
      this._initialized = false;
      this.isOffline = false;
      this._workletModules = new Map();
      const options = optionsFromArguments(Context.getDefaults(), arguments, [
        "context"
      ]);
      if (options.context) {
        this._context = options.context;
      } else {
        this._context = createAudioContext({
          latencyHint: options.latencyHint
        });
      }
      this._ticker = new Ticker(this.emit.bind(this, "tick"), options.clockSource, options.updateInterval);
      this.on("tick", this._timeoutLoop.bind(this));
      this._context.onstatechange = () => {
        this.emit("statechange", this.state);
      };
      this._setLatencyHint(options.latencyHint);
      this.lookAhead = options.lookAhead;
    }
    static getDefaults() {
      return {
        clockSource: "worker",
        latencyHint: "interactive",
        lookAhead: 0.1,
        updateInterval: 0.05
      };
    }
    initialize() {
      if (!this._initialized) {
        initializeContext(this);
        this._initialized = true;
      }
      return this;
    }
    createAnalyser() {
      return this._context.createAnalyser();
    }
    createOscillator() {
      return this._context.createOscillator();
    }
    createBufferSource() {
      return this._context.createBufferSource();
    }
    createBiquadFilter() {
      return this._context.createBiquadFilter();
    }
    createBuffer(numberOfChannels, length, sampleRate) {
      return this._context.createBuffer(numberOfChannels, length, sampleRate);
    }
    createChannelMerger(numberOfInputs) {
      return this._context.createChannelMerger(numberOfInputs);
    }
    createChannelSplitter(numberOfOutputs) {
      return this._context.createChannelSplitter(numberOfOutputs);
    }
    createConstantSource() {
      return this._context.createConstantSource();
    }
    createConvolver() {
      return this._context.createConvolver();
    }
    createDelay(maxDelayTime) {
      return this._context.createDelay(maxDelayTime);
    }
    createDynamicsCompressor() {
      return this._context.createDynamicsCompressor();
    }
    createGain() {
      return this._context.createGain();
    }
    createIIRFilter(feedForward, feedback) {
      return this._context.createIIRFilter(feedForward, feedback);
    }
    createPanner() {
      return this._context.createPanner();
    }
    createPeriodicWave(real, imag, constraints) {
      return this._context.createPeriodicWave(real, imag, constraints);
    }
    createStereoPanner() {
      return this._context.createStereoPanner();
    }
    createWaveShaper() {
      return this._context.createWaveShaper();
    }
    createMediaStreamSource(stream) {
      assert(isAudioContext(this._context), "Not available if OfflineAudioContext");
      const context2 = this._context;
      return context2.createMediaStreamSource(stream);
    }
    createMediaElementSource(element) {
      assert(isAudioContext(this._context), "Not available if OfflineAudioContext");
      const context2 = this._context;
      return context2.createMediaElementSource(element);
    }
    createMediaStreamDestination() {
      assert(isAudioContext(this._context), "Not available if OfflineAudioContext");
      const context2 = this._context;
      return context2.createMediaStreamDestination();
    }
    decodeAudioData(audioData) {
      return this._context.decodeAudioData(audioData);
    }
    get currentTime() {
      return this._context.currentTime;
    }
    get state() {
      return this._context.state;
    }
    get sampleRate() {
      return this._context.sampleRate;
    }
    get listener() {
      this.initialize();
      return this._listener;
    }
    set listener(l) {
      assert(!this._initialized, "The listener cannot be set after initialization.");
      this._listener = l;
    }
    get transport() {
      this.initialize();
      return this._transport;
    }
    set transport(t) {
      assert(!this._initialized, "The transport cannot be set after initialization.");
      this._transport = t;
    }
    get draw() {
      this.initialize();
      return this._draw;
    }
    set draw(d) {
      assert(!this._initialized, "Draw cannot be set after initialization.");
      this._draw = d;
    }
    get destination() {
      this.initialize();
      return this._destination;
    }
    set destination(d) {
      assert(!this._initialized, "The destination cannot be set after initialization.");
      this._destination = d;
    }
    createAudioWorkletNode(name, options) {
      return createAudioWorkletNode(this.rawContext, name, options);
    }
    addAudioWorkletModule(url, name) {
      return __awaiter(this, void 0, void 0, function* () {
        assert(isDefined(this.rawContext.audioWorklet), "AudioWorkletNode is only available in a secure context (https or localhost)");
        if (!this._workletModules.has(name)) {
          this._workletModules.set(name, this.rawContext.audioWorklet.addModule(url));
        }
        yield this._workletModules.get(name);
      });
    }
    workletsAreReady() {
      return __awaiter(this, void 0, void 0, function* () {
        const promises = [];
        this._workletModules.forEach((promise) => promises.push(promise));
        yield Promise.all(promises);
      });
    }
    get updateInterval() {
      return this._ticker.updateInterval;
    }
    set updateInterval(interval) {
      this._ticker.updateInterval = interval;
    }
    get clockSource() {
      return this._ticker.type;
    }
    set clockSource(type) {
      this._ticker.type = type;
    }
    get latencyHint() {
      return this._latencyHint;
    }
    _setLatencyHint(hint) {
      let lookAheadValue = 0;
      this._latencyHint = hint;
      if (isString(hint)) {
        switch (hint) {
          case "interactive":
            lookAheadValue = 0.1;
            break;
          case "playback":
            lookAheadValue = 0.5;
            break;
          case "balanced":
            lookAheadValue = 0.25;
            break;
        }
      }
      this.lookAhead = lookAheadValue;
      this.updateInterval = lookAheadValue / 2;
    }
    get rawContext() {
      return this._context;
    }
    now() {
      return this._context.currentTime + this.lookAhead;
    }
    immediate() {
      return this._context.currentTime;
    }
    resume() {
      if (isAudioContext(this._context)) {
        return this._context.resume();
      } else {
        return Promise.resolve();
      }
    }
    close() {
      return __awaiter(this, void 0, void 0, function* () {
        if (isAudioContext(this._context)) {
          yield this._context.close();
        }
        if (this._initialized) {
          closeContext(this);
        }
      });
    }
    getConstant(val) {
      if (this._constants.has(val)) {
        return this._constants.get(val);
      } else {
        const buffer = this._context.createBuffer(1, 128, this._context.sampleRate);
        const arr = buffer.getChannelData(0);
        for (let i = 0; i < arr.length; i++) {
          arr[i] = val;
        }
        const constant = this._context.createBufferSource();
        constant.channelCount = 1;
        constant.channelCountMode = "explicit";
        constant.buffer = buffer;
        constant.loop = true;
        constant.start(0);
        this._constants.set(val, constant);
        return constant;
      }
    }
    dispose() {
      super.dispose();
      this._ticker.dispose();
      this._timeouts.dispose();
      Object.keys(this._constants).map((val) => this._constants[val].disconnect());
      return this;
    }
    _timeoutLoop() {
      const now = this.now();
      let firstEvent = this._timeouts.peek();
      while (this._timeouts.length && firstEvent && firstEvent.time <= now) {
        firstEvent.callback();
        this._timeouts.shift();
        firstEvent = this._timeouts.peek();
      }
    }
    setTimeout(fn, timeout) {
      this._timeoutIds++;
      const now = this.now();
      this._timeouts.add({
        callback: fn,
        id: this._timeoutIds,
        time: now + timeout
      });
      return this._timeoutIds;
    }
    clearTimeout(id) {
      this._timeouts.forEach((event) => {
        if (event.id === id) {
          this._timeouts.remove(event);
        }
      });
      return this;
    }
    clearInterval(id) {
      return this.clearTimeout(id);
    }
    setInterval(fn, interval) {
      const id = ++this._timeoutIds;
      const intervalFn = () => {
        const now = this.now();
        this._timeouts.add({
          callback: () => {
            fn();
            intervalFn();
          },
          id,
          time: now + interval
        });
      };
      intervalFn();
      return id;
    }
  };

  // node_modules/tone/build/esm/core/context/DummyContext.js
  var DummyContext = class extends BaseContext {
    constructor() {
      super(...arguments);
      this.lookAhead = 0;
      this.latencyHint = 0;
      this.isOffline = false;
    }
    createAnalyser() {
      return {};
    }
    createOscillator() {
      return {};
    }
    createBufferSource() {
      return {};
    }
    createBiquadFilter() {
      return {};
    }
    createBuffer(_numberOfChannels, _length, _sampleRate) {
      return {};
    }
    createChannelMerger(_numberOfInputs) {
      return {};
    }
    createChannelSplitter(_numberOfOutputs) {
      return {};
    }
    createConstantSource() {
      return {};
    }
    createConvolver() {
      return {};
    }
    createDelay(_maxDelayTime) {
      return {};
    }
    createDynamicsCompressor() {
      return {};
    }
    createGain() {
      return {};
    }
    createIIRFilter(_feedForward, _feedback) {
      return {};
    }
    createPanner() {
      return {};
    }
    createPeriodicWave(_real, _imag, _constraints) {
      return {};
    }
    createStereoPanner() {
      return {};
    }
    createWaveShaper() {
      return {};
    }
    createMediaStreamSource(_stream) {
      return {};
    }
    createMediaElementSource(_element) {
      return {};
    }
    createMediaStreamDestination() {
      return {};
    }
    decodeAudioData(_audioData) {
      return Promise.resolve({});
    }
    createAudioWorkletNode(_name, _options) {
      return {};
    }
    get rawContext() {
      return {};
    }
    addAudioWorkletModule(_url, _name) {
      return __awaiter(this, void 0, void 0, function* () {
        return Promise.resolve();
      });
    }
    resume() {
      return Promise.resolve();
    }
    setTimeout(_fn, _timeout) {
      return 0;
    }
    clearTimeout(_id) {
      return this;
    }
    setInterval(_fn, _interval) {
      return 0;
    }
    clearInterval(_id) {
      return this;
    }
    getConstant(_val) {
      return {};
    }
    get currentTime() {
      return 0;
    }
    get state() {
      return {};
    }
    get sampleRate() {
      return 0;
    }
    get listener() {
      return {};
    }
    get transport() {
      return {};
    }
    get draw() {
      return {};
    }
    set draw(_d) {
    }
    get destination() {
      return {};
    }
    set destination(_d) {
    }
    now() {
      return 0;
    }
    immediate() {
      return 0;
    }
  };

  // node_modules/tone/build/esm/core/util/Interface.js
  function readOnly(target, property) {
    if (isArray(property)) {
      property.forEach((str) => readOnly(target, str));
    } else {
      Object.defineProperty(target, property, {
        enumerable: true,
        writable: false
      });
    }
  }
  function writable(target, property) {
    if (isArray(property)) {
      property.forEach((str) => writable(target, str));
    } else {
      Object.defineProperty(target, property, {
        writable: true
      });
    }
  }
  var noOp = () => {
  };

  // node_modules/tone/build/esm/core/context/ToneAudioBuffer.js
  var ToneAudioBuffer = class extends Tone {
    constructor() {
      super();
      this.name = "ToneAudioBuffer";
      this.onload = noOp;
      const options = optionsFromArguments(ToneAudioBuffer.getDefaults(), arguments, ["url", "onload", "onerror"]);
      this.reverse = options.reverse;
      this.onload = options.onload;
      if (options.url && isAudioBuffer(options.url) || options.url instanceof ToneAudioBuffer) {
        this.set(options.url);
      } else if (isString(options.url)) {
        this.load(options.url).catch(options.onerror);
      }
    }
    static getDefaults() {
      return {
        onerror: noOp,
        onload: noOp,
        reverse: false
      };
    }
    get sampleRate() {
      if (this._buffer) {
        return this._buffer.sampleRate;
      } else {
        return getContext().sampleRate;
      }
    }
    set(buffer) {
      if (buffer instanceof ToneAudioBuffer) {
        if (buffer.loaded) {
          this._buffer = buffer.get();
        } else {
          buffer.onload = () => {
            this.set(buffer);
            this.onload(this);
          };
        }
      } else {
        this._buffer = buffer;
      }
      if (this._reversed) {
        this._reverse();
      }
      return this;
    }
    get() {
      return this._buffer;
    }
    load(url) {
      return __awaiter(this, void 0, void 0, function* () {
        const doneLoading = ToneAudioBuffer.load(url).then((audioBuffer) => {
          this.set(audioBuffer);
          this.onload(this);
        });
        ToneAudioBuffer.downloads.push(doneLoading);
        try {
          yield doneLoading;
        } finally {
          const index = ToneAudioBuffer.downloads.indexOf(doneLoading);
          ToneAudioBuffer.downloads.splice(index, 1);
        }
        return this;
      });
    }
    dispose() {
      super.dispose();
      this._buffer = void 0;
      return this;
    }
    fromArray(array) {
      const isMultidimensional = isArray(array) && array[0].length > 0;
      const channels = isMultidimensional ? array.length : 1;
      const len = isMultidimensional ? array[0].length : array.length;
      const context2 = getContext();
      const buffer = context2.createBuffer(channels, len, context2.sampleRate);
      const multiChannelArray = !isMultidimensional && channels === 1 ? [array] : array;
      for (let c = 0; c < channels; c++) {
        buffer.copyToChannel(multiChannelArray[c], c);
      }
      this._buffer = buffer;
      return this;
    }
    toMono(chanNum) {
      if (isNumber(chanNum)) {
        this.fromArray(this.toArray(chanNum));
      } else {
        let outputArray = new Float32Array(this.length);
        const numChannels = this.numberOfChannels;
        for (let channel = 0; channel < numChannels; channel++) {
          const channelArray = this.toArray(channel);
          for (let i = 0; i < channelArray.length; i++) {
            outputArray[i] += channelArray[i];
          }
        }
        outputArray = outputArray.map((sample) => sample / numChannels);
        this.fromArray(outputArray);
      }
      return this;
    }
    toArray(channel) {
      if (isNumber(channel)) {
        return this.getChannelData(channel);
      } else if (this.numberOfChannels === 1) {
        return this.toArray(0);
      } else {
        const ret = [];
        for (let c = 0; c < this.numberOfChannels; c++) {
          ret[c] = this.getChannelData(c);
        }
        return ret;
      }
    }
    getChannelData(channel) {
      if (this._buffer) {
        return this._buffer.getChannelData(channel);
      } else {
        return new Float32Array(0);
      }
    }
    slice(start2, end = this.duration) {
      const startSamples = Math.floor(start2 * this.sampleRate);
      const endSamples = Math.floor(end * this.sampleRate);
      assert(startSamples < endSamples, "The start time must be less than the end time");
      const length = endSamples - startSamples;
      const retBuffer = getContext().createBuffer(this.numberOfChannels, length, this.sampleRate);
      for (let channel = 0; channel < this.numberOfChannels; channel++) {
        retBuffer.copyToChannel(this.getChannelData(channel).subarray(startSamples, endSamples), channel);
      }
      return new ToneAudioBuffer(retBuffer);
    }
    _reverse() {
      if (this.loaded) {
        for (let i = 0; i < this.numberOfChannels; i++) {
          this.getChannelData(i).reverse();
        }
      }
      return this;
    }
    get loaded() {
      return this.length > 0;
    }
    get duration() {
      if (this._buffer) {
        return this._buffer.duration;
      } else {
        return 0;
      }
    }
    get length() {
      if (this._buffer) {
        return this._buffer.length;
      } else {
        return 0;
      }
    }
    get numberOfChannels() {
      if (this._buffer) {
        return this._buffer.numberOfChannels;
      } else {
        return 0;
      }
    }
    get reverse() {
      return this._reversed;
    }
    set reverse(rev) {
      if (this._reversed !== rev) {
        this._reversed = rev;
        this._reverse();
      }
    }
    static fromArray(array) {
      return new ToneAudioBuffer().fromArray(array);
    }
    static fromUrl(url) {
      return __awaiter(this, void 0, void 0, function* () {
        const buffer = new ToneAudioBuffer();
        return yield buffer.load(url);
      });
    }
    static load(url) {
      return __awaiter(this, void 0, void 0, function* () {
        const matches = url.match(/\[([^\]\[]+\|.+)\]$/);
        if (matches) {
          const extensions = matches[1].split("|");
          let extension = extensions[0];
          for (const ext of extensions) {
            if (ToneAudioBuffer.supportsType(ext)) {
              extension = ext;
              break;
            }
          }
          url = url.replace(matches[0], extension);
        }
        const baseUrl = ToneAudioBuffer.baseUrl === "" || ToneAudioBuffer.baseUrl.endsWith("/") ? ToneAudioBuffer.baseUrl : ToneAudioBuffer.baseUrl + "/";
        const response = yield fetch(baseUrl + url);
        if (!response.ok) {
          throw new Error(`could not load url: ${url}`);
        }
        const arrayBuffer = yield response.arrayBuffer();
        const audioBuffer = yield getContext().decodeAudioData(arrayBuffer);
        return audioBuffer;
      });
    }
    static supportsType(url) {
      const extensions = url.split(".");
      const extension = extensions[extensions.length - 1];
      const response = document.createElement("audio").canPlayType("audio/" + extension);
      return response !== "";
    }
    static loaded() {
      return __awaiter(this, void 0, void 0, function* () {
        yield Promise.resolve();
        while (ToneAudioBuffer.downloads.length) {
          yield ToneAudioBuffer.downloads[0];
        }
      });
    }
  };
  ToneAudioBuffer.baseUrl = "";
  ToneAudioBuffer.downloads = [];

  // node_modules/tone/build/esm/core/context/OfflineContext.js
  var OfflineContext = class extends Context {
    constructor() {
      super({
        clockSource: "offline",
        context: isOfflineAudioContext(arguments[0]) ? arguments[0] : createOfflineAudioContext(arguments[0], arguments[1] * arguments[2], arguments[2]),
        lookAhead: 0,
        updateInterval: isOfflineAudioContext(arguments[0]) ? 128 / arguments[0].sampleRate : 128 / arguments[2]
      });
      this.name = "OfflineContext";
      this._currentTime = 0;
      this.isOffline = true;
      this._duration = isOfflineAudioContext(arguments[0]) ? arguments[0].length / arguments[0].sampleRate : arguments[1];
    }
    now() {
      return this._currentTime;
    }
    get currentTime() {
      return this._currentTime;
    }
    _renderClock(asynchronous) {
      return __awaiter(this, void 0, void 0, function* () {
        let index = 0;
        while (this._duration - this._currentTime >= 0) {
          this.emit("tick");
          this._currentTime += 128 / this.sampleRate;
          index++;
          const yieldEvery = Math.floor(this.sampleRate / 128);
          if (asynchronous && index % yieldEvery === 0) {
            yield new Promise((done) => setTimeout(done, 1));
          }
        }
      });
    }
    render(asynchronous = true) {
      return __awaiter(this, void 0, void 0, function* () {
        yield this.workletsAreReady();
        yield this._renderClock(asynchronous);
        const buffer = yield this._context.startRendering();
        return new ToneAudioBuffer(buffer);
      });
    }
    close() {
      return Promise.resolve();
    }
  };

  // node_modules/tone/build/esm/core/Global.js
  var dummyContext = new DummyContext();
  var globalContext = dummyContext;
  function getContext() {
    if (globalContext === dummyContext && hasAudioContext) {
      setContext(new Context());
    }
    return globalContext;
  }
  function setContext(context2) {
    if (isAudioContext(context2)) {
      globalContext = new Context(context2);
    } else if (isOfflineAudioContext(context2)) {
      globalContext = new OfflineContext(context2);
    } else {
      globalContext = context2;
    }
  }
  if (theWindow && !theWindow.TONE_SILENCE_LOGGING) {
    let prefix = "v";
    if (version === "dev") {
      prefix = "";
    }
    const printString = ` * Tone.js ${prefix}${version} * `;
    console.log(`%c${printString}`, "background: #000; color: #fff");
  }

  // node_modules/tone/build/esm/core/type/Conversions.js
  function dbToGain(db) {
    return Math.pow(10, db / 20);
  }
  function gainToDb(gain) {
    return 20 * (Math.log(gain) / Math.LN10);
  }
  function intervalToFrequencyRatio(interval) {
    return Math.pow(2, interval / 12);
  }
  var A4 = 440;
  function getA4() {
    return A4;
  }
  function setA4(freq) {
    A4 = freq;
  }
  function ftom(frequency) {
    return Math.round(ftomf(frequency));
  }
  function ftomf(frequency) {
    return 69 + 12 * Math.log2(frequency / A4);
  }
  function mtof(midi) {
    return A4 * Math.pow(2, (midi - 69) / 12);
  }

  // node_modules/tone/build/esm/core/type/TimeBase.js
  var TimeBaseClass = class extends Tone {
    constructor(context2, value, units) {
      super();
      this.defaultUnits = "s";
      this._val = value;
      this._units = units;
      this.context = context2;
      this._expressions = this._getExpressions();
    }
    _getExpressions() {
      return {
        hz: {
          method: (value) => {
            return this._frequencyToUnits(parseFloat(value));
          },
          regexp: /^(\d+(?:\.\d+)?)hz$/i
        },
        i: {
          method: (value) => {
            return this._ticksToUnits(parseInt(value, 10));
          },
          regexp: /^(\d+)i$/i
        },
        m: {
          method: (value) => {
            return this._beatsToUnits(parseInt(value, 10) * this._getTimeSignature());
          },
          regexp: /^(\d+)m$/i
        },
        n: {
          method: (value, dot) => {
            const numericValue = parseInt(value, 10);
            const scalar = dot === "." ? 1.5 : 1;
            if (numericValue === 1) {
              return this._beatsToUnits(this._getTimeSignature()) * scalar;
            } else {
              return this._beatsToUnits(4 / numericValue) * scalar;
            }
          },
          regexp: /^(\d+)n(\.?)$/i
        },
        number: {
          method: (value) => {
            return this._expressions[this.defaultUnits].method.call(this, value);
          },
          regexp: /^(\d+(?:\.\d+)?)$/
        },
        s: {
          method: (value) => {
            return this._secondsToUnits(parseFloat(value));
          },
          regexp: /^(\d+(?:\.\d+)?)s$/
        },
        samples: {
          method: (value) => {
            return parseInt(value, 10) / this.context.sampleRate;
          },
          regexp: /^(\d+)samples$/
        },
        t: {
          method: (value) => {
            const numericValue = parseInt(value, 10);
            return this._beatsToUnits(8 / (Math.floor(numericValue) * 3));
          },
          regexp: /^(\d+)t$/i
        },
        tr: {
          method: (m, q, s) => {
            let total = 0;
            if (m && m !== "0") {
              total += this._beatsToUnits(this._getTimeSignature() * parseFloat(m));
            }
            if (q && q !== "0") {
              total += this._beatsToUnits(parseFloat(q));
            }
            if (s && s !== "0") {
              total += this._beatsToUnits(parseFloat(s) / 4);
            }
            return total;
          },
          regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/
        }
      };
    }
    valueOf() {
      if (this._val instanceof TimeBaseClass) {
        this.fromType(this._val);
      }
      if (isUndef(this._val)) {
        return this._noArg();
      } else if (isString(this._val) && isUndef(this._units)) {
        for (const units in this._expressions) {
          if (this._expressions[units].regexp.test(this._val.trim())) {
            this._units = units;
            break;
          }
        }
      } else if (isObject(this._val)) {
        let total = 0;
        for (const typeName in this._val) {
          if (isDefined(this._val[typeName])) {
            const quantity = this._val[typeName];
            const time = new this.constructor(this.context, typeName).valueOf() * quantity;
            total += time;
          }
        }
        return total;
      }
      if (isDefined(this._units)) {
        const expr = this._expressions[this._units];
        const matching = this._val.toString().trim().match(expr.regexp);
        if (matching) {
          return expr.method.apply(this, matching.slice(1));
        } else {
          return expr.method.call(this, this._val);
        }
      } else if (isString(this._val)) {
        return parseFloat(this._val);
      } else {
        return this._val;
      }
    }
    _frequencyToUnits(freq) {
      return 1 / freq;
    }
    _beatsToUnits(beats) {
      return 60 / this._getBpm() * beats;
    }
    _secondsToUnits(seconds) {
      return seconds;
    }
    _ticksToUnits(ticks) {
      return ticks * this._beatsToUnits(1) / this._getPPQ();
    }
    _noArg() {
      return this._now();
    }
    _getBpm() {
      return this.context.transport.bpm.value;
    }
    _getTimeSignature() {
      return this.context.transport.timeSignature;
    }
    _getPPQ() {
      return this.context.transport.PPQ;
    }
    fromType(type) {
      this._units = void 0;
      switch (this.defaultUnits) {
        case "s":
          this._val = type.toSeconds();
          break;
        case "i":
          this._val = type.toTicks();
          break;
        case "hz":
          this._val = type.toFrequency();
          break;
        case "midi":
          this._val = type.toMidi();
          break;
      }
      return this;
    }
    toFrequency() {
      return 1 / this.toSeconds();
    }
    toSamples() {
      return this.toSeconds() * this.context.sampleRate;
    }
    toMilliseconds() {
      return this.toSeconds() * 1e3;
    }
  };

  // node_modules/tone/build/esm/core/type/Time.js
  var TimeClass = class extends TimeBaseClass {
    constructor() {
      super(...arguments);
      this.name = "TimeClass";
    }
    _getExpressions() {
      return Object.assign(super._getExpressions(), {
        now: {
          method: (capture) => {
            return this._now() + new this.constructor(this.context, capture).valueOf();
          },
          regexp: /^\+(.+)/
        },
        quantize: {
          method: (capture) => {
            const quantTo = new TimeClass(this.context, capture).valueOf();
            return this._secondsToUnits(this.context.transport.nextSubdivision(quantTo));
          },
          regexp: /^@(.+)/
        }
      });
    }
    quantize(subdiv, percent = 1) {
      const subdivision = new this.constructor(this.context, subdiv).valueOf();
      const value = this.valueOf();
      const multiple = Math.round(value / subdivision);
      const ideal = multiple * subdivision;
      const diff = ideal - value;
      return value + diff * percent;
    }
    toNotation() {
      const time = this.toSeconds();
      const testNotations = ["1m"];
      for (let power = 1; power < 9; power++) {
        const subdiv = Math.pow(2, power);
        testNotations.push(subdiv + "n.");
        testNotations.push(subdiv + "n");
        testNotations.push(subdiv + "t");
      }
      testNotations.push("0");
      let closest = testNotations[0];
      let closestSeconds = new TimeClass(this.context, testNotations[0]).toSeconds();
      testNotations.forEach((notation) => {
        const notationSeconds = new TimeClass(this.context, notation).toSeconds();
        if (Math.abs(notationSeconds - time) < Math.abs(closestSeconds - time)) {
          closest = notation;
          closestSeconds = notationSeconds;
        }
      });
      return closest;
    }
    toBarsBeatsSixteenths() {
      const quarterTime = this._beatsToUnits(1);
      let quarters = this.valueOf() / quarterTime;
      quarters = parseFloat(quarters.toFixed(4));
      const measures = Math.floor(quarters / this._getTimeSignature());
      let sixteenths = quarters % 1 * 4;
      quarters = Math.floor(quarters) % this._getTimeSignature();
      const sixteenthString = sixteenths.toString();
      if (sixteenthString.length > 3) {
        sixteenths = parseFloat(parseFloat(sixteenthString).toFixed(3));
      }
      const progress = [measures, quarters, sixteenths];
      return progress.join(":");
    }
    toTicks() {
      const quarterTime = this._beatsToUnits(1);
      const quarters = this.valueOf() / quarterTime;
      return Math.round(quarters * this._getPPQ());
    }
    toSeconds() {
      return this.valueOf();
    }
    toMidi() {
      return ftom(this.toFrequency());
    }
    _now() {
      return this.context.now();
    }
  };

  // node_modules/tone/build/esm/core/type/Frequency.js
  var FrequencyClass = class extends TimeClass {
    constructor() {
      super(...arguments);
      this.name = "Frequency";
      this.defaultUnits = "hz";
    }
    static get A4() {
      return getA4();
    }
    static set A4(freq) {
      setA4(freq);
    }
    _getExpressions() {
      return Object.assign({}, super._getExpressions(), {
        midi: {
          regexp: /^(\d+(?:\.\d+)?midi)/,
          method(value) {
            if (this.defaultUnits === "midi") {
              return value;
            } else {
              return FrequencyClass.mtof(value);
            }
          }
        },
        note: {
          regexp: /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,
          method(pitch, octave) {
            const index = noteToScaleIndex[pitch.toLowerCase()];
            const noteNumber = index + (parseInt(octave, 10) + 1) * 12;
            if (this.defaultUnits === "midi") {
              return noteNumber;
            } else {
              return FrequencyClass.mtof(noteNumber);
            }
          }
        },
        tr: {
          regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,
          method(m, q, s) {
            let total = 1;
            if (m && m !== "0") {
              total *= this._beatsToUnits(this._getTimeSignature() * parseFloat(m));
            }
            if (q && q !== "0") {
              total *= this._beatsToUnits(parseFloat(q));
            }
            if (s && s !== "0") {
              total *= this._beatsToUnits(parseFloat(s) / 4);
            }
            return total;
          }
        }
      });
    }
    transpose(interval) {
      return new FrequencyClass(this.context, this.valueOf() * intervalToFrequencyRatio(interval));
    }
    harmonize(intervals) {
      return intervals.map((interval) => {
        return this.transpose(interval);
      });
    }
    toMidi() {
      return ftom(this.valueOf());
    }
    toNote() {
      const freq = this.toFrequency();
      const log2 = Math.log2(freq / FrequencyClass.A4);
      let noteNumber = Math.round(12 * log2) + 57;
      const octave = Math.floor(noteNumber / 12);
      if (octave < 0) {
        noteNumber += -12 * octave;
      }
      const noteName = scaleIndexToNote[noteNumber % 12];
      return noteName + octave.toString();
    }
    toSeconds() {
      return 1 / super.toSeconds();
    }
    toTicks() {
      const quarterTime = this._beatsToUnits(1);
      const quarters = this.valueOf() / quarterTime;
      return Math.floor(quarters * this._getPPQ());
    }
    _noArg() {
      return 0;
    }
    _frequencyToUnits(freq) {
      return freq;
    }
    _ticksToUnits(ticks) {
      return 1 / (ticks * 60 / (this._getBpm() * this._getPPQ()));
    }
    _beatsToUnits(beats) {
      return 1 / super._beatsToUnits(beats);
    }
    _secondsToUnits(seconds) {
      return 1 / seconds;
    }
    static mtof(midi) {
      return mtof(midi);
    }
    static ftom(frequency) {
      return ftom(frequency);
    }
  };
  var noteToScaleIndex = {
    cbb: -2,
    cb: -1,
    c: 0,
    "c#": 1,
    cx: 2,
    dbb: 0,
    db: 1,
    d: 2,
    "d#": 3,
    dx: 4,
    ebb: 2,
    eb: 3,
    e: 4,
    "e#": 5,
    ex: 6,
    fbb: 3,
    fb: 4,
    f: 5,
    "f#": 6,
    fx: 7,
    gbb: 5,
    gb: 6,
    g: 7,
    "g#": 8,
    gx: 9,
    abb: 7,
    ab: 8,
    a: 9,
    "a#": 10,
    ax: 11,
    bbb: 9,
    bb: 10,
    b: 11,
    "b#": 12,
    bx: 13
  };
  var scaleIndexToNote = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

  // node_modules/tone/build/esm/core/type/TransportTime.js
  var TransportTimeClass = class extends TimeClass {
    constructor() {
      super(...arguments);
      this.name = "TransportTime";
    }
    _now() {
      return this.context.transport.seconds;
    }
  };

  // node_modules/tone/build/esm/core/context/ToneWithContext.js
  var ToneWithContext = class extends Tone {
    constructor() {
      super();
      const options = optionsFromArguments(ToneWithContext.getDefaults(), arguments, ["context"]);
      if (this.defaultContext) {
        this.context = this.defaultContext;
      } else {
        this.context = options.context;
      }
    }
    static getDefaults() {
      return {
        context: getContext()
      };
    }
    now() {
      return this.context.currentTime + this.context.lookAhead;
    }
    immediate() {
      return this.context.currentTime;
    }
    get sampleTime() {
      return 1 / this.context.sampleRate;
    }
    get blockTime() {
      return 128 / this.context.sampleRate;
    }
    toSeconds(time) {
      return new TimeClass(this.context, time).toSeconds();
    }
    toFrequency(freq) {
      return new FrequencyClass(this.context, freq).toFrequency();
    }
    toTicks(time) {
      return new TransportTimeClass(this.context, time).toTicks();
    }
    _getPartialProperties(props) {
      const options = this.get();
      Object.keys(options).forEach((name) => {
        if (isUndef(props[name])) {
          delete options[name];
        }
      });
      return options;
    }
    get() {
      const defaults = getDefaultsFromInstance(this);
      Object.keys(defaults).forEach((attribute) => {
        if (Reflect.has(this, attribute)) {
          const member = this[attribute];
          if (isDefined(member) && isDefined(member.value) && isDefined(member.setValueAtTime)) {
            defaults[attribute] = member.value;
          } else if (member instanceof ToneWithContext) {
            defaults[attribute] = member._getPartialProperties(defaults[attribute]);
          } else if (isArray(member) || isNumber(member) || isString(member) || isBoolean(member)) {
            defaults[attribute] = member;
          } else {
            delete defaults[attribute];
          }
        }
      });
      return defaults;
    }
    set(props) {
      Object.keys(props).forEach((attribute) => {
        if (Reflect.has(this, attribute) && isDefined(this[attribute])) {
          if (this[attribute] && isDefined(this[attribute].value) && isDefined(this[attribute].setValueAtTime)) {
            if (this[attribute].value !== props[attribute]) {
              this[attribute].value = props[attribute];
            }
          } else if (this[attribute] instanceof ToneWithContext) {
            this[attribute].set(props[attribute]);
          } else {
            this[attribute] = props[attribute];
          }
        }
      });
      return this;
    }
  };

  // node_modules/tone/build/esm/core/util/StateTimeline.js
  var StateTimeline = class extends Timeline {
    constructor(initial = "stopped") {
      super();
      this.name = "StateTimeline";
      this._initial = initial;
      this.setStateAtTime(this._initial, 0);
    }
    getValueAtTime(time) {
      const event = this.get(time);
      if (event !== null) {
        return event.state;
      } else {
        return this._initial;
      }
    }
    setStateAtTime(state, time, options) {
      assertRange(time, 0);
      this.add(Object.assign({}, options, {
        state,
        time
      }));
      return this;
    }
    getLastState(state, time) {
      const index = this._search(time);
      for (let i = index; i >= 0; i--) {
        const event = this._timeline[i];
        if (event.state === state) {
          return event;
        }
      }
    }
    getNextState(state, time) {
      const index = this._search(time);
      if (index !== -1) {
        for (let i = index; i < this._timeline.length; i++) {
          const event = this._timeline[i];
          if (event.state === state) {
            return event;
          }
        }
      }
    }
  };

  // node_modules/tone/build/esm/core/context/Param.js
  var Param = class extends ToneWithContext {
    constructor() {
      super(optionsFromArguments(Param.getDefaults(), arguments, ["param", "units", "convert"]));
      this.name = "Param";
      this.overridden = false;
      this._minOutput = 1e-7;
      const options = optionsFromArguments(Param.getDefaults(), arguments, ["param", "units", "convert"]);
      assert(isDefined(options.param) && (isAudioParam(options.param) || options.param instanceof Param), "param must be an AudioParam");
      while (!isAudioParam(options.param)) {
        options.param = options.param._param;
      }
      this._swappable = isDefined(options.swappable) ? options.swappable : false;
      if (this._swappable) {
        this.input = this.context.createGain();
        this._param = options.param;
        this.input.connect(this._param);
      } else {
        this._param = this.input = options.param;
      }
      this._events = new Timeline(1e3);
      this._initialValue = this._param.defaultValue;
      this.units = options.units;
      this.convert = options.convert;
      this._minValue = options.minValue;
      this._maxValue = options.maxValue;
      if (isDefined(options.value) && options.value !== this._toType(this._initialValue)) {
        this.setValueAtTime(options.value, 0);
      }
    }
    static getDefaults() {
      return Object.assign(ToneWithContext.getDefaults(), {
        convert: true,
        units: "number"
      });
    }
    get value() {
      const now = this.now();
      return this.getValueAtTime(now);
    }
    set value(value) {
      this.cancelScheduledValues(this.now());
      this.setValueAtTime(value, this.now());
    }
    get minValue() {
      if (isDefined(this._minValue)) {
        return this._minValue;
      } else if (this.units === "time" || this.units === "frequency" || this.units === "normalRange" || this.units === "positive" || this.units === "transportTime" || this.units === "ticks" || this.units === "bpm" || this.units === "hertz" || this.units === "samples") {
        return 0;
      } else if (this.units === "audioRange") {
        return -1;
      } else if (this.units === "decibels") {
        return -Infinity;
      } else {
        return this._param.minValue;
      }
    }
    get maxValue() {
      if (isDefined(this._maxValue)) {
        return this._maxValue;
      } else if (this.units === "normalRange" || this.units === "audioRange") {
        return 1;
      } else {
        return this._param.maxValue;
      }
    }
    _is(arg, type) {
      return this.units === type;
    }
    _assertRange(value) {
      if (isDefined(this.maxValue) && isDefined(this.minValue)) {
        assertRange(value, this._fromType(this.minValue), this._fromType(this.maxValue));
      }
      return value;
    }
    _fromType(val) {
      if (this.convert && !this.overridden) {
        if (this._is(val, "time")) {
          return this.toSeconds(val);
        } else if (this._is(val, "decibels")) {
          return dbToGain(val);
        } else if (this._is(val, "frequency")) {
          return this.toFrequency(val);
        } else {
          return val;
        }
      } else if (this.overridden) {
        return 0;
      } else {
        return val;
      }
    }
    _toType(val) {
      if (this.convert && this.units === "decibels") {
        return gainToDb(val);
      } else {
        return val;
      }
    }
    setValueAtTime(value, time) {
      const computedTime = this.toSeconds(time);
      const numericValue = this._fromType(value);
      assert(isFinite(numericValue) && isFinite(computedTime), `Invalid argument(s) to setValueAtTime: ${JSON.stringify(value)}, ${JSON.stringify(time)}`);
      this._assertRange(numericValue);
      this.log(this.units, "setValueAtTime", value, computedTime);
      this._events.add({
        time: computedTime,
        type: "setValueAtTime",
        value: numericValue
      });
      this._param.setValueAtTime(numericValue, computedTime);
      return this;
    }
    getValueAtTime(time) {
      const computedTime = Math.max(this.toSeconds(time), 0);
      const after = this._events.getAfter(computedTime);
      const before = this._events.get(computedTime);
      let value = this._initialValue;
      if (before === null) {
        value = this._initialValue;
      } else if (before.type === "setTargetAtTime" && (after === null || after.type === "setValueAtTime")) {
        const previous = this._events.getBefore(before.time);
        let previousVal;
        if (previous === null) {
          previousVal = this._initialValue;
        } else {
          previousVal = previous.value;
        }
        if (before.type === "setTargetAtTime") {
          value = this._exponentialApproach(before.time, previousVal, before.value, before.constant, computedTime);
        }
      } else if (after === null) {
        value = before.value;
      } else if (after.type === "linearRampToValueAtTime" || after.type === "exponentialRampToValueAtTime") {
        let beforeValue = before.value;
        if (before.type === "setTargetAtTime") {
          const previous = this._events.getBefore(before.time);
          if (previous === null) {
            beforeValue = this._initialValue;
          } else {
            beforeValue = previous.value;
          }
        }
        if (after.type === "linearRampToValueAtTime") {
          value = this._linearInterpolate(before.time, beforeValue, after.time, after.value, computedTime);
        } else {
          value = this._exponentialInterpolate(before.time, beforeValue, after.time, after.value, computedTime);
        }
      } else {
        value = before.value;
      }
      return this._toType(value);
    }
    setRampPoint(time) {
      time = this.toSeconds(time);
      let currentVal = this.getValueAtTime(time);
      this.cancelAndHoldAtTime(time);
      if (this._fromType(currentVal) === 0) {
        currentVal = this._toType(this._minOutput);
      }
      this.setValueAtTime(currentVal, time);
      return this;
    }
    linearRampToValueAtTime(value, endTime) {
      const numericValue = this._fromType(value);
      const computedTime = this.toSeconds(endTime);
      assert(isFinite(numericValue) && isFinite(computedTime), `Invalid argument(s) to linearRampToValueAtTime: ${JSON.stringify(value)}, ${JSON.stringify(endTime)}`);
      this._assertRange(numericValue);
      this._events.add({
        time: computedTime,
        type: "linearRampToValueAtTime",
        value: numericValue
      });
      this.log(this.units, "linearRampToValueAtTime", value, computedTime);
      this._param.linearRampToValueAtTime(numericValue, computedTime);
      return this;
    }
    exponentialRampToValueAtTime(value, endTime) {
      let numericValue = this._fromType(value);
      numericValue = EQ(numericValue, 0) ? this._minOutput : numericValue;
      this._assertRange(numericValue);
      const computedTime = this.toSeconds(endTime);
      assert(isFinite(numericValue) && isFinite(computedTime), `Invalid argument(s) to exponentialRampToValueAtTime: ${JSON.stringify(value)}, ${JSON.stringify(endTime)}`);
      this._events.add({
        time: computedTime,
        type: "exponentialRampToValueAtTime",
        value: numericValue
      });
      this.log(this.units, "exponentialRampToValueAtTime", value, computedTime);
      this._param.exponentialRampToValueAtTime(numericValue, computedTime);
      return this;
    }
    exponentialRampTo(value, rampTime, startTime) {
      startTime = this.toSeconds(startTime);
      this.setRampPoint(startTime);
      this.exponentialRampToValueAtTime(value, startTime + this.toSeconds(rampTime));
      return this;
    }
    linearRampTo(value, rampTime, startTime) {
      startTime = this.toSeconds(startTime);
      this.setRampPoint(startTime);
      this.linearRampToValueAtTime(value, startTime + this.toSeconds(rampTime));
      return this;
    }
    targetRampTo(value, rampTime, startTime) {
      startTime = this.toSeconds(startTime);
      this.setRampPoint(startTime);
      this.exponentialApproachValueAtTime(value, startTime, rampTime);
      return this;
    }
    exponentialApproachValueAtTime(value, time, rampTime) {
      time = this.toSeconds(time);
      rampTime = this.toSeconds(rampTime);
      const timeConstant = Math.log(rampTime + 1) / Math.log(200);
      this.setTargetAtTime(value, time, timeConstant);
      this.cancelAndHoldAtTime(time + rampTime * 0.9);
      this.linearRampToValueAtTime(value, time + rampTime);
      return this;
    }
    setTargetAtTime(value, startTime, timeConstant) {
      const numericValue = this._fromType(value);
      assert(isFinite(timeConstant) && timeConstant > 0, "timeConstant must be a number greater than 0");
      const computedTime = this.toSeconds(startTime);
      this._assertRange(numericValue);
      assert(isFinite(numericValue) && isFinite(computedTime), `Invalid argument(s) to setTargetAtTime: ${JSON.stringify(value)}, ${JSON.stringify(startTime)}`);
      this._events.add({
        constant: timeConstant,
        time: computedTime,
        type: "setTargetAtTime",
        value: numericValue
      });
      this.log(this.units, "setTargetAtTime", value, computedTime, timeConstant);
      this._param.setTargetAtTime(numericValue, computedTime, timeConstant);
      return this;
    }
    setValueCurveAtTime(values, startTime, duration, scaling = 1) {
      duration = this.toSeconds(duration);
      startTime = this.toSeconds(startTime);
      const startingValue = this._fromType(values[0]) * scaling;
      this.setValueAtTime(this._toType(startingValue), startTime);
      const segTime = duration / (values.length - 1);
      for (let i = 1; i < values.length; i++) {
        const numericValue = this._fromType(values[i]) * scaling;
        this.linearRampToValueAtTime(this._toType(numericValue), startTime + i * segTime);
      }
      return this;
    }
    cancelScheduledValues(time) {
      const computedTime = this.toSeconds(time);
      assert(isFinite(computedTime), `Invalid argument to cancelScheduledValues: ${JSON.stringify(time)}`);
      this._events.cancel(computedTime);
      this._param.cancelScheduledValues(computedTime);
      this.log(this.units, "cancelScheduledValues", computedTime);
      return this;
    }
    cancelAndHoldAtTime(time) {
      const computedTime = this.toSeconds(time);
      const valueAtTime = this._fromType(this.getValueAtTime(computedTime));
      assert(isFinite(computedTime), `Invalid argument to cancelAndHoldAtTime: ${JSON.stringify(time)}`);
      this.log(this.units, "cancelAndHoldAtTime", computedTime, "value=" + valueAtTime);
      const before = this._events.get(computedTime);
      const after = this._events.getAfter(computedTime);
      if (before && EQ(before.time, computedTime)) {
        if (after) {
          this._param.cancelScheduledValues(after.time);
          this._events.cancel(after.time);
        } else {
          this._param.cancelAndHoldAtTime(computedTime);
          this._events.cancel(computedTime + this.sampleTime);
        }
      } else if (after) {
        this._param.cancelScheduledValues(after.time);
        this._events.cancel(after.time);
        if (after.type === "linearRampToValueAtTime") {
          this.linearRampToValueAtTime(this._toType(valueAtTime), computedTime);
        } else if (after.type === "exponentialRampToValueAtTime") {
          this.exponentialRampToValueAtTime(this._toType(valueAtTime), computedTime);
        }
      }
      this._events.add({
        time: computedTime,
        type: "setValueAtTime",
        value: valueAtTime
      });
      this._param.setValueAtTime(valueAtTime, computedTime);
      return this;
    }
    rampTo(value, rampTime = 0.1, startTime) {
      if (this.units === "frequency" || this.units === "bpm" || this.units === "decibels") {
        this.exponentialRampTo(value, rampTime, startTime);
      } else {
        this.linearRampTo(value, rampTime, startTime);
      }
      return this;
    }
    apply(param) {
      const now = this.context.currentTime;
      param.setValueAtTime(this.getValueAtTime(now), now);
      const previousEvent = this._events.get(now);
      if (previousEvent && previousEvent.type === "setTargetAtTime") {
        const nextEvent = this._events.getAfter(previousEvent.time);
        const endTime = nextEvent ? nextEvent.time : now + 2;
        const subdivisions = (endTime - now) / 10;
        for (let i = now; i < endTime; i += subdivisions) {
          param.linearRampToValueAtTime(this.getValueAtTime(i), i);
        }
      }
      this._events.forEachAfter(this.context.currentTime, (event) => {
        if (event.type === "cancelScheduledValues") {
          param.cancelScheduledValues(event.time);
        } else if (event.type === "setTargetAtTime") {
          param.setTargetAtTime(event.value, event.time, event.constant);
        } else {
          param[event.type](event.value, event.time);
        }
      });
      return this;
    }
    setParam(param) {
      assert(this._swappable, "The Param must be assigned as 'swappable' in the constructor");
      const input = this.input;
      input.disconnect(this._param);
      this.apply(param);
      this._param = param;
      input.connect(this._param);
      return this;
    }
    dispose() {
      super.dispose();
      this._events.dispose();
      return this;
    }
    get defaultValue() {
      return this._toType(this._param.defaultValue);
    }
    _exponentialApproach(t0, v0, v1, timeConstant, t) {
      return v1 + (v0 - v1) * Math.exp(-(t - t0) / timeConstant);
    }
    _linearInterpolate(t0, v0, t1, v1, t) {
      return v0 + (v1 - v0) * ((t - t0) / (t1 - t0));
    }
    _exponentialInterpolate(t0, v0, t1, v1, t) {
      return v0 * Math.pow(v1 / v0, (t - t0) / (t1 - t0));
    }
  };

  // node_modules/tone/build/esm/core/context/ToneAudioNode.js
  var ToneAudioNode = class extends ToneWithContext {
    constructor() {
      super(...arguments);
      this.name = "ToneAudioNode";
      this._internalChannels = [];
    }
    get numberOfInputs() {
      if (isDefined(this.input)) {
        if (isAudioParam(this.input) || this.input instanceof Param) {
          return 1;
        } else {
          return this.input.numberOfInputs;
        }
      } else {
        return 0;
      }
    }
    get numberOfOutputs() {
      if (isDefined(this.output)) {
        return this.output.numberOfOutputs;
      } else {
        return 0;
      }
    }
    _isAudioNode(node) {
      return isDefined(node) && (node instanceof ToneAudioNode || isAudioNode2(node));
    }
    _getInternalNodes() {
      const nodeList = this._internalChannels.slice(0);
      if (this._isAudioNode(this.input)) {
        nodeList.push(this.input);
      }
      if (this._isAudioNode(this.output)) {
        if (this.input !== this.output) {
          nodeList.push(this.output);
        }
      }
      return nodeList;
    }
    _setChannelProperties(options) {
      const nodeList = this._getInternalNodes();
      nodeList.forEach((node) => {
        node.channelCount = options.channelCount;
        node.channelCountMode = options.channelCountMode;
        node.channelInterpretation = options.channelInterpretation;
      });
    }
    _getChannelProperties() {
      const nodeList = this._getInternalNodes();
      assert(nodeList.length > 0, "ToneAudioNode does not have any internal nodes");
      const node = nodeList[0];
      return {
        channelCount: node.channelCount,
        channelCountMode: node.channelCountMode,
        channelInterpretation: node.channelInterpretation
      };
    }
    get channelCount() {
      return this._getChannelProperties().channelCount;
    }
    set channelCount(channelCount) {
      const props = this._getChannelProperties();
      this._setChannelProperties(Object.assign(props, { channelCount }));
    }
    get channelCountMode() {
      return this._getChannelProperties().channelCountMode;
    }
    set channelCountMode(channelCountMode) {
      const props = this._getChannelProperties();
      this._setChannelProperties(Object.assign(props, { channelCountMode }));
    }
    get channelInterpretation() {
      return this._getChannelProperties().channelInterpretation;
    }
    set channelInterpretation(channelInterpretation) {
      const props = this._getChannelProperties();
      this._setChannelProperties(Object.assign(props, { channelInterpretation }));
    }
    connect(destination, outputNum = 0, inputNum = 0) {
      connect(this, destination, outputNum, inputNum);
      return this;
    }
    toDestination() {
      this.connect(this.context.destination);
      return this;
    }
    toMaster() {
      warn("toMaster() has been renamed toDestination()");
      return this.toDestination();
    }
    disconnect(destination, outputNum = 0, inputNum = 0) {
      disconnect(this, destination, outputNum, inputNum);
      return this;
    }
    chain(...nodes) {
      connectSeries(this, ...nodes);
      return this;
    }
    fan(...nodes) {
      nodes.forEach((node) => this.connect(node));
      return this;
    }
    dispose() {
      super.dispose();
      if (isDefined(this.input)) {
        if (this.input instanceof ToneAudioNode) {
          this.input.dispose();
        } else if (isAudioNode2(this.input)) {
          this.input.disconnect();
        }
      }
      if (isDefined(this.output)) {
        if (this.output instanceof ToneAudioNode) {
          this.output.dispose();
        } else if (isAudioNode2(this.output)) {
          this.output.disconnect();
        }
      }
      this._internalChannels = [];
      return this;
    }
  };
  function connectSeries(...nodes) {
    const first = nodes.shift();
    nodes.reduce((prev, current) => {
      if (prev instanceof ToneAudioNode) {
        prev.connect(current);
      } else if (isAudioNode2(prev)) {
        connect(prev, current);
      }
      return current;
    }, first);
  }
  function connect(srcNode, dstNode, outputNumber = 0, inputNumber = 0) {
    assert(isDefined(srcNode), "Cannot connect from undefined node");
    assert(isDefined(dstNode), "Cannot connect to undefined node");
    if (dstNode instanceof ToneAudioNode || isAudioNode2(dstNode)) {
      assert(dstNode.numberOfInputs > 0, "Cannot connect to node with no inputs");
    }
    assert(srcNode.numberOfOutputs > 0, "Cannot connect from node with no outputs");
    while (dstNode instanceof ToneAudioNode || dstNode instanceof Param) {
      if (isDefined(dstNode.input)) {
        dstNode = dstNode.input;
      }
    }
    while (srcNode instanceof ToneAudioNode) {
      if (isDefined(srcNode.output)) {
        srcNode = srcNode.output;
      }
    }
    if (isAudioParam(dstNode)) {
      srcNode.connect(dstNode, outputNumber);
    } else {
      srcNode.connect(dstNode, outputNumber, inputNumber);
    }
  }
  function disconnect(srcNode, dstNode, outputNumber = 0, inputNumber = 0) {
    if (isDefined(dstNode)) {
      while (dstNode instanceof ToneAudioNode) {
        dstNode = dstNode.input;
      }
    }
    while (!isAudioNode2(srcNode)) {
      if (isDefined(srcNode.output)) {
        srcNode = srcNode.output;
      }
    }
    if (isAudioParam(dstNode)) {
      srcNode.disconnect(dstNode, outputNumber);
    } else if (isAudioNode2(dstNode)) {
      srcNode.disconnect(dstNode, outputNumber, inputNumber);
    } else {
      srcNode.disconnect();
    }
  }

  // node_modules/tone/build/esm/core/context/Gain.js
  var Gain = class extends ToneAudioNode {
    constructor() {
      super(optionsFromArguments(Gain.getDefaults(), arguments, ["gain", "units"]));
      this.name = "Gain";
      this._gainNode = this.context.createGain();
      this.input = this._gainNode;
      this.output = this._gainNode;
      const options = optionsFromArguments(Gain.getDefaults(), arguments, ["gain", "units"]);
      this.gain = new Param({
        context: this.context,
        convert: options.convert,
        param: this._gainNode.gain,
        units: options.units,
        value: options.gain,
        minValue: options.minValue,
        maxValue: options.maxValue
      });
      readOnly(this, "gain");
    }
    static getDefaults() {
      return Object.assign(ToneAudioNode.getDefaults(), {
        convert: true,
        gain: 1,
        units: "gain"
      });
    }
    dispose() {
      super.dispose();
      this._gainNode.disconnect();
      this.gain.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/source/OneShotSource.js
  var OneShotSource = class extends ToneAudioNode {
    constructor(options) {
      super(options);
      this.onended = noOp;
      this._startTime = -1;
      this._stopTime = -1;
      this._timeout = -1;
      this.output = new Gain({
        context: this.context,
        gain: 0
      });
      this._gainNode = this.output;
      this.getStateAtTime = function(time) {
        const computedTime = this.toSeconds(time);
        if (this._startTime !== -1 && computedTime >= this._startTime && (this._stopTime === -1 || computedTime <= this._stopTime)) {
          return "started";
        } else {
          return "stopped";
        }
      };
      this._fadeIn = options.fadeIn;
      this._fadeOut = options.fadeOut;
      this._curve = options.curve;
      this.onended = options.onended;
    }
    static getDefaults() {
      return Object.assign(ToneAudioNode.getDefaults(), {
        curve: "linear",
        fadeIn: 0,
        fadeOut: 0,
        onended: noOp
      });
    }
    _startGain(time, gain = 1) {
      assert(this._startTime === -1, "Source cannot be started more than once");
      const fadeInTime = this.toSeconds(this._fadeIn);
      this._startTime = time + fadeInTime;
      this._startTime = Math.max(this._startTime, this.context.currentTime);
      if (fadeInTime > 0) {
        this._gainNode.gain.setValueAtTime(0, time);
        if (this._curve === "linear") {
          this._gainNode.gain.linearRampToValueAtTime(gain, time + fadeInTime);
        } else {
          this._gainNode.gain.exponentialApproachValueAtTime(gain, time, fadeInTime);
        }
      } else {
        this._gainNode.gain.setValueAtTime(gain, time);
      }
      return this;
    }
    stop(time) {
      this.log("stop", time);
      this._stopGain(this.toSeconds(time));
      return this;
    }
    _stopGain(time) {
      assert(this._startTime !== -1, "'start' must be called before 'stop'");
      this.cancelStop();
      const fadeOutTime = this.toSeconds(this._fadeOut);
      this._stopTime = this.toSeconds(time) + fadeOutTime;
      this._stopTime = Math.max(this._stopTime, this.context.currentTime);
      if (fadeOutTime > 0) {
        if (this._curve === "linear") {
          this._gainNode.gain.linearRampTo(0, fadeOutTime, time);
        } else {
          this._gainNode.gain.targetRampTo(0, fadeOutTime, time);
        }
      } else {
        this._gainNode.gain.cancelAndHoldAtTime(time);
        this._gainNode.gain.setValueAtTime(0, time);
      }
      this.context.clearTimeout(this._timeout);
      this._timeout = this.context.setTimeout(() => {
        const additionalTail = this._curve === "exponential" ? fadeOutTime * 2 : 0;
        this._stopSource(this.now() + additionalTail);
        this._onended();
      }, this._stopTime - this.context.currentTime);
      return this;
    }
    _onended() {
      if (this.onended !== noOp) {
        this.onended(this);
        this.onended = noOp;
        if (!this.context.isOffline) {
          const disposeCallback = () => this.dispose();
          if (typeof window.requestIdleCallback !== "undefined") {
            window.requestIdleCallback(disposeCallback);
          } else {
            setTimeout(disposeCallback, 1e3);
          }
        }
      }
    }
    get state() {
      return this.getStateAtTime(this.now());
    }
    cancelStop() {
      this.log("cancelStop");
      assert(this._startTime !== -1, "Source is not started");
      this._gainNode.gain.cancelScheduledValues(this._startTime + this.sampleTime);
      this.context.clearTimeout(this._timeout);
      this._stopTime = -1;
      return this;
    }
    dispose() {
      super.dispose();
      this._gainNode.disconnect();
      return this;
    }
  };

  // node_modules/tone/build/esm/signal/ToneConstantSource.js
  var ToneConstantSource = class extends OneShotSource {
    constructor() {
      super(optionsFromArguments(ToneConstantSource.getDefaults(), arguments, ["offset"]));
      this.name = "ToneConstantSource";
      this._source = this.context.createConstantSource();
      const options = optionsFromArguments(ToneConstantSource.getDefaults(), arguments, ["offset"]);
      connect(this._source, this._gainNode);
      this.offset = new Param({
        context: this.context,
        convert: options.convert,
        param: this._source.offset,
        units: options.units,
        value: options.offset,
        minValue: options.minValue,
        maxValue: options.maxValue
      });
    }
    static getDefaults() {
      return Object.assign(OneShotSource.getDefaults(), {
        convert: true,
        offset: 1,
        units: "number"
      });
    }
    start(time) {
      const computedTime = this.toSeconds(time);
      this.log("start", computedTime);
      this._startGain(computedTime);
      this._source.start(computedTime);
      return this;
    }
    _stopSource(time) {
      this._source.stop(time);
    }
    dispose() {
      super.dispose();
      if (this.state === "started") {
        this.stop();
      }
      this._source.disconnect();
      this.offset.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/signal/Signal.js
  var Signal = class extends ToneAudioNode {
    constructor() {
      super(optionsFromArguments(Signal.getDefaults(), arguments, ["value", "units"]));
      this.name = "Signal";
      this.override = true;
      const options = optionsFromArguments(Signal.getDefaults(), arguments, ["value", "units"]);
      this.output = this._constantSource = new ToneConstantSource({
        context: this.context,
        convert: options.convert,
        offset: options.value,
        units: options.units,
        minValue: options.minValue,
        maxValue: options.maxValue
      });
      this._constantSource.start(0);
      this.input = this._param = this._constantSource.offset;
    }
    static getDefaults() {
      return Object.assign(ToneAudioNode.getDefaults(), {
        convert: true,
        units: "number",
        value: 0
      });
    }
    connect(destination, outputNum = 0, inputNum = 0) {
      connectSignal(this, destination, outputNum, inputNum);
      return this;
    }
    dispose() {
      super.dispose();
      this._param.dispose();
      this._constantSource.dispose();
      return this;
    }
    setValueAtTime(value, time) {
      this._param.setValueAtTime(value, time);
      return this;
    }
    getValueAtTime(time) {
      return this._param.getValueAtTime(time);
    }
    setRampPoint(time) {
      this._param.setRampPoint(time);
      return this;
    }
    linearRampToValueAtTime(value, time) {
      this._param.linearRampToValueAtTime(value, time);
      return this;
    }
    exponentialRampToValueAtTime(value, time) {
      this._param.exponentialRampToValueAtTime(value, time);
      return this;
    }
    exponentialRampTo(value, rampTime, startTime) {
      this._param.exponentialRampTo(value, rampTime, startTime);
      return this;
    }
    linearRampTo(value, rampTime, startTime) {
      this._param.linearRampTo(value, rampTime, startTime);
      return this;
    }
    targetRampTo(value, rampTime, startTime) {
      this._param.targetRampTo(value, rampTime, startTime);
      return this;
    }
    exponentialApproachValueAtTime(value, time, rampTime) {
      this._param.exponentialApproachValueAtTime(value, time, rampTime);
      return this;
    }
    setTargetAtTime(value, startTime, timeConstant) {
      this._param.setTargetAtTime(value, startTime, timeConstant);
      return this;
    }
    setValueCurveAtTime(values, startTime, duration, scaling) {
      this._param.setValueCurveAtTime(values, startTime, duration, scaling);
      return this;
    }
    cancelScheduledValues(time) {
      this._param.cancelScheduledValues(time);
      return this;
    }
    cancelAndHoldAtTime(time) {
      this._param.cancelAndHoldAtTime(time);
      return this;
    }
    rampTo(value, rampTime, startTime) {
      this._param.rampTo(value, rampTime, startTime);
      return this;
    }
    get value() {
      return this._param.value;
    }
    set value(value) {
      this._param.value = value;
    }
    get convert() {
      return this._param.convert;
    }
    set convert(convert) {
      this._param.convert = convert;
    }
    get units() {
      return this._param.units;
    }
    get overridden() {
      return this._param.overridden;
    }
    set overridden(overridden) {
      this._param.overridden = overridden;
    }
    get maxValue() {
      return this._param.maxValue;
    }
    get minValue() {
      return this._param.minValue;
    }
    apply(param) {
      this._param.apply(param);
      return this;
    }
  };
  function connectSignal(signal, destination, outputNum, inputNum) {
    if (destination instanceof Param || isAudioParam(destination) || destination instanceof Signal && destination.override) {
      destination.cancelScheduledValues(0);
      destination.setValueAtTime(0, 0);
      if (destination instanceof Signal) {
        destination.overridden = true;
      }
    }
    connect(signal, destination, outputNum, inputNum);
  }

  // node_modules/tone/build/esm/core/clock/TickParam.js
  var TickParam = class extends Param {
    constructor() {
      super(optionsFromArguments(TickParam.getDefaults(), arguments, ["value"]));
      this.name = "TickParam";
      this._events = new Timeline(Infinity);
      this._multiplier = 1;
      const options = optionsFromArguments(TickParam.getDefaults(), arguments, ["value"]);
      this._multiplier = options.multiplier;
      this._events.cancel(0);
      this._events.add({
        ticks: 0,
        time: 0,
        type: "setValueAtTime",
        value: this._fromType(options.value)
      });
      this.setValueAtTime(options.value, 0);
    }
    static getDefaults() {
      return Object.assign(Param.getDefaults(), {
        multiplier: 1,
        units: "hertz",
        value: 1
      });
    }
    setTargetAtTime(value, time, constant) {
      time = this.toSeconds(time);
      this.setRampPoint(time);
      const computedValue = this._fromType(value);
      const prevEvent = this._events.get(time);
      const segments = Math.round(Math.max(1 / constant, 1));
      for (let i = 0; i <= segments; i++) {
        const segTime = constant * i + time;
        const rampVal = this._exponentialApproach(prevEvent.time, prevEvent.value, computedValue, constant, segTime);
        this.linearRampToValueAtTime(this._toType(rampVal), segTime);
      }
      return this;
    }
    setValueAtTime(value, time) {
      const computedTime = this.toSeconds(time);
      super.setValueAtTime(value, time);
      const event = this._events.get(computedTime);
      const previousEvent = this._events.previousEvent(event);
      const ticksUntilTime = this._getTicksUntilEvent(previousEvent, computedTime);
      event.ticks = Math.max(ticksUntilTime, 0);
      return this;
    }
    linearRampToValueAtTime(value, time) {
      const computedTime = this.toSeconds(time);
      super.linearRampToValueAtTime(value, time);
      const event = this._events.get(computedTime);
      const previousEvent = this._events.previousEvent(event);
      const ticksUntilTime = this._getTicksUntilEvent(previousEvent, computedTime);
      event.ticks = Math.max(ticksUntilTime, 0);
      return this;
    }
    exponentialRampToValueAtTime(value, time) {
      time = this.toSeconds(time);
      const computedVal = this._fromType(value);
      const prevEvent = this._events.get(time);
      const segments = Math.round(Math.max((time - prevEvent.time) * 10, 1));
      const segmentDur = (time - prevEvent.time) / segments;
      for (let i = 0; i <= segments; i++) {
        const segTime = segmentDur * i + prevEvent.time;
        const rampVal = this._exponentialInterpolate(prevEvent.time, prevEvent.value, time, computedVal, segTime);
        this.linearRampToValueAtTime(this._toType(rampVal), segTime);
      }
      return this;
    }
    _getTicksUntilEvent(event, time) {
      if (event === null) {
        event = {
          ticks: 0,
          time: 0,
          type: "setValueAtTime",
          value: 0
        };
      } else if (isUndef(event.ticks)) {
        const previousEvent = this._events.previousEvent(event);
        event.ticks = this._getTicksUntilEvent(previousEvent, event.time);
      }
      const val0 = this._fromType(this.getValueAtTime(event.time));
      let val1 = this._fromType(this.getValueAtTime(time));
      const onTheLineEvent = this._events.get(time);
      if (onTheLineEvent && onTheLineEvent.time === time && onTheLineEvent.type === "setValueAtTime") {
        val1 = this._fromType(this.getValueAtTime(time - this.sampleTime));
      }
      return 0.5 * (time - event.time) * (val0 + val1) + event.ticks;
    }
    getTicksAtTime(time) {
      const computedTime = this.toSeconds(time);
      const event = this._events.get(computedTime);
      return Math.max(this._getTicksUntilEvent(event, computedTime), 0);
    }
    getDurationOfTicks(ticks, time) {
      const computedTime = this.toSeconds(time);
      const currentTick = this.getTicksAtTime(time);
      return this.getTimeOfTick(currentTick + ticks) - computedTime;
    }
    getTimeOfTick(tick) {
      const before = this._events.get(tick, "ticks");
      const after = this._events.getAfter(tick, "ticks");
      if (before && before.ticks === tick) {
        return before.time;
      } else if (before && after && after.type === "linearRampToValueAtTime" && before.value !== after.value) {
        const val0 = this._fromType(this.getValueAtTime(before.time));
        const val1 = this._fromType(this.getValueAtTime(after.time));
        const delta = (val1 - val0) / (after.time - before.time);
        const k = Math.sqrt(Math.pow(val0, 2) - 2 * delta * (before.ticks - tick));
        const sol1 = (-val0 + k) / delta;
        const sol2 = (-val0 - k) / delta;
        return (sol1 > 0 ? sol1 : sol2) + before.time;
      } else if (before) {
        if (before.value === 0) {
          return Infinity;
        } else {
          return before.time + (tick - before.ticks) / before.value;
        }
      } else {
        return tick / this._initialValue;
      }
    }
    ticksToTime(ticks, when) {
      return this.getDurationOfTicks(ticks, when);
    }
    timeToTicks(duration, when) {
      const computedTime = this.toSeconds(when);
      const computedDuration = this.toSeconds(duration);
      const startTicks = this.getTicksAtTime(computedTime);
      const endTicks = this.getTicksAtTime(computedTime + computedDuration);
      return endTicks - startTicks;
    }
    _fromType(val) {
      if (this.units === "bpm" && this.multiplier) {
        return 1 / (60 / val / this.multiplier);
      } else {
        return super._fromType(val);
      }
    }
    _toType(val) {
      if (this.units === "bpm" && this.multiplier) {
        return val / this.multiplier * 60;
      } else {
        return super._toType(val);
      }
    }
    get multiplier() {
      return this._multiplier;
    }
    set multiplier(m) {
      const currentVal = this.value;
      this._multiplier = m;
      this.cancelScheduledValues(0);
      this.setValueAtTime(currentVal, 0);
    }
  };

  // node_modules/tone/build/esm/core/clock/TickSignal.js
  var TickSignal = class extends Signal {
    constructor() {
      super(optionsFromArguments(TickSignal.getDefaults(), arguments, ["value"]));
      this.name = "TickSignal";
      const options = optionsFromArguments(TickSignal.getDefaults(), arguments, ["value"]);
      this.input = this._param = new TickParam({
        context: this.context,
        convert: options.convert,
        multiplier: options.multiplier,
        param: this._constantSource.offset,
        units: options.units,
        value: options.value
      });
    }
    static getDefaults() {
      return Object.assign(Signal.getDefaults(), {
        multiplier: 1,
        units: "hertz",
        value: 1
      });
    }
    ticksToTime(ticks, when) {
      return this._param.ticksToTime(ticks, when);
    }
    timeToTicks(duration, when) {
      return this._param.timeToTicks(duration, when);
    }
    getTimeOfTick(tick) {
      return this._param.getTimeOfTick(tick);
    }
    getDurationOfTicks(ticks, time) {
      return this._param.getDurationOfTicks(ticks, time);
    }
    getTicksAtTime(time) {
      return this._param.getTicksAtTime(time);
    }
    get multiplier() {
      return this._param.multiplier;
    }
    set multiplier(m) {
      this._param.multiplier = m;
    }
    dispose() {
      super.dispose();
      this._param.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/core/clock/TickSource.js
  var TickSource = class extends ToneWithContext {
    constructor() {
      super(optionsFromArguments(TickSource.getDefaults(), arguments, ["frequency"]));
      this.name = "TickSource";
      this._state = new StateTimeline();
      this._tickOffset = new Timeline();
      const options = optionsFromArguments(TickSource.getDefaults(), arguments, ["frequency"]);
      this.frequency = new TickSignal({
        context: this.context,
        units: options.units,
        value: options.frequency
      });
      readOnly(this, "frequency");
      this._state.setStateAtTime("stopped", 0);
      this.setTicksAtTime(0, 0);
    }
    static getDefaults() {
      return Object.assign({
        frequency: 1,
        units: "hertz"
      }, ToneWithContext.getDefaults());
    }
    get state() {
      return this.getStateAtTime(this.now());
    }
    start(time, offset) {
      const computedTime = this.toSeconds(time);
      if (this._state.getValueAtTime(computedTime) !== "started") {
        this._state.setStateAtTime("started", computedTime);
        if (isDefined(offset)) {
          this.setTicksAtTime(offset, computedTime);
        }
      }
      return this;
    }
    stop(time) {
      const computedTime = this.toSeconds(time);
      if (this._state.getValueAtTime(computedTime) === "stopped") {
        const event = this._state.get(computedTime);
        if (event && event.time > 0) {
          this._tickOffset.cancel(event.time);
          this._state.cancel(event.time);
        }
      }
      this._state.cancel(computedTime);
      this._state.setStateAtTime("stopped", computedTime);
      this.setTicksAtTime(0, computedTime);
      return this;
    }
    pause(time) {
      const computedTime = this.toSeconds(time);
      if (this._state.getValueAtTime(computedTime) === "started") {
        this._state.setStateAtTime("paused", computedTime);
      }
      return this;
    }
    cancel(time) {
      time = this.toSeconds(time);
      this._state.cancel(time);
      this._tickOffset.cancel(time);
      return this;
    }
    getTicksAtTime(time) {
      const computedTime = this.toSeconds(time);
      const stopEvent = this._state.getLastState("stopped", computedTime);
      const tmpEvent = { state: "paused", time: computedTime };
      this._state.add(tmpEvent);
      let lastState = stopEvent;
      let elapsedTicks = 0;
      this._state.forEachBetween(stopEvent.time, computedTime + this.sampleTime, (e) => {
        let periodStartTime = lastState.time;
        const offsetEvent = this._tickOffset.get(e.time);
        if (offsetEvent && offsetEvent.time >= lastState.time) {
          elapsedTicks = offsetEvent.ticks;
          periodStartTime = offsetEvent.time;
        }
        if (lastState.state === "started" && e.state !== "started") {
          elapsedTicks += this.frequency.getTicksAtTime(e.time) - this.frequency.getTicksAtTime(periodStartTime);
        }
        lastState = e;
      });
      this._state.remove(tmpEvent);
      return elapsedTicks;
    }
    get ticks() {
      return this.getTicksAtTime(this.now());
    }
    set ticks(t) {
      this.setTicksAtTime(t, this.now());
    }
    get seconds() {
      return this.getSecondsAtTime(this.now());
    }
    set seconds(s) {
      const now = this.now();
      const ticks = this.frequency.timeToTicks(s, now);
      this.setTicksAtTime(ticks, now);
    }
    getSecondsAtTime(time) {
      time = this.toSeconds(time);
      const stopEvent = this._state.getLastState("stopped", time);
      const tmpEvent = { state: "paused", time };
      this._state.add(tmpEvent);
      let lastState = stopEvent;
      let elapsedSeconds = 0;
      this._state.forEachBetween(stopEvent.time, time + this.sampleTime, (e) => {
        let periodStartTime = lastState.time;
        const offsetEvent = this._tickOffset.get(e.time);
        if (offsetEvent && offsetEvent.time >= lastState.time) {
          elapsedSeconds = offsetEvent.seconds;
          periodStartTime = offsetEvent.time;
        }
        if (lastState.state === "started" && e.state !== "started") {
          elapsedSeconds += e.time - periodStartTime;
        }
        lastState = e;
      });
      this._state.remove(tmpEvent);
      return elapsedSeconds;
    }
    setTicksAtTime(ticks, time) {
      time = this.toSeconds(time);
      this._tickOffset.cancel(time);
      this._tickOffset.add({
        seconds: this.frequency.getDurationOfTicks(ticks, time),
        ticks,
        time
      });
      return this;
    }
    getStateAtTime(time) {
      time = this.toSeconds(time);
      return this._state.getValueAtTime(time);
    }
    getTimeOfTick(tick, before = this.now()) {
      const offset = this._tickOffset.get(before);
      const event = this._state.get(before);
      const startTime = Math.max(offset.time, event.time);
      const absoluteTicks = this.frequency.getTicksAtTime(startTime) + tick - offset.ticks;
      return this.frequency.getTimeOfTick(absoluteTicks);
    }
    forEachTickBetween(startTime, endTime, callback) {
      let lastStateEvent = this._state.get(startTime);
      this._state.forEachBetween(startTime, endTime, (event) => {
        if (lastStateEvent && lastStateEvent.state === "started" && event.state !== "started") {
          this.forEachTickBetween(Math.max(lastStateEvent.time, startTime), event.time - this.sampleTime, callback);
        }
        lastStateEvent = event;
      });
      let error = null;
      if (lastStateEvent && lastStateEvent.state === "started") {
        const maxStartTime = Math.max(lastStateEvent.time, startTime);
        const startTicks = this.frequency.getTicksAtTime(maxStartTime);
        const ticksAtStart = this.frequency.getTicksAtTime(lastStateEvent.time);
        const diff = startTicks - ticksAtStart;
        let offset = Math.ceil(diff) - diff;
        offset = EQ(offset, 1) ? 0 : offset;
        let nextTickTime = this.frequency.getTimeOfTick(startTicks + offset);
        while (nextTickTime < endTime) {
          try {
            callback(nextTickTime, Math.round(this.getTicksAtTime(nextTickTime)));
          } catch (e) {
            error = e;
            break;
          }
          nextTickTime += this.frequency.getDurationOfTicks(1, nextTickTime);
        }
      }
      if (error) {
        throw error;
      }
      return this;
    }
    dispose() {
      super.dispose();
      this._state.dispose();
      this._tickOffset.dispose();
      this.frequency.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/core/clock/Clock.js
  var Clock = class extends ToneWithContext {
    constructor() {
      super(optionsFromArguments(Clock.getDefaults(), arguments, ["callback", "frequency"]));
      this.name = "Clock";
      this.callback = noOp;
      this._lastUpdate = 0;
      this._state = new StateTimeline("stopped");
      this._boundLoop = this._loop.bind(this);
      const options = optionsFromArguments(Clock.getDefaults(), arguments, ["callback", "frequency"]);
      this.callback = options.callback;
      this._tickSource = new TickSource({
        context: this.context,
        frequency: options.frequency,
        units: options.units
      });
      this._lastUpdate = 0;
      this.frequency = this._tickSource.frequency;
      readOnly(this, "frequency");
      this._state.setStateAtTime("stopped", 0);
      this.context.on("tick", this._boundLoop);
    }
    static getDefaults() {
      return Object.assign(ToneWithContext.getDefaults(), {
        callback: noOp,
        frequency: 1,
        units: "hertz"
      });
    }
    get state() {
      return this._state.getValueAtTime(this.now());
    }
    start(time, offset) {
      assertContextRunning(this.context);
      const computedTime = this.toSeconds(time);
      this.log("start", computedTime);
      if (this._state.getValueAtTime(computedTime) !== "started") {
        this._state.setStateAtTime("started", computedTime);
        this._tickSource.start(computedTime, offset);
        if (computedTime < this._lastUpdate) {
          this.emit("start", computedTime, offset);
        }
      }
      return this;
    }
    stop(time) {
      const computedTime = this.toSeconds(time);
      this.log("stop", computedTime);
      this._state.cancel(computedTime);
      this._state.setStateAtTime("stopped", computedTime);
      this._tickSource.stop(computedTime);
      if (computedTime < this._lastUpdate) {
        this.emit("stop", computedTime);
      }
      return this;
    }
    pause(time) {
      const computedTime = this.toSeconds(time);
      if (this._state.getValueAtTime(computedTime) === "started") {
        this._state.setStateAtTime("paused", computedTime);
        this._tickSource.pause(computedTime);
        if (computedTime < this._lastUpdate) {
          this.emit("pause", computedTime);
        }
      }
      return this;
    }
    get ticks() {
      return Math.ceil(this.getTicksAtTime(this.now()));
    }
    set ticks(t) {
      this._tickSource.ticks = t;
    }
    get seconds() {
      return this._tickSource.seconds;
    }
    set seconds(s) {
      this._tickSource.seconds = s;
    }
    getSecondsAtTime(time) {
      return this._tickSource.getSecondsAtTime(time);
    }
    setTicksAtTime(ticks, time) {
      this._tickSource.setTicksAtTime(ticks, time);
      return this;
    }
    getTimeOfTick(tick, before = this.now()) {
      return this._tickSource.getTimeOfTick(tick, before);
    }
    getTicksAtTime(time) {
      return this._tickSource.getTicksAtTime(time);
    }
    nextTickTime(offset, when) {
      const computedTime = this.toSeconds(when);
      const currentTick = this.getTicksAtTime(computedTime);
      return this._tickSource.getTimeOfTick(currentTick + offset, computedTime);
    }
    _loop() {
      const startTime = this._lastUpdate;
      const endTime = this.now();
      this._lastUpdate = endTime;
      this.log("loop", startTime, endTime);
      if (startTime !== endTime) {
        this._state.forEachBetween(startTime, endTime, (e) => {
          switch (e.state) {
            case "started":
              const offset = this._tickSource.getTicksAtTime(e.time);
              this.emit("start", e.time, offset);
              break;
            case "stopped":
              if (e.time !== 0) {
                this.emit("stop", e.time);
              }
              break;
            case "paused":
              this.emit("pause", e.time);
              break;
          }
        });
        this._tickSource.forEachTickBetween(startTime, endTime, (time, ticks) => {
          this.callback(time, ticks);
        });
      }
    }
    getStateAtTime(time) {
      const computedTime = this.toSeconds(time);
      return this._state.getValueAtTime(computedTime);
    }
    dispose() {
      super.dispose();
      this.context.off("tick", this._boundLoop);
      this._tickSource.dispose();
      this._state.dispose();
      return this;
    }
  };
  Emitter.mixin(Clock);

  // node_modules/tone/build/esm/core/context/Delay.js
  var Delay = class extends ToneAudioNode {
    constructor() {
      super(optionsFromArguments(Delay.getDefaults(), arguments, ["delayTime", "maxDelay"]));
      this.name = "Delay";
      const options = optionsFromArguments(Delay.getDefaults(), arguments, ["delayTime", "maxDelay"]);
      const maxDelayInSeconds = this.toSeconds(options.maxDelay);
      this._maxDelay = Math.max(maxDelayInSeconds, this.toSeconds(options.delayTime));
      this._delayNode = this.input = this.output = this.context.createDelay(maxDelayInSeconds);
      this.delayTime = new Param({
        context: this.context,
        param: this._delayNode.delayTime,
        units: "time",
        value: options.delayTime,
        minValue: 0,
        maxValue: this.maxDelay
      });
      readOnly(this, "delayTime");
    }
    static getDefaults() {
      return Object.assign(ToneAudioNode.getDefaults(), {
        delayTime: 0,
        maxDelay: 1
      });
    }
    get maxDelay() {
      return this._maxDelay;
    }
    dispose() {
      super.dispose();
      this._delayNode.disconnect();
      this.delayTime.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/core/context/ToneAudioBuffers.js
  var ToneAudioBuffers = class extends Tone {
    constructor() {
      super();
      this.name = "ToneAudioBuffers";
      this._buffers = new Map();
      this._loadingCount = 0;
      const options = optionsFromArguments(ToneAudioBuffers.getDefaults(), arguments, ["urls", "onload", "baseUrl"], "urls");
      this.baseUrl = options.baseUrl;
      Object.keys(options.urls).forEach((name) => {
        this._loadingCount++;
        const url = options.urls[name];
        this.add(name, url, this._bufferLoaded.bind(this, options.onload), options.onerror);
      });
    }
    static getDefaults() {
      return {
        baseUrl: "",
        onerror: noOp,
        onload: noOp,
        urls: {}
      };
    }
    has(name) {
      return this._buffers.has(name.toString());
    }
    get(name) {
      assert(this.has(name), `ToneAudioBuffers has no buffer named: ${name}`);
      return this._buffers.get(name.toString());
    }
    _bufferLoaded(callback) {
      this._loadingCount--;
      if (this._loadingCount === 0 && callback) {
        callback();
      }
    }
    get loaded() {
      return Array.from(this._buffers).every(([_, buffer]) => buffer.loaded);
    }
    add(name, url, callback = noOp, onerror = noOp) {
      if (isString(url)) {
        this._buffers.set(name.toString(), new ToneAudioBuffer(this.baseUrl + url, callback, onerror));
      } else {
        this._buffers.set(name.toString(), new ToneAudioBuffer(url, callback, onerror));
      }
      return this;
    }
    dispose() {
      super.dispose();
      this._buffers.forEach((buffer) => buffer.dispose());
      this._buffers.clear();
      return this;
    }
  };

  // node_modules/tone/build/esm/core/type/Ticks.js
  var TicksClass = class extends TransportTimeClass {
    constructor() {
      super(...arguments);
      this.name = "Ticks";
      this.defaultUnits = "i";
    }
    _now() {
      return this.context.transport.ticks;
    }
    _beatsToUnits(beats) {
      return this._getPPQ() * beats;
    }
    _secondsToUnits(seconds) {
      return Math.floor(seconds / (60 / this._getBpm()) * this._getPPQ());
    }
    _ticksToUnits(ticks) {
      return ticks;
    }
    toTicks() {
      return this.valueOf();
    }
    toSeconds() {
      return this.valueOf() / this._getPPQ() * (60 / this._getBpm());
    }
  };

  // node_modules/tone/build/esm/core/util/Draw.js
  var Draw = class extends ToneWithContext {
    constructor() {
      super(...arguments);
      this.name = "Draw";
      this.expiration = 0.25;
      this.anticipation = 8e-3;
      this._events = new Timeline();
      this._boundDrawLoop = this._drawLoop.bind(this);
      this._animationFrame = -1;
    }
    schedule(callback, time) {
      this._events.add({
        callback,
        time: this.toSeconds(time)
      });
      if (this._events.length === 1) {
        this._animationFrame = requestAnimationFrame(this._boundDrawLoop);
      }
      return this;
    }
    cancel(after) {
      this._events.cancel(this.toSeconds(after));
      return this;
    }
    _drawLoop() {
      const now = this.context.currentTime;
      while (this._events.length && this._events.peek().time - this.anticipation <= now) {
        const event = this._events.shift();
        if (event && now - event.time <= this.expiration) {
          event.callback();
        }
      }
      if (this._events.length > 0) {
        this._animationFrame = requestAnimationFrame(this._boundDrawLoop);
      }
    }
    dispose() {
      super.dispose();
      this._events.dispose();
      cancelAnimationFrame(this._animationFrame);
      return this;
    }
  };
  onContextInit((context2) => {
    context2.draw = new Draw({ context: context2 });
  });
  onContextClose((context2) => {
    context2.draw.dispose();
  });

  // node_modules/tone/build/esm/core/util/IntervalTimeline.js
  var IntervalTimeline = class extends Tone {
    constructor() {
      super(...arguments);
      this.name = "IntervalTimeline";
      this._root = null;
      this._length = 0;
    }
    add(event) {
      assert(isDefined(event.time), "Events must have a time property");
      assert(isDefined(event.duration), "Events must have a duration parameter");
      event.time = event.time.valueOf();
      let node = new IntervalNode(event.time, event.time + event.duration, event);
      if (this._root === null) {
        this._root = node;
      } else {
        this._root.insert(node);
      }
      this._length++;
      while (node !== null) {
        node.updateHeight();
        node.updateMax();
        this._rebalance(node);
        node = node.parent;
      }
      return this;
    }
    remove(event) {
      if (this._root !== null) {
        const results = [];
        this._root.search(event.time, results);
        for (const node of results) {
          if (node.event === event) {
            this._removeNode(node);
            this._length--;
            break;
          }
        }
      }
      return this;
    }
    get length() {
      return this._length;
    }
    cancel(after) {
      this.forEachFrom(after, (event) => this.remove(event));
      return this;
    }
    _setRoot(node) {
      this._root = node;
      if (this._root !== null) {
        this._root.parent = null;
      }
    }
    _replaceNodeInParent(node, replacement) {
      if (node.parent !== null) {
        if (node.isLeftChild()) {
          node.parent.left = replacement;
        } else {
          node.parent.right = replacement;
        }
        this._rebalance(node.parent);
      } else {
        this._setRoot(replacement);
      }
    }
    _removeNode(node) {
      if (node.left === null && node.right === null) {
        this._replaceNodeInParent(node, null);
      } else if (node.right === null) {
        this._replaceNodeInParent(node, node.left);
      } else if (node.left === null) {
        this._replaceNodeInParent(node, node.right);
      } else {
        const balance = node.getBalance();
        let replacement;
        let temp = null;
        if (balance > 0) {
          if (node.left.right === null) {
            replacement = node.left;
            replacement.right = node.right;
            temp = replacement;
          } else {
            replacement = node.left.right;
            while (replacement.right !== null) {
              replacement = replacement.right;
            }
            if (replacement.parent) {
              replacement.parent.right = replacement.left;
              temp = replacement.parent;
              replacement.left = node.left;
              replacement.right = node.right;
            }
          }
        } else if (node.right.left === null) {
          replacement = node.right;
          replacement.left = node.left;
          temp = replacement;
        } else {
          replacement = node.right.left;
          while (replacement.left !== null) {
            replacement = replacement.left;
          }
          if (replacement.parent) {
            replacement.parent.left = replacement.right;
            temp = replacement.parent;
            replacement.left = node.left;
            replacement.right = node.right;
          }
        }
        if (node.parent !== null) {
          if (node.isLeftChild()) {
            node.parent.left = replacement;
          } else {
            node.parent.right = replacement;
          }
        } else {
          this._setRoot(replacement);
        }
        if (temp) {
          this._rebalance(temp);
        }
      }
      node.dispose();
    }
    _rotateLeft(node) {
      const parent = node.parent;
      const isLeftChild = node.isLeftChild();
      const pivotNode = node.right;
      if (pivotNode) {
        node.right = pivotNode.left;
        pivotNode.left = node;
      }
      if (parent !== null) {
        if (isLeftChild) {
          parent.left = pivotNode;
        } else {
          parent.right = pivotNode;
        }
      } else {
        this._setRoot(pivotNode);
      }
    }
    _rotateRight(node) {
      const parent = node.parent;
      const isLeftChild = node.isLeftChild();
      const pivotNode = node.left;
      if (pivotNode) {
        node.left = pivotNode.right;
        pivotNode.right = node;
      }
      if (parent !== null) {
        if (isLeftChild) {
          parent.left = pivotNode;
        } else {
          parent.right = pivotNode;
        }
      } else {
        this._setRoot(pivotNode);
      }
    }
    _rebalance(node) {
      const balance = node.getBalance();
      if (balance > 1 && node.left) {
        if (node.left.getBalance() < 0) {
          this._rotateLeft(node.left);
        } else {
          this._rotateRight(node);
        }
      } else if (balance < -1 && node.right) {
        if (node.right.getBalance() > 0) {
          this._rotateRight(node.right);
        } else {
          this._rotateLeft(node);
        }
      }
    }
    get(time) {
      if (this._root !== null) {
        const results = [];
        this._root.search(time, results);
        if (results.length > 0) {
          let max = results[0];
          for (let i = 1; i < results.length; i++) {
            if (results[i].low > max.low) {
              max = results[i];
            }
          }
          return max.event;
        }
      }
      return null;
    }
    forEach(callback) {
      if (this._root !== null) {
        const allNodes = [];
        this._root.traverse((node) => allNodes.push(node));
        allNodes.forEach((node) => {
          if (node.event) {
            callback(node.event);
          }
        });
      }
      return this;
    }
    forEachAtTime(time, callback) {
      if (this._root !== null) {
        const results = [];
        this._root.search(time, results);
        results.forEach((node) => {
          if (node.event) {
            callback(node.event);
          }
        });
      }
      return this;
    }
    forEachFrom(time, callback) {
      if (this._root !== null) {
        const results = [];
        this._root.searchAfter(time, results);
        results.forEach((node) => {
          if (node.event) {
            callback(node.event);
          }
        });
      }
      return this;
    }
    dispose() {
      super.dispose();
      if (this._root !== null) {
        this._root.traverse((node) => node.dispose());
      }
      this._root = null;
      return this;
    }
  };
  var IntervalNode = class {
    constructor(low, high, event) {
      this._left = null;
      this._right = null;
      this.parent = null;
      this.height = 0;
      this.event = event;
      this.low = low;
      this.high = high;
      this.max = this.high;
    }
    insert(node) {
      if (node.low <= this.low) {
        if (this.left === null) {
          this.left = node;
        } else {
          this.left.insert(node);
        }
      } else if (this.right === null) {
        this.right = node;
      } else {
        this.right.insert(node);
      }
    }
    search(point, results) {
      if (point > this.max) {
        return;
      }
      if (this.left !== null) {
        this.left.search(point, results);
      }
      if (this.low <= point && this.high > point) {
        results.push(this);
      }
      if (this.low > point) {
        return;
      }
      if (this.right !== null) {
        this.right.search(point, results);
      }
    }
    searchAfter(point, results) {
      if (this.low >= point) {
        results.push(this);
        if (this.left !== null) {
          this.left.searchAfter(point, results);
        }
      }
      if (this.right !== null) {
        this.right.searchAfter(point, results);
      }
    }
    traverse(callback) {
      callback(this);
      if (this.left !== null) {
        this.left.traverse(callback);
      }
      if (this.right !== null) {
        this.right.traverse(callback);
      }
    }
    updateHeight() {
      if (this.left !== null && this.right !== null) {
        this.height = Math.max(this.left.height, this.right.height) + 1;
      } else if (this.right !== null) {
        this.height = this.right.height + 1;
      } else if (this.left !== null) {
        this.height = this.left.height + 1;
      } else {
        this.height = 0;
      }
    }
    updateMax() {
      this.max = this.high;
      if (this.left !== null) {
        this.max = Math.max(this.max, this.left.max);
      }
      if (this.right !== null) {
        this.max = Math.max(this.max, this.right.max);
      }
    }
    getBalance() {
      let balance = 0;
      if (this.left !== null && this.right !== null) {
        balance = this.left.height - this.right.height;
      } else if (this.left !== null) {
        balance = this.left.height + 1;
      } else if (this.right !== null) {
        balance = -(this.right.height + 1);
      }
      return balance;
    }
    isLeftChild() {
      return this.parent !== null && this.parent.left === this;
    }
    get left() {
      return this._left;
    }
    set left(node) {
      this._left = node;
      if (node !== null) {
        node.parent = this;
      }
      this.updateHeight();
      this.updateMax();
    }
    get right() {
      return this._right;
    }
    set right(node) {
      this._right = node;
      if (node !== null) {
        node.parent = this;
      }
      this.updateHeight();
      this.updateMax();
    }
    dispose() {
      this.parent = null;
      this._left = null;
      this._right = null;
      this.event = null;
    }
  };

  // node_modules/tone/build/esm/component/channel/Volume.js
  var Volume = class extends ToneAudioNode {
    constructor() {
      super(optionsFromArguments(Volume.getDefaults(), arguments, ["volume"]));
      this.name = "Volume";
      const options = optionsFromArguments(Volume.getDefaults(), arguments, ["volume"]);
      this.input = this.output = new Gain({
        context: this.context,
        gain: options.volume,
        units: "decibels"
      });
      this.volume = this.output.gain;
      readOnly(this, "volume");
      this._unmutedVolume = options.volume;
      this.mute = options.mute;
    }
    static getDefaults() {
      return Object.assign(ToneAudioNode.getDefaults(), {
        mute: false,
        volume: 0
      });
    }
    get mute() {
      return this.volume.value === -Infinity;
    }
    set mute(mute) {
      if (!this.mute && mute) {
        this._unmutedVolume = this.volume.value;
        this.volume.value = -Infinity;
      } else if (this.mute && !mute) {
        this.volume.value = this._unmutedVolume;
      }
    }
    dispose() {
      super.dispose();
      this.input.dispose();
      this.volume.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/core/context/Destination.js
  var Destination = class extends ToneAudioNode {
    constructor() {
      super(optionsFromArguments(Destination.getDefaults(), arguments));
      this.name = "Destination";
      this.input = new Volume({ context: this.context });
      this.output = new Gain({ context: this.context });
      this.volume = this.input.volume;
      const options = optionsFromArguments(Destination.getDefaults(), arguments);
      connectSeries(this.input, this.output, this.context.rawContext.destination);
      this.mute = options.mute;
      this._internalChannels = [this.input, this.context.rawContext.destination, this.output];
    }
    static getDefaults() {
      return Object.assign(ToneAudioNode.getDefaults(), {
        mute: false,
        volume: 0
      });
    }
    get mute() {
      return this.input.mute;
    }
    set mute(mute) {
      this.input.mute = mute;
    }
    chain(...args) {
      this.input.disconnect();
      args.unshift(this.input);
      args.push(this.output);
      connectSeries(...args);
      return this;
    }
    get maxChannelCount() {
      return this.context.rawContext.destination.maxChannelCount;
    }
    dispose() {
      super.dispose();
      this.volume.dispose();
      return this;
    }
  };
  onContextInit((context2) => {
    context2.destination = new Destination({ context: context2 });
  });
  onContextClose((context2) => {
    context2.destination.dispose();
  });

  // node_modules/tone/build/esm/core/util/TimelineValue.js
  var TimelineValue = class extends Tone {
    constructor(initialValue) {
      super();
      this.name = "TimelineValue";
      this._timeline = new Timeline({ memory: 10 });
      this._initialValue = initialValue;
    }
    set(value, time) {
      this._timeline.add({
        value,
        time
      });
      return this;
    }
    get(time) {
      const event = this._timeline.get(time);
      if (event) {
        return event.value;
      } else {
        return this._initialValue;
      }
    }
  };

  // node_modules/tone/build/esm/core/clock/TransportEvent.js
  var TransportEvent = class {
    constructor(transport, opts) {
      this.id = TransportEvent._eventId++;
      const options = Object.assign(TransportEvent.getDefaults(), opts);
      this.transport = transport;
      this.callback = options.callback;
      this._once = options.once;
      this.time = options.time;
    }
    static getDefaults() {
      return {
        callback: noOp,
        once: false,
        time: 0
      };
    }
    invoke(time) {
      if (this.callback) {
        this.callback(time);
        if (this._once) {
          this.transport.clear(this.id);
        }
      }
    }
    dispose() {
      this.callback = void 0;
      return this;
    }
  };
  TransportEvent._eventId = 0;

  // node_modules/tone/build/esm/core/clock/TransportRepeatEvent.js
  var TransportRepeatEvent = class extends TransportEvent {
    constructor(transport, opts) {
      super(transport, opts);
      this._currentId = -1;
      this._nextId = -1;
      this._nextTick = this.time;
      this._boundRestart = this._restart.bind(this);
      const options = Object.assign(TransportRepeatEvent.getDefaults(), opts);
      this.duration = new TicksClass(transport.context, options.duration).valueOf();
      this._interval = new TicksClass(transport.context, options.interval).valueOf();
      this._nextTick = options.time;
      this.transport.on("start", this._boundRestart);
      this.transport.on("loopStart", this._boundRestart);
      this.context = this.transport.context;
      this._restart();
    }
    static getDefaults() {
      return Object.assign({}, TransportEvent.getDefaults(), {
        duration: Infinity,
        interval: 1,
        once: false
      });
    }
    invoke(time) {
      this._createEvents(time);
      super.invoke(time);
    }
    _createEvents(time) {
      const ticks = this.transport.getTicksAtTime(time);
      if (ticks >= this.time && ticks >= this._nextTick && this._nextTick + this._interval < this.time + this.duration) {
        this._nextTick += this._interval;
        this._currentId = this._nextId;
        this._nextId = this.transport.scheduleOnce(this.invoke.bind(this), new TicksClass(this.context, this._nextTick).toSeconds());
      }
    }
    _restart(time) {
      this.transport.clear(this._currentId);
      this.transport.clear(this._nextId);
      this._nextTick = this.time;
      const ticks = this.transport.getTicksAtTime(time);
      if (ticks > this.time) {
        this._nextTick = this.time + Math.ceil((ticks - this.time) / this._interval) * this._interval;
      }
      this._currentId = this.transport.scheduleOnce(this.invoke.bind(this), new TicksClass(this.context, this._nextTick).toSeconds());
      this._nextTick += this._interval;
      this._nextId = this.transport.scheduleOnce(this.invoke.bind(this), new TicksClass(this.context, this._nextTick).toSeconds());
    }
    dispose() {
      super.dispose();
      this.transport.clear(this._currentId);
      this.transport.clear(this._nextId);
      this.transport.off("start", this._boundRestart);
      this.transport.off("loopStart", this._boundRestart);
      return this;
    }
  };

  // node_modules/tone/build/esm/core/clock/Transport.js
  var Transport = class extends ToneWithContext {
    constructor() {
      super(optionsFromArguments(Transport.getDefaults(), arguments));
      this.name = "Transport";
      this._loop = new TimelineValue(false);
      this._loopStart = 0;
      this._loopEnd = 0;
      this._scheduledEvents = {};
      this._timeline = new Timeline();
      this._repeatedEvents = new IntervalTimeline();
      this._syncedSignals = [];
      this._swingAmount = 0;
      const options = optionsFromArguments(Transport.getDefaults(), arguments);
      this._ppq = options.ppq;
      this._clock = new Clock({
        callback: this._processTick.bind(this),
        context: this.context,
        frequency: 0,
        units: "bpm"
      });
      this._bindClockEvents();
      this.bpm = this._clock.frequency;
      this._clock.frequency.multiplier = options.ppq;
      this.bpm.setValueAtTime(options.bpm, 0);
      readOnly(this, "bpm");
      this._timeSignature = options.timeSignature;
      this._swingTicks = options.ppq / 2;
    }
    static getDefaults() {
      return Object.assign(ToneWithContext.getDefaults(), {
        bpm: 120,
        loopEnd: "4m",
        loopStart: 0,
        ppq: 192,
        swing: 0,
        swingSubdivision: "8n",
        timeSignature: 4
      });
    }
    _processTick(tickTime, ticks) {
      if (this._loop.get(tickTime)) {
        if (ticks >= this._loopEnd) {
          this.emit("loopEnd", tickTime);
          this._clock.setTicksAtTime(this._loopStart, tickTime);
          ticks = this._loopStart;
          this.emit("loopStart", tickTime, this._clock.getSecondsAtTime(tickTime));
          this.emit("loop", tickTime);
        }
      }
      if (this._swingAmount > 0 && ticks % this._ppq !== 0 && ticks % (this._swingTicks * 2) !== 0) {
        const progress = ticks % (this._swingTicks * 2) / (this._swingTicks * 2);
        const amount = Math.sin(progress * Math.PI) * this._swingAmount;
        tickTime += new TicksClass(this.context, this._swingTicks * 2 / 3).toSeconds() * amount;
      }
      this._timeline.forEachAtTime(ticks, (event) => event.invoke(tickTime));
    }
    schedule(callback, time) {
      const event = new TransportEvent(this, {
        callback,
        time: new TransportTimeClass(this.context, time).toTicks()
      });
      return this._addEvent(event, this._timeline);
    }
    scheduleRepeat(callback, interval, startTime, duration = Infinity) {
      const event = new TransportRepeatEvent(this, {
        callback,
        duration: new TimeClass(this.context, duration).toTicks(),
        interval: new TimeClass(this.context, interval).toTicks(),
        time: new TransportTimeClass(this.context, startTime).toTicks()
      });
      return this._addEvent(event, this._repeatedEvents);
    }
    scheduleOnce(callback, time) {
      const event = new TransportEvent(this, {
        callback,
        once: true,
        time: new TransportTimeClass(this.context, time).toTicks()
      });
      return this._addEvent(event, this._timeline);
    }
    clear(eventId) {
      if (this._scheduledEvents.hasOwnProperty(eventId)) {
        const item = this._scheduledEvents[eventId.toString()];
        item.timeline.remove(item.event);
        item.event.dispose();
        delete this._scheduledEvents[eventId.toString()];
      }
      return this;
    }
    _addEvent(event, timeline) {
      this._scheduledEvents[event.id.toString()] = {
        event,
        timeline
      };
      timeline.add(event);
      return event.id;
    }
    cancel(after = 0) {
      const computedAfter = this.toTicks(after);
      this._timeline.forEachFrom(computedAfter, (event) => this.clear(event.id));
      this._repeatedEvents.forEachFrom(computedAfter, (event) => this.clear(event.id));
      return this;
    }
    _bindClockEvents() {
      this._clock.on("start", (time, offset) => {
        offset = new TicksClass(this.context, offset).toSeconds();
        this.emit("start", time, offset);
      });
      this._clock.on("stop", (time) => {
        this.emit("stop", time);
      });
      this._clock.on("pause", (time) => {
        this.emit("pause", time);
      });
    }
    get state() {
      return this._clock.getStateAtTime(this.now());
    }
    start(time, offset) {
      let offsetTicks;
      if (isDefined(offset)) {
        offsetTicks = this.toTicks(offset);
      }
      this._clock.start(time, offsetTicks);
      return this;
    }
    stop(time) {
      this._clock.stop(time);
      return this;
    }
    pause(time) {
      this._clock.pause(time);
      return this;
    }
    toggle(time) {
      time = this.toSeconds(time);
      if (this._clock.getStateAtTime(time) !== "started") {
        this.start(time);
      } else {
        this.stop(time);
      }
      return this;
    }
    get timeSignature() {
      return this._timeSignature;
    }
    set timeSignature(timeSig) {
      if (isArray(timeSig)) {
        timeSig = timeSig[0] / timeSig[1] * 4;
      }
      this._timeSignature = timeSig;
    }
    get loopStart() {
      return new TimeClass(this.context, this._loopStart, "i").toSeconds();
    }
    set loopStart(startPosition) {
      this._loopStart = this.toTicks(startPosition);
    }
    get loopEnd() {
      return new TimeClass(this.context, this._loopEnd, "i").toSeconds();
    }
    set loopEnd(endPosition) {
      this._loopEnd = this.toTicks(endPosition);
    }
    get loop() {
      return this._loop.get(this.now());
    }
    set loop(loop) {
      this._loop.set(loop, this.now());
    }
    setLoopPoints(startPosition, endPosition) {
      this.loopStart = startPosition;
      this.loopEnd = endPosition;
      return this;
    }
    get swing() {
      return this._swingAmount;
    }
    set swing(amount) {
      this._swingAmount = amount;
    }
    get swingSubdivision() {
      return new TicksClass(this.context, this._swingTicks).toNotation();
    }
    set swingSubdivision(subdivision) {
      this._swingTicks = this.toTicks(subdivision);
    }
    get position() {
      const now = this.now();
      const ticks = this._clock.getTicksAtTime(now);
      return new TicksClass(this.context, ticks).toBarsBeatsSixteenths();
    }
    set position(progress) {
      const ticks = this.toTicks(progress);
      this.ticks = ticks;
    }
    get seconds() {
      return this._clock.seconds;
    }
    set seconds(s) {
      const now = this.now();
      const ticks = this._clock.frequency.timeToTicks(s, now);
      this.ticks = ticks;
    }
    get progress() {
      if (this.loop) {
        const now = this.now();
        const ticks = this._clock.getTicksAtTime(now);
        return (ticks - this._loopStart) / (this._loopEnd - this._loopStart);
      } else {
        return 0;
      }
    }
    get ticks() {
      return this._clock.ticks;
    }
    set ticks(t) {
      if (this._clock.ticks !== t) {
        const now = this.now();
        if (this.state === "started") {
          const ticks = this._clock.getTicksAtTime(now);
          const remainingTick = this._clock.frequency.getDurationOfTicks(Math.ceil(ticks) - ticks, now);
          const time = now + remainingTick;
          this.emit("stop", time);
          this._clock.setTicksAtTime(t, time);
          this.emit("start", time, this._clock.getSecondsAtTime(time));
        } else {
          this._clock.setTicksAtTime(t, now);
        }
      }
    }
    getTicksAtTime(time) {
      return Math.round(this._clock.getTicksAtTime(time));
    }
    getSecondsAtTime(time) {
      return this._clock.getSecondsAtTime(time);
    }
    get PPQ() {
      return this._clock.frequency.multiplier;
    }
    set PPQ(ppq) {
      this._clock.frequency.multiplier = ppq;
    }
    nextSubdivision(subdivision) {
      subdivision = this.toTicks(subdivision);
      if (this.state !== "started") {
        return 0;
      } else {
        const now = this.now();
        const transportPos = this.getTicksAtTime(now);
        const remainingTicks = subdivision - transportPos % subdivision;
        return this._clock.nextTickTime(remainingTicks, now);
      }
    }
    syncSignal(signal, ratio) {
      if (!ratio) {
        const now = this.now();
        if (signal.getValueAtTime(now) !== 0) {
          const bpm = this.bpm.getValueAtTime(now);
          const computedFreq = 1 / (60 / bpm / this.PPQ);
          ratio = signal.getValueAtTime(now) / computedFreq;
        } else {
          ratio = 0;
        }
      }
      const ratioSignal = new Gain(ratio);
      this.bpm.connect(ratioSignal);
      ratioSignal.connect(signal._param);
      this._syncedSignals.push({
        initial: signal.value,
        ratio: ratioSignal,
        signal
      });
      signal.value = 0;
      return this;
    }
    unsyncSignal(signal) {
      for (let i = this._syncedSignals.length - 1; i >= 0; i--) {
        const syncedSignal = this._syncedSignals[i];
        if (syncedSignal.signal === signal) {
          syncedSignal.ratio.dispose();
          syncedSignal.signal.value = syncedSignal.initial;
          this._syncedSignals.splice(i, 1);
        }
      }
      return this;
    }
    dispose() {
      super.dispose();
      this._clock.dispose();
      writable(this, "bpm");
      this._timeline.dispose();
      this._repeatedEvents.dispose();
      return this;
    }
  };
  Emitter.mixin(Transport);
  onContextInit((context2) => {
    context2.transport = new Transport({ context: context2 });
  });
  onContextClose((context2) => {
    context2.transport.dispose();
  });

  // node_modules/tone/build/esm/source/Source.js
  var Source = class extends ToneAudioNode {
    constructor(options) {
      super(options);
      this.input = void 0;
      this._state = new StateTimeline("stopped");
      this._synced = false;
      this._scheduled = [];
      this._syncedStart = noOp;
      this._syncedStop = noOp;
      this._state.memory = 100;
      this._state.increasing = true;
      this._volume = this.output = new Volume({
        context: this.context,
        mute: options.mute,
        volume: options.volume
      });
      this.volume = this._volume.volume;
      readOnly(this, "volume");
      this.onstop = options.onstop;
    }
    static getDefaults() {
      return Object.assign(ToneAudioNode.getDefaults(), {
        mute: false,
        onstop: noOp,
        volume: 0
      });
    }
    get state() {
      if (this._synced) {
        if (this.context.transport.state === "started") {
          return this._state.getValueAtTime(this.context.transport.seconds);
        } else {
          return "stopped";
        }
      } else {
        return this._state.getValueAtTime(this.now());
      }
    }
    get mute() {
      return this._volume.mute;
    }
    set mute(mute) {
      this._volume.mute = mute;
    }
    _clampToCurrentTime(time) {
      if (this._synced) {
        return time;
      } else {
        return Math.max(time, this.context.currentTime);
      }
    }
    start(time, offset, duration) {
      let computedTime = isUndef(time) && this._synced ? this.context.transport.seconds : this.toSeconds(time);
      computedTime = this._clampToCurrentTime(computedTime);
      if (!this._synced && this._state.getValueAtTime(computedTime) === "started") {
        assert(GT(computedTime, this._state.get(computedTime).time), "Start time must be strictly greater than previous start time");
        this._state.cancel(computedTime);
        this._state.setStateAtTime("started", computedTime);
        this.log("restart", computedTime);
        this.restart(computedTime, offset, duration);
      } else {
        this.log("start", computedTime);
        this._state.setStateAtTime("started", computedTime);
        if (this._synced) {
          const event = this._state.get(computedTime);
          if (event) {
            event.offset = this.toSeconds(defaultArg(offset, 0));
            event.duration = duration ? this.toSeconds(duration) : void 0;
          }
          const sched = this.context.transport.schedule((t) => {
            this._start(t, offset, duration);
          }, computedTime);
          this._scheduled.push(sched);
          if (this.context.transport.state === "started" && this.context.transport.getSecondsAtTime(this.immediate()) > computedTime) {
            this._syncedStart(this.now(), this.context.transport.seconds);
          }
        } else {
          assertContextRunning(this.context);
          this._start(computedTime, offset, duration);
        }
      }
      return this;
    }
    stop(time) {
      let computedTime = isUndef(time) && this._synced ? this.context.transport.seconds : this.toSeconds(time);
      computedTime = this._clampToCurrentTime(computedTime);
      if (this._state.getValueAtTime(computedTime) === "started" || isDefined(this._state.getNextState("started", computedTime))) {
        this.log("stop", computedTime);
        if (!this._synced) {
          this._stop(computedTime);
        } else {
          const sched = this.context.transport.schedule(this._stop.bind(this), computedTime);
          this._scheduled.push(sched);
        }
        this._state.cancel(computedTime);
        this._state.setStateAtTime("stopped", computedTime);
      }
      return this;
    }
    restart(time, offset, duration) {
      time = this.toSeconds(time);
      if (this._state.getValueAtTime(time) === "started") {
        this._state.cancel(time);
        this._restart(time, offset, duration);
      }
      return this;
    }
    sync() {
      if (!this._synced) {
        this._synced = true;
        this._syncedStart = (time, offset) => {
          if (offset > 0) {
            const stateEvent = this._state.get(offset);
            if (stateEvent && stateEvent.state === "started" && stateEvent.time !== offset) {
              const startOffset = offset - this.toSeconds(stateEvent.time);
              let duration;
              if (stateEvent.duration) {
                duration = this.toSeconds(stateEvent.duration) - startOffset;
              }
              this._start(time, this.toSeconds(stateEvent.offset) + startOffset, duration);
            }
          }
        };
        this._syncedStop = (time) => {
          const seconds = this.context.transport.getSecondsAtTime(Math.max(time - this.sampleTime, 0));
          if (this._state.getValueAtTime(seconds) === "started") {
            this._stop(time);
          }
        };
        this.context.transport.on("start", this._syncedStart);
        this.context.transport.on("loopStart", this._syncedStart);
        this.context.transport.on("stop", this._syncedStop);
        this.context.transport.on("pause", this._syncedStop);
        this.context.transport.on("loopEnd", this._syncedStop);
      }
      return this;
    }
    unsync() {
      if (this._synced) {
        this.context.transport.off("stop", this._syncedStop);
        this.context.transport.off("pause", this._syncedStop);
        this.context.transport.off("loopEnd", this._syncedStop);
        this.context.transport.off("start", this._syncedStart);
        this.context.transport.off("loopStart", this._syncedStart);
      }
      this._synced = false;
      this._scheduled.forEach((id) => this.context.transport.clear(id));
      this._scheduled = [];
      this._state.cancel(0);
      this._stop(0);
      return this;
    }
    dispose() {
      super.dispose();
      this.onstop = noOp;
      this.unsync();
      this._volume.dispose();
      this._state.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/source/buffer/ToneBufferSource.js
  var ToneBufferSource = class extends OneShotSource {
    constructor() {
      super(optionsFromArguments(ToneBufferSource.getDefaults(), arguments, ["url", "onload"]));
      this.name = "ToneBufferSource";
      this._source = this.context.createBufferSource();
      this._internalChannels = [this._source];
      this._sourceStarted = false;
      this._sourceStopped = false;
      const options = optionsFromArguments(ToneBufferSource.getDefaults(), arguments, ["url", "onload"]);
      connect(this._source, this._gainNode);
      this._source.onended = () => this._stopSource();
      this.playbackRate = new Param({
        context: this.context,
        param: this._source.playbackRate,
        units: "positive",
        value: options.playbackRate
      });
      this.loop = options.loop;
      this.loopStart = options.loopStart;
      this.loopEnd = options.loopEnd;
      this._buffer = new ToneAudioBuffer(options.url, options.onload, options.onerror);
      this._internalChannels.push(this._source);
    }
    static getDefaults() {
      return Object.assign(OneShotSource.getDefaults(), {
        url: new ToneAudioBuffer(),
        loop: false,
        loopEnd: 0,
        loopStart: 0,
        onload: noOp,
        onerror: noOp,
        playbackRate: 1
      });
    }
    get fadeIn() {
      return this._fadeIn;
    }
    set fadeIn(t) {
      this._fadeIn = t;
    }
    get fadeOut() {
      return this._fadeOut;
    }
    set fadeOut(t) {
      this._fadeOut = t;
    }
    get curve() {
      return this._curve;
    }
    set curve(t) {
      this._curve = t;
    }
    start(time, offset, duration, gain = 1) {
      assert(this.buffer.loaded, "buffer is either not set or not loaded");
      const computedTime = this.toSeconds(time);
      this._startGain(computedTime, gain);
      if (this.loop) {
        offset = defaultArg(offset, this.loopStart);
      } else {
        offset = defaultArg(offset, 0);
      }
      let computedOffset = Math.max(this.toSeconds(offset), 0);
      if (this.loop) {
        const loopEnd = this.toSeconds(this.loopEnd) || this.buffer.duration;
        const loopStart = this.toSeconds(this.loopStart);
        const loopDuration = loopEnd - loopStart;
        if (GTE(computedOffset, loopEnd)) {
          computedOffset = (computedOffset - loopStart) % loopDuration + loopStart;
        }
        if (EQ(computedOffset, this.buffer.duration)) {
          computedOffset = 0;
        }
      }
      this._source.buffer = this.buffer.get();
      this._source.loopEnd = this.toSeconds(this.loopEnd) || this.buffer.duration;
      if (LT(computedOffset, this.buffer.duration)) {
        this._sourceStarted = true;
        this._source.start(computedTime, computedOffset);
      }
      if (isDefined(duration)) {
        let computedDur = this.toSeconds(duration);
        computedDur = Math.max(computedDur, 0);
        this.stop(computedTime + computedDur);
      }
      return this;
    }
    _stopSource(time) {
      if (!this._sourceStopped && this._sourceStarted) {
        this._sourceStopped = true;
        this._source.stop(this.toSeconds(time));
        this._onended();
      }
    }
    get loopStart() {
      return this._source.loopStart;
    }
    set loopStart(loopStart) {
      this._source.loopStart = this.toSeconds(loopStart);
    }
    get loopEnd() {
      return this._source.loopEnd;
    }
    set loopEnd(loopEnd) {
      this._source.loopEnd = this.toSeconds(loopEnd);
    }
    get buffer() {
      return this._buffer;
    }
    set buffer(buffer) {
      this._buffer.set(buffer);
    }
    get loop() {
      return this._source.loop;
    }
    set loop(loop) {
      this._source.loop = loop;
      if (this._sourceStarted) {
        this.cancelStop();
      }
    }
    dispose() {
      super.dispose();
      this._source.onended = null;
      this._source.disconnect();
      this._buffer.dispose();
      this.playbackRate.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/source/Noise.js
  var BUFFER_LENGTH = 44100 * 5;

  // node_modules/tone/build/esm/source/oscillator/OscillatorInterface.js
  function generateWaveform(instance, length) {
    return __awaiter(this, void 0, void 0, function* () {
      const duration = length / instance.context.sampleRate;
      const context2 = new OfflineContext(1, duration, instance.context.sampleRate);
      const clone = new instance.constructor(Object.assign(instance.get(), {
        frequency: 2 / duration,
        detune: 0,
        context: context2
      })).toDestination();
      clone.start(0);
      const buffer = yield context2.render();
      return buffer.getChannelData(0);
    });
  }

  // node_modules/tone/build/esm/source/oscillator/ToneOscillatorNode.js
  var ToneOscillatorNode = class extends OneShotSource {
    constructor() {
      super(optionsFromArguments(ToneOscillatorNode.getDefaults(), arguments, ["frequency", "type"]));
      this.name = "ToneOscillatorNode";
      this._oscillator = this.context.createOscillator();
      this._internalChannels = [this._oscillator];
      const options = optionsFromArguments(ToneOscillatorNode.getDefaults(), arguments, ["frequency", "type"]);
      connect(this._oscillator, this._gainNode);
      this.type = options.type;
      this.frequency = new Param({
        context: this.context,
        param: this._oscillator.frequency,
        units: "frequency",
        value: options.frequency
      });
      this.detune = new Param({
        context: this.context,
        param: this._oscillator.detune,
        units: "cents",
        value: options.detune
      });
      readOnly(this, ["frequency", "detune"]);
    }
    static getDefaults() {
      return Object.assign(OneShotSource.getDefaults(), {
        detune: 0,
        frequency: 440,
        type: "sine"
      });
    }
    start(time) {
      const computedTime = this.toSeconds(time);
      this.log("start", computedTime);
      this._startGain(computedTime);
      this._oscillator.start(computedTime);
      return this;
    }
    _stopSource(time) {
      this._oscillator.stop(time);
    }
    setPeriodicWave(periodicWave) {
      this._oscillator.setPeriodicWave(periodicWave);
      return this;
    }
    get type() {
      return this._oscillator.type;
    }
    set type(type) {
      this._oscillator.type = type;
    }
    dispose() {
      super.dispose();
      if (this.state === "started") {
        this.stop();
      }
      this._oscillator.disconnect();
      this.frequency.dispose();
      this.detune.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/source/oscillator/Oscillator.js
  var Oscillator = class extends Source {
    constructor() {
      super(optionsFromArguments(Oscillator.getDefaults(), arguments, ["frequency", "type"]));
      this.name = "Oscillator";
      this._oscillator = null;
      const options = optionsFromArguments(Oscillator.getDefaults(), arguments, ["frequency", "type"]);
      this.frequency = new Signal({
        context: this.context,
        units: "frequency",
        value: options.frequency
      });
      readOnly(this, "frequency");
      this.detune = new Signal({
        context: this.context,
        units: "cents",
        value: options.detune
      });
      readOnly(this, "detune");
      this._partials = options.partials;
      this._partialCount = options.partialCount;
      this._type = options.type;
      if (options.partialCount && options.type !== "custom") {
        this._type = this.baseType + options.partialCount.toString();
      }
      this.phase = options.phase;
    }
    static getDefaults() {
      return Object.assign(Source.getDefaults(), {
        detune: 0,
        frequency: 440,
        partialCount: 0,
        partials: [],
        phase: 0,
        type: "sine"
      });
    }
    _start(time) {
      const computedTime = this.toSeconds(time);
      const oscillator = new ToneOscillatorNode({
        context: this.context,
        onended: () => this.onstop(this)
      });
      this._oscillator = oscillator;
      if (this._wave) {
        this._oscillator.setPeriodicWave(this._wave);
      } else {
        this._oscillator.type = this._type;
      }
      this._oscillator.connect(this.output);
      this.frequency.connect(this._oscillator.frequency);
      this.detune.connect(this._oscillator.detune);
      this._oscillator.start(computedTime);
    }
    _stop(time) {
      const computedTime = this.toSeconds(time);
      if (this._oscillator) {
        this._oscillator.stop(computedTime);
      }
    }
    _restart(time) {
      const computedTime = this.toSeconds(time);
      this.log("restart", computedTime);
      if (this._oscillator) {
        this._oscillator.cancelStop();
      }
      this._state.cancel(computedTime);
      return this;
    }
    syncFrequency() {
      this.context.transport.syncSignal(this.frequency);
      return this;
    }
    unsyncFrequency() {
      this.context.transport.unsyncSignal(this.frequency);
      return this;
    }
    _getCachedPeriodicWave() {
      if (this._type === "custom") {
        const oscProps = Oscillator._periodicWaveCache.find((description) => {
          return description.phase === this._phase && deepEquals(description.partials, this._partials);
        });
        return oscProps;
      } else {
        const oscProps = Oscillator._periodicWaveCache.find((description) => {
          return description.type === this._type && description.phase === this._phase;
        });
        this._partialCount = oscProps ? oscProps.partialCount : this._partialCount;
        return oscProps;
      }
    }
    get type() {
      return this._type;
    }
    set type(type) {
      this._type = type;
      const isBasicType = ["sine", "square", "sawtooth", "triangle"].indexOf(type) !== -1;
      if (this._phase === 0 && isBasicType) {
        this._wave = void 0;
        this._partialCount = 0;
        if (this._oscillator !== null) {
          this._oscillator.type = type;
        }
      } else {
        const cache = this._getCachedPeriodicWave();
        if (isDefined(cache)) {
          const { partials, wave } = cache;
          this._wave = wave;
          this._partials = partials;
          if (this._oscillator !== null) {
            this._oscillator.setPeriodicWave(this._wave);
          }
        } else {
          const [real, imag] = this._getRealImaginary(type, this._phase);
          const periodicWave = this.context.createPeriodicWave(real, imag);
          this._wave = periodicWave;
          if (this._oscillator !== null) {
            this._oscillator.setPeriodicWave(this._wave);
          }
          Oscillator._periodicWaveCache.push({
            imag,
            partialCount: this._partialCount,
            partials: this._partials,
            phase: this._phase,
            real,
            type: this._type,
            wave: this._wave
          });
          if (Oscillator._periodicWaveCache.length > 100) {
            Oscillator._periodicWaveCache.shift();
          }
        }
      }
    }
    get baseType() {
      return this._type.replace(this.partialCount.toString(), "");
    }
    set baseType(baseType) {
      if (this.partialCount && this._type !== "custom" && baseType !== "custom") {
        this.type = baseType + this.partialCount;
      } else {
        this.type = baseType;
      }
    }
    get partialCount() {
      return this._partialCount;
    }
    set partialCount(p) {
      assertRange(p, 0);
      let type = this._type;
      const partial = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);
      if (partial) {
        type = partial[1];
      }
      if (this._type !== "custom") {
        if (p === 0) {
          this.type = type;
        } else {
          this.type = type + p.toString();
        }
      } else {
        const fullPartials = new Float32Array(p);
        this._partials.forEach((v, i) => fullPartials[i] = v);
        this._partials = Array.from(fullPartials);
        this.type = this._type;
      }
    }
    _getRealImaginary(type, phase) {
      const fftSize = 4096;
      let periodicWaveSize = fftSize / 2;
      const real = new Float32Array(periodicWaveSize);
      const imag = new Float32Array(periodicWaveSize);
      let partialCount = 1;
      if (type === "custom") {
        partialCount = this._partials.length + 1;
        this._partialCount = this._partials.length;
        periodicWaveSize = partialCount;
        if (this._partials.length === 0) {
          return [real, imag];
        }
      } else {
        const partial = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(type);
        if (partial) {
          partialCount = parseInt(partial[2], 10) + 1;
          this._partialCount = parseInt(partial[2], 10);
          type = partial[1];
          partialCount = Math.max(partialCount, 2);
          periodicWaveSize = partialCount;
        } else {
          this._partialCount = 0;
        }
        this._partials = [];
      }
      for (let n = 1; n < periodicWaveSize; ++n) {
        const piFactor = 2 / (n * Math.PI);
        let b;
        switch (type) {
          case "sine":
            b = n <= partialCount ? 1 : 0;
            this._partials[n - 1] = b;
            break;
          case "square":
            b = n & 1 ? 2 * piFactor : 0;
            this._partials[n - 1] = b;
            break;
          case "sawtooth":
            b = piFactor * (n & 1 ? 1 : -1);
            this._partials[n - 1] = b;
            break;
          case "triangle":
            if (n & 1) {
              b = 2 * (piFactor * piFactor) * (n - 1 >> 1 & 1 ? -1 : 1);
            } else {
              b = 0;
            }
            this._partials[n - 1] = b;
            break;
          case "custom":
            b = this._partials[n - 1];
            break;
          default:
            throw new TypeError("Oscillator: invalid type: " + type);
        }
        if (b !== 0) {
          real[n] = -b * Math.sin(phase * n);
          imag[n] = b * Math.cos(phase * n);
        } else {
          real[n] = 0;
          imag[n] = 0;
        }
      }
      return [real, imag];
    }
    _inverseFFT(real, imag, phase) {
      let sum = 0;
      const len = real.length;
      for (let i = 0; i < len; i++) {
        sum += real[i] * Math.cos(i * phase) + imag[i] * Math.sin(i * phase);
      }
      return sum;
    }
    getInitialValue() {
      const [real, imag] = this._getRealImaginary(this._type, 0);
      let maxValue = 0;
      const twoPi = Math.PI * 2;
      const testPositions = 32;
      for (let i = 0; i < testPositions; i++) {
        maxValue = Math.max(this._inverseFFT(real, imag, i / testPositions * twoPi), maxValue);
      }
      return clamp(-this._inverseFFT(real, imag, this._phase) / maxValue, -1, 1);
    }
    get partials() {
      return this._partials.slice(0, this.partialCount);
    }
    set partials(partials) {
      this._partials = partials;
      this._partialCount = this._partials.length;
      if (partials.length) {
        this.type = "custom";
      }
    }
    get phase() {
      return this._phase * (180 / Math.PI);
    }
    set phase(phase) {
      this._phase = phase * Math.PI / 180;
      this.type = this._type;
    }
    asArray(length = 1024) {
      return __awaiter(this, void 0, void 0, function* () {
        return generateWaveform(this, length);
      });
    }
    dispose() {
      super.dispose();
      if (this._oscillator !== null) {
        this._oscillator.dispose();
      }
      this._wave = void 0;
      this.frequency.dispose();
      this.detune.dispose();
      return this;
    }
  };
  Oscillator._periodicWaveCache = [];

  // node_modules/tone/build/esm/signal/SignalOperator.js
  var SignalOperator = class extends ToneAudioNode {
    constructor() {
      super(Object.assign(optionsFromArguments(SignalOperator.getDefaults(), arguments, ["context"])));
    }
    connect(destination, outputNum = 0, inputNum = 0) {
      connectSignal(this, destination, outputNum, inputNum);
      return this;
    }
  };

  // node_modules/tone/build/esm/signal/WaveShaper.js
  var WaveShaper = class extends SignalOperator {
    constructor() {
      super(Object.assign(optionsFromArguments(WaveShaper.getDefaults(), arguments, ["mapping", "length"])));
      this.name = "WaveShaper";
      this._shaper = this.context.createWaveShaper();
      this.input = this._shaper;
      this.output = this._shaper;
      const options = optionsFromArguments(WaveShaper.getDefaults(), arguments, ["mapping", "length"]);
      if (isArray(options.mapping) || options.mapping instanceof Float32Array) {
        this.curve = Float32Array.from(options.mapping);
      } else if (isFunction(options.mapping)) {
        this.setMap(options.mapping, options.length);
      }
    }
    static getDefaults() {
      return Object.assign(Signal.getDefaults(), {
        length: 1024
      });
    }
    setMap(mapping, length = 1024) {
      const array = new Float32Array(length);
      for (let i = 0, len = length; i < len; i++) {
        const normalized = i / (len - 1) * 2 - 1;
        array[i] = mapping(normalized, i);
      }
      this.curve = array;
      return this;
    }
    get curve() {
      return this._shaper.curve;
    }
    set curve(mapping) {
      this._shaper.curve = mapping;
    }
    get oversample() {
      return this._shaper.oversample;
    }
    set oversample(oversampling) {
      const isOverSampleType = ["none", "2x", "4x"].some((str) => str.includes(oversampling));
      assert(isOverSampleType, "oversampling must be either 'none', '2x', or '4x'");
      this._shaper.oversample = oversampling;
    }
    dispose() {
      super.dispose();
      this._shaper.disconnect();
      return this;
    }
  };

  // node_modules/tone/build/esm/signal/AudioToGain.js
  var AudioToGain = class extends SignalOperator {
    constructor() {
      super(...arguments);
      this.name = "AudioToGain";
      this._norm = new WaveShaper({
        context: this.context,
        mapping: (x) => (x + 1) / 2
      });
      this.input = this._norm;
      this.output = this._norm;
    }
    dispose() {
      super.dispose();
      this._norm.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/signal/Multiply.js
  var Multiply = class extends Signal {
    constructor() {
      super(Object.assign(optionsFromArguments(Multiply.getDefaults(), arguments, ["value"])));
      this.name = "Multiply";
      this.override = false;
      const options = optionsFromArguments(Multiply.getDefaults(), arguments, ["value"]);
      this._mult = this.input = this.output = new Gain({
        context: this.context,
        minValue: options.minValue,
        maxValue: options.maxValue
      });
      this.factor = this._param = this._mult.gain;
      this.factor.setValueAtTime(options.value, 0);
    }
    static getDefaults() {
      return Object.assign(Signal.getDefaults(), {
        value: 0
      });
    }
    dispose() {
      super.dispose();
      this._mult.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/source/oscillator/AMOscillator.js
  var AMOscillator = class extends Source {
    constructor() {
      super(optionsFromArguments(AMOscillator.getDefaults(), arguments, ["frequency", "type", "modulationType"]));
      this.name = "AMOscillator";
      this._modulationScale = new AudioToGain({ context: this.context });
      this._modulationNode = new Gain({
        context: this.context
      });
      const options = optionsFromArguments(AMOscillator.getDefaults(), arguments, ["frequency", "type", "modulationType"]);
      this._carrier = new Oscillator({
        context: this.context,
        detune: options.detune,
        frequency: options.frequency,
        onstop: () => this.onstop(this),
        phase: options.phase,
        type: options.type
      });
      this.frequency = this._carrier.frequency, this.detune = this._carrier.detune;
      this._modulator = new Oscillator({
        context: this.context,
        phase: options.phase,
        type: options.modulationType
      });
      this.harmonicity = new Multiply({
        context: this.context,
        units: "positive",
        value: options.harmonicity
      });
      this.frequency.chain(this.harmonicity, this._modulator.frequency);
      this._modulator.chain(this._modulationScale, this._modulationNode.gain);
      this._carrier.chain(this._modulationNode, this.output);
      readOnly(this, ["frequency", "detune", "harmonicity"]);
    }
    static getDefaults() {
      return Object.assign(Oscillator.getDefaults(), {
        harmonicity: 1,
        modulationType: "square"
      });
    }
    _start(time) {
      this._modulator.start(time);
      this._carrier.start(time);
    }
    _stop(time) {
      this._modulator.stop(time);
      this._carrier.stop(time);
    }
    _restart(time) {
      this._modulator.restart(time);
      this._carrier.restart(time);
    }
    get type() {
      return this._carrier.type;
    }
    set type(type) {
      this._carrier.type = type;
    }
    get baseType() {
      return this._carrier.baseType;
    }
    set baseType(baseType) {
      this._carrier.baseType = baseType;
    }
    get partialCount() {
      return this._carrier.partialCount;
    }
    set partialCount(partialCount) {
      this._carrier.partialCount = partialCount;
    }
    get modulationType() {
      return this._modulator.type;
    }
    set modulationType(type) {
      this._modulator.type = type;
    }
    get phase() {
      return this._carrier.phase;
    }
    set phase(phase) {
      this._carrier.phase = phase;
      this._modulator.phase = phase;
    }
    get partials() {
      return this._carrier.partials;
    }
    set partials(partials) {
      this._carrier.partials = partials;
    }
    asArray(length = 1024) {
      return __awaiter(this, void 0, void 0, function* () {
        return generateWaveform(this, length);
      });
    }
    dispose() {
      super.dispose();
      this.frequency.dispose();
      this.detune.dispose();
      this.harmonicity.dispose();
      this._carrier.dispose();
      this._modulator.dispose();
      this._modulationNode.dispose();
      this._modulationScale.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/source/oscillator/FMOscillator.js
  var FMOscillator = class extends Source {
    constructor() {
      super(optionsFromArguments(FMOscillator.getDefaults(), arguments, ["frequency", "type", "modulationType"]));
      this.name = "FMOscillator";
      this._modulationNode = new Gain({
        context: this.context,
        gain: 0
      });
      const options = optionsFromArguments(FMOscillator.getDefaults(), arguments, ["frequency", "type", "modulationType"]);
      this._carrier = new Oscillator({
        context: this.context,
        detune: options.detune,
        frequency: 0,
        onstop: () => this.onstop(this),
        phase: options.phase,
        type: options.type
      });
      this.detune = this._carrier.detune;
      this.frequency = new Signal({
        context: this.context,
        units: "frequency",
        value: options.frequency
      });
      this._modulator = new Oscillator({
        context: this.context,
        phase: options.phase,
        type: options.modulationType
      });
      this.harmonicity = new Multiply({
        context: this.context,
        units: "positive",
        value: options.harmonicity
      });
      this.modulationIndex = new Multiply({
        context: this.context,
        units: "positive",
        value: options.modulationIndex
      });
      this.frequency.connect(this._carrier.frequency);
      this.frequency.chain(this.harmonicity, this._modulator.frequency);
      this.frequency.chain(this.modulationIndex, this._modulationNode);
      this._modulator.connect(this._modulationNode.gain);
      this._modulationNode.connect(this._carrier.frequency);
      this._carrier.connect(this.output);
      this.detune.connect(this._modulator.detune);
      readOnly(this, ["modulationIndex", "frequency", "detune", "harmonicity"]);
    }
    static getDefaults() {
      return Object.assign(Oscillator.getDefaults(), {
        harmonicity: 1,
        modulationIndex: 2,
        modulationType: "square"
      });
    }
    _start(time) {
      this._modulator.start(time);
      this._carrier.start(time);
    }
    _stop(time) {
      this._modulator.stop(time);
      this._carrier.stop(time);
    }
    _restart(time) {
      this._modulator.restart(time);
      this._carrier.restart(time);
      return this;
    }
    get type() {
      return this._carrier.type;
    }
    set type(type) {
      this._carrier.type = type;
    }
    get baseType() {
      return this._carrier.baseType;
    }
    set baseType(baseType) {
      this._carrier.baseType = baseType;
    }
    get partialCount() {
      return this._carrier.partialCount;
    }
    set partialCount(partialCount) {
      this._carrier.partialCount = partialCount;
    }
    get modulationType() {
      return this._modulator.type;
    }
    set modulationType(type) {
      this._modulator.type = type;
    }
    get phase() {
      return this._carrier.phase;
    }
    set phase(phase) {
      this._carrier.phase = phase;
      this._modulator.phase = phase;
    }
    get partials() {
      return this._carrier.partials;
    }
    set partials(partials) {
      this._carrier.partials = partials;
    }
    asArray(length = 1024) {
      return __awaiter(this, void 0, void 0, function* () {
        return generateWaveform(this, length);
      });
    }
    dispose() {
      super.dispose();
      this.frequency.dispose();
      this.harmonicity.dispose();
      this._carrier.dispose();
      this._modulator.dispose();
      this._modulationNode.dispose();
      this.modulationIndex.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/source/oscillator/PulseOscillator.js
  var PulseOscillator = class extends Source {
    constructor() {
      super(optionsFromArguments(PulseOscillator.getDefaults(), arguments, ["frequency", "width"]));
      this.name = "PulseOscillator";
      this._widthGate = new Gain({
        context: this.context,
        gain: 0
      });
      this._thresh = new WaveShaper({
        context: this.context,
        mapping: (val) => val <= 0 ? -1 : 1
      });
      const options = optionsFromArguments(PulseOscillator.getDefaults(), arguments, ["frequency", "width"]);
      this.width = new Signal({
        context: this.context,
        units: "audioRange",
        value: options.width
      });
      this._triangle = new Oscillator({
        context: this.context,
        detune: options.detune,
        frequency: options.frequency,
        onstop: () => this.onstop(this),
        phase: options.phase,
        type: "triangle"
      });
      this.frequency = this._triangle.frequency;
      this.detune = this._triangle.detune;
      this._triangle.chain(this._thresh, this.output);
      this.width.chain(this._widthGate, this._thresh);
      readOnly(this, ["width", "frequency", "detune"]);
    }
    static getDefaults() {
      return Object.assign(Source.getDefaults(), {
        detune: 0,
        frequency: 440,
        phase: 0,
        type: "pulse",
        width: 0.2
      });
    }
    _start(time) {
      time = this.toSeconds(time);
      this._triangle.start(time);
      this._widthGate.gain.setValueAtTime(1, time);
    }
    _stop(time) {
      time = this.toSeconds(time);
      this._triangle.stop(time);
      this._widthGate.gain.cancelScheduledValues(time);
      this._widthGate.gain.setValueAtTime(0, time);
    }
    _restart(time) {
      this._triangle.restart(time);
      this._widthGate.gain.cancelScheduledValues(time);
      this._widthGate.gain.setValueAtTime(1, time);
    }
    get phase() {
      return this._triangle.phase;
    }
    set phase(phase) {
      this._triangle.phase = phase;
    }
    get type() {
      return "pulse";
    }
    get baseType() {
      return "pulse";
    }
    get partials() {
      return [];
    }
    get partialCount() {
      return 0;
    }
    set carrierType(type) {
      this._triangle.type = type;
    }
    asArray(length = 1024) {
      return __awaiter(this, void 0, void 0, function* () {
        return generateWaveform(this, length);
      });
    }
    dispose() {
      super.dispose();
      this._triangle.dispose();
      this.width.dispose();
      this._widthGate.dispose();
      this._thresh.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/source/oscillator/FatOscillator.js
  var FatOscillator = class extends Source {
    constructor() {
      super(optionsFromArguments(FatOscillator.getDefaults(), arguments, ["frequency", "type", "spread"]));
      this.name = "FatOscillator";
      this._oscillators = [];
      const options = optionsFromArguments(FatOscillator.getDefaults(), arguments, ["frequency", "type", "spread"]);
      this.frequency = new Signal({
        context: this.context,
        units: "frequency",
        value: options.frequency
      });
      this.detune = new Signal({
        context: this.context,
        units: "cents",
        value: options.detune
      });
      this._spread = options.spread;
      this._type = options.type;
      this._phase = options.phase;
      this._partials = options.partials;
      this._partialCount = options.partialCount;
      this.count = options.count;
      readOnly(this, ["frequency", "detune"]);
    }
    static getDefaults() {
      return Object.assign(Oscillator.getDefaults(), {
        count: 3,
        spread: 20,
        type: "sawtooth"
      });
    }
    _start(time) {
      time = this.toSeconds(time);
      this._forEach((osc) => osc.start(time));
    }
    _stop(time) {
      time = this.toSeconds(time);
      this._forEach((osc) => osc.stop(time));
    }
    _restart(time) {
      this._forEach((osc) => osc.restart(time));
    }
    _forEach(iterator) {
      for (let i = 0; i < this._oscillators.length; i++) {
        iterator(this._oscillators[i], i);
      }
    }
    get type() {
      return this._type;
    }
    set type(type) {
      this._type = type;
      this._forEach((osc) => osc.type = type);
    }
    get spread() {
      return this._spread;
    }
    set spread(spread) {
      this._spread = spread;
      if (this._oscillators.length > 1) {
        const start2 = -spread / 2;
        const step = spread / (this._oscillators.length - 1);
        this._forEach((osc, i) => osc.detune.value = start2 + step * i);
      }
    }
    get count() {
      return this._oscillators.length;
    }
    set count(count) {
      assertRange(count, 1);
      if (this._oscillators.length !== count) {
        this._forEach((osc) => osc.dispose());
        this._oscillators = [];
        for (let i = 0; i < count; i++) {
          const osc = new Oscillator({
            context: this.context,
            volume: -6 - count * 1.1,
            type: this._type,
            phase: this._phase + i / count * 360,
            partialCount: this._partialCount,
            onstop: i === 0 ? () => this.onstop(this) : noOp
          });
          if (this.type === "custom") {
            osc.partials = this._partials;
          }
          this.frequency.connect(osc.frequency);
          this.detune.connect(osc.detune);
          osc.detune.overridden = false;
          osc.connect(this.output);
          this._oscillators[i] = osc;
        }
        this.spread = this._spread;
        if (this.state === "started") {
          this._forEach((osc) => osc.start());
        }
      }
    }
    get phase() {
      return this._phase;
    }
    set phase(phase) {
      this._phase = phase;
      this._forEach((osc, i) => osc.phase = this._phase + i / this.count * 360);
    }
    get baseType() {
      return this._oscillators[0].baseType;
    }
    set baseType(baseType) {
      this._forEach((osc) => osc.baseType = baseType);
      this._type = this._oscillators[0].type;
    }
    get partials() {
      return this._oscillators[0].partials;
    }
    set partials(partials) {
      this._partials = partials;
      this._partialCount = this._partials.length;
      if (partials.length) {
        this._type = "custom";
        this._forEach((osc) => osc.partials = partials);
      }
    }
    get partialCount() {
      return this._oscillators[0].partialCount;
    }
    set partialCount(partialCount) {
      this._partialCount = partialCount;
      this._forEach((osc) => osc.partialCount = partialCount);
      this._type = this._oscillators[0].type;
    }
    asArray(length = 1024) {
      return __awaiter(this, void 0, void 0, function* () {
        return generateWaveform(this, length);
      });
    }
    dispose() {
      super.dispose();
      this.frequency.dispose();
      this.detune.dispose();
      this._forEach((osc) => osc.dispose());
      return this;
    }
  };

  // node_modules/tone/build/esm/source/oscillator/PWMOscillator.js
  var PWMOscillator = class extends Source {
    constructor() {
      super(optionsFromArguments(PWMOscillator.getDefaults(), arguments, ["frequency", "modulationFrequency"]));
      this.name = "PWMOscillator";
      this.sourceType = "pwm";
      this._scale = new Multiply({
        context: this.context,
        value: 2
      });
      const options = optionsFromArguments(PWMOscillator.getDefaults(), arguments, ["frequency", "modulationFrequency"]);
      this._pulse = new PulseOscillator({
        context: this.context,
        frequency: options.modulationFrequency
      });
      this._pulse.carrierType = "sine";
      this.modulationFrequency = this._pulse.frequency;
      this._modulator = new Oscillator({
        context: this.context,
        detune: options.detune,
        frequency: options.frequency,
        onstop: () => this.onstop(this),
        phase: options.phase
      });
      this.frequency = this._modulator.frequency;
      this.detune = this._modulator.detune;
      this._modulator.chain(this._scale, this._pulse.width);
      this._pulse.connect(this.output);
      readOnly(this, ["modulationFrequency", "frequency", "detune"]);
    }
    static getDefaults() {
      return Object.assign(Source.getDefaults(), {
        detune: 0,
        frequency: 440,
        modulationFrequency: 0.4,
        phase: 0,
        type: "pwm"
      });
    }
    _start(time) {
      time = this.toSeconds(time);
      this._modulator.start(time);
      this._pulse.start(time);
    }
    _stop(time) {
      time = this.toSeconds(time);
      this._modulator.stop(time);
      this._pulse.stop(time);
    }
    _restart(time) {
      this._modulator.restart(time);
      this._pulse.restart(time);
    }
    get type() {
      return "pwm";
    }
    get baseType() {
      return "pwm";
    }
    get partials() {
      return [];
    }
    get partialCount() {
      return 0;
    }
    get phase() {
      return this._modulator.phase;
    }
    set phase(phase) {
      this._modulator.phase = phase;
    }
    asArray(length = 1024) {
      return __awaiter(this, void 0, void 0, function* () {
        return generateWaveform(this, length);
      });
    }
    dispose() {
      super.dispose();
      this._pulse.dispose();
      this._scale.dispose();
      this._modulator.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/source/oscillator/OmniOscillator.js
  var OmniOscillatorSourceMap = {
    am: AMOscillator,
    fat: FatOscillator,
    fm: FMOscillator,
    oscillator: Oscillator,
    pulse: PulseOscillator,
    pwm: PWMOscillator
  };
  var OmniOscillator = class extends Source {
    constructor() {
      super(optionsFromArguments(OmniOscillator.getDefaults(), arguments, ["frequency", "type"]));
      this.name = "OmniOscillator";
      const options = optionsFromArguments(OmniOscillator.getDefaults(), arguments, ["frequency", "type"]);
      this.frequency = new Signal({
        context: this.context,
        units: "frequency",
        value: options.frequency
      });
      this.detune = new Signal({
        context: this.context,
        units: "cents",
        value: options.detune
      });
      readOnly(this, ["frequency", "detune"]);
      this.set(options);
    }
    static getDefaults() {
      return Object.assign(Oscillator.getDefaults(), FMOscillator.getDefaults(), AMOscillator.getDefaults(), FatOscillator.getDefaults(), PulseOscillator.getDefaults(), PWMOscillator.getDefaults());
    }
    _start(time) {
      this._oscillator.start(time);
    }
    _stop(time) {
      this._oscillator.stop(time);
    }
    _restart(time) {
      this._oscillator.restart(time);
      return this;
    }
    get type() {
      let prefix = "";
      if (["am", "fm", "fat"].some((p) => this._sourceType === p)) {
        prefix = this._sourceType;
      }
      return prefix + this._oscillator.type;
    }
    set type(type) {
      if (type.substr(0, 2) === "fm") {
        this._createNewOscillator("fm");
        this._oscillator = this._oscillator;
        this._oscillator.type = type.substr(2);
      } else if (type.substr(0, 2) === "am") {
        this._createNewOscillator("am");
        this._oscillator = this._oscillator;
        this._oscillator.type = type.substr(2);
      } else if (type.substr(0, 3) === "fat") {
        this._createNewOscillator("fat");
        this._oscillator = this._oscillator;
        this._oscillator.type = type.substr(3);
      } else if (type === "pwm") {
        this._createNewOscillator("pwm");
        this._oscillator = this._oscillator;
      } else if (type === "pulse") {
        this._createNewOscillator("pulse");
      } else {
        this._createNewOscillator("oscillator");
        this._oscillator = this._oscillator;
        this._oscillator.type = type;
      }
    }
    get partials() {
      return this._oscillator.partials;
    }
    set partials(partials) {
      if (!this._getOscType(this._oscillator, "pulse") && !this._getOscType(this._oscillator, "pwm")) {
        this._oscillator.partials = partials;
      }
    }
    get partialCount() {
      return this._oscillator.partialCount;
    }
    set partialCount(partialCount) {
      if (!this._getOscType(this._oscillator, "pulse") && !this._getOscType(this._oscillator, "pwm")) {
        this._oscillator.partialCount = partialCount;
      }
    }
    set(props) {
      if (Reflect.has(props, "type") && props.type) {
        this.type = props.type;
      }
      super.set(props);
      return this;
    }
    _createNewOscillator(oscType) {
      if (oscType !== this._sourceType) {
        this._sourceType = oscType;
        const OscConstructor = OmniOscillatorSourceMap[oscType];
        const now = this.now();
        if (this._oscillator) {
          const oldOsc = this._oscillator;
          oldOsc.stop(now);
          this.context.setTimeout(() => oldOsc.dispose(), this.blockTime);
        }
        this._oscillator = new OscConstructor({
          context: this.context
        });
        this.frequency.connect(this._oscillator.frequency);
        this.detune.connect(this._oscillator.detune);
        this._oscillator.connect(this.output);
        this._oscillator.onstop = () => this.onstop(this);
        if (this.state === "started") {
          this._oscillator.start(now);
        }
      }
    }
    get phase() {
      return this._oscillator.phase;
    }
    set phase(phase) {
      this._oscillator.phase = phase;
    }
    get sourceType() {
      return this._sourceType;
    }
    set sourceType(sType) {
      let baseType = "sine";
      if (this._oscillator.type !== "pwm" && this._oscillator.type !== "pulse") {
        baseType = this._oscillator.type;
      }
      if (sType === "fm") {
        this.type = "fm" + baseType;
      } else if (sType === "am") {
        this.type = "am" + baseType;
      } else if (sType === "fat") {
        this.type = "fat" + baseType;
      } else if (sType === "oscillator") {
        this.type = baseType;
      } else if (sType === "pulse") {
        this.type = "pulse";
      } else if (sType === "pwm") {
        this.type = "pwm";
      }
    }
    _getOscType(osc, sourceType) {
      return osc instanceof OmniOscillatorSourceMap[sourceType];
    }
    get baseType() {
      return this._oscillator.baseType;
    }
    set baseType(baseType) {
      if (!this._getOscType(this._oscillator, "pulse") && !this._getOscType(this._oscillator, "pwm") && baseType !== "pulse" && baseType !== "pwm") {
        this._oscillator.baseType = baseType;
      }
    }
    get width() {
      if (this._getOscType(this._oscillator, "pulse")) {
        return this._oscillator.width;
      } else {
        return void 0;
      }
    }
    get count() {
      if (this._getOscType(this._oscillator, "fat")) {
        return this._oscillator.count;
      } else {
        return void 0;
      }
    }
    set count(count) {
      if (this._getOscType(this._oscillator, "fat") && isNumber(count)) {
        this._oscillator.count = count;
      }
    }
    get spread() {
      if (this._getOscType(this._oscillator, "fat")) {
        return this._oscillator.spread;
      } else {
        return void 0;
      }
    }
    set spread(spread) {
      if (this._getOscType(this._oscillator, "fat") && isNumber(spread)) {
        this._oscillator.spread = spread;
      }
    }
    get modulationType() {
      if (this._getOscType(this._oscillator, "fm") || this._getOscType(this._oscillator, "am")) {
        return this._oscillator.modulationType;
      } else {
        return void 0;
      }
    }
    set modulationType(mType) {
      if ((this._getOscType(this._oscillator, "fm") || this._getOscType(this._oscillator, "am")) && isString(mType)) {
        this._oscillator.modulationType = mType;
      }
    }
    get modulationIndex() {
      if (this._getOscType(this._oscillator, "fm")) {
        return this._oscillator.modulationIndex;
      } else {
        return void 0;
      }
    }
    get harmonicity() {
      if (this._getOscType(this._oscillator, "fm") || this._getOscType(this._oscillator, "am")) {
        return this._oscillator.harmonicity;
      } else {
        return void 0;
      }
    }
    get modulationFrequency() {
      if (this._getOscType(this._oscillator, "pwm")) {
        return this._oscillator.modulationFrequency;
      } else {
        return void 0;
      }
    }
    asArray(length = 1024) {
      return __awaiter(this, void 0, void 0, function* () {
        return generateWaveform(this, length);
      });
    }
    dispose() {
      super.dispose();
      this.detune.dispose();
      this.frequency.dispose();
      this._oscillator.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/signal/Add.js
  var Add = class extends Signal {
    constructor() {
      super(Object.assign(optionsFromArguments(Add.getDefaults(), arguments, ["value"])));
      this.override = false;
      this.name = "Add";
      this._sum = new Gain({ context: this.context });
      this.input = this._sum;
      this.output = this._sum;
      this.addend = this._param;
      connectSeries(this._constantSource, this._sum);
    }
    static getDefaults() {
      return Object.assign(Signal.getDefaults(), {
        value: 0
      });
    }
    dispose() {
      super.dispose();
      this._sum.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/signal/Scale.js
  var Scale = class extends SignalOperator {
    constructor() {
      super(Object.assign(optionsFromArguments(Scale.getDefaults(), arguments, ["min", "max"])));
      this.name = "Scale";
      const options = optionsFromArguments(Scale.getDefaults(), arguments, ["min", "max"]);
      this._mult = this.input = new Multiply({
        context: this.context,
        value: options.max - options.min
      });
      this._add = this.output = new Add({
        context: this.context,
        value: options.min
      });
      this._min = options.min;
      this._max = options.max;
      this.input.connect(this.output);
    }
    static getDefaults() {
      return Object.assign(SignalOperator.getDefaults(), {
        max: 1,
        min: 0
      });
    }
    get min() {
      return this._min;
    }
    set min(min) {
      this._min = min;
      this._setRange();
    }
    get max() {
      return this._max;
    }
    set max(max) {
      this._max = max;
      this._setRange();
    }
    _setRange() {
      this._add.value = this._min;
      this._mult.value = this._max - this._min;
    }
    dispose() {
      super.dispose();
      this._add.dispose();
      this._mult.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/signal/Zero.js
  var Zero = class extends SignalOperator {
    constructor() {
      super(Object.assign(optionsFromArguments(Zero.getDefaults(), arguments)));
      this.name = "Zero";
      this._gain = new Gain({ context: this.context });
      this.output = this._gain;
      this.input = void 0;
      connect(this.context.getConstant(0), this._gain);
    }
    dispose() {
      super.dispose();
      disconnect(this.context.getConstant(0), this._gain);
      return this;
    }
  };

  // node_modules/tone/build/esm/source/oscillator/LFO.js
  var LFO = class extends ToneAudioNode {
    constructor() {
      super(optionsFromArguments(LFO.getDefaults(), arguments, ["frequency", "min", "max"]));
      this.name = "LFO";
      this._stoppedValue = 0;
      this._units = "number";
      this.convert = true;
      this._fromType = Param.prototype._fromType;
      this._toType = Param.prototype._toType;
      this._is = Param.prototype._is;
      this._clampValue = Param.prototype._clampValue;
      const options = optionsFromArguments(LFO.getDefaults(), arguments, ["frequency", "min", "max"]);
      this._oscillator = new Oscillator(options);
      this.frequency = this._oscillator.frequency;
      this._amplitudeGain = new Gain({
        context: this.context,
        gain: options.amplitude,
        units: "normalRange"
      });
      this.amplitude = this._amplitudeGain.gain;
      this._stoppedSignal = new Signal({
        context: this.context,
        units: "audioRange",
        value: 0
      });
      this._zeros = new Zero({ context: this.context });
      this._a2g = new AudioToGain({ context: this.context });
      this._scaler = this.output = new Scale({
        context: this.context,
        max: options.max,
        min: options.min
      });
      this.units = options.units;
      this.min = options.min;
      this.max = options.max;
      this._oscillator.chain(this._amplitudeGain, this._a2g, this._scaler);
      this._zeros.connect(this._a2g);
      this._stoppedSignal.connect(this._a2g);
      readOnly(this, ["amplitude", "frequency"]);
      this.phase = options.phase;
    }
    static getDefaults() {
      return Object.assign(Oscillator.getDefaults(), {
        amplitude: 1,
        frequency: "4n",
        max: 1,
        min: 0,
        type: "sine",
        units: "number"
      });
    }
    start(time) {
      time = this.toSeconds(time);
      this._stoppedSignal.setValueAtTime(0, time);
      this._oscillator.start(time);
      return this;
    }
    stop(time) {
      time = this.toSeconds(time);
      this._stoppedSignal.setValueAtTime(this._stoppedValue, time);
      this._oscillator.stop(time);
      return this;
    }
    sync() {
      this._oscillator.sync();
      this._oscillator.syncFrequency();
      return this;
    }
    unsync() {
      this._oscillator.unsync();
      this._oscillator.unsyncFrequency();
      return this;
    }
    _setStoppedValue() {
      this._stoppedValue = this._oscillator.getInitialValue();
      this._stoppedSignal.value = this._stoppedValue;
    }
    get min() {
      return this._toType(this._scaler.min);
    }
    set min(min) {
      min = this._fromType(min);
      this._scaler.min = min;
    }
    get max() {
      return this._toType(this._scaler.max);
    }
    set max(max) {
      max = this._fromType(max);
      this._scaler.max = max;
    }
    get type() {
      return this._oscillator.type;
    }
    set type(type) {
      this._oscillator.type = type;
      this._setStoppedValue();
    }
    get partials() {
      return this._oscillator.partials;
    }
    set partials(partials) {
      this._oscillator.partials = partials;
      this._setStoppedValue();
    }
    get phase() {
      return this._oscillator.phase;
    }
    set phase(phase) {
      this._oscillator.phase = phase;
      this._setStoppedValue();
    }
    get units() {
      return this._units;
    }
    set units(val) {
      const currentMin = this.min;
      const currentMax = this.max;
      this._units = val;
      this.min = currentMin;
      this.max = currentMax;
    }
    get state() {
      return this._oscillator.state;
    }
    connect(node, outputNum, inputNum) {
      if (node instanceof Param || node instanceof Signal) {
        this.convert = node.convert;
        this.units = node.units;
      }
      connectSignal(this, node, outputNum, inputNum);
      return this;
    }
    dispose() {
      super.dispose();
      this._oscillator.dispose();
      this._stoppedSignal.dispose();
      this._zeros.dispose();
      this._scaler.dispose();
      this._a2g.dispose();
      this._amplitudeGain.dispose();
      this.amplitude.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/core/util/Decorator.js
  function range(min, max = Infinity) {
    const valueMap = new WeakMap();
    return function(target, propertyKey) {
      Reflect.defineProperty(target, propertyKey, {
        configurable: true,
        enumerable: true,
        get: function() {
          return valueMap.get(this);
        },
        set: function(newValue) {
          assertRange(newValue, min, max);
          valueMap.set(this, newValue);
        }
      });
    };
  }
  function timeRange(min, max = Infinity) {
    const valueMap = new WeakMap();
    return function(target, propertyKey) {
      Reflect.defineProperty(target, propertyKey, {
        configurable: true,
        enumerable: true,
        get: function() {
          return valueMap.get(this);
        },
        set: function(newValue) {
          assertRange(this.toSeconds(newValue), min, max);
          valueMap.set(this, newValue);
        }
      });
    };
  }

  // node_modules/tone/build/esm/source/buffer/Player.js
  var Player = class extends Source {
    constructor() {
      super(optionsFromArguments(Player.getDefaults(), arguments, ["url", "onload"]));
      this.name = "Player";
      this._activeSources = new Set();
      const options = optionsFromArguments(Player.getDefaults(), arguments, ["url", "onload"]);
      this._buffer = new ToneAudioBuffer({
        onload: this._onload.bind(this, options.onload),
        onerror: options.onerror,
        reverse: options.reverse,
        url: options.url
      });
      this.autostart = options.autostart;
      this._loop = options.loop;
      this._loopStart = options.loopStart;
      this._loopEnd = options.loopEnd;
      this._playbackRate = options.playbackRate;
      this.fadeIn = options.fadeIn;
      this.fadeOut = options.fadeOut;
    }
    static getDefaults() {
      return Object.assign(Source.getDefaults(), {
        autostart: false,
        fadeIn: 0,
        fadeOut: 0,
        loop: false,
        loopEnd: 0,
        loopStart: 0,
        onload: noOp,
        onerror: noOp,
        playbackRate: 1,
        reverse: false
      });
    }
    load(url) {
      return __awaiter(this, void 0, void 0, function* () {
        yield this._buffer.load(url);
        this._onload();
        return this;
      });
    }
    _onload(callback = noOp) {
      callback();
      if (this.autostart) {
        this.start();
      }
    }
    _onSourceEnd(source) {
      this.onstop(this);
      this._activeSources.delete(source);
      if (this._activeSources.size === 0 && !this._synced && this._state.getValueAtTime(this.now()) === "started") {
        this._state.cancel(this.now());
        this._state.setStateAtTime("stopped", this.now());
      }
    }
    start(time, offset, duration) {
      super.start(time, offset, duration);
      return this;
    }
    _start(startTime, offset, duration) {
      if (this._loop) {
        offset = defaultArg(offset, this._loopStart);
      } else {
        offset = defaultArg(offset, 0);
      }
      const computedOffset = this.toSeconds(offset);
      const origDuration = duration;
      duration = defaultArg(duration, Math.max(this._buffer.duration - computedOffset, 0));
      let computedDuration = this.toSeconds(duration);
      computedDuration = computedDuration / this._playbackRate;
      startTime = this.toSeconds(startTime);
      const source = new ToneBufferSource({
        url: this._buffer,
        context: this.context,
        fadeIn: this.fadeIn,
        fadeOut: this.fadeOut,
        loop: this._loop,
        loopEnd: this._loopEnd,
        loopStart: this._loopStart,
        onended: this._onSourceEnd.bind(this),
        playbackRate: this._playbackRate
      }).connect(this.output);
      if (!this._loop && !this._synced) {
        this._state.cancel(startTime + computedDuration);
        this._state.setStateAtTime("stopped", startTime + computedDuration, {
          implicitEnd: true
        });
      }
      this._activeSources.add(source);
      if (this._loop && isUndef(origDuration)) {
        source.start(startTime, computedOffset);
      } else {
        source.start(startTime, computedOffset, computedDuration - this.toSeconds(this.fadeOut));
      }
    }
    _stop(time) {
      const computedTime = this.toSeconds(time);
      this._activeSources.forEach((source) => source.stop(computedTime));
    }
    restart(time, offset, duration) {
      super.restart(time, offset, duration);
      return this;
    }
    _restart(time, offset, duration) {
      this._stop(time);
      this._start(time, offset, duration);
    }
    seek(offset, when) {
      const computedTime = this.toSeconds(when);
      if (this._state.getValueAtTime(computedTime) === "started") {
        const computedOffset = this.toSeconds(offset);
        this._stop(computedTime);
        this._start(computedTime, computedOffset);
      }
      return this;
    }
    setLoopPoints(loopStart, loopEnd) {
      this.loopStart = loopStart;
      this.loopEnd = loopEnd;
      return this;
    }
    get loopStart() {
      return this._loopStart;
    }
    set loopStart(loopStart) {
      this._loopStart = loopStart;
      if (this.buffer.loaded) {
        assertRange(this.toSeconds(loopStart), 0, this.buffer.duration);
      }
      this._activeSources.forEach((source) => {
        source.loopStart = loopStart;
      });
    }
    get loopEnd() {
      return this._loopEnd;
    }
    set loopEnd(loopEnd) {
      this._loopEnd = loopEnd;
      if (this.buffer.loaded) {
        assertRange(this.toSeconds(loopEnd), 0, this.buffer.duration);
      }
      this._activeSources.forEach((source) => {
        source.loopEnd = loopEnd;
      });
    }
    get buffer() {
      return this._buffer;
    }
    set buffer(buffer) {
      this._buffer.set(buffer);
    }
    get loop() {
      return this._loop;
    }
    set loop(loop) {
      if (this._loop === loop) {
        return;
      }
      this._loop = loop;
      this._activeSources.forEach((source) => {
        source.loop = loop;
      });
      if (loop) {
        const stopEvent = this._state.getNextState("stopped", this.now());
        if (stopEvent) {
          this._state.cancel(stopEvent.time);
        }
      }
    }
    get playbackRate() {
      return this._playbackRate;
    }
    set playbackRate(rate) {
      this._playbackRate = rate;
      const now = this.now();
      const stopEvent = this._state.getNextState("stopped", now);
      if (stopEvent && stopEvent.implicitEnd) {
        this._state.cancel(stopEvent.time);
        this._activeSources.forEach((source) => source.cancelStop());
      }
      this._activeSources.forEach((source) => {
        source.playbackRate.setValueAtTime(rate, now);
      });
    }
    get reverse() {
      return this._buffer.reverse;
    }
    set reverse(rev) {
      this._buffer.reverse = rev;
    }
    get loaded() {
      return this._buffer.loaded;
    }
    dispose() {
      super.dispose();
      this._activeSources.forEach((source) => source.dispose());
      this._activeSources.clear();
      this._buffer.dispose();
      return this;
    }
  };
  __decorate([
    timeRange(0)
  ], Player.prototype, "fadeIn", void 0);
  __decorate([
    timeRange(0)
  ], Player.prototype, "fadeOut", void 0);

  // node_modules/tone/build/esm/signal/GainToAudio.js
  var GainToAudio = class extends SignalOperator {
    constructor() {
      super(...arguments);
      this.name = "GainToAudio";
      this._norm = new WaveShaper({
        context: this.context,
        mapping: (x) => Math.abs(x) * 2 - 1
      });
      this.input = this._norm;
      this.output = this._norm;
    }
    dispose() {
      super.dispose();
      this._norm.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/component/envelope/Envelope.js
  var Envelope = class extends ToneAudioNode {
    constructor() {
      super(optionsFromArguments(Envelope.getDefaults(), arguments, ["attack", "decay", "sustain", "release"]));
      this.name = "Envelope";
      this._sig = new Signal({
        context: this.context,
        value: 0
      });
      this.output = this._sig;
      this.input = void 0;
      const options = optionsFromArguments(Envelope.getDefaults(), arguments, ["attack", "decay", "sustain", "release"]);
      this.attack = options.attack;
      this.decay = options.decay;
      this.sustain = options.sustain;
      this.release = options.release;
      this.attackCurve = options.attackCurve;
      this.releaseCurve = options.releaseCurve;
      this.decayCurve = options.decayCurve;
    }
    static getDefaults() {
      return Object.assign(ToneAudioNode.getDefaults(), {
        attack: 0.01,
        attackCurve: "linear",
        decay: 0.1,
        decayCurve: "exponential",
        release: 1,
        releaseCurve: "exponential",
        sustain: 0.5
      });
    }
    get value() {
      return this.getValueAtTime(this.now());
    }
    _getCurve(curve, direction) {
      if (isString(curve)) {
        return curve;
      } else {
        let curveName;
        for (curveName in EnvelopeCurves) {
          if (EnvelopeCurves[curveName][direction] === curve) {
            return curveName;
          }
        }
        return curve;
      }
    }
    _setCurve(name, direction, curve) {
      if (isString(curve) && Reflect.has(EnvelopeCurves, curve)) {
        const curveDef = EnvelopeCurves[curve];
        if (isObject(curveDef)) {
          if (name !== "_decayCurve") {
            this[name] = curveDef[direction];
          }
        } else {
          this[name] = curveDef;
        }
      } else if (isArray(curve) && name !== "_decayCurve") {
        this[name] = curve;
      } else {
        throw new Error("Envelope: invalid curve: " + curve);
      }
    }
    get attackCurve() {
      return this._getCurve(this._attackCurve, "In");
    }
    set attackCurve(curve) {
      this._setCurve("_attackCurve", "In", curve);
    }
    get releaseCurve() {
      return this._getCurve(this._releaseCurve, "Out");
    }
    set releaseCurve(curve) {
      this._setCurve("_releaseCurve", "Out", curve);
    }
    get decayCurve() {
      return this._decayCurve;
    }
    set decayCurve(curve) {
      assert(["linear", "exponential"].some((c) => c === curve), `Invalid envelope curve: ${curve}`);
      this._decayCurve = curve;
    }
    triggerAttack(time, velocity = 1) {
      this.log("triggerAttack", time, velocity);
      time = this.toSeconds(time);
      const originalAttack = this.toSeconds(this.attack);
      let attack = originalAttack;
      const decay = this.toSeconds(this.decay);
      const currentValue = this.getValueAtTime(time);
      if (currentValue > 0) {
        const attackRate = 1 / attack;
        const remainingDistance = 1 - currentValue;
        attack = remainingDistance / attackRate;
      }
      if (attack < this.sampleTime) {
        this._sig.cancelScheduledValues(time);
        this._sig.setValueAtTime(velocity, time);
      } else if (this._attackCurve === "linear") {
        this._sig.linearRampTo(velocity, attack, time);
      } else if (this._attackCurve === "exponential") {
        this._sig.targetRampTo(velocity, attack, time);
      } else {
        this._sig.cancelAndHoldAtTime(time);
        let curve = this._attackCurve;
        for (let i = 1; i < curve.length; i++) {
          if (curve[i - 1] <= currentValue && currentValue <= curve[i]) {
            curve = this._attackCurve.slice(i);
            curve[0] = currentValue;
            break;
          }
        }
        this._sig.setValueCurveAtTime(curve, time, attack, velocity);
      }
      if (decay && this.sustain < 1) {
        const decayValue = velocity * this.sustain;
        const decayStart = time + attack;
        this.log("decay", decayStart);
        if (this._decayCurve === "linear") {
          this._sig.linearRampToValueAtTime(decayValue, decay + decayStart);
        } else {
          this._sig.exponentialApproachValueAtTime(decayValue, decayStart, decay);
        }
      }
      return this;
    }
    triggerRelease(time) {
      this.log("triggerRelease", time);
      time = this.toSeconds(time);
      const currentValue = this.getValueAtTime(time);
      if (currentValue > 0) {
        const release = this.toSeconds(this.release);
        if (release < this.sampleTime) {
          this._sig.setValueAtTime(0, time);
        } else if (this._releaseCurve === "linear") {
          this._sig.linearRampTo(0, release, time);
        } else if (this._releaseCurve === "exponential") {
          this._sig.targetRampTo(0, release, time);
        } else {
          assert(isArray(this._releaseCurve), "releaseCurve must be either 'linear', 'exponential' or an array");
          this._sig.cancelAndHoldAtTime(time);
          this._sig.setValueCurveAtTime(this._releaseCurve, time, release, currentValue);
        }
      }
      return this;
    }
    getValueAtTime(time) {
      return this._sig.getValueAtTime(time);
    }
    triggerAttackRelease(duration, time, velocity = 1) {
      time = this.toSeconds(time);
      this.triggerAttack(time, velocity);
      this.triggerRelease(time + this.toSeconds(duration));
      return this;
    }
    cancel(after) {
      this._sig.cancelScheduledValues(this.toSeconds(after));
      return this;
    }
    connect(destination, outputNumber = 0, inputNumber = 0) {
      connectSignal(this, destination, outputNumber, inputNumber);
      return this;
    }
    asArray(length = 1024) {
      return __awaiter(this, void 0, void 0, function* () {
        const duration = length / this.context.sampleRate;
        const context2 = new OfflineContext(1, duration, this.context.sampleRate);
        const attackPortion = this.toSeconds(this.attack) + this.toSeconds(this.decay);
        const envelopeDuration = attackPortion + this.toSeconds(this.release);
        const sustainTime = envelopeDuration * 0.1;
        const totalDuration = envelopeDuration + sustainTime;
        const clone = new this.constructor(Object.assign(this.get(), {
          attack: duration * this.toSeconds(this.attack) / totalDuration,
          decay: duration * this.toSeconds(this.decay) / totalDuration,
          release: duration * this.toSeconds(this.release) / totalDuration,
          context: context2
        }));
        clone._sig.toDestination();
        clone.triggerAttackRelease(duration * (attackPortion + sustainTime) / totalDuration, 0);
        const buffer = yield context2.render();
        return buffer.getChannelData(0);
      });
    }
    dispose() {
      super.dispose();
      this._sig.dispose();
      return this;
    }
  };
  __decorate([
    timeRange(0)
  ], Envelope.prototype, "attack", void 0);
  __decorate([
    timeRange(0)
  ], Envelope.prototype, "decay", void 0);
  __decorate([
    range(0, 1)
  ], Envelope.prototype, "sustain", void 0);
  __decorate([
    timeRange(0)
  ], Envelope.prototype, "release", void 0);
  var EnvelopeCurves = (() => {
    const curveLen = 128;
    let i;
    let k;
    const cosineCurve = [];
    for (i = 0; i < curveLen; i++) {
      cosineCurve[i] = Math.sin(i / (curveLen - 1) * (Math.PI / 2));
    }
    const rippleCurve = [];
    const rippleCurveFreq = 6.4;
    for (i = 0; i < curveLen - 1; i++) {
      k = i / (curveLen - 1);
      const sineWave = Math.sin(k * (Math.PI * 2) * rippleCurveFreq - Math.PI / 2) + 1;
      rippleCurve[i] = sineWave / 10 + k * 0.83;
    }
    rippleCurve[curveLen - 1] = 1;
    const stairsCurve = [];
    const steps = 5;
    for (i = 0; i < curveLen; i++) {
      stairsCurve[i] = Math.ceil(i / (curveLen - 1) * steps) / steps;
    }
    const sineCurve = [];
    for (i = 0; i < curveLen; i++) {
      k = i / (curveLen - 1);
      sineCurve[i] = 0.5 * (1 - Math.cos(Math.PI * k));
    }
    const bounceCurve = [];
    for (i = 0; i < curveLen; i++) {
      k = i / (curveLen - 1);
      const freq = Math.pow(k, 3) * 4 + 0.2;
      const val = Math.cos(freq * Math.PI * 2 * k);
      bounceCurve[i] = Math.abs(val * (1 - k));
    }
    function invertCurve(curve) {
      const out = new Array(curve.length);
      for (let j = 0; j < curve.length; j++) {
        out[j] = 1 - curve[j];
      }
      return out;
    }
    function reverseCurve(curve) {
      return curve.slice(0).reverse();
    }
    return {
      bounce: {
        In: invertCurve(bounceCurve),
        Out: bounceCurve
      },
      cosine: {
        In: cosineCurve,
        Out: reverseCurve(cosineCurve)
      },
      exponential: "exponential",
      linear: "linear",
      ripple: {
        In: rippleCurve,
        Out: invertCurve(rippleCurve)
      },
      sine: {
        In: sineCurve,
        Out: invertCurve(sineCurve)
      },
      step: {
        In: stairsCurve,
        Out: invertCurve(stairsCurve)
      }
    };
  })();

  // node_modules/tone/build/esm/instrument/Instrument.js
  var Instrument = class extends ToneAudioNode {
    constructor() {
      super(optionsFromArguments(Instrument.getDefaults(), arguments));
      this._scheduledEvents = [];
      this._synced = false;
      this._original_triggerAttack = this.triggerAttack;
      this._original_triggerRelease = this.triggerRelease;
      const options = optionsFromArguments(Instrument.getDefaults(), arguments);
      this._volume = this.output = new Volume({
        context: this.context,
        volume: options.volume
      });
      this.volume = this._volume.volume;
      readOnly(this, "volume");
    }
    static getDefaults() {
      return Object.assign(ToneAudioNode.getDefaults(), {
        volume: 0
      });
    }
    sync() {
      if (this._syncState()) {
        this._syncMethod("triggerAttack", 1);
        this._syncMethod("triggerRelease", 0);
      }
      return this;
    }
    _syncState() {
      let changed = false;
      if (!this._synced) {
        this._synced = true;
        changed = true;
      }
      return changed;
    }
    _syncMethod(method, timePosition) {
      const originalMethod = this["_original_" + method] = this[method];
      this[method] = (...args) => {
        const time = args[timePosition];
        const id = this.context.transport.schedule((t) => {
          args[timePosition] = t;
          originalMethod.apply(this, args);
        }, time);
        this._scheduledEvents.push(id);
      };
    }
    unsync() {
      this._scheduledEvents.forEach((id) => this.context.transport.clear(id));
      this._scheduledEvents = [];
      if (this._synced) {
        this._synced = false;
        this.triggerAttack = this._original_triggerAttack;
        this.triggerRelease = this._original_triggerRelease;
      }
      return this;
    }
    triggerAttackRelease(note, duration, time, velocity) {
      const computedTime = this.toSeconds(time);
      const computedDuration = this.toSeconds(duration);
      this.triggerAttack(note, computedTime, velocity);
      this.triggerRelease(computedTime + computedDuration);
      return this;
    }
    dispose() {
      super.dispose();
      this._volume.dispose();
      this.unsync();
      this._scheduledEvents = [];
      return this;
    }
  };

  // node_modules/tone/build/esm/instrument/Monophonic.js
  var Monophonic = class extends Instrument {
    constructor() {
      super(optionsFromArguments(Monophonic.getDefaults(), arguments));
      const options = optionsFromArguments(Monophonic.getDefaults(), arguments);
      this.portamento = options.portamento;
      this.onsilence = options.onsilence;
    }
    static getDefaults() {
      return Object.assign(Instrument.getDefaults(), {
        detune: 0,
        onsilence: noOp,
        portamento: 0
      });
    }
    triggerAttack(note, time, velocity = 1) {
      this.log("triggerAttack", note, time, velocity);
      const seconds = this.toSeconds(time);
      this._triggerEnvelopeAttack(seconds, velocity);
      this.setNote(note, seconds);
      return this;
    }
    triggerRelease(time) {
      this.log("triggerRelease", time);
      const seconds = this.toSeconds(time);
      this._triggerEnvelopeRelease(seconds);
      return this;
    }
    setNote(note, time) {
      const computedTime = this.toSeconds(time);
      const computedFrequency = note instanceof FrequencyClass ? note.toFrequency() : note;
      if (this.portamento > 0 && this.getLevelAtTime(computedTime) > 0.05) {
        const portTime = this.toSeconds(this.portamento);
        this.frequency.exponentialRampTo(computedFrequency, portTime, computedTime);
      } else {
        this.frequency.setValueAtTime(computedFrequency, computedTime);
      }
      return this;
    }
  };
  __decorate([
    timeRange(0)
  ], Monophonic.prototype, "portamento", void 0);

  // node_modules/tone/build/esm/component/envelope/AmplitudeEnvelope.js
  var AmplitudeEnvelope = class extends Envelope {
    constructor() {
      super(optionsFromArguments(AmplitudeEnvelope.getDefaults(), arguments, ["attack", "decay", "sustain", "release"]));
      this.name = "AmplitudeEnvelope";
      this._gainNode = new Gain({
        context: this.context,
        gain: 0
      });
      this.output = this._gainNode;
      this.input = this._gainNode;
      this._sig.connect(this._gainNode.gain);
      this.output = this._gainNode;
      this.input = this._gainNode;
    }
    dispose() {
      super.dispose();
      this._gainNode.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/instrument/Synth.js
  var Synth = class extends Monophonic {
    constructor() {
      super(optionsFromArguments(Synth.getDefaults(), arguments));
      this.name = "Synth";
      const options = optionsFromArguments(Synth.getDefaults(), arguments);
      this.oscillator = new OmniOscillator(Object.assign({
        context: this.context,
        detune: options.detune,
        onstop: () => this.onsilence(this)
      }, options.oscillator));
      this.frequency = this.oscillator.frequency;
      this.detune = this.oscillator.detune;
      this.envelope = new AmplitudeEnvelope(Object.assign({
        context: this.context
      }, options.envelope));
      this.oscillator.chain(this.envelope, this.output);
      readOnly(this, ["oscillator", "frequency", "detune", "envelope"]);
    }
    static getDefaults() {
      return Object.assign(Monophonic.getDefaults(), {
        envelope: Object.assign(omitFromObject(Envelope.getDefaults(), Object.keys(ToneAudioNode.getDefaults())), {
          attack: 5e-3,
          decay: 0.1,
          release: 1,
          sustain: 0.3
        }),
        oscillator: Object.assign(omitFromObject(OmniOscillator.getDefaults(), [...Object.keys(Source.getDefaults()), "frequency", "detune"]), {
          type: "triangle"
        })
      });
    }
    _triggerEnvelopeAttack(time, velocity) {
      this.envelope.triggerAttack(time, velocity);
      this.oscillator.start(time);
      if (this.envelope.sustain === 0) {
        const computedAttack = this.toSeconds(this.envelope.attack);
        const computedDecay = this.toSeconds(this.envelope.decay);
        this.oscillator.stop(time + computedAttack + computedDecay);
      }
    }
    _triggerEnvelopeRelease(time) {
      this.envelope.triggerRelease(time);
      this.oscillator.stop(time + this.toSeconds(this.envelope.release));
    }
    getLevelAtTime(time) {
      time = this.toSeconds(time);
      return this.envelope.getValueAtTime(time);
    }
    dispose() {
      super.dispose();
      this.oscillator.dispose();
      this.envelope.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/component/filter/BiquadFilter.js
  var BiquadFilter = class extends ToneAudioNode {
    constructor() {
      super(optionsFromArguments(BiquadFilter.getDefaults(), arguments, ["frequency", "type"]));
      this.name = "BiquadFilter";
      const options = optionsFromArguments(BiquadFilter.getDefaults(), arguments, ["frequency", "type"]);
      this._filter = this.context.createBiquadFilter();
      this.input = this.output = this._filter;
      this.Q = new Param({
        context: this.context,
        units: "number",
        value: options.Q,
        param: this._filter.Q
      });
      this.frequency = new Param({
        context: this.context,
        units: "frequency",
        value: options.frequency,
        param: this._filter.frequency
      });
      this.detune = new Param({
        context: this.context,
        units: "cents",
        value: options.detune,
        param: this._filter.detune
      });
      this.gain = new Param({
        context: this.context,
        units: "decibels",
        convert: false,
        value: options.gain,
        param: this._filter.gain
      });
      this.type = options.type;
    }
    static getDefaults() {
      return Object.assign(ToneAudioNode.getDefaults(), {
        Q: 1,
        type: "lowpass",
        frequency: 350,
        detune: 0,
        gain: 0
      });
    }
    get type() {
      return this._filter.type;
    }
    set type(type) {
      const types = [
        "lowpass",
        "highpass",
        "bandpass",
        "lowshelf",
        "highshelf",
        "notch",
        "allpass",
        "peaking"
      ];
      assert(types.indexOf(type) !== -1, `Invalid filter type: ${type}`);
      this._filter.type = type;
    }
    getFrequencyResponse(len = 128) {
      const freqValues = new Float32Array(len);
      for (let i = 0; i < len; i++) {
        const norm = Math.pow(i / len, 2);
        const freq = norm * (2e4 - 20) + 20;
        freqValues[i] = freq;
      }
      const magValues = new Float32Array(len);
      const phaseValues = new Float32Array(len);
      const filterClone = this.context.createBiquadFilter();
      filterClone.type = this.type;
      filterClone.Q.value = this.Q.value;
      filterClone.frequency.value = this.frequency.value;
      filterClone.gain.value = this.gain.value;
      filterClone.getFrequencyResponse(freqValues, magValues, phaseValues);
      return magValues;
    }
    dispose() {
      super.dispose();
      this._filter.disconnect();
      this.Q.dispose();
      this.frequency.dispose();
      this.gain.dispose();
      this.detune.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/component/filter/Filter.js
  var Filter = class extends ToneAudioNode {
    constructor() {
      super(optionsFromArguments(Filter.getDefaults(), arguments, ["frequency", "type", "rolloff"]));
      this.name = "Filter";
      this.input = new Gain({ context: this.context });
      this.output = new Gain({ context: this.context });
      this._filters = [];
      const options = optionsFromArguments(Filter.getDefaults(), arguments, ["frequency", "type", "rolloff"]);
      this._filters = [];
      this.Q = new Signal({
        context: this.context,
        units: "positive",
        value: options.Q
      });
      this.frequency = new Signal({
        context: this.context,
        units: "frequency",
        value: options.frequency
      });
      this.detune = new Signal({
        context: this.context,
        units: "cents",
        value: options.detune
      });
      this.gain = new Signal({
        context: this.context,
        units: "decibels",
        convert: false,
        value: options.gain
      });
      this._type = options.type;
      this.rolloff = options.rolloff;
      readOnly(this, ["detune", "frequency", "gain", "Q"]);
    }
    static getDefaults() {
      return Object.assign(ToneAudioNode.getDefaults(), {
        Q: 1,
        detune: 0,
        frequency: 350,
        gain: 0,
        rolloff: -12,
        type: "lowpass"
      });
    }
    get type() {
      return this._type;
    }
    set type(type) {
      const types = [
        "lowpass",
        "highpass",
        "bandpass",
        "lowshelf",
        "highshelf",
        "notch",
        "allpass",
        "peaking"
      ];
      assert(types.indexOf(type) !== -1, `Invalid filter type: ${type}`);
      this._type = type;
      this._filters.forEach((filter) => filter.type = type);
    }
    get rolloff() {
      return this._rolloff;
    }
    set rolloff(rolloff) {
      const rolloffNum = isNumber(rolloff) ? rolloff : parseInt(rolloff, 10);
      const possibilities = [-12, -24, -48, -96];
      let cascadingCount = possibilities.indexOf(rolloffNum);
      assert(cascadingCount !== -1, `rolloff can only be ${possibilities.join(", ")}`);
      cascadingCount += 1;
      this._rolloff = rolloffNum;
      this.input.disconnect();
      this._filters.forEach((filter) => filter.disconnect());
      this._filters = new Array(cascadingCount);
      for (let count = 0; count < cascadingCount; count++) {
        const filter = new BiquadFilter({
          context: this.context
        });
        filter.type = this._type;
        this.frequency.connect(filter.frequency);
        this.detune.connect(filter.detune);
        this.Q.connect(filter.Q);
        this.gain.connect(filter.gain);
        this._filters[count] = filter;
      }
      this._internalChannels = this._filters;
      connectSeries(this.input, ...this._internalChannels, this.output);
    }
    getFrequencyResponse(len = 128) {
      const filterClone = new BiquadFilter({
        frequency: this.frequency.value,
        gain: this.gain.value,
        Q: this.Q.value,
        type: this._type,
        detune: this.detune.value
      });
      const totalResponse = new Float32Array(len).map(() => 1);
      this._filters.forEach(() => {
        const response = filterClone.getFrequencyResponse(len);
        response.forEach((val, i) => totalResponse[i] *= val);
      });
      filterClone.dispose();
      return totalResponse;
    }
    dispose() {
      super.dispose();
      this._filters.forEach((filter) => {
        filter.dispose();
      });
      writable(this, ["detune", "frequency", "gain", "Q"]);
      this.frequency.dispose();
      this.Q.dispose();
      this.detune.dispose();
      this.gain.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/instrument/MetalSynth.js
  var inharmRatios = [1, 1.483, 1.932, 2.546, 2.63, 3.897];
  var MetalSynth = class extends Monophonic {
    constructor() {
      super(optionsFromArguments(MetalSynth.getDefaults(), arguments));
      this.name = "MetalSynth";
      this._oscillators = [];
      this._freqMultipliers = [];
      const options = optionsFromArguments(MetalSynth.getDefaults(), arguments);
      this.detune = new Signal({
        context: this.context,
        units: "cents",
        value: options.detune
      });
      this.frequency = new Signal({
        context: this.context,
        units: "frequency"
      });
      this._amplitude = new Gain({
        context: this.context,
        gain: 0
      }).connect(this.output);
      this._highpass = new Filter({
        Q: 0,
        context: this.context,
        type: "highpass"
      }).connect(this._amplitude);
      for (let i = 0; i < inharmRatios.length; i++) {
        const osc = new FMOscillator({
          context: this.context,
          harmonicity: options.harmonicity,
          modulationIndex: options.modulationIndex,
          modulationType: "square",
          onstop: i === 0 ? () => this.onsilence(this) : noOp,
          type: "square"
        });
        osc.connect(this._highpass);
        this._oscillators[i] = osc;
        const mult = new Multiply({
          context: this.context,
          value: inharmRatios[i]
        });
        this._freqMultipliers[i] = mult;
        this.frequency.chain(mult, osc.frequency);
        this.detune.connect(osc.detune);
      }
      this._filterFreqScaler = new Scale({
        context: this.context,
        max: 7e3,
        min: this.toFrequency(options.resonance)
      });
      this.envelope = new Envelope({
        attack: options.envelope.attack,
        attackCurve: "linear",
        context: this.context,
        decay: options.envelope.decay,
        release: options.envelope.release,
        sustain: 0
      });
      this.envelope.chain(this._filterFreqScaler, this._highpass.frequency);
      this.envelope.connect(this._amplitude.gain);
      this._octaves = options.octaves;
      this.octaves = options.octaves;
    }
    static getDefaults() {
      return deepMerge(Monophonic.getDefaults(), {
        envelope: Object.assign(omitFromObject(Envelope.getDefaults(), Object.keys(ToneAudioNode.getDefaults())), {
          attack: 1e-3,
          decay: 1.4,
          release: 0.2
        }),
        harmonicity: 5.1,
        modulationIndex: 32,
        octaves: 1.5,
        resonance: 4e3
      });
    }
    _triggerEnvelopeAttack(time, velocity = 1) {
      this.envelope.triggerAttack(time, velocity);
      this._oscillators.forEach((osc) => osc.start(time));
      if (this.envelope.sustain === 0) {
        this._oscillators.forEach((osc) => {
          osc.stop(time + this.toSeconds(this.envelope.attack) + this.toSeconds(this.envelope.decay));
        });
      }
      return this;
    }
    _triggerEnvelopeRelease(time) {
      this.envelope.triggerRelease(time);
      this._oscillators.forEach((osc) => osc.stop(time + this.toSeconds(this.envelope.release)));
      return this;
    }
    getLevelAtTime(time) {
      time = this.toSeconds(time);
      return this.envelope.getValueAtTime(time);
    }
    get modulationIndex() {
      return this._oscillators[0].modulationIndex.value;
    }
    set modulationIndex(val) {
      this._oscillators.forEach((osc) => osc.modulationIndex.value = val);
    }
    get harmonicity() {
      return this._oscillators[0].harmonicity.value;
    }
    set harmonicity(val) {
      this._oscillators.forEach((osc) => osc.harmonicity.value = val);
    }
    get resonance() {
      return this._filterFreqScaler.min;
    }
    set resonance(val) {
      this._filterFreqScaler.min = this.toFrequency(val);
      this.octaves = this._octaves;
    }
    get octaves() {
      return this._octaves;
    }
    set octaves(val) {
      this._octaves = val;
      this._filterFreqScaler.max = this._filterFreqScaler.min * Math.pow(2, val);
    }
    dispose() {
      super.dispose();
      this._oscillators.forEach((osc) => osc.dispose());
      this._freqMultipliers.forEach((freqMult) => freqMult.dispose());
      this.frequency.dispose();
      this.detune.dispose();
      this._filterFreqScaler.dispose();
      this._amplitude.dispose();
      this.envelope.dispose();
      this._highpass.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/instrument/MembraneSynth.js
  var MembraneSynth = class extends Synth {
    constructor() {
      super(optionsFromArguments(MembraneSynth.getDefaults(), arguments));
      this.name = "MembraneSynth";
      this.portamento = 0;
      const options = optionsFromArguments(MembraneSynth.getDefaults(), arguments);
      this.pitchDecay = options.pitchDecay;
      this.octaves = options.octaves;
      readOnly(this, ["oscillator", "envelope"]);
    }
    static getDefaults() {
      return deepMerge(Monophonic.getDefaults(), Synth.getDefaults(), {
        envelope: {
          attack: 1e-3,
          attackCurve: "exponential",
          decay: 0.4,
          release: 1.4,
          sustain: 0.01
        },
        octaves: 10,
        oscillator: {
          type: "sine"
        },
        pitchDecay: 0.05
      });
    }
    setNote(note, time) {
      const seconds = this.toSeconds(time);
      const hertz = this.toFrequency(note instanceof FrequencyClass ? note.toFrequency() : note);
      const maxNote = hertz * this.octaves;
      this.oscillator.frequency.setValueAtTime(maxNote, seconds);
      this.oscillator.frequency.exponentialRampToValueAtTime(hertz, seconds + this.toSeconds(this.pitchDecay));
      return this;
    }
    dispose() {
      super.dispose();
      return this;
    }
  };
  __decorate([
    range(0)
  ], MembraneSynth.prototype, "octaves", void 0);
  __decorate([
    timeRange(0)
  ], MembraneSynth.prototype, "pitchDecay", void 0);

  // node_modules/tone/build/esm/core/worklet/WorkletGlobalScope.js
  var workletContext = new Set();
  function addToWorklet(classOrFunction) {
    workletContext.add(classOrFunction);
  }
  function registerProcessor(name, classDesc) {
    const processor = `registerProcessor("${name}", ${classDesc})`;
    workletContext.add(processor);
  }
  function getWorkletGlobalScope() {
    return Array.from(workletContext).join("\n");
  }

  // node_modules/tone/build/esm/core/worklet/ToneAudioWorklet.js
  var ToneAudioWorklet = class extends ToneAudioNode {
    constructor(options) {
      super(options);
      this.name = "ToneAudioWorklet";
      this.workletOptions = {};
      this.onprocessorerror = noOp;
      const blobUrl = URL.createObjectURL(new Blob([getWorkletGlobalScope()], { type: "text/javascript" }));
      const name = this._audioWorkletName();
      this._dummyGain = this.context.createGain();
      this._dummyParam = this._dummyGain.gain;
      this.context.addAudioWorkletModule(blobUrl, name).then(() => {
        if (!this.disposed) {
          this._worklet = this.context.createAudioWorkletNode(name, this.workletOptions);
          this._worklet.onprocessorerror = this.onprocessorerror.bind(this);
          this.onReady(this._worklet);
        }
      });
    }
    dispose() {
      super.dispose();
      this._dummyGain.disconnect();
      if (this._worklet) {
        this._worklet.port.postMessage("dispose");
        this._worklet.disconnect();
      }
      return this;
    }
  };

  // node_modules/tone/build/esm/core/worklet/ToneAudioWorkletProcessor.worklet.js
  var toneAudioWorkletProcessor = `
	/**
	 * The base AudioWorkletProcessor for use in Tone.js. Works with the [[ToneAudioWorklet]]. 
	 */
	class ToneAudioWorkletProcessor extends AudioWorkletProcessor {

		constructor(options) {
			
			super(options);
			/**
			 * If the processor was disposed or not. Keep alive until it's disposed.
			 */
			this.disposed = false;
		   	/** 
			 * The number of samples in the processing block
			 */
			this.blockSize = 128;
			/**
			 * the sample rate
			 */
			this.sampleRate = sampleRate;

			this.port.onmessage = (event) => {
				// when it receives a dispose 
				if (event.data === "dispose") {
					this.disposed = true;
				}
			};
		}
	}
`;
  addToWorklet(toneAudioWorkletProcessor);

  // node_modules/tone/build/esm/core/worklet/SingleIOProcessor.worklet.js
  var singleIOProcess = `
	/**
	 * Abstract class for a single input/output processor. 
	 * has a 'generate' function which processes one sample at a time
	 */
	class SingleIOProcessor extends ToneAudioWorkletProcessor {

		constructor(options) {
			super(Object.assign(options, {
				numberOfInputs: 1,
				numberOfOutputs: 1
			}));
			/**
			 * Holds the name of the parameter and a single value of that
			 * parameter at the current sample
			 * @type { [name: string]: number }
			 */
			this.params = {}
		}

		/**
		 * Generate an output sample from the input sample and parameters
		 * @abstract
		 * @param input number
		 * @param channel number
		 * @param parameters { [name: string]: number }
		 * @returns number
		 */
		generate(){}

		/**
		 * Update the private params object with the 
		 * values of the parameters at the given index
		 * @param parameters { [name: string]: Float32Array },
		 * @param index number
		 */
		updateParams(parameters, index) {
			for (const paramName in parameters) {
				const param = parameters[paramName];
				if (param.length > 1) {
					this.params[paramName] = parameters[paramName][index];
				} else {
					this.params[paramName] = parameters[paramName][0];
				}
			}
		}

		/**
		 * Process a single frame of the audio
		 * @param inputs Float32Array[][]
		 * @param outputs Float32Array[][]
		 */
		process(inputs, outputs, parameters) {
			const input = inputs[0];
			const output = outputs[0];
			// get the parameter values
			const channelCount = Math.max(input && input.length || 0, output.length);
			for (let sample = 0; sample < this.blockSize; sample++) {
				this.updateParams(parameters, sample);
				for (let channel = 0; channel < channelCount; channel++) {
					const inputSample = input && input.length ? input[channel][sample] : 0;
					output[channel][sample] = this.generate(inputSample, channel, this.params);
				}
			}
			return !this.disposed;
		}
	};
`;
  addToWorklet(singleIOProcess);

  // node_modules/tone/build/esm/core/worklet/DelayLine.worklet.js
  var delayLine = `
	/**
	 * A multichannel buffer for use within an AudioWorkletProcessor as a delay line
	 */
	class DelayLine {
		
		constructor(size, channels) {
			this.buffer = [];
			this.writeHead = []
			this.size = size;

			// create the empty channels
			for (let i = 0; i < channels; i++) {
				this.buffer[i] = new Float32Array(this.size);
				this.writeHead[i] = 0;
			}
		}

		/**
		 * Push a value onto the end
		 * @param channel number
		 * @param value number
		 */
		push(channel, value) {
			this.writeHead[channel] += 1;
			if (this.writeHead[channel] > this.size) {
				this.writeHead[channel] = 0;
			}
			this.buffer[channel][this.writeHead[channel]] = value;
		}

		/**
		 * Get the recorded value of the channel given the delay
		 * @param channel number
		 * @param delay number delay samples
		 */
		get(channel, delay) {
			let readHead = this.writeHead[channel] - Math.floor(delay);
			if (readHead < 0) {
				readHead += this.size;
			}
			return this.buffer[channel][readHead];
		}
	}
`;
  addToWorklet(delayLine);

  // node_modules/tone/build/esm/component/filter/FeedbackCombFilter.worklet.js
  var workletName = "feedback-comb-filter";
  var feedbackCombFilter = `
	class FeedbackCombFilterWorklet extends SingleIOProcessor {

		constructor(options) {
			super(options);
			this.delayLine = new DelayLine(this.sampleRate, options.channelCount || 2);
		}

		static get parameterDescriptors() {
			return [{
				name: "delayTime",
				defaultValue: 0.1,
				minValue: 0,
				maxValue: 1,
				automationRate: "k-rate"
			}, {
				name: "feedback",
				defaultValue: 0.5,
				minValue: 0,
				maxValue: 0.9999,
				automationRate: "k-rate"
			}];
		}

		generate(input, channel, parameters) {
			const delayedSample = this.delayLine.get(channel, parameters.delayTime * this.sampleRate);
			this.delayLine.push(channel, input + delayedSample * parameters.feedback);
			return delayedSample;
		}
	}
`;
  registerProcessor(workletName, feedbackCombFilter);

  // node_modules/tone/build/esm/component/filter/FeedbackCombFilter.js
  var FeedbackCombFilter = class extends ToneAudioWorklet {
    constructor() {
      super(optionsFromArguments(FeedbackCombFilter.getDefaults(), arguments, ["delayTime", "resonance"]));
      this.name = "FeedbackCombFilter";
      const options = optionsFromArguments(FeedbackCombFilter.getDefaults(), arguments, ["delayTime", "resonance"]);
      this.input = new Gain({ context: this.context });
      this.output = new Gain({ context: this.context });
      this.delayTime = new Param({
        context: this.context,
        value: options.delayTime,
        units: "time",
        minValue: 0,
        maxValue: 1,
        param: this._dummyParam,
        swappable: true
      });
      this.resonance = new Param({
        context: this.context,
        value: options.resonance,
        units: "normalRange",
        param: this._dummyParam,
        swappable: true
      });
      readOnly(this, ["resonance", "delayTime"]);
    }
    _audioWorkletName() {
      return workletName;
    }
    static getDefaults() {
      return Object.assign(ToneAudioNode.getDefaults(), {
        delayTime: 0.1,
        resonance: 0.5
      });
    }
    onReady(node) {
      connectSeries(this.input, node, this.output);
      const delayTime = node.parameters.get("delayTime");
      ;
      this.delayTime.setParam(delayTime);
      const feedback = node.parameters.get("feedback");
      ;
      this.resonance.setParam(feedback);
    }
    dispose() {
      super.dispose();
      this.input.dispose();
      this.output.dispose();
      this.delayTime.dispose();
      this.resonance.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/component/filter/OnePoleFilter.js
  var OnePoleFilter = class extends ToneAudioNode {
    constructor() {
      super(optionsFromArguments(OnePoleFilter.getDefaults(), arguments, ["frequency", "type"]));
      this.name = "OnePoleFilter";
      const options = optionsFromArguments(OnePoleFilter.getDefaults(), arguments, ["frequency", "type"]);
      this._frequency = options.frequency;
      this._type = options.type;
      this.input = new Gain({ context: this.context });
      this.output = new Gain({ context: this.context });
      this._createFilter();
    }
    static getDefaults() {
      return Object.assign(ToneAudioNode.getDefaults(), {
        frequency: 880,
        type: "lowpass"
      });
    }
    _createFilter() {
      const oldFilter = this._filter;
      const freq = this.toFrequency(this._frequency);
      const t = 1 / (2 * Math.PI * freq);
      if (this._type === "lowpass") {
        const a0 = 1 / (t * this.context.sampleRate);
        const b1 = a0 - 1;
        this._filter = this.context.createIIRFilter([a0, 0], [1, b1]);
      } else {
        const b1 = 1 / (t * this.context.sampleRate) - 1;
        this._filter = this.context.createIIRFilter([1, -1], [1, b1]);
      }
      this.input.chain(this._filter, this.output);
      if (oldFilter) {
        this.context.setTimeout(() => {
          if (!this.disposed) {
            this.input.disconnect(oldFilter);
            oldFilter.disconnect();
          }
        }, this.blockTime);
      }
    }
    get frequency() {
      return this._frequency;
    }
    set frequency(fq) {
      this._frequency = fq;
      this._createFilter();
    }
    get type() {
      return this._type;
    }
    set type(t) {
      this._type = t;
      this._createFilter();
    }
    getFrequencyResponse(len = 128) {
      const freqValues = new Float32Array(len);
      for (let i = 0; i < len; i++) {
        const norm = Math.pow(i / len, 2);
        const freq = norm * (2e4 - 20) + 20;
        freqValues[i] = freq;
      }
      const magValues = new Float32Array(len);
      const phaseValues = new Float32Array(len);
      this._filter.getFrequencyResponse(freqValues, magValues, phaseValues);
      return magValues;
    }
    dispose() {
      super.dispose();
      this.input.dispose();
      this.output.dispose();
      this._filter.disconnect();
      return this;
    }
  };

  // node_modules/tone/build/esm/component/filter/LowpassCombFilter.js
  var LowpassCombFilter = class extends ToneAudioNode {
    constructor() {
      super(optionsFromArguments(LowpassCombFilter.getDefaults(), arguments, ["delayTime", "resonance", "dampening"]));
      this.name = "LowpassCombFilter";
      const options = optionsFromArguments(LowpassCombFilter.getDefaults(), arguments, ["delayTime", "resonance", "dampening"]);
      this._combFilter = this.output = new FeedbackCombFilter({
        context: this.context,
        delayTime: options.delayTime,
        resonance: options.resonance
      });
      this.delayTime = this._combFilter.delayTime;
      this.resonance = this._combFilter.resonance;
      this._lowpass = this.input = new OnePoleFilter({
        context: this.context,
        frequency: options.dampening,
        type: "lowpass"
      });
      this._lowpass.connect(this._combFilter);
    }
    static getDefaults() {
      return Object.assign(ToneAudioNode.getDefaults(), {
        dampening: 3e3,
        delayTime: 0.1,
        resonance: 0.5
      });
    }
    get dampening() {
      return this._lowpass.frequency;
    }
    set dampening(fq) {
      this._lowpass.frequency = fq;
    }
    dispose() {
      super.dispose();
      this._combFilter.dispose();
      this._lowpass.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/instrument/Sampler.js
  var Sampler = class extends Instrument {
    constructor() {
      super(optionsFromArguments(Sampler.getDefaults(), arguments, ["urls", "onload", "baseUrl"], "urls"));
      this.name = "Sampler";
      this._activeSources = new Map();
      const options = optionsFromArguments(Sampler.getDefaults(), arguments, ["urls", "onload", "baseUrl"], "urls");
      const urlMap = {};
      Object.keys(options.urls).forEach((note) => {
        const noteNumber = parseInt(note, 10);
        assert(isNote(note) || isNumber(noteNumber) && isFinite(noteNumber), `url key is neither a note or midi pitch: ${note}`);
        if (isNote(note)) {
          const mid = new FrequencyClass(this.context, note).toMidi();
          urlMap[mid] = options.urls[note];
        } else if (isNumber(noteNumber) && isFinite(noteNumber)) {
          urlMap[noteNumber] = options.urls[noteNumber];
        }
      });
      this._buffers = new ToneAudioBuffers({
        urls: urlMap,
        onload: options.onload,
        baseUrl: options.baseUrl,
        onerror: options.onerror
      });
      this.attack = options.attack;
      this.release = options.release;
      this.curve = options.curve;
      if (this._buffers.loaded) {
        Promise.resolve().then(options.onload);
      }
    }
    static getDefaults() {
      return Object.assign(Instrument.getDefaults(), {
        attack: 0,
        baseUrl: "",
        curve: "exponential",
        onload: noOp,
        onerror: noOp,
        release: 0.1,
        urls: {}
      });
    }
    _findClosest(midi) {
      const MAX_INTERVAL = 96;
      let interval = 0;
      while (interval < MAX_INTERVAL) {
        if (this._buffers.has(midi + interval)) {
          return -interval;
        } else if (this._buffers.has(midi - interval)) {
          return interval;
        }
        interval++;
      }
      throw new Error(`No available buffers for note: ${midi}`);
    }
    triggerAttack(notes, time, velocity = 1) {
      this.log("triggerAttack", notes, time, velocity);
      if (!Array.isArray(notes)) {
        notes = [notes];
      }
      notes.forEach((note) => {
        const midiFloat = ftomf(new FrequencyClass(this.context, note).toFrequency());
        const midi = Math.round(midiFloat);
        const remainder = midiFloat - midi;
        const difference = this._findClosest(midi);
        const closestNote = midi - difference;
        const buffer = this._buffers.get(closestNote);
        const playbackRate = intervalToFrequencyRatio(difference + remainder);
        const source = new ToneBufferSource({
          url: buffer,
          context: this.context,
          curve: this.curve,
          fadeIn: this.attack,
          fadeOut: this.release,
          playbackRate
        }).connect(this.output);
        source.start(time, 0, buffer.duration / playbackRate, velocity);
        if (!isArray(this._activeSources.get(midi))) {
          this._activeSources.set(midi, []);
        }
        this._activeSources.get(midi).push(source);
        source.onended = () => {
          if (this._activeSources && this._activeSources.has(midi)) {
            const sources = this._activeSources.get(midi);
            const index = sources.indexOf(source);
            if (index !== -1) {
              sources.splice(index, 1);
            }
          }
        };
      });
      return this;
    }
    triggerRelease(notes, time) {
      this.log("triggerRelease", notes, time);
      if (!Array.isArray(notes)) {
        notes = [notes];
      }
      notes.forEach((note) => {
        const midi = new FrequencyClass(this.context, note).toMidi();
        if (this._activeSources.has(midi) && this._activeSources.get(midi).length) {
          const sources = this._activeSources.get(midi);
          time = this.toSeconds(time);
          sources.forEach((source) => {
            source.stop(time);
          });
          this._activeSources.set(midi, []);
        }
      });
      return this;
    }
    releaseAll(time) {
      const computedTime = this.toSeconds(time);
      this._activeSources.forEach((sources) => {
        while (sources.length) {
          const source = sources.shift();
          source.stop(computedTime);
        }
      });
      return this;
    }
    sync() {
      if (this._syncState()) {
        this._syncMethod("triggerAttack", 1);
        this._syncMethod("triggerRelease", 1);
      }
      return this;
    }
    triggerAttackRelease(notes, duration, time, velocity = 1) {
      const computedTime = this.toSeconds(time);
      this.triggerAttack(notes, computedTime, velocity);
      if (isArray(duration)) {
        assert(isArray(notes), "notes must be an array when duration is array");
        notes.forEach((note, index) => {
          const d = duration[Math.min(index, duration.length - 1)];
          this.triggerRelease(note, computedTime + this.toSeconds(d));
        });
      } else {
        this.triggerRelease(notes, computedTime + this.toSeconds(duration));
      }
      return this;
    }
    add(note, url, callback) {
      assert(isNote(note) || isFinite(note), `note must be a pitch or midi: ${note}`);
      if (isNote(note)) {
        const mid = new FrequencyClass(this.context, note).toMidi();
        this._buffers.add(mid, url, callback);
      } else {
        this._buffers.add(note, url, callback);
      }
      return this;
    }
    get loaded() {
      return this._buffers.loaded;
    }
    dispose() {
      super.dispose();
      this._buffers.dispose();
      this._activeSources.forEach((sources) => {
        sources.forEach((source) => source.dispose());
      });
      this._activeSources.clear();
      return this;
    }
  };
  __decorate([
    timeRange(0)
  ], Sampler.prototype, "attack", void 0);
  __decorate([
    timeRange(0)
  ], Sampler.prototype, "release", void 0);

  // node_modules/tone/build/esm/component/channel/CrossFade.js
  var CrossFade = class extends ToneAudioNode {
    constructor() {
      super(Object.assign(optionsFromArguments(CrossFade.getDefaults(), arguments, ["fade"])));
      this.name = "CrossFade";
      this._panner = this.context.createStereoPanner();
      this._split = this.context.createChannelSplitter(2);
      this._g2a = new GainToAudio({ context: this.context });
      this.a = new Gain({
        context: this.context,
        gain: 0
      });
      this.b = new Gain({
        context: this.context,
        gain: 0
      });
      this.output = new Gain({ context: this.context });
      this._internalChannels = [this.a, this.b];
      const options = optionsFromArguments(CrossFade.getDefaults(), arguments, ["fade"]);
      this.fade = new Signal({
        context: this.context,
        units: "normalRange",
        value: options.fade
      });
      readOnly(this, "fade");
      this.context.getConstant(1).connect(this._panner);
      this._panner.connect(this._split);
      this._panner.channelCount = 1;
      this._panner.channelCountMode = "explicit";
      connect(this._split, this.a.gain, 0);
      connect(this._split, this.b.gain, 1);
      this.fade.chain(this._g2a, this._panner.pan);
      this.a.connect(this.output);
      this.b.connect(this.output);
    }
    static getDefaults() {
      return Object.assign(ToneAudioNode.getDefaults(), {
        fade: 0.5
      });
    }
    dispose() {
      super.dispose();
      this.a.dispose();
      this.b.dispose();
      this.output.dispose();
      this.fade.dispose();
      this._g2a.dispose();
      this._panner.disconnect();
      this._split.disconnect();
      return this;
    }
  };

  // node_modules/tone/build/esm/effect/Effect.js
  var Effect = class extends ToneAudioNode {
    constructor(options) {
      super(options);
      this.name = "Effect";
      this._dryWet = new CrossFade({ context: this.context });
      this.wet = this._dryWet.fade;
      this.effectSend = new Gain({ context: this.context });
      this.effectReturn = new Gain({ context: this.context });
      this.input = new Gain({ context: this.context });
      this.output = this._dryWet;
      this.input.fan(this._dryWet.a, this.effectSend);
      this.effectReturn.connect(this._dryWet.b);
      this.wet.setValueAtTime(options.wet, 0);
      this._internalChannels = [this.effectReturn, this.effectSend];
      readOnly(this, "wet");
    }
    static getDefaults() {
      return Object.assign(ToneAudioNode.getDefaults(), {
        wet: 1
      });
    }
    connectEffect(effect) {
      this._internalChannels.push(effect);
      this.effectSend.chain(effect, this.effectReturn);
      return this;
    }
    dispose() {
      super.dispose();
      this._dryWet.dispose();
      this.effectSend.dispose();
      this.effectReturn.dispose();
      this.wet.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/component/channel/Panner.js
  var Panner = class extends ToneAudioNode {
    constructor() {
      super(Object.assign(optionsFromArguments(Panner.getDefaults(), arguments, ["pan"])));
      this.name = "Panner";
      this._panner = this.context.createStereoPanner();
      this.input = this._panner;
      this.output = this._panner;
      const options = optionsFromArguments(Panner.getDefaults(), arguments, ["pan"]);
      this.pan = new Param({
        context: this.context,
        param: this._panner.pan,
        value: options.pan,
        minValue: -1,
        maxValue: 1
      });
      this._panner.channelCount = options.channelCount;
      this._panner.channelCountMode = "explicit";
      readOnly(this, "pan");
    }
    static getDefaults() {
      return Object.assign(ToneAudioNode.getDefaults(), {
        pan: 0,
        channelCount: 1
      });
    }
    dispose() {
      super.dispose();
      this._panner.disconnect();
      this.pan.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/effect/BitCrusher.worklet.js
  var workletName2 = "bit-crusher";
  var bitCrusherWorklet = `
	class BitCrusherWorklet extends SingleIOProcessor {

		static get parameterDescriptors() {
			return [{
				name: "bits",
				defaultValue: 12,
				minValue: 1,
				maxValue: 16,
				automationRate: 'k-rate'
			}];
		}

		generate(input, _channel, parameters) {
			const step = Math.pow(0.5, parameters.bits - 1);
			const val = step * Math.floor(input / step + 0.5);
			return val;
		}
	}
`;
  registerProcessor(workletName2, bitCrusherWorklet);

  // node_modules/tone/build/esm/effect/Chebyshev.js
  var Chebyshev = class extends Effect {
    constructor() {
      super(optionsFromArguments(Chebyshev.getDefaults(), arguments, ["order"]));
      this.name = "Chebyshev";
      const options = optionsFromArguments(Chebyshev.getDefaults(), arguments, ["order"]);
      this._shaper = new WaveShaper({
        context: this.context,
        length: 4096
      });
      this._order = options.order;
      this.connectEffect(this._shaper);
      this.order = options.order;
      this.oversample = options.oversample;
    }
    static getDefaults() {
      return Object.assign(Effect.getDefaults(), {
        order: 1,
        oversample: "none"
      });
    }
    _getCoefficient(x, degree, memo) {
      if (memo.has(degree)) {
        return memo.get(degree);
      } else if (degree === 0) {
        memo.set(degree, 0);
      } else if (degree === 1) {
        memo.set(degree, x);
      } else {
        memo.set(degree, 2 * x * this._getCoefficient(x, degree - 1, memo) - this._getCoefficient(x, degree - 2, memo));
      }
      return memo.get(degree);
    }
    get order() {
      return this._order;
    }
    set order(order) {
      this._order = order;
      this._shaper.setMap((x) => {
        return this._getCoefficient(x, order, new Map());
      });
    }
    get oversample() {
      return this._shaper.oversample;
    }
    set oversample(oversampling) {
      this._shaper.oversample = oversampling;
    }
    dispose() {
      super.dispose();
      this._shaper.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/component/channel/Split.js
  var Split = class extends ToneAudioNode {
    constructor() {
      super(optionsFromArguments(Split.getDefaults(), arguments, ["channels"]));
      this.name = "Split";
      const options = optionsFromArguments(Split.getDefaults(), arguments, ["channels"]);
      this._splitter = this.input = this.output = this.context.createChannelSplitter(options.channels);
      this._internalChannels = [this._splitter];
    }
    static getDefaults() {
      return Object.assign(ToneAudioNode.getDefaults(), {
        channels: 2
      });
    }
    dispose() {
      super.dispose();
      this._splitter.disconnect();
      return this;
    }
  };

  // node_modules/tone/build/esm/component/channel/Merge.js
  var Merge = class extends ToneAudioNode {
    constructor() {
      super(optionsFromArguments(Merge.getDefaults(), arguments, ["channels"]));
      this.name = "Merge";
      const options = optionsFromArguments(Merge.getDefaults(), arguments, ["channels"]);
      this._merger = this.output = this.input = this.context.createChannelMerger(options.channels);
    }
    static getDefaults() {
      return Object.assign(ToneAudioNode.getDefaults(), {
        channels: 2
      });
    }
    dispose() {
      super.dispose();
      this._merger.disconnect();
      return this;
    }
  };

  // node_modules/tone/build/esm/effect/StereoEffect.js
  var StereoEffect = class extends ToneAudioNode {
    constructor(options) {
      super(options);
      this.name = "StereoEffect";
      this.input = new Gain({ context: this.context });
      this.input.channelCount = 2;
      this.input.channelCountMode = "explicit";
      this._dryWet = this.output = new CrossFade({
        context: this.context,
        fade: options.wet
      });
      this.wet = this._dryWet.fade;
      this._split = new Split({ context: this.context, channels: 2 });
      this._merge = new Merge({ context: this.context, channels: 2 });
      this.input.connect(this._split);
      this.input.connect(this._dryWet.a);
      this._merge.connect(this._dryWet.b);
      readOnly(this, ["wet"]);
    }
    connectEffectLeft(...nodes) {
      this._split.connect(nodes[0], 0, 0);
      connectSeries(...nodes);
      connect(nodes[nodes.length - 1], this._merge, 0, 0);
    }
    connectEffectRight(...nodes) {
      this._split.connect(nodes[0], 1, 0);
      connectSeries(...nodes);
      connect(nodes[nodes.length - 1], this._merge, 0, 1);
    }
    static getDefaults() {
      return Object.assign(ToneAudioNode.getDefaults(), {
        wet: 1
      });
    }
    dispose() {
      super.dispose();
      this._dryWet.dispose();
      this._split.dispose();
      this._merge.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/effect/Distortion.js
  var Distortion = class extends Effect {
    constructor() {
      super(optionsFromArguments(Distortion.getDefaults(), arguments, ["distortion"]));
      this.name = "Distortion";
      const options = optionsFromArguments(Distortion.getDefaults(), arguments, ["distortion"]);
      this._shaper = new WaveShaper({
        context: this.context,
        length: 4096
      });
      this._distortion = options.distortion;
      this.connectEffect(this._shaper);
      this.distortion = options.distortion;
      this.oversample = options.oversample;
    }
    static getDefaults() {
      return Object.assign(Effect.getDefaults(), {
        distortion: 0.4,
        oversample: "none"
      });
    }
    get distortion() {
      return this._distortion;
    }
    set distortion(amount) {
      this._distortion = amount;
      const k = amount * 100;
      const deg = Math.PI / 180;
      this._shaper.setMap((x) => {
        if (Math.abs(x) < 1e-3) {
          return 0;
        } else {
          return (3 + k) * x * 20 * deg / (Math.PI + k * Math.abs(x));
        }
      });
    }
    get oversample() {
      return this._shaper.oversample;
    }
    set oversample(oversampling) {
      this._shaper.oversample = oversampling;
    }
    dispose() {
      super.dispose();
      this._shaper.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/effect/Freeverb.js
  var combFilterTunings = [1557 / 44100, 1617 / 44100, 1491 / 44100, 1422 / 44100, 1277 / 44100, 1356 / 44100, 1188 / 44100, 1116 / 44100];
  var allpassFilterFrequencies = [225, 556, 441, 341];
  var Freeverb = class extends StereoEffect {
    constructor() {
      super(optionsFromArguments(Freeverb.getDefaults(), arguments, ["roomSize", "dampening"]));
      this.name = "Freeverb";
      this._combFilters = [];
      this._allpassFiltersL = [];
      this._allpassFiltersR = [];
      const options = optionsFromArguments(Freeverb.getDefaults(), arguments, ["roomSize", "dampening"]);
      this.roomSize = new Signal({
        context: this.context,
        value: options.roomSize,
        units: "normalRange"
      });
      this._allpassFiltersL = allpassFilterFrequencies.map((freq) => {
        const allpassL = this.context.createBiquadFilter();
        allpassL.type = "allpass";
        allpassL.frequency.value = freq;
        return allpassL;
      });
      this._allpassFiltersR = allpassFilterFrequencies.map((freq) => {
        const allpassR = this.context.createBiquadFilter();
        allpassR.type = "allpass";
        allpassR.frequency.value = freq;
        return allpassR;
      });
      this._combFilters = combFilterTunings.map((delayTime, index) => {
        const lfpf = new LowpassCombFilter({
          context: this.context,
          dampening: options.dampening,
          delayTime
        });
        if (index < combFilterTunings.length / 2) {
          this.connectEffectLeft(lfpf, ...this._allpassFiltersL);
        } else {
          this.connectEffectRight(lfpf, ...this._allpassFiltersR);
        }
        this.roomSize.connect(lfpf.resonance);
        return lfpf;
      });
      readOnly(this, ["roomSize"]);
    }
    static getDefaults() {
      return Object.assign(StereoEffect.getDefaults(), {
        roomSize: 0.7,
        dampening: 3e3
      });
    }
    get dampening() {
      return this._combFilters[0].dampening;
    }
    set dampening(d) {
      this._combFilters.forEach((c) => c.dampening = d);
    }
    dispose() {
      super.dispose();
      this._allpassFiltersL.forEach((al) => al.disconnect());
      this._allpassFiltersR.forEach((ar) => ar.disconnect());
      this._combFilters.forEach((cf) => cf.dispose());
      this.roomSize.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/effect/JCReverb.js
  var combFilterDelayTimes = [1687 / 25e3, 1601 / 25e3, 2053 / 25e3, 2251 / 25e3];

  // node_modules/tone/build/esm/effect/Tremolo.js
  var Tremolo = class extends StereoEffect {
    constructor() {
      super(optionsFromArguments(Tremolo.getDefaults(), arguments, ["frequency", "depth"]));
      this.name = "Tremolo";
      const options = optionsFromArguments(Tremolo.getDefaults(), arguments, ["frequency", "depth"]);
      this._lfoL = new LFO({
        context: this.context,
        type: options.type,
        min: 1,
        max: 0
      });
      this._lfoR = new LFO({
        context: this.context,
        type: options.type,
        min: 1,
        max: 0
      });
      this._amplitudeL = new Gain({ context: this.context });
      this._amplitudeR = new Gain({ context: this.context });
      this.frequency = new Signal({
        context: this.context,
        value: options.frequency,
        units: "frequency"
      });
      this.depth = new Signal({
        context: this.context,
        value: options.depth,
        units: "normalRange"
      });
      readOnly(this, ["frequency", "depth"]);
      this.connectEffectLeft(this._amplitudeL);
      this.connectEffectRight(this._amplitudeR);
      this._lfoL.connect(this._amplitudeL.gain);
      this._lfoR.connect(this._amplitudeR.gain);
      this.frequency.fan(this._lfoL.frequency, this._lfoR.frequency);
      this.depth.fan(this._lfoR.amplitude, this._lfoL.amplitude);
      this.spread = options.spread;
    }
    static getDefaults() {
      return Object.assign(StereoEffect.getDefaults(), {
        frequency: 10,
        type: "sine",
        depth: 0.5,
        spread: 180
      });
    }
    start(time) {
      this._lfoL.start(time);
      this._lfoR.start(time);
      return this;
    }
    stop(time) {
      this._lfoL.stop(time);
      this._lfoR.stop(time);
      return this;
    }
    sync() {
      this._lfoL.sync();
      this._lfoR.sync();
      this.context.transport.syncSignal(this.frequency);
      return this;
    }
    unsync() {
      this._lfoL.unsync();
      this._lfoR.unsync();
      this.context.transport.unsyncSignal(this.frequency);
      return this;
    }
    get type() {
      return this._lfoL.type;
    }
    set type(type) {
      this._lfoL.type = type;
      this._lfoR.type = type;
    }
    get spread() {
      return this._lfoR.phase - this._lfoL.phase;
    }
    set spread(spread) {
      this._lfoL.phase = 90 - spread / 2;
      this._lfoR.phase = spread / 2 + 90;
    }
    dispose() {
      super.dispose();
      this._lfoL.dispose();
      this._lfoR.dispose();
      this._amplitudeL.dispose();
      this._amplitudeR.dispose();
      this.frequency.dispose();
      this.depth.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/effect/Vibrato.js
  var Vibrato = class extends Effect {
    constructor() {
      super(optionsFromArguments(Vibrato.getDefaults(), arguments, ["frequency", "depth"]));
      this.name = "Vibrato";
      const options = optionsFromArguments(Vibrato.getDefaults(), arguments, ["frequency", "depth"]);
      this._delayNode = new Delay({
        context: this.context,
        delayTime: 0,
        maxDelay: options.maxDelay
      });
      this._lfo = new LFO({
        context: this.context,
        type: options.type,
        min: 0,
        max: options.maxDelay,
        frequency: options.frequency,
        phase: -90
      }).start().connect(this._delayNode.delayTime);
      this.frequency = this._lfo.frequency;
      this.depth = this._lfo.amplitude;
      this.depth.value = options.depth;
      readOnly(this, ["frequency", "depth"]);
      this.effectSend.chain(this._delayNode, this.effectReturn);
    }
    static getDefaults() {
      return Object.assign(Effect.getDefaults(), {
        maxDelay: 5e-3,
        frequency: 5,
        depth: 0.1,
        type: "sine"
      });
    }
    get type() {
      return this._lfo.type;
    }
    set type(type) {
      this._lfo.type = type;
    }
    dispose() {
      super.dispose();
      this._delayNode.dispose();
      this._lfo.dispose();
      this.frequency.dispose();
      this.depth.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/component/channel/Solo.js
  var Solo = class extends ToneAudioNode {
    constructor() {
      super(optionsFromArguments(Solo.getDefaults(), arguments, ["solo"]));
      this.name = "Solo";
      const options = optionsFromArguments(Solo.getDefaults(), arguments, ["solo"]);
      this.input = this.output = new Gain({
        context: this.context
      });
      if (!Solo._allSolos.has(this.context)) {
        Solo._allSolos.set(this.context, new Set());
      }
      Solo._allSolos.get(this.context).add(this);
      this.solo = options.solo;
    }
    static getDefaults() {
      return Object.assign(ToneAudioNode.getDefaults(), {
        solo: false
      });
    }
    get solo() {
      return this._isSoloed();
    }
    set solo(solo) {
      if (solo) {
        this._addSolo();
      } else {
        this._removeSolo();
      }
      Solo._allSolos.get(this.context).forEach((instance) => instance._updateSolo());
    }
    get muted() {
      return this.input.gain.value === 0;
    }
    _addSolo() {
      if (!Solo._soloed.has(this.context)) {
        Solo._soloed.set(this.context, new Set());
      }
      Solo._soloed.get(this.context).add(this);
    }
    _removeSolo() {
      if (Solo._soloed.has(this.context)) {
        Solo._soloed.get(this.context).delete(this);
      }
    }
    _isSoloed() {
      return Solo._soloed.has(this.context) && Solo._soloed.get(this.context).has(this);
    }
    _noSolos() {
      return !Solo._soloed.has(this.context) || Solo._soloed.has(this.context) && Solo._soloed.get(this.context).size === 0;
    }
    _updateSolo() {
      if (this._isSoloed()) {
        this.input.gain.value = 1;
      } else if (this._noSolos()) {
        this.input.gain.value = 1;
      } else {
        this.input.gain.value = 0;
      }
    }
    dispose() {
      super.dispose();
      Solo._allSolos.get(this.context).delete(this);
      this._removeSolo();
      return this;
    }
  };
  Solo._allSolos = new Map();
  Solo._soloed = new Map();

  // node_modules/tone/build/esm/component/channel/PanVol.js
  var PanVol = class extends ToneAudioNode {
    constructor() {
      super(optionsFromArguments(PanVol.getDefaults(), arguments, ["pan", "volume"]));
      this.name = "PanVol";
      const options = optionsFromArguments(PanVol.getDefaults(), arguments, ["pan", "volume"]);
      this._panner = this.input = new Panner({
        context: this.context,
        pan: options.pan,
        channelCount: options.channelCount
      });
      this.pan = this._panner.pan;
      this._volume = this.output = new Volume({
        context: this.context,
        volume: options.volume
      });
      this.volume = this._volume.volume;
      this._panner.connect(this._volume);
      this.mute = options.mute;
      readOnly(this, ["pan", "volume"]);
    }
    static getDefaults() {
      return Object.assign(ToneAudioNode.getDefaults(), {
        mute: false,
        pan: 0,
        volume: 0,
        channelCount: 1
      });
    }
    get mute() {
      return this._volume.mute;
    }
    set mute(mute) {
      this._volume.mute = mute;
    }
    dispose() {
      super.dispose();
      this._panner.dispose();
      this.pan.dispose();
      this._volume.dispose();
      this.volume.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/component/channel/Channel.js
  var Channel = class extends ToneAudioNode {
    constructor() {
      super(optionsFromArguments(Channel.getDefaults(), arguments, ["volume", "pan"]));
      this.name = "Channel";
      const options = optionsFromArguments(Channel.getDefaults(), arguments, ["volume", "pan"]);
      this._solo = this.input = new Solo({
        solo: options.solo,
        context: this.context
      });
      this._panVol = this.output = new PanVol({
        context: this.context,
        pan: options.pan,
        volume: options.volume,
        mute: options.mute,
        channelCount: options.channelCount
      });
      this.pan = this._panVol.pan;
      this.volume = this._panVol.volume;
      this._solo.connect(this._panVol);
      readOnly(this, ["pan", "volume"]);
    }
    static getDefaults() {
      return Object.assign(ToneAudioNode.getDefaults(), {
        pan: 0,
        volume: 0,
        mute: false,
        solo: false,
        channelCount: 1
      });
    }
    get solo() {
      return this._solo.solo;
    }
    set solo(solo) {
      this._solo.solo = solo;
    }
    get muted() {
      return this._solo.muted || this.mute;
    }
    get mute() {
      return this._panVol.mute;
    }
    set mute(mute) {
      this._panVol.mute = mute;
    }
    _getBus(name) {
      if (!Channel.buses.has(name)) {
        Channel.buses.set(name, new Gain({ context: this.context }));
      }
      return Channel.buses.get(name);
    }
    send(name, volume = 0) {
      const bus = this._getBus(name);
      const sendKnob = new Gain({
        context: this.context,
        units: "decibels",
        gain: volume
      });
      this.connect(sendKnob);
      sendKnob.connect(bus);
      return sendKnob;
    }
    receive(name) {
      const bus = this._getBus(name);
      bus.connect(this);
      return this;
    }
    dispose() {
      super.dispose();
      this._panVol.dispose();
      this.pan.dispose();
      this.volume.dispose();
      this._solo.dispose();
      return this;
    }
  };
  Channel.buses = new Map();

  // node_modules/tone/build/esm/core/context/Listener.js
  var Listener = class extends ToneAudioNode {
    constructor() {
      super(...arguments);
      this.name = "Listener";
      this.positionX = new Param({
        context: this.context,
        param: this.context.rawContext.listener.positionX
      });
      this.positionY = new Param({
        context: this.context,
        param: this.context.rawContext.listener.positionY
      });
      this.positionZ = new Param({
        context: this.context,
        param: this.context.rawContext.listener.positionZ
      });
      this.forwardX = new Param({
        context: this.context,
        param: this.context.rawContext.listener.forwardX
      });
      this.forwardY = new Param({
        context: this.context,
        param: this.context.rawContext.listener.forwardY
      });
      this.forwardZ = new Param({
        context: this.context,
        param: this.context.rawContext.listener.forwardZ
      });
      this.upX = new Param({
        context: this.context,
        param: this.context.rawContext.listener.upX
      });
      this.upY = new Param({
        context: this.context,
        param: this.context.rawContext.listener.upY
      });
      this.upZ = new Param({
        context: this.context,
        param: this.context.rawContext.listener.upZ
      });
    }
    static getDefaults() {
      return Object.assign(ToneAudioNode.getDefaults(), {
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        forwardX: 0,
        forwardY: 0,
        forwardZ: -1,
        upX: 0,
        upY: 1,
        upZ: 0
      });
    }
    dispose() {
      super.dispose();
      this.positionX.dispose();
      this.positionY.dispose();
      this.positionZ.dispose();
      this.forwardX.dispose();
      this.forwardY.dispose();
      this.forwardZ.dispose();
      this.upX.dispose();
      this.upY.dispose();
      this.upZ.dispose();
      return this;
    }
  };
  onContextInit((context2) => {
    context2.listener = new Listener({ context: context2 });
  });
  onContextClose((context2) => {
    context2.listener.dispose();
  });

  // node_modules/tone/build/esm/index.js
  var Transport2 = getContext().transport;
  var Destination2 = getContext().destination;
  var Master = getContext().destination;
  var Listener2 = getContext().listener;
  var Draw2 = getContext().draw;
  var context = getContext();

  // src/sound/sound.js
  var Sound = class {
    constructor(frequency, oscillatorType) {
      __publicField(this, "type", "Sound");
      setContext(getAudioContext());
      this.volume = 1;
      this.frequency = frequency || 440;
      this.oscillatorType = oscillatorType || "fatsawtooth";
      if (this.oscillatorType === "drum") {
        this.synth = new MembraneSynth().toDestination();
      } else if (this.oscillatorType === "metal") {
        this.synth = new MetalSynth().toDestination();
      } else {
        this.synth = new Synth({
          oscillator: { type: this.oscillatorType }
        }).toDestination();
      }
      this.setFrequency(this.frequency);
    }
    setFrequency(frequency) {
      this.frequency = frequency;
      this.synth.frequency.value = frequency;
    }
    setVolume(volume) {
      this.volume = volume;
      this.synth.volume.value = volume;
    }
    getFrequency() {
      return this.frequency;
    }
    getVolume() {
      return this.volume;
    }
    setOscillatorType(oscillatorType) {
      if (oscillatorType === this.getOscillatorType()) {
        return;
      }
      if (oscillatorType === "drum") {
        this.disconnect();
        this.synth = new MembraneSynth().toDestination();
        this.setFrequency(this.getFrequency());
      } else if (oscillatorType === "metal") {
        this.disconnect();
        this.synth = new MetalSynth().toDestination();
        this.setFrequency(this.getFrequency());
      } else if (this.getOscillatorType() === "drum" || this.getOscillatorType() === "metal") {
        this.disconnect();
        this.synth = new Synth({
          oscillator: { type: oscillatorType }
        }).toDestination();
        this.setFrequency(this.frequency);
      } else {
        this.synth;
        this.synth.oscillator.type = oscillatorType;
      }
      this.oscillatorType = oscillatorType;
    }
    getOscillatorType() {
      return this.oscillatorType;
    }
    play() {
      if (this.getOscillatorType() === "metal") {
        this.synth.triggerAttack();
      } else {
        this.synth.triggerAttack(this.getFrequency());
      }
    }
    playFor(duration) {
      if (this.getOscillatorType() === "metal") {
        this.synth.triggerAttackRelease(duration);
      } else {
        this.synth.triggerAttackRelease(this.getFrequency(), duration);
      }
    }
    stop() {
      this.synth.triggerRelease();
    }
    disconnect() {
      this.synth.disconnect();
    }
    setEffect(effectName, effectValue) {
      switch (effectName) {
        case "distortion":
          var distortion = new Distortion(effectValue).toDestination();
          this.synth.connect(distortion);
          return;
        case "chebyshev":
          var chebyshev = new Chebyshev(effectValue * 100).toDestination();
          this.synth.connect(chebyshev);
          return;
        case "reverb":
          var reverb = new Freeverb().toDestination();
          reverb.wet.value = effectValue;
          this.synth.connect(reverb);
          return;
        case "tremolo":
          var tremolo = new Tremolo().toDestination().start();
          tremolo.wet.value = effectValue;
          this.synth.connect(tremolo);
          return;
        case "vibrato":
          var vibrato = new Vibrato().toDestination();
          vibrato.wet.value = effectValue;
          this.synth.connect(vibrato);
          return;
        default:
          return;
      }
    }
  };

  // entrypoints/windowBinder.js
  window.Arc = arc_default;
  window.Audio = CrossOriginAudio;
  window.Circle = circle_default;
  window.Color = Color;
  window.Console = Console;
  window.Graphics = graphics_default;
  window.Grid = grid_default;
  window.Group = group_default;
  window.ImageLibrary = imagelibrary_default;
  window.Keyboard = keyboard_default;
  window.Line = Line;
  window.Oval = Oval;
  window.Polygon = polygon_default;
  window.Queue = Queue;
  window.Randomizer = randomizer_exports;
  window.Rectangle = rectangle_default;
  window.Set = set_default;
  window.Sound = Sound;
  window.Stack = Stack;
  window.Text = text_default;
  window.Thing = thing_default;
  window.Vector = vector_default;
  window.WebImage = webimage_default;
  window.WebVideo = webvideo_default;
  var GraphicsInstance = new graphics_default();
  window.__graphics__ = GraphicsInstance;
  window.add = GraphicsInstance.add.bind(GraphicsInstance);
  window.getWidth = GraphicsInstance.getWidth.bind(GraphicsInstance);
  window.getHeight = GraphicsInstance.getHeight.bind(GraphicsInstance);
  window.mouseClickMethod = GraphicsInstance.mouseClickMethod.bind(GraphicsInstance);
  window.mouseDownMethod = GraphicsInstance.mouseDownMethod.bind(GraphicsInstance);
  window.mouseDragMethod = GraphicsInstance.mouseDragMethod.bind(GraphicsInstance);
  window.mouseUpMethod = GraphicsInstance.mouseUpMethod.bind(GraphicsInstance);
  window.mouseMoveMethod = GraphicsInstance.mouseMoveMethod.bind(GraphicsInstance);
  window.stopAllTimers = GraphicsInstance.stopAllTimers.bind(GraphicsInstance);
  window.setMainTimer = GraphicsInstance.setMainTimer.bind(GraphicsInstance);
  window.stopTimer = GraphicsInstance.stopTimer.bind(GraphicsInstance);
  window.setTimer = GraphicsInstance.setTimer.bind(GraphicsInstance);
  window.keyDownMethod = GraphicsInstance.keyDownMethod.bind(GraphicsInstance);
  window.isKeyPressed = GraphicsInstance.isKeyPressed.bind(GraphicsInstance);
  window.removeAll = GraphicsInstance.removeAll.bind(GraphicsInstance);
  window.remove = GraphicsInstance.remove.bind(GraphicsInstance);
  window.setBackgroundColor = GraphicsInstance.setBackgroundColor.bind(GraphicsInstance);
  window.getElementAt = GraphicsInstance.getElementAt.bind(GraphicsInstance);
  window.getElementsAt = GraphicsInstance.getElementsAt.bind(GraphicsInstance);
  window.setFullscreen = GraphicsInstance.setFullscreen.bind(GraphicsInstance);
  window.setSize = GraphicsInstance.setSize.bind(GraphicsInstance);
  window.fullReset = GraphicsInstance.fullReset.bind(GraphicsInstance);
  var ConsoleInstance = new Console();
  window.readLine = ConsoleInstance.readLine.bind(ConsoleInstance);
  window.readInt = ConsoleInstance.readInt.bind(ConsoleInstance);
  window.println = ConsoleInstance.println.bind(ConsoleInstance);
  window.print = ConsoleInstance.print.bind(ConsoleInstance);
  window.clear = ConsoleInstance.clear.bind(ConsoleInstance);
  var AudioInstance = new AudioManager();
  window.audioChangeMethod = AudioInstance.audioChangeMethod.bind(AudioInstance);
  window.map = map;
  window.getDistance = getDistance;
})();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/**
 * Tone.js
 * @author Yotam Mann
 * @license http://opensource.org/licenses/MIT MIT License
 * @copyright 2014-2019 Yotam Mann
 */
