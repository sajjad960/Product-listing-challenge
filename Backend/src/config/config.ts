import dotenv from 'dotenv-safe'
dotenv.config()

interface Config {
  port: string | number
  nodeEnv: string
}

interface JwtConfig {
  secret: string
  expiresIn: string
}

export const config: Config = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
}
export const jwtConfig: JwtConfig = {
  secret: process.env.JWT_SECRET!,
  expiresIn: process.env.JWT_EXPIRES_IN!,
}
