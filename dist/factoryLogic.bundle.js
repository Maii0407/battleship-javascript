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

/***/ "./src/factoryLogic/factoryLogic.js":
/*!******************************************!*\
  !*** ./src/factoryLogic/factoryLogic.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"factoryLogic\": () => (/* binding */ factoryLogic)\n/* harmony export */ });\n\nconst factoryLogic = ( function() {\n\n//below is class that generates ships and their methods\n    class Ship {\n        constructor( name, length, shipIndex ) {\n            this.name = name;\n            this.length = length;\n            this.shipIndex = shipIndex;\n            this.position = [];\n            this.hits = [];\n            this.sunkStatus = false;\n        }\n\n        setPosition(positionArray) {\n            positionArray.forEach( object => {\n                this.position.push( object );\n            });\n        }\n\n        isHit(pos) {\n            return this.hits.push(pos);\n        }\n\n        isSunk() {\n            if( this.hits.length === this.length ) { \n                return this.sunkStatus = true;\n            } else {\n                return this.sunkStatus;\n            }\n        }\n    };\n\n//below is class that generates the gameboards and their methods\n    class Gameboard {\n        constructor() {\n            this.boardArray = []\n            this.shipList = [];\n            this.generateBoard();\n            this.allShips = 'sunk';\n        }\n\n        generateBoard( gridSize ) {\n            for( let i = 0; i < 49; i++) {\n                this.boardArray.push({ haveShip: 'empty', isAttacked: 'empty' });\n            }\n        }\n\n        getHaveShip(boardIndex) {\n            return this.boardArray[boardIndex].haveShip;\n        }\n\n        recordAttack(boardIndex) {\n            if( this.boardArray[boardIndex].haveShip === 'empty' ) {\n                this.boardArray[boardIndex].isAttacked = 'missed';\n            } else {\n                const shipIndex = this.getHaveShip(boardIndex);\n                this.boardArray[boardIndex].isAttacked = 'shot';\n                this.shipList[shipIndex].isHit( boardIndex );\n            } \n        }\n\n        placeShip(board) {\n            board.position.forEach( object => {\n                return this.boardArray[object].haveShip = board.shipIndex;\n            });\n        }\n\n        checkSunkShips() {\n            for ( let obj of this.shipList) {\n                obj.isSunk();\n\n                if( obj.sunkStatus === false ) {\n                    return this.allShips = 'not sunk';\n                }\n            };\n            return this.allShips;\n        }\n    };\n\n    return {\n        Ship,\n        Gameboard,\n    };\n})();\n\n\n\n//# sourceURL=webpack://space-battleship/./src/factoryLogic/factoryLogic.js?");

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
/******/ 	__webpack_modules__["./src/factoryLogic/factoryLogic.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;