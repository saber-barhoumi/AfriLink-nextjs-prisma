import prisma from '../../lib/prisma'

export const ConnectionsRepository = {
  list: () => prisma.connection.findMany(),
  create: (data: any) => prisma.connection.create({ data }),
  update: (id: string, data: any) => prisma.connection.update({ where: { id }, data }),
  remove: (id: string) => prisma.connection.delete({ where: { id } }),
}

export default ConnectionsRepository
