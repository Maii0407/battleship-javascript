import { factoryLogic } from "../factoryLogic/factoryLogic";
import { playerLogic } from "./playerLogic";

describe( 'playerLogic module TEST', () => {
    let playerBoard;
    let playerShip;
    let comBoard;
    let comShip;
    beforeEach( () => {
        playerBoard = new factoryLogic.Gameboard();
        playerShip = new factoryLogic.Ship( 'playerShip', 3, 0 );
        playerShip.setPosition( [0, 1, 2] );
        playerBoard.placeShip( playerShip );
        playerBoard.shipList.push( playerShip );

        comBoard = new factoryLogic.Gameboard();
        comShip = new factoryLogic.Ship(  'comShip', 3, 0);
        comShip.setPosition( [3, 4, 5] );
        comBoard.placeShip( comShip );
        comBoard.shipList.push( comShip );
    });

    test( 'playerTurn function TEST', () => {
        playerLogic.playerTurn( comBoard, 3 );

        expect( comBoard.boardArray[3].isAttacked ).toBe( 'shot' );
        expect( comBoard.shipList[0].hits ).toEqual( [3] );
    });

//below test works but if ur lucky it wont work because the computer shot the test ships LOL
    test( 'computerTurn function TEST', () => {
        playerLogic.computerTurn( playerBoard );

        expect( playerBoard.boardArray ).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    isAttacked: 'missed'
                })
            ])
        )
    });

    test( 'playing a round TEST', () => {});
});