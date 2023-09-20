"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 35:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useInput = function useInput(valueOnStart) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(valueOnStart),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  return [value, {
    value: value,
    onChange: function onChange(e) {
      setValue(e.target.value);
    }
  }];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInput);

/***/ }),

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _01_Custom_Hooks_01_Zadanie_1_js_hooks_useInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
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
    if (e.target.value.length > 10) {
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

/***/ }),

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _PESELinput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);



var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PESELinput__WEBPACK_IMPORTED_MODULE_2__["default"], null);
};
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("67167bd6bf158bcb4bb5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wMzA0NWM2ZDhmZjFiNzk4ZTg4Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxJQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBSUMsWUFBWSxFQUFLO0VBQy9CLElBQUFDLFNBQUEsR0FBMEJILCtDQUFRLENBQUNFLFlBQVksQ0FBQztJQUFBRSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUF6Q0csS0FBSyxHQUFBRixVQUFBO0lBQUVHLFFBQVEsR0FBQUgsVUFBQTtFQUV0QixPQUFPLENBQ0hFLEtBQUssRUFDTDtJQUNJQSxLQUFLLEVBQUxBLEtBQUs7SUFDTEUsUUFBUSxFQUFFLFNBQUFBLFNBQUNDLENBQUMsRUFBSztNQUNiRixRQUFRLENBQUNFLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSixLQUFLLENBQUM7SUFDNUI7RUFDSixDQUFDLENBQ0o7QUFDTCxDQUFDO0FBRUQsaUVBQWVMLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJlO0FBQ3lDO0FBRS9FLElBQU1VLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBLEVBQVM7RUFDckIsSUFBQVIsU0FBQSxHQUF1QkgsK0NBQVEsQ0FBQyxHQUFHLENBQUM7SUFBQUksVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBOUJHLEtBQUssR0FBQUYsVUFBQTtJQUFFRyxRQUFRLEdBQUFILFVBQUE7RUFDckIsSUFBQVEsVUFBQSxHQUF5QlosK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQWEsVUFBQSxHQUFBUixjQUFBLENBQUFPLFVBQUE7SUFBbENFLE1BQU0sR0FBQUQsVUFBQTtJQUFFRSxTQUFTLEdBQUFGLFVBQUE7RUFFdkIsSUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUlQLENBQUMsRUFBSztJQUN4QixJQUFJQSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0osS0FBSyxDQUFDVyxNQUFNLEdBQUMsRUFBRSxFQUFDO01BQ3pCRixTQUFTLENBQUMsSUFBSSxDQUFDO0lBQ25CO0lBQ0FSLFFBQVEsQ0FBQ0UsQ0FBQyxDQUFDQyxNQUFNLENBQUNKLEtBQUssQ0FBQztFQUM1QixDQUFDO0VBRUQsb0JBQ0lQLDBEQUFBLDJCQUNJQSwwREFBQSw0QkFDQUEsMERBQUE7SUFBT29CLElBQUksRUFBQyxNQUFNO0lBQUNDLElBQUksRUFBQyxPQUFPO0lBQUNkLEtBQUssRUFBRUEsS0FBTTtJQUFDRSxRQUFRLEVBQUUsU0FBQUEsU0FBQUMsQ0FBQztNQUFBLE9BQUVPLFlBQVksQ0FBQ1AsQ0FBQyxDQUFDO0lBQUE7RUFBQyxDQUFDLENBQUMsZUFFN0VWLDBEQUFBLGNBQU1lLE1BQU0sZ0JBQUdmLDBEQUFBO0lBQU9vQixJQUFJLEVBQUMsUUFBUTtJQUFDYixLQUFLLEVBQUU7RUFBVSxDQUFDLENBQUMsR0FBRyxtQkFBeUIsQ0FDN0UsQ0FDTCxDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlSyxVQUFVOzs7Ozs7Ozs7Ozs7QUN6QmM7QUFDSztBQUNOO0FBRXRDLElBQU1hLEdBQUcsR0FBRyxTQUFOQSxHQUFHQSxDQUFBO0VBQUEsb0JBQVN6QiwwREFBQSxDQUFDd0IsbURBQVUsTUFBQyxDQUFDO0FBQUE7QUFDL0IsSUFBTUUsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHTiw0REFBVSxDQUFDRyxTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxlQUFDOUIsMERBQUEsQ0FBQ3lCLEdBQUcsTUFBQyxDQUFDLENBQUM7Ozs7Ozs7O1VDUG5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgvMDFfQ3VzdG9tX0hvb2tzLzAxX1phZGFuaWVfMS9qcy9ob29rcy91c2VJbnB1dC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC8wMl9Gb3JtdWxhcnplXy1fY2lhZ19kYWxzenlfemFkYW4vMDFfWmFkYW5pZV8xL2pzL1BFU0VMaW5wdXQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgvMDJfRm9ybXVsYXJ6ZV8tX2NpYWdfZGFsc3p5X3phZGFuLzAxX1phZGFuaWVfMS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCB1c2VJbnB1dCA9ICh2YWx1ZU9uU3RhcnQpID0+IHtcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKHZhbHVlT25TdGFydCk7XG5cbiAgICByZXR1cm4gW1xuICAgICAgICB2YWx1ZSxcbiAgICAgICAge1xuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBvbkNoYW5nZTogKGUpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBdXG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VJbnB1dDsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi8uLi8uLi8wMV9DdXN0b21fSG9va3MvMDFfWmFkYW5pZV8xL2pzL2hvb2tzL3VzZUlucHV0XCI7XG5cbmNvbnN0IFBlc2VMaW5wdXQgPSAoKSA9PiB7XG4gICAgY29uc3RbdmFsdWUsIHNldFZhbHVlXT11c2VTdGF0ZShcIiBcIik7XG4gICAgY29uc3RbdmVyaWZ5LCBzZXRWZXJpZnldPXVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZS5sZW5ndGg+MTApe1xuICAgICAgICAgICAgc2V0VmVyaWZ5KHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidmFsdWVcIiB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXtlPT5oYW5kbGVDaGFuZ2UoZSl9Lz5cblxuICAgICAgICAgICAgPGRpdj57dmVyaWZ5ID8gPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZSA9XCJwcnplxZtsaWpcIi8+IDogXCJOaWVwb3ByYXdueSBwZXNlbFwifTwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGVzZUxpbnB1dDsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IFBFU0VMaW5wdXQgZnJvbSBcIi4vUEVTRUxpbnB1dFwiO1xuXG5jb25zdCBBcHAgPSAoKSA9PiA8UEVTRUxpbnB1dC8+XG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwLz4pXG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjY3MTY3YmQ2YmYxNThiY2I0YmI1XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VJbnB1dCIsInZhbHVlT25TdGFydCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInZhbHVlIiwic2V0VmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJQZXNlTGlucHV0IiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJ2ZXJpZnkiLCJzZXRWZXJpZnkiLCJoYW5kbGVDaGFuZ2UiLCJsZW5ndGgiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsIm5hbWUiLCJDb21wb25lbnQiLCJjcmVhdGVSb290IiwiUEVTRUxpbnB1dCIsIkFwcCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==