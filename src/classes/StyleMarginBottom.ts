import { MarginBottom } from '@/interfaces/css'
import { Units } from '@/interfaces/units'

class StyleMarginBottom {
  value: MarginBottom | number
  unit: Units

  constructor(value: MarginBottom | number = 0, unit: Units = Units.Pixels) {
    this.value = value
    this.unit = unit
  }

  get styleValue(): string | null {
    if (typeof this.value !== 'number' && Object.values(MarginBottom).includes(this.value)) {
      return this.value
    } else if (this.value === 0) {
      return `${this.value}`
    } else {
      return null
    }
  }
}

export { StyleMarginBottom }
