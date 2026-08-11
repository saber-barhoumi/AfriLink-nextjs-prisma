import AdminService from './admin.service'

export const AdminController = {
  listUsers: () => AdminService.listUsers(),
  listPosts: () => AdminService.listPosts(),
  stats: () => AdminService.stats(),
}

export default AdminController
