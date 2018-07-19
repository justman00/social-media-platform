const express = require("express");
const router = express.Router();

// @route GET api/users/test
// @desc test users router
// @acces Private
router.get("/test", (req, res) => {
  res.json({ msg: "user works" });
});

module.exports = router;
