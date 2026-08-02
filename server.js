import express from "express";
import routes from "./routes/webpages.js";
import cors from "cors";
import logger from "./middleware/logger.js";

const app =  express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(logger);
app.use("/", routes);

app.get("/", (req, res) => {
    res.send("Welcome to the MapReduce Project!");
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});