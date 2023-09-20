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
        if (number % 2 === 0) {
          return number;
        }
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
/******/ 	__webpack_require__.h = () => ("33c2012e2cd1c9d8f329")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jYzViMjlmZTFhMWMzODM3ZjQwMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFFdEMsSUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUEsRUFBUztFQUNsQixJQUFBQyxTQUFBLEdBQThCRiwrQ0FBUSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUFBRyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUFwR0csT0FBTyxHQUFBRixVQUFBO0lBQUVHLFVBQVUsR0FBQUgsVUFBQTtFQUMxQixJQUFNSSxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFTO0lBQ25CRCxVQUFVLENBQUMsVUFBQUQsT0FBTztNQUFBLE9BQUlBLE9BQU8sQ0FBQ0csTUFBTSxDQUFDLFVBQUFDLE1BQU0sRUFBSTtRQUMzQyxJQUFJQSxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtVQUNsQixPQUFPQSxNQUFNO1FBQ2pCO01BQ0osQ0FBQyxDQUFDO0lBQUEsRUFBQztFQUNQLENBQUM7RUFDRCxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQSxFQUFTO0lBQ2xCLElBQU1DLFdBQVcsR0FBQUMsa0JBQUEsQ0FBS1AsT0FBTyxDQUFDO0lBQzlCQyxVQUFVLENBQUMsVUFBQU8sU0FBUztNQUFBLE9BQUlSLE9BQU87SUFBQSxFQUFDO0VBQ3BDLENBQUM7RUFDRCxJQUFNUyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQSxFQUFTO0lBQ2xCLElBQU1ILFdBQVcsR0FBQUMsa0JBQUEsQ0FBS1AsT0FBTyxDQUFDO0lBQzlCQyxVQUFVLENBQUNLLFdBQVcsQ0FBQ0gsTUFBTSxDQUFDLFVBQUFDLE1BQU0sRUFBSTtNQUNwQyxJQUFJQSxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNsQixPQUFPQSxNQUFNO01BQ2pCO0lBQ0osQ0FBQyxDQUFDLENBQUM7RUFDUCxDQUFDO0VBQ0Qsb0JBQ0lWLDBEQUFBLDJCQUNJQSwwREFBQSxlQUNLTSxPQUFPLENBQUNXLEdBQUcsQ0FBQyxVQUFBUCxNQUFNLEVBQUk7SUFDbkIsb0JBQU9WLDBEQUFBO01BQUlrQixHQUFHLEVBQUVSO0lBQU8sR0FBRUEsTUFBVyxDQUFDO0VBQ3pDLENBQUMsQ0FDQyxDQUFDLGVBQ1BWLDBEQUFBO0lBQVFtQixPQUFPLEVBQUVYO0VBQVMsR0FBQyxXQUFpQixDQUFDLGVBQzdDUiwwREFBQTtJQUFRbUIsT0FBTyxFQUFFUjtFQUFRLEdBQUMsVUFBZ0IsQ0FBQyxlQUMzQ1gsMERBQUE7SUFBUW1CLE9BQU8sRUFBRUo7RUFBUSxHQUFDLFVBQWdCLENBQ3pDLENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWViLE9BQU87Ozs7Ozs7O1VDckN0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA2X0R6aWVuXzktMTAvMDFfdXNlU3RhdGUvMDVfWmFkYW5pZV81L2pzL051bWJlcnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBOdW1iZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IFtudW1iZXJzLCBzZXROdW1iZXJzXSA9IHVzZVN0YXRlKFs1NCwgNzYsIDI0LCA2MywgNCwgNTQsIDgyLCAzNiwgMTMsIDgwLCAxMCwgNjksIDQsIDIzLCA0MCwgMSwgMywgNV0pXG4gICAgY29uc3Qgc2hvd0V2ZW4gPSAoKSA9PiB7XG4gICAgICAgIHNldE51bWJlcnMobnVtYmVycyA9PiBudW1iZXJzLmZpbHRlcihudW1iZXIgPT4ge1xuICAgICAgICAgICAgaWYgKG51bWJlciAlIDIgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtYmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSlcbiAgICB9XG4gICAgY29uc3Qgc2hvd0FsbCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYXJyVG9GaWx0ZXI9Wy4uLm51bWJlcnNdO1xuICAgICAgICBzZXROdW1iZXJzKHByZXZTdGF0ZSA9PiBudW1iZXJzKVxuICAgIH1cbiAgICBjb25zdCBzaG93T2RkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhcnJUb0ZpbHRlcj1bLi4ubnVtYmVyc107XG4gICAgICAgIHNldE51bWJlcnMoYXJyVG9GaWx0ZXIuZmlsdGVyKG51bWJlciA9PiB7XG4gICAgICAgICAgICBpZiAobnVtYmVyICUgMiAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudW1iZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxpc3Q+XG4gICAgICAgICAgICAgICAge251bWJlcnMubWFwKG51bWJlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8dWwga2V5PXtudW1iZXJ9PntudW1iZXJ9PC91bD5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvbGlzdD5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2hvd0V2ZW59PlNob3cgZXZlbjwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaG93QWxsfT5TaG93IGFsbDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaG93T2RkfT5TaG93IG9kZDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyczsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzM2MyMDEyZTJjZDFjOWQ4ZjMyOVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTnVtYmVycyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIm51bWJlcnMiLCJzZXROdW1iZXJzIiwic2hvd0V2ZW4iLCJmaWx0ZXIiLCJudW1iZXIiLCJzaG93QWxsIiwiYXJyVG9GaWx0ZXIiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJwcmV2U3RhdGUiLCJzaG93T2RkIiwiY3JlYXRlRWxlbWVudCIsIm1hcCIsImtleSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9