export const UploadService = {
  async uploadFile(file: any) {
    // Return a fake public URL; integrate S3/Cloudinary in real app
    return `https://cdn.example.com/${Date.now()}-upload`;
  },
}

export default UploadService
