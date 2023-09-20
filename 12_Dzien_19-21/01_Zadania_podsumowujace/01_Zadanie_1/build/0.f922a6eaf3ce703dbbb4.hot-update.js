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

var WhoIsPresent = function WhoIsPresent() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(['Anna Kowalska', 'Jan Kowalski', 'Maciej von Handerburg', 'Jurand ze Spychowa']),
    _useState2 = _slicedToArray(_useState, 2),
    name = _useState2[0],
    setName = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    item = _useState4[0],
    setItem = _useState4[1];
  var clickHandler = function clickHandler(e) {
    setItem(function (prevState) {
      return [].concat(_toConsumableArray(prevState), [e.target.value]);
    });
    var index = name.indexOf(e.target.value);
    setName(name.splice(index, 1));
    e.preventDefault();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", null, name.map(function (el) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      key: el,
      onClick: function onClick(e) {
        return clickHandler(e);
      }
    }, el);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, item.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, item);
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WhoIsPresent);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("752387cb8fb7f15439b6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mOTIyYTZlYWYzY2U3MDNkYmJiNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFFdEMsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUEsRUFBUztFQUN2QixJQUFBQyxTQUFBLEdBQXFCRiwrQ0FBUSxDQUN6QixDQUFDLGVBQWUsRUFBRSxjQUFjLEVBQUUsdUJBQXVCLEVBQUUsb0JBQW9CLENBQ3ZGLENBQUM7SUFBQUcsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFGU0csSUFBSSxHQUFBRixVQUFBO0lBQUVHLE9BQU8sR0FBQUgsVUFBQTtFQUduQixJQUFBSSxVQUFBLEdBQXFCUCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBUSxVQUFBLEdBQUFKLGNBQUEsQ0FBQUcsVUFBQTtJQUEzQkUsSUFBSSxHQUFBRCxVQUFBO0lBQUVFLE9BQU8sR0FBQUYsVUFBQTtFQUVuQixJQUFNRyxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSUMsQ0FBQyxFQUFLO0lBQ3hCRixPQUFPLENBQUMsVUFBQUcsU0FBUztNQUFBLFVBQUFDLE1BQUEsQ0FBQUMsa0JBQUEsQ0FBUUYsU0FBUyxJQUFFRCxDQUFDLENBQUNJLE1BQU0sQ0FBQ0MsS0FBSztJQUFBLENBQUMsQ0FBQztJQUNwRCxJQUFNQyxLQUFLLEdBQUNiLElBQUksQ0FBQ2MsT0FBTyxDQUFDUCxDQUFDLENBQUNJLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0lBQ3hDWCxPQUFPLENBQUNELElBQUksQ0FBQ2UsTUFBTSxDQUFDRixLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0JOLENBQUMsQ0FBQ1MsY0FBYyxDQUFDLENBQUM7RUFDdEIsQ0FBQztFQUVELG9CQUNJdEIsMERBQUEsMkJBQ0lBLDBEQUFBLDRCQUNJQSwwREFBQSxpQkFDS00sSUFBSSxDQUFDa0IsR0FBRyxDQUFDLFVBQUFDLEVBQUUsRUFBSTtJQUNaLG9CQUFPekIsMERBQUE7TUFBUTBCLEdBQUcsRUFBRUQsRUFBRztNQUFDRSxPQUFPLEVBQUUsU0FBQUEsUUFBQWQsQ0FBQztRQUFBLE9BQUlELFlBQVksQ0FBQ0MsQ0FBQyxDQUFDO01BQUE7SUFBQyxHQUFFWSxFQUFXLENBQUM7RUFDeEUsQ0FBQyxDQUNHLENBQUMsZUFDVHpCLDBEQUFBLGFBQ0tVLElBQUksQ0FBQ2MsR0FBRyxDQUFDLFVBQUFkLElBQUksRUFBSTtJQUNkLG9CQUFPViwwREFBQSxhQUFLVSxJQUFTLENBQUM7RUFDMUIsQ0FBQyxDQUNELENBQ0YsQ0FDTCxDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlUixZQUFZOzs7Ozs7OztVQ2pDM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMl9Eemllbl8xOS0yMS8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDFfWmFkYW5pZV8xL2pzL1dob0lzUHJlc2VudC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFdob0lzUHJlc2VudCA9ICgpID0+IHtcbiAgICBjb25zdFtuYW1lLCBzZXROYW1lXT11c2VTdGF0ZShcbiAgICAgICAgWydBbm5hIEtvd2Fsc2thJywgJ0phbiBLb3dhbHNraScsICdNYWNpZWogdm9uIEhhbmRlcmJ1cmcnLCAnSnVyYW5kIHplIFNweWNob3dhJ11cbilcbiAgICBjb25zdFtpdGVtLCBzZXRJdGVtXT11c2VTdGF0ZShbXSlcblxuICAgIGNvbnN0IGNsaWNrSGFuZGxlciA9IChlKSA9PiB7XG4gICAgICAgIHNldEl0ZW0ocHJldlN0YXRlID0+IFsuLi5wcmV2U3RhdGUsIGUudGFyZ2V0LnZhbHVlXSlcbiAgICAgICAgY29uc3QgaW5kZXg9bmFtZS5pbmRleE9mKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgc2V0TmFtZShuYW1lLnNwbGljZShpbmRleCwxKSlcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICA8c2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICB7bmFtZS5tYXAoZWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24ga2V5PXtlbH0gb25DbGljaz17ZSA9PiBjbGlja0hhbmRsZXIoZSl9PntlbH08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpPntpdGVtfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXaG9Jc1ByZXNlbnQ7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzUyMzg3Y2I4ZmI3ZjE1NDM5YjZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIldob0lzUHJlc2VudCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIm5hbWUiLCJzZXROYW1lIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJpdGVtIiwic2V0SXRlbSIsImNsaWNrSGFuZGxlciIsImUiLCJwcmV2U3RhdGUiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJ0YXJnZXQiLCJ2YWx1ZSIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIm1hcCIsImVsIiwia2V5Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=