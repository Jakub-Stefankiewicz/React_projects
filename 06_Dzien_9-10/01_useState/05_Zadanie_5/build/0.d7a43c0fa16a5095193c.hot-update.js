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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Numbers = function Numbers() {
  var initialNumbers = [54, 76, 24, 63, 4, 54, 82, 36, 13, 80, 10, 69, 4, 23, 40, 1, 3, 5];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialNumbers),
    _useState2 = _slicedToArray(_useState, 2),
    numbers = _useState2[0],
    setNumbers = _useState2[1];
  var showEven = function showEven() {
    setNumbers(numbers.filter(function (number) {
      return number % 2 === 0;
    }));
  };
  var showAll = function showAll() {
    setNumbers(initialNumbers);
  };
  var showOdd = function showOdd() {
    return setNumbers(numbers.filter(function (number) {
      return number % 2 !== 0;
    }));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("list", null, numbers.map(function (number, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
      key: index
    }, number);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: showEven
  }, "Show even"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: showAll
  }, "Show all"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: showOdd
  }, "Show odd"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Numbers);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("876a8fdcc62369607bf1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kN2E0M2MwZmExNmE1MDk1MTkzYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxJQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQSxFQUFTO0VBQ2xCLElBQU1DLGNBQWMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQzFGLElBQUFDLFNBQUEsR0FBOEJILCtDQUFRLENBQUNFLGNBQWMsQ0FBQztJQUFBRSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUEvQ0csT0FBTyxHQUFBRixVQUFBO0lBQUVHLFVBQVUsR0FBQUgsVUFBQTtFQUMxQixJQUFNSSxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFTO0lBQ25CRCxVQUFVLENBQUNELE9BQU8sQ0FBQ0csTUFBTSxDQUFDLFVBQUFDLE1BQU07TUFBQSxPQUFJQSxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFBQSxFQUFDLENBQUM7RUFDMUQsQ0FBQztFQUNELElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFBLEVBQVM7SUFDbEJKLFVBQVUsQ0FBQ0wsY0FBYyxDQUFDO0VBQzlCLENBQUM7RUFDRCxJQUFNVSxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQTtJQUFBLE9BQVNMLFVBQVUsQ0FBQ0QsT0FBTyxDQUFDRyxNQUFNLENBQUMsVUFBQUMsTUFBTTtNQUFBLE9BQUlBLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQztJQUFBLEVBQUMsQ0FBQztFQUFBO0VBQzVFLG9CQUNJWCwwREFBQSwyQkFDSUEsMERBQUEsZUFDS08sT0FBTyxDQUFDUSxHQUFHLENBQUMsVUFBQ0osTUFBTSxFQUFFSyxLQUFLLEVBQUs7SUFDNUIsb0JBQU9oQiwwREFBQTtNQUFJaUIsR0FBRyxFQUFFRDtJQUFNLEdBQUVMLE1BQVcsQ0FBQztFQUN4QyxDQUFDLENBQ0MsQ0FBQyxlQUNQWCwwREFBQTtJQUFRa0IsT0FBTyxFQUFFVDtFQUFTLEdBQUMsV0FBaUIsQ0FBQyxlQUM3Q1QsMERBQUE7SUFBUWtCLE9BQU8sRUFBRU47RUFBUSxHQUFDLFVBQWdCLENBQUMsZUFDM0NaLDBEQUFBO0lBQVFrQixPQUFPLEVBQUVMO0VBQVEsR0FBQyxVQUFnQixDQUN6QyxDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlWCxPQUFPOzs7Ozs7OztVQzFCdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNl9Eemllbl85LTEwLzAxX3VzZVN0YXRlLzA1X1phZGFuaWVfNS9qcy9OdW1iZXJzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgTnVtYmVycyA9ICgpID0+IHtcbiAgICBjb25zdCBpbml0aWFsTnVtYmVycyA9IFs1NCwgNzYsIDI0LCA2MywgNCwgNTQsIDgyLCAzNiwgMTMsIDgwLCAxMCwgNjksIDQsIDIzLCA0MCwgMSwgMywgNV1cbiAgICBjb25zdCBbbnVtYmVycywgc2V0TnVtYmVyc10gPSB1c2VTdGF0ZShpbml0aWFsTnVtYmVycyk7XG4gICAgY29uc3Qgc2hvd0V2ZW4gPSAoKSA9PiB7XG4gICAgICAgIHNldE51bWJlcnMobnVtYmVycy5maWx0ZXIobnVtYmVyID0+IG51bWJlciAlIDIgPT09IDApKTtcbiAgICB9XG4gICAgY29uc3Qgc2hvd0FsbCA9ICgpID0+IHtcbiAgICAgICAgc2V0TnVtYmVycyhpbml0aWFsTnVtYmVycylcbiAgICB9XG4gICAgY29uc3Qgc2hvd09kZCA9ICgpID0+IHNldE51bWJlcnMobnVtYmVycy5maWx0ZXIobnVtYmVyID0+IG51bWJlciAlIDIgIT09IDApKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGlzdD5cbiAgICAgICAgICAgICAgICB7bnVtYmVycy5tYXAoKG51bWJlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx1bCBrZXk9e2luZGV4fT57bnVtYmVyfTwvdWw+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2xpc3Q+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dFdmVufT5TaG93IGV2ZW48L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2hvd0FsbH0+U2hvdyBhbGw8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2hvd09kZH0+U2hvdyBvZGQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlcnM7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiODc2YThmZGNjNjIzNjk2MDdiZjFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk51bWJlcnMiLCJpbml0aWFsTnVtYmVycyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIm51bWJlcnMiLCJzZXROdW1iZXJzIiwic2hvd0V2ZW4iLCJmaWx0ZXIiLCJudW1iZXIiLCJzaG93QWxsIiwic2hvd09kZCIsImNyZWF0ZUVsZW1lbnQiLCJtYXAiLCJpbmRleCIsImtleSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9