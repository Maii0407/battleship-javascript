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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appComponents\": () => (/* binding */ appComponents)\n/* harmony export */ });\n/* harmony import */ var _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factoryLogic/factoryLogic */ \"./src/factoryLogic/factoryLogic.js\");\n\n\nconst appComponents = (function() {\n    \n//IMPORTANT make all ships have a length of 6 makes it easier to code cause im lazy\n\nconst playerBoard = new _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__.factoryLogic.Gameboard( 'PlayerBoard' );\nconst playerShip0 = new _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__.factoryLogic.Ship( 'Ship-1', 4, 0 );\nconst playerShip1 = new _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__.factoryLogic.Ship( 'Ship-2', 4, 1 );\nconst playerShip2 = new _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__.factoryLogic.Ship( 'Ship-3', 4, 2 );\nconst playerShip3 = new _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__.factoryLogic.Ship( 'Ship-4', 4, 3 );\nplayerBoard.shipList.push( playerShip0, playerShip1, playerShip2, playerShip3 );\n\nconst comBoard = new _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__.factoryLogic.Gameboard( 'ComputerBoard' );\nconst comShip0 = new _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__.factoryLogic.Ship( 'comShip-1', 4, 0 );\nconst comShip1 = new _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__.factoryLogic.Ship( 'comShip-2', 4, 1 );\nconst comShip2 = new _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__.factoryLogic.Ship( 'comShip-3', 4, 2 );\nconst comShip3 = new _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__.factoryLogic.Ship( 'comShip-4', 4, 3 );\ncomBoard.shipList.push( comShip0, comShip1, comShip2, comShip3 );\n\nreturn {\n    playerBoard,\n    comBoard,\n    playerShip0,\n};\n})();\n\n\n\n//# sourceURL=webpack://space-battleship/./src/appComponents.js?");

/***/ }),

/***/ "./src/appUI.js":
/*!**********************!*\
  !*** ./src/appUI.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appUI\": () => (/* binding */ appUI)\n/* harmony export */ });\n/* harmony import */ var _appComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appComponents */ \"./src/appComponents.js\");\n\n\nconst appUI = (function() {\n//generate a main container div\n    function makeContainer() {\n        const mainContainer = document.createElement( 'div' );\n        mainContainer.classList.add( 'main-container' );\n        document.body.appendChild( mainContainer );\n    };\n\n    function makeTitleContainer() {\n        const title = document.createElement( 'div' );\n        title.classList.add( 'title-container' );\n        title.innerText = `MAII'S BATTLESHIP`;\n        document.querySelector( '.main-container' ).appendChild( title );\n    };\n\n    function makeContentContainer() {\n        const content = document.createElement( 'div' );\n        content.classList.add( 'content-container' );\n        document.querySelector( '.main-container' ).appendChild( content );\n    };\n\n    function makeMenuContainer() {\n        const menu = document.createElement( 'div' );\n        menu.classList.add( 'menu-container' );\n        menu.innerHTML = `\n          <button type=\"button\" class=\"start-btn\">START GAME</button>\n          <button type=\"button\" class=\"reset-btn\">RESET GAME</button>`;\n        document.querySelector( '.content-container' ).appendChild( menu );\n    };\n\n//generate a board container for the boards\n    function makeBoardContainer() {\n        const boardContainer = document.createElement( 'div' );\n        boardContainer.classList.add( 'board-container' );\n        document.querySelector( '.content-container' ).appendChild( boardContainer );\n    };\n\n    function makeFormWrapper() {\n        const form = document.createElement( 'div' );\n        form.classList.add( 'form-wrapper' );\n        document.querySelector( '.board-container' ).appendChild( form );\n    };\n\n//append a board inside the board container then generates the cells for the grid\n    function generatePlayerBoard() {\n        const board = document.createElement( 'div' );\n        board.classList.add( 'board', 'player-board' );\n        board.id = _appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.playerBoard.name;\n        document.querySelector( '.board-container' ).appendChild( board );\n    };\n\n    function generatePlayerCell() {\n        document.querySelector( '.player-board' ).innerHTML = '';\n        for( let obj of _appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.playerBoard.boardArray ) {\n            let cell = document.createElement( 'div' );\n            cell.classList.add( 'cell' );\n            cell.id = _appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.playerBoard.boardArray.indexOf( obj );\n\n              if( obj.haveShip === 'empty' ) {\n                  cell.style.backgroundColor = 'black';\n              }  else {\n                  cell.style.backgroundColor = 'silver';\n              };\n\n            document.getElementById( `${_appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.playerBoard.name}` ).appendChild( cell );\n        };\n    };\n\n//append a board inside the board container then generates the cells for the grid\n    function generateComBoard() {\n        const board = document.createElement( 'div' );\n        board.classList.add( 'board', 'com-board' );\n        board.id = _appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.comBoard.name;\n        document.querySelector( '.board-container' ).appendChild( board );\n    };\n\n    function generateComCell() {\n        for( let obj of _appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.comBoard.boardArray ) {\n            let cell = document.createElement( 'div' );\n            cell.classList.add( 'cell', 'com-cell' );\n            cell.id = _appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.comBoard.boardArray.indexOf( obj );\n            document.getElementById( `${_appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.comBoard.name}` ).appendChild( cell );\n        };\n    };\n\n    function generateForm() {\n        const formContainer = document.createElement( 'div' );\n        formContainer.classList.add( 'form-container' );\n        document.querySelector( '.form-wrapper' ).appendChild( formContainer );\n        for( let obj of _appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.playerBoard.shipList ) {\n          const form = document.createElement( 'form' );\n          form.innerHTML = `   \n            <h1>${obj.name}</h1>\n            <label for=\"${obj.name}-direction\">Choose ship direction:</label>\n            <select id=\"${obj.name}-direction\" name=\"${obj.name}-direction\">\n              <option value=\"horizontal\">Horizontal</option>\n              <option value=\"vertical\">Vertical</option>\n            </select>\n            <input type=\"number\" id=\"${obj.name}-position\" placeholder=\"Enter Ship 1 Coordinate\" min=\"0\" max=\"48\">\n            <div class=\"button-container\">\n              <button type=\"button\" class=\"clear-btn\" id=\"${obj.name}-clearBtn\">CLEAR SHIP</button>\n              <button type=\"button\" class=\"submit-btn\" id=\"${obj.name}-btn\">PLACE SHIP</button>\n            </div>`;\n          document.querySelector( '.form-container' ).appendChild( form ); \n        };\n    };\n\n    function generateRandomButton() {\n        const randomButton = document.createElement( 'button' );\n        randomButton.setAttribute( 'type', 'button' );\n        randomButton.classList.add( 'placeRandom-btn' );\n        randomButton.innerText = 'ALL RANDOM';\n\n        document.querySelector( '.form-container' ).appendChild( randomButton );\n    };\n\n    return {\n        makeContainer,\n        makeTitleContainer,\n        makeContentContainer,\n        makeMenuContainer,\n        makeBoardContainer,\n        makeFormWrapper,\n        generatePlayerBoard,\n        generatePlayerCell,\n        generateComBoard,\n        generateComCell,\n        generateForm,\n        generateRandomButton,\n    };\n})();\n\n\n\n//# sourceURL=webpack://space-battleship/./src/appUI.js?");

/***/ }),

/***/ "./src/factoryLogic/factoryLogic.js":
/*!******************************************!*\
  !*** ./src/factoryLogic/factoryLogic.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"factoryLogic\": () => (/* binding */ factoryLogic)\n/* harmony export */ });\nconst factoryLogic = ( function() {\n\n//below is class that generates ships and their methods\n    class Ship {\n        constructor( name, length, shipIndex ) {\n            this.name = name;\n            this.length = length;\n            this.shipIndex = shipIndex;\n            this.position = [];\n            this.hits = [];\n            this.sunkStatus = false;\n        }\n\n        setPosition( positionArray ) {\n            positionArray.forEach( object => {\n                this.position.push( object );\n            });\n        }\n\n        isHit(pos) {\n            return this.hits.push(pos);\n        }\n\n        isSunk() {\n            if( this.hits.length === this.length ) { \n                return this.sunkStatus = true;\n            } else {\n                return this.sunkStatus;\n            }\n        }\n    };\n\n//below is class that generates the gameboards and their methods\n    class Gameboard {\n        constructor( name ) {\n            this.name = name;\n            this.boardArray = []\n            this.shipList = [];\n            this.generateBoard();\n            this.allShips = 'sunk';\n        }\n\n        generateBoard() {\n            for( let i = 0; i < 49; i++) {\n                this.boardArray.push({ haveShip: 'empty', isAttacked: 'empty' });\n            }\n        }\n\n        getHaveShip(boardIndex) {\n            return this.boardArray[boardIndex].haveShip;\n        }\n\n        recordAttack(boardIndex) {\n            if( this.boardArray[boardIndex].haveShip === 'empty' ) {\n                this.boardArray[boardIndex].isAttacked = 'missed';\n            } else {\n                const shipIndex = this.getHaveShip(boardIndex);\n                this.boardArray[boardIndex].isAttacked = 'shot';\n                this.shipList[shipIndex].isHit( boardIndex );\n            } \n        }\n\n        placeShip(ship) {\n            ship.position.forEach( object => {\n                return this.boardArray[object].haveShip = ship.shipIndex;\n            });\n        }\n\n        checkSunkShips() {\n            for ( let obj of this.shipList) {\n                obj.isSunk();\n\n                if( obj.sunkStatus === false ) {\n                    return this.allShips = 'not sunk';\n                }\n            };\n            return this.allShips;\n        }\n    };\n\n    return {\n        Ship,\n        Gameboard,\n    };\n})();\n\n\n\n//# sourceURL=webpack://space-battleship/./src/factoryLogic/factoryLogic.js?");

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