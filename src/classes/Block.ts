import { getUniqueId } from '@/utilites/helpers'
import type { IBlock, IText, IVideo } from '@/interfaces'
import type { IBlockStyles } from '@/interfaces/IBlock'
import { BlockStyles } from './BlockStyles'
import type { IImage } from '@/interfaces/IImage'
import { ComponentFactory } from './ComponentFactory'

class Block implements IBlock {
  id: string
  name: string
  component: string
  visible: boolean
  styles: IBlockStyles
  children: Array<IBlock | IImage | IVideo | IText> | []

  constructor(parameters?: IBlock) {
    this.id = parameters?.id ?? getUniqueId()
    this.name = parameters?.name ?? 'Block'
    this.component = parameters?.component ?? 'block'
    this.visible = parameters?.visible ?? true
    this.styles = new BlockStyles(parameters?.styles)
    this.children = parameters?.children
      ? parameters?.children.map((component: IBlock | IImage | IVideo | IText) =>
          new ComponentFactory().create(component)
        )
      : []
  }
}

export default Block
