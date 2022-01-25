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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"logic\": () => (/* binding */ logic)\n/* harmony export */ });\n\nconst logic = ( function() {\n    const shipList = [];\n\n//below is class that generates ships and their methods\n    class Ship {\n        constructor( name, length ) {\n            this.name = name;\n            this.length = length;\n            this.position = [];\n            this.hits = [];\n        }\n\n        setPosition(positionArray) {\n            positionArray.forEach( object => {\n                this.position.push( object );\n            });\n        }\n\n        isHit(pos) {\n            return this.hits.push(pos);\n        }\n\n        isSunk() {\n            if( JSON.stringify( this.hits ) === JSON.stringify( this.position ) ) { \n                return true;\n            } else {\n                return false;\n            }\n        }\n    };\n\n//below is class that generates the gameboards and their methods\n    class Gameboard {\n        constructor() {\n            this.boardArray = []\n            this.generateBoard();\n        }\n\n        generateBoard() {\n            for( let i = 0; i < 49; i++) {\n                this.boardArray.push({ haveShip: false, isAttacked: 'empty' });\n            }\n        }\n\n        recordAttack(boardIndex) {\n            if( this.boardArray[boardIndex].haveShip === false ) {\n                return this.boardArray[boardIndex].isAttacked = 'missed';\n            } else if( this.boardArray[boardIndex].haveShip === true ) {\n                return this.boardArray[boardIndex].isAttacked = 'shot';\n            } else {\n                return;\n            }\n        }\n\n        placeShip(boardIndex) {\n            boardIndex.forEach( object => {\n                return this.boardArray[object].haveShip = true;\n            });\n        }\n\n        checkSunkShips() {}\n    };\n\n    return {\n        shipList,\n        Ship,\n        Gameboard,\n    };\n})();\n\n\n\n//# sourceURL=webpack://space-battleship/./src/logic/logic.js?");

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