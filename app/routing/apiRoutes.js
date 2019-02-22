var friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
        

    });

    app.post("/api/friends", function (req, res) {
        // console.log(req.body);

        var difference = function (a, b) { return Math.abs(a - b); }


        var differenceArray = [];
        for (var i = 0; i <friends.length; i++){

            var totalFriendDiff= 0;
            for (var qi= 0; qi < 10; qi++){

                var friendScore = parseInt(friends[i].scores[qi]);
                var userScore = parseInt(req.body.scores[qi]);
                // difference(friends[i].scores[qi],req.body.scores[qi]);
                // console.log("Score Iteration#(qi) " + qi +" - userScore: " + userScore);

                diff = difference(friendScore, userScore);
                // console.log("difference: " +diff)
                
                totalFriendDiff += diff
                // console.log("Total Difference: " + totalFriendDiff +"\n")
                if (qi === 9) {
                    // totalFriendDiff += console.log("totalFriendDiff " + totalFriendDiff)
                    differenceArray.push(totalFriendDiff);
                    // console.log("")
                    // console.log(
                    //   "Array (difference):" +
                    //     differenceArray
                    // );
                    // console.log("");
                }
            }
        };

        console.log("differenceArray " + differenceArray);
        var bestMatchIndex = differenceArray.indexOf(Math.min(...differenceArray));
        console.log("BestMatchIndex: " + bestMatchIndex);
        

        var bestMatch = friends[bestMatchIndex];
        console.log("bestMatch Name: " + bestMatch.name);
        friends.push(bestMatch);
        return res.json(bestMatch)

    });
       
      
};