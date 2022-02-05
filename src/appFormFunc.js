import { appComponents } from "./appComponents";

const appFormFunc = (function() {
    function placeHorizontal( ship ) {
        let val = Number(document.getElementById( `${ship.name}-position` ).value);
        let val2 = Number( val ) + 1;
        let val3 = Number( val2 ) + 1;
        let val4 = Number( val3 ) + 1;

        //this still needs work
        if( val4 >= 6 || val4 >= 13 || val4 >= 20 || val4 >= 27 || val4 >= 34 || val4 >= 41 || val4 >= 48 ) {
            return;
        } else {
            ship.setPosition( [val, val2, val3, Number( val4 )] );
        };
    };

    function placeVertical( ship ) {
        let val = Number(document.getElementById( `${ship.name}-position` ).value);
        let val2 = Number( val ) + 7;
        let val3 = Number( val2 ) + 7;
        let val4 = Number( val3 ) + 7;

        if( val4 >= 49 ) {
            return;
        } else {
            ship.setPosition( [val, val2, val3, Number( val4 )] );
        };
    };

    function submitShipLocation( ship ) {
        const verticalCollision = [28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48];
        const horizontalCollision = [4,5,6,11,12,13,18,19,20,25,26,27,32,33,34,39,40,41,46,47,48];

        if( document.getElementById( `${ship.name}-direction` ).value === 'horizontal' ) {
            placeHorizontal( ship );
        } else if( document.getElementById( `${ship.name}-direction` ).value === 'vertical' ) {
            placeVertical( ship );
        } else {
            return;
        };

        appComponents.playerBoard.placeShip( ship );
        document.getElementById( `${ship.name}-position` ).value = '';
    };

    return {
        submitShipLocation,
    };
})();

export { appFormFunc };