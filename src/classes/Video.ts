import type { IBlockStyles } from '@/interfaces/IBlock'
import type { IVideo, IVideoData } from '@/interfaces/IVideo'
import { VideoData } from './VideoData'
import { getUniqueId } from '@/utilites/helpers'
import { BlockStyles } from './BlockStyles'

class Video implements IVideo {
  id: string
  name: string
  component: string
  visible: boolean
  styles: IBlockStyles
  data: IVideoData

  constructor(parameters?: IVideo) {
    this.id = parameters?.id || getUniqueId()
    this.name = parameters?.name || 'Video'
    this.component = parameters?.component || 'video'
    this.visible = parameters?.visible || true
    this.styles = new BlockStyles(parameters?.styles)
    this.data = new VideoData(parameters?.data)
  }
}

export { Video }
