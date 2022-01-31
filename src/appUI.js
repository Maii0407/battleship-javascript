import { appComponents } from "./appComponents";

const appUI = (function() {
    function makeContainer() {
        const mainContainer = document.createElement( 'div' );
        mainContainer.classList.add( 'main-container' );
        document.body.appendChild( mainContainer );
    };

    function makeBoardContainer() {
        const boardContainer = document.createElement( 'div' );
        boardContainer.classList.add( 'board-container' );
        document.querySelector( '.main-container' ).appendChild( boardContainer );
    };

    function generatePlayerBoard() {
        const board = document.createElement( 'div' );
        board.classList.add( 'board' );
        board.id = appComponents.playerBoard.name;
        document.querySelector( '.board-container' ).appendChild( board );

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

    function generateComBoard() {
        const board = document.createElement( 'div' );
        board.classList.add( 'board' );
        board.id = appComponents.comBoard.name;
        document.querySelector( '.board-container' ).appendChild( board );

        for( let obj of appComponents.comBoard.boardArray ) {
            let cell = document.createElement( 'div' );
            cell.classList.add( 'cell' );
            cell.id = appComponents.comBoard.boardArray.indexOf( obj );
            document.getElementById( `${appComponents.comBoard.name}` ).appendChild( cell );
        };
    };

    return {
        makeContainer,
        makeBoardContainer,
        generatePlayerBoard,
        generateComBoard,
    };
})();

export { appUI };