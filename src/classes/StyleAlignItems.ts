import { AlignItems } from '@/interfaces/css'

class StyleAlignItems {
  value: AlignItems

  constructor(value: AlignItems = AlignItems.Stretch) {
    this.value = value
  }

  get styleValue(): string | null {
    if (typeof this.value !== 'number' && Object.values(AlignItems).includes(this.value)) {
      return this.value === AlignItems.Stretch ? null : this.value
    } else {
      return `${this.value}`
    }
  }
}

export { StyleAlignItems }
