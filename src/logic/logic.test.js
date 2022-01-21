import { logic } from "./logic";

//below is tests for ship section of logic.js
test( 'single isHit function test', () => {
    const testShip = new logic.Ship( 'Cruiser', 3, [0, 1, 2]);
    testShip.isHit(1);
    expect( testShip.hits ).toEqual([1]);
});

test( 'multiple isHit function test', () => {
    const testShip1 = new logic.Ship( 'Battleship', 4, [3, 4, 5, 6]);
    testShip1.isHit(3);
    testShip1.isHit(4);
    testShip1.isHit(5);
    expect( testShip1.hits ).toEqual([3, 4, 5]);
});

test( 'false isSunk function test', () => {
    const testShip2 = new logic.Ship( 'Carrier', 6, [0, 1, 2, 3, 4, 5, 6] );
    testShip2.isHit(0);
    testShip2.isHit(1);
    testShip2.isHit(2);
    expect(testShip2.isSunk()).toBe(false);
});

test( 'true isSunk function test', () => {
    const testShip3 = new logic.Ship( 'Destroyer', 2, [10, 11] );
    testShip3.isHit(10);
    testShip3.isHit(11);
    expect(testShip3.isSunk()).toBe(true);
});

//below is test for the gameboard section of the logic.js
test( 'test recordAttack function 1', () => {
    const testBoard = new logic.Gameboard();
    testBoard.recordAttack(48);
    expect(testBoard.boardArray[48].isAttacked).toBe(true);
});

test( 'placeShip function test', () => {
    const testBoard = new logic.Gameboard();
    const testShip = new logic.Ship( 'Cruiser', 3, [0, 1, 2]);
    expect(testBoard.boardArray[0, 1, 2].haveShip).toBe(true);
});