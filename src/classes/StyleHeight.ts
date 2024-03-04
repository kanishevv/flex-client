import { Height } from '@/interfaces/css'
import { Units } from '@/interfaces/units'

class StyleHeight {
  value: Height | number
  unit: Units

  constructor(value: Height | number = Height.Auto, unit: Units = Units.Pixels) {
    this.value = value
    this.unit = unit
  }

  get styleValue(): string | null {
    if (typeof this.value !== 'number' && Object.values(Height).includes(this.value)) {
      return this.value === Height.Auto ? null : this.value
    } else {
      return `${this.value}`
    }
  }
}

export { StyleHeight }
