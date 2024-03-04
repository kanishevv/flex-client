import type { IBlock, IText, IVideo } from '.'
import type { IImage } from './IImage'

interface IPage {
  id: string
  name: string
  code: string
  home: boolean
  status: string
  description?: string
  children: Array<IBlock | IImage | IVideo | IText> | []
  created: Date | number
  updated: Date | number
}

export { type IPage }
