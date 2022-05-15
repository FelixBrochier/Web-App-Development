import distancecalculator from "/Users/felixbrochier/Documents/Imperial/Computing 2/computing-2-coursework-felixbroch-1/web-app/static/main.js";
import fc from "fast-check";
import property from "/Users/felixbrochier/Documents/Imperial/Computing 2/computing-2-coursework-felixbroch-1/web-app/tests/properties.js";



describe("distancecalculator", function() {
// Try creating a unit test function based on the test Freddie
//  did on lectures
    it("Unit test  for distance calculator", function () {

        const examples = [
            [[51.509865, -0.118092, 40.730610, -73.935242], 5585],
            [[1.290270, 103.851959, 35.652832, 139.839478], 5318]
        ];

        examples.forEach(function([coordinates, distance]) {
            let calculatedDistance = distancecalculator(coordinates[0],
             coordinates[1], coordinates[2], coordinates[3]);
            return calculatedDistance === distance;
        });

    });
});

// Here is my attempt for property testing

let lat1 = fc.integer(-90, 90);
let lon1 = fc.integer(-180, 180);
let lat2 = fc.integer(-90, 900);
let lon2 = fc.integer(-180, 180);

describe("Testing the distance", function () {
        property(
        "Reverse the coordinates returns the same distance",
        [lat1, lon1, lat2, lon2],
        function (lat1, lon1, lat2, lon2) {
                hometourist = distancecalculator(lat1, lon1, lat2, lon2);
                touristhome = distancecalculator(lat2, lon2, lat1, lon1);
                return hometourst === touristhome
        }
    );
}​​​);

describe("Unit test for distancecalculator", function () {

    property("One examples coordinate, if we reverse the 2 cities it should" +
    "have the same distance", function () {
        const lat1 = 51.509865;
        const lon1 = -0.118092;
        const lat2 = 40.730610;
        const lon2 = -73.935242;

        let distance1 = distancecalculator(lat1, lon1, lat2, lon2);
        let distance2 = distancecalculator(lat2, lon2,lat1,lat1);
        return distance1 === distance2;
    })
})
