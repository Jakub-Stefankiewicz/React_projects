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

var DynamicLego = function DynamicLego() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState2 = _slicedToArray(_useState, 2),
    lego = _useState2[0],
    addLego = _useState2[1];
  var changeHandler = function changeHandler(e) {
    addLego(e.target.value);
    e.preventDefault();
  };
  var legoBuilder = function legoBuilder(number) {
    var arr = [];
    for (var i = 0; i < number; i++) {
      arr.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        key: i,
        style: {
          backgroundColor: "red",
          height: "100px",
          width: "".concat(i, "*50px")
        }
      }));
      return arr;
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    onChange: function onChange(e) {
      return changeHandler(e);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, legoBuilder(lego)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicLego);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("370284c2d57bec15c2c4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jMDJmYjY4ODFiOGM5NDEwZWFiOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFTO0VBQ3RCLElBQUFDLFNBQUEsR0FBcUJGLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUFHLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTFCRyxJQUFJLEdBQUFGLFVBQUE7SUFBRUcsT0FBTyxHQUFBSCxVQUFBO0VBRW5CLElBQU1JLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBSUMsQ0FBQyxFQUFJO0lBQ3hCRixPQUFPLENBQUNFLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7SUFDdkJGLENBQUMsQ0FBQ0csY0FBYyxDQUFDLENBQUM7RUFDdEIsQ0FBQztFQUVELElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFJQyxNQUFNLEVBQUs7SUFDNUIsSUFBTUMsR0FBRyxHQUFDLEVBQUU7SUFDWixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0YsTUFBTSxFQUFFRSxDQUFDLEVBQUUsRUFBRTtNQUM3QkQsR0FBRyxDQUFDRSxJQUFJLGVBQ0pqQiwwREFBQTtRQUFJbUIsR0FBRyxFQUFFSCxDQUFFO1FBQUNJLEtBQUssRUFBRTtVQUFDQyxlQUFlLEVBQUMsS0FBSztVQUFFQyxNQUFNLEVBQUMsT0FBTztVQUFFQyxLQUFLLEtBQUFDLE1BQUEsQ0FBSVIsQ0FBQztRQUFPO01BQUUsQ0FBSyxDQUN2RixDQUFDO01BQ0QsT0FBT0QsR0FBRztJQUNkO0VBRUosQ0FBQztFQUVELG9CQUNJZiwwREFBQSwyQkFDSUEsMERBQUEsNEJBQ0lBLDBEQUFBO0lBQU95QixJQUFJLEVBQUMsUUFBUTtJQUFDQyxRQUFRLEVBQUUsU0FBQUEsU0FBQWpCLENBQUM7TUFBQSxPQUFFRCxhQUFhLENBQUNDLENBQUMsQ0FBQztJQUFBO0VBQUMsQ0FBRSxDQUNuRCxDQUFDLGVBQ1BULDBEQUFBLGFBQUthLFdBQVcsQ0FBQ1AsSUFBSSxDQUFNLENBQzFCLENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWVKLFdBQVc7Ozs7Ozs7O1VDL0IxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LzAyX0Zvcm11bGFyemVfLV9jaWFnX2RhbHN6eV96YWRhbi8wM19aYWRhbmllXzMvanMvRHluYW1pY0xlZ28uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBEeW5hbWljTGVnbyA9ICgpID0+IHtcbiAgICBjb25zdFtsZWdvLCBhZGRMZWdvXT11c2VTdGF0ZSgxKVxuXG4gICAgY29uc3QgY2hhbmdlSGFuZGxlciA9IChlKSA9PntcbiAgICAgICAgYWRkTGVnbyhlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBsZWdvQnVpbGRlciA9IChudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgYXJyPVtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlcjsgaSsrKSB7XG4gICAgICAgICAgICBhcnIucHVzaChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcInJlZFwiLCBoZWlnaHQ6XCIxMDBweFwiLCB3aWR0aDpgJHtpfSo1MHB4YH19PjwvbGk+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gYXJyXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG9uQ2hhbmdlPXtlPT5jaGFuZ2VIYW5kbGVyKGUpfSAvPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPHVsPntsZWdvQnVpbGRlcihsZWdvKX08L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRHluYW1pY0xlZ287IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMzcwMjg0YzJkNTdiZWMxNWMyYzRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkR5bmFtaWNMZWdvIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwibGVnbyIsImFkZExlZ28iLCJjaGFuZ2VIYW5kbGVyIiwiZSIsInRhcmdldCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJsZWdvQnVpbGRlciIsIm51bWJlciIsImFyciIsImkiLCJwdXNoIiwiY3JlYXRlRWxlbWVudCIsImtleSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiaGVpZ2h0Iiwid2lkdGgiLCJjb25jYXQiLCJ0eXBlIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9