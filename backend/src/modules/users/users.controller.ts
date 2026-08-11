import { validate } from '../../middleware/validation'
import { createUserSchema, updateUserSchema } from './users.validator'
import UsersService from './users.service'

export const UsersController = {
  list: (q: any) => UsersService.list(q),
  create: (payload: any) => {
    const data = validate(createUserSchema, payload)
    return UsersService.create(data)
  },
  getById: (id: string) => UsersService.getById(id),
  update: (id: string, payload: any) => {
    const data = validate(updateUserSchema, payload)
    return UsersService.update(id, data)
  },
  remove: (id: string) => UsersService.remove(id),
}

export default UsersController
