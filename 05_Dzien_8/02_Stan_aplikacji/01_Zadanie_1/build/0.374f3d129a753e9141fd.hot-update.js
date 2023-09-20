"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var TextTyper = /*#__PURE__*/function (_Component) {
  _inherits(TextTyper, _Component);
  var _super = _createSuper(TextTyper);
  function TextTyper() {
    var _this;
    _classCallCheck(this, TextTyper);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      index: 1
    };
    _this.addIndex = function () {
      _this.setState(function (prev) {
        if (prev.index + 1 <= _this.props.text.length) {
          return {
            index: prev.index + 1
          };
        } else {
          return {
            index: prev.index
          };
        }
      });
    };
    _this.removeIndex = function () {
      _this.setState(function (prev) {
        if (prev.index - 1 >= 1) {
          return {
            index: prev.index - 1
          };
        } else {
          return {
            index: prev.index
          };
        }
      });
    };
    return _this;
  }
  _createClass(TextTyper, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, this.props.text.slice(0, this.state.index)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: this.addIndex
      }, "+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: this.removeIndex
      }, "-"));
    }
  }]);
  return TextTyper;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextTyper);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8a78d899fe70ebfe0593")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zNzRmM2QxMjlhNzUzZTkxNDFmZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFBQSxJQUVqQ0UsU0FBUywwQkFBQUMsVUFBQTtFQUFBQyxTQUFBLENBQUFGLFNBQUEsRUFBQUMsVUFBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBSixTQUFBO0VBQUEsU0FBQUEsVUFBQTtJQUFBLElBQUFLLEtBQUE7SUFBQUMsZUFBQSxPQUFBTixTQUFBO0lBQUEsU0FBQU8sSUFBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBQUMsSUFBQSxPQUFBQyxLQUFBLENBQUFKLElBQUEsR0FBQUssSUFBQSxNQUFBQSxJQUFBLEdBQUFMLElBQUEsRUFBQUssSUFBQTtNQUFBRixJQUFBLENBQUFFLElBQUEsSUFBQUosU0FBQSxDQUFBSSxJQUFBO0lBQUE7SUFBQVAsS0FBQSxHQUFBRixNQUFBLENBQUFVLElBQUEsQ0FBQUMsS0FBQSxDQUFBWCxNQUFBLFNBQUFZLE1BQUEsQ0FBQUwsSUFBQTtJQUFBTCxLQUFBLENBQ1hXLEtBQUssR0FBRztNQUNKQyxLQUFLLEVBQUU7SUFDWCxDQUFDO0lBQUFaLEtBQUEsQ0FFRGEsUUFBUSxHQUFHLFlBQU07TUFDYmIsS0FBQSxDQUFLYyxRQUFRLENBQUMsVUFBQ0MsSUFBSSxFQUFLO1FBQ2hCLElBQUlBLElBQUksQ0FBQ0gsS0FBSyxHQUFHLENBQUMsSUFBSVosS0FBQSxDQUFLZ0IsS0FBSyxDQUFDQyxJQUFJLENBQUNiLE1BQU0sRUFBRTtVQUMxQyxPQUFPO1lBQ0hRLEtBQUssRUFBRUcsSUFBSSxDQUFDSCxLQUFLLEdBQUc7VUFDeEIsQ0FBQztRQUNMLENBQUMsTUFBTTtVQUNILE9BQU87WUFDSEEsS0FBSyxFQUFFRyxJQUFJLENBQUNIO1VBQ2hCLENBQUM7UUFDTDtNQUNKLENBQ0osQ0FBQztJQUNMLENBQUM7SUFBQVosS0FBQSxDQUVEa0IsV0FBVyxHQUFHLFlBQU07TUFDaEJsQixLQUFBLENBQUtjLFFBQVEsQ0FBQyxVQUFDQyxJQUFJLEVBQUs7UUFDcEIsSUFBSUEsSUFBSSxDQUFDSCxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtVQUNyQixPQUFPO1lBQ0hBLEtBQUssRUFBRUcsSUFBSSxDQUFDSCxLQUFLLEdBQUc7VUFDeEIsQ0FBQztRQUNMLENBQUMsTUFBTTtVQUNILE9BQU87WUFDSEEsS0FBSyxFQUFFRyxJQUFJLENBQUNIO1VBQ2hCLENBQUM7UUFDTDtNQUNKLENBQUMsQ0FBQztJQUNOLENBQUM7SUFBQSxPQUFBWixLQUFBO0VBQUE7RUFBQW1CLFlBQUEsQ0FBQXhCLFNBQUE7SUFBQXlCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLE9BQUEsRUFBUztNQUNMLG9CQUNJN0IsMERBQUEsMkJBQ0lBLDBEQUFBLGFBQUssSUFBSSxDQUFDdUIsS0FBSyxDQUFDQyxJQUFJLENBQUNPLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDYixLQUFLLENBQUNDLEtBQUssQ0FBTSxDQUFDLGVBQ3JEbkIsMERBQUE7UUFBUWdDLE9BQU8sRUFBRSxJQUFJLENBQUNaO01BQVMsR0FBQyxHQUFTLENBQUMsZUFDMUNwQiwwREFBQTtRQUFRZ0MsT0FBTyxFQUFFLElBQUksQ0FBQ1A7TUFBWSxHQUFDLEdBQVMsQ0FDM0MsQ0FBQztJQUVkO0VBQUM7RUFBQSxPQUFBdkIsU0FBQTtBQUFBLEVBMUNtQkQsNENBQVM7QUE2Q2pDLGlFQUFlQyxTQUFTOzs7Ozs7OztVQy9DeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNV9Eemllbl84LzAyX1N0YW5fYXBsaWthY2ppLzAxX1phZGFuaWVfMS9qcy9UZXh0VHlwZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgVGV4dFR5cGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgaW5kZXg6IDFcbiAgICB9XG5cbiAgICBhZGRJbmRleCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwcmV2LmluZGV4ICsgMSA8PSB0aGlzLnByb3BzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogcHJldi5pbmRleCArIDFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogcHJldi5pbmRleFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmVtb3ZlSW5kZXggPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXYpID0+IHtcbiAgICAgICAgICAgIGlmIChwcmV2LmluZGV4IC0gMSA+PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHByZXYuaW5kZXggLSAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpbmRleDogcHJldi5pbmRleFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy50ZXh0LnNsaWNlKDAsIHRoaXMuc3RhdGUuaW5kZXgpfTwvaDE+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZEluZGV4fT4rPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnJlbW92ZUluZGV4fT4tPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRUeXBlcjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4YTc4ZDg5OWZlNzBlYmZlMDU5M1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRleHRUeXBlciIsIl9Db21wb25lbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiY2FsbCIsImFwcGx5IiwiY29uY2F0Iiwic3RhdGUiLCJpbmRleCIsImFkZEluZGV4Iiwic2V0U3RhdGUiLCJwcmV2IiwicHJvcHMiLCJ0ZXh0IiwicmVtb3ZlSW5kZXgiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJzbGljZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9