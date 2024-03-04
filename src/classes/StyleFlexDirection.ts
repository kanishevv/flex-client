import { FlexDirection } from '@/interfaces/css'

class StyleFlexDirection {
  value: FlexDirection

  constructor(value: FlexDirection = FlexDirection.Row) {
    this.value = value
  }

  get styleValue(): string | null {
    if (typeof this.value !== 'number' && Object.values(FlexDirection).includes(this.value)) {
      return this.value === FlexDirection.Row ? null : this.value
    } else {
      return `${this.value}`
    }
  }
}

export { StyleFlexDirection }
