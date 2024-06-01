import express, { Router } from "express";
import { cookieval, loginfun, rootFun } from "../controllers/app-controller.js";
import { registerfun } from "../controllers/app-controller.js";
const router = express.Router();
// import express from "express";
import cookieParser from "cookie-parser";
// const app=express();
router.use(cookieParser());
// router.use(express.urlencoded({ extended: true}));

// get request
router.get("/",rootFun);
router.get("/api/cookie",cookieval);


// Post request
router.post("/api/register",registerfun);
router.post("/api/login",loginfun);


export default router;
