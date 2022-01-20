
const logic = ( function() {
    const shipList = [];

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

    return {
        shipList,
        Ship,
    };
})();

export { logic };