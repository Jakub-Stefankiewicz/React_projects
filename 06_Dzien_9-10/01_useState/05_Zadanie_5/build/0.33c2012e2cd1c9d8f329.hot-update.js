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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Numbers = function Numbers() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([54, 76, 24, 63, 4, 54, 82, 36, 13, 80, 10, 69, 4, 23, 40, 1, 3, 5]),
    _useState2 = _slicedToArray(_useState, 2),
    numbers = _useState2[0],
    setNumbers = _useState2[1];
  var showEven = function showEven() {
    setNumbers(function (numbers) {
      return numbers.filter(function (number) {
        return function (number) {
          return number % 2;
        };
      });
    });
  };
  var showAll = function showAll() {
    var arrToFilter = _toConsumableArray(numbers);
    setNumbers(function (prevState) {
      return numbers;
    });
  };
  var showOdd = function showOdd() {
    var arrToFilter = _toConsumableArray(numbers);
    setNumbers(arrToFilter.filter(function (number) {
      if (number % 2 !== 0) {
        return number;
      }
    }));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("list", null, numbers.map(function (number) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
      key: number
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
/******/ 	__webpack_require__.h = () => ("e9405609e6b7f033110f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zM2MyMDEyZTJjZDFjOWQ4ZjMyOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFFdEMsSUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUEsRUFBUztFQUNsQixJQUFBQyxTQUFBLEdBQThCRiwrQ0FBUSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUFBRyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUFwR0csT0FBTyxHQUFBRixVQUFBO0lBQUVHLFVBQVUsR0FBQUgsVUFBQTtFQUMxQixJQUFNSSxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFTO0lBQ25CRCxVQUFVLENBQUMsVUFBQUQsT0FBTztNQUFBLE9BQUlBLE9BQU8sQ0FBQ0csTUFBTSxDQUFDLFVBQUFDLE1BQU07UUFBQSxPQUFJLFVBQUFBLE1BQU07VUFBQSxPQUFJQSxNQUFNLEdBQUcsQ0FBQztRQUFBO01BQUEsRUFBQztJQUFBLEVBQUM7RUFDekUsQ0FBQztFQUNELElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFBLEVBQVM7SUFDbEIsSUFBTUMsV0FBVyxHQUFBQyxrQkFBQSxDQUFPUCxPQUFPLENBQUM7SUFDaENDLFVBQVUsQ0FBQyxVQUFBTyxTQUFTO01BQUEsT0FBSVIsT0FBTztJQUFBLEVBQUM7RUFDcEMsQ0FBQztFQUNELElBQU1TLE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFBLEVBQVM7SUFDbEIsSUFBTUgsV0FBVyxHQUFBQyxrQkFBQSxDQUFPUCxPQUFPLENBQUM7SUFDaENDLFVBQVUsQ0FBQ0ssV0FBVyxDQUFDSCxNQUFNLENBQUMsVUFBQUMsTUFBTSxFQUFJO01BQ3BDLElBQUlBLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2xCLE9BQU9BLE1BQU07TUFDakI7SUFDSixDQUFDLENBQUMsQ0FBQztFQUNQLENBQUM7RUFDRCxvQkFDSVYsMERBQUEsMkJBQ0lBLDBEQUFBLGVBQ0tNLE9BQU8sQ0FBQ1csR0FBRyxDQUFDLFVBQUFQLE1BQU0sRUFBSTtJQUNuQixvQkFBT1YsMERBQUE7TUFBSWtCLEdBQUcsRUFBRVI7SUFBTyxHQUFFQSxNQUFXLENBQUM7RUFDekMsQ0FBQyxDQUNDLENBQUMsZUFDUFYsMERBQUE7SUFBUW1CLE9BQU8sRUFBRVg7RUFBUyxHQUFDLFdBQWlCLENBQUMsZUFDN0NSLDBEQUFBO0lBQVFtQixPQUFPLEVBQUVSO0VBQVEsR0FBQyxVQUFnQixDQUFDLGVBQzNDWCwwREFBQTtJQUFRbUIsT0FBTyxFQUFFSjtFQUFRLEdBQUMsVUFBZ0IsQ0FDekMsQ0FBQztBQUVkLENBQUM7QUFFRCxpRUFBZWIsT0FBTzs7Ozs7Ozs7VUNqQ3RCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDZfRHppZW5fOS0xMC8wMV91c2VTdGF0ZS8wNV9aYWRhbmllXzUvanMvTnVtYmVycy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IE51bWJlcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgW251bWJlcnMsIHNldE51bWJlcnNdID0gdXNlU3RhdGUoWzU0LCA3NiwgMjQsIDYzLCA0LCA1NCwgODIsIDM2LCAxMywgODAsIDEwLCA2OSwgNCwgMjMsIDQwLCAxLCAzLCA1XSlcbiAgICBjb25zdCBzaG93RXZlbiA9ICgpID0+IHtcbiAgICAgICAgc2V0TnVtYmVycyhudW1iZXJzID0+IG51bWJlcnMuZmlsdGVyKG51bWJlciA9PiBudW1iZXIgPT4gbnVtYmVyICUgMikpXG4gICAgfVxuICAgIGNvbnN0IHNob3dBbGwgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFyclRvRmlsdGVyID0gWy4uLm51bWJlcnNdO1xuICAgICAgICBzZXROdW1iZXJzKHByZXZTdGF0ZSA9PiBudW1iZXJzKVxuICAgIH1cbiAgICBjb25zdCBzaG93T2RkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhcnJUb0ZpbHRlciA9IFsuLi5udW1iZXJzXTtcbiAgICAgICAgc2V0TnVtYmVycyhhcnJUb0ZpbHRlci5maWx0ZXIobnVtYmVyID0+IHtcbiAgICAgICAgICAgIGlmIChudW1iZXIgJSAyICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGlzdD5cbiAgICAgICAgICAgICAgICB7bnVtYmVycy5tYXAobnVtYmVyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx1bCBrZXk9e251bWJlcn0+e251bWJlcn08L3VsPlxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9saXN0PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaG93RXZlbn0+U2hvdyBldmVuPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dBbGx9PlNob3cgYWxsPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dPZGR9PlNob3cgb2RkPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJzOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImU5NDA1NjA5ZTZiN2YwMzMxMTBmXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJOdW1iZXJzIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwibnVtYmVycyIsInNldE51bWJlcnMiLCJzaG93RXZlbiIsImZpbHRlciIsIm51bWJlciIsInNob3dBbGwiLCJhcnJUb0ZpbHRlciIsIl90b0NvbnN1bWFibGVBcnJheSIsInByZXZTdGF0ZSIsInNob3dPZGQiLCJjcmVhdGVFbGVtZW50IiwibWFwIiwia2V5Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=