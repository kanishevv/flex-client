import type {
  TypeText,
  TypeTextHeader,
  TypeTextParagraph,
  TypeTextString
} from '@/interfaces/IText'
import { TextString } from './TextString'
import { TextHeader } from './TextHeader'
import { TextParagraph } from './TextParagraph'

class TextDataFactory {
  create(object: TypeText<TypeTextString | TypeTextHeader | TypeTextParagraph>) {
    switch (object.type.toLowerCase()) {
      case 'header':
        return new TextHeader(object as TypeText<TypeTextHeader>)
      case 'paragraph':
        return new TextParagraph(object as TypeText<TypeTextParagraph>)
      default:
        return new TextString(object as TypeText<TypeTextString>)
    }
  }
}

export { TextDataFactory }
