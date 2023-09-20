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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("box", {
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
/******/ 	__webpack_require__.h = () => ("28a14c975f32cb5d3422")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jMTk4NjA2MzIzMDc1MGE0MWQ4Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFFdEMsSUFBTUUsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBLEVBQVM7RUFDeEIsSUFBQUMsU0FBQSxHQUF3QkYsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQUcsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBN0JHLEdBQUcsR0FBQUYsVUFBQTtJQUFFRyxRQUFRLEdBQUFILFVBQUE7RUFDcEIsSUFBTUksV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUEsRUFBUztJQUN0QixJQUFNQyxXQUFXLEdBQUcsR0FBRyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFDLFFBQVEsQ0FBQyxDQUFDQyxRQUFRLENBQUMsRUFBRSxDQUFDO0lBQ3pFTixRQUFRLENBQUMsVUFBQU8sU0FBUyxFQUFJO01BQ2xCLElBQU1SLEdBQUcsR0FBQVMsa0JBQUEsQ0FBS0QsU0FBUyxDQUFDO01BQ3hCUixHQUFHLENBQUNVLElBQUksQ0FBQ1AsV0FBVyxDQUFDO01BQ3JCLE9BQU9ILEdBQUc7SUFDZCxDQUFDLENBQUM7RUFDTixDQUFDO0VBQ0Qsb0JBQ0lOLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQTtJQUFRbUIsT0FBTyxFQUFFWDtFQUFZLEdBQUMsYUFBbUIsQ0FBQyxFQUNqREYsR0FBRyxDQUFDYyxHQUFHLENBQUMsVUFBQUMsRUFBRSxFQUFJO0lBQ1gsb0JBQU9yQiwwREFBQTtNQUFLc0IsS0FBSyxFQUFFO1FBQUVDLE1BQU0sRUFBRSxHQUFHO1FBQUVDLEtBQUssRUFBRSxHQUFHO1FBQUVDLGVBQWUsRUFBRUo7TUFBRztJQUFFLENBQU0sQ0FBQztFQUMvRSxDQUFDLENBQ0gsQ0FBQztBQUVYLENBQUM7QUFFRCxpRUFBZW5CLGFBQWE7Ozs7Ozs7O1VDdEI1QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA2X0R6aWVuXzktMTAvMDFfdXNlU3RhdGUvMDJfWmFkYW5pZV8yL2pzL0NvbG9yZnVsQm94ZXMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBDb2xvcmZ1bEJveGVzID0gKCkgPT4ge1xuICAgIGNvbnN0IFthcnIsIHNldFN0YXRlXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmFuZG9tQ29sb3IgPSAnIycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTY3NzcyMTUpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgc2V0U3RhdGUocHJldlN0YXRlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFycj1bLi4ucHJldlN0YXRlXTtcbiAgICAgICAgICAgIGFyci5wdXNoKHJhbmRvbUNvbG9yKTtcbiAgICAgICAgICAgIHJldHVybiBhcnI7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5Eb2RhaiBib3hhITwvYnV0dG9uPlxuICAgICAgICAgICAge2Fyci5tYXAoZWwgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8Ym94IHN0eWxlPXt7IGhlaWdodDogMjAwLCB3aWR0aDogMjAwLCBiYWNrZ3JvdW5kQ29sb3I6IGVsIH19PjwvYm94PlxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb2xvcmZ1bEJveGVzOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjI4YTE0Yzk3NWYzMmNiNWQzNDIyXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDb2xvcmZ1bEJveGVzIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiYXJyIiwic2V0U3RhdGUiLCJoYW5kbGVDbGljayIsInJhbmRvbUNvbG9yIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJwcmV2U3RhdGUiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJwdXNoIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50Iiwib25DbGljayIsIm1hcCIsImVsIiwic3R5bGUiLCJoZWlnaHQiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=