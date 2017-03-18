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


    app.post("/api/friends", function(req, res) {
        var newUnfriend = req.body;

        console.log(newUnfriend);

        // unfriends.push(newUnfriend);

        // res.json(newUnfriend);





        //holds the best match and will update as it loops through the options
        var unfriendliest = {
            name: "",
            photo: "",
            friendDifference: 1000
        };
        //posts and parses the result of the users's survey
        var userData = req.body;
        var userName = newUnfriend.name;
        var userPhoto = newUnfriend.photo;
        var userScores = newUnfriend.scores;


        //calculates the difference between the users's scores and the scores of each user in the database

        var totalDifference = 0;

        //loops through the friend possibilities in the database
        for (var i = 0; i < unfriends.length; i++) {
            console.log(unfriends[i].name);
            totalDifference = 0;

            //loops through all of the scores for each friend
            for (var j = 0; j < unfriends[i].scores[j]; j++) {
                //calculate the total difference between the scores and sums into the totalDifference

                totalDifference += Math.abs(
                    parseInt(userScores[j]) -
                    parseInt(unfriends[i].scores[j]));

                //if sum of diff is less then the differences of the current 'best match'
                if (totalDifference <= unfriendliest.unfriendsDifference) {

                    //resets the best match to the new friend

                    unfriendliest.name = unfriends[i].name;
                    unfriendliest.age = unfriends[i].age;
                    unfriendliest.photo = unfriends[i].photo;

                    unfriendliest.friendDifference = totalDifference;
                }
            }
        }
        //saves the user's data to the database 
        unfriends.push(userData);

        //return a JSON with user's best match to be used by html
        res.json(unfriendliest);

    });
};