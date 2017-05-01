var axios = require("axios");

var nytAPI = "94d07b99660347e7aa585bd8c5cd5b2a";

var helper = {

  // This function serves our purpose of running the query to geolocate.
  runQuery: function(search, start, end) {

    console.log(search, start, end);

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

      queryURL += "?" + $.param({
        "api-key": nytAPI,
        "q": search,
        "begin_date": start,
        "end_date":end
      });

      console.log(queryURL);

    return axios.get(queryURL).then(function(response) {
      // If get get a result, return that result's formatted address property
      if (response.data.results[0]) {
        return response.data.results[0].formatted;
      }
      // If we don't get any results, return an empty string
      return "";
    });
  },

  // This function hits our own server to retrieve the record of query results
  getHistory: function() {
    return axios.get("/api");
  },

  // This function posts new searches to our database.
  postHistory: function(search, start, end) {
    return axios.post("/api", { search: search, start: start, end: end });
  }
};

// We export the API helper
module.exports = helper;

