import { factoryLogic } from "./factoryLogic/factoryLogic";
import { appUI } from "./appUI";
import { appComponents } from "./appComponents";

const spaceBattleShip = (function() {
    appUI.makeContainer();
    appUI.makeBoardContainer();
    appUI.generatePlayerBoard();
    appUI.generateComBoard();

    return {};
})();