import { loginSchema, registerSchema } from './auth.validator'
import { validate } from '../../middleware/validation'
import AuthService from './auth.service'

export const AuthController = {
  async login(payload: any) {
    const data = validate(loginSchema, payload)
    return AuthService.login(data.email, data.password)
  },
  async register(payload: any) {
    const data = validate(registerSchema, payload)
    return AuthService.register(data)
  },
}

export default AuthController
