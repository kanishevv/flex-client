import type { TypeTextString } from '@/interfaces/IText'

class TextStringData implements TypeTextString {
  text: string

  constructor(parameters?: TypeTextString) {
    this.text = parameters?.text || ''
  }
}

export { TextStringData }
