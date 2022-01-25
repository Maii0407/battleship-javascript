
const logic = ( function() {

//below is class that generates ships and their methods
    class Ship {
        constructor( name, length ) {
            this.name = name;
            this.length = length;
            this.position = [];
            this.hits = [];
            this.sunkStatus = false;
        }

        setPosition(positionArray) {
            positionArray.forEach( object => {
                this.position.push( object );
            });
        }

        isHit(pos) {
            return this.hits.push(pos);
        }

        isSunk() {
            if( JSON.stringify( this.hits ) === JSON.stringify( this.position ) ) { 
                return this.sunkStatus = true;
            } else {
                return;
            }
        }
    };

//below is class that generates the gameboards and their methods
    class Gameboard {
        constructor() {
            this.boardArray = []
            this.shipList = [];
            this.generateBoard();
            this.allShips = 'sunk';
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

        checkSunkShips() {
            for ( let obj of this.shipList) {
                obj.isSunk();

                if( obj.sunkStatus === false ) {
                    this.allShips = 'not sunk';
                }
            };
            return this.allShips;
        }
            //thinking of using forEach and every array methods to check status of
            //all ships inside ship array
    };

    return {
        Ship,
        Gameboard,
    };
})();

export { logic };