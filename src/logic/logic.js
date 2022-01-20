
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
    };

    return {
        shipList,
        Ship,
    };
})();

export { logic };