import ProfilesRepository from './profiles.repository'

export const ProfilesService = {
  list: () => ProfilesRepository.list(),
  getById: (id: string) => ProfilesRepository.getById(id),
  create: (data: any) => ProfilesRepository.create(data),
  update: (id: string, data: any) => ProfilesRepository.update(id, data),
}

export default ProfilesService
