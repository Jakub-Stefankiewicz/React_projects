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
    var arr = _toConsumableArray(numbers);
    setNumbers(function (arr) {
      return arr.filter(function (number) {
        return number % 2;
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
    return setNumbers(function (numbers) {
      return numbers.filter(function (number) {
        return number % 2;
      });
    });
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
/******/ 	__webpack_require__.h = () => ("9e854bf2dfb41f215719")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xMzU0YTA2ZmVjY2ZlMWFhZDg4MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFFdEMsSUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUEsRUFBUztFQUNsQixJQUFBQyxTQUFBLEdBQThCRiwrQ0FBUSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUFBRyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUFwR0csT0FBTyxHQUFBRixVQUFBO0lBQUVHLFVBQVUsR0FBQUgsVUFBQTtFQUMxQixJQUFNSSxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFVO0lBQ3BCLElBQU1DLEdBQUcsR0FBQUMsa0JBQUEsQ0FBS0osT0FBTyxDQUFDO0lBQ3RCQyxVQUFVLENBQUMsVUFBQUUsR0FBRztNQUFBLE9BQUlBLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLFVBQUFDLE1BQU07UUFBQSxPQUFJQSxNQUFNLEdBQUcsQ0FBQztNQUFBLEVBQUM7SUFBQSxFQUFDO0VBQ3ZELENBQUM7RUFDRCxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQSxFQUFTO0lBQ2xCLElBQU1DLFdBQVcsR0FBQUosa0JBQUEsQ0FBT0osT0FBTyxDQUFDO0lBQ2hDQyxVQUFVLENBQUMsVUFBQVEsU0FBUztNQUFBLE9BQUlULE9BQU87SUFBQSxFQUFDO0VBQ3BDLENBQUM7RUFDRCxJQUFNVSxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQTtJQUFBLE9BQVNULFVBQVUsQ0FBQyxVQUFBRCxPQUFPO01BQUEsT0FBRUEsT0FBTyxDQUFDSyxNQUFNLENBQUMsVUFBQUMsTUFBTTtRQUFBLE9BQUlBLE1BQU0sR0FBRyxDQUFDO01BQUEsRUFBQztJQUFBLEVBQUM7RUFBQTtFQUMvRSxvQkFDSVosMERBQUEsMkJBQ0lBLDBEQUFBLGVBQ0tNLE9BQU8sQ0FBQ1ksR0FBRyxDQUFDLFVBQUFOLE1BQU0sRUFBSTtJQUNuQixvQkFBT1osMERBQUE7TUFBSW1CLEdBQUcsRUFBRVA7SUFBTyxHQUFFQSxNQUFXLENBQUM7RUFDekMsQ0FBQyxDQUNDLENBQUMsZUFDUFosMERBQUE7SUFBUW9CLE9BQU8sRUFBRVo7RUFBUyxHQUFDLFdBQWlCLENBQUMsZUFDN0NSLDBEQUFBO0lBQVFvQixPQUFPLEVBQUVQO0VBQVEsR0FBQyxVQUFnQixDQUFDLGVBQzNDYiwwREFBQTtJQUFRb0IsT0FBTyxFQUFFSjtFQUFRLEdBQUMsVUFBZ0IsQ0FDekMsQ0FBQztBQUVkLENBQUM7QUFFRCxpRUFBZWQsT0FBTzs7Ozs7Ozs7VUMzQnRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDZfRHppZW5fOS0xMC8wMV91c2VTdGF0ZS8wNV9aYWRhbmllXzUvanMvTnVtYmVycy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IE51bWJlcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgW251bWJlcnMsIHNldE51bWJlcnNdID0gdXNlU3RhdGUoWzU0LCA3NiwgMjQsIDYzLCA0LCA1NCwgODIsIDM2LCAxMywgODAsIDEwLCA2OSwgNCwgMjMsIDQwLCAxLCAzLCA1XSk7XG4gICAgY29uc3Qgc2hvd0V2ZW4gPSAoKSA9PiAge1xuICAgICAgICBjb25zdCBhcnI9Wy4uLm51bWJlcnNdO1xuICAgICAgICBzZXROdW1iZXJzKGFyciA9PiBhcnIuZmlsdGVyKG51bWJlciA9PiBudW1iZXIgJSAyKSk7XG4gICAgfVxuICAgIGNvbnN0IHNob3dBbGwgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFyclRvRmlsdGVyID0gWy4uLm51bWJlcnNdO1xuICAgICAgICBzZXROdW1iZXJzKHByZXZTdGF0ZSA9PiBudW1iZXJzKVxuICAgIH1cbiAgICBjb25zdCBzaG93T2RkID0gKCkgPT4gc2V0TnVtYmVycyhudW1iZXJzPT5udW1iZXJzLmZpbHRlcihudW1iZXIgPT4gbnVtYmVyICUgMikpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsaXN0PlxuICAgICAgICAgICAgICAgIHtudW1iZXJzLm1hcChudW1iZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHVsIGtleT17bnVtYmVyfT57bnVtYmVyfTwvdWw+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2xpc3Q+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dFdmVufT5TaG93IGV2ZW48L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2hvd0FsbH0+U2hvdyBhbGw8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2hvd09kZH0+U2hvdyBvZGQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlcnM7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOWU4NTRiZjJkZmI0MWYyMTU3MTlcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk51bWJlcnMiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJudW1iZXJzIiwic2V0TnVtYmVycyIsInNob3dFdmVuIiwiYXJyIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiZmlsdGVyIiwibnVtYmVyIiwic2hvd0FsbCIsImFyclRvRmlsdGVyIiwicHJldlN0YXRlIiwic2hvd09kZCIsImNyZWF0ZUVsZW1lbnQiLCJtYXAiLCJrZXkiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==