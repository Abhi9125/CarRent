import { success } from "zod";
import User from "../model/User.js";
import { application } from "express";
import fs from "fs";
import imagekit from "../config/imageKit.js";
import Car from "../model/Car.js";

// Change role api

export const changeRoleToOwner = async (req, res) => {
  try {
    const { _id } = req.user;

    await User.findByIdAndUpdate(
      {
        _id,
      },
      { role: "owner" }
    );

    res.json({
      success: true,
    });
  } catch (err) {
    message: err.message;
  }
};

//
export const carInfoUplaod = async (req, res) => {
  try {
    const { _id } = req.user;

    const carInfo = JSON.parse(req.body.carData);
    console.log(carInfo);

    const imageFile = req.file;

    const fileBuffer = fs.readFileSync(imageFile.path);
    const respose = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/cars",
    });

    var optimizeImageUrl = imagekit.url({
      path: respose.filePath,
      transformation: [
        {
          width: "1280",
        },
        {
          quality: "auto",
        },
        {
          format: "webp",
        },
      ],
    });

    const image = optimizeImageUrl;

    await Car.create({
      ...carInfo,
      owner: _id,
      image,
    });

    res.json({
      success: true,
      message: "CarInfo Added",
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
};
