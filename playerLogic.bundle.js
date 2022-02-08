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

/***/ "./src/playerLogic/playerLogic.js":
/*!****************************************!*\
  !*** ./src/playerLogic/playerLogic.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"playerLogic\": () => (/* binding */ playerLogic)\n/* harmony export */ });\nconst playerLogic = (function() {\n\n    function computerTurn( boardName ) {\n        let location = Math.floor( Math.random() * 49 );\n\n        if( boardName.boardArray[location].isAttacked === 'empty' ) {\n            return boardName.recordAttack( location );\n        } else {\n            return computerTurn();\n        };\n    };\n\n    function playerTurn( enemyBoard, location) {\n        if( enemyBoard.boardArray[location].isAttacked === 'empty' ) {\n            enemyBoard.recordAttack( location );\n        }\n    };\n\n    function playRound( enemyBoard, location, myBoard ) {\n        playerTurn( enemyBoard, location );\n        computerTurn( myBoard );\n    };\n\n//refactored for usage in UI of the app\n    function computerPlay( boardName ) {\n        let location = Math.floor( Math.random() * 49 );\n\n        if( boardName.boardArray[ location ].isAttacked === 'empty' ) {\n            boardName.recordAttack( location );\n            if( boardName.boardArray[ location ].isAttacked === 'shot' ) {\n                document.getElementById( `${location}` ).style.backgroundColor = 'red';\n                document.getElementById( `${location}` ).innerText = 'X';\n            } else if( boardName.boardArray[ location ].isAttacked === 'missed' ) {\n                document.getElementById( `${location}` ).style.backgroundColor = 'green';\n            }\n        } else {\n            computerPlay( boardName );\n        }\n    };\n\n//refactored for usage in UI of the app\n    function playerPlay( enemyBoard, locationIndex, ownBoard ) {\n        if( enemyBoard.boardArray[ locationIndex ].isAttacked === 'empty' ) {\n            enemyBoard.recordAttack( locationIndex );\n            computerPlay( ownBoard );\n\n            if( enemyBoard.boardArray[ locationIndex ].isAttacked === 'shot' ) {\n                event.target.style.backgroundColor = 'red';\n                event.target.innerText = 'X';\n            } else if( enemyBoard.boardArray[ locationIndex ].isAttacked === 'missed' ) {\n                event.target.style.backgroundColor = 'green';\n            }\n        } else {\n            return;\n        };\n    };\n\n//below is function that checks if there is a winner\n    function checkWinner( boardSaya, enemyBoard ) {\n        enemyBoard.checkSunkShips();\n        boardSaya.checkSunkShips();\n\n        if( enemyBoard.shipList[0].sunkStatus === true && enemyBoard.shipList[1].sunkStatus === true &&\n            enemyBoard.shipList[2].sunkStatus === true && enemyBoard.shipList[3].sunkStatus === true ) {\n            alert( 'Player Wins' );\n        } else if( boardSaya.shipList[0].sunkStatus === true && boardSaya.shipList[1].sunkStatus === true &&\n                   boardSaya.shipList[2].sunkStatus === true && boardSaya.shipList[3].sunkStatus === true ) {\n            alert( 'The Computer Won LOL' );\n        };\n    };\n\n    return {\n        computerTurn,\n        playerTurn,\n        playRound,\n        computerPlay,\n        playerPlay,\n        checkWinner,\n    };\n})();\n\n\n\n//# sourceURL=webpack://space-battleship/./src/playerLogic/playerLogic.js?");

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
/******/ 	__webpack_modules__["./src/playerLogic/playerLogic.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;