import { MaxWidth } from '@/interfaces/css'
import { Units } from '@/interfaces/units'

class StyleMaxWidth {
  value: MaxWidth | number
  unit: Units

  constructor(value: MaxWidth | number = MaxWidth.None, unit: Units = Units.Pixels) {
    this.value = value
    this.unit = unit
  }

  get styleValue(): string | null {
    if (typeof this.value !== 'number' && Object.values(MaxWidth).includes(this.value)) {
      return this.value === MaxWidth.None ? null : this.value
    } else {
      return `${this.value}`
    }
  }
}

export { StyleMaxWidth }
