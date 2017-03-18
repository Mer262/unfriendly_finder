// Your `apiRoutes.js` file should contain two routes:
//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// Routes
// =============================================================

var unfriends = require('../data/friends.js');


module.exports = function(app) {

    // return JSON of all unfriends
    app.get("/api/friends", function(req, res) {
        return res.json(unfriends);
    });

    // Create New Characters - takes in JSON input
    // app.post("/api/new", function(req, res) {
    //     var newcharacter = req.body;
    //     newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

    //     console.log(newcharacter);

    //     characters.push(newcharacter);

    //     res.json(newcharacter);
    // });
}