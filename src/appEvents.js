import { appComponents } from "./appComponents";

const appEvents = (function() {
    function computerTurn() {
        let location = Math.floor( Math.random() * 49 );

        if( appComponents.playerBoard.boardArray[location].isAttacked === 'empty' ) {
            appComponents.playerBoard.recordAttack( location );
            if( appComponents.playerBoard.boardArray[location].isAttacked === 'shot' ) {
                document.getElementById( `${location}` ).style.backgroundColor = 'gold';
            } else if( appComponents.playerBoard.boardArray[location].isAttacked === 'missed' ) {
                document.getElementById( `${location}` ).style.backgroundColor = 'pink';
            }
            
        } else {
            computerTurn();
        };
    };

    function comCellEvents() {
        document.querySelectorAll( '.com-cell' ).forEach( (cell) => cell.addEventListener( 'click', function() {
            let cellIndex = cell.id;
            appComponents.comBoard.recordAttack(cellIndex);

              if( appComponents.comBoard.boardArray[cellIndex].isAttacked === 'shot' ) {
                  this.style.backgroundColor = 'gold';
              } else if( appComponents.comBoard.boardArray[cellIndex].isAttacked === 'missed' ) {
                  this.style.backgroundColor = 'pink';
              };

            computerTurn();
        })); 
    };

    return {
        comCellEvents,
    };
})();

export { appEvents };