import type { TypeText, TypeTextHeader } from '@/interfaces/IText'
import { getUniqueId } from '@/utilites/helpers'
import { TextHeaderData } from './TextHeaderData'

class TextHeader implements TypeText<TypeTextHeader> {
  id: string
  type: string
  data: TypeTextHeader

  constructor(parameters?: TypeText<TypeTextHeader>) {
    this.id = parameters?.id || getUniqueId()
    this.type = 'header'
    this.data = new TextHeaderData(parameters?.data)
  }
}

export { TextHeader }
