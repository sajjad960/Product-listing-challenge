import { NextFunction, Request, Response } from 'express'
import { GetAllProducts } from '../../../../core/use-cases/product/GetAllProducts'
import httpStatus from 'http-status'

export class ProductController {
  static async getAllProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const getAllProducts = new GetAllProducts()
      const products = await getAllProducts.execute(req.query)

      res.status(httpStatus.OK).json({
        status: 'success',
        products,
      })
    } catch (error) {
      next(error)
    }
  }
}
