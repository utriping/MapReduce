import express from "express";
import { Router } from "express";
import home from "../controllers/home.js";
import about from "../controllers/about.js";
import contact from "../controllers/contact.js";

const router = Router();


router.get("/home", home);


router.get("/about", about);


router.get("/contact", contact);

export default router;
