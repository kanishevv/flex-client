import { AlignContent } from '@/interfaces/css'

class StyleAlignContent {
  value: AlignContent

  constructor(value: AlignContent = AlignContent.Stretch) {
    this.value = value
  }

  get styleValue(): string | null {
    if (typeof this.value !== 'number' && Object.values(AlignContent).includes(this.value)) {
      return this.value === AlignContent.Stretch ? null : this.value
    } else {
      return `${this.value}`
    }
  }
}

export { StyleAlignContent }
