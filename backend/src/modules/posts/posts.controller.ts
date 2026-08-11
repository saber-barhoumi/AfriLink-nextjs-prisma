import { validate } from '../../middleware/validation'
import { createPostSchema, updatePostSchema } from './posts.validator'
import PostsService from './posts.service'

export const PostsController = {
  list: (q: any) => PostsService.list(q),
  getById: (id: string) => PostsService.getById(id),
  create: (payload: any) => {
    const data = validate(createPostSchema, payload)
    return PostsService.create(data)
  },
  update: (id: string, payload: any) => {
    const data = validate(updatePostSchema, payload)
    return PostsService.update(id, data)
  },
  remove: (id: string) => PostsService.remove(id),
}

export default PostsController
