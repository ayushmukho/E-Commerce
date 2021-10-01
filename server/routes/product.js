import Router from "express";
import { createProduct, updateProduct, deleteProduct, getProduct, getAllProducts } from "../controllers/product.js";
import { verifyTokenAndAdmin } from "../middleware/verifyToken.js";
const router = Router();

//CREATE
router.post("/", verifyTokenAndAdmin, createProduct);

//UPDATE
router.put("/:id", verifyTokenAndAdmin, updateProduct);

//DELETE
router.delete("/:id", verifyTokenAndAdmin, deleteProduct);

//GET PRODUCT
router.get("/find/:id", getProduct);

//GET ALL PRODUCTS
router.get("/", getAllProducts);

export default router;
