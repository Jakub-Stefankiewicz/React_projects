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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, value)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PeseLinput);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("470f7f64190418db9c4e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wZDNiNjlkNDRlNzJmNWI4NWU1Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDeUM7QUFFL0UsSUFBTUcsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUEsRUFBUztFQUNyQixJQUFBQyxTQUFBLEdBQXVCSCwrQ0FBUSxDQUFDLEdBQUcsQ0FBQztJQUFBSSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUE5QkcsS0FBSyxHQUFBRixVQUFBO0lBQUVHLFFBQVEsR0FBQUgsVUFBQTtFQUNyQixJQUFBSSxVQUFBLEdBQXlCUiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBUyxVQUFBLEdBQUFKLGNBQUEsQ0FBQUcsVUFBQTtJQUFsQ0UsTUFBTSxHQUFBRCxVQUFBO0lBQUVFLFNBQVMsR0FBQUYsVUFBQTtFQUV2QixJQUFNRyxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSUMsQ0FBQyxFQUFLO0lBQ3hCLElBQUlBLENBQUMsQ0FBQ0MsTUFBTSxDQUFDUixLQUFLLENBQUNTLE1BQU0sR0FBQyxFQUFFLEVBQUM7TUFDekJKLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDbkI7SUFDQUosUUFBUSxDQUFDTSxDQUFDLENBQUNDLE1BQU0sQ0FBQ1IsS0FBSyxDQUFDO0VBQzVCLENBQUM7RUFFRCxvQkFDSVAsMERBQUEsMkJBQ0lBLDBEQUFBLDRCQUNBQSwwREFBQTtJQUFPa0IsSUFBSSxFQUFDLE1BQU07SUFBQ0MsSUFBSSxFQUFDLE9BQU87SUFBQ1osS0FBSyxFQUFFQSxLQUFNO0lBQUNhLFFBQVEsRUFBRSxTQUFBQSxTQUFBTixDQUFDO01BQUEsT0FBRUQsWUFBWSxDQUFDQyxDQUFDLENBQUM7SUFBQTtFQUFDLENBQUMsQ0FBQyxlQUU3RWQsMERBQUEsY0FBTU8sS0FBVyxDQUNYLENBQ0wsQ0FBQztBQUVkLENBQUM7QUFFRCxpRUFBZUosVUFBVTs7Ozs7Ozs7VUN6QnpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgvMDJfRm9ybXVsYXJ6ZV8tX2NpYWdfZGFsc3p5X3phZGFuLzAxX1phZGFuaWVfMS9qcy9QRVNFTGlucHV0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vLi4vLi4vMDFfQ3VzdG9tX0hvb2tzLzAxX1phZGFuaWVfMS9qcy9ob29rcy91c2VJbnB1dFwiO1xuXG5jb25zdCBQZXNlTGlucHV0ID0gKCkgPT4ge1xuICAgIGNvbnN0W3ZhbHVlLCBzZXRWYWx1ZV09dXNlU3RhdGUoXCIgXCIpO1xuICAgIGNvbnN0W3ZlcmlmeSwgc2V0VmVyaWZ5XT11c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUubGVuZ3RoPjEwKXtcbiAgICAgICAgICAgIHNldFZlcmlmeSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInZhbHVlXCIgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17ZT0+aGFuZGxlQ2hhbmdlKGUpfS8+XG5cbiAgICAgICAgICAgIDxkaXY+e3ZhbHVlfTwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGVzZUxpbnB1dDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0NzBmN2Y2NDE5MDQxOGRiOWM0ZVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlSW5wdXQiLCJQZXNlTGlucHV0IiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwidmFsdWUiLCJzZXRWYWx1ZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwidmVyaWZ5Iiwic2V0VmVyaWZ5IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsImxlbmd0aCIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwibmFtZSIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==