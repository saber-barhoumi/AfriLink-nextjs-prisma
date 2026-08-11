import prisma from '../../lib/prisma'

export const CommentsRepository = {
  list: () => prisma.comment.findMany({ take: 100 }),
  getById: (id: string) => prisma.comment.findUnique({ where: { id } }),
  listByPost: (postId: string) => prisma.comment.findMany({ where: { postId } }),
  create: (data: any) => prisma.comment.create({ data }),
  remove: (id: string) => prisma.comment.delete({ where: { id } }),
}

export default CommentsRepository
