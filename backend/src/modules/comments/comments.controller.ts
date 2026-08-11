import CommentsService from './comments.service'

export const CommentsController = {
  list: () => CommentsService.list(),
  getById: (id: string) => CommentsService.getById(id),
  listByPost: (postId: string) => CommentsService.listByPost(postId),
  create: (payload: any) => CommentsService.create(payload),
  createForPost: (postId: string, payload: any) => CommentsService.create({ ...payload, postId }),
  remove: (id: string) => CommentsService.remove(id),
}

export default CommentsController
