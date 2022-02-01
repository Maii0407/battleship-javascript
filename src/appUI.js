import { appComponents } from "./appComponents";

const appUI = (function() {
//generate a main container div
    function makeContainer() {
        const mainContainer = document.createElement( 'div' );
        mainContainer.classList.add( 'main-container' );
        document.body.appendChild( mainContainer );
    };

//generate a board container for the boards
    function makeBoardContainer() {
        const boardContainer = document.createElement( 'div' );
        boardContainer.classList.add( 'board-container' );
        document.querySelector( '.main-container' ).appendChild( boardContainer );
    };

//append a board inside the board container then generates the cells for the grid
    function generatePlayerBoard() {
        const board = document.createElement( 'div' );
        board.classList.add( 'board', 'player-board' );
        board.id = appComponents.playerBoard.name;
        document.querySelector( '.board-container' ).appendChild( board );
    };

    function generatePlayerCell() {
        document.querySelector( '.player-board' ).innerHTML = '';
        for( let obj of appComponents.playerBoard.boardArray ) {
            let cell = document.createElement( 'div' );
            cell.classList.add( 'cell' );
            cell.id = appComponents.playerBoard.boardArray.indexOf( obj );

              if( obj.haveShip === 'empty' ) {
                  cell.style.backgroundColor = 'black';
              } else {
                  cell.style.backgroundColor = 'silver';
              }

            document.getElementById( `${appComponents.playerBoard.name}` ).appendChild( cell );
        };
    };

//append a board inside the board container then generates the cells for the grid
    function generateComBoard() {
        const board = document.createElement( 'div' );
        board.classList.add( 'board', 'com-board' );
        board.id = appComponents.comBoard.name;
        document.querySelector( '.board-container' ).appendChild( board );
    };

    function generateComCell() {
        for( let obj of appComponents.comBoard.boardArray ) {
            let cell = document.createElement( 'div' );
            cell.classList.add( 'cell', 'com-cell' );
            cell.id = appComponents.comBoard.boardArray.indexOf( obj );
            document.getElementById( `${appComponents.comBoard.name}` ).appendChild( cell );
        };
    };

    function generateForms() {
        const comBoard = document.querySelector( '.com-board' );
        comBoard.innerHTML = '';
        comBoard.innerHTML = ``
    };

    return {
        makeContainer,
        makeBoardContainer,
        generatePlayerBoard,
        generatePlayerCell,
        generateComBoard,
        generateComCell,
    };
})();

export { appUI };