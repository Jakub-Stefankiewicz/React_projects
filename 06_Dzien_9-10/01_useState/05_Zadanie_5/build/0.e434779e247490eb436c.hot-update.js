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
    var arrToFilter = _toConsumableArray(numbers);
    setNumbers(arrToFilter.filter(function (number) {
      if (number % 2 === 0) {
        return number;
      }
    }));
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
      key: numbers.indexOf(number)
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
/******/ 	__webpack_require__.h = () => ("3c17ccf168519379e7a6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lNDM0Nzc5ZTI0NzQ5MGViNDM2Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFFdEMsSUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUEsRUFBUztFQUNsQixJQUFBQyxTQUFBLEdBQThCRiwrQ0FBUSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUFBRyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUFwR0csT0FBTyxHQUFBRixVQUFBO0lBQUVHLFVBQVUsR0FBQUgsVUFBQTtFQUMxQixJQUFNSSxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFTO0lBQ25CLElBQU1DLFdBQVcsR0FBQUMsa0JBQUEsQ0FBS0osT0FBTyxDQUFDO0lBQzlCQyxVQUFVLENBQUNFLFdBQVcsQ0FBQ0UsTUFBTSxDQUFDLFVBQUFDLE1BQU0sRUFBSTtNQUNwQyxJQUFJQSxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNsQixPQUFPQSxNQUFNO01BQ2pCO0lBQ0osQ0FBQyxDQUFDLENBQUM7RUFDUCxDQUFDO0VBQ0QsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUEsRUFBUztJQUNsQixJQUFNSixXQUFXLEdBQUFDLGtCQUFBLENBQUtKLE9BQU8sQ0FBQztJQUM5QkMsVUFBVSxDQUFDLFVBQUFPLFNBQVM7TUFBQSxPQUFJUixPQUFPO0lBQUEsRUFBQztFQUNwQyxDQUFDO0VBQ0QsSUFBTVMsT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUEsRUFBUztJQUNsQixJQUFNTixXQUFXLEdBQUFDLGtCQUFBLENBQUtKLE9BQU8sQ0FBQztJQUM5QkMsVUFBVSxDQUFDRSxXQUFXLENBQUNFLE1BQU0sQ0FBQyxVQUFBQyxNQUFNLEVBQUk7TUFDcEMsSUFBSUEsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDbEIsT0FBT0EsTUFBTTtNQUNqQjtJQUNKLENBQUMsQ0FBQyxDQUFDO0VBQ1AsQ0FBQztFQUNELG9CQUNJWiwwREFBQSwyQkFDSUEsMERBQUEsZUFDS00sT0FBTyxDQUFDVyxHQUFHLENBQUMsVUFBQUwsTUFBTSxFQUFJO0lBQ25CLG9CQUFPWiwwREFBQTtNQUFJa0IsR0FBRyxFQUFFWixPQUFPLENBQUNhLE9BQU8sQ0FBQ1AsTUFBTTtJQUFFLEdBQUVBLE1BQVcsQ0FBQztFQUMxRCxDQUFDLENBQ0MsQ0FBQyxlQUNQWiwwREFBQTtJQUFRb0IsT0FBTyxFQUFFWjtFQUFTLEdBQUMsV0FBaUIsQ0FBQyxlQUM3Q1IsMERBQUE7SUFBUW9CLE9BQU8sRUFBRVA7RUFBUSxHQUFDLFVBQWdCLENBQUMsZUFDM0NiLDBEQUFBO0lBQVFvQixPQUFPLEVBQUVMO0VBQVEsR0FBQyxVQUFnQixDQUN6QyxDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlYixPQUFPOzs7Ozs7OztVQ3RDdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNl9Eemllbl85LTEwLzAxX3VzZVN0YXRlLzA1X1phZGFuaWVfNS9qcy9OdW1iZXJzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgTnVtYmVycyA9ICgpID0+IHtcbiAgICBjb25zdCBbbnVtYmVycywgc2V0TnVtYmVyc10gPSB1c2VTdGF0ZShbNTQsIDc2LCAyNCwgNjMsIDQsIDU0LCA4MiwgMzYsIDEzLCA4MCwgMTAsIDY5LCA0LCAyMywgNDAsIDEsIDMsIDVdKVxuICAgIGNvbnN0IHNob3dFdmVuID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhcnJUb0ZpbHRlcj1bLi4ubnVtYmVyc107XG4gICAgICAgIHNldE51bWJlcnMoYXJyVG9GaWx0ZXIuZmlsdGVyKG51bWJlciA9PiB7XG4gICAgICAgICAgICBpZiAobnVtYmVyICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudW1iZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKVxuICAgIH1cbiAgICBjb25zdCBzaG93QWxsID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhcnJUb0ZpbHRlcj1bLi4ubnVtYmVyc107XG4gICAgICAgIHNldE51bWJlcnMocHJldlN0YXRlID0+IG51bWJlcnMpXG4gICAgfVxuICAgIGNvbnN0IHNob3dPZGQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFyclRvRmlsdGVyPVsuLi5udW1iZXJzXTtcbiAgICAgICAgc2V0TnVtYmVycyhhcnJUb0ZpbHRlci5maWx0ZXIobnVtYmVyID0+IHtcbiAgICAgICAgICAgIGlmIChudW1iZXIgJSAyICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGlzdD5cbiAgICAgICAgICAgICAgICB7bnVtYmVycy5tYXAobnVtYmVyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx1bCBrZXk9e251bWJlcnMuaW5kZXhPZihudW1iZXIpfT57bnVtYmVyfTwvdWw+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2xpc3Q+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dFdmVufT5TaG93IGV2ZW48L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2hvd0FsbH0+U2hvdyBhbGw8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2hvd09kZH0+U2hvdyBvZGQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlcnM7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiM2MxN2NjZjE2ODUxOTM3OWU3YTZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk51bWJlcnMiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJudW1iZXJzIiwic2V0TnVtYmVycyIsInNob3dFdmVuIiwiYXJyVG9GaWx0ZXIiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJmaWx0ZXIiLCJudW1iZXIiLCJzaG93QWxsIiwicHJldlN0YXRlIiwic2hvd09kZCIsImNyZWF0ZUVsZW1lbnQiLCJtYXAiLCJrZXkiLCJpbmRleE9mIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=