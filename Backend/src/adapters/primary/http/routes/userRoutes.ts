import { Router } from 'express'
import { AuthController } from '../controllers/AuthController'

const userRouter = Router()

// authentication routes
userRouter.route('/register').post(AuthController.register)
userRouter.route('/login').post(AuthController.login)

export default userRouter
