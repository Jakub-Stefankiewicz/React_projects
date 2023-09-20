"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
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


var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
var GrandchildComponent = /*#__PURE__*/function (_Component) {
  _inherits(GrandchildComponent, _Component);
  var _super = _createSuper(GrandchildComponent);
  function GrandchildComponent() {
    _classCallCheck(this, GrandchildComponent);
    return _super.apply(this, arguments);
  }
  _createClass(GrandchildComponent, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, props.children);
    }
  }]);
  return GrandchildComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
var ChildComponent = /*#__PURE__*/function (_Component2) {
  _inherits(ChildComponent, _Component2);
  var _super2 = _createSuper(ChildComponent);
  function ChildComponent() {
    _classCallCheck(this, ChildComponent);
    return _super2.apply(this, arguments);
  }
  _createClass(ChildComponent, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GrandchildComponent, null);
    }
  }]);
  return ChildComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
var ParentComponent = /*#__PURE__*/function (_Component3) {
  _inherits(ParentComponent, _Component3);
  var _super3 = _createSuper(ParentComponent);
  function ParentComponent() {
    _classCallCheck(this, ParentComponent);
    return _super3.apply(this, arguments);
  }
  _createClass(ParentComponent, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ChildComponent, null);
    }
  }]);
  return ParentComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ParentComponent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "To dzia\u0142a!")));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3b3ec3753b70534766e3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jMzc1MjljMmY4ZTgwYTFmNTYyOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ0s7QUFJNUMsSUFBTUcsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHSiw0REFBVSxDQUFDQyxTQUFTLENBQUM7QUFBQyxJQUU3QkksbUJBQW1CLDBCQUFBQyxVQUFBO0VBQUFDLFNBQUEsQ0FBQUYsbUJBQUEsRUFBQUMsVUFBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBSixtQkFBQTtFQUFBLFNBQUFBLG9CQUFBO0lBQUFLLGVBQUEsT0FBQUwsbUJBQUE7SUFBQSxPQUFBRyxNQUFBLENBQUFHLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0VBQUFDLFlBQUEsQ0FBQVIsbUJBQUE7SUFBQVMsR0FBQTtJQUFBQyxLQUFBLEVBQ3JCLFNBQUFDLE9BQUEsRUFBUztNQUNMLG9CQUFRbEIsMERBQUEsYUFBS29CLEtBQUssQ0FBQ0MsUUFBYSxDQUFDO0lBQ3JDO0VBQUM7RUFBQSxPQUFBZCxtQkFBQTtBQUFBLEVBSDZCTiw0Q0FBUztBQUFBLElBTXJDcUIsY0FBYywwQkFBQUMsV0FBQTtFQUFBZCxTQUFBLENBQUFhLGNBQUEsRUFBQUMsV0FBQTtFQUFBLElBQUFDLE9BQUEsR0FBQWIsWUFBQSxDQUFBVyxjQUFBO0VBQUEsU0FBQUEsZUFBQTtJQUFBVixlQUFBLE9BQUFVLGNBQUE7SUFBQSxPQUFBRSxPQUFBLENBQUFYLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0VBQUFDLFlBQUEsQ0FBQU8sY0FBQTtJQUFBTixHQUFBO0lBQUFDLEtBQUEsRUFDaEIsU0FBQUMsT0FBQSxFQUFTO01BQ0wsb0JBQ0lsQiwwREFBQSxDQUFDTyxtQkFBbUIsTUFDQyxDQUFDO0lBRTlCO0VBQUM7RUFBQSxPQUFBZSxjQUFBO0FBQUEsRUFOd0JyQiw0Q0FBUztBQUFBLElBU2hDd0IsZUFBZSwwQkFBQUMsV0FBQTtFQUFBakIsU0FBQSxDQUFBZ0IsZUFBQSxFQUFBQyxXQUFBO0VBQUEsSUFBQUMsT0FBQSxHQUFBaEIsWUFBQSxDQUFBYyxlQUFBO0VBQUEsU0FBQUEsZ0JBQUE7SUFBQWIsZUFBQSxPQUFBYSxlQUFBO0lBQUEsT0FBQUUsT0FBQSxDQUFBZCxLQUFBLE9BQUFDLFNBQUE7RUFBQTtFQUFBQyxZQUFBLENBQUFVLGVBQUE7SUFBQVQsR0FBQTtJQUFBQyxLQUFBLEVBQ2pCLFNBQUFDLE9BQUEsRUFBUztNQUNMLG9CQUNJbEIsMERBQUEsQ0FBQ3NCLGNBQWMsTUFDQyxDQUFDO0lBRXpCO0VBQUM7RUFBQSxPQUFBRyxlQUFBO0FBQUEsRUFOeUJ4Qiw0Q0FBUztBQVN2Q0ssSUFBSSxDQUFDWSxNQUFNLGVBQUNsQiwwREFBQSxDQUFDeUIsZUFBZSxxQkFDeEJ6QiwwREFBQSxhQUFJLGlCQUFjLENBQ0wsQ0FBQyxDQUFDOzs7Ozs7OztVQ2xDbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9Eemllbl81LTcvMDFfS29tcG96eWNqYV9pX3Byb3BzX2NoaWxkcmVuLzAxX1phZGFuaWVfMS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xuXG5jbGFzcyBHcmFuZGNoaWxkQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoPGgxPntwcm9wcy5jaGlsZHJlbn08L2gxPilcbiAgICB9XG59XG5cbmNsYXNzIENoaWxkQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8R3JhbmRjaGlsZENvbXBvbmVudD5cbiAgICAgICAgICAgIDwvR3JhbmRjaGlsZENvbXBvbmVudD5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuY2xhc3MgUGFyZW50Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q2hpbGRDb21wb25lbnQ+XG4gICAgICAgICAgICA8L0NoaWxkQ29tcG9uZW50PlxuICAgICAgICApO1xuICAgIH1cbn1cblxucm9vdC5yZW5kZXIoPFBhcmVudENvbXBvbmVudD5cbiAgICA8aDE+VG8gZHppYcWCYSE8L2gxPlxuPC9QYXJlbnRDb21wb25lbnQ+KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjNiM2VjMzc1M2I3MDUzNDc2NmUzXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY3JlYXRlUm9vdCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwiR3JhbmRjaGlsZENvbXBvbmVudCIsIl9Db21wb25lbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcHBseSIsImFyZ3VtZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsInByb3BzIiwiY2hpbGRyZW4iLCJDaGlsZENvbXBvbmVudCIsIl9Db21wb25lbnQyIiwiX3N1cGVyMiIsIlBhcmVudENvbXBvbmVudCIsIl9Db21wb25lbnQzIiwiX3N1cGVyMyJdLCJzb3VyY2VSb290IjoiIn0=