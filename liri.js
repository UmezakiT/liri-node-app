require("dotenv").config();

const fs = require("fs");
const axios = require("axios");
const moment = require("moment");
let keys = require("./key.js");
let spotifyNode = require("node-spotify-api");
let spotify = new spotifyNode(keys.spotify);
var arg = process.argv[2];
var arg2 = process.argv[3];


function spotifySearch() {

  spotify
    .search({ type: 'track', query: arg2})
    .then(function (res) {
      const type = res.tracks.items[0]
      console.log(`Artist: ${type.album.artists[0].name} || Song: ${song.name} || Album: ${type.album.name} || Link: ${type.preview_url}`);
    })
    .catch(function(err){
      console.log(err);
    });
}


function movieSearch() {

  axios.get("http://www.omdbapi.com/?t=" + arg2 + "&y=&plot=short&apikey=trilogy").then(
    function (res) {
      console.log(`Movie: ${res.data.Title} || Rating: ${res.data.imdbRating} || Release Date: ${res.data.Released} || Actors: ${res.data.Actors}`);
    })
    .catch(function(err){
      console.log(err);
    });
}

function bandSearch(){


  axios.get("https://rest.bandsintown.com/artists/" + arg2 + "/events?app_id=codingbootcamp")
    .then(function (response) {
      console.log(`Date: ${moment(response.data[0].datetime).format("MM/DD/YYYY")} || Venue: ${response.data[0].venue.name} || Country: ${response.data[0].venue.country} || City: ${response.data[0].venue.city}`);
    })
    .catch(function(err){
      console.log(err);
    });
}

function search(){

}


switch (arg) {
  case "spotify-this-song":
    spotifySearch();
    break;
  case "movie-this":
    movieSearch();
    break;
  case "band":
    bandSearch(); 
    break;
  // case "do-what-it-says":
  //   search();
  //   break;
}
