//const mongoose & Schema
const  mongoose  = require("mongoose");
const Schema = mongoose.Schema;

//const workoutSchema w/ properties
const workoutSchema = new Schema(
    {
        //day
        day: {
            type: Date,
            default: Date.NOW
        },
        //excercise
        excercises: [
            {
                // type
                type: {
                    type: String,
                    trim: true,
                    required: "Enter an exercise type"
                },
                // name
                name: {
                    type: String,
                    trim: true,
                    required: "Enter an exercise name"
                },
                // duration
                duration: {
                    type: Number,
                    require: "Enter an exercise duration in minutes"
                },
                // weight
                weight: {
                    type: Number
                },
                // reps
                reps: {
                    type: Number
                },
                // sets
                sets: {
                    type: Number
                },
                // distance
                distance: {
                    type: Number
                }
            }
        ]
    },
    {
       //virtual properties 
       toJSON: {
           virtuals: true
       }
    }
);


//anything that was dynamically created is added to the schema.
workoutSchema.virtual("totalDuration").get(function(){
    //return a reduced array of exercies to just the same of the durations
    return this.excercises.reduce((total, exercise) => {
        return total = exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

//exports
module.exports = Workout;