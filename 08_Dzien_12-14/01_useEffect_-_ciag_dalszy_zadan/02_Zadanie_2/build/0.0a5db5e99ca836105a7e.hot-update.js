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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (stateTime < 0) {
      console.log("stop");
    }
  }, [stateTime]);
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
/******/ 	__webpack_require__.h = () => ("5b80bf99ae27ac2f23ac")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wYTVkYjVlOTljYTgzNjEwNWE3ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUVqRCxJQUFNRyxjQUFjLEdBQUcsU0FBakJBLGNBQWNBLENBQUFDLElBQUEsRUFBZTtFQUFBLElBQVZDLElBQUksR0FBQUQsSUFBQSxDQUFKQyxJQUFJO0VBQ3pCLElBQUFDLFNBQUEsR0FBMEJKLCtDQUFRLENBQUNHLElBQUksQ0FBQztJQUFBRSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUFsQ0csU0FBUyxHQUFBRixVQUFBO0lBQUVHLE9BQU8sR0FBQUgsVUFBQTtFQUN4QixJQUFBSSxVQUFBLEdBQXlCVCwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBVSxVQUFBLEdBQUFKLGNBQUEsQ0FBQUcsVUFBQTtJQUE5QkUsTUFBTSxHQUFBRCxVQUFBO0lBQUVFLFNBQVMsR0FBQUYsVUFBQTtFQUN2QixJQUFBRyxVQUFBLEdBQTZCYiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBYyxVQUFBLEdBQUFSLGNBQUEsQ0FBQU8sVUFBQTtJQUF0Q0UsUUFBUSxHQUFBRCxVQUFBO0lBQUVFLFdBQVcsR0FBQUYsVUFBQTtFQUUzQmYsZ0RBQVMsQ0FBQyxZQUFNO0lBQ1osSUFBTWtCLFFBQVEsR0FBR0MsV0FBVyxDQUFDLFlBQUs7TUFDOUJWLE9BQU8sQ0FBQyxVQUFBVyxRQUFRO1FBQUEsT0FBSUEsUUFBUSxHQUFDLEVBQUU7TUFBQSxFQUFDO0lBQ3BDLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDTixPQUFPLFlBQU07TUFDVEMsYUFBYSxDQUFDSCxRQUFRLENBQUM7SUFDM0IsQ0FBQztFQUNMLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixJQUFNSSxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFTO0lBQ3RCVCxTQUFTLENBQUMsVUFBQVUsU0FBUztNQUFBLE9BQUlBLFNBQVMsR0FBQyxDQUFDO0lBQUEsRUFBQztFQUN2QyxDQUFDO0VBRUR2QixnREFBUyxDQUFDLFlBQU07SUFDWlMsT0FBTyxDQUFDTCxJQUFJLEdBQUUsRUFBRSxHQUFDUSxNQUFPLENBQUM7RUFDN0IsQ0FBQyxFQUFFLENBQUNBLE1BQU0sQ0FBQyxDQUFDO0VBRVpaLGdEQUFTLENBQUMsWUFBTTtJQUNaLElBQUlRLFNBQVMsR0FBQyxDQUFDLEVBQUM7TUFDWmdCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUN2QjtFQUNKLENBQUMsRUFBRSxDQUFDakIsU0FBUyxDQUFDLENBQUM7RUFHZixvQkFDSVQsMERBQUEsMkJBQ0lBLDBEQUFBO0lBQVE0QixPQUFPLEVBQUVMLFdBQVk7SUFBQ04sUUFBUSxFQUFFQTtFQUFTLEdBQUMsT0FBYSxDQUFDLGVBQ2hFakIsMERBQUEsYUFBS1MsU0FBYyxDQUFDLGVBQ3BCVCwwREFBQSxhQUFLYSxNQUFXLENBQ2YsQ0FBQztBQUVkLENBQUM7QUFFRCxpRUFBZVYsY0FBYzs7Ozs7Ozs7VUN4QzdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDhfRHppZW5fMTItMTQvMDFfdXNlRWZmZWN0Xy1fY2lhZ19kYWxzenlfemFkYW4vMDJfWmFkYW5pZV8yL2pzL1NwZWVkQ2xpY2tHYW1lLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTcGVlZENsaWNrR2FtZSA9ICh7dGltZX0pID0+IHtcbiAgICBjb25zdFtzdGF0ZVRpbWUsIHNldFRpbWVdPXVzZVN0YXRlKHRpbWUpO1xuICAgIGNvbnN0W3BvaW50cywgc2V0UG9pbnRzXT11c2VTdGF0ZSgwKTtcbiAgICBjb25zdFtkaXNhYmxlZCwgc2V0RGlzYWJsZWRdPXVzZVN0YXRlKGZhbHNlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCk9PiB7XG4gICAgICAgICAgICBzZXRUaW1lKHByZXZUaW1lID0+IHByZXZUaW1lLTUwKTtcbiAgICAgICAgfSwgNTApO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgc2V0UG9pbnRzKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUrMSk7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0VGltZSh0aW1lLSg1MCpwb2ludHMpKTtcbiAgICB9LCBbcG9pbnRzXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoc3RhdGVUaW1lPDApe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdG9wXCIpO1xuICAgICAgICB9XG4gICAgfSwgW3N0YXRlVGltZV0pO1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30gZGlzYWJsZWQ9e2Rpc2FibGVkfT5DbGljazwvYnV0dG9uPlxuICAgICAgICAgICAgPGgxPntzdGF0ZVRpbWV9PC9oMT5cbiAgICAgICAgICAgIDxoMj57cG9pbnRzfTwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGVlZENsaWNrR2FtZTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1YjgwYmY5OWFlMjdhYzJmMjNhY1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU3BlZWRDbGlja0dhbWUiLCJfcmVmIiwidGltZSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInN0YXRlVGltZSIsInNldFRpbWUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInBvaW50cyIsInNldFBvaW50cyIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiZGlzYWJsZWQiLCJzZXREaXNhYmxlZCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJoYW5kbGVDbGljayIsInByZXZTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVFbGVtZW50Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=