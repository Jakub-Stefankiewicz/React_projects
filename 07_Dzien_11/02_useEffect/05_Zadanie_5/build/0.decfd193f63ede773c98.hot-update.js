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

var Stopwatch = function Stopwatch() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    time = _useState2[0],
    setTime = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    laps = _useState4[0],
    setLaps = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    isRunning = _useState6[0],
    setIsRunning = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var interval = setInterval(function () {
      setTime(function (prevState) {
        return prevState + 1;
      });
    }, 1000);
    // return () => {
    //     clearInterval(interval);
    // }
  }, []);
  var handleStop = function handleStop() {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
      return function () {
        clearInterval();
      };
    }, []);
    setIsRunning(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Time: ", time, " s"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Lap"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleStop
  }, "Stop"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Reset"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Start"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stopwatch);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b398ded25210e8f1d3ff")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kZWNmZDE5M2Y2M2VkZTc3M2M5OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUVqRCxJQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQSxFQUFTO0VBQ3BCLElBQUFDLFNBQUEsR0FBd0JGLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUFHLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTVCRyxJQUFJLEdBQUFGLFVBQUE7SUFBRUcsT0FBTyxHQUFBSCxVQUFBO0VBQ3BCLElBQUFJLFVBQUEsR0FBd0JQLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUFRLFVBQUEsR0FBQUosY0FBQSxDQUFBRyxVQUFBO0lBQTVCRSxJQUFJLEdBQUFELFVBQUE7SUFBRUUsT0FBTyxHQUFBRixVQUFBO0VBQ3BCLElBQUFHLFVBQUEsR0FBa0NYLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBQUFZLFVBQUEsR0FBQVIsY0FBQSxDQUFBTyxVQUFBO0lBQXpDRSxTQUFTLEdBQUFELFVBQUE7SUFBRUUsWUFBWSxHQUFBRixVQUFBO0VBRTlCYixnREFBUyxDQUFDLFlBQU07SUFDUixJQUFNZ0IsUUFBUSxHQUFHQyxXQUFXLENBQUMsWUFBTTtNQUMvQlYsT0FBTyxDQUFDLFVBQUFXLFNBQVM7UUFBQSxPQUFJQSxTQUFTLEdBQUcsQ0FBQztNQUFBLEVBQUM7SUFDdkMsQ0FBQyxFQUFFLElBQUksQ0FBQztJQUNSO0lBQ0E7SUFDQTtFQUNSLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQSxFQUFTO0lBQ3JCbkIsZ0RBQVMsQ0FBQyxZQUFNO01BQ1osT0FBTyxZQUFNO1FBQ1RvQixhQUFhLENBQUMsQ0FBQztNQUNuQixDQUFDO0lBQ0wsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUVOTCxZQUFZLENBQUMsS0FBSyxDQUFDO0VBQ3ZCLENBQUM7RUFFRCxvQkFDSWhCLDBEQUFBLDJCQUNJQSwwREFBQSxhQUFJLFFBQU0sRUFBQ08sSUFBSSxFQUFDLElBQU0sQ0FBQyxlQUN2QlAsMERBQUEsaUJBQVEsS0FBVyxDQUFDLGVBQ3BCQSwwREFBQTtJQUFRdUIsT0FBTyxFQUFFSDtFQUFXLEdBQUMsTUFBWSxDQUFDLGVBQzFDcEIsMERBQUEsaUJBQVEsT0FBYSxDQUFDLGVBQ3RCQSwwREFBQSxpQkFBUSxPQUFhLENBQUMsZUFDdEJBLDBEQUFBLFdBQVEsQ0FDUCxDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlRyxTQUFTOzs7Ozs7OztVQ3RDeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wN19Eemllbl8xMS8wMl91c2VFZmZlY3QvMDVfWmFkYW5pZV81L2pzL1N0b3B3YXRjaC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU3RvcHdhdGNoID0gKCkgPT4ge1xuICAgIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtsYXBzLCBzZXRMYXBzXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtpc1J1bm5pbmcsIHNldElzUnVubmluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUgKyAxKTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgLy8gcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBoYW5kbGVTdG9wID0gKCkgPT4ge1xuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW10pO1xuXG4gICAgICAgIHNldElzUnVubmluZyhmYWxzZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5UaW1lOiB7dGltZX0gczwvaDE+XG4gICAgICAgICAgICA8YnV0dG9uPkxhcDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdG9wfT5TdG9wPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uPlJlc2V0PC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uPlN0YXJ0PC9idXR0b24+XG4gICAgICAgICAgICA8dWw+PC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3B3YXRjaDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiMzk4ZGVkMjUyMTBlOGYxZDNmZlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU3RvcHdhdGNoIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwidGltZSIsInNldFRpbWUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImxhcHMiLCJzZXRMYXBzIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJpc1J1bm5pbmciLCJzZXRJc1J1bm5pbmciLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwicHJldlN0YXRlIiwiaGFuZGxlU3RvcCIsImNsZWFySW50ZXJ2YWwiLCJjcmVhdGVFbGVtZW50Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=