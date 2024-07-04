import { Router } from 'express'
import { ProductController } from '../controllers/ProductController'

const ProductRouter = Router()

ProductRouter.route('/').get(ProductController.getAllProducts)

export default ProductRouter
