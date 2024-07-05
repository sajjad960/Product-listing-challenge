import httpStatus from 'http-status'
import { NextFunction } from 'express'
import { Request, Response } from 'express'
import AppError from '../../../../utils/AppError'
import { config } from '../../../../config/config'

const sendErrorDev = (err: AppError, res: Response) => {
  return res.status(err.statusCode ?? httpStatus.INTERNAL_SERVER_ERROR).json({
    status: err.status ?? 'error',
    error: err,
    message: err.message,
    stack: err.stack,
  })
}

const sendErrorProd = (err: AppError, res: Response) => {
  if (err.isOperational) {
    res.status(err.statusCode ?? httpStatus.INTERNAL_SERVER_ERROR).json({
      status: err.status ?? 'error',
      message: err.message,
    })
  } else {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: 'error',
      message: 'Something went wrong',
    })
  }
}

const globalErrorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  if (config.nodeEnv === 'development') {
    sendErrorDev(err as AppError, res)
  } else if (process.env.NODE_ENV === 'production') {
    sendErrorProd(err as AppError, res)
  }
}

export default globalErrorHandler
