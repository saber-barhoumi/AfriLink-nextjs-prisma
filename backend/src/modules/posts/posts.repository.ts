import prisma from '../../lib/prisma'

export const PostsRepository = {
  list: (opts: any = {}) => prisma.post.findMany({ take: 50 }),
  getById: (id: string) => prisma.post.findUnique({ where: { id } }),
  create: (data: any) => prisma.post.create({ data }),
  update: (id: string, data: any) => prisma.post.update({ where: { id }, data }),
  remove: (id: string) => prisma.post.delete({ where: { id } }),
}

export default PostsRepository
