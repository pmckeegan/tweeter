"use strict";

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";



MongoClient.connect(MONGODB_URI, (err, db) => {
    if (err) {
        console.error(`failed to connect: ${MONGO_URI}`);
throw err;
 }
console.log(`connected to mongodb: ${MONGODB_URI}`);
 

    function getTweets(callback) {

db.collection("tweets").find().toArray((err, result) => {
     if (err) {
        return callback(err);
     }1

     callback(null, tweets);
     });
     }
    }

    getTweets(err, tweets) => {
        if (err) throw err;


        console.log ("log each tweet: ");
        for (let tweet of tweets) {
            console.log(tweet);
        }
        db.close();

    });
