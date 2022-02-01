import { appUI } from "./appUI";
import { appEvents } from "./appEvents";

const spaceBattleShip = (function() {
    appUI.makeContainer();
    appUI.makeBoardContainer();

    //player board
    appUI.generatePlayerBoard();
    appUI.generatePlayerCell();
    
    //computer board
    appUI.generateComBoard();
    //appUI.generateComCell();

    //eventlisteners
    appEvents.boardEvents();

    return {};
})();