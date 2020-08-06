//consts
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

const app = express();
const PORT= process.env.PORT || 3000;



//express data parsing 
app.use(logger('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'))


//mongoose connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Workout", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});


//routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


//listen
app.listen(PORT, () =>{
    console.log(`App is running on port ${PORT}`);
});