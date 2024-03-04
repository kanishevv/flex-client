import type { IPicture } from '@/interfaces'
import { getUniqueId } from '@/utilites/helpers'
import { BlockStyles } from './BlockStyles'
import type { IBlockStyles } from '@/interfaces/IBlock'
import type { IImage } from '@/interfaces/IImage'
import type { IImageData } from '@/interfaces/IImageData'
import { ImageData } from './ImageData'

class Image implements IImage {
  id: string
  name: string
  component: string
  visible: boolean
  styles: IBlockStyles
  data: IImageData

  constructor(parameters?: IImage) {
    this.id = parameters?.id || getUniqueId()
    this.name = parameters?.name || 'Image'
    this.component = parameters?.component || 'image'
    this.visible = parameters?.visible || true
    this.styles = new BlockStyles(parameters?.styles)
    this.data = new ImageData(parameters?.data)
  }
}

export { Image }
