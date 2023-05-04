const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require('dotenv').config()

const SuvModel = require("./models/suvs");
const SedanModel = require("./models/sedans");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("public"));

const url = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.lyhnojf.mongodb.net/Cars`;

const port = process.env.port || 5000;
app.listen(port, () => {
  console.log(`The server is up and listening on port ${port}`);
});

//////1. READ OPERATION
app.get("/api/sedaninfo", async (req, res) => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.lyhnojf.mongodb.net/Cars`);
    console.log("DB connected - Sedan");
    SedanModel.find((err, sedans) => {
      if (err) {
        res.send("ERROR: ", err);
      } else {
        console.log(sedans);
        res.send(JSON.stringify(sedans));
        mongoose.connection.close();
      }
    });
  } catch (err) {
    console.log("ERROR: ", err);
  }
});

app.get("/api/suvinfo", async (req, res) => {
  try {
    await mongoose.connect(url);
    console.log("DB connected - SUV");
    SuvModel.find((err, suvs) => {
      if (err) {
        res.send("ERROR: ", err);
      } else {
        console.log(suvs);
        res.send(JSON.stringify(suvs));
        mongoose.connection.close();
      }
    });
  } catch (err) {
    console.log("ERROR: ", err);
  }
});

//////2.CREATE OPERATION

app.post("/api/sedaninfo", async (req, res) => {
  try {
    const {
      year,
      model,
      trim,
      colorOption,
      power,
      drivetrain,
      transmission,
      price,
      imgSrc,
    } = req.body;
    console.log(
      year,
      model,
      trim,
      colorOption,
      power,
      drivetrain,
      transmission,
      price,
      imgSrc
    );
    const sedan = new SedanModel({
      year,
      model,
      trim,
      colorOption,
      power,
      drivetrain,
      transmission,
      price,
      imgSrc,
    });

    await mongoose.connect(url);
    console.log("DB connected");

    sedan.save((err) => {
      if (err) {
        console.log("ERROR: ", err);
        res.send(err);
      } else {
        console.log("Docuemnt inserted sueccessfully");
        res.send(sedan);
        mongoose.connection.close();
      }
    });
  } catch (err) {
    console.log("ERROR: ", err);
  }
});

app.post("/api/suvinfo", async (req, res) => {
  try {
    const {
      year,
      model,
      trim,
      colorOption,
      power,
      drivetrain,
      transmission,
      price,
      imgSrc,
    } = req.body;
    console.log(
      year,
      model,
      trim,
      colorOption,
      power,
      drivetrain,
      transmission,
      price,
      imgSrc
    );
    const suv = new SuvModel({
      year,
      model,
      trim,
      colorOption,
      power,
      drivetrain,
      transmission,
      price,
      imgSrc,
    });

    await mongoose.connect(url);
    console.log("DB connected");

    suv.save((err) => {
      if (err) {
        console.log("ERROR: ", err);
        res.send(err);
      } else {
        console.log("Docuemnt inserted sueccessfully");
        res.send(suv);
        mongoose.connection.close();
      }
    });
  } catch (err) {
    console.log("ERROR: ", err);
  }
});


//////3. UPDATE
app.put("/api/sedaninfo/:id", async (req, res) => {
  try {
    const {
      year,
      model,
      trim,
      colorOption,
      power,
      drivetrain,
      transmission,
      price,
      imgSrc,
    } = req.body;
    console.log(
      year,
      model,
      trim,
      colorOption,
      power,
      drivetrain,
      transmission,
      price,
      imgSrc
    );

    let _id = req.params.id;
    _id = mongoose.Types.ObjectId(_id);

    await mongoose.connect(url);
    console.log("DB connected");

    await SedanModel.findByIdAndUpdate(
      { _id: _id },
      {
        year,
        model,
        trim,
        colorOption,
        power,
        drivetrain,
        transmission,
        price,
        imgSrc,
      },
      (err, doc) => {
        if (err) res.send(`Error: ${err}`);
        else if (doc == null) {
          console.log(`No matching document found!`);
          res.send(`No matching document found!`);
        } else {
          console.log(`Document updated successfully! ${doc}`);
          res.send(doc);
        }
        mongoose.connection.close();
      }
    );
  } catch (err) {
    console.log("ERROR: ", err);
  }
});

app.put("/api/suvinfo/:id", async (req, res) => {
  try {
    const {
      year,
      model,
      trim,
      colorOption,
      power,
      drivetrain,
      transmission,
      price,
      imgSrc,
    } = req.body;
    console.log(
      year,
      model,
      trim,
      colorOption,
      power,
      drivetrain,
      transmission,
      price,
      imgSrc
    );

    let _id = req.params.id;
    _id = mongoose.Types.ObjectId(_id);

    await mongoose.connect(url);
    console.log("DB connected");

    await SuvModel.findByIdAndUpdate(
      { _id: _id },
      {
        year,
        model,
        trim,
        colorOption,
        power,
        drivetrain,
        transmission,
        price,
        imgSrc,
      },
      (err, doc) => {
        if (err) res.send(`Error: ${err}`);
        else if (doc == null) {
          console.log(`No matching document found!`);
          res.send(`No matching document found!`);
        } else {
          console.log(`Document updated successfully! ${doc}`);
          res.send(doc);
        }
        mongoose.connection.close();
      }
    );
  } catch (err) {
    console.log("ERROR: ", err);
  }
});



//////4. DELETE
app.delete("/api/sedaninfo/:id", async (req, res) => {
  try {
    let _id = req.params.id;
    _id = mongoose.Types.ObjectId(_id);

    await mongoose.connect(url);
    console.log("DB connected");

    SedanModel.findByIdAndDelete({ _id: _id }, (err, doc) => {
      if (err) res.send(`Error: ${err}`);
      else if (doc == null) {
        console.log(`No matching document found!`);
        res.send(`No matching document found!`);
      } else {
        console.log(`Document deleted successfully! ${doc}`);
        res.send(`Document deleted successfully! ${doc}`);
      }
      mongoose.connection.close();
    });
  } catch (err) {
    console.log("ERROR: ", err);
  }
});

app.delete("/api/suvinfo/:id", async (req, res) => {
  try {
    let _id = req.params.id;
    _id = mongoose.Types.ObjectId(_id);

    await mongoose.connect(url);
    console.log("DB connected");

    SuvModel.findByIdAndDelete({ _id: _id }, (err, doc) => {
      if (err) res.send(`Error: ${err}`);
      else if (doc == null) {
        console.log(`No matching document found!`);
        res.send(`No matching document found!`);
      } else {
        console.log(`Document deleted successfully! ${doc}`);
        res.send(`Document deleted successfully! ${doc}`);
      }
      mongoose.connection.close();
    });
  } catch (err) {
    console.log("ERROR: ", err);
  }
});


