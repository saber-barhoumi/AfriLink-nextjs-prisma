import PostsRepository from './posts.repository'

export const PostsService = {
  list: (q: any) => PostsRepository.list(q),
  getById: (id: string) => PostsRepository.getById(id),
  create: (data: any) => PostsRepository.create(data),
  update: (id: string, data: any) => PostsRepository.update(id, data),
  remove: (id: string) => PostsRepository.remove(id),
}

export default PostsService
