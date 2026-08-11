import prisma from '../../lib/prisma'

export const MessagesRepository = {
  list: () => prisma.message.findMany({ take: 100 }),
  getById: (id: string) => prisma.message.findUnique({ where: { id } }),
  create: (data: any) => prisma.message.create({ data }),
  remove: (id: string) => prisma.message.delete({ where: { id } }),
}

export default MessagesRepository
