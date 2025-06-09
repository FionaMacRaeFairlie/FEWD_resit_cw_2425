const express = require("express");
const router = express.Router();
const controller = require("../controllers/controllers");


router.get("/setup", controller.newList);

router.get("/hostels", controller.listHostels);
router.get('/hostels/hostel/:term', controller.listOneHostel);
router.get('/hostels/hostelId/:id', controller.listHostelById);
router.get('/hostels/:id/location', controller.listHostelLocation)
router.get('/hostels/cafes', controller.listCafes);  
router.get('/hostels/search/:term', controller.searchHostels); 
router.get('/hostels/:id/ratingById', controller.listRatingsById);
router.get('/hostels/:id/reviewsById', controller.listReviewsById);
router.get('/hostels/rate/:id/:rating', controller.rateHostelById)
router.post('/posts', controller.handlePosts)

router.use(function (req, res) {
  res.status(404);
  res.type("text/plain");
  res.send("404 Not found.");
});

// router.use(function (err, req, res, next) {
//   res.status(500);
//   res.type("text/plain");
//   res.send("Internal Server Error.");
// });

module.exports = router;
