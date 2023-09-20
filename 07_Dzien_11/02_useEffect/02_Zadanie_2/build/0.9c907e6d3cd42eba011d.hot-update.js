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

var CustomTitle = function CustomTitle() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState2 = _slicedToArray(_useState, 2),
    counter = _useState2[0],
    setCounter = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1.2),
    _useState4 = _slicedToArray(_useState3, 2),
    fontSize = _useState4[0],
    setFontSize = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.title = counter.toString();
  }, [counter]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setFontSize(fontSize * counter);
  }, [counter]);
  var handleClick = function handleClick() {
    setCounter(function (prevState) {
      return prevState + 1;
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    onClick: handleClick,
    style: {
      fontSize: fontSize + "rem"
    }
  }, "Klikni\u0119to mnie ju\u017C ", counter, " razy"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomTitle);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a630e7b029d6d1fa4492")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45YzkwN2U2ZDNjZDQyZWJhMDExZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUVqRCxJQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFTO0VBQ3RCLElBQUFDLFNBQUEsR0FBOEJGLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUFHLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQWxDRyxPQUFPLEdBQUFGLFVBQUE7SUFBRUcsVUFBVSxHQUFBSCxVQUFBO0VBQzFCLElBQUFJLFVBQUEsR0FBZ0NQLCtDQUFRLENBQUMsR0FBRyxDQUFDO0lBQUFRLFVBQUEsR0FBQUosY0FBQSxDQUFBRyxVQUFBO0lBQXRDRSxRQUFRLEdBQUFELFVBQUE7SUFBRUUsV0FBVyxHQUFBRixVQUFBO0VBRTVCVCxnREFBUyxDQUFDLFlBQU07SUFDWlksUUFBUSxDQUFDQyxLQUFLLEdBQUNQLE9BQU8sQ0FBQ1EsUUFBUSxDQUFDLENBQUM7RUFDckMsQ0FBQyxFQUFFLENBQUNSLE9BQU8sQ0FBQyxDQUFDO0VBRWJOLGdEQUFTLENBQUMsWUFBTTtJQUNaVyxXQUFXLENBQUNELFFBQVEsR0FBQ0osT0FBTyxDQUFDO0VBQ2pDLENBQUMsRUFBRSxDQUFDQSxPQUFPLENBQUMsQ0FBQztFQUViLElBQU1TLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQVM7SUFDdEJSLFVBQVUsQ0FBQyxVQUFBUyxTQUFTO01BQUEsT0FBSUEsU0FBUyxHQUFHLENBQUM7SUFBQSxFQUFDO0VBQzFDLENBQUM7RUFFRCxvQkFDSWpCLDBEQUFBLDJCQUNJQSwwREFBQTtJQUNJbUIsT0FBTyxFQUFFSCxXQUFZO0lBQ3JCSSxLQUFLLEVBQUU7TUFBQ1QsUUFBUSxFQUFDQSxRQUFRLEdBQUM7SUFBSztFQUFFLEdBQ3BDLCtCQUFtQixFQUFDSixPQUFPLEVBQUMsT0FBUSxDQUNwQyxDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlSixXQUFXOzs7Ozs7OztVQzVCMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wN19Eemllbl8xMS8wMl91c2VFZmZlY3QvMDJfWmFkYW5pZV8yL2pzL0N1c3RvbVRpdGxlLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBDdXN0b21UaXRsZSA9ICgpID0+IHtcbiAgICBjb25zdCBbY291bnRlciwgc2V0Q291bnRlcl0gPSB1c2VTdGF0ZSgxKTtcbiAgICBjb25zdCBbZm9udFNpemUsIHNldEZvbnRTaXplXSA9IHVzZVN0YXRlKDEuMik7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC50aXRsZT1jb3VudGVyLnRvU3RyaW5nKCk7XG4gICAgfSwgW2NvdW50ZXJdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldEZvbnRTaXplKGZvbnRTaXplKmNvdW50ZXIpO1xuICAgIH0sIFtjb3VudGVyXSk7XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgc2V0Q291bnRlcihwcmV2U3RhdGUgPT4gcHJldlN0YXRlICsgMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tmb250U2l6ZTpmb250U2l6ZStcInJlbVwifX1cbiAgICAgICAgICAgID5LbGlrbmnEmXRvIG1uaWUganXFvCB7Y291bnRlcn0gcmF6eTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVRpdGxlOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImE2MzBlN2IwMjlkNmQxZmE0NDkyXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDdXN0b21UaXRsZSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImNvdW50ZXIiLCJzZXRDb3VudGVyIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJmb250U2l6ZSIsInNldEZvbnRTaXplIiwiZG9jdW1lbnQiLCJ0aXRsZSIsInRvU3RyaW5nIiwiaGFuZGxlQ2xpY2siLCJwcmV2U3RhdGUiLCJjcmVhdGVFbGVtZW50Iiwib25DbGljayIsInN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==