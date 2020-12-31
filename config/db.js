require('dotenv').config();
const mongoose = require('mongoose');

function connectDB() {
    mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify:true});
    const connection = mongoose.connection;

    connection.once('open', () => {
        console.log('Database Connected.');
    }).catch((err) => {
        console.log('Connection failed');
    });
}

module.exports = connectDB;

//https://github.com/codersgyan/inshare-file-sharing-app-api/tree/master/models
//https://www.youtube.com/watch?v=_xKCi5OI_Mg
//TODO Start from 1 hour 15 mints