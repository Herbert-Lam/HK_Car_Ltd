// let sedanData = require("./client/services/sedan.json");
// let suvData = require("./client/services/suv.json");

// // console.log(sedanData);
// // console.log(suvData);

// const mongoose = require("mongoose");

// const SuvModel = require("./models/suvs");
// const SedanModel = require("./models/sedans");

// const url = `mongodb+srv://karl:pass1234@cluster0.lyhnojf.mongodb.net/Cars`;
// mongoose.connect(url);
// console.log("database connected");

// console.log(typeof sedanData);

// var sedans = [];

// for (var i in sedanData) sedans.push([sedanData[i]]);

// console.log(typeof sedans[1]);

// sedans.forEach((elem) => {
//    let car = new SedanModel({
//     year,
//     model,
//     trim,
//     colorOption,
//     power,
//     drivetrain,
//     transmission,
//     price,
//     imgSrc,
//   });

//   car = elem;

//   car.save((err) => {
//     if (err) console.log("ERROR: ", err);
//     else console.log(`document inserted successfully`);
//   });
// });
