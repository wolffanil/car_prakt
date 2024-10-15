const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const path = require("path");

const authRouter = require("./routes/auth.routes");
const carRouter = require("./routes/car.routes");
const bookRouter = require("./routes/book.routes");
const photoRouter = require("./routes/photo.routes");

dotenv.config();

const app = express();

app.use(cors());

app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

app.use("/upload", express.static(path.join(__dirname, "/upload")));

app.use("/api/auth", authRouter);
app.use("/api/cars", carRouter);
app.use("/api/books", bookRouter);
app.use("/api/photo", photoRouter);

app.listen(5000, console.log("server working on port 5000"));
