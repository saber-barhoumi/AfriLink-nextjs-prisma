import prisma from '../../lib/prisma'

export const AdminRepository = {
  listUsers: () => prisma.user.findMany({ take: 100 }),
  listPosts: () => prisma.post.findMany({ take: 100 }),
  stats: async () => ({ users: await prisma.user.count(), posts: await prisma.post.count() }),
}

export default AdminRepository
