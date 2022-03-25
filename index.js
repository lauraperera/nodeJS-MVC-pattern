const express = require("express");
const app = express();
const port = process.env.PORT || 3005;

//iniciate the main route
const userRoute = require("./routes/User")
//import everything in the user route
app.use("/user", userRoute);

app.listen(port, ()=>{
    console.log(`Server runing on port ${port}`);
});