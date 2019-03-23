"use strict";

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(database) {
  const db = database;
  return {
    saveTweet: function(newTweet, callback) {
      return db.collection("tweets").insertOne(newTweet, callback)
    },
  getTweets: function(callback) {  
    return  db.collection('tweets').find({}).toArray().then((a) => callback(null, a)) 
  }
 };
}