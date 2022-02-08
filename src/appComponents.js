import { factoryLogic } from "./factoryLogic/factoryLogic";

const appComponents = (function() {
    
//IMPORTANT make all ships have a length of 6 makes it easier to code cause im lazy

const playerBoard = new factoryLogic.Gameboard( 'PlayerBoard' );
const playerShip0 = new factoryLogic.Ship( 'Ship-1', 4, 0 );
const playerShip1 = new factoryLogic.Ship( 'Ship-2', 4, 1 );
const playerShip2 = new factoryLogic.Ship( 'Ship-3', 4, 2 );
const playerShip3 = new factoryLogic.Ship( 'Ship-4', 4, 3 );
playerBoard.shipList.push( playerShip0, playerShip1, playerShip2, playerShip3 );

const comBoard = new factoryLogic.Gameboard( 'ComputerBoard' );
const comShip0 = new factoryLogic.Ship( 'comShip-1', 4, 0 );
const comShip1 = new factoryLogic.Ship( 'comShip-2', 4, 1 );
const comShip2 = new factoryLogic.Ship( 'comShip-3', 4, 2 );
const comShip3 = new factoryLogic.Ship( 'comShip-4', 4, 3 );
comBoard.shipList.push( comShip0, comShip1, comShip2, comShip3 );

return {
    playerBoard,
    comBoard,
    playerShip0,
};
})();

export { appComponents };