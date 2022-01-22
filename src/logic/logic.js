
const logic = ( function() {
    const shipList = [];

//below is class that generates ships and their methods
    class Ship {
        constructor( name, length, position ) {
            this.name = name;
            this.length = length;
            this.position = position;
            this.hits = [];
        }

        isHit(pos) {
            return this.hits.push(pos);
        }

        isSunk() {
            if( JSON.stringify( this.hits ) === JSON.stringify( this.position ) ) { 
                return true;
            } else {
                return false;
            }
        }
    };

//below is class that generates the gameboards and their methods
    class Gameboard {
        constructor() {
            this.boardArray = []
            this.generateBoard();
        }

        generateBoard() {
            for( let i = 0; i < 49; i++) {
                this.boardArray.push({ haveShip: false, isAttacked: 'empty' });
            }
        }

        recordAttack(boardIndex) {
            if( this.boardArray[boardIndex].haveShip === false ) {
                return this.boardArray[boardIndex].isAttacked = 'missed';
            } else if( this.boardArray[boardIndex].haveShip === true ) {
                return this.boardArray[boardIndex].isAttacked = 'shot';
            } else {
                return;
            }
        }

        placeShip(boardIndex) {
            boardIndex.forEach( object => {
                return this.boardArray[object].haveShip = true;
            });
        }

        checkSunkShips() {}
    };

    return {
        shipList,
        Ship,
        Gameboard,
    };
})();

export { logic };