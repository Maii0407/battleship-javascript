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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appComponents\": () => (/* binding */ appComponents)\n/* harmony export */ });\n/* harmony import */ var _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factoryLogic/factoryLogic */ \"./src/factoryLogic/factoryLogic.js\");\n\n\nconst appComponents = (function() {\n    \n//IMPORTANT make all ships have a length of 6 makes it easier to code cause im lazy\n\nconst playerBoard = new _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__.factoryLogic.Gameboard( 'PlayerBoard' );\nconst playerShip0 = new _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__.factoryLogic.Ship( 'Dreadnought', 4, 0 );\nconst playerShip1 = new _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__.factoryLogic.Ship( 'Lightcruiser', 4, 1 );\nconst playerShip2 = new _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__.factoryLogic.Ship( 'Gunship', 4, 2 );\nconst playerShip3 = new _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__.factoryLogic.Ship( 'Starfighter', 4, 3 );\nplayerBoard.shipList.push( playerShip0, playerShip1, playerShip2, playerShip3, );\n\nconst comBoard = new _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__.factoryLogic.Gameboard( 'ComputerBoard' );\nconst comShip0 = new _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__.factoryLogic.Ship( 'Dreadnought', 4, 0 );\nconst comShip1 = new _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__.factoryLogic.Ship( 'Lightcruiser', 4, 1 );\nconst comShip2 = new _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__.factoryLogic.Ship( 'Gunship', 4, 2 );\nconst comShip3 = new _factoryLogic_factoryLogic__WEBPACK_IMPORTED_MODULE_0__.factoryLogic.Ship( 'Starfighter', 4, 3 );\ncomBoard.shipList.push( comShip0, comShip1, comShip2, comShip3 );\n\n//below is for testing purposes\n/* playerShip0.setPosition( [0, 1, 2, 3] );\nplayerBoard.placeShip( playerShip0 );\n\ncomShip0.setPosition( [0, 1, 2, 3] );\ncomBoard.placeShip( comShip0 );\ncomShip1.setPosition( [8, 9, 10, 11] );\ncomBoard.placeShip( comShip1 );\ncomShip2.setPosition( [15, 16, 17, 18] );\ncomBoard.placeShip( comShip2 );\ncomShip3.setPosition( [45, 46, 47, 48] );\ncomBoard.placeShip( comShip3 );\ncomShip4.setPosition( [38, 39, 40, 41] );\ncomBoard.placeShip( comShip4 ); */\n\nreturn {\n    playerBoard,\n    comBoard,\n};\n})();\n\n\n\n//# sourceURL=webpack://space-battleship/./src/appComponents.js?");

/***/ }),

/***/ "./src/appEvents.js":
/*!**************************!*\
  !*** ./src/appEvents.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appEvents\": () => (/* binding */ appEvents)\n/* harmony export */ });\n/* harmony import */ var _appComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appComponents */ \"./src/appComponents.js\");\n/* harmony import */ var _playerLogic_playerLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playerLogic/playerLogic */ \"./src/playerLogic/playerLogic.js\");\n\n\n\nconst appEvents = (function() {\n\n    function boardEvents() {\n        document.querySelectorAll( '.com-cell' ).forEach( (cell) => cell.addEventListener( 'click', function() {\n            let cellIndex = cell.id;\n\n            _playerLogic_playerLogic__WEBPACK_IMPORTED_MODULE_1__.playerLogic.playerPlay( _appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.comBoard, cellIndex );\n            _playerLogic_playerLogic__WEBPACK_IMPORTED_MODULE_1__.playerLogic.computerPlay( _appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.playerBoard );\n            _playerLogic_playerLogic__WEBPACK_IMPORTED_MODULE_1__.playerLogic.checkWinner( _appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.playerBoard );\n            _playerLogic_playerLogic__WEBPACK_IMPORTED_MODULE_1__.playerLogic.checkWinner( _appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.comBoard );\n        })); \n    };\n\n    return {\n        boardEvents,\n    };\n})();\n\n\n\n//# sourceURL=webpack://space-battleship/./src/appEvents.js?");

/***/ }),

/***/ "./src/appUI.js":
/*!**********************!*\
  !*** ./src/appUI.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appUI\": () => (/* binding */ appUI)\n/* harmony export */ });\n/* harmony import */ var _appComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appComponents */ \"./src/appComponents.js\");\n\n\nconst appUI = (function() {\n//generate a main container div\n    function makeContainer() {\n        const mainContainer = document.createElement( 'div' );\n        mainContainer.classList.add( 'main-container' );\n        document.body.appendChild( mainContainer );\n    };\n\n//generate a board container for the boards\n    function makeBoardContainer() {\n        const boardContainer = document.createElement( 'div' );\n        boardContainer.classList.add( 'board-container' );\n        document.querySelector( '.main-container' ).appendChild( boardContainer );\n    };\n\n//append a board inside the board container then generates the cells for the grid\n    function generatePlayerBoard() {\n        const board = document.createElement( 'div' );\n        board.classList.add( 'board', 'player-board' );\n        board.id = _appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.playerBoard.name;\n        document.querySelector( '.board-container' ).appendChild( board );\n    };\n\n    function generatePlayerCell() {\n        document.querySelector( '.player-board' ).innerHTML = '';\n        for( let obj of _appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.playerBoard.boardArray ) {\n            let cell = document.createElement( 'div' );\n            cell.classList.add( 'cell' );\n            cell.id = _appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.playerBoard.boardArray.indexOf( obj );\n\n              if( obj.haveShip === 'empty' ) {\n                  cell.style.backgroundColor = 'black';\n              } else {\n                  cell.style.backgroundColor = 'silver';\n              }\n\n            document.getElementById( `${_appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.playerBoard.name}` ).appendChild( cell );\n        };\n    };\n\n//append a board inside the board container then generates the cells for the grid\n    function generateComBoard() {\n        const board = document.createElement( 'div' );\n        board.classList.add( 'board', 'com-board' );\n        board.id = _appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.comBoard.name;\n        document.querySelector( '.board-container' ).appendChild( board );\n    };\n\n    function generateComCell() {\n        for( let obj of _appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.comBoard.boardArray ) {\n            let cell = document.createElement( 'div' );\n            cell.classList.add( 'cell', 'com-cell' );\n            cell.id = _appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.comBoard.boardArray.indexOf( obj );\n            document.getElementById( `${_appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.comBoard.name}` ).appendChild( cell );\n        };\n    };\n\n    function generateForm() {\n        const comBoard = document.querySelector( '.com-board' );\n        comBoard.innerHTML = '';\n        const formContainer = document.createElement( 'div' );\n        formContainer.innerHTML = `\n         <form>   \n           <h1>Ship 1</h1>\n           <label for=\"ship1-direction\">Choose ship direction:</label>\n           <select id=\"ship1-direction\" name=\"ship1-direction\">\n             <option value=\"horizontal\">Horizontal</option>\n             <option value=\"vertical\">Vertical</option>\n           </select>\n           <div class=\"shipCoor-container\">\n             <input type=\"number\" id=\"ship1-position\" placeholder=\"Enter Ship 1 Coordinate\" min=\"0\" max=\"48\">\n             <button class=\"submit-btn\" id=\"ship1-btn\">Place Ship</button>\n           </div>\n         </form>\n         <form>   \n           <h1>Ship 1</h1>\n           <label for=\"ship1-direction\">Choose ship direction:</label>\n           <select id=\"ship1-direction\" name=\"ship1-direction\">\n             <option value=\"horizontal\">Horizontal</option>\n             <option value=\"vertical\">Vertical</option>\n           </select>\n           <div class=\"shipCoor-container\">\n             <input type=\"number\" id=\"ship1-position\" placeholder=\"Enter Ship 1 Coordinate\" min=\"0\" max=\"48\">\n             <button class=\"submit-btn\" id=\"ship1-btn\">Place Ship</button>\n           </div>\n         </form>\n         <form>   \n           <h1>Ship 1</h1>\n           <label for=\"ship1-direction\">Choose ship direction:</label>\n           <select id=\"ship1-direction\" name=\"ship1-direction\">\n             <option value=\"horizontal\">Horizontal</option>\n             <option value=\"vertical\">Vertical</option>\n           </select>\n           <div class=\"shipCoor-container\">\n             <input type=\"number\" id=\"ship1-position\" placeholder=\"Enter Ship 1 Coordinate\" min=\"0\" max=\"48\">\n             <button class=\"submit-btn\" id=\"ship1-btn\">Place Ship</button>\n           </div>\n         </form>\n         <form>   \n           <h1>Ship 1</h1>\n           <label for=\"ship1-direction\">Choose ship direction:</label>\n           <select id=\"ship1-direction\" name=\"ship1-direction\">\n             <option value=\"horizontal\">Horizontal</option>\n             <option value=\"vertical\">Vertical</option>\n           </select>\n           <div class=\"shipCoor-container\">\n             <input type=\"number\" id=\"ship1-position\" placeholder=\"Enter Ship 1 Coordinate\" min=\"0\" max=\"48\">\n             <button class=\"submit-btn\" id=\"ship1-btn\">Place Ship</button>\n           </div>\n         </form>`;\n        \n        document.querySelector( '.com-board' ).appendChild( formContainer );\n        \n        //forms use datalist\n    };\n\n    return {\n        makeContainer,\n        makeBoardContainer,\n        generatePlayerBoard,\n        generatePlayerCell,\n        generateComBoard,\n        generateComCell,\n        generateForm,\n    };\n})();\n\n\n\n//# sourceURL=webpack://space-battleship/./src/appUI.js?");

/***/ }),

/***/ "./src/factoryLogic/factoryLogic.js":
/*!******************************************!*\
  !*** ./src/factoryLogic/factoryLogic.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"factoryLogic\": () => (/* binding */ factoryLogic)\n/* harmony export */ });\nconst factoryLogic = ( function() {\n\n//below is class that generates ships and their methods\n    class Ship {\n        constructor( name, length, shipIndex ) {\n            this.name = name;\n            this.length = length;\n            this.shipIndex = shipIndex;\n            this.position = [];\n            this.hits = [];\n            this.sunkStatus = false;\n        }\n\n        setPosition(positionArray) {\n            positionArray.forEach( object => {\n                this.position.push( object );\n            });\n        }\n\n        isHit(pos) {\n            return this.hits.push(pos);\n        }\n\n        isSunk() {\n            if( this.hits.length === this.length ) { \n                return this.sunkStatus = true;\n            } else {\n                return this.sunkStatus;\n            }\n        }\n    };\n\n//below is class that generates the gameboards and their methods\n    class Gameboard {\n        constructor( name ) {\n            this.name = name;\n            this.boardArray = []\n            this.shipList = [];\n            this.generateBoard();\n            this.allShips = 'sunk';\n        }\n\n        generateBoard( gridSize ) {\n            for( let i = 0; i < 49; i++) {\n                this.boardArray.push({ haveShip: 'empty', isAttacked: 'empty' });\n            }\n        }\n\n        getHaveShip(boardIndex) {\n            return this.boardArray[boardIndex].haveShip;\n        }\n\n        recordAttack(boardIndex) {\n            if( this.boardArray[boardIndex].haveShip === 'empty' ) {\n                this.boardArray[boardIndex].isAttacked = 'missed';\n            } else {\n                const shipIndex = this.getHaveShip(boardIndex);\n                this.boardArray[boardIndex].isAttacked = 'shot';\n                this.shipList[shipIndex].isHit( boardIndex );\n            } \n        }\n\n        placeShip(board) {\n            board.position.forEach( object => {\n                return this.boardArray[object].haveShip = board.shipIndex;\n            });\n        }\n\n        checkSunkShips() {\n            for ( let obj of this.shipList) {\n                obj.isSunk();\n\n                if( obj.sunkStatus === false ) {\n                    return this.allShips = 'not sunk';\n                }\n            };\n            return this.allShips;\n        }\n    };\n\n    return {\n        Ship,\n        Gameboard,\n    };\n})();\n\n\n\n//# sourceURL=webpack://space-battleship/./src/factoryLogic/factoryLogic.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _appUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appUI */ \"./src/appUI.js\");\n/* harmony import */ var _appEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appEvents */ \"./src/appEvents.js\");\n\n\n\nconst spaceBattleShip = (function() {\n    _appUI__WEBPACK_IMPORTED_MODULE_0__.appUI.makeContainer();\n    _appUI__WEBPACK_IMPORTED_MODULE_0__.appUI.makeBoardContainer();\n\n    //player board\n    _appUI__WEBPACK_IMPORTED_MODULE_0__.appUI.generatePlayerBoard();\n    _appUI__WEBPACK_IMPORTED_MODULE_0__.appUI.generatePlayerCell();\n    \n    //computer board\n    _appUI__WEBPACK_IMPORTED_MODULE_0__.appUI.generateComBoard();\n    //appUI.generateComCell();\n    _appUI__WEBPACK_IMPORTED_MODULE_0__.appUI.generateForm();\n\n    //eventlisteners\n    _appEvents__WEBPACK_IMPORTED_MODULE_1__.appEvents.boardEvents();\n\n    return {};\n})();\n\n//# sourceURL=webpack://space-battleship/./src/index.js?");

/***/ }),

/***/ "./src/playerLogic/playerLogic.js":
/*!****************************************!*\
  !*** ./src/playerLogic/playerLogic.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"playerLogic\": () => (/* binding */ playerLogic)\n/* harmony export */ });\nconst playerLogic = (function() {\n\n    function computerTurn( boardName ) {\n        let location = Math.floor( Math.random() * 49 );\n\n        if( boardName.boardArray[location].isAttacked === 'empty' ) {\n            return boardName.recordAttack( location );\n        } else {\n            return computerTurn();\n        };\n    };\n\n    function playerTurn( enemyBoard, location) {\n        if( enemyBoard.boardArray[location].isAttacked === 'empty' ) {\n            enemyBoard.recordAttack( location );\n        }\n    };\n\n    function playRound( enemyBoard, location, myBoard ) {\n        playerTurn( enemyBoard, location );\n        computerTurn( myBoard );\n    };\n\n//refactored for usage in UI of the app\n    function computerPlay( boardName ) {\n        let location = Math.floor( Math.random() * 49 );\n\n        if( boardName.boardArray[ location ].isAttacked === 'empty' ) {\n            boardName.recordAttack( location );\n            if( boardName.boardArray[ location ].isAttacked === 'shot' ) {\n                document.getElementById( `${location}` ).style.backgroundColor = 'red';\n                document.getElementById( `${location}` ).innerText = 'X';\n            } else if( boardName.boardArray[ location ].isAttacked === 'missed' ) {\n                document.getElementById( `${location}` ).style.backgroundColor = 'pink';\n            }\n        } else {\n            computerPlay( boardName );\n        }\n    };\n\n//refactored for usage in UI of the app\n    function playerPlay( boardName, locationIndex ) {\n        if( boardName.boardArray[ locationIndex ].isAttacked === 'empty' ) {\n            boardName.recordAttack( locationIndex );\n\n            if( boardName.boardArray[ locationIndex ].isAttacked === 'shot' ) {\n                event.target.style.backgroundColor = 'red';\n                event.target.innerText = 'X';\n            } else if( boardName.boardArray[ locationIndex ].isAttacked === 'missed' ) {\n                event.target.style.backgroundColor = 'pink';\n            }\n        } else {\n            return;\n        };\n    };\n\n//below is function that checks if there is a winner\n    function checkWinner( boardName ) {\n        boardName.checkSunkShips();\n\n        if( boardName.shipList[0].sunkStatus === true && boardName.shipList[1].sunkStatus === true &&\n            boardName.shipList[2].sunkStatus === true && boardName.shipList[3].sunkStatus === true &&\n            boardName.shipList[4].sunkStatus === true ) {\n            alert( 'Player Wins' );\n        }\n    };\n\n    return {\n        computerTurn,\n        playerTurn,\n        playRound,\n        computerPlay,\n        playerPlay,\n        checkWinner,\n    };\n})();\n\n\n\n//# sourceURL=webpack://space-battleship/./src/playerLogic/playerLogic.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;