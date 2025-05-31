const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      // required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
      required: [true, "Email is required"],
      //   validate: {
      //     validator: function (v) {
      //       return;
      //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      //         v
      //       );
      //     },
      //     message: "Please enter a valid email",
      //   },
    },
    password: {
      type: String,
      // required: [true, "Password is required"],
      // set: (v) => bcrypt.hashSync(v, bcrypt.genSaltSync(10)),
    },
    // photoURL: {
    //   type: String,
    // },
    role: {
      type: String,
      default: "user",
    },
    generatedImages: {
      type: Schema.Types.ObjectId,
      ref: "Image",
    },
    isBanned: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// userSchema.pre("save", async function (next) {
//   if (this.isModified("password")) {
//     // Validate the password length before hashing
//     if (this.password.length < 6 || this.password.length > 20) {
//       return next(new Error("Password must be between 6 and 20 characters"));
//     }

//     // Hash the password if it passes validation
//     try {
//       const salt = await bcrypt.genSalt(10);
//       this.password = await bcrypt.hash(this.password, salt);
//     } catch (error) {
//       return next(error.message);
//     }
//   }
//   next();
// });

const User = model("User", userSchema);
module.exports = User;
