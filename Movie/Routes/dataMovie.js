const express = require("express");

const router = express.Router();

let dataMovie = require("../models/dataSchema");

router.get("/", async (req, res) => {
  try {
    let dataMovie = await dataMovie.find().lean();
    res.render("MovieData", { dataMovie });
  } catch (err) {
    res.redirect("/error");
  }
});


module.exports=router