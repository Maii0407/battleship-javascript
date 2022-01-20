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

/***/ "./src/logic/logic.js":
/*!****************************!*\
  !*** ./src/logic/logic.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"logic\": () => (/* binding */ logic)\n/* harmony export */ });\n\nconst logic = ( function() {\n    const shipList = [];\n\n    class Ship {\n        constructor(name, length) {\n            this.name = name;\n            this.length = length;\n            this.hits = [];\n        }\n\n        hit(life) {\n            this.hits.push(life);\n        }\n\n        isSunk() {\n            if( this.hits.length === this.length) {\n                console.log( `${this.name} is sunk by the enemy.`);\n            } else {\n                return;\n            }\n        }\n    };\n\n    const carrier = new Ship( 'Carrier', 6 );\n    const battleship1 = new Ship( 'Battleship 1', 4);\n    const battleship2 = new Ship( 'Battleship 2', 4);\n    const cruiser1 = new Ship( 'Cruiser 1', 3);\n    const cruiser2 = new Ship( 'Cruiser 2', 3);\n    const cruiser3 = new Ship( 'Cruiser 3', 3);\n    const destroyer1 = new Ship( 'Destroyer 1', 2);\n    const destroyer2 = new Ship( 'Destroyer 2', 2);\n    const destroyer3 = new Ship( 'Destroyer 3', 2);\n    const destroyer4 = new Ship( 'Destroyer 4', 2);\n\n    shipList.push( carrier, battleship1, battleship2, cruiser1, cruiser2, cruiser3, destroyer1, destroyer2, destroyer3, destroyer4 );\n\n    return {\n        shipList,\n    };\n})();\n\n\n\n//# sourceURL=webpack://space-battleship/./src/logic/logic.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/logic/logic.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;