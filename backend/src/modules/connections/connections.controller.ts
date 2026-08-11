import ConnectionsService from './connections.service'

export const ConnectionsController = {
  list: () => ConnectionsService.list(),
  request: (payload: any) => ConnectionsService.request(payload),
  update: (id: string, payload: any) => ConnectionsService.update(id, payload),
  remove: (id: string) => ConnectionsService.remove(id),
}

export default ConnectionsController
