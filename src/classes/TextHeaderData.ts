import type { TypeTextHeader } from '@/interfaces/IText'

class TextHeaderData implements TypeTextHeader {
  text: string
  level: number

  constructor(parameters?: TypeTextHeader) {
    this.text = parameters?.text || ''
    this.level = parameters?.level || 1
  }
}

export { TextHeaderData }
