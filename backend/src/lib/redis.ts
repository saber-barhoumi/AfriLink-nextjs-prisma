// Minimal Redis stub. Install ioredis and implement when needed.
export const redis = {
  publish: async (_chan: string, _msg: string) => true,
  subscribe: async (_chan: string) => true,
}

export default redis
