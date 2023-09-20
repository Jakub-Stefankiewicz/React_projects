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

var Box = /*#__PURE__*/function (_Component) {
  _inherits(Box, _Component);
  var _super = _createSuper(Box);
  function Box(props) {
    var _this;
    _classCallCheck(this, Box);
    _this = _super.call(this, props);
    _this.state = {
      text: "red"
    };
    console.log("constructor");
    return _this;
  }
  _createClass(Box, [{
    key: "render",
    value: function render() {
      console.log("Render");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: {
          width: "500px",
          height: "500px",
          backgroundColor: "".concat(this.state.text)
        }
      }, "Tre\u015B\u0107");
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      this.timeoutID = setInterval(function () {
        if (_this2.state.text === "red") {
          _this2.setState({
            text: "green"
          });
        } else {
          _this2.setState({
            text: "red"
          });
        }
      }, 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.timeoutID);
    }
  }]);
  return Box;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Box);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("51820c83c7dab19f7f75")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zNjE2YWZjODAyOWNhNDc0M2ZhZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFBQSxJQUVqQ0UsR0FBRywwQkFBQUMsVUFBQTtFQUFBQyxTQUFBLENBQUFGLEdBQUEsRUFBQUMsVUFBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBSixHQUFBO0VBY0wsU0FBQUEsSUFBWUssS0FBSyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUFBQyxlQUFBLE9BQUFQLEdBQUE7SUFDZk0sS0FBQSxHQUFBSCxNQUFBLENBQUFLLElBQUEsT0FBTUgsS0FBSztJQUNYQyxLQUFBLENBQUtHLEtBQUssR0FBRztNQUNUQyxJQUFJLEVBQUU7SUFDVixDQUFDO0lBQ0RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUFDLE9BQUFOLEtBQUE7RUFDL0I7RUFBQ08sWUFBQSxDQUFBYixHQUFBO0lBQUFjLEdBQUE7SUFBQUMsS0FBQSxFQW5CRCxTQUFBQyxPQUFBLEVBQVM7TUFDTEwsT0FBTyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO01BQ3JCLG9CQUNJZCwwREFBQTtRQUFLb0IsS0FBSyxFQUFFO1VBQ1JDLEtBQUssRUFBRSxPQUFPO1VBQ2RDLE1BQU0sRUFBRSxPQUFPO1VBQ2ZDLGVBQWUsS0FBQUMsTUFBQSxDQUFLLElBQUksQ0FBQ2IsS0FBSyxDQUFDQyxJQUFJO1FBQ3ZDO01BQUUsR0FBQyxpQkFFRSxDQUFDO0lBRWQ7RUFBQztJQUFBSSxHQUFBO0lBQUFDLEtBQUEsRUFVRCxTQUFBUSxrQkFBQSxFQUFvQjtNQUFBLElBQUFDLE1BQUE7TUFDaEIsSUFBSSxDQUFDQyxTQUFTLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO1FBQy9CLElBQUlGLE1BQUksQ0FBQ2YsS0FBSyxDQUFDQyxJQUFJLEtBQUssS0FBSyxFQUFFO1VBQzNCYyxNQUFJLENBQUNHLFFBQVEsQ0FBQztZQUFDakIsSUFBSSxFQUFFO1VBQU8sQ0FBQyxDQUFDO1FBQ2xDLENBQUMsTUFBTTtVQUNIYyxNQUFJLENBQUNHLFFBQVEsQ0FBQztZQUFDakIsSUFBSSxFQUFFO1VBQUssQ0FBQyxDQUFDO1FBQ2hDO01BQ0osQ0FBQyxFQUFFLElBQUksQ0FBQztJQUNaO0VBQUM7SUFBQUksR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWEscUJBQUEsRUFBdUI7TUFDbkJDLGFBQWEsQ0FBQyxJQUFJLENBQUNKLFNBQVMsQ0FBQztJQUNqQztFQUFDO0VBQUEsT0FBQXpCLEdBQUE7QUFBQSxFQWxDYUQsNENBQVM7QUFxQzNCLGlFQUFlQyxHQUFHOzs7Ozs7OztVQ3ZDbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wN19Eemllbl8xMS8wMV9NZXRvZHlfY3lrbHVfenljaWFfa29tcG9uZW50dS8wM19aYWRhbmllXzMvanMvQm94LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEJveCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJlbmRlclwiKVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjUwMHB4XCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjUwMHB4XCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHt0aGlzLnN0YXRlLnRleHR9YFxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgVHJlxZvEh1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdGV4dDogXCJyZWRcIlxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29uc3RydWN0b3JcIik7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMudGltZW91dElEID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUudGV4dCA9PT0gXCJyZWRcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3RleHQ6IFwiZ3JlZW5cIn0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3RleHQ6IFwicmVkXCJ9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDAwKVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZW91dElEKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJveDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1MTgyMGM4M2M3ZGFiMTlmN2Y3NVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJveCIsIl9Db21wb25lbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiY2FsbCIsInN0YXRlIiwidGV4dCIsImNvbnNvbGUiLCJsb2ciLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiY29uY2F0IiwiY29tcG9uZW50RGlkTW91bnQiLCJfdGhpczIiLCJ0aW1lb3V0SUQiLCJzZXRJbnRlcnZhbCIsInNldFN0YXRlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJjbGVhckludGVydmFsIl0sInNvdXJjZVJvb3QiOiIifQ==