import NotificationsRepository from './notifications.repository'

export const NotificationsService = {
  list: () => NotificationsRepository.list(),
  update: (id: string, data: any) => NotificationsRepository.update(id, data),
}

export default NotificationsService
