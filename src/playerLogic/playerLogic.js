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
                document.getElementById( `${location}` ).style.backgroundColor = 'green';
                document.getElementById( `${location}` ).innerText = 'O';
            }
        } else {
            computerPlay( boardName );
        }
    };

//refactored for usage in UI of the app
    function playerPlay( enemyBoard, locationIndex, ownBoard ) {
        if( enemyBoard.boardArray[ locationIndex ].isAttacked === 'empty' ) {
            enemyBoard.recordAttack( locationIndex );
            computerPlay( ownBoard );

            if( enemyBoard.boardArray[ locationIndex ].isAttacked === 'shot' ) {
                event.target.style.backgroundColor = 'red';
                event.target.innerText = 'X';
            } else if( enemyBoard.boardArray[ locationIndex ].isAttacked === 'missed' ) {
                event.target.style.backgroundColor = 'green';
                event.target.innerText = 'O';
            }
        } else {
            return;
        };
    };

//below is function that checks if there is a winner
    function checkWinner( boardSaya, enemyBoard ) {
        enemyBoard.checkSunkShips();
        boardSaya.checkSunkShips();

        if( enemyBoard.shipList[0].sunkStatus === true && enemyBoard.shipList[1].sunkStatus === true &&
            enemyBoard.shipList[2].sunkStatus === true && enemyBoard.shipList[3].sunkStatus === true ) {
            alert( 'Player Wins' );
        } else if( boardSaya.shipList[0].sunkStatus === true && boardSaya.shipList[1].sunkStatus === true &&
                   boardSaya.shipList[2].sunkStatus === true && boardSaya.shipList[3].sunkStatus === true ) {
            alert( 'The Computer Won LOL' );
        };
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