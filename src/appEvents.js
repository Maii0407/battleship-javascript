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

    function ship1Event() {
        document.getElementById( `${appComponents.playerBoard.shipList[0].name}-btn` ).addEventListener( 'click', function(){
            appFormFunc.submitShipLocation( appComponents.playerBoard.shipList[0] );
            console.log( appComponents.playerBoard.shipList[0].position );
            appComponents.playerBoard.placeShip( appComponents.playerBoard.shipList[0] );
            appUI.generatePlayerCell();
        });
    }

    return {
        boardEvents,
        ship1Event,
    };
})();

export { appEvents };