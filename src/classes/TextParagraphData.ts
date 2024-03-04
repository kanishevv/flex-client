import type { TypeTextParagraph } from '@/interfaces/IText'

class TextParagraphData implements TypeTextParagraph {
  text: string

  constructor(parameters?: TypeTextParagraph) {
    this.text = parameters?.text || ''
  }
}

export { TextParagraphData }
