import { MarginRight } from '@/interfaces/css'
import { Units } from '@/interfaces/units'

class StyleMarginRight {
  value: MarginRight | number
  unit: Units

  constructor(value: MarginRight | number = 0, unit: Units = Units.Pixels) {
    this.value = value
    this.unit = unit
  }

  get styleValue(): string | null {
    if (typeof this.value !== 'number' && Object.values(MarginRight).includes(this.value)) {
      return this.value
    } else if (typeof this.value === 'number' && this.value > 0) {
      return `${this.value + this.unit}`
    } else {
      return null
    }
  }
}

export { StyleMarginRight }
