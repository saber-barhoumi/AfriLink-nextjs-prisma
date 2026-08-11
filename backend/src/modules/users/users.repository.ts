import prisma from '../../lib/prisma'

export const UsersRepository = {
  list: (opts: any = {}) => prisma.user.findMany({ take: 50 }),
  getById: (id: string) => prisma.user.findUnique({ where: { id } }),
  create: (data: any) => prisma.user.create({ data }),
  update: (id: string, data: any) => prisma.user.update({ where: { id }, data }),
  remove: (id: string) => prisma.user.delete({ where: { id } }),
}

export default UsersRepository
