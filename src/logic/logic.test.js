import { logic } from "./logic";

//below is tests for ship section of logic.js
test( 'single isHit function test', () => {
    const testShip = new logic.Ship( 'Cruiser', 3 );
    testShip.setPosition([0, 1, 2]);
    testShip.isHit(1);
    expect( testShip.hits ).toEqual([1]);
});

test( 'multiple isHit function test', () => {
    const testShip1 = new logic.Ship( 'Battleship', 4);
    testShip1.setPosition([3, 4, 5, 6])
    testShip1.isHit(3);
    testShip1.isHit(4);
    testShip1.isHit(5);
    expect( testShip1.hits ).toEqual([3, 4, 5]);
});

test( 'false isSunk function test', () => {
    const testShip2 = new logic.Ship( 'Carrier', 6);
    testShip2.setPosition([0, 1, 2, 3, 4, 5, 6])
    testShip2.isHit(0);
    testShip2.isHit(1);
    testShip2.isHit(2);
    testShip2.isSunk();
    expect(testShip2.sunkStatus).toBe(false);
});

test( 'true isSunk function test', () => {
    const testShip3 = new logic.Ship( 'Destroyer', 2);
    testShip3.setPosition([10, 11])
    testShip3.isHit(10);
    testShip3.isHit(11);
    testShip3.isSunk();
    expect(testShip3.sunkStatus).toBe(true);
});

//below is test for the gameboard section of the logic.js
test( 'test recordAttack missed function', () => {
    const testBoard = new logic.Gameboard();
    testBoard.recordAttack(48);
    expect(testBoard.boardArray[48].isAttacked).toBe('missed');
});

test( 'placeShip function test', () => {
    const testBoard = new logic.Gameboard();
    const testShip = new logic.Ship( 'Cruiser', 3);
    testShip.setPosition([0, 1, 2])
    testBoard.placeShip( testShip.position );
    expect(testBoard.boardArray[0, 1, 2].haveShip).toBe( true );
});

test( 'recordAttack shot function test', () => {
    const testBoard = new logic.Gameboard();
    const testShip = new logic.Ship( 'Cruiser', 3);
    testShip.setPosition([0, 1, 2])
    testBoard.placeShip( testShip.position );
    testBoard.recordAttack(1);
    expect(testBoard.boardArray[1].isAttacked).toBe( 'shot' );
});

test( 'function check all ships sunk TEST', () => {
    const testBoard = new logic.Gameboard();
    const testShip = new logic.Ship( 'Destroyer', 2 );
    testShip.setPosition( [3, 4] );
    testBoard.placeShip( testShip.position );
    testBoard.shipList.push( testShip );

});