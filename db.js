const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://proplayer:GodofHacker@cluster0.tgawyy6.mongodb.net/Portfolio"

const connectToMongo = () => {
    mongoose.connect(mongoURI);
}

module.exports = connectToMongo;