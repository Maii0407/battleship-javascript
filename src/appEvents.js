import { appComponents } from "./appComponents";
import { playerLogic } from "./playerLogic/playerLogic";
import { appFormFunc } from "./appFormFunc";
import { appUI } from "./appUI";

const appEvents = (function() {

    function boardEvents() {
        document.querySelectorAll( '.com-cell' ).forEach( (cell) => cell.addEventListener( 'click', function() {
            let cellIndex = cell.id;

            playerLogic.playerPlay( appComponents.comBoard, cellIndex );
            playerLogic.computerPlay( appComponents.playerBoard );
            playerLogic.checkWinner( appComponents.playerBoard );
            playerLogic.checkWinner( appComponents.comBoard );
        })); 
    };

    function shipForm1() {
        document.getElementById( `${appComponents.playerBoard.shipList[0].name}-btn` ).addEventListener( 'click', function(){
            appFormFunc.submitShipLocation( appComponents.playerBoard.shipList[0], appComponents.playerBoard, appComponents.playerBoard.shipList[1], appComponents.playerBoard.shipList[2] );
            appUI.generatePlayerCell();
        });
    };

    function shipForm2() {
        document.getElementById( `${appComponents.playerBoard.shipList[1].name}-btn` ).addEventListener( 'click', function(){
            appFormFunc.submitShipLocation( appComponents.playerBoard.shipList[1], appComponents.playerBoard, appComponents.playerBoard.shipList[0], appComponents.playerBoard.shipList[2] );
            appUI.generatePlayerCell();
        });
    };

    function shipForm3() {
        document.getElementById( `${appComponents.playerBoard.shipList[2].name}-btn` ).addEventListener( 'click', function(){
            appFormFunc.submitShipLocation( appComponents.playerBoard.shipList[2], appComponents.playerBoard, appComponents.playerBoard.shipList[0], appComponents.playerBoard.shipList[1] );
            appUI.generatePlayerCell();
        });
    };

    function formEvents() {
        shipForm1();
        shipForm2();
        shipForm3();
    };

    function clearShip1() {
        document.getElementById( `${appComponents.playerBoard.shipList[0].name}-clearBtn` ).addEventListener( 'click', function() {
            appFormFunc.clearShip( appComponents.playerBoard.shipList[0], appComponents.playerBoard );
            appUI.generatePlayerCell();
        });
    };

    function clearShip2() {
        document.getElementById( `${appComponents.playerBoard.shipList[1].name}-clearBtn` ).addEventListener( 'click', function() {
            appFormFunc.clearShip( appComponents.playerBoard.shipList[1], appComponents.playerBoard );
            appUI.generatePlayerCell();
        });
    };

    function clearShip3() {
        document.getElementById( `${appComponents.playerBoard.shipList[2].name}-clearBtn` ).addEventListener( 'click', function() {
            appFormFunc.clearShip( appComponents.playerBoard.shipList[2], appComponents.playerBoard );
            appUI.generatePlayerCell();
        });
    };

    function clearBtnEvents() {
        clearShip1();
        clearShip2();
        clearShip3();
    };

    function randomBtn() {
        document.querySelector( '.placeRandom-btn' ).addEventListener( 'click', function() {
            appFormFunc.clearBoard( appComponents.playerBoard );
            appFormFunc.randomShipLocation( appComponents.playerBoard.shipList[0], appComponents.playerBoard );
            appFormFunc.randomShipLocation( appComponents.playerBoard.shipList[1], appComponents.playerBoard );
            appFormFunc.randomShipLocation( appComponents.playerBoard.shipList[2], appComponents.playerBoard );
            appUI.generatePlayerCell();
        });
    };


    return {
        boardEvents,
        formEvents,
        randomBtn,
        clearBtnEvents,
    };
})();

export { appEvents };