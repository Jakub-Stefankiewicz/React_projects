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
    name.splice(index, 1);
    setName(name);
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
/******/ 	__webpack_require__.h = () => ("4470ec5713392a43b110")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43NTIzODdjYjhmYjdmMTU0MzliNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFFdEMsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUEsRUFBUztFQUN2QixJQUFBQyxTQUFBLEdBQXFCRiwrQ0FBUSxDQUN6QixDQUFDLGVBQWUsRUFBRSxjQUFjLEVBQUUsdUJBQXVCLEVBQUUsb0JBQW9CLENBQ3ZGLENBQUM7SUFBQUcsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFGU0csSUFBSSxHQUFBRixVQUFBO0lBQUVHLE9BQU8sR0FBQUgsVUFBQTtFQUduQixJQUFBSSxVQUFBLEdBQXFCUCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBUSxVQUFBLEdBQUFKLGNBQUEsQ0FBQUcsVUFBQTtJQUEzQkUsSUFBSSxHQUFBRCxVQUFBO0lBQUVFLE9BQU8sR0FBQUYsVUFBQTtFQUVuQixJQUFNRyxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSUMsQ0FBQyxFQUFLO0lBQ3hCRixPQUFPLENBQUMsVUFBQUcsU0FBUztNQUFBLFVBQUFDLE1BQUEsQ0FBQUMsa0JBQUEsQ0FBUUYsU0FBUyxJQUFFRCxDQUFDLENBQUNJLE1BQU0sQ0FBQ0MsS0FBSztJQUFBLENBQUMsQ0FBQztJQUNwRCxJQUFNQyxLQUFLLEdBQUNiLElBQUksQ0FBQ2MsT0FBTyxDQUFDUCxDQUFDLENBQUNJLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0lBQ3hDWixJQUFJLENBQUNlLE1BQU0sQ0FBQ0YsS0FBSyxFQUFDLENBQUMsQ0FBQztJQUNwQlosT0FBTyxDQUFDRCxJQUFJLENBQUM7SUFDYk8sQ0FBQyxDQUFDUyxjQUFjLENBQUMsQ0FBQztFQUN0QixDQUFDO0VBRUQsb0JBQ0l0QiwwREFBQSwyQkFDSUEsMERBQUEsNEJBQ0lBLDBEQUFBLGlCQUNLTSxJQUFJLENBQUNrQixHQUFHLENBQUMsVUFBQUMsRUFBRSxFQUFJO0lBQ1osb0JBQU96QiwwREFBQTtNQUFRMEIsR0FBRyxFQUFFRCxFQUFHO01BQUNFLE9BQU8sRUFBRSxTQUFBQSxRQUFBZCxDQUFDO1FBQUEsT0FBSUQsWUFBWSxDQUFDQyxDQUFDLENBQUM7TUFBQTtJQUFDLEdBQUVZLEVBQVcsQ0FBQztFQUN4RSxDQUFDLENBQ0csQ0FBQyxlQUNUekIsMERBQUEsYUFDS1UsSUFBSSxDQUFDYyxHQUFHLENBQUMsVUFBQWQsSUFBSSxFQUFJO0lBQ2Qsb0JBQU9WLDBEQUFBLGFBQUtVLElBQVMsQ0FBQztFQUMxQixDQUFDLENBQ0QsQ0FDRixDQUNMLENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWVSLFlBQVk7Ozs7Ozs7O1VDbEMzQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEyX0R6aWVuXzE5LTIxLzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllXzEvanMvV2hvSXNQcmVzZW50LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgV2hvSXNQcmVzZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0W25hbWUsIHNldE5hbWVdPXVzZVN0YXRlKFxuICAgICAgICBbJ0FubmEgS293YWxza2EnLCAnSmFuIEtvd2Fsc2tpJywgJ01hY2llaiB2b24gSGFuZGVyYnVyZycsICdKdXJhbmQgemUgU3B5Y2hvd2EnXVxuKVxuICAgIGNvbnN0W2l0ZW0sIHNldEl0ZW1dPXVzZVN0YXRlKFtdKVxuXG4gICAgY29uc3QgY2xpY2tIYW5kbGVyID0gKGUpID0+IHtcbiAgICAgICAgc2V0SXRlbShwcmV2U3RhdGUgPT4gWy4uLnByZXZTdGF0ZSwgZS50YXJnZXQudmFsdWVdKVxuICAgICAgICBjb25zdCBpbmRleD1uYW1lLmluZGV4T2YoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICBuYW1lLnNwbGljZShpbmRleCwxKTtcbiAgICAgICAgc2V0TmFtZShuYW1lKVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxzZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIHtuYW1lLm1hcChlbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiBrZXk9e2VsfSBvbkNsaWNrPXtlID0+IGNsaWNrSGFuZGxlcihlKX0+e2VsfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGk+e2l0ZW19PC9saT5cbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdob0lzUHJlc2VudDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0NDcwZWM1NzEzMzkyYTQzYjExMFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiV2hvSXNQcmVzZW50IiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwibmFtZSIsInNldE5hbWUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsIml0ZW0iLCJzZXRJdGVtIiwiY2xpY2tIYW5kbGVyIiwiZSIsInByZXZTdGF0ZSIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsInRhcmdldCIsInZhbHVlIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwicHJldmVudERlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwibWFwIiwiZWwiLCJrZXkiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==