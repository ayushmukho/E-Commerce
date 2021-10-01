import Router from "express";
import { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } from "../middleware/verifyToken.js";
import { createOrder, updateOrder, deleteOrder, getUserOrder, getAllOrder, getMonthlyIncome } from "../controllers/Order.js";
const router = Router();

//CREATE
router.post("/", verifyToken, createOrder);

//UPDATE
router.put("/:id", verifyTokenAndAdmin, updateOrder);

//DELETE
router.delete("/:id", verifyTokenAndAdmin, deleteOrder);

//GET USER ORDER
router.get("/find/:userId", verifyTokenAndAuthorization, getUserOrder);

//GET ALL 
router.get("/", verifyTokenAndAdmin, getAllOrder);

//GET MONTHLY INCOME
router.get("/income", verifyTokenAndAdmin, getMonthlyIncome);

export default router;