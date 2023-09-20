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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
    var _e$target = e.target,
      name = _e$target.name,
      done = _e$target.done,
      value = _e$target.value;
    addTask(function (prevState) {
      var _objectSpread2;
      return _objectSpread(_objectSpread({}, prevState), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, name, value), _defineProperty(_objectSpread2, done, false), _objectSpread2));
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
/******/ 	__webpack_require__.h = () => ("1ac35118a223bb10b515")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42Yzc5MDNhMDgzYmU3MTk0N2Y5MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxJQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFTO0VBQ25CLElBQUFDLFNBQUEsR0FBd0JGLCtDQUFRLENBQUMsQ0FBQztNQUMxQkcsRUFBRSxFQUFFLENBQUM7TUFDTEMsSUFBSSxFQUFFLG9CQUFvQjtNQUMxQkMsSUFBSSxFQUFFO0lBQ1YsQ0FBQyxFQUNHO01BQ0lGLEVBQUUsRUFBRSxDQUFDO01BQ0xDLElBQUksRUFBRSxzQkFBc0I7TUFDNUJDLElBQUksRUFBRTtJQUNWLENBQUMsQ0FDVCxDQUFDO0lBQUFDLFVBQUEsR0FBQUMsY0FBQSxDQUFBTCxTQUFBO0lBVk1NLElBQUksR0FBQUYsVUFBQTtJQUFFRyxPQUFPLEdBQUFILFVBQUE7RUFZcEIsSUFBTUksYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFJQyxDQUFDLEVBQUs7SUFDekJBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFDbEIsSUFBQUMsU0FBQSxHQUF5QkYsQ0FBQyxDQUFDRyxNQUFNO01BQTNCVixJQUFJLEdBQUFTLFNBQUEsQ0FBSlQsSUFBSTtNQUFFQyxJQUFJLEdBQUFRLFNBQUEsQ0FBSlIsSUFBSTtNQUFFVSxLQUFLLEdBQUFGLFNBQUEsQ0FBTEUsS0FBSztJQUN2Qk4sT0FBTyxDQUFDLFVBQUFPLFNBQVMsRUFBSTtNQUFBLElBQUFDLGNBQUE7TUFDakIsT0FBQUMsYUFBQSxDQUFBQSxhQUFBLEtBQ09GLFNBQVMsUUFBQUMsY0FBQSxPQUFBRSxlQUFBLENBQUFGLGNBQUEsRUFDWGIsSUFBSSxFQUFHVyxLQUFLLEdBQUFJLGVBQUEsQ0FBQUYsY0FBQSxFQUNaWixJQUFJLEVBQUcsS0FBSyxHQUFBWSxjQUFBO0lBRXJCLENBQUMsQ0FBQztFQUNOLENBQUM7RUFFRCxvQkFDSWxCLDBEQUFBO0lBQUtzQixTQUFTLEVBQUM7RUFBVSxnQkFDckJ0QiwwREFBQTtJQUFNc0IsU0FBUyxFQUFDLFFBQVE7SUFBQ0MsUUFBUSxFQUFFWjtFQUFjLGdCQUM3Q1gsMERBQUEsYUFBSSx3QkFBcUIsQ0FBQyxlQUMxQkEsMERBQUE7SUFBT3dCLElBQUksRUFBQyxNQUFNO0lBQUNDLFdBQVcsRUFBQyx3QkFBbUI7SUFBQ3BCLElBQUksRUFBQyxNQUFNO0lBQUNXLEtBQUssRUFBRVAsSUFBSSxDQUFDSjtFQUFLLENBQUUsQ0FBQyxlQUNuRkwsMERBQUE7SUFBT3dCLElBQUksRUFBQyxRQUFRO0lBQUNGLFNBQVMsRUFBQyxTQUFTO0lBQUNOLEtBQUssRUFBQztFQUFPLENBQVEsQ0FDNUQsQ0FBQyxlQUVQaEIsMERBQUEsYUFDS1MsSUFBSSxDQUFDaUIsR0FBRyxDQUFDLFVBQUFqQixJQUFJLEVBQUk7SUFDZCxvQkFBT1QsMERBQUE7TUFBSTJCLEdBQUcsRUFBRWxCLElBQUksQ0FBQ0wsRUFBRztNQUFDa0IsU0FBUyxFQUFFYixJQUFJLENBQUNILElBQUksR0FBRyxNQUFNLEdBQUc7SUFBSSxHQUFHRyxJQUFJLENBQUNKLElBQVMsQ0FBQztFQUNuRixDQUFDLENBQ0QsQ0FDSCxDQUFDO0FBR2QsQ0FBQztBQUVELGlFQUFlSCxRQUFROzs7Ozs7OztVQzdDdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMF9Eemllbl8xNi0xNy8wMV9Gb3JtdWxhcnplLzA0X1phZGFuaWVfNC9qcy9Ub0RvTGlzdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFRvRG9MaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IFt0YXNrLCBhZGRUYXNrXSA9IHVzZVN0YXRlKFt7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIG5hbWU6IFwiUnplY3ogZG8genJvYmllbmlhXCIsXG4gICAgICAgICAgICBkb25lOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiUnplY3ogZG8genJvYmllbmlhIDJcIixcbiAgICAgICAgICAgICAgICBkb25lOiB0cnVlXG4gICAgICAgICAgICB9XVxuICAgIClcblxuICAgIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0e25hbWUsIGRvbmUsIHZhbHVlfT1lLnRhcmdldDtcbiAgICAgICAgYWRkVGFzayhwcmV2U3RhdGUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgICAgICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICBbZG9uZV06IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b0RvTGlzdFwiPlxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiaGVhZGVyXCIgb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxuICAgICAgICAgICAgICAgIDxoMj5Ud29qYSBsaXN0YSB6YWRhxYQ8L2gyPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwibnAuIFpyb2JpxIcgemFrdXB5XCIgbmFtZT1cIm5hbWVcIiB2YWx1ZT17dGFzay5uYW1lfSAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuLWFkZFwiIHZhbHVlPVwiRG9kYWpcIj48L2lucHV0PlxuICAgICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3Rhc2subWFwKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17dGFzay5pZH0gY2xhc3NOYW1lPXt0YXNrLmRvbmUgPyBcImRvbmVcIiA6IFwiIFwifSA+e3Rhc2submFtZX08L2xpPlxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9Eb0xpc3Q7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMWFjMzUxMThhMjIzYmIxMGI1MTVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlRvRG9MaXN0IiwiX3VzZVN0YXRlIiwiaWQiLCJuYW1lIiwiZG9uZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInRhc2siLCJhZGRUYXNrIiwic3VibWl0SGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIl9lJHRhcmdldCIsInRhcmdldCIsInZhbHVlIiwicHJldlN0YXRlIiwiX29iamVjdFNwcmVhZDIiLCJfb2JqZWN0U3ByZWFkIiwiX2RlZmluZVByb3BlcnR5IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwibWFwIiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==