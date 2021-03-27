webpackHotUpdate_N_E("pages/vehicles",{

/***/ "./pages/vehicles/index.js":
/*!*********************************!*\
  !*** ./pages/vehicles/index.js ***!
  \*********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_JoanJeremiah_Documents_Practice_next_projects_sw_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_JoanJeremiah_Documents_Practice_next_projects_sw_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_JoanJeremiah_Documents_Practice_next_projects_sw_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_JoanJeremiah_Documents_Practice_next_projects_sw_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_JoanJeremiah_Documents_Practice_next_projects_sw_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Components_Vehicle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Components/Vehicle */ "./Components/Vehicle.js");






var _jsxFileName = "C:\\Users\\JoanJeremiah\\Documents\\Practice\\next_projects\\sw-app\\pages\\vehicles\\index.js";


function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_JoanJeremiah_Documents_Practice_next_projects_sw_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_JoanJeremiah_Documents_Practice_next_projects_sw_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_JoanJeremiah_Documents_Practice_next_projects_sw_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


 //Need to add pagination

var Vehicles = /*#__PURE__*/function (_React$Component) {
  Object(C_Users_JoanJeremiah_Documents_Practice_next_projects_sw_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Vehicles, _React$Component);

  var _super = _createSuper(Vehicles);

  function Vehicles() {
    Object(C_Users_JoanJeremiah_Documents_Practice_next_projects_sw_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Vehicles);

    return _super.apply(this, arguments);
  }

  Object(C_Users_JoanJeremiah_Documents_Practice_next_projects_sw_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Vehicles, [{
    key: "render",
    value: function render() {
      var _this = this;

      var vehicles = this.props.vehicles;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-2264910343" + " " + "container",
        children: [vehicles.map(function (vehicle, i) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_Vehicle__WEBPACK_IMPORTED_MODULE_8__["default"], {
            info: vehicle,
            id: i + 1
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 25
          }, _this);
        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
          id: "2264910343",
          children: ".container.jsx-2264910343{width:90vw;margin:3vmin auto;display:grid;grid-template-columns:auto auto auto auto;row-gap:3vmin;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSm9hbkplcmVtaWFoXFxEb2N1bWVudHNcXFByYWN0aWNlXFxuZXh0X3Byb2plY3RzXFxzdy1hcHBcXHBhZ2VzXFx2ZWhpY2xlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUI0QixBQUdvQyxXQUNPLGtCQUNMLGFBQzZCLDBDQUM1QixjQUNsQiIsImZpbGUiOiJDOlxcVXNlcnNcXEpvYW5KZXJlbWlhaFxcRG9jdW1lbnRzXFxQcmFjdGljZVxcbmV4dF9wcm9qZWN0c1xcc3ctYXBwXFxwYWdlc1xcdmVoaWNsZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFZlaGljbGUgZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9WZWhpY2xlJztcclxuXHJcblxyXG4vL05lZWQgdG8gYWRkIHBhZ2luYXRpb25cclxuXHJcblxyXG5jbGFzcyBWZWhpY2xlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHsgICBcclxuICAgIFxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3Qge3ZlaGljbGVzfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAge3ZlaGljbGVzLm1hcCgodmVoaWNsZSxpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VmVoaWNsZSBpbmZvPXt2ZWhpY2xlfSBpZD17aSsxfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTB2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAzdm1pbiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdy1nYXA6IDN2bWluOyBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9zd2FwaS5kZXYvYXBpL3ZlaGljbGVzYCk7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICB2ZWhpY2xlczogZGF0YS5yZXN1bHRzXHJcbiAgICAgICB9LFxyXG4gICAgICAgcmV2YWxpZGF0ZTogMVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmVoaWNsZXM7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\JoanJeremiah\\\\Documents\\\\Practice\\\\next_projects\\\\sw-app\\\\pages\\\\vehicles\\\\index.js */"
        }, void 0, false, void 0, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }, this);
    }
  }]);

  return Vehicles;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Vehicles);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmVoaWNsZXMvaW5kZXguanMiXSwibmFtZXMiOlsiVmVoaWNsZXMiLCJ2ZWhpY2xlcyIsInByb3BzIiwibWFwIiwidmVoaWNsZSIsImkiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBS0E7O0lBR01BLFE7Ozs7Ozs7Ozs7Ozs7NkJBRU07QUFBQTs7QUFBQSxVQUNHQyxRQURILEdBQ2UsS0FBS0MsS0FEcEIsQ0FDR0QsUUFESDtBQUVKLDBCQUNJO0FBQUEsNENBQWUsV0FBZjtBQUFBLG1CQUNLQSxRQUFRLENBQUNFLEdBQVQsQ0FBYSxVQUFDQyxPQUFELEVBQVNDLENBQVQsRUFBZTtBQUN6Qiw4QkFDSSxxRUFBQywyREFBRDtBQUFTLGdCQUFJLEVBQUVELE9BQWY7QUFBd0IsY0FBRSxFQUFFQyxDQUFDLEdBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESjtBQUdILFNBSkEsQ0FETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQWtCSDs7OztFQXRCa0JDLDRDQUFLLENBQUNDLFM7OztBQW9DZFAsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmVoaWNsZXMuOTI0YzkyZWRlYTk5NzNkN2QxYzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBWZWhpY2xlIGZyb20gJy4uLy4uL0NvbXBvbmVudHMvVmVoaWNsZSc7XHJcblxyXG5cclxuLy9OZWVkIHRvIGFkZCBwYWdpbmF0aW9uXHJcblxyXG5cclxuY2xhc3MgVmVoaWNsZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7ICAgXHJcbiAgICBcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHt2ZWhpY2xlc30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIHt2ZWhpY2xlcy5tYXAoKHZlaGljbGUsaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFZlaGljbGUgaW5mbz17dmVoaWNsZX0gaWQ9e2krMX0gLz5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogM3ZtaW4gYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3ctZ2FwOiAzdm1pbjsgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vc3dhcGkuZGV2L2FwaS92ZWhpY2xlc2ApO1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgdmVoaWNsZXM6IGRhdGEucmVzdWx0c1xyXG4gICAgICAgfSxcclxuICAgICAgIHJldmFsaWRhdGU6IDFcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZlaGljbGVzOyJdLCJzb3VyY2VSb290IjoiIn0=