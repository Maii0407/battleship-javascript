import { factoryLogic } from "../factoryLogic/factoryLogic";
import { playerLogic } from "./playerLogic";

test( 'playGame function test', () => {
    const myTestBoard = new factoryLogic.Gameboard();
    const myTestShip = new factoryLogic.Ship( 'myCarrier', 5 );
    myTestShip.setPosition([0, 1, 2, 3, 4, 5]);
    myTestBoard.placeShip( myTestShip.position );
    myTestBoard.shipList.push( myTestShip );

    const enemyTestBoard = new factoryLogic.Gameboard();
    const enemyTestShip = new factoryLogic.Ship( 'enemyCarrier', 5);
    enemyTestShip.setPosition([6, 7, 8, 9, 10]);
    enemyTestBoard.placeShip( enemyTestShip.position );
    enemyTestBoard.shipList.push( enemyTestShip );

    playerLogic.playGame( enemyTestBoard, myTestBoard, 6 );

    expect( enemyTestBoard.boardArray[6].isAttacked ).toBe( 'shot' );
    expect( playerLogic.playGame( enemyTestBoard, myTestBoard, 6) ).toBe( 'player' );
});