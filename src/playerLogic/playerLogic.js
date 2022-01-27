
const playerLogic = (function() {
    function computerPlay( boardName ) {
        let location = Math.floor( Math.random() * 49 );

        if(boardName.boardArray[location].isAttacked === 'empty') {
            boardName.recordAttack( location );
        } else {
            computerPlay();
        }
    };

    function playGame( enemyBoard, myBoard, location ) {
        let turn = 'player';

        if( turn === 'player' ) {
            enemyBoard.recordAttack( location );
            return turn = 'computer';
        } else if( turn === 'computer' ) {
            computerPlay( myBoard );
            return turn = 'player';
        }
    }

    return {
        computerPlay,
        playGame,
    };
})();

export { playerLogic };