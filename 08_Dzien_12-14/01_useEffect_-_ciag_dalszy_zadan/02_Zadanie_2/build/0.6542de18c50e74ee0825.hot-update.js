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
      if (points < 0) {
        console.log("stop");
      }
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
/******/ 	__webpack_require__.h = () => ("acc09c5e035d4ee60154")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42NTQyZGUxOGM1MGU3NGVlMDgyNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUVqRCxJQUFNRyxjQUFjLEdBQUcsU0FBakJBLGNBQWNBLENBQUFDLElBQUEsRUFBZTtFQUFBLElBQVZDLElBQUksR0FBQUQsSUFBQSxDQUFKQyxJQUFJO0VBQ3pCLElBQUFDLFNBQUEsR0FBMEJKLCtDQUFRLENBQUNHLElBQUksQ0FBQztJQUFBRSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUFsQ0csU0FBUyxHQUFBRixVQUFBO0lBQUVHLE9BQU8sR0FBQUgsVUFBQTtFQUN4QixJQUFBSSxVQUFBLEdBQXlCVCwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBVSxVQUFBLEdBQUFKLGNBQUEsQ0FBQUcsVUFBQTtJQUE5QkUsTUFBTSxHQUFBRCxVQUFBO0lBQUVFLFNBQVMsR0FBQUYsVUFBQTtFQUN2QixJQUFBRyxVQUFBLEdBQTZCYiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBYyxVQUFBLEdBQUFSLGNBQUEsQ0FBQU8sVUFBQTtJQUF0Q0UsUUFBUSxHQUFBRCxVQUFBO0lBQUVFLFdBQVcsR0FBQUYsVUFBQTtFQUUzQmYsZ0RBQVMsQ0FBQyxZQUFNO0lBQ1osSUFBTWtCLFFBQVEsR0FBR0MsV0FBVyxDQUFDLFlBQUs7TUFDOUIsSUFBSVAsTUFBTSxHQUFDLENBQUMsRUFBQztRQUNUUSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7TUFDdkI7TUFDQVosT0FBTyxDQUFDLFVBQUFhLFFBQVE7UUFBQSxPQUFJQSxRQUFRLEdBQUMsRUFBRTtNQUFBLEVBQUM7SUFDcEMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNOLE9BQU8sWUFBTTtNQUNUQyxhQUFhLENBQUNMLFFBQVEsQ0FBQztJQUMzQixDQUFDO0VBQ0wsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLElBQU1NLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQVM7SUFDdEJYLFNBQVMsQ0FBQyxVQUFBWSxTQUFTO01BQUEsT0FBSUEsU0FBUyxHQUFDLENBQUM7SUFBQSxFQUFDO0VBQ3ZDLENBQUM7RUFFRHpCLGdEQUFTLENBQUMsWUFBTTtJQUNaUyxPQUFPLENBQUNMLElBQUksR0FBRSxFQUFFLEdBQUNRLE1BQU8sQ0FBQztFQUM3QixDQUFDLEVBQUUsQ0FBQ0EsTUFBTSxDQUFDLENBQUM7RUFHWixvQkFDSWIsMERBQUEsMkJBQ0lBLDBEQUFBO0lBQVE0QixPQUFPLEVBQUVILFdBQVk7SUFBQ1IsUUFBUSxFQUFFQTtFQUFTLEdBQUMsT0FBYSxDQUFDLGVBQ2hFakIsMERBQUEsYUFBS1MsU0FBYyxDQUFDLGVBQ3BCVCwwREFBQSxhQUFLYSxNQUFXLENBQ2YsQ0FBQztBQUVkLENBQUM7QUFFRCxpRUFBZVYsY0FBYzs7Ozs7Ozs7VUNyQzdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDhfRHppZW5fMTItMTQvMDFfdXNlRWZmZWN0Xy1fY2lhZ19kYWxzenlfemFkYW4vMDJfWmFkYW5pZV8yL2pzL1NwZWVkQ2xpY2tHYW1lLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTcGVlZENsaWNrR2FtZSA9ICh7dGltZX0pID0+IHtcbiAgICBjb25zdFtzdGF0ZVRpbWUsIHNldFRpbWVdPXVzZVN0YXRlKHRpbWUpO1xuICAgIGNvbnN0W3BvaW50cywgc2V0UG9pbnRzXT11c2VTdGF0ZSgwKTtcbiAgICBjb25zdFtkaXNhYmxlZCwgc2V0RGlzYWJsZWRdPXVzZVN0YXRlKGZhbHNlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCk9PiB7XG4gICAgICAgICAgICBpZiAocG9pbnRzPDApe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RvcFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFRpbWUocHJldlRpbWUgPT4gcHJldlRpbWUtNTApO1xuICAgICAgICB9LCA1MCk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRQb2ludHMocHJldlN0YXRlID0+IHByZXZTdGF0ZSsxKTtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRUaW1lKHRpbWUtKDUwKnBvaW50cykpO1xuICAgIH0sIFtwb2ludHNdKTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9IGRpc2FibGVkPXtkaXNhYmxlZH0+Q2xpY2s8L2J1dHRvbj5cbiAgICAgICAgICAgIDxoMT57c3RhdGVUaW1lfTwvaDE+XG4gICAgICAgICAgICA8aDI+e3BvaW50c308L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3BlZWRDbGlja0dhbWU7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYWNjMDljNWUwMzVkNGVlNjAxNTRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNwZWVkQ2xpY2tHYW1lIiwiX3JlZiIsInRpbWUiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzdGF0ZVRpbWUiLCJzZXRUaW1lIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJwb2ludHMiLCJzZXRQb2ludHMiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImRpc2FibGVkIiwic2V0RGlzYWJsZWQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY29uc29sZSIsImxvZyIsInByZXZUaW1lIiwiY2xlYXJJbnRlcnZhbCIsImhhbmRsZUNsaWNrIiwicHJldlN0YXRlIiwiY3JlYXRlRWxlbWVudCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9