import MessagesService from './messages.service'

export const MessagesController = {
  list: () => MessagesService.list(),
  getById: (id: string) => MessagesService.getById(id),
  send: (payload: any) => MessagesService.send(payload),
  remove: (id: string) => MessagesService.remove(id),
}

export default MessagesController
