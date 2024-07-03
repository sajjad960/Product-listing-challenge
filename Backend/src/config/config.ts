import dotenv from 'dotenv-safe'
dotenv.config()

interface Config {
  port: string | number
  nodeEnv: string
}

export const config: Config = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
}
