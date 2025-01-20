const express = require("express");
const authMiddleware = require("../auth/auth.js");
const {
  registerSchool,
  getAllSchools,
  loginSchool,
  updateSchool,
  getSchoolOwnData,
} = require("../controllers/school.controller.js");

const router = express.Router();

router.post("/register", registerSchool);
router.get("/all", getAllSchools);
router.get("/login", loginSchool);
router.patch("/update", authMiddleware(["SCHOOL"]), updateSchool);
router.get("/fetch-single", authMiddleware(["SCHOOL"]), getSchoolOwnData);

module.exports = router;
