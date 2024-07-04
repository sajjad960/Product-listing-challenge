import jwt from 'jsonwebtoken'
import { User } from '../../domain/entities/User'
import { jwtConfig } from '../../../config/config'

const signToken = (id: number): string => {
  return jwt.sign({ id }, jwtConfig.secret, {
    expiresIn: jwtConfig.expiresIn,
  })
}
export default function createJwtToken(user: User) {
  const token = signToken(user.id)
  return token
}
