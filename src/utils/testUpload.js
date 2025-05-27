// backend/testUpload.js
require("dotenv").config(); // Load environment variables from .env

const { uploadImageToCloudinary } = require("./cloudinary"); // Adjust path if needed
const fs = require("fs");
const path = require("path");

// A sample base64 image (a tiny, transparent GIF for testing)
// In a real scenario, this would come from the AI model
const sampleBase64Image =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

// --- OR ---
// If you want to test with a local image file:
// 1. Create a small test image (e.g., `test.png`) in your backend directory.
// 2. Uncomment the following lines and adjust the path.
// const imagePath = path.join(__dirname, 'test.png');
// const imageBuffer = fs.readFileSync(imagePath);
// const sampleBase64ImageFromFile = `data:image/png;base64,${imageBuffer.toString('base64')}`;

async function testCloudinaryUpload() {
  console.log("Attempting to upload image to Cloudinary...");
  try {
    // Choose which base64 image to use for testing
    const result = await uploadImageToCloudinary(sampleBase64Image); // Use the tiny GIF
    // const result = await uploadImageToCloudinary(sampleBase64ImageFromFile); // Or use your local file

    console.log("\nUpload successful!");
    console.log("Public URL:", result.secure_url);
    console.log("Asset ID:", result.public_id);
    console.log(
      "Check it in your Cloudinary dashboard under the 'football-memes' folder!"
    );
  } catch (error) {
    console.error("\nFailed to upload image:");
    console.error(error.message);
  }
}

// Run the test function
testCloudinaryUpload();
