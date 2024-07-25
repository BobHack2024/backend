const express = require('express');
const router = express.Router();

const apis = require("../controllers/api");
const multer = require('multer');
//const upload = multer({ dest: '/tmp/' })
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadsDir = path.join(__dirname, '../uploads');
    fs.mkdirSync(uploadsDir, { recursive: true }); 
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

const uploadFields = upload.fields([
  { name: 'singleFile', maxCount: 1 },
]);



router.get('/users', (req, res) => { apis.getAllUsers(req, res) });
router.post('/addUser', (req, res) => { apis.signUp(req, res) });
router.post('/createAnswers', (req, res) => { apis.postAnswers(req, res) });
router.get('/getAllAnswers', (req, res) => { apis.getAllAnswers(req, res)});
router.get('/getAllAnswersbyID/:user_id', (req, res) => { apis.getAllAnswersbyID(req, res)});





   

module.exports = router
