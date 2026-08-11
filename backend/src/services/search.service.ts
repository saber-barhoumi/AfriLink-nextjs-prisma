export const SearchService = {
  async index(_type: string, _payload: any) {
    // placeholder for search indexing
    return true
  },
  async query(_type: string, _q: string) {
    return []
  },
}

export default SearchService
