const dotenv = require("dotenv");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const port = process.env.PORT || 8800;
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(() => console.log("Connected!"));

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});
