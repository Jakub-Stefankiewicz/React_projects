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
    setNumbers(function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0;
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
        return number % 2 !== 0;
      });
    });
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
/******/ 	__webpack_require__.h = () => ("e46369ef80cf9b9ba252")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lOWJjN2ZjMGZjNzQ1YTE0YzYwZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFFdEMsSUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUEsRUFBUztFQUVsQixJQUFBQyxTQUFBLEdBQThCRiwrQ0FBUSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUFBRyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUFwR0csT0FBTyxHQUFBRixVQUFBO0lBQUVHLFVBQVUsR0FBQUgsVUFBQTtFQUMxQixJQUFNSSxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFVO0lBQ3BCLElBQU1DLEdBQUcsR0FBQUMsa0JBQUEsQ0FBS0osT0FBTyxDQUFDO0lBQ3RCQyxVQUFVLENBQUMsVUFBQUQsT0FBTztNQUFBLE9BQUlBLE9BQU8sQ0FBQ0ssTUFBTSxDQUFDLFVBQUFDLE1BQU07UUFBQSxPQUFJQSxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUM7TUFBQSxFQUFDO0lBQUEsRUFBQztFQUNyRSxDQUFDO0VBQ0QsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUEsRUFBUztJQUNsQixJQUFNQyxXQUFXLEdBQUFKLGtCQUFBLENBQU9KLE9BQU8sQ0FBQztJQUNoQ0MsVUFBVSxDQUFDLFVBQUFRLFNBQVM7TUFBQSxPQUFJVCxPQUFPO0lBQUEsRUFBQztFQUNwQyxDQUFDO0VBQ0QsSUFBTVUsT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUE7SUFBQSxPQUFTVCxVQUFVLENBQUMsVUFBQUQsT0FBTztNQUFBLE9BQUVBLE9BQU8sQ0FBQ0ssTUFBTSxDQUFDLFVBQUFDLE1BQU07UUFBQSxPQUFJQSxNQUFNLEdBQUcsQ0FBQyxLQUFJLENBQUM7TUFBQSxFQUFDO0lBQUEsRUFBQztFQUFBO0VBQ3BGLG9CQUNJWiwwREFBQSwyQkFDSUEsMERBQUEsZUFDS00sT0FBTyxDQUFDWSxHQUFHLENBQUMsVUFBQ04sTUFBTSxFQUFFTyxLQUFLLEVBQUs7SUFDNUIsb0JBQU9uQiwwREFBQTtNQUFJb0IsR0FBRyxFQUFFRDtJQUFNLEdBQUVQLE1BQVcsQ0FBQztFQUN4QyxDQUFDLENBQ0MsQ0FBQyxlQUNQWiwwREFBQTtJQUFRcUIsT0FBTyxFQUFFYjtFQUFTLEdBQUMsV0FBaUIsQ0FBQyxlQUM3Q1IsMERBQUE7SUFBUXFCLE9BQU8sRUFBRVI7RUFBUSxHQUFDLFVBQWdCLENBQUMsZUFDM0NiLDBEQUFBO0lBQVFxQixPQUFPLEVBQUVMO0VBQVEsR0FBQyxVQUFnQixDQUN6QyxDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlZCxPQUFPOzs7Ozs7OztVQzVCdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNl9Eemllbl85LTEwLzAxX3VzZVN0YXRlLzA1X1phZGFuaWVfNS9qcy9OdW1iZXJzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgTnVtYmVycyA9ICgpID0+IHtcblxuICAgIGNvbnN0IFtudW1iZXJzLCBzZXROdW1iZXJzXSA9IHVzZVN0YXRlKFs1NCwgNzYsIDI0LCA2MywgNCwgNTQsIDgyLCAzNiwgMTMsIDgwLCAxMCwgNjksIDQsIDIzLCA0MCwgMSwgMywgNV0pO1xuICAgIGNvbnN0IHNob3dFdmVuID0gKCkgPT4gIHtcbiAgICAgICAgY29uc3QgYXJyPVsuLi5udW1iZXJzXTtcbiAgICAgICAgc2V0TnVtYmVycyhudW1iZXJzID0+IG51bWJlcnMuZmlsdGVyKG51bWJlciA9PiBudW1iZXIgJSAyID09PSAwKSk7XG4gICAgfVxuICAgIGNvbnN0IHNob3dBbGwgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFyclRvRmlsdGVyID0gWy4uLm51bWJlcnNdO1xuICAgICAgICBzZXROdW1iZXJzKHByZXZTdGF0ZSA9PiBudW1iZXJzKVxuICAgIH1cbiAgICBjb25zdCBzaG93T2RkID0gKCkgPT4gc2V0TnVtYmVycyhudW1iZXJzPT5udW1iZXJzLmZpbHRlcihudW1iZXIgPT4gbnVtYmVyICUgMiAhPT0wKSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxpc3Q+XG4gICAgICAgICAgICAgICAge251bWJlcnMubWFwKChudW1iZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8dWwga2V5PXtpbmRleH0+e251bWJlcn08L3VsPlxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9saXN0PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaG93RXZlbn0+U2hvdyBldmVuPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dBbGx9PlNob3cgYWxsPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dPZGR9PlNob3cgb2RkPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJzOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImU0NjM2OWVmODBjZjliOWJhMjUyXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJOdW1iZXJzIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwibnVtYmVycyIsInNldE51bWJlcnMiLCJzaG93RXZlbiIsImFyciIsIl90b0NvbnN1bWFibGVBcnJheSIsImZpbHRlciIsIm51bWJlciIsInNob3dBbGwiLCJhcnJUb0ZpbHRlciIsInByZXZTdGF0ZSIsInNob3dPZGQiLCJjcmVhdGVFbGVtZW50IiwibWFwIiwiaW5kZXgiLCJrZXkiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==