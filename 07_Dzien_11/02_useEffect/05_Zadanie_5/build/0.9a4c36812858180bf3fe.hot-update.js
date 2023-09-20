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

var Stopwatch = function Stopwatch() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    time = _useState2[0],
    setTime = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    laps = _useState4[0],
    setLaps = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    isRunning = _useState6[0],
    setIsRunning = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isRunning) {
      var interval = setInterval(function () {
        setTime(function (prevState) {
          return prevState + 1;
        });
      }, 1000);
      return function () {
        clearInterval(interval);
      };
    } else {
      setTime(function (prevState) {
        return prevState;
      });
    }
  }, [isRunning]);
  var handleStop = function handleStop() {
    setIsRunning(function (prevState) {
      return !prevState;
    });
  };
  var handleLaps = function handleLaps() {
    setLaps(function (prevState) {
      return [].concat(_toConsumableArray(prevState), [time]);
    });
  };
  var handleReset = function handleReset() {
    setLaps([]);
    setTime(0);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Time: ", time, " s"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleLaps
  }, "Lap"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleStop
  }, "Stop"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Reset"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleStop
  }, "Start"), laps.map(function (lap) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, lap);
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stopwatch);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("28a9225126e467c4b5c2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45YTRjMzY4MTI4NTgxODBiZjNmZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFFakQsSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUEsRUFBUztFQUNwQixJQUFBQyxTQUFBLEdBQXdCRiwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBRyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUE1QkcsSUFBSSxHQUFBRixVQUFBO0lBQUVHLE9BQU8sR0FBQUgsVUFBQTtFQUNwQixJQUFBSSxVQUFBLEdBQXdCUCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBUSxVQUFBLEdBQUFKLGNBQUEsQ0FBQUcsVUFBQTtJQUE3QkUsSUFBSSxHQUFBRCxVQUFBO0lBQUVFLE9BQU8sR0FBQUYsVUFBQTtFQUNwQixJQUFBRyxVQUFBLEdBQWtDWCwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUFBWSxVQUFBLEdBQUFSLGNBQUEsQ0FBQU8sVUFBQTtJQUF6Q0UsU0FBUyxHQUFBRCxVQUFBO0lBQUVFLFlBQVksR0FBQUYsVUFBQTtFQUU5QmIsZ0RBQVMsQ0FBQyxZQUFNO0lBQ1osSUFBSWMsU0FBUyxFQUFFO01BQ1gsSUFBTUUsUUFBUSxHQUFHQyxXQUFXLENBQUMsWUFBTTtRQUMvQlYsT0FBTyxDQUFDLFVBQUFXLFNBQVM7VUFBQSxPQUFJQSxTQUFTLEdBQUcsQ0FBQztRQUFBLEVBQUM7TUFDdkMsQ0FBQyxFQUFFLElBQUksQ0FBQztNQUNSLE9BQU8sWUFBTTtRQUNUQyxhQUFhLENBQUNILFFBQVEsQ0FBQztNQUMzQixDQUFDO0lBQ0wsQ0FBQyxNQUFNO01BQ0hULE9BQU8sQ0FBQyxVQUFBVyxTQUFTO1FBQUEsT0FBSUEsU0FBUztNQUFBLEVBQUM7SUFDbkM7RUFDSixDQUFDLEVBQUUsQ0FBQ0osU0FBUyxDQUFDLENBQUM7RUFFZixJQUFNTSxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQSxFQUFTO0lBQ3JCTCxZQUFZLENBQUMsVUFBQUcsU0FBUztNQUFBLE9BQUksQ0FBQ0EsU0FBUztJQUFBLEVBQUM7RUFDekMsQ0FBQztFQUVELElBQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBLEVBQVM7SUFDckJWLE9BQU8sQ0FBQyxVQUFBTyxTQUFTO01BQUEsVUFBQUksTUFBQSxDQUFBQyxrQkFBQSxDQUFRTCxTQUFTLElBQUVaLElBQUk7SUFBQSxDQUFDLENBQUM7RUFDOUMsQ0FBQztFQUVELElBQU1rQixXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFTO0lBQ3RCYixPQUFPLENBQUMsRUFBRSxDQUFDO0lBQ1hKLE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFDZCxDQUFDO0VBRUQsb0JBQ0lSLDBEQUFBLDJCQUNJQSwwREFBQSxhQUFJLFFBQU0sRUFBQ08sSUFBSSxFQUFDLElBQU0sQ0FBQyxlQUN2QlAsMERBQUE7SUFBUTJCLE9BQU8sRUFBRUw7RUFBVyxHQUFDLEtBQVcsQ0FBQyxlQUN6Q3RCLDBEQUFBO0lBQVEyQixPQUFPLEVBQUVOO0VBQVcsR0FBQyxNQUFZLENBQUMsZUFDMUNyQiwwREFBQSxpQkFBUSxPQUFhLENBQUMsZUFDdEJBLDBEQUFBO0lBQVEyQixPQUFPLEVBQUVOO0VBQVcsR0FBQyxPQUFhLENBQUMsRUFDMUNWLElBQUksQ0FBQ2lCLEdBQUcsQ0FBQyxVQUFBQyxHQUFHLEVBQUk7SUFDYixvQkFBTzdCLDBEQUFBLGFBQUs2QixHQUFRLENBQUM7RUFDekIsQ0FBQyxDQUNBLENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWUxQixTQUFTOzs7Ozs7OztVQy9DeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wN19Eemllbl8xMS8wMl91c2VFZmZlY3QvMDVfWmFkYW5pZV81L2pzL1N0b3B3YXRjaC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU3RvcHdhdGNoID0gKCkgPT4ge1xuICAgIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtsYXBzLCBzZXRMYXBzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbaXNSdW5uaW5nLCBzZXRJc1J1bm5pbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoaXNSdW5uaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUgKyAxKTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWUocHJldlN0YXRlID0+IHByZXZTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9LCBbaXNSdW5uaW5nXSk7XG5cbiAgICBjb25zdCBoYW5kbGVTdG9wID0gKCkgPT4ge1xuICAgICAgICBzZXRJc1J1bm5pbmcocHJldlN0YXRlID0+ICFwcmV2U3RhdGUpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUxhcHMgPSAoKSA9PiB7XG4gICAgICAgIHNldExhcHMocHJldlN0YXRlID0+IFsuLi5wcmV2U3RhdGUsIHRpbWVdKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVJlc2V0ID0gKCkgPT4ge1xuICAgICAgICBzZXRMYXBzKFtdKTtcbiAgICAgICAgc2V0VGltZSgwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPlRpbWU6IHt0aW1lfSBzPC9oMT5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTGFwc30+TGFwPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN0b3B9PlN0b3A8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24+UmVzZXQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU3RvcH0+U3RhcnQ8L2J1dHRvbj5cbiAgICAgICAgICAgIHtsYXBzLm1hcChsYXAgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8dWw+e2xhcH08L3VsPlxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdG9wd2F0Y2g7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMjhhOTIyNTEyNmU0NjdjNGI1YzJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlN0b3B3YXRjaCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInRpbWUiLCJzZXRUaW1lIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJsYXBzIiwic2V0TGFwcyIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiaXNSdW5uaW5nIiwic2V0SXNSdW5uaW5nIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInByZXZTdGF0ZSIsImNsZWFySW50ZXJ2YWwiLCJoYW5kbGVTdG9wIiwiaGFuZGxlTGFwcyIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsImhhbmRsZVJlc2V0IiwiY3JlYXRlRWxlbWVudCIsIm9uQ2xpY2siLCJtYXAiLCJsYXAiXSwic291cmNlUm9vdCI6IiJ9