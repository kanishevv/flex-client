import { MarginTop } from '@/interfaces/css'
import { Units } from '@/interfaces/units'

class StyleMarginTop {
  value: MarginTop | number
  unit: Units

  constructor(value: MarginTop | number = 0, unit: Units = Units.Pixels) {
    this.value = value
    this.unit = unit
  }

  get styleValue(): string | null {
    if (typeof this.value !== 'number' && Object.values(MarginTop).includes(this.value)) {
      return this.value
    } else if (this.value === 0) {
      return `${this.value}`
    } else {
      return null
    }
  }
}

export { StyleMarginTop }
