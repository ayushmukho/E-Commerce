import Router from "express";
import { userDetails, deleteUser, getUser, getAllUsers, getUserStats } from "../controllers/user.js";
import {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../middleware/verifyToken.js";
const router = Router();

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, userDetails);

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, deleteUser);

//GET USERS
router.get("/find/:id", verifyTokenAndAdmin, getUser);

//GET ALL USERS
router.get("/", verifyTokenAndAdmin, getAllUsers);

//GET USER STATS
router.get("/stats", verifyTokenAndAdmin, getUserStats);

export default router;
