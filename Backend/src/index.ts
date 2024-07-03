import express from 'express'
import dotenv from 'dotenv'
import { config } from './config/config'
import globalErrorHandler from './adapters/primary/http/controllers/ErrorController'

const app = express()

app.use(express.json())

dotenv.config()

// const prefix = '/api/v1'
// app.use(`${prefix}/users`, userRouter)
// app.use(`${prefix}/books`, bookRouter)

//handling global error
app.use(globalErrorHandler)

const startServer = async () => {
  app.listen(config.port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on port ${config.port}`)
  })
}

startServer()
