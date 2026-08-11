import NotificationsService from './notifications.service'

export const NotificationsController = {
  list: () => NotificationsService.list(),
  update: (id: string, payload: any) => NotificationsService.update(id, payload),
}

export default NotificationsController
