import express from "express";
import logger from "morgan";
import * as path from "path";
import { errorHandler, errorNotFoundHandler } from "./middlewares/errorHandler";
const db = require("./config/key_dev").mongoURI;
const mongoose = require("mongoose");
const cors = require("cors");

// Routes
import { index } from "./routes/index";
// Create Express server
export const app = express();
app.use(express.json());
app.use(cors({ allowedHeaders: 'Content-Type, Cache-Control' }));
app.options('*', cors());


//Connecting to MongoDB
mongoose
    .connect(db)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));

// Express configuration
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "../public")));
app.use("/", index);

app.use(errorNotFoundHandler);
app.use(errorHandler);
