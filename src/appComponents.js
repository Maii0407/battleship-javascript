import { factoryLogic } from "./factoryLogic/factoryLogic";

const appComponents = (function() {
    
const playerBoard = new factoryLogic.Gameboard( 'PlayerBoard' );
const playerShip0 = new factoryLogic.Ship( 'Dreadnought', 5, 0 );
const playerShip1 = new factoryLogic.Ship( 'Lightcruiser', 4, 1 );
const playerShip2 = new factoryLogic.Ship( 'Gunship', 3, 2 );
const playerShip3 = new factoryLogic.Ship( 'Starfighter', 2, 3 );
const playerShip4 = new factoryLogic.Ship( 'Starfighter', 2, 4 );
playerBoard.shipList.push( playerShip0, playerShip1, playerShip2, playerShip3, playerShip4 );

const comBoard = new factoryLogic.Gameboard( 'ComputerBoard' );
const comShip0 = new factoryLogic.Ship( 'Dreadnought', 5, 0 );
const comShip1 = new factoryLogic.Ship( 'Lightcruiser', 4, 1 );
const comShip2 = new factoryLogic.Ship( 'Gunship', 3, 2 );
const comShip3 = new factoryLogic.Ship( 'Starfighter', 2, 3 );
const comShip4 = new factoryLogic.Ship( 'Starfighter', 2, 4 );
comBoard.shipList.push( comShip0, comShip1, comShip2, comShip3, comShip4 );

//below is for testing purposes
playerShip0.setPosition( [0, 1, 2, 3, 4] );
playerBoard.placeShip( playerShip0 );

return {
    playerBoard,
    comBoard,
};
})();

export { appComponents };