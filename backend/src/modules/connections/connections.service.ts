import ConnectionsRepository from './connections.repository'

export const ConnectionsService = {
  list: () => ConnectionsRepository.list(),
  request: (data: any) => ConnectionsRepository.create(data),
  update: (id: string, data: any) => ConnectionsRepository.update(id, data),
  remove: (id: string) => ConnectionsRepository.remove(id),
}

export default ConnectionsService
