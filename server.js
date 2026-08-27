    import "dotenv/config";
    import express from "express";
    import { connectDB } from "./config/db.js";
    import connectCloudinary from "./config/cloudinary.js";
    import userRouter from "./routes/user.route.js";
    import cookieParser from "cookie-parser";
import adminRouter from "./routes/admin.route.js";

    const app = express();
    await connectDB();
    await connectCloudinary();

    // console.log("Cloud Name:", process.env.CLOUDINARY_CLOUD_NAME);
    // console.log("API Key:", process.env.CLOUDINARY_API_KEY);
    // console.log("API Secret:", process.env.CLOUDINARY_API_SECRET);

    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(cookieParser())

    const port = process.env.PORT;

    app.get("/", (req,res)=>{
        res.send("API working properly")
    })

    app.use("/api/user", userRouter);
    app.use("/api/admin", adminRouter)

    app.listen(port, ()=>{
        console.log(`Server is running on port : ${port}`);
    })