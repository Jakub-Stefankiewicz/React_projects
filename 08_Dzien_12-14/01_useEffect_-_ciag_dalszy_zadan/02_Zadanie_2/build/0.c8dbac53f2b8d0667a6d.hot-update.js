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

var SpeedClickGame = function SpeedClickGame(_ref) {
  var time = _ref.time;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(time),
    _useState2 = _slicedToArray(_useState, 2),
    stateTime = _useState2[0],
    setTime = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    points = _useState4[0],
    setPoints = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    disabled = _useState6[0],
    setDisabled = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (points < 0) {
      console.log("stop");
    }
    var interval = setInterval(function () {
      setTime(function (prevTime) {
        return prevTime - 50;
      });
    }, 50);
    return function () {
      clearInterval(interval);
    };
  }, []);
  var handleClick = function handleClick() {
    setPoints(function (prevState) {
      return prevState + 1;
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setTime(time - 50 * points);
  }, [points]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleClick,
    disabled: disabled
  }, "Click"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, stateTime), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, points));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpeedClickGame);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("94f165373a4e452a4bb2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jOGRiYWM1M2YyYjhkMDY2N2E2ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUVqRCxJQUFNRyxjQUFjLEdBQUcsU0FBakJBLGNBQWNBLENBQUFDLElBQUEsRUFBZTtFQUFBLElBQVZDLElBQUksR0FBQUQsSUFBQSxDQUFKQyxJQUFJO0VBQ3pCLElBQUFDLFNBQUEsR0FBMEJKLCtDQUFRLENBQUNHLElBQUksQ0FBQztJQUFBRSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUFsQ0csU0FBUyxHQUFBRixVQUFBO0lBQUVHLE9BQU8sR0FBQUgsVUFBQTtFQUN4QixJQUFBSSxVQUFBLEdBQXlCVCwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBVSxVQUFBLEdBQUFKLGNBQUEsQ0FBQUcsVUFBQTtJQUE5QkUsTUFBTSxHQUFBRCxVQUFBO0lBQUVFLFNBQVMsR0FBQUYsVUFBQTtFQUN2QixJQUFBRyxVQUFBLEdBQTZCYiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBYyxVQUFBLEdBQUFSLGNBQUEsQ0FBQU8sVUFBQTtJQUF0Q0UsUUFBUSxHQUFBRCxVQUFBO0lBQUVFLFdBQVcsR0FBQUYsVUFBQTtFQUUzQmYsZ0RBQVMsQ0FBQyxZQUFNO0lBQ1osSUFBSVksTUFBTSxHQUFDLENBQUMsRUFBQztNQUNUTSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDdkI7SUFDQSxJQUFNQyxRQUFRLEdBQUdDLFdBQVcsQ0FBQyxZQUFLO01BQzlCWixPQUFPLENBQUMsVUFBQWEsUUFBUTtRQUFBLE9BQUlBLFFBQVEsR0FBQyxFQUFFO01BQUEsRUFBQztJQUNwQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ04sT0FBTyxZQUFNO01BQ1RDLGFBQWEsQ0FBQ0gsUUFBUSxDQUFDO0lBQzNCLENBQUM7RUFDTCxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sSUFBTUksV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUEsRUFBUztJQUN0QlgsU0FBUyxDQUFDLFVBQUFZLFNBQVM7TUFBQSxPQUFJQSxTQUFTLEdBQUMsQ0FBQztJQUFBLEVBQUM7RUFDdkMsQ0FBQztFQUVEekIsZ0RBQVMsQ0FBQyxZQUFNO0lBQ1pTLE9BQU8sQ0FBQ0wsSUFBSSxHQUFFLEVBQUUsR0FBQ1EsTUFBTyxDQUFDO0VBQzdCLENBQUMsRUFBRSxDQUFDQSxNQUFNLENBQUMsQ0FBQztFQUdaLG9CQUNJYiwwREFBQSwyQkFDSUEsMERBQUE7SUFBUTRCLE9BQU8sRUFBRUgsV0FBWTtJQUFDUixRQUFRLEVBQUVBO0VBQVMsR0FBQyxPQUFhLENBQUMsZUFDaEVqQiwwREFBQSxhQUFLUyxTQUFjLENBQUMsZUFDcEJULDBEQUFBLGFBQUthLE1BQVcsQ0FDZixDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlVixjQUFjOzs7Ozs7OztVQ3JDN0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOF9Eemllbl8xMi0xNC8wMV91c2VFZmZlY3RfLV9jaWFnX2RhbHN6eV96YWRhbi8wMl9aYWRhbmllXzIvanMvU3BlZWRDbGlja0dhbWUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFNwZWVkQ2xpY2tHYW1lID0gKHt0aW1lfSkgPT4ge1xuICAgIGNvbnN0W3N0YXRlVGltZSwgc2V0VGltZV09dXNlU3RhdGUodGltZSk7XG4gICAgY29uc3RbcG9pbnRzLCBzZXRQb2ludHNdPXVzZVN0YXRlKDApO1xuICAgIGNvbnN0W2Rpc2FibGVkLCBzZXREaXNhYmxlZF09dXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHBvaW50czwwKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RvcFwiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpPT4ge1xuICAgICAgICAgICAgc2V0VGltZShwcmV2VGltZSA9PiBwcmV2VGltZS01MCk7XG4gICAgICAgIH0sIDUwKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldFBvaW50cyhwcmV2U3RhdGUgPT4gcHJldlN0YXRlKzEpO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldFRpbWUodGltZS0oNTAqcG9pbnRzKSk7XG4gICAgfSwgW3BvaW50c10pO1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30gZGlzYWJsZWQ9e2Rpc2FibGVkfT5DbGljazwvYnV0dG9uPlxuICAgICAgICAgICAgPGgxPntzdGF0ZVRpbWV9PC9oMT5cbiAgICAgICAgICAgIDxoMj57cG9pbnRzfTwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGVlZENsaWNrR2FtZTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5NGYxNjUzNzNhNGU0NTJhNGJiMlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU3BlZWRDbGlja0dhbWUiLCJfcmVmIiwidGltZSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInN0YXRlVGltZSIsInNldFRpbWUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInBvaW50cyIsInNldFBvaW50cyIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiZGlzYWJsZWQiLCJzZXREaXNhYmxlZCIsImNvbnNvbGUiLCJsb2ciLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiaGFuZGxlQ2xpY2siLCJwcmV2U3RhdGUiLCJjcmVhdGVFbGVtZW50Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=