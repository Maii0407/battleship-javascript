const factoryLogic = ( function() {

//below is class that generates ships and their methods
    class Ship {
        constructor( name, length, shipIndex ) {
            this.name = name;
            this.length = length;
            this.shipIndex = shipIndex;
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
            if( this.hits.length === this.length ) { 
                return this.sunkStatus = true;
            } else {
                return this.sunkStatus;
            }
        }
    };

//below is class that generates the gameboards and their methods
    class Gameboard {
        constructor( name ) {
            this.name = name;
            this.boardArray = []
            this.shipList = [];
            this.generateBoard();
            this.allShips = 'sunk';
        }

        generateBoard( gridSize ) {
            for( let i = 0; i < 49; i++) {
                this.boardArray.push({ haveShip: 'empty', isAttacked: 'empty' });
            }
        }

        getHaveShip(boardIndex) {
            return this.boardArray[boardIndex].haveShip;
        }

        recordAttack(boardIndex) {
            if( this.boardArray[boardIndex].haveShip === 'empty' ) {
                this.boardArray[boardIndex].isAttacked = 'missed';
            } else {
                const shipIndex = this.getHaveShip(boardIndex);
                this.boardArray[boardIndex].isAttacked = 'shot';
                this.shipList[shipIndex].isHit( boardIndex );
            } 
        }

        placeShip(board) {
            board.position.forEach( object => {
                return this.boardArray[object].haveShip = board.shipIndex;
            });
        }

        checkSunkShips() {
            for ( let obj of this.shipList) {
                obj.isSunk();

                if( obj.sunkStatus === false ) {
                    return this.allShips = 'not sunk';
                }
            };
            return this.allShips;
        }
    };

    return {
        Ship,
        Gameboard,
    };
})();

export { factoryLogic };