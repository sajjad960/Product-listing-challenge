import AppError from '../../../utils/AppError'
import { User } from '../../domain/entities/User'
import createJwtToken from '../sharedFunctions/createJwtToken'
import bcrypt from 'bcrypt'
import sanitizeUserForView from '../sharedFunctions/sanitizeUserForView'
import httpStatus from 'http-status'

interface RegisterUserRequest {
  name: string
  email: string
  password: string
}
interface LoginUserRequest {
  email: string
  password: string
}

export class Auth {
  private users: User[] = []

  makeCopiedUser(user: User) {
    const stringfyedUser = JSON.stringify(user)
    const copiedUser = JSON.parse(stringfyedUser)
    return copiedUser
  }
  async registerUser(request: RegisterUserRequest) {
    const { name, email, password } = request
    // validate inputs
    if (!email || !password) {
      throw new AppError(
        'Please provide email and password',
        httpStatus.BAD_REQUEST
      )
    }
    // check if user already exists
    const existingUser = this.users.find((user) => user.email === email)
    if (existingUser) {
      throw new AppError('User already exists', httpStatus.BAD_REQUEST)
    }
    //create user
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = new User(this.users.length + 1, name, email, hashedPassword)
    this.users.push(user)
    // genarate Token
    const token = createJwtToken(user)

    const copiedUser = this.makeCopiedUser(user)
    const userView = sanitizeUserForView(copiedUser)
    return { user: userView, token }
  }
  async loginUser(request: LoginUserRequest) {
    const { email, password } = request
    // validate inputs
    if (!email || !password) {
      throw new AppError(
        'Please provide email and password',
        httpStatus.BAD_REQUEST
      )
    }
    let token
    // check credentials
    const user = this.users.find((user) => user.email === email)
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password!)
      if (!isPasswordValid) {
        throw new AppError('Invalid credentials', httpStatus.BAD_REQUEST)
      }
      // genarate Token
      token = createJwtToken(user)
    } else {
      throw new AppError('User not found', httpStatus.NOT_FOUND)
    }

    const copiedUser = this.makeCopiedUser(user)
    const userView = sanitizeUserForView(copiedUser)
    return { user: userView, token }
  }
}
const AuthInstance = new Auth()
export default AuthInstance
