const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const path = require("path");

require("dotenv").config({path:__dirname+'/.env'});
const {connectDB}=require('./config/db')
connectDB();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

// MODULES
const { Blog } = require("./models/Blog");
const { Quote } = require("./models/Quote");

// Middleware
const { auth } = require("./middleware/auth");

app.use(express.static("../client/build/"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

// @route    POST /api/admin/login
// @desc     admin logins to be allowed manager
// @access   private
app.post("/api/admin/login", async (req, res) => {
  try {
    const { password } = req.body;
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(process.env.ADMIN_PASSWORD, salt);

    if (!password)
      res
        .status(400)
        .json({ success: false, msg: "Not all fields have been entered" });

    const isMatch = await bcrypt.compare(password, passwordHash);
    if (!isMatch)
      res.status(400).json({ success: false, msg: "Invalid password!" });

    const token = jwt.sign(
      { id: process.env.ADMIN_ID },
      process.env.JWT_SECRET
    );

    res.json({ token });
  } catch (err) {
    res.status(500).json({ success: false, err: "Error!!!" });
  }
});

// -------------------------------------------
//                    Blogs
// -------------------------------------------

// @route    GET /api/blogs
// @desc     get all blogs
// @access   public
app.get("/api/blogs", async (req, res) => {
  try {
    Blog.find().exec((err, doc) => {
      if (err) return res.status(400).send(err);
      res.status(200).send(doc);
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server blogs error");
  }
});

// @route    POST /api/blogs
// @desc     post a new blog
// @access   private
app.post("/api/admin/blogs", auth, (req, res) => {
  const blog = new Blog(req.body);

  blog.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    else res.status(200).json({ success: true, doc });
  });
});
//***********************************************

// ----------------------------------------------
//                    Quotes
// ----------------------------------------------

// @route    GET /api/quotes
// @desc     get all quotes
// @access   public
app.get("/api/quotes", async (req, res) => {
  try {
    Quote.find().exec((err, doc) => {
      if (err) res.status(400).send(err);
      res.status(200).send(doc);
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server quotes error");
  }
});

// @route    POST /api/quotes
// @desc     post a new quote
// @access   private
app.post("/api/admin/quotes", auth, (req, res) => {
  const quote = new Quote(req.body);

  quote.save((err, doc) => {
    if (err) res.json({ success: false, err });
    else res.status(200).json({ success: true, doc });
  });
});
//***********************************************

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static(path.resolve(__dirname, "../client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  });
}

mongoose.connect(process.env.DB_URI).then(()=>console.log("connected DB"))

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running at ${port}`));
