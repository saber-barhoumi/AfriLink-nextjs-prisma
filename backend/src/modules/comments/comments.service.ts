import CommentsRepository from './comments.repository'

export const CommentsService = {
  list: () => CommentsRepository.list(),
  getById: (id: string) => CommentsRepository.getById(id),
  listByPost: (postId: string) => CommentsRepository.listByPost(postId),
  create: (data: any) => CommentsRepository.create(data),
  remove: (id: string) => CommentsRepository.remove(id),
}

export default CommentsService
