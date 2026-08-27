import express from "express";
import { addAvtar, deleteAccount, deleteUser, getAllUsers, getProfile, getSingleUser, loginUser, LogoutUser, registerUser, removeAvatar, updateProfile } from "../controllers/user.controller.js";
import { authUser } from "../middlewares/auth.middleware.js";
import upload from "../config/multer.js";

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/logout', LogoutUser);

userRouter.get('/profile', authUser, getProfile);
userRouter.put('/profile', authUser, updateProfile);

userRouter.put('/avatar', authUser, upload.single("avatar"), addAvtar);
userRouter.delete('/avatar', authUser, removeAvatar);
userRouter.delete("/delete-account", authUser, deleteAccount);

export default userRouter;