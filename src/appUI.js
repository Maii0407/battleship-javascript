
const appUI = (function() {
    function makeContainer() {
        const mainContainer = document.createElement( 'div' );
        mainContainer.classList.add( 'main-container' );
        document.body.appendChild( mainContainer );
    };

    return {
        makeContainer,
    };
})();

export { appUI };