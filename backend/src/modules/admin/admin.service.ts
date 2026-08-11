import AdminRepository from './admin.repository'

export const AdminService = {
  listUsers: () => AdminRepository.listUsers(),
  listPosts: () => AdminRepository.listPosts(),
  stats: () => AdminRepository.stats(),
}

export default AdminService
