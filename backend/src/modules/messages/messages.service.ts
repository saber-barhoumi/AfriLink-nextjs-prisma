import MessagesRepository from './messages.repository'

export const MessagesService = {
  list: () => MessagesRepository.list(),
  getById: (id: string) => MessagesRepository.getById(id),
  send: (data: any) => MessagesRepository.create(data),
  remove: (id: string) => MessagesRepository.remove(id),
}

export default MessagesService
