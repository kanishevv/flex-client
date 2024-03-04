import { QPage } from './Page'
import { QBlock } from './Blocks/Block'
import { QPicture } from './Blocks/Picture'
import { QText } from './Blocks/Text'
import { QVideo } from './Blocks/Video'
import { QImage } from './Blocks/Image'

const getComponentByName = (name: string) => {
  let component

  switch (name) {
    case 'block':
      component = QBlock
      break

    case 'image':
      component = QImage
      break

    case 'picture':
      component = QPicture
      break

    case 'text':
      component = QText
      break

    case 'video':
      component = QVideo
      break
  }

  return component
}

export { getComponentByName, QPage, QBlock, QPicture, QText, QVideo }
