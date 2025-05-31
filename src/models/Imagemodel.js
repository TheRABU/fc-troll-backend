import { Schema, mongoose } from "mongoose";

const imageSchema = new Schema(
  {
    imgUrl: {
      type: String,
      required: [true, "Image url is required"],
    },
    email: {
      type: String,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Image = mongoose.model("Image", imageSchema);

export default Image;
