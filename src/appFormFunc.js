import { appComponents } from "./appComponents";

const appFormFunc = (function() {
    function placeHorizontal( ship ) {
        let val = Number(document.getElementById( `${ship.name}-position` ).value);
        let val2 = Number( val ) + 1;
        let val3 = Number( val2 ) + 1;
        let val4 = Number( val3 ) + 1;
        ship.setPosition( [val, val2, val3, Number( val4 )] );
    };

    function placeVertical( ship ) {
        let val = Number(document.getElementById( `${ship.name}-position` ).value);
        let val2 = Number( val ) + 7;
        let val3 = Number( val2 ) + 7;
        let val4 = Number( val3 ) + 7;
        ship.setPosition( [val, val2, val3, Number( val4 )] );
    };

    function submitShipLocation( ship ) {
        if( document.getElementById( `${ship.name}-direction` ).value === 'horizontal' ) {
            placeHorizontal( ship );
        } else if( document.getElementById( `${ship.name}-direction` ).value === 'vertical' ) {
            placeVertical( ship );
        }
    };

    return {
        submitShipLocation,
    };
})();

export { appFormFunc };