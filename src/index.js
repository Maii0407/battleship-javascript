import { appUI } from "./appUI";
import { appEvents } from "./appEvents";
import { appComponents } from "./appComponents";
import { appFormFunc } from "./appFormFunc";

const spaceBattleShip = (function() {
    
    function defaultMode() {
        appUI.makeContainer();
        appUI.makeTitleContainer();
        appUI.makeContentContainer();
        appUI.makeMenuContainer();
        appUI.makeBoardContainer();
        appUI.generatePlayerBoard();
        appUI.generatePlayerCell();
        appUI.makeFormWrapper();
        appUI.generateForm();
        appUI.generateRandomButton();
        appEvents.formEvents();
        appEvents.randomBtn();
        appEvents.clearBtnEvents();
    };

    function formMode() {
        appUI.generatePlayerBoard();
        appUI.generatePlayerCell();
        appUI.makeFormWrapper();
        appUI.generateForm();
        appUI.generateRandomButton();
        appEvents.formEvents();
        appEvents.randomBtn();
        appEvents.clearBtnEvents();
    };

    function gameMode() {
        appUI.generatePlayerBoard();
        appUI.generatePlayerCell();
        appUI.generateComBoard();
        appUI.generateComCell();
        appEvents.boardEvents();
    };

    function startBtn() {
        if( appComponents.playerBoard.shipList[0].position.length === 0 || 
            appComponents.playerBoard.shipList[1].position.length === 0 ||
            appComponents.playerBoard.shipList[2].position.length === 0 ||
            appComponents.playerBoard.shipList[3].position.length === 0 ) {
                alert( 'CANNOT START GAME IF THERE IS STILL SHIPS NOT PLACED' );
        } else {
            document.querySelector( '.board-container' ).innerHTML = '';
            gameMode();
        };
    };

    defaultMode();

//event listeners
    document.querySelector( '.start-btn' ).addEventListener( 'click', function() {
        appFormFunc.clearBoard( appComponents.comBoard );
        appFormFunc.randomShipLocation( appComponents.comBoard.shipList[0], appComponents.comBoard );
        appFormFunc.randomShipLocation( appComponents.comBoard.shipList[1], appComponents.comBoard );
        appFormFunc.randomShipLocation( appComponents.comBoard.shipList[2], appComponents.comBoard );
        appFormFunc.randomShipLocation( appComponents.comBoard.shipList[3], appComponents.comBoard );
        startBtn();
    });

    document.querySelector( '.reset-btn' ).addEventListener( 'click', function() {
        document.querySelector( '.board-container' ).innerHTML = '';
        appFormFunc.clearBoard( appComponents.playerBoard );
        appFormFunc.clearBoard( appComponents.comBoard );
        formMode();
    });

    

    //player board
    
    
    //computer board
    //appUI.generateComBoard();
    //appUI.generateComCell();
    
    

    //eventlisteners
    //appEvents.boardEvents();
    

    return {};
})();