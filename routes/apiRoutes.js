//const
const Workout = require("../models/Workout.js");

//exports (app)
module.exports = function (app) {
    //get workouts
    app.get("/api/workouts", (req, res) => {
        Workout.find({})
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
    });


    //post created workouts
    app.post("/api/workouts", (req, res) => {
        Workout.create({})
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                console.log("err", err)
                res.json(err)
            })
    });

    //put w/ catch to find workouts & update workouts
    app.put("/api/workouts/:id", ({ body, params }, res) => {
        Workout.findByIdAndUpdate(
            params.id,
            { $push: { exercises: body } },
            {
                new: true,
                runValidators: true
            }
        ).then(data => res.json(data))
            .catch(err => {
                console.log("err", err)
                res.json(err)
            })
    })

    // get range w/ catch
    app.get("/api/workouts/range", (req, res) => {
        Workout.find({})
            .then((workout) => {
                res.json(workout);
             })
        .catch((err) => {
            res.json(err);
        })
    });   


};