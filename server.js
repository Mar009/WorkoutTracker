//consts
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const { urlencoded } = require('express');
const app = express();
const PORT= process.env.PORT || 3000;

//require
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//apps
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


//listen
app.listen(PORT, () =>{
    console.log(`App is running on port ${PORT}`);
});