import LikesRepository from './likes.repository'

export const LikesService = {
  list: () => LikesRepository.list(),
  toggleForPost: (postId: string, userId: string) => LikesRepository.toggleForPost(postId, userId),
}

export default LikesService
