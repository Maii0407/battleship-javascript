import { appComponents } from "./appComponents";

const appFormFunc = (function() {
    function clearBoard( boardName ) {
        for( let obj of boardName.boardArray ) {
            obj.haveShip = 'empty';
        }
    };

    function placeHorizontal( ship ) {
        ship.position = [];
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
        ship.position = [];
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

//below is logic for randomly placing ships
    function randomHorizontal( ship ) {
        ship.position = [];
        const horiBreak = [4,5,6,11,12,13,18,19,20,25,26,27,32,33,34,39,40,41,46,47,48];

        const val = Math.floor( Math.random() * 49 );
        let val2 = val + 1;
        let val3 = val2 + 1;
        let val4 = val3 + 1;

        if( horiBreak.indexOf( val ) === -1 ) {
            ship.setPosition( [val, val2, val3, val4] );
        } else {
            randomHorizontal( ship );
        };
    };

    function randomVertical( ship ) {
        ship.position = [];
        let val = Math.floor( Math.random() * 49 );
        let val2 = val + 7;
        let val3 = val2 + 7;
        let val4 = val3 + 7;

        if( val4 >= 49 ) {
            randomVertical( ship );
        } else {
            ship.setPosition( [val, val2, val3, val4] );
        };
    };

    function randomShipLocation( ship ) {
        const verOrHor = Math.floor( Math.random() * 10 );

        if( verOrHor >= 5 ) {
            console.log( 'horizontal' );
            randomHorizontal( ship );
        } else if( verOrHor <= 4 ) {
            console.log( 'vertical' );
            randomVertical( ship );
        };

        appComponents.playerBoard.placeShip( ship );
    };

    //so i solved the randomly placing ships but the problem now is the ships is placing on top of each other
    //also placing the ships manually makes the ships before disappear

    return {
        submitShipLocation,
        clearBoard,
        randomShipLocation,
    };
})();

export { appFormFunc };