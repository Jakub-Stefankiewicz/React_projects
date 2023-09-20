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
    setNumbers(function (prevState) {
      return initialNumbers;
    });
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
/******/ 	__webpack_require__.h = () => ("d7a43c0fa16a5095193c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41NDQ5MmQ4YTQ3MTNhMDViZmE0YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxJQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQSxFQUFTO0VBQ2xCLElBQU1DLGNBQWMsR0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ3hGLElBQUFDLFNBQUEsR0FBOEJILCtDQUFRLENBQUNFLGNBQWMsQ0FBQztJQUFBRSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUEvQ0csT0FBTyxHQUFBRixVQUFBO0lBQUVHLFVBQVUsR0FBQUgsVUFBQTtFQUMxQixJQUFNSSxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFVO0lBQ3BCRCxVQUFVLENBQUNELE9BQU8sQ0FBQ0csTUFBTSxDQUFDLFVBQUFDLE1BQU07TUFBQSxPQUFJQSxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFBQSxFQUFDLENBQUM7RUFDMUQsQ0FBQztFQUNELElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFBLEVBQVM7SUFDbEJKLFVBQVUsQ0FBQyxVQUFBSyxTQUFTO01BQUEsT0FBSVYsY0FBYztJQUFBLEVBQUM7RUFDM0MsQ0FBQztFQUNELElBQU1XLE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFBO0lBQUEsT0FBU04sVUFBVSxDQUFDRCxPQUFPLENBQUNHLE1BQU0sQ0FBQyxVQUFBQyxNQUFNO01BQUEsT0FBSUEsTUFBTSxHQUFHLENBQUMsS0FBSSxDQUFDO0lBQUEsRUFBQyxDQUFDO0VBQUE7RUFDM0Usb0JBQ0lYLDBEQUFBLDJCQUNJQSwwREFBQSxlQUNLTyxPQUFPLENBQUNTLEdBQUcsQ0FBQyxVQUFDTCxNQUFNLEVBQUVNLEtBQUssRUFBSztJQUM1QixvQkFBT2pCLDBEQUFBO01BQUlrQixHQUFHLEVBQUVEO0lBQU0sR0FBRU4sTUFBVyxDQUFDO0VBQ3hDLENBQUMsQ0FDQyxDQUFDLGVBQ1BYLDBEQUFBO0lBQVFtQixPQUFPLEVBQUVWO0VBQVMsR0FBQyxXQUFpQixDQUFDLGVBQzdDVCwwREFBQTtJQUFRbUIsT0FBTyxFQUFFUDtFQUFRLEdBQUMsVUFBZ0IsQ0FBQyxlQUMzQ1osMERBQUE7SUFBUW1CLE9BQU8sRUFBRUw7RUFBUSxHQUFDLFVBQWdCLENBQ3pDLENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWVaLE9BQU87Ozs7Ozs7O1VDMUJ0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA2X0R6aWVuXzktMTAvMDFfdXNlU3RhdGUvMDVfWmFkYW5pZV81L2pzL051bWJlcnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBOdW1iZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IGluaXRpYWxOdW1iZXJzPVs1NCwgNzYsIDI0LCA2MywgNCwgNTQsIDgyLCAzNiwgMTMsIDgwLCAxMCwgNjksIDQsIDIzLCA0MCwgMSwgMywgNV1cbiAgICBjb25zdCBbbnVtYmVycywgc2V0TnVtYmVyc10gPSB1c2VTdGF0ZShpbml0aWFsTnVtYmVycyk7XG4gICAgY29uc3Qgc2hvd0V2ZW4gPSAoKSA9PiAge1xuICAgICAgICBzZXROdW1iZXJzKG51bWJlcnMuZmlsdGVyKG51bWJlciA9PiBudW1iZXIgJSAyID09PSAwKSk7XG4gICAgfVxuICAgIGNvbnN0IHNob3dBbGwgPSAoKSA9PiB7XG4gICAgICAgIHNldE51bWJlcnMocHJldlN0YXRlID0+IGluaXRpYWxOdW1iZXJzKVxuICAgIH1cbiAgICBjb25zdCBzaG93T2RkID0gKCkgPT4gc2V0TnVtYmVycyhudW1iZXJzLmZpbHRlcihudW1iZXIgPT4gbnVtYmVyICUgMiAhPT0wKSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxpc3Q+XG4gICAgICAgICAgICAgICAge251bWJlcnMubWFwKChudW1iZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8dWwga2V5PXtpbmRleH0+e251bWJlcn08L3VsPlxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9saXN0PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaG93RXZlbn0+U2hvdyBldmVuPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dBbGx9PlNob3cgYWxsPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dPZGR9PlNob3cgb2RkPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJzOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQ3YTQzYzBmYTE2YTUwOTUxOTNjXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJOdW1iZXJzIiwiaW5pdGlhbE51bWJlcnMiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJudW1iZXJzIiwic2V0TnVtYmVycyIsInNob3dFdmVuIiwiZmlsdGVyIiwibnVtYmVyIiwic2hvd0FsbCIsInByZXZTdGF0ZSIsInNob3dPZGQiLCJjcmVhdGVFbGVtZW50IiwibWFwIiwiaW5kZXgiLCJrZXkiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==