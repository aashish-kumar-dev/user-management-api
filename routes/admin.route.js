import express from "express";

import {
  adminLogin,
  adminLogout,
} from "../controllers/admin.controller.js";

import {isAdmin } from "../middlewares/auth.adminMiddleware.js";
import { deleteUser, getAllUsers, getSingleUser } from "../controllers/user.controller.js";

const adminRouter = express.Router();

adminRouter.post("/login", adminLogin);

adminRouter.post("/logout", isAdmin, adminLogout);

adminRouter.get("/all-users", isAdmin, getAllUsers);
adminRouter.get("/:id", isAdmin, getSingleUser);
adminRouter.delete("/delete-user/:id", isAdmin, deleteUser);

export default adminRouter;