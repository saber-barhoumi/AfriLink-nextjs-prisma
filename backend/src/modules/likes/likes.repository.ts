import prisma from '../../lib/prisma'

export const LikesRepository = {
  list: () => prisma.like.findMany(),
  toggleForPost: async (postId: string, userId: string) => {
    const existing = await prisma.like.findUnique({ where: { postId_userId: { postId, userId } } }).catch(() => null)
    if (existing) return prisma.like.delete({ where: { id: existing.id } })
    return prisma.like.create({ data: { postId, userId } })
  },
}

export default LikesRepository
