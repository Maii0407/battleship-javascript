import { factoryLogic } from "./factoryLogic";

describe( 'Ship class TEST', () => {
    let testShip;
    beforeEach( () => {
        testShip = new factoryLogic.Ship( 'ship0', 3, 0);
        testShip.setPosition( [0, 1, 2] );
    });

    test( 'single isHit function TEST', () => {
        testShip.isHit( 1 );
        expect( testShip.hits ).toEqual( [1] );
    });

    test( 'multiple isHit function TEST', () => {
        testShip.isHit( 0 );
        testShip.isHit( 1 );
        expect( testShip.hits ).toEqual( [0, 1] );
    });

    test( 'false isSunk function TEST', () => {
        testShip.isHit(0);
        expect( testShip.isSunk() ).toBe( false );
    });

    test( 'true isSunk function TEST', () => {
        testShip.isHit( 0 );
        testShip.isHit( 1 );
        testShip.isHit( 2 );
        expect( testShip.isSunk() ).toBe(true);
    });
});

describe( 'Gameboard class TEST', () => {
    let testBoard;
    let testShip0;
    let testShip1;
    beforeEach( () => {
        testBoard = new factoryLogic.Gameboard();
        testShip0 = new factoryLogic.Ship( 'ship0', 3, 0);
        testShip0.setPosition( [3, 4, 5] );
        testShip1 = new factoryLogic.Ship( 'ship1', 3, 1);
        testShip1.setPosition( [7, 8, 9] );
        testBoard.placeShip( testShip0 );
        testBoard.placeShip( testShip1 );
        testBoard.shipList.push( testShip0, testShip1 );
    });

    test( 'missed recordAttack function TEST', () => {
        testBoard.recordAttack( 48 );
        expect( testBoard.boardArray[48].isAttacked ).toBe( 'missed' );
    });

    test( 'shot recordAttack function TEST', () => {
        testBoard.recordAttack( 3 );
        expect( testBoard.boardArray[3].isAttacked ).toBe( 'shot' );
        expect( testBoard.shipList[0].hits ).toEqual( [3] );
        expect( testBoard.getHaveShip( 3 )).toBe( 0 );
    });

    test( 'not sunk checkSunkShips function TEST', () => {
        testBoard.recordAttack( 3 );
        testBoard.recordAttack( 4 );
        testBoard.recordAttack( 5 );
        expect( testBoard.checkSunkShips()).toBe( 'not sunk' );
    });

    test( 'sunk checkSunkShips function TEST', () => {
        testBoard.recordAttack( 3 );
        testBoard.recordAttack( 4 );
        testBoard.recordAttack( 5 );
        testBoard.recordAttack( 7 );
        testBoard.recordAttack( 8 );
        testBoard.recordAttack( 9 );
        testBoard.checkSunkShips()
        expect( testBoard.allShips ).toBe( 'sunk' );
    });
});