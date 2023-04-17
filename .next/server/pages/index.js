"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst pugImage = \"https://img.freepik.com/fotos-gratis/cao-pug-isolado-em-um-fundo-branco_2829-11409.jpg\";\nconst gifImage = \"https://gifs.eco.br/wp-content/uploads/2022/04/gifs-do-cachorro-lambendo-a-tela-1.gif\";\nfunction HomePage() {\n    const { 0: cep , 1: setCep  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: address , 1: setAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    async function handleSearchAddress(e) {\n        e.preventDefault();\n        // Verifica se o cep contém apenas números\n        if (!/^[0-9]+$/.test(cep)) {\n            alert(\"CEP inv\\xe1lido. Digite apenas n\\xfameros.\");\n            return;\n        }\n        const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);\n        const data = await res.json();\n        if (data.erro) {\n            alert(\"CEP inv\\xe1lido\");\n            return;\n        }\n        setAddress(data);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            maxWidth: \"600px\",\n            margin: \"0 auto\",\n            textAlign: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Bem vindo ao Sistema de Buscas de CPF\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\anderson.placido\\\\Documents\\\\react\\\\pages\\\\index.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Bem vindo ao Sistema de Buscas de CPF, N\\xf3s usamos os pugzinhos para buscar os cpf's \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\anderson.placido\\\\Documents\\\\react\\\\pages\\\\index.js\",\n                        lineNumber: 34,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\anderson.placido\\\\Documents\\\\react\\\\pages\\\\index.js\",\n                lineNumber: 32,\n                columnNumber: 8\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: gifImage,\n                alt: \"Cachorro lambendo a tela\",\n                style: {\n                    width: \"60%\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\anderson.placido\\\\Documents\\\\react\\\\pages\\\\index.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    marginBottom: \"1.5rem\"\n                },\n                children: \"Busca de Endere\\xe7o\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\anderson.placido\\\\Documents\\\\react\\\\pages\\\\index.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSearchAddress,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Digite o CEP\",\n                        value: cep,\n                        onChange: (e)=>setCep(e.target.value),\n                        style: {\n                            padding: \"0.5rem\",\n                            borderRadius: \"0.25rem\",\n                            border: \"1px solid #ccc\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\anderson.placido\\\\Documents\\\\react\\\\pages\\\\index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        style: {\n                            padding: \"0.5rem 1rem\",\n                            borderRadius: \"0.25rem\",\n                            border: \"none\",\n                            backgroundColor: \"#0070f3\",\n                            color: \"#fff\",\n                            marginLeft: \"0.5rem\",\n                            cursor: \"pointer\"\n                        },\n                        children: \"Buscar\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\anderson.placido\\\\Documents\\\\react\\\\pages\\\\index.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\anderson.placido\\\\Documents\\\\react\\\\pages\\\\index.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            address.cep && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginTop: \"2rem\",\n                    textAlign: \"left\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"CEP:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\anderson.placido\\\\Documents\\\\react\\\\pages\\\\index.js\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, this),\n                            \" \",\n                            address.cep\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\anderson.placido\\\\Documents\\\\react\\\\pages\\\\index.js\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Logradouro:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\anderson.placido\\\\Documents\\\\react\\\\pages\\\\index.js\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, this),\n                            \" \",\n                            address.logradouro\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\anderson.placido\\\\Documents\\\\react\\\\pages\\\\index.js\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Bairro:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\anderson.placido\\\\Documents\\\\react\\\\pages\\\\index.js\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, this),\n                            \" \",\n                            address.bairro\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\anderson.placido\\\\Documents\\\\react\\\\pages\\\\index.js\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Cidade:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\anderson.placido\\\\Documents\\\\react\\\\pages\\\\index.js\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, this),\n                            \" \",\n                            address.localidade\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\anderson.placido\\\\Documents\\\\react\\\\pages\\\\index.js\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Estado:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\anderson.placido\\\\Documents\\\\react\\\\pages\\\\index.js\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, this),\n                            \" \",\n                            address.uf\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\anderson.placido\\\\Documents\\\\react\\\\pages\\\\index.js\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \" CEP ENCONTRADO AU !\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\anderson.placido\\\\Documents\\\\react\\\\pages\\\\index.js\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\anderson.placido\\\\Documents\\\\react\\\\pages\\\\index.js\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\anderson.placido\\\\Documents\\\\react\\\\pages\\\\index.js\",\n        lineNumber: 31,\n        columnNumber: 6\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU07b0JBQUV4QixTQUFTLEVBQUUsTUFBTTtpQkFBRTs7a0NBQ2xELDhEQUFDRSxHQUFDOzswQ0FDQSw4REFBQ3VCLFFBQU07MENBQUMsTUFBSTs7Ozs7b0NBQVM7NEJBQUEsR0FBQzs0QkFBQ3pDLE9BQU8sQ0FBQ0YsR0FBRzs7Ozs7OzRCQUNoQztrQ0FDSiw4REFBQ29CLEdBQUM7OzBDQUNBLDhEQUFDdUIsUUFBTTswQ0FBQyxhQUFXOzs7OztvQ0FBUzs0QkFBQSxHQUFDOzRCQUFDekMsT0FBTyxDQUFDMEMsVUFBVTs7Ozs7OzRCQUM5QztrQ0FDSiw4REFBQ3hCLEdBQUM7OzBDQUNBLDhEQUFDdUIsUUFBTTswQ0FBQyxTQUFPOzs7OztvQ0FBUzs0QkFBQSxHQUFDOzRCQUFDekMsT0FBTyxDQUFDMkMsTUFBTTs7Ozs7OzRCQUN0QztrQ0FDSiw4REFBQ3pCLEdBQUM7OzBDQUNBLDhEQUFDdUIsUUFBTTswQ0FBQyxTQUFPOzs7OztvQ0FBUzs0QkFBQSxHQUFDOzRCQUFDekMsT0FBTyxDQUFDNEMsVUFBVTs7Ozs7OzRCQUMxQztrQ0FDSiw4REFBQzFCLEdBQUM7OzBDQUNBLDhEQUFDdUIsUUFBTTswQ0FBQyxTQUFPOzs7OztvQ0FBUzs0QkFBQSxHQUFDOzRCQUFDekMsT0FBTyxDQUFDNkMsRUFBRTs7Ozs7OzRCQUNsQztrQ0FDSiw4REFBQzNCLEdBQUM7a0NBQUMsc0JBQW9COzs7Ozs0QkFBSTs7Ozs7O29CQUN2Qjs7Ozs7O1lBRUosQ0FDTjtBQUNKLENBQUM7QUFFRCxpRUFBZXJCLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LW5leHRqcy1hcHAvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IHB1Z0ltYWdlID0gXCJodHRwczovL2ltZy5mcmVlcGlrLmNvbS9mb3Rvcy1ncmF0aXMvY2FvLXB1Zy1pc29sYWRvLWVtLXVtLWZ1bmRvLWJyYW5jb18yODI5LTExNDA5LmpwZ1wiO1xyXG5jb25zdCBnaWZJbWFnZSA9IFwiaHR0cHM6Ly9naWZzLmVjby5ici93cC1jb250ZW50L3VwbG9hZHMvMjAyMi8wNC9naWZzLWRvLWNhY2hvcnJvLWxhbWJlbmRvLWEtdGVsYS0xLmdpZlwiO1xyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcbiAgY29uc3QgW2NlcCwgc2V0Q2VwXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbYWRkcmVzcywgc2V0QWRkcmVzc10gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVNlYXJjaEFkZHJlc3MoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIFxyXG4gICAgLy8gVmVyaWZpY2Egc2UgbyBjZXAgY29udMOpbSBhcGVuYXMgbsO6bWVyb3NcclxuICAgIGlmICghL15bMC05XSskLy50ZXN0KGNlcCkpIHtcclxuICAgICAgYWxlcnQoJ0NFUCBpbnbDoWxpZG8uIERpZ2l0ZSBhcGVuYXMgbsO6bWVyb3MuJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL3ZpYWNlcC5jb20uYnIvd3MvJHtjZXB9L2pzb24vYCk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICBcclxuICAgIGlmIChkYXRhLmVycm8pIHtcclxuICAgICAgYWxlcnQoJ0NFUCBpbnbDoWxpZG8nKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgc2V0QWRkcmVzcyhkYXRhKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgPGRpdiBzdHlsZT17eyBtYXhXaWR0aDogJzYwMHB4JywgbWFyZ2luOiAnMCBhdXRvJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPkJlbSB2aW5kbyBhbyBTaXN0ZW1hIGRlIEJ1c2NhcyBkZSBDUEY8L2gxPlxyXG4gICAgICA8cD5CZW0gdmluZG8gYW8gU2lzdGVtYSBkZSBCdXNjYXMgZGUgQ1BGLCBOw7NzIHVzYW1vcyBvcyBwdWd6aW5ob3MgcGFyYSBidXNjYXIgb3MgY3BmJ3MgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICAgIDxpbWcgc3JjPXtnaWZJbWFnZX0gYWx0PVwiQ2FjaG9ycm8gbGFtYmVuZG8gYSB0ZWxhXCIgc3R5bGU9e3sgd2lkdGg6ICc2MCUnIH19IC8+XHJcbiAgICAgIDxoMSBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcxLjVyZW0nIH19PkJ1c2NhIGRlIEVuZGVyZcOnbzwvaDE+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTZWFyY2hBZGRyZXNzfT5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGlnaXRlIG8gQ0VQXCJcclxuICAgICAgICAgIHZhbHVlPXtjZXB9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENlcChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiAnMC41cmVtJywgYm9yZGVyUmFkaXVzOiAnMC4yNXJlbScsIGJvcmRlcjogJzFweCBzb2xpZCAjY2NjJyB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAnMC41cmVtIDFyZW0nLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcwLjI1cmVtJyxcclxuICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDcwZjMnLFxyXG4gICAgICAgICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMC41cmVtJyxcclxuICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEJ1c2NhclxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIHthZGRyZXNzLmNlcCAmJiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6ICcycmVtJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPHN0cm9uZz5DRVA6PC9zdHJvbmc+IHthZGRyZXNzLmNlcH1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8c3Ryb25nPkxvZ3JhZG91cm86PC9zdHJvbmc+IHthZGRyZXNzLmxvZ3JhZG91cm99XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPHN0cm9uZz5CYWlycm86PC9zdHJvbmc+IHthZGRyZXNzLmJhaXJyb31cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8c3Ryb25nPkNpZGFkZTo8L3N0cm9uZz4ge2FkZHJlc3MubG9jYWxpZGFkZX1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8c3Ryb25nPkVzdGFkbzo8L3N0cm9uZz4ge2FkZHJlc3MudWZ9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cD4gQ0VQIEVOQ09OVFJBRE8gQVUgITwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInB1Z0ltYWdlIiwiZ2lmSW1hZ2UiLCJIb21lUGFnZSIsImNlcCIsInNldENlcCIsImFkZHJlc3MiLCJzZXRBZGRyZXNzIiwiaGFuZGxlU2VhcmNoQWRkcmVzcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRlc3QiLCJhbGVydCIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJlcnJvIiwiZGl2Iiwic3R5bGUiLCJtYXhXaWR0aCIsIm1hcmdpbiIsInRleHRBbGlnbiIsImgxIiwicCIsImltZyIsInNyYyIsImFsdCIsIndpZHRoIiwibWFyZ2luQm90dG9tIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImJ1dHRvbiIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwibWFyZ2luTGVmdCIsImN1cnNvciIsIm1hcmdpblRvcCIsInN0cm9uZyIsImxvZ3JhZG91cm8iLCJiYWlycm8iLCJsb2NhbGlkYWRlIiwidWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();