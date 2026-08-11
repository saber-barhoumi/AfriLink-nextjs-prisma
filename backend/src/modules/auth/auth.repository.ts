import prisma from '../../lib/prisma'

export const AuthRepository = {
  findByEmail: (email: string) => prisma.user.findUnique({ where: { email } }),
  create: (data: any) => prisma.user.create({ data }),
}

export default AuthRepository
