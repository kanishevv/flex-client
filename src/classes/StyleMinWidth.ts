import { MinWidth } from '@/interfaces/css'
import { Units } from '@/interfaces/units'

class StyleMinWidth {
  value: MinWidth | number
  unit: Units

  constructor(value: MinWidth | number = MinWidth.Auto, unit: Units = Units.Pixels) {
    this.value = value
    this.unit = unit
  }

  get styleValue(): string | null {
    if (typeof this.value !== 'number' && Object.values(MinWidth).includes(this.value)) {
      return this.value === MinWidth.Auto ? null : this.value
    } else {
      return `${this.value}`
    }
  }
}

export { StyleMinWidth }
