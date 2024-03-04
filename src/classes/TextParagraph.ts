import type { TypeText, TypeTextParagraph } from '@/interfaces/IText'
import { getUniqueId } from '@/utilites/helpers'
import { TextParagraphData } from './TextParagraphData'

class TextParagraph implements TypeText<TypeTextParagraph> {
  id: string
  type: string
  data: TypeTextParagraph

  constructor(parameters?: TypeText<TypeTextParagraph>) {
    this.id = parameters?.id || getUniqueId()
    this.type = 'paragraph'
    this.data = new TextParagraphData(parameters?.data)
  }
}

export { TextParagraph }
