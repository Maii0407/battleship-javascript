const playerLogic = (function() {

    function computerTurn( boardName ) {
        let location = Math.floor( Math.random() * 49 );

        if( boardName.boardArray[location].isAttacked === 'empty' ) {
            return boardName.recordAttack( location );
        } else {
            return computerTurn();
        };
    };

    function playerTurn( enemyBoard, location) {
        if( enemyBoard.boardArray[location].isAttacked === 'empty' ) {
            enemyBoard.recordAttack( location );
        }
    };

    function playRound( enemyBoard, location, myBoard ) {
        playerTurn( enemyBoard, location );
        computerTurn( myBoard );
    };

//refactored for usage in UI of the app
    function computerPlay( boardName ) {
        let location = Math.floor( Math.random() * 49 );

        if( boardName.boardArray[ location ].isAttacked === 'empty' ) {
            boardName.recordAttack( location );
            if( boardName.boardArray[ location ].isAttacked === 'shot' ) {
                document.getElementById( `${location}` ).style.backgroundColor = 'red';
                document.getElementById( `${location}` ).innerText = 'X';
            } else if( boardName.boardArray[ location ].isAttacked === 'missed' ) {
                document.getElementById( `${location}` ).style.backgroundColor = 'pink';
            }
        } else {
            computerPlay( boardName );
        }
    };

//refactored for usage in UI of the app
    function playerPlay( boardName, locationIndex ) {
        if( boardName.boardArray[ locationIndex ].isAttacked === 'empty' ) {
            boardName.recordAttack( locationIndex );

            if( boardName.boardArray[ locationIndex ].isAttacked === 'shot' ) {
                event.target.style.backgroundColor = 'red';
                event.target.innerText = 'X';
            } else if( boardName.boardArray[ locationIndex ].isAttacked === 'missed' ) {
                event.target.style.backgroundColor = 'pink';
            }
        } else {
            return;
        };
    };

//below is function that checks if there is a winner
    function checkWinner( boardName ) {
        boardName.checkSunkShips();

        if( boardName.shipList[0].sunkStatus === true && boardName.shipList[1].sunkStatus === true &&
            boardName.shipList[2].sunkStatus === true && boardName.shipList[3].sunkStatus === true &&
            boardName.shipList[4].sunkStatus === true ) {
            alert( 'Player Wins' );
        }
    };

    return {
        computerTurn,
        playerTurn,
        playRound,
        computerPlay,
        playerPlay,
        checkWinner,
    };
})();

export { playerLogic };