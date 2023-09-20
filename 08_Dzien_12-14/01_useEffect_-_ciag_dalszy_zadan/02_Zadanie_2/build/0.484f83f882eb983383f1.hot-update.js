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
    if (points < 0) {
      setDisabled(true);
    }
  }, [points]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleClick,
    disabled: true
  }, "Click"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, stateTime), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, points));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpeedClickGame);

/***/ }),

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _SpeedClickGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);



var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SpeedClickGame__WEBPACK_IMPORTED_MODULE_2__["default"], {
    time: 2000
  });
};
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7926509e9620ff34f5d3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40ODRmODNmODgyZWI5ODMzODNmMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUVqRCxJQUFNRyxjQUFjLEdBQUcsU0FBakJBLGNBQWNBLENBQUFDLElBQUEsRUFBZTtFQUFBLElBQVZDLElBQUksR0FBQUQsSUFBQSxDQUFKQyxJQUFJO0VBQ3pCLElBQUFDLFNBQUEsR0FBMEJKLCtDQUFRLENBQUNHLElBQUksQ0FBQztJQUFBRSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUFsQ0csU0FBUyxHQUFBRixVQUFBO0lBQUVHLE9BQU8sR0FBQUgsVUFBQTtFQUN4QixJQUFBSSxVQUFBLEdBQXlCVCwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBVSxVQUFBLEdBQUFKLGNBQUEsQ0FBQUcsVUFBQTtJQUE5QkUsTUFBTSxHQUFBRCxVQUFBO0lBQUVFLFNBQVMsR0FBQUYsVUFBQTtFQUN2QixJQUFBRyxVQUFBLEdBQTZCYiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBYyxVQUFBLEdBQUFSLGNBQUEsQ0FBQU8sVUFBQTtJQUF0Q0UsUUFBUSxHQUFBRCxVQUFBO0lBQUVFLFdBQVcsR0FBQUYsVUFBQTtFQUUzQmYsZ0RBQVMsQ0FBQyxZQUFNO0lBQ1osSUFBTWtCLFFBQVEsR0FBR0MsV0FBVyxDQUFDLFlBQUs7TUFDOUJWLE9BQU8sQ0FBQyxVQUFBVyxRQUFRO1FBQUEsT0FBSUEsUUFBUSxHQUFDLEVBQUU7TUFBQSxFQUFDO0lBQ3BDLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDTixPQUFPLFlBQU07TUFDVEMsYUFBYSxDQUFDSCxRQUFRLENBQUM7SUFDM0IsQ0FBQztFQUNMLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixJQUFNSSxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFTO0lBQ3RCVCxTQUFTLENBQUMsVUFBQVUsU0FBUztNQUFBLE9BQUlBLFNBQVMsR0FBQyxDQUFDO0lBQUEsRUFBQztFQUN2QyxDQUFDO0VBRUR2QixnREFBUyxDQUFDLFlBQU07SUFDWlMsT0FBTyxDQUFDTCxJQUFJLEdBQUUsRUFBRSxHQUFDUSxNQUFPLENBQUM7SUFDekIsSUFBR0EsTUFBTSxHQUFDLENBQUMsRUFBQztNQUNSSyxXQUFXLENBQUMsSUFBSSxDQUFDO0lBQ3JCO0VBQ0osQ0FBQyxFQUFFLENBQUNMLE1BQU0sQ0FBQyxDQUFDO0VBRVosb0JBQ0liLDBEQUFBLDJCQUNJQSwwREFBQTtJQUFRMEIsT0FBTyxFQUFFSCxXQUFZO0lBQUNOLFFBQVEsRUFBRTtFQUFLLEdBQUMsT0FBYSxDQUFDLGVBQzVEakIsMERBQUEsYUFBS1MsU0FBYyxDQUFDLGVBQ3BCVCwwREFBQSxhQUFLYSxNQUFXLENBQ2YsQ0FBQztBQUVkLENBQUM7QUFFRCxpRUFBZVYsY0FBYzs7Ozs7Ozs7Ozs7O0FDcENVO0FBQ0s7QUFDRTtBQUU5QyxJQUFNMEIsR0FBRyxHQUFHLFNBQU5BLEdBQUdBLENBQUE7RUFBQSxvQkFBUzdCLDBEQUFBLENBQUNHLHVEQUFjO0lBQUNFLElBQUksRUFBRTtFQUFLLENBQUMsQ0FBQztBQUFBO0FBQy9DLElBQU15QixTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdMLDREQUFVLENBQUNFLFNBQVMsQ0FBQztBQUNsQ0csSUFBSSxDQUFDQyxNQUFNLGVBQUNsQywwREFBQSxDQUFDNkIsR0FBRyxNQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7VUNQbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOF9Eemllbl8xMi0xNC8wMV91c2VFZmZlY3RfLV9jaWFnX2RhbHN6eV96YWRhbi8wMl9aYWRhbmllXzIvanMvU3BlZWRDbGlja0dhbWUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDhfRHppZW5fMTItMTQvMDFfdXNlRWZmZWN0Xy1fY2lhZ19kYWxzenlfemFkYW4vMDJfWmFkYW5pZV8yL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU3BlZWRDbGlja0dhbWUgPSAoe3RpbWV9KSA9PiB7XG4gICAgY29uc3Rbc3RhdGVUaW1lLCBzZXRUaW1lXT11c2VTdGF0ZSh0aW1lKTtcbiAgICBjb25zdFtwb2ludHMsIHNldFBvaW50c109dXNlU3RhdGUoMCk7XG4gICAgY29uc3RbZGlzYWJsZWQsIHNldERpc2FibGVkXT11c2VTdGF0ZShmYWxzZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpPT4ge1xuICAgICAgICAgICAgc2V0VGltZShwcmV2VGltZSA9PiBwcmV2VGltZS01MCk7XG4gICAgICAgIH0sIDUwKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldFBvaW50cyhwcmV2U3RhdGUgPT4gcHJldlN0YXRlKzEpO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldFRpbWUodGltZS0oNTAqcG9pbnRzKSk7XG4gICAgICAgIGlmKHBvaW50czwwKXtcbiAgICAgICAgICAgIHNldERpc2FibGVkKHRydWUpO1xuICAgICAgICB9XG4gICAgfSwgW3BvaW50c10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9IGRpc2FibGVkPXt0cnVlfT5DbGljazwvYnV0dG9uPlxuICAgICAgICAgICAgPGgxPntzdGF0ZVRpbWV9PC9oMT5cbiAgICAgICAgICAgIDxoMj57cG9pbnRzfTwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGVlZENsaWNrR2FtZTsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IFNwZWVkQ2xpY2tHYW1lIGZyb20gXCIuL1NwZWVkQ2xpY2tHYW1lXCI7XG5cbmNvbnN0IEFwcCA9ICgpID0+IDxTcGVlZENsaWNrR2FtZSB0aW1lPXsyMDAwfS8+XG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwLz4pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzkyNjUwOWU5NjIwZmYzNGY1ZDNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNwZWVkQ2xpY2tHYW1lIiwiX3JlZiIsInRpbWUiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzdGF0ZVRpbWUiLCJzZXRUaW1lIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJwb2ludHMiLCJzZXRQb2ludHMiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImRpc2FibGVkIiwic2V0RGlzYWJsZWQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiaGFuZGxlQ2xpY2siLCJwcmV2U3RhdGUiLCJjcmVhdGVFbGVtZW50Iiwib25DbGljayIsIkNvbXBvbmVudCIsImNyZWF0ZVJvb3QiLCJBcHAiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=