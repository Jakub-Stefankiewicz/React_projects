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
    if (e.target.value.length > 10 && typeof e.target.value === "number") {
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
/******/ 	__webpack_require__.h = () => ("63a09739bc564a542024")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42NzE2N2JkNmJmMTU4YmNiNGJiNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDeUM7QUFFL0UsSUFBTUcsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUEsRUFBUztFQUNyQixJQUFBQyxTQUFBLEdBQXVCSCwrQ0FBUSxDQUFDLEdBQUcsQ0FBQztJQUFBSSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUE5QkcsS0FBSyxHQUFBRixVQUFBO0lBQUVHLFFBQVEsR0FBQUgsVUFBQTtFQUNyQixJQUFBSSxVQUFBLEdBQXlCUiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBUyxVQUFBLEdBQUFKLGNBQUEsQ0FBQUcsVUFBQTtJQUFsQ0UsTUFBTSxHQUFBRCxVQUFBO0lBQUVFLFNBQVMsR0FBQUYsVUFBQTtFQUV2QixJQUFNRyxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSUMsQ0FBQyxFQUFLO0lBQ3hCLElBQUlBLENBQUMsQ0FBQ0MsTUFBTSxDQUFDUixLQUFLLENBQUNTLE1BQU0sR0FBQyxFQUFFLElBQUksT0FBT0YsQ0FBQyxDQUFDQyxNQUFNLENBQUNSLEtBQUssS0FBRyxRQUFRLEVBQUM7TUFDN0RLLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDbkI7SUFDQUosUUFBUSxDQUFDTSxDQUFDLENBQUNDLE1BQU0sQ0FBQ1IsS0FBSyxDQUFDO0VBQzVCLENBQUM7RUFFRCxvQkFDSVAsMERBQUEsMkJBQ0lBLDBEQUFBLDRCQUNBQSwwREFBQTtJQUFPa0IsSUFBSSxFQUFDLE1BQU07SUFBQ0MsSUFBSSxFQUFDLE9BQU87SUFBQ1osS0FBSyxFQUFFQSxLQUFNO0lBQUNhLFFBQVEsRUFBRSxTQUFBQSxTQUFBTixDQUFDO01BQUEsT0FBRUQsWUFBWSxDQUFDQyxDQUFDLENBQUM7SUFBQTtFQUFDLENBQUMsQ0FBQyxlQUU3RWQsMERBQUEsY0FBTVcsTUFBTSxnQkFBR1gsMERBQUE7SUFBT2tCLElBQUksRUFBQyxRQUFRO0lBQUNYLEtBQUssRUFBRTtFQUFVLENBQUMsQ0FBQyxHQUFHLG1CQUF5QixDQUM3RSxDQUNMLENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWVKLFVBQVU7Ozs7Ozs7O1VDekJ6QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LzAyX0Zvcm11bGFyemVfLV9jaWFnX2RhbHN6eV96YWRhbi8wMV9aYWRhbmllXzEvanMvUEVTRUxpbnB1dC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uLy4uLy4uLzAxX0N1c3RvbV9Ib29rcy8wMV9aYWRhbmllXzEvanMvaG9va3MvdXNlSW5wdXRcIjtcblxuY29uc3QgUGVzZUxpbnB1dCA9ICgpID0+IHtcbiAgICBjb25zdFt2YWx1ZSwgc2V0VmFsdWVdPXVzZVN0YXRlKFwiIFwiKTtcbiAgICBjb25zdFt2ZXJpZnksIHNldFZlcmlmeV09dXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlLmxlbmd0aD4xMCAmJiB0eXBlb2YgZS50YXJnZXQudmFsdWU9PT1cIm51bWJlclwiKXtcbiAgICAgICAgICAgIHNldFZlcmlmeSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInZhbHVlXCIgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17ZT0+aGFuZGxlQ2hhbmdlKGUpfS8+XG5cbiAgICAgICAgICAgIDxkaXY+e3ZlcmlmeSA/IDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWUgPVwicHJ6ZcWbbGlqXCIvPiA6IFwiTmllcG9wcmF3bnkgcGVzZWxcIn08L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBlc2VMaW5wdXQ7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjNhMDk3MzliYzU2NGE1NDIwMjRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUlucHV0IiwiUGVzZUxpbnB1dCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInZhbHVlIiwic2V0VmFsdWUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInZlcmlmeSIsInNldFZlcmlmeSIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJsZW5ndGgiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsIm5hbWUiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=