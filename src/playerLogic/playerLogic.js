
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

    return {
        computerTurn,
        playerTurn,
        playRound,
    };
})();

export { playerLogic };