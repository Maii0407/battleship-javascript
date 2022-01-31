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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appComponents\": () => (/* binding */ appComponents)\n/* harmony export */ });\n/* harmony import */ var _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factoryLogic/factoryLogic */ \"./src/factoryLogic/factoryLogic.js\");\n\n\nconst appComponents = (function() {\n    \nconst playerBoard = new _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__.factoryLogic.Gameboard( 'PlayerBoard' );\nconst playerShip0 = new _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__.factoryLogic.Ship( 'Dreadnought', 5, 0 );\nconst playerShip1 = new _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__.factoryLogic.Ship( 'Lightcruiser', 4, 1 );\nconst playerShip2 = new _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__.factoryLogic.Ship( 'Gunship', 3, 2 );\nconst playerShip3 = new _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__.factoryLogic.Ship( 'Starfighter', 2, 3 );\nconst playerShip4 = new _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__.factoryLogic.Ship( 'Starfighter', 2, 4 );\nplayerBoard.shipList.push( playerShip0, playerShip1, playerShip2, playerShip3, playerShip4 );\n\nconst comBoard = new _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__.factoryLogic.Gameboard( 'ComputerBoard' );\nconst comShip0 = new _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__.factoryLogic.Ship( 'Dreadnought', 5, 0 );\nconst comShip1 = new _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__.factoryLogic.Ship( 'Lightcruiser', 4, 1 );\nconst comShip2 = new _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__.factoryLogic.Ship( 'Gunship', 3, 2 );\nconst comShip3 = new _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__.factoryLogic.Ship( 'Starfighter', 2, 3 );\nconst comShip4 = new _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__.factoryLogic.Ship( 'Starfighter', 2, 4 );\ncomBoard.shipList.push( comShip0, comShip1, comShip2, comShip3, comShip4 );\n\n//below is for testing purposes\nplayerShip0.setPosition( [0, 1, 2, 3, 4] );\nplayerBoard.placeShip( playerShip0 );\n\nreturn {\n    playerBoard,\n    comBoard,\n};\n})();\n\n\n\n//# sourceURL=webpack://space-battleship/./src/appComponents.js?");

/***/ }),

/***/ "./src/appUI.js":
/*!**********************!*\
  !*** ./src/appUI.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appUI\": () => (/* binding */ appUI)\n/* harmony export */ });\n/* harmony import */ var _appComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appComponents */ \"./src/appComponents.js\");\n\n\nconst appUI = (function() {\n    function makeContainer() {\n        const mainContainer = document.createElement( 'div' );\n        mainContainer.classList.add( 'main-container' );\n        document.body.appendChild( mainContainer );\n    };\n\n    function makeBoardContainer() {\n        const boardContainer = document.createElement( 'div' );\n        boardContainer.classList.add( 'board-container' );\n        document.querySelector( '.main-container' ).appendChild( boardContainer );\n    };\n\n    function generatePlayerBoard() {\n        const board = document.createElement( 'div' );\n        board.classList.add( 'board' );\n        board.id = _appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.playerBoard.name;\n        document.querySelector( '.board-container' ).appendChild( board );\n\n        for( let obj of _appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.playerBoard.boardArray ) {\n            let cell = document.createElement( 'div' );\n            cell.classList.add( 'cell' );\n            cell.id = _appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.playerBoard.boardArray.indexOf( obj );\n\n              if( obj.haveShip === 'empty' ) {\n                  cell.style.backgroundColor = 'black';\n              } else {\n                  cell.style.backgroundColor = 'silver';\n              }\n\n            document.getElementById( `${_appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.playerBoard.name}` ).appendChild( cell );\n        };\n    };\n\n    function generateComBoard() {\n        const board = document.createElement( 'div' );\n        board.classList.add( 'board' );\n        board.id = _appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.comBoard.name;\n        document.querySelector( '.board-container' ).appendChild( board );\n\n        for( let obj of _appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.comBoard.boardArray ) {\n            let cell = document.createElement( 'div' );\n            cell.classList.add( 'cell' );\n            cell.id = _appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.comBoard.boardArray.indexOf( obj );\n            document.getElementById( `${_appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.comBoard.name}` ).appendChild( cell );\n        };\n    };\n\n    return {\n        makeContainer,\n        makeBoardContainer,\n        generatePlayerBoard,\n        generateComBoard,\n    };\n})();\n\n\n\n//# sourceURL=webpack://space-battleship/./src/appUI.js?");

/***/ }),

/***/ "./src/factoryLogic/factoryLogic.js":
/*!******************************************!*\
  !*** ./src/factoryLogic/factoryLogic.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"factoryLogic\": () => (/* binding */ factoryLogic)\n/* harmony export */ });\n\nconst factoryLogic = ( function() {\n\n//below is class that generates ships and their methods\n    class Ship {\n        constructor( name, length, shipIndex ) {\n            this.name = name;\n            this.length = length;\n            this.shipIndex = shipIndex;\n            this.position = [];\n            this.hits = [];\n            this.sunkStatus = false;\n        }\n\n        setPosition(positionArray) {\n            positionArray.forEach( object => {\n                this.position.push( object );\n            });\n        }\n\n        isHit(pos) {\n            return this.hits.push(pos);\n        }\n\n        isSunk() {\n            if( this.hits.length === this.length ) { \n                return this.sunkStatus = true;\n            } else {\n                return this.sunkStatus;\n            }\n        }\n    };\n\n//below is class that generates the gameboards and their methods\n    class Gameboard {\n        constructor( name ) {\n            this.name = name;\n            this.boardArray = []\n            this.shipList = [];\n            this.generateBoard();\n            this.allShips = 'sunk';\n        }\n\n        generateBoard( gridSize ) {\n            for( let i = 0; i < 49; i++) {\n                this.boardArray.push({ haveShip: 'empty', isAttacked: 'empty' });\n            }\n        }\n\n        getHaveShip(boardIndex) {\n            return this.boardArray[boardIndex].haveShip;\n        }\n\n        recordAttack(boardIndex) {\n            if( this.boardArray[boardIndex].haveShip === 'empty' ) {\n                this.boardArray[boardIndex].isAttacked = 'missed';\n            } else {\n                const shipIndex = this.getHaveShip(boardIndex);\n                this.boardArray[boardIndex].isAttacked = 'shot';\n                this.shipList[shipIndex].isHit( boardIndex );\n            } \n        }\n\n        placeShip(board) {\n            board.position.forEach( object => {\n                return this.boardArray[object].haveShip = board.shipIndex;\n            });\n        }\n\n        checkSunkShips() {\n            for ( let obj of this.shipList) {\n                obj.isSunk();\n\n                if( obj.sunkStatus === false ) {\n                    return this.allShips = 'not sunk';\n                }\n            };\n            return this.allShips;\n        }\n    };\n\n    return {\n        Ship,\n        Gameboard,\n    };\n})();\n\n\n\n//# sourceURL=webpack://space-battleship/./src/factoryLogic/factoryLogic.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/appUI.js");
/******/ 	
/******/ })()
;