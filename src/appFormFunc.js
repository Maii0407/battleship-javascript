import { appComponents } from "./appComponents";

const appFormFunc = (function() {
    function clearBoard( board ) {
        for( let obj of board.boardArray ) {
            obj.haveShip = 'empty';
        }
    };

    function clearShip( ship, board ) {
        for( let obj of board.boardArray ) {
            if( obj.haveShip === ship.shipIndex ) {
                obj.haveShip = 'empty';
            };
        };
    };

    function placeHorizontal( ship, board, otherShip1, otherShip2 ) {
        ship.position = [];
        const horiBreak = [4,5,6,11,12,13,18,19,20,25,26,27,32,33,34,39,40,41,46,47,48];

        let val = Number(document.getElementById( `${ship.name}-position` ).value);
        let val2 = val + 1;
        let val3 = val2 + 1;
        let val4 = val3 + 1;

        for( let obj of board.boardArray ) {
            if( obj.haveShip === ship.shipIndex ) {
                alert( `You already placed the position of ${ship.name}` ); 
                return;
                
            } else if( obj.haveShip === otherShip1.shipIndex || obj.haveShip === otherShip2.shipIndex ) {
                if( board.boardArray[ val ].haveShip === 'empty' && 
                    board.boardArray[ val2 ].haveShip === 'empty' &&
                    board.boardArray[ val3 ].haveShip === 'empty' &&
                    board.boardArray[ val4 ].haveShip === 'empty' ) {
                        if( val4 >= 49 ) {
                            return;
                        } else {
                            ship.setPosition( [val, val2, val3, val4] );
                        };
                } else {
                    alert( 'There is already a ship there' ); 
                    return; 
                };
            } else {
                if( horiBreak.indexOf( val ) === -1 ) {
                    ship.setPosition( [val, val2, val3, val4] );
                } else { return };
            }; 
        };

        board.placeShip( ship );
    };

    function placeVertical( ship, board, otherShip1, otherShip2 ) {
        ship.position = [];
        let val = Number(document.getElementById( `${ship.name}-position` ).value);
        let val2 = val + 7;
        let val3 = val2 + 7;
        let val4 = val3 + 7;

        for( let obj of board.boardArray ) {
            if( obj.haveShip === ship.shipIndex ) {
                alert( `You already placed the position of ${ship.name}` ); 
                return;
                
            } else if( obj.haveShip === otherShip1.shipIndex || obj.haveShip === otherShip2.shipIndex ) {
                if( board.boardArray[ val ].haveShip === 'empty' && 
                    board.boardArray[ val2 ].haveShip === 'empty' &&
                    board.boardArray[ val3 ].haveShip === 'empty' &&
                    board.boardArray[ val4 ].haveShip === 'empty' ) {
                        if( val4 >= 49 ) {
                            return;
                        } else {
                            ship.setPosition( [val, val2, val3, val4] );
                        };
                } else {
                    alert( 'There is already a ship there' ); 
                    return; 
                };
            } else {
                if( val4 >= 49 ) {
                    return;
                } else {
                    ship.setPosition( [val, val2, val3, val4] );
                };
            }; 
        };

        board.placeShip( ship );
    };

    function submitShipLocation( ship, board, otherShip1, otherShip2 ) {
        if( document.getElementById( `${ship.name}-direction` ).value === 'horizontal' ) {
            placeHorizontal( ship, board, otherShip1, otherShip2 );
        } else if( document.getElementById( `${ship.name}-direction` ).value === 'vertical' ) {
            placeVertical( ship, board, otherShip1, otherShip2 );
        } else {
            return;
        };

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
        clearShip,
    };
})();

export { appFormFunc };