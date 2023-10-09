"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["shared_components_bioCard_footer_index_js"],{

/***/ "./shared/components/bioCard/footer/index.js":
/*!***************************************************!*\
  !*** ./shared/components/bioCard/footer/index.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n// import style from './style.module.scss'\nconst IconCopy = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/*! import() */ \"shared_icons_iconCopy_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! @shared/icons/iconCopy */ \"./shared/icons/iconCopy/index.js\")), {\n    loadableGenerated: {\n        modules: [\n            \"../shared/components/bioCard/footer/index.js -> \" + \"@shared/icons/iconCopy\"\n        ]\n    },\n    ssr: false\n});\n_c = IconCopy;\nconst IconShare = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/*! import() */ \"shared_icons_iconShare_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! @shared/icons/iconShare */ \"./shared/icons/iconShare/index.js\")), {\n    loadableGenerated: {\n        modules: [\n            \"../shared/components/bioCard/footer/index.js -> \" + \"@shared/icons/iconShare\"\n        ]\n    },\n    ssr: false\n});\n_c1 = IconShare;\nfunction BioCardFooter(param) {\n    let { children , className =\"\" , text  } = param;\n    _s();\n    const [isNativeShare, setIsNativeShare] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (navigator.share) {\n            setIsNativeShare(true);\n        } else {\n            setIsNativeShare(false);\n        }\n    }, []);\n    async function handleCopy() {\n        try {\n            await navigator.clipboard.writeText(text);\n            alert(\"Copied\");\n        } catch (err) {\n            console.error(\"Failed to copy: \", err);\n        }\n    }\n    async function hadleShare() {\n        var _window_location, _window_location1;\n        const title = document.title;\n        const url = \"\".concat(window === null || window === void 0 ? void 0 : (_window_location = window.location) === null || _window_location === void 0 ? void 0 : _window_location.origin).concat(window === null || window === void 0 ? void 0 : (_window_location1 = window.location) === null || _window_location1 === void 0 ? void 0 : _window_location1.pathname);\n        try {\n            await navigator.share({\n                title,\n                url,\n                text\n            });\n        // alert('Thanks for Sharing!')\n        } catch (err) {\n            console.error(\"share error\", err);\n        // alert(`Couldn't share ${err}`)\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(className, \" b-footer d-flex\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"b-button\",\n                title: \"Copy\",\n                onClick: handleCopy,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IconCopy, {}, void 0, false, {\n                        fileName: \"/Users/yudiz/Documents/bio-finder/bio0-finder/shared/components/bioCard/footer/index.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    \"Copy\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yudiz/Documents/bio-finder/bio0-finder/shared/components/bioCard/footer/index.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"b-button\",\n                title: \"Share\",\n                onClick: hadleShare,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IconShare, {}, void 0, false, {\n                        fileName: \"/Users/yudiz/Documents/bio-finder/bio0-finder/shared/components/bioCard/footer/index.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    \"Share\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yudiz/Documents/bio-finder/bio0-finder/shared/components/bioCard/footer/index.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yudiz/Documents/bio-finder/bio0-finder/shared/components/bioCard/footer/index.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(BioCardFooter, \"HeW0Ao/zHGYae9jz+caJYEP8xtw=\");\n_c2 = BioCardFooter;\nBioCardFooter.propTypes = {\n    children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),\n    className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),\n    text: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (BioCardFooter);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"IconCopy\");\n$RefreshReg$(_c1, \"IconShare\");\n$RefreshReg$(_c2, \"BioCardFooter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zaGFyZWQvY29tcG9uZW50cy9iaW9DYXJkL2Zvb3Rlci9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBa0M7QUFDQTtBQUNTO0FBRTNDLDBDQUEwQztBQUUxQyxNQUFNSSxXQUFXSixtREFBT0EsQ0FBQyxJQUFNLDZMQUFPOzs7Ozs7SUFBNkJLLEtBQUssS0FBSzs7S0FBdkVEO0FBQ04sTUFBTUUsWUFBWU4sbURBQU9BLENBQUMsSUFBTSxnTUFBTzs7Ozs7O0lBQThCSyxLQUFLLEtBQUs7O01BQXpFQztBQUVOLFNBQVNDLGNBQWMsS0FBa0MsRUFBRTtRQUFwQyxFQUFFQyxTQUFRLEVBQUVDLFdBQVksR0FBRSxFQUFFQyxLQUFJLEVBQUUsR0FBbEM7O0lBQ3JCLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdULCtDQUFRQSxDQUFDLElBQUk7SUFFdkRELGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJVyxVQUFVQyxLQUFLLEVBQUU7WUFDbkJGLGlCQUFpQixJQUFJO1FBQ3ZCLE9BQU87WUFDTEEsaUJBQWlCLEtBQUs7UUFDeEIsQ0FBQztJQUNILEdBQUcsRUFBRTtJQUVMLGVBQWVHLGFBQWE7UUFDMUIsSUFBSTtZQUNGLE1BQU1GLFVBQVVHLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDUDtZQUNwQ1EsTUFBTTtRQUNSLEVBQUUsT0FBT0MsS0FBSztZQUNaQyxRQUFRQyxLQUFLLENBQUMsb0JBQW9CRjtRQUNwQztJQUNGO0lBRUEsZUFBZUcsYUFBYTtZQUVYQyxrQkFBMkJBO1FBRDFDLE1BQU1DLFFBQVFDLFNBQVNELEtBQUs7UUFDNUIsTUFBTUUsTUFBTSxHQUE4QkgsT0FBM0JBLG1CQUFBQSxvQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsbUJBQUFBLE9BQVFJLFFBQVEsY0FBaEJKLDhCQUFBQSxLQUFBQSxJQUFBQSxpQkFBa0JLLE1BQUYsRUFBc0MsT0FBM0JMLG1CQUFBQSxvQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsb0JBQUFBLE9BQVFJLFFBQVEsY0FBaEJKLCtCQUFBQSxLQUFBQSxJQUFBQSxrQkFBa0JNLFFBQUY7UUFDMUQsSUFBSTtZQUNGLE1BQU1oQixVQUNIQyxLQUFLLENBQUM7Z0JBQ0xVO2dCQUNBRTtnQkFDQWhCO1lBQ0Y7UUFDRiwrQkFBK0I7UUFDakMsRUFBRSxPQUFPUyxLQUFLO1lBQ1pDLFFBQVFDLEtBQUssQ0FBQyxlQUFlRjtRQUM3QixpQ0FBaUM7UUFDbkM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDVztRQUFJckIsV0FBVyxHQUFhLE9BQVZBLFdBQVU7OzBCQUMzQiw4REFBQ3NCO2dCQUFPdEIsV0FBVTtnQkFBV2UsT0FBTTtnQkFBT1EsU0FBU2pCOztrQ0FDakQsOERBQUNYOzs7OztvQkFBVzs7Ozs7OzswQkFHZCw4REFBQzJCO2dCQUFPdEIsV0FBVTtnQkFBV2UsT0FBTTtnQkFBUVEsU0FBU1Y7O2tDQUNsRCw4REFBQ2hCOzs7OztvQkFBWTs7Ozs7OztZQUdkRTs7Ozs7OztBQUdQO0dBbERTRDtNQUFBQTtBQW1EVEEsY0FBYzBCLFNBQVMsR0FBRztJQUN4QnpCLFVBQVVQLHdEQUFjO0lBQ3hCUSxXQUFXUiwwREFBZ0I7SUFDM0JTLE1BQU1ULDBEQUFnQjtBQUN4QjtBQUNBLCtEQUFlTSxhQUFhQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NoYXJlZC9jb21wb25lbnRzL2Jpb0NhcmQvZm9vdGVyL2luZGV4LmpzPzVlODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG4vLyBpbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZS5tb2R1bGUuc2NzcydcblxuY29uc3QgSWNvbkNvcHkgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnQHNoYXJlZC9pY29ucy9pY29uQ29weScpLCB7IHNzcjogZmFsc2UgfSlcbmNvbnN0IEljb25TaGFyZSA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdAc2hhcmVkL2ljb25zL2ljb25TaGFyZScpLCB7IHNzcjogZmFsc2UgfSlcblxuZnVuY3Rpb24gQmlvQ2FyZEZvb3Rlcih7IGNoaWxkcmVuLCBjbGFzc05hbWUgPSAnJywgdGV4dCB9KSB7XG4gIGNvbnN0IFtpc05hdGl2ZVNoYXJlLCBzZXRJc05hdGl2ZVNoYXJlXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobmF2aWdhdG9yLnNoYXJlKSB7XG4gICAgICBzZXRJc05hdGl2ZVNoYXJlKHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldElzTmF0aXZlU2hhcmUoZmFsc2UpXG4gICAgfVxuICB9LCBbXSlcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVDb3B5KCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0ZXh0KVxuICAgICAgYWxlcnQoJ0NvcGllZCcpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gY29weTogJywgZXJyKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhZGxlU2hhcmUoKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC50aXRsZVxuICAgIGNvbnN0IHVybCA9IGAke3dpbmRvdz8ubG9jYXRpb24/Lm9yaWdpbn0ke3dpbmRvdz8ubG9jYXRpb24/LnBhdGhuYW1lfWBcbiAgICB0cnkge1xuICAgICAgYXdhaXQgbmF2aWdhdG9yXG4gICAgICAgIC5zaGFyZSh7XG4gICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIHRleHRcbiAgICAgICAgfSlcbiAgICAgIC8vIGFsZXJ0KCdUaGFua3MgZm9yIFNoYXJpbmchJylcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3NoYXJlIGVycm9yJywgZXJyKVxuICAgICAgLy8gYWxlcnQoYENvdWxkbid0IHNoYXJlICR7ZXJyfWApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBiLWZvb3RlciBkLWZsZXhgfT5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYi1idXR0b25cIiB0aXRsZT0nQ29weScgb25DbGljaz17aGFuZGxlQ29weX0+XG4gICAgICAgIDxJY29uQ29weSAvPlxuICAgICAgICBDb3B5XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYi1idXR0b25cIiB0aXRsZT0nU2hhcmUnIG9uQ2xpY2s9e2hhZGxlU2hhcmV9PlxuICAgICAgICA8SWNvblNoYXJlIC8+XG4gICAgICAgIFNoYXJlXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuQmlvQ2FyZEZvb3Rlci5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nXG59XG5leHBvcnQgZGVmYXVsdCBCaW9DYXJkRm9vdGVyXG4iXSwibmFtZXMiOlsiZHluYW1pYyIsIlByb3BUeXBlcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSWNvbkNvcHkiLCJzc3IiLCJJY29uU2hhcmUiLCJCaW9DYXJkRm9vdGVyIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJ0ZXh0IiwiaXNOYXRpdmVTaGFyZSIsInNldElzTmF0aXZlU2hhcmUiLCJuYXZpZ2F0b3IiLCJzaGFyZSIsImhhbmRsZUNvcHkiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJhbGVydCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImhhZGxlU2hhcmUiLCJ3aW5kb3ciLCJ0aXRsZSIsImRvY3VtZW50IiwidXJsIiwibG9jYXRpb24iLCJvcmlnaW4iLCJwYXRobmFtZSIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwcm9wVHlwZXMiLCJub2RlIiwic3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./shared/components/bioCard/footer/index.js\n"));

/***/ })

}]);