import type { TypeText, TypeTextString } from '@/interfaces/IText'
import { getUniqueId } from '@/utilites/helpers'
import { TextStringData } from './TextStringData'

class TextString implements TypeText<TypeTextString> {
  id: string
  type: string
  data: TextStringData

  constructor(parameters?: TypeText<TypeTextString>) {
    this.id = parameters?.id || getUniqueId()
    this.type = 'string'
    this.data = new TextStringData(parameters?.data)
  }
}

export { TextString }
