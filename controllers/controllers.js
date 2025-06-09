const hostelsDAO = require("../models/hostelsModel");
const hostels = new hostelsDAO({ filename: "hostels.db", autoload: true });

exports.newList = function (req, res) {
  hostels.init();
  res.redirect("/");
};
exports.listHostels = function (req, res) {
  hostels
    .getAllEntries()
    .then((list) => {
      res.json(list);
      console.log(list);
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
};

exports.listOneHostel = function (req, res) {
  let hostelName = req.params["term"];
  hostels
    .getHostel(hostelName)
    .then((list) => {
      res.json(list);
      console.log(list);
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
};
exports.listHostelById = function (req, res) {
  let hostelId = req.params["id"];
  hostels
    .getHostelById(hostelId)
    .then((list) => {
      res.json(list);
      console.log(list);
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
};
exports.listHostelLocation = function (req, res) {

  let hostelId = req.params["id"];
  hostels
    .getHostelById(hostelId)
    .then((list) => {
      if (list.length > 0) {
        res.json(list[0].location);
        console.log("location: ", list[0].location);
      } else {
        res.status(404).send("Hostel not found");
      }
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
   
  }
exports.listCafes= function (req, res) {
  hostels
    .getAllEntries()
    .then((list) => {
       var selectedhostels = list.filter(function(hostel) {
        return String(hostel.cafe) == "true";
    });
      // selectedhostels.length==0 ? res.status(404): res.status(200);
      res.json(selectedhostels);
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
};

exports.searchHostels = function (req, res) {
  hostels
  .getAllEntries()
  .then((list) => {
    let selectedhostels = list.filter(function(hostel) {
      let result = (hostel.address.toLowerCase().search(req.params["term"].toLowerCase())>=0) || 
      (hostel.description.toLowerCase().search(req.params["term"].toLowerCase())>=0);
    return result;
  });
    // selectedhostels.length==0 ? res.status(404): res.status(200);
    res.json(selectedhostels);
  })
  .catch((err) => {
    console.log("promise rejected", err);
  });
};


exports.listRatingsById = function (req, res) {
  let hostelId = req.params["id"];
  hostels
    .getHostelById(hostelId)
    .then((list) => {
      res.json(list[0].ratings);
      console.log("ratings: ", list[0].ratings);
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
};

exports.listReviewsById = function (req, res) {
  let hostelId = req.params["id"];
  hostels
    .getHostelById(hostelId)
    .then((list) => {
      res.json(list[0].reviews);
      console.log("reviews: ", list[0].reviews);
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
};

exports.rateHostelById = function (req, res) {
  let hostelId = req.params["id"];
  let newRating = req.params["rating"];

  hostels
    .rateHostelById(hostelId, newRating)
    .then(console.log("adding rating using params"))
    .catch((err) => {
      console.log("promise rejected", err);
    });
};

exports.handlePosts = function (req, res) {
  let hostelId = req.body.talkId;
  let newRating = req.body.rating;
  hostels
    .rateHostel(hostelId, newRating)
    .then(console.log("rating added"))
    .catch((err) => {
      console.log("promise rejected", err);
    });
};
