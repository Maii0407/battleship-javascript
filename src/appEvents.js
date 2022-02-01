import { appComponents } from "./appComponents";

const appEvents = (function() {
    function computerTurn() {
        let location = Math.floor( Math.random() * 49 );

        if( appComponents.playerBoard.boardArray[location].isAttacked === 'empty' ) {
            appComponents.playerBoard.recordAttack( location );
            if( appComponents.playerBoard.boardArray[location].isAttacked === 'shot' ) {
                document.getElementById( `${location}` ).style.backgroundColor = 'gold';
                document.getElementById( `${location}` ).innerText = 'X';
            } else if( appComponents.playerBoard.boardArray[location].isAttacked === 'missed' ) {
                document.getElementById( `${location}` ).style.backgroundColor = 'pink';
            } 
        } else {
            computerTurn();
        };
    };

    function checkPlayerWin() {
        appComponents.comBoard.checkSunkShips();

        if( appComponents.comBoard.shipList[0].sunkStatus === true && appComponents.comBoard.shipList[1].sunkStatus === true &&
            appComponents.comBoard.shipList[2].sunkStatus === true && appComponents.comBoard.shipList[3].sunkStatus === true &&
            appComponents.comBoard.shipList[4].sunkStatus === true ) {
            alert( 'Player Wins' );
        }
    };

    function checkComWin() {
        appComponents.playerBoard.checkSunkShips();

        if( appComponents.playerBoard.shipList[0].sunkStatus === true && appComponents.playerBoard.shipList[1].sunkStatus === true &&
            appComponents.playerBoard.shipList[2].sunkStatus === true && appComponents.playerBoard.shipList[3].sunkStatus === true &&
            appComponents.playerBoard.shipList[4].sunkStatus === true ) {
            console.log( 'computer wins' );
        }
    };

    function comCellEvents() {
        document.querySelectorAll( '.com-cell' ).forEach( (cell) => cell.addEventListener( 'click', function() {
            let cellIndex = cell.id;

            if( appComponents.comBoard.boardArray[cellIndex].isAttacked === 'empty' ) {
                appComponents.comBoard.recordAttack( cellIndex );
                if( appComponents.comBoard.boardArray[cellIndex].isAttacked === 'shot' ) {
                    this.style.backgroundColor = 'gold';
                    this.innerText = 'X';
                } else if( appComponents.comBoard.boardArray[cellIndex].isAttacked === 'missed' ) {
                    this.style.backgroundColor = 'pink';
                };
                computerTurn();
                checkPlayerWin();
                checkComWin();
            } else {
                return;
            };

        })); 
    };

    return {
        comCellEvents,
    };
})();

export { appEvents };