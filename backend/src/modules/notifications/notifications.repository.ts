import prisma from '../../lib/prisma'

export const NotificationsRepository = {
  list: () => prisma.notification.findMany({ take: 100 }),
  update: (id: string, data: any) => prisma.notification.update({ where: { id }, data }),
}

export default NotificationsRepository
