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

var ToDoList = function ToDoList() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
      id: 1,
      name: "Rzecz do zrobienia",
      done: false
    }, {
      id: 2,
      name: "Rzecz do zrobienia 2",
      done: true
    }]),
    _useState2 = _slicedToArray(_useState, 2),
    task = _useState2[0],
    addTask = _useState2[1];
  var submitHandler = function submitHandler(e) {
    e.preventDefault();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "toDoList"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "header",
    onSubmit: submitHandler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Twoja lista zada\u0144"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    placeholder: "np. Zrobi\u0107 zakupy"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "submit",
    className: "btn-add",
    value: "Dodaj"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, task.map(function (task) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: task.id,
      className: task.done ? "done" : " "
    }, task.name);
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDoList);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4f54deeae2d4b1346aba")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lMjU3YWNlODk2MzVhMTBjMGU4OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxJQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFTO0VBQ25CLElBQUFDLFNBQUEsR0FBd0JGLCtDQUFRLENBQUMsQ0FBQztNQUMxQkcsRUFBRSxFQUFFLENBQUM7TUFDTEMsSUFBSSxFQUFFLG9CQUFvQjtNQUMxQkMsSUFBSSxFQUFFO0lBQ1YsQ0FBQyxFQUNHO01BQ0lGLEVBQUUsRUFBRSxDQUFDO01BQ0xDLElBQUksRUFBRSxzQkFBc0I7TUFDNUJDLElBQUksRUFBRTtJQUNWLENBQUMsQ0FDVCxDQUFDO0lBQUFDLFVBQUEsR0FBQUMsY0FBQSxDQUFBTCxTQUFBO0lBVk1NLElBQUksR0FBQUYsVUFBQTtJQUFFRyxPQUFPLEdBQUFILFVBQUE7RUFZcEIsSUFBTUksYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFJQyxDQUFDLEVBQUs7SUFDekJBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7RUFFdEIsQ0FBQztFQUVELG9CQUNJYiwwREFBQTtJQUFLZSxTQUFTLEVBQUM7RUFBVSxnQkFDckJmLDBEQUFBO0lBQU1lLFNBQVMsRUFBQyxRQUFRO0lBQUNDLFFBQVEsRUFBRUw7RUFBYyxnQkFDN0NYLDBEQUFBLGFBQUksd0JBQXFCLENBQUMsZUFDMUJBLDBEQUFBO0lBQU9pQixJQUFJLEVBQUMsTUFBTTtJQUFDQyxXQUFXLEVBQUM7RUFBbUIsQ0FBQyxDQUFDLGVBQ3BEbEIsMERBQUE7SUFBT2lCLElBQUksRUFBQyxRQUFRO0lBQUNGLFNBQVMsRUFBQyxTQUFTO0lBQUNJLEtBQUssRUFBQztFQUFPLENBQVEsQ0FDNUQsQ0FBQyxlQUVQbkIsMERBQUEsYUFDS1MsSUFBSSxDQUFDVyxHQUFHLENBQUMsVUFBQVgsSUFBSSxFQUFJO0lBQ2Qsb0JBQU9ULDBEQUFBO01BQUlxQixHQUFHLEVBQUVaLElBQUksQ0FBQ0wsRUFBRztNQUFDVyxTQUFTLEVBQUVOLElBQUksQ0FBQ0gsSUFBSSxHQUFHLE1BQU0sR0FBRztJQUFJLEdBQUdHLElBQUksQ0FBQ0osSUFBUyxDQUFDO0VBQ25GLENBQUMsQ0FDRCxDQUNILENBQUM7QUFHZCxDQUFDO0FBRUQsaUVBQWVILFFBQVE7Ozs7Ozs7O1VDdEN2QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEwX0R6aWVuXzE2LTE3LzAxX0Zvcm11bGFyemUvMDRfWmFkYW5pZV80L2pzL1RvRG9MaXN0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgVG9Eb0xpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgW3Rhc2ssIGFkZFRhc2tdID0gdXNlU3RhdGUoW3tcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgbmFtZTogXCJSemVjeiBkbyB6cm9iaWVuaWFcIixcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJSemVjeiBkbyB6cm9iaWVuaWEgMlwiLFxuICAgICAgICAgICAgICAgIGRvbmU6IHRydWVcbiAgICAgICAgICAgIH1dXG4gICAgKVxuXG4gICAgY29uc3Qgc3VibWl0SGFuZGxlciA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9Eb0xpc3RcIj5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImhlYWRlclwiIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cbiAgICAgICAgICAgICAgICA8aDI+VHdvamEgbGlzdGEgemFkYcWEPC9oMj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIm5wLiBacm9iacSHIHpha3VweVwiLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0bi1hZGRcIiB2YWx1ZT1cIkRvZGFqXCI+PC9pbnB1dD5cbiAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHt0YXNrLm1hcCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e3Rhc2suaWR9IGNsYXNzTmFtZT17dGFzay5kb25lID8gXCJkb25lXCIgOiBcIiBcIn0gPnt0YXNrLm5hbWV9PC9saT5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvRG9MaXN0OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjRmNTRkZWVhZTJkNGIxMzQ2YWJhXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJUb0RvTGlzdCIsIl91c2VTdGF0ZSIsImlkIiwibmFtZSIsImRvbmUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ0YXNrIiwiYWRkVGFzayIsInN1Ym1pdEhhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm1hcCIsImtleSJdLCJzb3VyY2VSb290IjoiIn0=