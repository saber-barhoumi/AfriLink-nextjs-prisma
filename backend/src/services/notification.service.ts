export const NotificationService = {
  async push(userId: string, payload: any) {
    // placeholder - push to redis/pubsub or third-party
    console.log('notify', userId, payload)
    return true
  },
}

export default NotificationService
