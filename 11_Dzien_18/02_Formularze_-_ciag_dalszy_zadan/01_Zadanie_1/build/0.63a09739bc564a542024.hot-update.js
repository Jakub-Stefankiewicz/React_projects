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
/* harmony import */ var _01_Custom_Hooks_01_Zadanie_1_js_hooks_useInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var PeseLinput = function PeseLinput() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(" "),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    verify = _useState4[0],
    setVerify = _useState4[1];
  var handleChange = function handleChange(e) {
    if (e.target.value.length > 10 && _typeof(!isNaN(parseInt(e.target.value)))) {
      setVerify(true);
    }
    setValue(e.target.value);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "value",
    value: value,
    onChange: function onChange(e) {
      return handleChange(e);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, verify ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "submit",
    value: "prze\u015Blij"
  }) : "Niepoprawny pesel")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PeseLinput);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("40bdc365482867796097")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42M2EwOTczOWJjNTY0YTU0MjAyNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ3lDO0FBRS9FLElBQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBLEVBQVM7RUFDckIsSUFBQUMsU0FBQSxHQUF1QkgsK0NBQVEsQ0FBQyxHQUFHLENBQUM7SUFBQUksVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBOUJHLEtBQUssR0FBQUYsVUFBQTtJQUFFRyxRQUFRLEdBQUFILFVBQUE7RUFDckIsSUFBQUksVUFBQSxHQUF5QlIsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQVMsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBbENFLE1BQU0sR0FBQUQsVUFBQTtJQUFFRSxTQUFTLEdBQUFGLFVBQUE7RUFFdkIsSUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUlDLENBQUMsRUFBSztJQUN4QixJQUFJQSxDQUFDLENBQUNDLE1BQU0sQ0FBQ1IsS0FBSyxDQUFDUyxNQUFNLEdBQUMsRUFBRSxJQUFBQyxPQUFBLENBQVcsQ0FBQ0MsS0FBSyxDQUFDQyxRQUFRLENBQUNMLENBQUMsQ0FBQ0MsTUFBTSxDQUFDUixLQUFLLENBQUMsQ0FBQyxHQUFDO01BQ3BFSyxTQUFTLENBQUMsSUFBSSxDQUFDO0lBQ25CO0lBQ0FKLFFBQVEsQ0FBQ00sQ0FBQyxDQUFDQyxNQUFNLENBQUNSLEtBQUssQ0FBQztFQUM1QixDQUFDO0VBRUQsb0JBQ0lQLDBEQUFBLDJCQUNJQSwwREFBQSw0QkFDQUEsMERBQUE7SUFBT3FCLElBQUksRUFBQyxNQUFNO0lBQUNDLElBQUksRUFBQyxPQUFPO0lBQUNmLEtBQUssRUFBRUEsS0FBTTtJQUFDZ0IsUUFBUSxFQUFFLFNBQUFBLFNBQUFULENBQUM7TUFBQSxPQUFFRCxZQUFZLENBQUNDLENBQUMsQ0FBQztJQUFBO0VBQUMsQ0FBQyxDQUFDLGVBRTdFZCwwREFBQSxjQUFNVyxNQUFNLGdCQUFHWCwwREFBQTtJQUFPcUIsSUFBSSxFQUFDLFFBQVE7SUFBQ2QsS0FBSyxFQUFFO0VBQVUsQ0FBQyxDQUFDLEdBQUcsbUJBQXlCLENBQzdFLENBQ0wsQ0FBQztBQUVkLENBQUM7QUFFRCxpRUFBZUosVUFBVTs7Ozs7Ozs7VUN6QnpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgvMDJfRm9ybXVsYXJ6ZV8tX2NpYWdfZGFsc3p5X3phZGFuLzAxX1phZGFuaWVfMS9qcy9QRVNFTGlucHV0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vLi4vLi4vMDFfQ3VzdG9tX0hvb2tzLzAxX1phZGFuaWVfMS9qcy9ob29rcy91c2VJbnB1dFwiO1xuXG5jb25zdCBQZXNlTGlucHV0ID0gKCkgPT4ge1xuICAgIGNvbnN0W3ZhbHVlLCBzZXRWYWx1ZV09dXNlU3RhdGUoXCIgXCIpO1xuICAgIGNvbnN0W3ZlcmlmeSwgc2V0VmVyaWZ5XT11c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUubGVuZ3RoPjEwICYmIHR5cGVvZiAhaXNOYU4ocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKSl7XG4gICAgICAgICAgICBzZXRWZXJpZnkodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ2YWx1ZVwiIHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e2U9PmhhbmRsZUNoYW5nZShlKX0vPlxuXG4gICAgICAgICAgICA8ZGl2Pnt2ZXJpZnkgPyA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlID1cInByemXFm2xpalwiLz4gOiBcIk5pZXBvcHJhd255IHBlc2VsXCJ9PC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQZXNlTGlucHV0OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjQwYmRjMzY1NDgyODY3Nzk2MDk3XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VJbnB1dCIsIlBlc2VMaW5wdXQiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ2YWx1ZSIsInNldFZhbHVlIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJ2ZXJpZnkiLCJzZXRWZXJpZnkiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibGVuZ3RoIiwiX3R5cGVvZiIsImlzTmFOIiwicGFyc2VJbnQiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsIm5hbWUiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=