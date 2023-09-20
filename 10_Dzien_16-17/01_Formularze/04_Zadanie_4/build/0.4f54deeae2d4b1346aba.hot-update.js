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
    addTask(function (prevState) {
      var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "toDoList"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "header",
    onSubmit: submitHandler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Twoja lista zada\u0144"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    placeholder: "np. Zrobi\u0107 zakupy",
    name: "name",
    value: task.name
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
/******/ 	__webpack_require__.h = () => ("6c7903a083be71947f90")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40ZjU0ZGVlYWUyZDRiMTM0NmFiYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxJQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFTO0VBQ25CLElBQUFDLFNBQUEsR0FBd0JGLCtDQUFRLENBQUMsQ0FBQztNQUMxQkcsRUFBRSxFQUFFLENBQUM7TUFDTEMsSUFBSSxFQUFFLG9CQUFvQjtNQUMxQkMsSUFBSSxFQUFFO0lBQ1YsQ0FBQyxFQUNHO01BQ0lGLEVBQUUsRUFBRSxDQUFDO01BQ0xDLElBQUksRUFBRSxzQkFBc0I7TUFDNUJDLElBQUksRUFBRTtJQUNWLENBQUMsQ0FDVCxDQUFDO0lBQUFDLFVBQUEsR0FBQUMsY0FBQSxDQUFBTCxTQUFBO0lBVk1NLElBQUksR0FBQUYsVUFBQTtJQUFFRyxPQUFPLEdBQUFILFVBQUE7RUFZcEIsSUFBTUksYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFJQyxDQUFDLEVBQUs7SUFDekJBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFDbEJILE9BQU8sQ0FBQyxVQUFBSSxTQUFTLEVBQUk7TUFDakIsSUFBQUMsU0FBQSxHQUFtQkgsQ0FBQyxDQUFDSSxNQUFNO1FBQXJCWCxJQUFJLEdBQUFVLFNBQUEsQ0FBSlYsSUFBSTtRQUFFWSxLQUFLLEdBQUFGLFNBQUEsQ0FBTEUsS0FBSztJQUNyQixDQUFDLENBQUM7RUFDTixDQUFDO0VBRUQsb0JBQ0lqQiwwREFBQTtJQUFLbUIsU0FBUyxFQUFDO0VBQVUsZ0JBQ3JCbkIsMERBQUE7SUFBTW1CLFNBQVMsRUFBQyxRQUFRO0lBQUNDLFFBQVEsRUFBRVQ7RUFBYyxnQkFDN0NYLDBEQUFBLGFBQUksd0JBQXFCLENBQUMsZUFDMUJBLDBEQUFBO0lBQU9xQixJQUFJLEVBQUMsTUFBTTtJQUFDQyxXQUFXLEVBQUMsd0JBQW1CO0lBQUNqQixJQUFJLEVBQUMsTUFBTTtJQUFDWSxLQUFLLEVBQUVSLElBQUksQ0FBQ0o7RUFBSyxDQUFFLENBQUMsZUFDbkZMLDBEQUFBO0lBQU9xQixJQUFJLEVBQUMsUUFBUTtJQUFDRixTQUFTLEVBQUMsU0FBUztJQUFDRixLQUFLLEVBQUM7RUFBTyxDQUFRLENBQzVELENBQUMsZUFFUGpCLDBEQUFBLGFBQ0tTLElBQUksQ0FBQ2MsR0FBRyxDQUFDLFVBQUFkLElBQUksRUFBSTtJQUNkLG9CQUFPVCwwREFBQTtNQUFJd0IsR0FBRyxFQUFFZixJQUFJLENBQUNMLEVBQUc7TUFBQ2UsU0FBUyxFQUFFVixJQUFJLENBQUNILElBQUksR0FBRyxNQUFNLEdBQUc7SUFBSSxHQUFHRyxJQUFJLENBQUNKLElBQVMsQ0FBQztFQUNuRixDQUFDLENBQ0QsQ0FDSCxDQUFDO0FBR2QsQ0FBQztBQUVELGlFQUFlSCxRQUFROzs7Ozs7OztVQ3hDdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMF9Eemllbl8xNi0xNy8wMV9Gb3JtdWxhcnplLzA0X1phZGFuaWVfNC9qcy9Ub0RvTGlzdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFRvRG9MaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IFt0YXNrLCBhZGRUYXNrXSA9IHVzZVN0YXRlKFt7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIG5hbWU6IFwiUnplY3ogZG8genJvYmllbmlhXCIsXG4gICAgICAgICAgICBkb25lOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiUnplY3ogZG8genJvYmllbmlhIDJcIixcbiAgICAgICAgICAgICAgICBkb25lOiB0cnVlXG4gICAgICAgICAgICB9XVxuICAgIClcblxuICAgIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGFkZFRhc2socHJldlN0YXRlID0+IHtcbiAgICAgICAgICAgIGNvbnN0e25hbWUsIHZhbHVlfT1lLnRhcmdldFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9Eb0xpc3RcIj5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImhlYWRlclwiIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cbiAgICAgICAgICAgICAgICA8aDI+VHdvamEgbGlzdGEgemFkYcWEPC9oMj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIm5wLiBacm9iacSHIHpha3VweVwiIG5hbWU9XCJuYW1lXCIgdmFsdWU9e3Rhc2submFtZX0gLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0bi1hZGRcIiB2YWx1ZT1cIkRvZGFqXCI+PC9pbnB1dD5cbiAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHt0YXNrLm1hcCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e3Rhc2suaWR9IGNsYXNzTmFtZT17dGFzay5kb25lID8gXCJkb25lXCIgOiBcIiBcIn0gPnt0YXNrLm5hbWV9PC9saT5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvRG9MaXN0OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjZjNzkwM2EwODNiZTcxOTQ3ZjkwXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJUb0RvTGlzdCIsIl91c2VTdGF0ZSIsImlkIiwibmFtZSIsImRvbmUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ0YXNrIiwiYWRkVGFzayIsInN1Ym1pdEhhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJwcmV2U3RhdGUiLCJfZSR0YXJnZXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm1hcCIsImtleSJdLCJzb3VyY2VSb290IjoiIn0=