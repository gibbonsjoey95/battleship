/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.game-container {\n    width:  650px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.gameboard-container {\n    width: 300px;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    gap: 1px;\n}\n\n.grid-square {\n    width: 30px;\n    height: 30px;\n    border: 1px solid #000;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.hit {\n    background-color: green;\n}\n\n.miss {\n    background-color: gray;\n}\n\n.ship {\n    background-color: blue;\n}\n\n.hit-ship {\n    background-color: red;\n    box-shadow: inset 0 0 0 5px blue\n}\n\n.entered {\n    background-color: purple;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://template/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://template/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://template/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/check-end-game.js":
/*!*******************************!*\
  !*** ./src/check-end-game.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _start_new_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start-new-game */ \"./src/start-new-game.js\");\n\n\nconst checkEndGame = (player, opponent) => {\n  if (player.gameboard.allShipsSunk()) {\n    setTimeout(() => {\n      alert('Opponent won');\n      (0,_start_new_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(player, opponent);\n    }, 100);\n  } else if (opponent.gameboard.allShipsSunk()) {\n    setTimeout(() => {\n      alert('You won!');\n      (0,_start_new_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(player, opponent);\n    }, 100);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkEndGame);\n\n\n//# sourceURL=webpack://template/./src/check-end-game.js?");

/***/ }),

/***/ "./src/create-grid-square.js":
/*!***********************************!*\
  !*** ./src/create-grid-square.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\nconst createGridSquare = (rowIndex, cellIndex, cell, isOpponent) => {\n  const gridSquare = document.createElement('div');\n  gridSquare.classList.add('grid-square');\n  gridSquare.textContent = '';\n  gridSquare.dataset.row = rowIndex;\n  gridSquare.dataset.cell = cellIndex;\n\n  if (!isOpponent && cell instanceof _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n    gridSquare.classList.add('ship');\n  }\n\n  return gridSquare;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createGridSquare);\n\n\n//# sourceURL=webpack://template/./src/create-grid-square.js?");

/***/ }),

/***/ "./src/game-controller.js":
/*!********************************!*\
  !*** ./src/game-controller.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _start_new_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start-new-game */ \"./src/start-new-game.js\");\n\n\nconst gameController = () => {\n  (0,_start_new_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameController);\n\n\n//# sourceURL=webpack://template/./src/game-controller.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\nclass Gameboard {\n  constructor() {\n    this.grid = this.createGrid();\n    this.ships = [];\n  }\n\n  createGrid(size = 10) {\n    return Array.from({ length: size }, () => Array(size).fill(null));\n  }\n\n  placeShip(ship, x, y, direction) {\n    if (direction == 'horizontal') {\n      for (let i = 0; i < ship.length; i++) {\n        this.grid[x][y + i] = ship;\n      }\n    } else if (direction == 'vertical') {\n      for (let i = 0; i < ship.length; i++) {\n        this.grid[x + i][y] = ship;\n      }\n    }\n    this.ships.push(ship);\n  }\n\n  receiveAttack(x, y) {\n    const cell = this.grid[x][y];\n    if (cell && cell !== 'hit' && cell !== 'miss') {\n      cell.hit();\n      this.grid[x][y] = 'hit';\n    } else {\n      this.grid[x][y] = 'miss';\n    }\n  }\n\n  allShipsSunk() {\n    return this.ships.every((ship) => ship.isSunk());\n  }\n\n  reset() {\n    this.grid = this.createGrid(this.size);\n  }\n\n  validateShipPlacement(ship, x, y, orientation) {\n    if (orientation === 'horizontal') {\n      if (ship.length + y > this.grid[0].length) {\n        return false;\n      }\n      for (let i = 0; i < ship.length; i++) {\n        if (this.grid[x][y + i] !== null) {\n          return false;\n        }\n      }\n    } else if (orientation === 'vertical') {\n      if (ship.length + x > this.grid[0].length) {\n        return false;\n      }\n      for (let i = 0; i < ship.length; i++) {\n        if (this.grid[x + i][y] !== null) {\n          return false;\n        }\n      }\n    }\n\n    return true;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n\n//# sourceURL=webpack://template/./src/gameboard.js?");

/***/ }),

/***/ "./src/handle-player-turn.js":
/*!***********************************!*\
  !*** ./src/handle-player-turn.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _update_player_gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-player-gameboard */ \"./src/update-player-gameboard.js\");\n\n\nconst handlePlayerTurn = (\n  player,\n  opponent,\n  rowIndex,\n  cellIndex,\n  gridSquare,\n) => {\n  const square = opponent.gameboard.grid[rowIndex][cellIndex];\n  if (square === 'hit' || square === 'miss') {\n    alert('choose another square');\n  } else {\n    player.takeTurn(opponent, rowIndex, cellIndex);\n    const updatedSquare = opponent.gameboard.grid[rowIndex][cellIndex];\n\n    if (updatedSquare === 'hit') {\n      gridSquare.classList.add('hit');\n    } else if (updatedSquare === 'miss') {\n      gridSquare.classList.add('miss');\n    }\n\n    opponent.takeTurn(player, 0, 0);\n    (0,_update_player_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(player);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handlePlayerTurn);\n\n\n//# sourceURL=webpack://template/./src/handle-player-turn.js?");

/***/ }),

/***/ "./src/highlight-ship-placement.js":
/*!*****************************************!*\
  !*** ./src/highlight-ship-placement.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst highlightShipPlacement = (\n  playerState,\n  rowIndex,\n  cellIndex,\n  highlight,\n) => {\n  for (let i = 0; i < playerState.currentShip.length; i++) {\n    const x =\n      playerState.orientation === 'horizontal' ? rowIndex : rowIndex + i;\n    const y =\n      playerState.orientation === 'horizontal' ? cellIndex + i : cellIndex;\n    if (x < 10 && y < 10) {\n      const square = document.querySelector(\n        `[data-row='${x}'][data-cell='${y}']`,\n      );\n      if (square) {\n        square.style.backgroundColor = highlight ? 'purple' : '';\n      }\n    }\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (highlightShipPlacement);\n\n\n//# sourceURL=webpack://template/./src/highlight-ship-placement.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _game_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-controller */ \"./src/game-controller.js\");\n\n\n\nfunction component() {\n  (0,_game_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\n\ncomponent();\n\n\n//# sourceURL=webpack://template/./src/index.js?");

/***/ }),

/***/ "./src/place-ship.js":
/*!***************************!*\
  !*** ./src/place-ship.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst placeShip = (gameboard, ship, row, col, orientation) => {\n  if (gameboard.validateShipPlacement(ship, row, col, orientation)) {\n    gameboard.placeShip(ship, row, col, orientation);\n    return true;\n  }\n  return false;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (placeShip);\n\n\n//# sourceURL=webpack://template/./src/place-ship.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\nclass Player {\n  constructor(type) {\n    if (type !== 'real' && type !== 'computer') {\n      throw new Error('Invalid player type. Must be \"real\" or \"computer\"');\n    }\n    this.type = type;\n    this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  }\n\n  takeTurn(opponent, x, y) {\n    if (this.type == 'real') {\n      opponent.gameboard.receiveAttack(x, y);\n    } else {\n      return this.randomAttack(opponent.gameboard);\n    }\n  }\n\n  randomAttack(opponent) {\n    let x, y;\n    do {\n      x = Math.floor(Math.random() * 10);\n      y = Math.floor(Math.random() * 10);\n    } while (opponent.grid[x][y] === 'hit' || opponent.grid[x][y] === 'miss');\n\n    return opponent.receiveAttack(x, y);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n\n//# sourceURL=webpack://template/./src/player.js?");

/***/ }),

/***/ "./src/render-grid.js":
/*!****************************!*\
  !*** ./src/render-grid.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _check_end_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-end-game */ \"./src/check-end-game.js\");\n/* harmony import */ var _handle_player_turn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handle-player-turn */ \"./src/handle-player-turn.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _place_ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./place-ship */ \"./src/place-ship.js\");\n/* harmony import */ var _create_grid_square__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-grid-square */ \"./src/create-grid-square.js\");\n/* harmony import */ var _highlight_ship_placement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./highlight-ship-placement */ \"./src/highlight-ship-placement.js\");\n\n\n\n\n\n\n\nconst mouseOverSquareHandler = (playerState, rowIndex, cellIndex) => {\n  if (playerState.placingShips) {\n    (0,_highlight_ship_placement__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(playerState, rowIndex, cellIndex, true);\n  }\n};\n\nconst mouseOutSquareHandler = (playerState, rowIndex, cellIndex) => {\n  if (playerState.placingShips) {\n    (0,_highlight_ship_placement__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(playerState, rowIndex, cellIndex, false);\n  }\n};\n\nconst renderGrid = (\n  gameboard,\n  player,\n  opponent,\n  container,\n  isOpponent,\n  playerState,\n  opponentState,\n) => {\n  container.textContent = '';\n  gameboard.grid.forEach((row, rowIndex) => {\n    row.forEach((cell, cellIndex) => {\n      const gridSquare = (0,_create_grid_square__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\n        rowIndex,\n        cellIndex,\n        cell,\n        isOpponent,\n      );\n\n      if (!isOpponent) {\n        gridSquare.addEventListener('mouseover', () => {\n          mouseOverSquareHandler(playerState, rowIndex, cellIndex);\n        });\n\n        gridSquare.addEventListener('mouseout', () => {\n          mouseOutSquareHandler(playerState, rowIndex, cellIndex);\n        });\n\n        gridSquare.addEventListener('click', () => {\n          if (playerState.placingShips) {\n            let playerShip = new _ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\n              playerState.currentShip.length,\n              playerState.currentShip.name,\n            );\n            let opponentShip = new _ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\n              opponentState.currentShip.length,\n              opponentState.currentShip.name,\n            );\n            let randX, randY, randOrientation, placedOpponenet;\n\n            console.log(playerShip);\n\n            const placedPlayer = (0,_place_ship__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n              player.gameboard,\n              playerShip,\n              rowIndex,\n              cellIndex,\n              playerState.orientation,\n            );\n\n            if (placedPlayer) {\n              for (let attempts = 0; attempts < 100; attempts++) {\n                randX = Math.floor(Math.random() * 10);\n                randY = Math.floor(Math.random() * 10);\n                randOrientation =\n                  Math.floor(Math.random() * 10) > 5\n                    ? (opponentState.orientation = 'vertical')\n                    : (opponentState.orientation = 'horizontal');\n                placedOpponenet = (0,_place_ship__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n                  opponent.gameboard,\n                  opponentShip,\n                  randX,\n                  randY,\n                  opponentState.orientation,\n                );\n                if (placedOpponenet) break;\n              }\n            }\n\n            if (placedOpponenet) {\n              renderGrid(\n                player.gameboard,\n                player,\n                opponent,\n                container,\n                false,\n                playerState,\n                opponentState,\n              );\n              playerState.currentShipIndex++;\n              opponentState.currentShipIndex++;\n              if (playerState.currentShipIndex >= playerState.ships.length) {\n                playerState.placingShips = false;\n              } else {\n                playerState.currentShip =\n                  playerState.ships[playerState.currentShipIndex];\n                opponentState.currentShip =\n                  opponentState.ships[opponentState.currentShipIndex];\n              }\n            } else {\n              alert('Invalid ship placement');\n            }\n          }\n        });\n      } else {\n        gridSquare.addEventListener('click', () => {\n          if (!playerState.placingShips) {\n            (0,_handle_player_turn__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(player, opponent, rowIndex, cellIndex, gridSquare);\n            if ((0,_check_end_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(player, opponent)) {\n              resetGame();\n            }\n          } else {\n            alert('Finish placing all ships');\n          }\n        });\n      }\n\n      container.appendChild(gridSquare);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGrid);\n\n\n//# sourceURL=webpack://template/./src/render-grid.js?");

/***/ }),

/***/ "./src/reset-game.js":
/*!***************************!*\
  !*** ./src/reset-game.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst resetGame = (\n  player,\n  opponent,\n  player1Gameboard,\n  currentShipIndex,\n  orientation,\n) => {\n  currentShipIndex = 0;\n  currentShipLength = ships[currentShipIndex];\n  placingShips = true;\n  orientation = 'horizontal';\n\n  player.gameboard.reset();\n  opponent.gameboard.reset();\n\n  renderGrid(\n    player.gameboard,\n    player,\n    opponent,\n    player1Gameboard,\n    false,\n    ships,\n    currentShipIndex,\n    currentShipLength,\n    placingShips,\n    orientation,\n  );\n  renderGrid(\n    opponent.gameboard,\n    player,\n    opponent,\n    player2Gameboard,\n    true,\n    ships,\n    currentShipIndex,\n    currentShipLength,\n    placingShips,\n    orientation,\n  );\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resetGame);\n\n\n//# sourceURL=webpack://template/./src/reset-game.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Ship {\n  constructor(length, name) {\n    this.length = length;\n    this.name = name;\n    this.timesHit = 0;\n    this.sunk = false;\n  }\n\n  hit() {\n    if (this.timesHit < this.length) {\n      this.timesHit++;\n    }\n    this.checkIfSunk();\n  }\n\n  checkIfSunk() {\n    this.sunk = this.timesHit >= this.length;\n  }\n\n  isSunk() {\n    return this.sunk;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n\n//# sourceURL=webpack://template/./src/ship.js?");

/***/ }),

/***/ "./src/start-new-game.js":
/*!*******************************!*\
  !*** ./src/start-new-game.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _render_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render-grid */ \"./src/render-grid.js\");\n/* harmony import */ var _reset_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset-game */ \"./src/reset-game.js\");\n\n\n\n\n\nconst player1Gameboard = document.querySelector('#player1Gameboard');\nconst player2Gameboard = document.querySelector('#player2Gameboard');\n\nlet player;\nlet opponent;\n\n// const ships = [1, 2, 3, 4, 5];\nconst ships = [\n  { name: 'Patrol', length: 1 },\n  { name: 'Destroyer', length: 2 },\n  { name: 'Submarine', length: 3 },\n  { name: 'Battleship', length: 4 },\n  { name: 'Aircraft Carrier', length: 5 },\n];\n\nlet placingShips = true;\n\nconst playerState = {\n  ships: ships,\n  currentShipIndex: 0,\n  currentShip: ships[0].length,\n  placingShips: placingShips,\n  orientation: 'horizontal',\n};\n\nconst opponentState = {\n  ships: ships,\n  currentShipIndex: 0,\n  currentShip: ships[0].length,\n  placingShips: placingShips,\n  orientation: 'horizontal',\n};\n\ndocument.addEventListener('keydown', (event) => {\n  if (event.key === 'r' || event.key === 'R') {\n    playerState.orientation =\n      playerState.orientation === 'horizontal' ? 'vertical' : 'horizontal';\n  }\n});\n\nconst startNewGame = () => {\n  player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('real');\n  opponent = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('computer');\n\n  playerState.currentShipIndex = 0;\n  playerState.currentShip = playerState.ships[playerState.currentShipIndex];\n  playerState.placingShips = true;\n  playerState.orientation = 'horizontal';\n\n  opponentState.currentShipIndex = 0;\n  opponentState.currentShip =\n    opponentState.ships[opponentState.currentShipIndex];\n  opponentState.placingShips = true;\n  opponentState.orientation = 'horizontal';\n\n  player.gameboard.reset();\n  opponent.gameboard.reset();\n\n  (0,_render_grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n    player.gameboard,\n    player,\n    opponent,\n    player1Gameboard,\n    false,\n    playerState,\n    opponentState,\n  );\n  (0,_render_grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n    opponent.gameboard,\n    player,\n    opponent,\n    player2Gameboard,\n    true,\n    playerState,\n    opponentState,\n  );\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startNewGame);\n\n\n//# sourceURL=webpack://template/./src/start-new-game.js?");

/***/ }),

/***/ "./src/update-player-gameboard.js":
/*!****************************************!*\
  !*** ./src/update-player-gameboard.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst updatePlayerGameboard = (player) => {\n  player.gameboard.grid.forEach((row, rowIndex) => {\n    row.forEach((cell, cellIndex) => {\n      const gridSquare = player1Gameboard.querySelector(\n        `[data-row='${rowIndex}'][data-cell='${cellIndex}']`,\n      );\n\n      if (cell === 'hit') {\n        gridSquare.classList.add('hit-ship');\n        gridSquare.classList.remove('ship');\n      } else if (cell === 'miss') {\n        gridSquare.classList.add('miss');\n      }\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updatePlayerGameboard);\n\n\n//# sourceURL=webpack://template/./src/update-player-gameboard.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;