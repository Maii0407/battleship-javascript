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

/***/ "./src/appEvents.js":
/*!**************************!*\
  !*** ./src/appEvents.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appEvents\": () => (/* binding */ appEvents)\n/* harmony export */ });\n/* harmony import */ var _appComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appComponents */ \"./src/appComponents.js\");\n/* harmony import */ var _playerLogic_playerLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playerLogic/playerLogic */ \"./src/playerLogic/playerLogic.js\");\n/* harmony import */ var _appFormFunc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appFormFunc */ \"./src/appFormFunc.js\");\n/* harmony import */ var _appUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appUI */ \"./src/appUI.js\");\n\n\n\n\n\nconst appEvents = (function() {\n\n    function boardEvents() {\n        document.querySelectorAll( '.com-cell' ).forEach( (cell) => cell.addEventListener( 'click', function() {\n            let cellIndex = cell.id;\n\n            _playerLogic_playerLogic__WEBPACK_IMPORTED_MODULE_1__.playerLogic.playerPlay( _appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.comBoard, cellIndex );\n            _playerLogic_playerLogic__WEBPACK_IMPORTED_MODULE_1__.playerLogic.computerPlay( _appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.playerBoard );\n            _playerLogic_playerLogic__WEBPACK_IMPORTED_MODULE_1__.playerLogic.checkWinner( _appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.playerBoard );\n            _playerLogic_playerLogic__WEBPACK_IMPORTED_MODULE_1__.playerLogic.checkWinner( _appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.comBoard );\n        })); \n    };\n\n    function shipForm1() {\n        document.getElementById( `${_appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.playerBoard.shipList[0].name}-btn` ).addEventListener( 'click', function(){\n            _appFormFunc__WEBPACK_IMPORTED_MODULE_2__.appFormFunc.submitShipLocation( _appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.playerBoard.shipList[0] );\n            _appUI__WEBPACK_IMPORTED_MODULE_3__.appUI.generatePlayerCell();\n        });\n    };\n\n    function shipForm2() {\n        document.getElementById( `${_appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.playerBoard.shipList[1].name}-btn` ).addEventListener( 'click', function(){\n            _appFormFunc__WEBPACK_IMPORTED_MODULE_2__.appFormFunc.submitShipLocation( _appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.playerBoard.shipList[1] );\n            _appUI__WEBPACK_IMPORTED_MODULE_3__.appUI.generatePlayerCell();\n        });\n    };\n\n    function shipForm3() {\n        document.getElementById( `${_appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.playerBoard.shipList[2].name}-btn` ).addEventListener( 'click', function(){\n            _appFormFunc__WEBPACK_IMPORTED_MODULE_2__.appFormFunc.submitShipLocation( _appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.playerBoard.shipList[2] );\n            _appUI__WEBPACK_IMPORTED_MODULE_3__.appUI.generatePlayerCell();\n        });\n    };\n\n    function formEvents() {\n        shipForm1();\n        shipForm2();\n        shipForm3();\n    };\n\n\n    return {\n        boardEvents,\n        formEvents,\n    };\n})();\n\n\n\n//# sourceURL=webpack://space-battleship/./src/appEvents.js?");

/***/ }),

/***/ "./src/appFormFunc.js":
/*!****************************!*\
  !*** ./src/appFormFunc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appFormFunc\": () => (/* binding */ appFormFunc)\n/* harmony export */ });\n/* harmony import */ var _appComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appComponents */ \"./src/appComponents.js\");\n\n\nconst appFormFunc = (function() {\n    function placeHorizontal( ship ) {\n        let val = Number(document.getElementById( `${ship.name}-position` ).value);\n        let val2 = Number( val ) + 1;\n        let val3 = Number( val2 ) + 1;\n        let val4 = Number( val3 ) + 1;\n\n        //this still needs work\n        if( val4 >= 6 || val4 >= 13 || val4 >= 20 || val4 >= 27 || val4 >= 34 || val4 >= 41 || val4 >= 48 ) {\n            return;\n        } else {\n            ship.setPosition( [val, val2, val3, Number( val4 )] );\n        };\n    };\n\n    function placeVertical( ship ) {\n        let val = Number(document.getElementById( `${ship.name}-position` ).value);\n        let val2 = Number( val ) + 7;\n        let val3 = Number( val2 ) + 7;\n        let val4 = Number( val3 ) + 7;\n\n        if( val4 >= 49 ) {\n            return;\n        } else {\n            ship.setPosition( [val, val2, val3, Number( val4 )] );\n        };\n    };\n\n    function submitShipLocation( ship ) {\n        const verticalCollision = [28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48];\n        const horizontalCollision = [4,5,6,11,12,13,18,19,20,25,26,27,32,33,34,39,40,41,46,47,48];\n\n        if( document.getElementById( `${ship.name}-direction` ).value === 'horizontal' ) {\n            placeHorizontal( ship );\n        } else if( document.getElementById( `${ship.name}-direction` ).value === 'vertical' ) {\n            placeVertical( ship );\n        } else {\n            return;\n        };\n\n        _appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.playerBoard.placeShip( ship );\n        document.getElementById( `${ship.name}-position` ).value = '';\n    };\n\n    return {\n        submitShipLocation,\n    };\n})();\n\n\n\n//# sourceURL=webpack://space-battleship/./src/appFormFunc.js?");

/***/ }),

/***/ "./src/appUI.js":
/*!**********************!*\
  !*** ./src/appUI.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appUI\": () => (/* binding */ appUI)\n/* harmony export */ });\n/* harmony import */ var _appComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appComponents */ \"./src/appComponents.js\");\n\n\nconst appUI = (function() {\n//generate a main container div\n    function makeContainer() {\n        const mainContainer = document.createElement( 'div' );\n        mainContainer.classList.add( 'main-container' );\n        document.body.appendChild( mainContainer );\n    };\n\n//generate a board container for the boards\n    function makeBoardContainer() {\n        const boardContainer = document.createElement( 'div' );\n        boardContainer.classList.add( 'board-container' );\n        document.querySelector( '.main-container' ).appendChild( boardContainer );\n    };\n\n//append a board inside the board container then generates the cells for the grid\n    function generatePlayerBoard() {\n        const board = document.createElement( 'div' );\n        board.classList.add( 'board', 'player-board' );\n        board.id = _appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.playerBoard.name;\n        document.querySelector( '.board-container' ).appendChild( board );\n    };\n\n    function generatePlayerCell() {\n        document.querySelector( '.player-board' ).innerHTML = '';\n        for( let obj of _appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.playerBoard.boardArray ) {\n            let cell = document.createElement( 'div' );\n            cell.classList.add( 'cell' );\n            cell.id = _appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.playerBoard.boardArray.indexOf( obj );\n\n              if( obj.haveShip === 'empty' ) {\n                  cell.style.backgroundColor = 'black';\n              } else {\n                  cell.style.backgroundColor = 'silver';\n              }\n\n            document.getElementById( `${_appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.playerBoard.name}` ).appendChild( cell );\n        };\n    };\n\n//append a board inside the board container then generates the cells for the grid\n    function generateComBoard() {\n        const board = document.createElement( 'div' );\n        board.classList.add( 'board', 'com-board' );\n        board.id = _appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.comBoard.name;\n        document.querySelector( '.board-container' ).appendChild( board );\n    };\n\n    function generateComCell() {\n        for( let obj of _appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.comBoard.boardArray ) {\n            let cell = document.createElement( 'div' );\n            cell.classList.add( 'cell', 'com-cell' );\n            cell.id = _appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.comBoard.boardArray.indexOf( obj );\n            document.getElementById( `${_appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.comBoard.name}` ).appendChild( cell );\n        };\n    };\n\n    function generateForm() {\n        const comBoard = document.querySelector( '.com-board' );\n        comBoard.innerHTML = '';\n        const formContainer = document.createElement( 'div' );\n        formContainer.classList.add( 'form-container' );\n        document.querySelector( '.com-board' ).appendChild( formContainer );\n        for( let obj of _appComponents__WEBPACK_IMPORTED_MODULE_0__.appComponents.playerBoard.shipList ) {\n          const form = document.createElement( 'form' );\n          form.innerHTML = `   \n            <h1>${obj.name}</h1>\n            <label for=\"${obj.name}-direction\">Choose ship direction:</label>\n            <select id=\"${obj.name}-direction\" name=\"${obj.name}-direction\">\n              <option value=\"horizontal\">Horizontal</option>\n              <option value=\"vertical\">Vertical</option>\n            </select>\n            <div class=\"shipCoor-container\">\n              <input type=\"number\" id=\"${obj.name}-position\" placeholder=\"Enter Ship 1 Coordinate\" min=\"0\" max=\"48\">\n              <button type=\"button\" class=\"submit-btn\" id=\"${obj.name}-btn\">PLACE SHIP</button>\n            </div>`;\n          document.querySelector( '.form-container' ).appendChild( form ); \n        };\n    };\n\n    return {\n        makeContainer,\n        makeBoardContainer,\n        generatePlayerBoard,\n        generatePlayerCell,\n        generateComBoard,\n        generateComCell,\n        generateForm,\n    };\n})();\n\n\n\n//# sourceURL=webpack://space-battleship/./src/appUI.js?");

/***/ }),

/***/ "./src/factoryLogic/factoryLogic.js":
/*!******************************************!*\
  !*** ./src/factoryLogic/factoryLogic.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"factoryLogic\": () => (/* binding */ factoryLogic)\n/* harmony export */ });\nconst factoryLogic = ( function() {\n\n//below is class that generates ships and their methods\n    class Ship {\n        constructor( name, length, shipIndex ) {\n            this.name = name;\n            this.length = length;\n            this.shipIndex = shipIndex;\n            this.position = [];\n            this.hits = [];\n            this.sunkStatus = false;\n        }\n\n        setPosition(positionArray) {\n            positionArray.forEach( object => {\n                this.position.push( object );\n            });\n        }\n\n        isHit(pos) {\n            return this.hits.push(pos);\n        }\n\n        isSunk() {\n            if( this.hits.length === this.length ) { \n                return this.sunkStatus = true;\n            } else {\n                return this.sunkStatus;\n            }\n        }\n    };\n\n//below is class that generates the gameboards and their methods\n    class Gameboard {\n        constructor( name ) {\n            this.name = name;\n            this.boardArray = []\n            this.shipList = [];\n            this.generateBoard();\n            this.allShips = 'sunk';\n        }\n\n        generateBoard() {\n            for( let i = 0; i < 49; i++) {\n                this.boardArray.push({ haveShip: 'empty', isAttacked: 'empty' });\n            }\n        }\n\n        getHaveShip(boardIndex) {\n            return this.boardArray[boardIndex].haveShip;\n        }\n\n        recordAttack(boardIndex) {\n            if( this.boardArray[boardIndex].haveShip === 'empty' ) {\n                this.boardArray[boardIndex].isAttacked = 'missed';\n            } else {\n                const shipIndex = this.getHaveShip(boardIndex);\n                this.boardArray[boardIndex].isAttacked = 'shot';\n                this.shipList[shipIndex].isHit( boardIndex );\n            } \n        }\n\n        placeShip(ship) {\n            ship.position.forEach( object => {\n                return this.boardArray[object].haveShip = ship.shipIndex;\n            });\n        }\n\n        checkSunkShips() {\n            for ( let obj of this.shipList) {\n                obj.isSunk();\n\n                if( obj.sunkStatus === false ) {\n                    return this.allShips = 'not sunk';\n                }\n            };\n            return this.allShips;\n        }\n    };\n\n    return {\n        Ship,\n        Gameboard,\n    };\n})();\n\n\n\n//# sourceURL=webpack://space-battleship/./src/factoryLogic/factoryLogic.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/appEvents.js");
/******/ 	
/******/ })()
;