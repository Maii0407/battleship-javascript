import { appComponents } from "./appComponents";

const appFormFunc = (function() {
    function placeHorizontal( ship ) {
        const horiBreak = [4,5,6,11,12,13,18,19,20,25,26,27,32,33,34,39,40,41,46,47,48];

        let val = Number(document.getElementById( `${ship.name}-position` ).value);
        let val2 = Number( val ) + 1;
        let val3 = Number( val2 ) + 1;
        let val4 = Number( val3 ) + 1;

        if( horiBreak.indexOf( val ) === -1 ) {
            ship.setPosition( [val, val2, val3, Number( val4 )] );
        } else {
            return;
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