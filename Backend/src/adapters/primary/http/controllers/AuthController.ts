import { NextFunction, Request, Response } from 'express'
import authInstance from '../../../../core/use-cases/user/auth'
import httpStatus from 'http-status'

export class AuthController {
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { user, token } = await authInstance.registerUser(req.body)

      res.status(httpStatus.CREATED).json({
        status: 'success',
        user,
        token,
      })
    } catch (error) {
      next(error)
    }
  }
  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { user, token } = await authInstance.loginUser(req.body)

      res.status(httpStatus.CREATED).json({
        status: 'success',
        user,
        token,
      })
    } catch (error) {
      next(error)
    }
  }
}
