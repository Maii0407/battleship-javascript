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
                        if( horiBreak.indexOf( val ) === -1 ) {
                            ship.setPosition( [val, val2, val3, val4] );
                        } else { return };
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
    function randomHorizontal( ship, board ) {
        ship.position = [];
        const horiBreak = [4,5,6,11,12,13,18,19,20,25,26,27,32,33,34,39,40,41,46,47,48];

        const val = Math.floor( Math.random() * 49 );
        let val2 = val + 1;
        let val3 = val2 + 1;
        let val4 = val3 + 1;

        if( horiBreak.indexOf( val ) === -1 ) {
            //do stuff
        } else {
            randomHorizontal()
        }

        if( board.boardArray[ val ].haveShip === 'empty' && board.boardArray[ val2 ].haveShip === 'empty' &&
            board.boardArray[ val3 ].haveShip === 'empty' && board.boardArray[ val4 ].haveShip === 'empty' ) {
            if( horiBreak.indexOf( val ) === -1 ) {
                ship.setPosition( [val, val2, val3, val4] );
            } else {
                randomHorizontal( ship, board );
            };
        } else {
            randomHorizontal( ship, board );
        };

        board.placeShip( ship );
    };

    function randomVertical( ship, board ) {
        ship.position = [];
        //const vertiBreak = [28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48];

        let val = Math.floor( Math.random() * 49 );
        let val2 = val + 7;
        let val3 = val2 + 7;
        let val4 = val3 + 7;

        if( board.boardArray[ val ].haveShip === 'empty' && board.boardArray[ val2 ].haveShip === 'empty' &&
            board.boardArray[ val3 ].haveShip === 'empty' && board.boardArray[ val4 ].haveShip === 'empty' ) {
            if( val4 >= 49 ) {
                randomVertical( ship, board );
            } else {
                ship.setPosition( [val, val2, val3, val4] );
            };
        } else {
            randomVertical( ship, board );
        };

        board.placeShip( ship );
    };

    function randomShipLocation( ship, board ) {
        const verOrHor = Math.floor( Math.random() * 10 );

        if( verOrHor >= 5 ) {
            console.log( 'horizontal' );
            randomHorizontal( ship, board );
        } else if( verOrHor <= 4 ) {
            console.log( 'vertical' );
            randomVertical( ship, board );
        };
    };

    return {
        submitShipLocation,
        clearBoard,
        randomShipLocation,
        clearShip,
    };
})();

export { appFormFunc };