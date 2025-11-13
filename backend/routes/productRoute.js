import express from "express";
import upload from '../middleware/multer.js'
import adminAuth from '../middleware/adminAuth.js'
import { addProduct,listProducts,removeProduct,singleProduct} from '../controllers/productControllers.js'


const productRouter = express.Router()

productRouter.post('/add', upload.single("image"),addProduct);
productRouter.get('/list', listProducts)
productRouter.post('/remove', adminAuth, removeProduct)
productRouter.get('/single', singleProduct)

export default productRouter;