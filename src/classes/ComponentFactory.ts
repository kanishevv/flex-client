import type { IBlock, IText } from '@/interfaces'
import type { IImage } from '@/interfaces/IImage'
import type { IVideo } from '@/interfaces/IVideo'
import Block from './Block'
import { Image } from './Image'
import { Video } from './Video'
import { Text } from './Text'

class ComponentFactory {
  create(
    component: IBlock | IImage | IVideo | IText | { component: string }
  ): Block | Image | Video | Text {
    switch (component.component.toLowerCase()) {
      case 'image':
        return new Image(component as IImage)
      case 'video':
        return new Video(component as IVideo)
      case 'text':
        return new Text(component as IText)
      default:
        return new Block(component as IBlock)
    }
  }
}

export { ComponentFactory }
