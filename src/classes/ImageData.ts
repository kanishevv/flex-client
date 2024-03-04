import { ImageLoading, type IImageData } from '@/interfaces/IImage'

class ImageData implements IImageData {
  id?: string
  src: string
  alt: string
  loading: ImageLoading
  title?: string

  constructor(parameters?: IImageData) {
    this.id = parameters?.id || ''
    this.src =
      parameters?.src ||
      'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    this.alt = parameters?.alt || ''
    this.loading = parameters?.loading || ImageLoading.Eager
    this.title = parameters?.title || ''
  }
}

export { ImageData }
