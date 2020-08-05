//Const
const path = require("path");


//module exports
module.exports = function(app) {
    // index page route
    app.get("/", (req,res) => {
        res.sendFile(path.join(__dirname,"../public/index.html"));
    });

    // exercise page route
    app.get("/exercise", (req,res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    // stats page route
    app.get("/stats", (req,res) =>{
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
    
};
