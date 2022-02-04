import { appUI } from "./appUI";
import { appEvents } from "./appEvents";
import { appComponents } from "./appComponents";

const spaceBattleShip = (function() {
    appUI.makeContainer();
    appUI.makeBoardContainer();

    //player board
    appUI.generatePlayerBoard();
    appUI.generatePlayerCell();
    
    //computer board
    appUI.generateComBoard();
    //appUI.generateComCell();
    appUI.generateForm();

    //eventlisteners
    appEvents.boardEvents();
    appEvents.ship1Event();

    console.log( appComponents.playerBoard.shipList[0].name );

    return {};
})();