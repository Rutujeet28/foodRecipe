const mongoose = require("mongoose")  //imports the mongoose module through the mongoose func thats created

const connectDb = async() =>{
    await mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => console.log("Connected !!..."))
}

module.exports = connectDb 