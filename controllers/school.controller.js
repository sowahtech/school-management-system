// CRUD applications - CREATE, READ, UPDATE AND DELETE
import IncomingForm from "./../node_modules/formidable/src/Formidable";
// AUTHENTICATION - SCHOOL, STUDENT AND TEACHER

const formidable = require("formidable");
const path = require("path");
const fs = require("fs");
const bcrypt = require("bcrypt");

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
};
