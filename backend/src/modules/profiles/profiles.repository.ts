import prisma from '../../lib/prisma'

export const ProfilesRepository = {
  list: () => prisma.profile.findMany(),
  getById: (id: string) => prisma.profile.findUnique({ where: { id } }),
  create: (data: any) => prisma.profile.create({ data }),
  update: (id: string, data: any) => prisma.profile.update({ where: { id }, data }),
}

export default ProfilesRepository
