const { Schema, model } = require("mongoose");

const imageSchema = new Schema(
  {
    imgUrl: {
      type: String,
      required: [true, "Image url is required"],
    },
    email: {
      type: String,
      ref: "Users",
    },
  },
  { timestamps: true }
);

const Image = model("Image", imageSchema);

module.exports = Image;
