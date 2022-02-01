import { appComponents } from "./appComponents";
import { playerLogic } from "./playerLogic/playerLogic";

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

    return {
        boardEvents,
    };
})();

export { appEvents };