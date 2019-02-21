var friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
        

    });

    app.post("/api/friends", function (req, res) {
        console.log(req.body);

        var difference = function (a, b) { return Math.abs(a - b); }


        var differenceArray = [];
        for (var i = 0; i <friends.length; i++){

            var totalFriendDiff= 0;
            for (var qi= 0; qi < friends.scores.length; qi++){
                totalFriendDiff += difference(
                    friends.scores[qi], req.body.scores[qi]
                  );
                if (qi = friends[i].length - 1) {
                    differenceArray.push(totalFriendDiff);
                }
            }
            
        };

        var bestMatchIndex = differenceArray.indexOf(
          Math.min(differenceArray)
        );
        console.log(bestMatchIndex);
        

        var bestMatch = friends[bestMatchIndex];
        friends.push(bestMatch);
        res.json(bestMatch)

    });
       
      
};