import { validate } from '../../middleware/validation'
import { profileCreateSchema } from './profiles.validator'
import ProfilesService from './profiles.service'

export const ProfilesController = {
  list: () => ProfilesService.list(),
  getById: (id: string) => ProfilesService.getById(id),
  create: (payload: any) => {
    const data = validate(profileCreateSchema, payload)
    return ProfilesService.create(data)
  },
  update: (id: string, payload: any) => ProfilesService.update(id, payload),
}

export default ProfilesController
