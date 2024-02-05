import express from "express";
import logger from "morgan";
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


app.use(logger("dev"));
app.use("/", index);

