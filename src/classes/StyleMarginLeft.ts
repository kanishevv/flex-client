import { MarginLeft } from '@/interfaces/css'
import { Units } from '@/interfaces/units'

class StyleMarginLeft {
  value: MarginLeft | number
  unit: Units

  constructor(value: MarginLeft | number = 0, unit: Units = Units.Pixels) {
    this.value = value
    this.unit = unit
  }

  get styleValue(): string | null {
    if (typeof this.value !== 'number' && Object.values(MarginLeft).includes(this.value)) {
      return this.value
    } else if (this.value === 0) {
      return `${this.value}`
    } else {
      return null
    }
  }
}

export { StyleMarginLeft }
