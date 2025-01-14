// CRUD applications - CREATE, READ, UPDATE AND DELETE
import IncomingForm from "./../node_modules/formidable/src/Formidable";
// AUTHENTICATION - SCHOOL, STUDENT AND TEACHER

const formidable = require("formidable");
const path = require("path");
const fs = require("fs");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const School = require("../models/school.model.js");

module.exports = {
  registerSchool: async (req, res) => {
    try {
      const form = new formidable.IncomingForm();
      form.parse(req, async (err, fields, files) => {
        const photo = files.image[0];
        let filepath = photo.filepath;
        let originalFilename = photo.originalFilename.replace(" ", "_");
        let newPath = path.join(
          __dirname,
          process.env.SCHOOL_IMAGE_PATH,
          originalFilename
        );
        let photoData = fs.readFileSync(filepath);
        fs.writeFileSync(newPath, photoData);

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(fields.password[0], salt);
        const newSchool = new School({
          school_name: fields.school_name[0],
          email: fields.email[0],
          owner_name: fields.owner_name[0],
          password: hashPassword,
        });
        const savedSchool = await newSchool.save();
        res.status(200).json({
          success: true,
          data: savedSchool,
          message: "School is  registered successfully",
        });
      });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "School Registration Failed" });
    }
  },

  loginSchool: async (req, res) => {
    try {
      const school = await School.findOne({ email: req.body.email });
      if (school) {
        const isAuth = bcrypt.compareSync(req.body.password, school.password);
        if (isAuth) {
          const jwtSecret = process.env.JWT_SECRET;
          const token = jwt.sign(
            {
              id: school._id,
              schoolId: school._id,
              owner_name: school.owner_name,
              school_name: school.school_name,
              image_url: school.school_image,
              role: "SCHOOL",
            },
            jwtSecret
          );
          res.header("Authorization", token);
          res.status(200).json({
            success: true,
            message: "Successful Login",
            user: {
              id: school._id,
              owner_name: school.owner_name,
              school_name: school.school_name,
              image_url: school.school_image,
              role: "SCHOOL",
            },
          });
        } else {
          res
            .status(401)
            .json({ success: false, message: "Password is incorrect" });
        }
      } else {
        res
          .status(401)
          .json({ success: false, message: "Email is not registered" });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal Server Error [SCHOOL LOGIN]",
      });
    }
  },

  getAllSchools: async (req, res) => {
    try {
      const schools = await School.find().select([
        "-password",
        "-._id",
        "-email",
        "-owner_name",
        "-createdAt",
      ]);
      res.status(200).json({
        success: true,
        message: "Success in fetching all schools",
        schools,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal Server Error [ ALL SCHOOLS DATA ].",
      });
    }
  },
};
