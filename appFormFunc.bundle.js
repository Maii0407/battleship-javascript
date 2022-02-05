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

/***/ "./src/appComponents.js":
/*!******************************!*\
  !*** ./src/appComponents.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appComponents\": () => (/* binding */ appComponents)\n/* harmony export */ });\n/* harmony import */ var _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factoryLogic/factoryLogic */ \"./src/factoryLogic/factoryLogic.js\");\n\n\nconst appComponents = (function() {\n    \n//IMPORTANT make all ships have a length of 6 makes it easier to code cause im lazy\n\nconst playerBoard = new _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__.factoryLogic.Gameboard( 'PlayerBoard' );\nconst playerShip0 = new _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__.factoryLogic.Ship( 'Ship-1', 4, 0 );\nconst playerShip1 = new _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__.factoryLogic.Ship( 'Ship-2', 4, 1 );\nconst playerShip2 = new _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__.factoryLogic.Ship( 'Ship-3', 4, 2 );\nplayerBoard.shipList.push( playerShip0, playerShip1, playerShip2 );\n\nconst comBoard = new _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__.factoryLogic.Gameboard( 'ComputerBoard' );\nconst comShip0 = new _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__.factoryLogic.Ship( 'comShip-1', 4, 0 );\nconst comShip1 = new _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__.factoryLogic.Ship( 'comShip-2', 4, 1 );\nconst comShip2 = new _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__.factoryLogic.Ship( 'comShip-3', 4, 2 );\ncomBoard.shipList.push( comShip0, comShip1, comShip2 );\n\n//below is for testing purposes\n/* playerShip0.setPosition( [0, 1, 2, 3] );\nplayerBoard.placeShip( playerShip0 );\n\ncomShip0.setPosition( [0, 1, 2, 3] );\ncomBoard.placeShip( comShip0 );\ncomShip1.setPosition( [8, 9, 10, 11] );\ncomBoard.placeShip( comShip1 );\ncomShip2.setPosition( [15, 16, 17, 18] );\ncomBoard.placeShip( comShip2 );\ncomShip3.setPosition( [45, 46, 47, 48] );\ncomBoard.placeShip( comShip3 );\ncomShip4.setPosition( [38, 39, 40, 41] );\ncomBoard.placeShip( comShip4 ); */\n\nreturn {\n    playerBoard,\n    comBoard,\n    playerShip0,\n};\n})();\n\n\n\n//# sourceURL=webpack://space-battleship/./src/appComponents.js?");

/***/ }),

/***/ "./src/appFormFunc.js":
/*!****************************!*\
  !*** ./src/appFormFunc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appFormFunc\": () => (/* binding */ appFormFunc)\n/* harmony export */ });\n/* harmony import */ var _appComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appComponents */ \"./src/appComponents.js\");\n\n\nconst appFormFunc = (function() {\n    function placeHorizontal( ship ) {\n        let val = Number(document.getElementById( `${ship.name}-position` ).value);\n        let val2 = Number( val ) + 1;\n        let val3 = Number( val2 ) + 1;\n        let val4 = Number( val3 ) + 1;\n\n        //this still needs work\n        if( val4 >= 6 || val4 >= 13 || val4 >= 20 || val4 >= 27 || val4 >= 34 || val4 >= 41 || val4 >= 48 ) {\n            return;\n        } else {\n            ship.setPosition( [val, val2, val3, Number( val4 )] );\n        };\n    };\n\n    function placeVertical( ship ) {\n        let val = Number(document.getElementById( `${ship.name}-position` ).value);\n        let val2 = Number( val ) + 7;\n        let val3 = Number( val2 ) + 7;\n        let val4 = Number( val3 ) + 7;\n\n        if( val4 >= 49 ) {\n            return;\n        } else {\n            ship.setPosition( [val, val2, val3, Number( val4 )] );\n        };\n    };\n\n    function submitShipLocation( ship ) {\n        const verticalCollision = [28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48];\n        const horizontalCollision = [4,5,6,11,12,13,18,19,20,25,26,27,32,33,34,39,40,41,46,47,48];\n\n        if( document.getElementById( `${ship.name}-direction` ).value === 'horizontal' ) {\n            placeHorizontal( ship );\n        } else if( document.getElementById( `${ship.name}-direction` ).value === 'vertical' ) {\n            placeVertical( ship );\n        } else {\n            return;\n        };\n\n        _appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.playerBoard.placeShip( ship );\n        document.getElementById( `${ship.name}-position` ).value = '';\n    };\n\n    return {\n        submitShipLocation,\n    };\n})();\n\n\n\n//# sourceURL=webpack://space-battleship/./src/appFormFunc.js?");

/***/ }),

/***/ "./src/factoryLogic/factoryLogic.js":
/*!******************************************!*\
  !*** ./src/factoryLogic/factoryLogic.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"factoryLogic\": () => (/* binding */ factoryLogic)\n/* harmony export */ });\nconst factoryLogic = ( function() {\n\n//below is class that generates ships and their methods\n    class Ship {\n        constructor( name, length, shipIndex ) {\n            this.name = name;\n            this.length = length;\n            this.shipIndex = shipIndex;\n            this.position = [];\n            this.hits = [];\n            this.sunkStatus = false;\n        }\n\n        setPosition(positionArray) {\n            positionArray.forEach( object => {\n                this.position.push( object );\n            });\n        }\n\n        isHit(pos) {\n            return this.hits.push(pos);\n        }\n\n        isSunk() {\n            if( this.hits.length === this.length ) { \n                return this.sunkStatus = true;\n            } else {\n                return this.sunkStatus;\n            }\n        }\n    };\n\n//below is class that generates the gameboards and their methods\n    class Gameboard {\n        constructor( name ) {\n            this.name = name;\n            this.boardArray = []\n            this.shipList = [];\n            this.generateBoard();\n            this.allShips = 'sunk';\n        }\n\n        generateBoard() {\n            for( let i = 0; i < 49; i++) {\n                this.boardArray.push({ haveShip: 'empty', isAttacked: 'empty' });\n            }\n        }\n\n        getHaveShip(boardIndex) {\n            return this.boardArray[boardIndex].haveShip;\n        }\n\n        recordAttack(boardIndex) {\n            if( this.boardArray[boardIndex].haveShip === 'empty' ) {\n                this.boardArray[boardIndex].isAttacked = 'missed';\n            } else {\n                const shipIndex = this.getHaveShip(boardIndex);\n                this.boardArray[boardIndex].isAttacked = 'shot';\n                this.shipList[shipIndex].isHit( boardIndex );\n            } \n        }\n\n        placeShip(ship) {\n            ship.position.forEach( object => {\n                return this.boardArray[object].haveShip = ship.shipIndex;\n            });\n        }\n\n        checkSunkShips() {\n            for ( let obj of this.shipList) {\n                obj.isSunk();\n\n                if( obj.sunkStatus === false ) {\n                    return this.allShips = 'not sunk';\n                }\n            };\n            return this.allShips;\n        }\n    };\n\n    return {\n        Ship,\n        Gameboard,\n    };\n})();\n\n\n\n//# sourceURL=webpack://space-battleship/./src/factoryLogic/factoryLogic.js?");

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
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/appFormFunc.js");
/******/ 	
/******/ })()
;