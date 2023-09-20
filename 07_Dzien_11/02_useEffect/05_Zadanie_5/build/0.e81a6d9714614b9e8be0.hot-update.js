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
    if (isRunning) {
      var _interval = setInterval(function () {
        setTime(function (prevState) {
          return prevState + 1;
        });
      }, 1000);
    } else {
      return function () {
        clearInterval(interval);
      };
    }
  }, []);
  var handleStop = function handleStop() {
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
/******/ 	__webpack_require__.h = () => ("16f7165db602ac7d1298")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lODFhNmQ5NzE0NjE0YjllOGJlMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUVqRCxJQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQSxFQUFTO0VBQ3BCLElBQUFDLFNBQUEsR0FBd0JGLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUFHLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTVCRyxJQUFJLEdBQUFGLFVBQUE7SUFBRUcsT0FBTyxHQUFBSCxVQUFBO0VBQ3BCLElBQUFJLFVBQUEsR0FBd0JQLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUFRLFVBQUEsR0FBQUosY0FBQSxDQUFBRyxVQUFBO0lBQTVCRSxJQUFJLEdBQUFELFVBQUE7SUFBRUUsT0FBTyxHQUFBRixVQUFBO0VBQ3BCLElBQUFHLFVBQUEsR0FBa0NYLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBQUFZLFVBQUEsR0FBQVIsY0FBQSxDQUFBTyxVQUFBO0lBQXpDRSxTQUFTLEdBQUFELFVBQUE7SUFBRUUsWUFBWSxHQUFBRixVQUFBO0VBRTlCYixnREFBUyxDQUFDLFlBQU07SUFFWixJQUFJYyxTQUFTLEVBQUU7TUFDWCxJQUFNRSxTQUFRLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO1FBQy9CVixPQUFPLENBQUMsVUFBQVcsU0FBUztVQUFBLE9BQUlBLFNBQVMsR0FBRyxDQUFDO1FBQUEsRUFBQztNQUN2QyxDQUFDLEVBQUUsSUFBSSxDQUFDO0lBQ1osQ0FBQyxNQUFNO01BQ0gsT0FBTyxZQUFNO1FBQ1RDLGFBQWEsQ0FBQ0gsUUFBUSxDQUFDO01BQzNCLENBQUM7SUFDTDtFQUNKLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixJQUFNSSxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQSxFQUFTO0lBQ3JCTCxZQUFZLENBQUMsS0FBSyxDQUFDO0VBQ3ZCLENBQUM7RUFFRCxvQkFDSWhCLDBEQUFBLDJCQUNJQSwwREFBQSxhQUFJLFFBQU0sRUFBQ08sSUFBSSxFQUFDLElBQU0sQ0FBQyxlQUN2QlAsMERBQUEsaUJBQVEsS0FBVyxDQUFDLGVBQ3BCQSwwREFBQTtJQUFRdUIsT0FBTyxFQUFFRjtFQUFXLEdBQUMsTUFBWSxDQUFDLGVBQzFDckIsMERBQUEsaUJBQVEsT0FBYSxDQUFDLGVBQ3RCQSwwREFBQSxpQkFBUSxPQUFhLENBQUMsZUFDdEJBLDBEQUFBLFdBQVEsQ0FDUCxDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlRyxTQUFTOzs7Ozs7OztVQ3BDeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wN19Eemllbl8xMS8wMl91c2VFZmZlY3QvMDVfWmFkYW5pZV81L2pzL1N0b3B3YXRjaC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU3RvcHdhdGNoID0gKCkgPT4ge1xuICAgIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtsYXBzLCBzZXRMYXBzXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtpc1J1bm5pbmcsIHNldElzUnVubmluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICAgICAgaWYgKGlzUnVubmluZykge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZShwcmV2U3RhdGUgPT4gcHJldlN0YXRlICsgMSk7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBoYW5kbGVTdG9wID0gKCkgPT4ge1xuICAgICAgICBzZXRJc1J1bm5pbmcoZmFsc2UpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+VGltZToge3RpbWV9IHM8L2gxPlxuICAgICAgICAgICAgPGJ1dHRvbj5MYXA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU3RvcH0+U3RvcDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbj5SZXNldDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbj5TdGFydDwvYnV0dG9uPlxuICAgICAgICAgICAgPHVsPjwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdG9wd2F0Y2g7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMTZmNzE2NWRiNjAyYWM3ZDEyOThcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlN0b3B3YXRjaCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInRpbWUiLCJzZXRUaW1lIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJsYXBzIiwic2V0TGFwcyIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiaXNSdW5uaW5nIiwic2V0SXNSdW5uaW5nIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInByZXZTdGF0ZSIsImNsZWFySW50ZXJ2YWwiLCJoYW5kbGVTdG9wIiwiY3JlYXRlRWxlbWVudCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9