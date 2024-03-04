import QText from './QText.vue'
import QTextString from './QTextString.vue'
import QTextHeader from './QTextHeader.vue'
import QTextParagraph from './QTextParagraph.vue'

const getTextComponent = (type: string) => {
  switch (type) {
    case 'header':
      return QTextHeader
    case 'paragraph':
      return QTextParagraph
    default:
      return QTextString
  }
}

export { QText, QTextString, QTextHeader, QTextParagraph, getTextComponent }
