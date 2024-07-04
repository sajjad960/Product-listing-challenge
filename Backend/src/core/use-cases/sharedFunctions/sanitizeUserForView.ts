import { User } from '../../domain/entities/User'

export default function sanitizeUserForView(user: User) {
  user.password = undefined

  return user
}
