import { MaxHeight } from '@/interfaces/css'
import { Units } from '@/interfaces/units'

class StyleMaxHeight {
  value: MaxHeight | number
  unit: Units

  constructor(value: MaxHeight | number = MaxHeight.None, unit: Units = Units.Pixels) {
    this.value = value
    this.unit = unit
  }

  get styleValue(): string | null {
    if (typeof this.value !== 'number' && Object.values(MaxHeight).includes(this.value)) {
      return this.value === MaxHeight.None ? null : this.value
    } else {
      return `${this.value}`
    }
  }
}

export { StyleMaxHeight }
