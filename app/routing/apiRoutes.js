// Your `apiRoutes.js` file should contain two routes:
//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// Routes
// =============================================================



// Search for Specific Character (or all characters) - provides JSON
app.get("/api/friends?", function(req, res) {
    var chosen = req.params.characters;

    if (chosen) {
        console.log(chosen);

        for (var i = 0; i < characters.length; i++) {
            if (chosen === characters[i].routeName) {
                return res.json(characters[i]);
            }
        }

        return res.json(false);
    }
    return res.json(characters);
});

// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
    var newcharacter = req.body;
    newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

    console.log(newcharacter);

    characters.push(newcharacter);

    res.json(newcharacter);
});