import { logic } from "./logic";

test ( 'testing single isHit function', () => {
    const testShip = new logic.Ship( 'Cruiser', 3, [0, 1, 2]);
    testShip.isHit(1);
    expect(testShip.hits).toEqual([1]);
});