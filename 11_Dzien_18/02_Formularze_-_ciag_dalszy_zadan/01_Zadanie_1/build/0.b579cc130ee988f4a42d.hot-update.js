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
    if (e.target.value.length > 10 && !isNaN(parseInt(e.target.value))) {
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
/******/ 	__webpack_require__.h = () => ("2322009a28ac90265b97")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iNTc5Y2MxMzBlZTk4OGY0YTQyZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDeUM7QUFFL0UsSUFBTUcsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUEsRUFBUztFQUNyQixJQUFBQyxTQUFBLEdBQXVCSCwrQ0FBUSxDQUFDLEdBQUcsQ0FBQztJQUFBSSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUE5QkcsS0FBSyxHQUFBRixVQUFBO0lBQUVHLFFBQVEsR0FBQUgsVUFBQTtFQUNyQixJQUFBSSxVQUFBLEdBQXlCUiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBUyxVQUFBLEdBQUFKLGNBQUEsQ0FBQUcsVUFBQTtJQUFsQ0UsTUFBTSxHQUFBRCxVQUFBO0lBQUVFLFNBQVMsR0FBQUYsVUFBQTtFQUV2QixJQUFNRyxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSUMsQ0FBQyxFQUFLO0lBQ3hCLElBQUlBLENBQUMsQ0FBQ0MsTUFBTSxDQUFDUixLQUFLLENBQUNTLE1BQU0sR0FBQyxFQUFFLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxRQUFRLENBQUNKLENBQUMsQ0FBQ0MsTUFBTSxDQUFDUixLQUFLLENBQUMsQ0FBQyxFQUFDO01BQzdESyxTQUFTLENBQUMsSUFBSSxDQUFDO0lBQ25CO0lBQ0FKLFFBQVEsQ0FBQ00sQ0FBQyxDQUFDQyxNQUFNLENBQUNSLEtBQUssQ0FBQztFQUM1QixDQUFDO0VBRUQsb0JBQ0lQLDBEQUFBLDJCQUNJQSwwREFBQSw0QkFDQUEsMERBQUE7SUFBT29CLElBQUksRUFBQyxNQUFNO0lBQUNDLElBQUksRUFBQyxPQUFPO0lBQUNkLEtBQUssRUFBRUEsS0FBTTtJQUFDZSxRQUFRLEVBQUUsU0FBQUEsU0FBQVIsQ0FBQztNQUFBLE9BQUVELFlBQVksQ0FBQ0MsQ0FBQyxDQUFDO0lBQUE7RUFBQyxDQUFDLENBQUMsZUFDN0VkLDBEQUFBLGNBQU1XLE1BQU0sZ0JBQUdYLDBEQUFBO0lBQU9vQixJQUFJLEVBQUMsUUFBUTtJQUFDYixLQUFLLEVBQUU7RUFBVSxDQUFDLENBQUMsR0FBRyxtQkFBeUIsQ0FDN0UsQ0FDTCxDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlSixVQUFVOzs7Ozs7OztVQ3hCekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC8wMl9Gb3JtdWxhcnplXy1fY2lhZ19kYWxzenlfemFkYW4vMDFfWmFkYW5pZV8xL2pzL1BFU0VMaW5wdXQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi8uLi8uLi8wMV9DdXN0b21fSG9va3MvMDFfWmFkYW5pZV8xL2pzL2hvb2tzL3VzZUlucHV0XCI7XG5cbmNvbnN0IFBlc2VMaW5wdXQgPSAoKSA9PiB7XG4gICAgY29uc3RbdmFsdWUsIHNldFZhbHVlXT11c2VTdGF0ZShcIiBcIik7XG4gICAgY29uc3RbdmVyaWZ5LCBzZXRWZXJpZnldPXVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZS5sZW5ndGg+MTAgJiYgIWlzTmFOKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSkpe1xuICAgICAgICAgICAgc2V0VmVyaWZ5KHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidmFsdWVcIiB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXtlPT5oYW5kbGVDaGFuZ2UoZSl9Lz5cbiAgICAgICAgICAgIDxkaXY+e3ZlcmlmeSA/IDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWUgPVwicHJ6ZcWbbGlqXCIvPiA6IFwiTmllcG9wcmF3bnkgcGVzZWxcIn08L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBlc2VMaW5wdXQ7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMjMyMjAwOWEyOGFjOTAyNjViOTdcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUlucHV0IiwiUGVzZUxpbnB1dCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInZhbHVlIiwic2V0VmFsdWUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInZlcmlmeSIsInNldFZlcmlmeSIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJsZW5ndGgiLCJpc05hTiIsInBhcnNlSW50IiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJuYW1lIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9