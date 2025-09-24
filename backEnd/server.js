const express = require("express")  // imports the express module that simplifies the building the APIs and web app. This line gives access to all the express functions and features
const app = express()            // Intializes the app as in instance of an Express server and now need to use get,post, etc.. . Thinks like as web app
const dotenv = require("dotenv").config()
const connectDb =  require("./config/connectionDb")

const PORT = process.env.PORT || 3000  // access the port as defined in the env file else run it using 3000 as port num
connectDb()

app.use(express.json())

app.use("/recipe", require("./routes/recipe"))

app.listen(PORT,(err) => {                             // app.listen(PORT, callback) tells after server start listneing on the port and 2nd is callback func
    console.log(`✅ App is listening on port ${PORT}`);
}); 
  