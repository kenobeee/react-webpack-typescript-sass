/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n    var list = []; // return the list of modules as css string\n    list.toString = function toString() {\n        return this.map(function (item) {\n            var content = cssWithMappingToString(item, useSourceMap);\n            if (item[2]) {\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n            }\n            return content;\n        }).join('');\n    }; // import a list of modules into the list\n    // eslint-disable-next-line func-names\n    list.i = function (modules, mediaQuery, dedupe) {\n        if (typeof modules === 'string') {\n            // eslint-disable-next-line no-param-reassign\n            modules = [[null, modules, '']];\n        }\n        var alreadyImportedModules = {};\n        if (dedupe) {\n            for (var i = 0; i < this.length; i++) {\n                // eslint-disable-next-line prefer-destructuring\n                var id = this[i][0];\n                if (id != null) {\n                    alreadyImportedModules[id] = true;\n                }\n            }\n        }\n        for (var _i = 0; _i < modules.length; _i++) {\n            var item = [].concat(modules[_i]);\n            if (dedupe && alreadyImportedModules[item[0]]) {\n                // eslint-disable-next-line no-continue\n                continue;\n            }\n            if (mediaQuery) {\n                if (!item[2]) {\n                    item[2] = mediaQuery;\n                }\n                else {\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n                }\n            }\n            list.push(item);\n        }\n    };\n    return list;\n};\nfunction cssWithMappingToString(item, useSourceMap) {\n    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n    var cssMapping = item[3];\n    if (!cssMapping) {\n        return content;\n    }\n    if (useSourceMap && typeof btoa === 'function') {\n        var sourceMapping = toComment(cssMapping);\n        var sourceURLs = cssMapping.sources.map(function (source) {\n            return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n        });\n        return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n    }\n    return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n    // eslint-disable-next-line no-undef\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n    return \"/*# \".concat(data, \" */\");\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.App = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout/Layout */ \"./src/shared/Layout/Layout.tsx\");\nvar Content_1 = __webpack_require__(/*! ./shared/Content/Content */ \"./src/shared/Content/Content.tsx\");\nfunction AppComponent() {\n    return (react_1.default.createElement(Layout_1.Layout, null,\n        react_1.default.createElement(Content_1.Content, null)));\n}\nexports.App = (0, root_1.hot)(AppComponent);\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section { display: block; }\\nol, ul { list-style: none; }\\ninput, textarea, button { outline: none; border: none }\\nimg { border: 0; max-width: 100%; }\\na, a:hover { text-decoration: none; cursor: pointer; }\\n*, *::before, *::after {\\n    -webkit-box-sizing: border-box;\\n    -moz-box-sizing: border-box;\\n    box-sizing: border-box;\\n\\n    -webkit-font-smoothing: antialiased;\\n    -moz-osx-font-smoothing: grayscale;\\n\\n    margin: 0;\\n    padding: 0;\\n}\\n\\nbody {\\n    height: 100vh;\\n    width: 100%;\\n\\n    color: #000;\\n    font-family: 'Open Sans', sans-serif;\\n    font-size: 16px;\\n    line-height: 150%;\\n    font-weight: 400;\\n\\n    background-color: #fff;\\n\\n    overflow: hidden;\\n}\\n\\nselect {\\n    -webkit-appearance: none;\\n    -moz-appearance: none;\\n    appearance: none;\\n}\\n\\n.mainWrapper {\\n    display: flex;\\n    align-items: center;\\n\\n    height: 100%;\\n    width: 100%;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/server/index.Template.js":
/*!**************************************!*\
  !*** ./src/server/index.Template.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.indexTemplate = void 0;\nvar indexTemplate = function (content) { return \"\\n  <!DOCTYPE html>\\n  <html lang=\\\"en\\\">\\n  <head>\\n    <meta charset=\\\"UTF-8\\\">\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n    <title>My App</title>\\n    <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n    <link rel=\\\"preconnect\\\" href=\\\"https://fonts.googleapis.com\\\">\\n    <link rel=\\\"preconnect\\\" href=\\\"https://fonts.gstatic.com\\\" crossorigin>\\n    <link href=\\\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap\\\" rel=\\\"stylesheet\\\">\\n  </head>\\n  <body>\\n    <div class=\\\"mainWrapper\\\" id=\\\"root\\\">\" + content + \"</div>\\n  </body>\\n  </html>\\n\"; };\nexports.indexTemplate = indexTemplate;\n\n\n//# sourceURL=webpack:///./src/server/index.Template.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\nvar index_Template_1 = __webpack_require__(/*! ./index.Template */ \"./src/server/index.Template.js\");\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\nvar app = (0, express_1.default)();\napp.use('/static', express_1.default.static('./dist/client'));\napp.get('/', function (req, res) {\n    res.send((0, index_Template_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)())));\n});\napp.listen(3000, function () {\n    console.log('Server started on http://localhost:3000');\n});\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/Content/Content.scss":
/*!*****************************************!*\
  !*** ./src/shared/Content/Content.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"mainElement\": \"Content__mainElement--cfTmP\",\n\t\"card\": \"Content__card--3GtSs\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.scss?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Content = void 0;\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar Content_scss_1 = __importDefault(__webpack_require__(/*! ./Content.scss */ \"./src/shared/Content/Content.scss\"));\nfunction Content() {\n    return (React.createElement(\"div\", { className: Content_scss_1.default.mainElement },\n        React.createElement(\"div\", { className: Content_scss_1.default.card },\n            React.createElement(\"span\", null, \"1\")),\n        React.createElement(\"div\", { className: Content_scss_1.default.card },\n            React.createElement(\"span\", null, \"2\")),\n        React.createElement(\"div\", { className: Content_scss_1.default.card },\n            React.createElement(\"span\", null, \"3\"))));\n}\nexports.Content = Content;\n;\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Layout.scss":
/*!***************************************!*\
  !*** ./src/shared/Layout/Layout.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Layout__container--bwnII\",\n\t\"bottomText\": \"Layout__bottomText--2COF5\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.scss?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Layout = void 0;\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar Layout_scss_1 = __importDefault(__webpack_require__(/*! ./Layout.scss */ \"./src/shared/Layout/Layout.scss\"));\nfunction Layout(_a) {\n    var children = _a.children;\n    return (React.createElement(\"section\", { className: Layout_scss_1.default.container },\n        React.createElement(\"p\", null, \"\\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442\"),\n        children,\n        React.createElement(\"p\", { className: Layout_scss_1.default.bottomText }, \"\\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u0442\\u0435\\u043A\\u0441\\u0442\")));\n}\nexports.Layout = Layout;\n;\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ })

/******/ });