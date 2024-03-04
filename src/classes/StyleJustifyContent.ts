import { JustifyContent } from '@/interfaces/css'

class StyleJustifyContent {
  value: JustifyContent

  constructor(value: JustifyContent = JustifyContent.FlexStart) {
    this.value = value
  }

  get styleValue(): string | null {
    if (typeof this.value !== 'number' && Object.values(JustifyContent).includes(this.value)) {
      return this.value === JustifyContent.FlexStart ? null : this.value
    } else {
      return `${this.value}`
    }
  }
}

export { StyleJustifyContent }
