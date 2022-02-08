import { appComponents } from "./appComponents";

const appUI = (function() {
//generate a main container div
    function makeContainer() {
        const mainContainer = document.createElement( 'div' );
        mainContainer.classList.add( 'main-container' );
        document.body.appendChild( mainContainer );
    };

    function makeTitleContainer() {
        const title = document.createElement( 'div' );
        title.classList.add( 'title-container' );
        title.innerText = `MAII'S BATTLESHIP`;
        document.querySelector( '.main-container' ).appendChild( title );
    };

    function makeContentContainer() {
        const content = document.createElement( 'div' );
        content.classList.add( 'content-container' );
        document.querySelector( '.main-container' ).appendChild( content );
    };

    function makeMenuContainer() {
        const menu = document.createElement( 'div' );
        menu.classList.add( 'menu-container' );
        menu.innerHTML = `
          <button type="button" class="start-btn">START GAME</button>
          <button type="button" class="reset-btn">RESET GAME</button>`;
        document.querySelector( '.content-container' ).appendChild( menu );
    };

//generate a board container for the boards
    function makeBoardContainer() {
        const boardContainer = document.createElement( 'div' );
        boardContainer.classList.add( 'board-container' );
        document.querySelector( '.content-container' ).appendChild( boardContainer );
    };

    function makeFormWrapper() {
        const form = document.createElement( 'div' );
        form.classList.add( 'form-wrapper' );
        document.querySelector( '.board-container' ).appendChild( form );
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
              } else if( obj.haveShip === 0 ) {
                  cell.style.backgroundColor = 'red';
              } else if( obj.haveShip === 1 ) {
                  cell.style.backgroundColor = 'green';
              } else if( obj.haveShip === 2 ) {
                  cell.style.backgroundColor = 'blue';
              } else if( obj.haveShip === 3 ) {
                  cell.style.backgroundColor = 'yellow';
              } else { return };

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

    function generateForm() {
        const comBoard = document.querySelector( '.com-board' );
        comBoard.innerHTML = '';
        const formContainer = document.createElement( 'div' );
        formContainer.classList.add( 'form-container' );
        document.querySelector( '.form-wrapper' ).appendChild( formContainer );
        for( let obj of appComponents.playerBoard.shipList ) {
          const form = document.createElement( 'form' );
          form.innerHTML = `   
            <h1>${obj.name}</h1>
            <label for="${obj.name}-direction">Choose ship direction:</label>
            <select id="${obj.name}-direction" name="${obj.name}-direction">
              <option value="horizontal">Horizontal</option>
              <option value="vertical">Vertical</option>
            </select>
            <input type="number" id="${obj.name}-position" placeholder="Enter Ship 1 Coordinate" min="0" max="48">
            <div class="button-container">
              <button type="button" class="clear-btn" id="${obj.name}-clearBtn">CLEAR SHIP</button>
              <button type="button" class="submit-btn" id="${obj.name}-btn">PLACE SHIP</button>
            </div>`;
          document.querySelector( '.form-container' ).appendChild( form ); 
        };
    };

    function generateRandomButton() {
        const randomButton = document.createElement( 'button' );
        randomButton.setAttribute( 'type', 'button' );
        randomButton.classList.add( 'placeRandom-btn' );
        randomButton.innerText = 'ALL RANDOM';

        document.querySelector( '.form-container' ).appendChild( randomButton );
    };

    return {
        makeContainer,
        makeTitleContainer,
        makeContentContainer,
        makeMenuContainer,
        makeBoardContainer,
        makeFormWrapper,
        generatePlayerBoard,
        generatePlayerCell,
        generateComBoard,
        generateComCell,
        generateForm,
        generateRandomButton,
    };
})();

export { appUI };