import app from "./src/app.js";
import { connectDatabase } from "./src/db/connectDb.js";
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("fctroll backend server started successfully");
});

connectDatabase();
