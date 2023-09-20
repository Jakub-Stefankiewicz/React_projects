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
/* harmony import */ var _ShopItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
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


var Shop = function Shop() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    cart = _useState2[0],
    addToCart = _useState2[1];
  var clickHandler = function clickHandler(item) {
    addToCart(function (prevState) {
      return [].concat(_toConsumableArray(prevState), [item]);
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ShopItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "MacBook Pro",
    onBuy: clickHandler
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ShopItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Dell X5500",
    onBuy: clickHandler
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ShopItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Asus NT6000",
    onBuy: clickHandler
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, cart.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, item);
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Shop);

/***/ }),

/***/ 35:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ShopItem = function ShopItem(_ref) {
  var title = _ref.title,
    onBuy = _ref.onBuy;
  if (typeof onBuy === "function") {
    onBuy(title);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Kup"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopItem);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c2df385a94618675543a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wZDcwZjkzZDgzMWM1ZWQ3ZGNlMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ0o7QUFFbEMsSUFBTUcsSUFBSSxHQUFHLFNBQVBBLElBQUlBLENBQUEsRUFBUztFQUNmLElBQUFDLFNBQUEsR0FBMEJILCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFJLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQS9CRyxJQUFJLEdBQUFGLFVBQUE7SUFBRUcsU0FBUyxHQUFBSCxVQUFBO0VBRXRCLElBQU1JLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJQyxJQUFJLEVBQUs7SUFDM0JGLFNBQVMsQ0FBQyxVQUFBRyxTQUFTO01BQUEsVUFBQUMsTUFBQSxDQUFBQyxrQkFBQSxDQUFRRixTQUFTLElBQUVELElBQUk7SUFBQSxDQUFDLENBQUM7RUFDaEQsQ0FBQztFQUVELG9CQUNJViwwREFBQSwyQkFDSUEsMERBQUEsQ0FBQ0UsaURBQVE7SUFBQ2EsS0FBSyxFQUFDLGFBQWE7SUFBQ0MsS0FBSyxFQUFFUDtFQUFhLENBQUMsQ0FBQyxlQUNwRFQsMERBQUEsQ0FBQ0UsaURBQVE7SUFBQ2EsS0FBSyxFQUFDLFlBQVk7SUFBQ0MsS0FBSyxFQUFFUDtFQUFhLENBQUMsQ0FBQyxlQUNuRFQsMERBQUEsQ0FBQ0UsaURBQVE7SUFBQ2EsS0FBSyxFQUFDLGFBQWE7SUFBQ0MsS0FBSyxFQUFFUDtFQUFhLENBQUMsQ0FBQyxlQUNwRFQsMERBQUEsYUFDS08sSUFBSSxDQUFDVSxHQUFHLENBQUMsVUFBQVAsSUFBSSxFQUFJO0lBQ2Qsb0JBQU9WLDBEQUFBLGFBQUtVLElBQVMsQ0FBQztFQUMxQixDQUFDLENBQ0QsQ0FDSCxDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlUCxJQUFJOzs7Ozs7Ozs7Ozs7O0FDeEJPO0FBRTFCLElBQU1ELFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFBZ0IsSUFBQSxFQUF1QjtFQUFBLElBQWxCSCxLQUFLLEdBQUFHLElBQUEsQ0FBTEgsS0FBSztJQUFFQyxLQUFLLEdBQUFFLElBQUEsQ0FBTEYsS0FBSztFQUUzQixJQUFHLE9BQU9BLEtBQUssS0FBRyxVQUFVLEVBQUM7SUFDekJBLEtBQUssQ0FBQ0QsS0FBSyxDQUFDO0VBQ2hCO0VBRUEsb0JBQ0lmLDBEQUFBLDJCQUNJQSwwREFBQSxhQUFLZSxLQUFVLENBQUMsZUFDaEJmLDBEQUFBLGlCQUFRLEtBQVcsQ0FDbEIsQ0FBQztBQUVkLENBQUM7QUFFRCxpRUFBZUUsUUFBUTs7Ozs7Ozs7VUNoQnZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUHJ6ZWthenl3YW5pZV96ZGFyemVuLzAyX1phZGFuaWVfMi9qcy9TaG9wLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1ByemVrYXp5d2FuaWVfemRhcnplbi8wMl9aYWRhbmllXzIvanMvU2hvcEl0ZW0uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNob3BJdGVtIGZyb20gXCIuL1Nob3BJdGVtXCI7XG5cbmNvbnN0IFNob3AgPSAoKSA9PiB7XG4gICAgY29uc3QgW2NhcnQsIGFkZFRvQ2FydF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICBjb25zdCBjbGlja0hhbmRsZXIgPSAoaXRlbSkgPT4ge1xuICAgICAgICBhZGRUb0NhcnQocHJldlN0YXRlID0+IFsuLi5wcmV2U3RhdGUsIGl0ZW1dKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFNob3BJdGVtIHRpdGxlPVwiTWFjQm9vayBQcm9cIiBvbkJ1eT17Y2xpY2tIYW5kbGVyfS8+XG4gICAgICAgICAgICA8U2hvcEl0ZW0gdGl0bGU9XCJEZWxsIFg1NTAwXCIgb25CdXk9e2NsaWNrSGFuZGxlcn0vPlxuICAgICAgICAgICAgPFNob3BJdGVtIHRpdGxlPVwiQXN1cyBOVDYwMDBcIiBvbkJ1eT17Y2xpY2tIYW5kbGVyfS8+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge2NhcnQubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpPntpdGVtfTwvbGk+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvcDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTaG9wSXRlbSA9ICh7dGl0bGUsIG9uQnV5fSkgPT4ge1xuXG4gICAgaWYodHlwZW9mIG9uQnV5PT09XCJmdW5jdGlvblwiKXtcbiAgICAgICAgb25CdXkodGl0bGUpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICA8YnV0dG9uPkt1cDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvcEl0ZW07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzJkZjM4NWE5NDYxODY3NTU0M2FcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlNob3BJdGVtIiwiU2hvcCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImNhcnQiLCJhZGRUb0NhcnQiLCJjbGlja0hhbmRsZXIiLCJpdGVtIiwicHJldlN0YXRlIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiY3JlYXRlRWxlbWVudCIsInRpdGxlIiwib25CdXkiLCJtYXAiLCJfcmVmIl0sInNvdXJjZVJvb3QiOiIifQ==