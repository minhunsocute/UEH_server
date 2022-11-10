//IMPORT FROM PACKAGES
const express = require("express");
const mongoose = require("mongoose");
//IMPORT FROM OTHER FILES
const authRouter = require('./routes/auth');
const adminRouter = require('./routes/admin');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');
//import '.features/auth/screens/auth_screen'
//INIT
const PORT = process.env.PORT || 5000;
const PORT1 = 5000;

const app = express();
const DB = "mongodb+srv://minhhung:20112002@cluster0.bwnjofl.mongodb.net/?retryWrites=true&w=majority";
//middleware
//CLIENT -> middleware -> SERVER -> CLIENT
app.use(express.json());
app.use(authRouter);
//connections
mongoose.connect(DB).then(() => {
        console.log("Connection Successful");
    })
    .catch((e) => {
        console.log(e);
    });

app.listen(PORT, () => {
    console.log(`console connected at port: ${PORT}`)
});
//bjhbjhbj
//local host