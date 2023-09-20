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

  // useEffect(() => {
  //
  // }, [counter]);

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setFontSize(fontSize * counter);
  }, [fontSize]);
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
/******/ 	__webpack_require__.h = () => ("dc5979e525eb76f69e6a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kZTE5YTc4NzM2MTQxMzY2YjJlMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUVqRCxJQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFTO0VBQ3RCLElBQUFDLFNBQUEsR0FBOEJGLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUFHLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQWxDRyxPQUFPLEdBQUFGLFVBQUE7SUFBRUcsVUFBVSxHQUFBSCxVQUFBO0VBQzFCLElBQUFJLFVBQUEsR0FBZ0NQLCtDQUFRLENBQUMsR0FBRyxDQUFDO0lBQUFRLFVBQUEsR0FBQUosY0FBQSxDQUFBRyxVQUFBO0lBQXRDRSxRQUFRLEdBQUFELFVBQUE7SUFBRUUsV0FBVyxHQUFBRixVQUFBOztFQUU1QjtFQUNBO0VBQ0E7O0VBRUFULGdEQUFTLENBQUMsWUFBTTtJQUNaVyxXQUFXLENBQUNELFFBQVEsR0FBQ0osT0FBTyxDQUFDO0VBQ2pDLENBQUMsRUFBRSxDQUFDSSxRQUFRLENBQUMsQ0FBQztFQUVkLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQVM7SUFDdEJMLFVBQVUsQ0FBQyxVQUFBTSxTQUFTO01BQUEsT0FBSUEsU0FBUyxHQUFHLENBQUM7SUFBQSxFQUFDO0VBQzFDLENBQUM7RUFFRCxvQkFDSWQsMERBQUEsMkJBQ0lBLDBEQUFBO0lBQ0lnQixPQUFPLEVBQUVILFdBQVk7SUFDckJJLEtBQUssRUFBRTtNQUFDTixRQUFRLEVBQUNBLFFBQVEsR0FBQztJQUFLO0VBQUUsR0FDcEMsK0JBQW1CLEVBQUNKLE9BQU8sRUFBQyxPQUFRLENBQ3BDLENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWVKLFdBQVc7Ozs7Ozs7O1VDNUIxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA3X0R6aWVuXzExLzAyX3VzZUVmZmVjdC8wMl9aYWRhbmllXzIvanMvQ3VzdG9tVGl0bGUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEN1c3RvbVRpdGxlID0gKCkgPT4ge1xuICAgIGNvbnN0IFtjb3VudGVyLCBzZXRDb3VudGVyXSA9IHVzZVN0YXRlKDEpO1xuICAgIGNvbnN0IFtmb250U2l6ZSwgc2V0Rm9udFNpemVdID0gdXNlU3RhdGUoMS4yKTtcblxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy9cbiAgICAvLyB9LCBbY291bnRlcl0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0Rm9udFNpemUoZm9udFNpemUqY291bnRlcik7XG4gICAgfSwgW2ZvbnRTaXplXSk7XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgc2V0Q291bnRlcihwcmV2U3RhdGUgPT4gcHJldlN0YXRlICsgMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tmb250U2l6ZTpmb250U2l6ZStcInJlbVwifX1cbiAgICAgICAgICAgID5LbGlrbmnEmXRvIG1uaWUganXFvCB7Y291bnRlcn0gcmF6eTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVRpdGxlOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImRjNTk3OWU1MjVlYjc2ZjY5ZTZhXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDdXN0b21UaXRsZSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImNvdW50ZXIiLCJzZXRDb3VudGVyIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJmb250U2l6ZSIsInNldEZvbnRTaXplIiwiaGFuZGxlQ2xpY2siLCJwcmV2U3RhdGUiLCJjcmVhdGVFbGVtZW50Iiwib25DbGljayIsInN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==