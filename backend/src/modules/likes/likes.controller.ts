import LikesService from './likes.service'

export const LikesController = {
  list: () => LikesService.list(),
  toggleForPost: (postId: string, payload: any) => {
    const userId = payload.userId
    return LikesService.toggleForPost(postId, userId)
  },
}

export default LikesController
