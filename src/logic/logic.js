
const logic = ( function() {
    const shipList = [];

    class Ship {
        constructor(name, length) {
            this.name = name;
            this.length = length;
            this.hits = [];
        }

        hit(life) {
            this.hits.push(life);
        }

        isSunk() {
            if( this.hits.length === this.length) {
                console.log( `${this.name} is sunk by the enemy.`);
            } else {
                return;
            }
        }
    };

    const carrier = new Ship( 'Carrier', 6 );
    const battleship1 = new Ship( 'Battleship 1', 4);
    const battleship2 = new Ship( 'Battleship 2', 4);
    const cruiser1 = new Ship( 'Cruiser 1', 3);
    const cruiser2 = new Ship( 'Cruiser 2', 3);
    const cruiser3 = new Ship( 'Cruiser 3', 3);
    const destroyer1 = new Ship( 'Destroyer 1', 2);
    const destroyer2 = new Ship( 'Destroyer 2', 2);
    const destroyer3 = new Ship( 'Destroyer 3', 2);
    const destroyer4 = new Ship( 'Destroyer 4', 2);

    shipList.push( carrier, battleship1, battleship2, cruiser1, cruiser2, cruiser3, destroyer1, destroyer2, destroyer3, destroyer4 );

    return {
        shipList,
    };
})();

export { logic };