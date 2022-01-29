import { factoryLogic } from "./factoryLogic/factoryLogic";

const appComponents = (function() {
    
const playerBoard = new factoryLogic.Gameboard();
const playerShip0 = new factoryLogic.Ship( 'Dreadnought', 5, 0 );
const playerShip1 = new factoryLogic.Ship( 'Lightcruiser', 4, 1 );
const playerShip2 = new factoryLogic.Ship( 'Gunship', 3, 2 );
const playerShip3 = new factoryLogic.Ship( 'Starfighter', 2, 3 );
const playerShip4 = new factoryLogic.Ship( 'Starfighter', 2, 4 );

const comBoard = new factoryLogic.Gameboard();
const comShip0 = new factoryLogic.Ship( 'Dreadnought', 5, 0 );
const comShip1 = new factoryLogic.Ship( 'Lightcruiser', 4, 1 );
const comShip2 = new factoryLogic.Ship( 'Gunship', 3, 2 );
const comShip3 = new factoryLogic.Ship( 'Starfighter', 2, 3 );
const comShip4 = new factoryLogic.Ship( 'Starfighter', 2, 4 );

return {};
})();

export { appComponents };