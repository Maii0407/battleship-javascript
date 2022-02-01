import { factoryLogic } from "./factoryLogic/factoryLogic";

const appComponents = (function() {
    
//IMPORTANT make all ships have a length of 4 makes it easier to code cause im lazy

const playerBoard = new factoryLogic.Gameboard( 'PlayerBoard' );
const playerShip0 = new factoryLogic.Ship( 'Dreadnought', 4, 0 );
const playerShip1 = new factoryLogic.Ship( 'Lightcruiser', 4, 1 );
const playerShip2 = new factoryLogic.Ship( 'Gunship', 4, 2 );
const playerShip3 = new factoryLogic.Ship( 'Starfighter', 4, 3 );
const playerShip4 = new factoryLogic.Ship( 'Starfighter', 4, 4 );
playerBoard.shipList.push( playerShip0, playerShip1, playerShip2, playerShip3, playerShip4 );

const comBoard = new factoryLogic.Gameboard( 'ComputerBoard' );
const comShip0 = new factoryLogic.Ship( 'Dreadnought', 4, 0 );
const comShip1 = new factoryLogic.Ship( 'Lightcruiser', 4, 1 );
const comShip2 = new factoryLogic.Ship( 'Gunship', 4, 2 );
const comShip3 = new factoryLogic.Ship( 'Starfighter', 4, 3 );
const comShip4 = new factoryLogic.Ship( 'Starfighter', 4, 4 );
comBoard.shipList.push( comShip0, comShip1, comShip2, comShip3, comShip4 );

//below is for testing purposes
playerShip0.setPosition( [0, 1, 2, 3] );
playerBoard.placeShip( playerShip0 );

comShip0.setPosition( [0, 1, 2, 3] );
comBoard.placeShip( comShip0 );
comShip1.setPosition( [8, 9, 10, 11] );
comBoard.placeShip( comShip1 );
comShip2.setPosition( [15, 16, 17, 18] );
comBoard.placeShip( comShip2 );
comShip3.setPosition( [45, 46, 47, 48] );
comBoard.placeShip( comShip3 );
comShip4.setPosition( [38, 39, 40, 41] );
comBoard.placeShip( comShip4 );

return {
    playerBoard,
    comBoard,
};
})();

export { appComponents };