import express from 'express'
import {productController} from '../controllers/index.js'

// Khai báo đối tượng Router
const productRouter = express.Router()

productRouter.get('/', productController.getAllProducts)

productRouter.post('/', productController.createProduct)

export default productRouter