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

var ColorfulBoxes = function ColorfulBoxes() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    arr = _useState2[0],
    setState = _useState2[1];
  var handleClick = function handleClick() {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setState(function (prevState) {
      var arr = _toConsumableArray(prevState);
      arr.push(randomColor);
      return arr;
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleClick
  }, "Dodaj boxa!"), arr.map(function (el) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: el,
      style: {
        height: 200,
        width: 200,
        backgroundColor: el
      }
    });
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorfulBoxes);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("82b56fc25496f2e89b09")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43ZTA3YjBlMjcyZTE1OGM5NmYyNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFFdEMsSUFBTUUsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBLEVBQVM7RUFDeEIsSUFBQUMsU0FBQSxHQUF3QkYsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQUcsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBN0JHLEdBQUcsR0FBQUYsVUFBQTtJQUFFRyxRQUFRLEdBQUFILFVBQUE7RUFDcEIsSUFBTUksV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUEsRUFBUztJQUN0QixJQUFNQyxXQUFXLEdBQUcsR0FBRyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFDLFFBQVEsQ0FBQyxDQUFDQyxRQUFRLENBQUMsRUFBRSxDQUFDO0lBQ3pFTixRQUFRLENBQUMsVUFBQU8sU0FBUyxFQUFJO01BQ2xCLElBQU1SLEdBQUcsR0FBQVMsa0JBQUEsQ0FBS0QsU0FBUyxDQUFDO01BQ3hCUixHQUFHLENBQUNVLElBQUksQ0FBQ1AsV0FBVyxDQUFDO01BQ3JCLE9BQU9ILEdBQUc7SUFDZCxDQUFDLENBQUM7RUFDTixDQUFDO0VBQ0Qsb0JBQ0lOLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQTtJQUFRbUIsT0FBTyxFQUFFWDtFQUFZLEdBQUMsYUFBbUIsQ0FBQyxFQUNqREYsR0FBRyxDQUFDYyxHQUFHLENBQUMsVUFBQUMsRUFBRSxFQUFJO0lBQ1gsb0JBQU9yQiwwREFBQTtNQUFLc0IsR0FBRyxFQUFFRCxFQUFHO01BQUNFLEtBQUssRUFBRTtRQUFFQyxNQUFNLEVBQUUsR0FBRztRQUFFQyxLQUFLLEVBQUUsR0FBRztRQUFFQyxlQUFlLEVBQUVMO01BQUc7SUFBRSxDQUFNLENBQUM7RUFDeEYsQ0FBQyxDQUNILENBQUM7QUFFWCxDQUFDO0FBRUQsaUVBQWVuQixhQUFhOzs7Ozs7OztVQ3RCNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNl9Eemllbl85LTEwLzAxX3VzZVN0YXRlLzAyX1phZGFuaWVfMi9qcy9Db2xvcmZ1bEJveGVzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQ29sb3JmdWxCb3hlcyA9ICgpID0+IHtcbiAgICBjb25zdCBbYXJyLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJhbmRvbUNvbG9yID0gJyMnICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjE2Nzc3MjE1KS50b1N0cmluZygxNik7XG4gICAgICAgIHNldFN0YXRlKHByZXZTdGF0ZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhcnI9Wy4uLnByZXZTdGF0ZV07XG4gICAgICAgICAgICBhcnIucHVzaChyYW5kb21Db2xvcik7XG4gICAgICAgICAgICByZXR1cm4gYXJyO1xuICAgICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+RG9kYWogYm94YSE8L2J1dHRvbj5cbiAgICAgICAgICAgIHthcnIubWFwKGVsID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2VsfSBzdHlsZT17eyBoZWlnaHQ6IDIwMCwgd2lkdGg6IDIwMCwgYmFja2dyb3VuZENvbG9yOiBlbCB9fT48L2Rpdj5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29sb3JmdWxCb3hlczsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4MmI1NmZjMjU0OTZmMmU4OWIwOVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ29sb3JmdWxCb3hlcyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImFyciIsInNldFN0YXRlIiwiaGFuZGxlQ2xpY2siLCJyYW5kb21Db2xvciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwicHJldlN0YXRlIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwicHVzaCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIm9uQ2xpY2siLCJtYXAiLCJlbCIsImtleSIsInN0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9