import UsersRepository from './users.repository'

export const UsersService = {
  list: (q: any) => UsersRepository.list(q),
  getById: (id: string) => UsersRepository.getById(id),
  create: (data: any) => UsersRepository.create(data),
  update: (id: string, data: any) => UsersRepository.update(id, data),
  remove: (id: string) => UsersRepository.remove(id),
}

export default UsersService
