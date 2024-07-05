import { Request, Response, NextFunction } from 'express'

const logRequests = (req: Request, res: Response, next: NextFunction) => {
  const { method, url } = req
  // eslint-disable-next-line no-console
  console.log(`${method} ${url}`)
  next()
}
export default logRequests
