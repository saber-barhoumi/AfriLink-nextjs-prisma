import AuthRepository from './auth.repository'
import bcrypt from 'bcrypt'

export const AuthService = {
  async register(data: { name: string; email: string; password: string }) {
    const hashed = await bcrypt.hash(data.password, 10)
    return AuthRepository.create({ name: data.name, email: data.email, password: hashed })
  },
  async login(email: string, password: string) {
    const user = await AuthRepository.findByEmail(email)
    if (!user) throw new Error('Invalid credentials')
    const ok = await bcrypt.compare(password, (user as any).password)
    if (!ok) throw new Error('Invalid credentials')
    // Return minimal session object
    return { id: user.id, email: user.email, name: (user as any).name }
  },
}

export default AuthService
