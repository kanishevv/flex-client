import type { IComponent } from './IComponent'

enum ImageLoading {
  Eager = 'eager',
  Lazy = 'lazy'
}

type IImageData = {
  id?: string
  src?: string
  alt: string
  loading: ImageLoading
  title?: string
}

interface IImage extends IComponent {
  data: IImageData
}

export { type IImage, type IImageData, ImageLoading }
