"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/library/page",{

/***/ "(app-pages-browser)/./app/library/page.tsx":
/*!******************************!*\
  !*** ./app/library/page.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Library; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_PatentCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/PatentCard */ \"(app-pages-browser)/./components/PatentCard.tsx\");\n/* harmony import */ var _components_FolderCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/FolderCard */ \"(app-pages-browser)/./components/FolderCard.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _lib_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/hooks */ \"(app-pages-browser)/./lib/hooks.tsx\");\n/* harmony import */ var _lib_features_analyzeSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/features/analyzeSlice */ \"(app-pages-browser)/./lib/features/analyzeSlice.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Library() {\n    _s();\n    const [selectedTab, setSelectedTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Recent History\");\n    const data = (0,_lib_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)(_lib_features_analyzeSlice__WEBPACK_IMPORTED_MODULE_6__.patents);\n    const directories = (0,_lib_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)(_lib_features_analyzeSlice__WEBPACK_IMPORTED_MODULE_6__.folders);\n    const dispatch = (0,_lib_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const handleTabClick = (tab)=>{\n        setSelectedTab(tab);\n    };\n    async function storePatent(info) {\n        dispatch((0,_lib_features_analyzeSlice__WEBPACK_IMPORTED_MODULE_6__.storeFile)(info));\n    }\n    function goToPatent(info) {\n        storePatent(info).then(function(value) {\n            router.push(\"/patent\");\n        }, function(error) {\n            console.log(error);\n        });\n    }\n    function renderPatentCard(entry) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PatentCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            info: entry,\n            onClick: ()=>goToPatent(entry)\n        }, void 0, false, {\n            fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/app/library/page.tsx\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-center items-center pt-[24px]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"w-2/3 my-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-2xl font-normal leading-9\",\n                    children: \"My Library\"\n                }, void 0, false, {\n                    fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/app/library/page.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-base font-normal leading-6 pt-[6px]\",\n                    children: \"Review recent patent reading history, organize, and manage your patent projects all in one place.\"\n                }, void 0, false, {\n                    fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/app/library/page.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex space-x-3 items-center pt-[24px] pb-[24px]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \" rounded rounded-xl h-[40px] relative flex items-center justify-center px-4 \".concat(selectedTab === \"Recent History\" ? \"bg-custom-navbar\" : \"\"),\n                            onClick: ()=>handleTabClick(\"Recent History\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-base font-normal leading-7\",\n                                children: \"Recent History\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/app/library/page.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/app/library/page.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"rounded rounded-xl h-[40px] relative flex items-center justify-center px-4 \".concat(selectedTab === \"Workspace\" ? \"bg-custom-navbar\" : \"\"),\n                            onClick: ()=>handleTabClick(\"Workspace\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-base font-normal leading-7\",\n                                children: \"Workspace\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/app/library/page.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/app/library/page.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/app/library/page.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this),\n                selectedTab === \"Recent History\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center w-full space-x-4 \",\n                        children: data.map((patent)=>renderPatentCard(patent))\n                    }, void 0, false, {\n                        fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/app/library/page.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false),\n                selectedTab === \"Workspace\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-auto-columns grid-auto-rows grid-flow-row grid-flow-column gap-4 w-full\",\n                            children: [\n                                directories.map((folder)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FolderCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        title: folder.name,\n                                        date: folder.date\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/app/library/page.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 42\n                                    }, this)),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FolderCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    title: \"Method and Apparatus for...\",\n                                    date: \"1 hr ago\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/app/library/page.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FolderCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    title: \"Single sided light-actuate...\",\n                                    date: \"15:33 PM today\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/app/library/page.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FolderCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    title: \"Method and Apparatus for...\",\n                                    date: \"1 hr ago\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/app/library/page.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FolderCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    title: \"Single sided light-actuate...\",\n                                    date: \"15:33 PM today\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/app/library/page.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/app/library/page.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-3 gap-4 w-full mt-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FolderCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    title: \"Method and Apparatus for...\",\n                                    date: \"1 hr ago\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/app/library/page.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FolderCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    title: \"Single sided light-actuate...\",\n                                    date: \"15:33 PM today\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/app/library/page.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/app/library/page.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/app/library/page.tsx\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jamiewalton/Desktop/CS160/patent-analyzer/app/library/page.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(Library, \"sM55b8aSukVCoz0MScXJC4+tbhw=\", false, function() {\n    return [\n        _lib_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector,\n        _lib_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector,\n        _lib_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Library;\nvar _c;\n$RefreshReg$(_c, \"Library\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9saWJyYXJ5L3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ3dDO0FBQ1M7QUFFQTtBQUVQO0FBQ3VCO0FBR3hCO0FBRTFCLFNBQVNVOztJQUN0QixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1gsK0NBQVFBLENBQVM7SUFDdkQsTUFBTVksT0FBT1IsMERBQWNBLENBQUNHLCtEQUFPQTtJQUNuQyxNQUFNTSxjQUFjVCwwREFBY0EsQ0FBQ0ksK0RBQU9BO0lBQzFDLE1BQU1NLFdBQVdULDBEQUFjQTtJQUMvQixNQUFNVSxTQUFTWiwwREFBU0E7SUFFeEIsTUFBTWEsaUJBQWlCLENBQUNDO1FBQ3RCTixlQUFlTTtJQUNqQjtJQUVBLGVBQWVDLFlBQVlDLElBQWU7UUFDeENMLFNBQVNSLHFFQUFTQSxDQUFDYTtJQUNyQjtJQUVBLFNBQVNDLFdBQVdELElBQWU7UUFDakNELFlBQVlDLE1BQU1FLElBQUksQ0FDcEIsU0FBU0MsS0FBSztZQUFHUCxPQUFPUSxJQUFJLENBQUM7UUFBVyxHQUN4QyxTQUFTQyxLQUFLO1lBQUdDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFBTztJQUV4QztJQUVBLFNBQVNHLGlCQUFpQkMsS0FBZ0I7UUFDeEMscUJBQ0UsOERBQUMzQiw4REFBVUE7WUFDVGtCLE1BQU1TO1lBQ05DLFNBQVMsSUFBTVQsV0FBV1E7Ozs7OztJQUVoQztJQUdBLHFCQUVFLDhEQUFDRTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUFLRCxXQUFVOzs4QkFFZCw4REFBQ0U7b0JBQUVGLFdBQVU7OEJBQWlDOzs7Ozs7OEJBQzlDLDhEQUFDRTtvQkFBRUYsV0FBVTs4QkFBMkM7Ozs7Ozs4QkFHeEQsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDZiw4REFBQ0c7NEJBQU9ILFdBQVcsK0VBQTBJLE9BQTNEckIsZ0JBQWdCLG1CQUFtQixxQkFBcUI7NEJBQU1tQixTQUFTLElBQU1iLGVBQWU7c0NBQzFMLDRFQUFDaUI7Z0NBQUVGLFdBQVU7MENBQWtDOzs7Ozs7Ozs7OztzQ0FHakQsOERBQUNHOzRCQUFPSCxXQUFXLDhFQUFvSSxPQUF0RHJCLGdCQUFnQixjQUFjLHFCQUFxQjs0QkFBTW1CLFNBQVMsSUFBTWIsZUFBZTtzQ0FDdEwsNEVBQUNpQjtnQ0FBRUYsV0FBVTswQ0FBa0M7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQU1sRHJCLGdCQUFnQixrQ0FDZjs4QkFDQSw0RUFBQ29CO3dCQUFJQyxXQUFVO2tDQUNabkIsS0FBS3VCLEdBQUcsQ0FBQyxDQUFDQyxTQUFXVCxpQkFBaUJTOzs7Ozs7O2dCQU0xQzFCLGdCQUFnQiw2QkFDZjs7c0NBQ0EsOERBQUNvQjs0QkFBSUMsV0FBVTs7Z0NBQ1ZsQixZQUFZc0IsR0FBRyxDQUFDRSxDQUFBQSx1QkFBVSw4REFBQ25DLDhEQUFVQTt3Q0FBQ29DLE9BQU9ELE9BQU9FLElBQUk7d0NBQUVDLE1BQU1ILE9BQU9HLElBQUk7Ozs7Ozs4Q0FDNUUsOERBQUN0Qyw4REFBVUE7b0NBQUNvQyxPQUFNO29DQUE4QkUsTUFBSzs7Ozs7OzhDQUNyRCw4REFBQ3RDLDhEQUFVQTtvQ0FBQ29DLE9BQU07b0NBQWdDRSxNQUFLOzs7Ozs7OENBQ3ZELDhEQUFDdEMsOERBQVVBO29DQUFDb0MsT0FBTTtvQ0FBOEJFLE1BQUs7Ozs7Ozs4Q0FDckQsOERBQUN0Qyw4REFBVUE7b0NBQUNvQyxPQUFNO29DQUFnQ0UsTUFBSzs7Ozs7Ozs7Ozs7O3NDQUczRCw4REFBQ1Y7NEJBQUlDLFdBQVU7OzhDQUNYLDhEQUFDN0IsOERBQVVBO29DQUFDb0MsT0FBTTtvQ0FBOEJFLE1BQUs7Ozs7Ozs4Q0FDckQsOERBQUN0Qyw4REFBVUE7b0NBQUNvQyxPQUFNO29DQUFnQ0UsTUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVyRTtHQW5Gd0IvQjs7UUFFVEwsc0RBQWNBO1FBQ1BBLHNEQUFjQTtRQUNqQkMsc0RBQWNBO1FBQ2hCRixzREFBU0E7OztLQUxGTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvbGlicmFyeS9wYWdlLnRzeD8yYWMzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGF0ZW50Q2FyZCBmcm9tIFwiQC9jb21wb25lbnRzL1BhdGVudENhcmRcIjtcbmltcG9ydCB7Rm9sZGVyfSBmcm9tICdsdWNpZGUtcmVhY3QnXG5pbXBvcnQgRm9sZGVyQ2FyZCBmcm9tICdAL2NvbXBvbmVudHMvRm9sZGVyQ2FyZCc7XG5pbXBvcnQgUGF0ZW50SW5mbyBmcm9tIFwiQC9jb21wb25lbnRzL1BhdGVudEluZm9cIjtcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IsIHVzZUFwcERpc3BhdGNoIH0gZnJvbSAnLi4vLi4vbGliL2hvb2tzJztcbmltcG9ydCB7XG4gIHN0b3JlRmlsZSwgcGF0ZW50cywgZm9sZGVyc1xufSBmcm9tICcuLi8uLi9saWIvZmVhdHVyZXMvYW5hbHl6ZVNsaWNlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlicmFyeSgpIHtcbiAgY29uc3QgW3NlbGVjdGVkVGFiLCBzZXRTZWxlY3RlZFRhYl0gPSB1c2VTdGF0ZTxTdHJpbmc+KCdSZWNlbnQgSGlzdG9yeScpO1xuICBjb25zdCBkYXRhID0gdXNlQXBwU2VsZWN0b3IocGF0ZW50cyk7XG4gIGNvbnN0IGRpcmVjdG9yaWVzID0gdXNlQXBwU2VsZWN0b3IoZm9sZGVycyk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaGFuZGxlVGFiQ2xpY2sgPSAodGFiOiBTdHJpbmcpID0+IHtcbiAgICBzZXRTZWxlY3RlZFRhYih0YWIpO1xuICB9O1xuXG4gIGFzeW5jIGZ1bmN0aW9uIHN0b3JlUGF0ZW50KGluZm86UGF0ZW50SW5mbykge1xuICAgIGRpc3BhdGNoKHN0b3JlRmlsZShpbmZvKSk7XG4gIH1cblxuICBmdW5jdGlvbiBnb1RvUGF0ZW50KGluZm86UGF0ZW50SW5mbykge1xuICAgIHN0b3JlUGF0ZW50KGluZm8pLnRoZW4oXG4gICAgICBmdW5jdGlvbih2YWx1ZSkge3JvdXRlci5wdXNoKCcvcGF0ZW50Jyk7fSxcbiAgICAgIGZ1bmN0aW9uKGVycm9yKSB7Y29uc29sZS5sb2coZXJyb3IpO31cbiAgICApXG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJQYXRlbnRDYXJkKGVudHJ5OlBhdGVudEluZm8pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFBhdGVudENhcmRcbiAgICAgICAgaW5mbz17ZW50cnl9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGdvVG9QYXRlbnQoZW50cnkpfVxuICAgICAgLz4pO1xuICB9XG5cblxuICByZXR1cm4gKFxuICAgIFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcHQtWzI0cHhdXCI+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJ3LTIvMyBteS0xMFwiPlxuICAgICAgICB7LyogSGVhZGVyIHRleHQgKi99XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtbm9ybWFsIGxlYWRpbmctOVwiPk15IExpYnJhcnk8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LW5vcm1hbCBsZWFkaW5nLTYgcHQtWzZweF1cIj5SZXZpZXcgcmVjZW50IHBhdGVudCByZWFkaW5nIGhpc3RvcnksIG9yZ2FuaXplLCBhbmQgbWFuYWdlIHlvdXIgcGF0ZW50IHByb2plY3RzIGFsbCBpbiBvbmUgcGxhY2UuPC9wPlxuXG4gICAgICAgIHsvKiBTZWxlY3QgdGFiOiBSZWNlbnQgSGlzdG9yeSBvciBXb3Jrc3BhY2UgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTMgaXRlbXMtY2VudGVyIHB0LVsyNHB4XSBwYi1bMjRweF1cIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Agcm91bmRlZCByb3VuZGVkLXhsIGgtWzQwcHhdIHJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTQgJHtzZWxlY3RlZFRhYiA9PT0gJ1JlY2VudCBIaXN0b3J5JyA/ICdiZy1jdXN0b20tbmF2YmFyJyA6ICcnfWB9IG9uQ2xpY2s9eygpID0+IGhhbmRsZVRhYkNsaWNrKCdSZWNlbnQgSGlzdG9yeScpfT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LW5vcm1hbCBsZWFkaW5nLTdcIj5SZWNlbnQgSGlzdG9yeTwvcD5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Byb3VuZGVkIHJvdW5kZWQteGwgaC1bNDBweF0gcmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtNCAke3NlbGVjdGVkVGFiID09PSAnV29ya3NwYWNlJyA/ICdiZy1jdXN0b20tbmF2YmFyJyA6ICcnfWB9IG9uQ2xpY2s9eygpID0+IGhhbmRsZVRhYkNsaWNrKCdXb3Jrc3BhY2UnKX0+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1ub3JtYWwgbGVhZGluZy03XCI+V29ya3NwYWNlPC9wPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG5cbiAgICAgICAgey8qIGBSZWNlbnQgSGlzdG9yeWAgc2VjdGlvbiAqL31cbiAgICAgICAge3NlbGVjdGVkVGFiID09PSAnUmVjZW50IEhpc3RvcnknICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgc3BhY2UteC00IFwiPlxuICAgICAgICAgICAge2RhdGEubWFwKChwYXRlbnQpID0+IHJlbmRlclBhdGVudENhcmQocGF0ZW50KSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBgV29ya3NwYWNlYCBzZWN0aW9uICovfVxuICAgICAgICB7c2VsZWN0ZWRUYWIgPT09ICdXb3Jrc3BhY2UnICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWF1dG8tY29sdW1ucyBncmlkLWF1dG8tcm93cyBncmlkLWZsb3ctcm93IGdyaWQtZmxvdy1jb2x1bW4gZ2FwLTQgdy1mdWxsXCI+XG4gICAgICAgICAgICAgIHtkaXJlY3Rvcmllcy5tYXAoZm9sZGVyID0+IDxGb2xkZXJDYXJkIHRpdGxlPXtmb2xkZXIubmFtZX0gZGF0ZT17Zm9sZGVyLmRhdGV9Lz4pfVxuICAgICAgICAgICAgICA8Rm9sZGVyQ2FyZCB0aXRsZT1cIk1ldGhvZCBhbmQgQXBwYXJhdHVzIGZvci4uLlwiIGRhdGU9XCIxIGhyIGFnb1wiLz5cbiAgICAgICAgICAgICAgPEZvbGRlckNhcmQgdGl0bGU9XCJTaW5nbGUgc2lkZWQgbGlnaHQtYWN0dWF0ZS4uLlwiIGRhdGU9XCIxNTozMyBQTSB0b2RheVwiLz5cbiAgICAgICAgICAgICAgPEZvbGRlckNhcmQgdGl0bGU9XCJNZXRob2QgYW5kIEFwcGFyYXR1cyBmb3IuLi5cIiBkYXRlPVwiMSBociBhZ29cIi8+XG4gICAgICAgICAgICAgIDxGb2xkZXJDYXJkIHRpdGxlPVwiU2luZ2xlIHNpZGVkIGxpZ2h0LWFjdHVhdGUuLi5cIiBkYXRlPVwiMTU6MzMgUE0gdG9kYXlcIi8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTQgdy1mdWxsIG10LTRcIj5cbiAgICAgICAgICAgICAgPEZvbGRlckNhcmQgdGl0bGU9XCJNZXRob2QgYW5kIEFwcGFyYXR1cyBmb3IuLi5cIiBkYXRlPVwiMSBociBhZ29cIi8+XG4gICAgICAgICAgICAgIDxGb2xkZXJDYXJkIHRpdGxlPVwiU2luZ2xlIHNpZGVkIGxpZ2h0LWFjdHVhdGUuLi5cIiBkYXRlPVwiMTU6MzMgUE0gdG9kYXlcIi8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG5cblxuXG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlBhdGVudENhcmQiLCJGb2xkZXJDYXJkIiwidXNlUm91dGVyIiwidXNlQXBwU2VsZWN0b3IiLCJ1c2VBcHBEaXNwYXRjaCIsInN0b3JlRmlsZSIsInBhdGVudHMiLCJmb2xkZXJzIiwiTGlicmFyeSIsInNlbGVjdGVkVGFiIiwic2V0U2VsZWN0ZWRUYWIiLCJkYXRhIiwiZGlyZWN0b3JpZXMiLCJkaXNwYXRjaCIsInJvdXRlciIsImhhbmRsZVRhYkNsaWNrIiwidGFiIiwic3RvcmVQYXRlbnQiLCJpbmZvIiwiZ29Ub1BhdGVudCIsInRoZW4iLCJ2YWx1ZSIsInB1c2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJQYXRlbnRDYXJkIiwiZW50cnkiLCJvbkNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsInAiLCJidXR0b24iLCJtYXAiLCJwYXRlbnQiLCJmb2xkZXIiLCJ0aXRsZSIsIm5hbWUiLCJkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/library/page.tsx\n"));

/***/ })

});