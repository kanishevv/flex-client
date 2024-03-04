import { getUniqueId } from '@/utilites/helpers'
import type { IText } from '@/interfaces'
import type {
  TypeText,
  TypeTextHeader,
  TypeTextParagraph,
  TypeTextString
} from '@/interfaces/IText'
import { TextDataFactory } from './TextDataFactory'
import { TextString } from './TextString'

class Text implements IText {
  id: string
  name: string
  component: string
  visible: boolean
  data: TypeText<TypeTextString | TypeTextHeader | TypeTextParagraph>[]

  constructor(parameters?: IText) {
    this.id = parameters?.id || getUniqueId()
    this.name = parameters?.name || 'Text'
    this.component = parameters?.component || 'text'
    this.visible = parameters?.visible || true
    this.data = parameters?.data
      ? parameters?.data.map((item) => new TextDataFactory().create(item))
      : [new TextString()]
  }
}

export { Text }
