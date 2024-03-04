import { MinHeight } from '@/interfaces/css'
import { Units } from '@/interfaces/units'

class StyleMinHeight {
  value: MinHeight | number
  unit: Units

  constructor(value: MinHeight | number = MinHeight.Auto, unit: Units = Units.Pixels) {
    this.value = value
    this.unit = unit
  }

  get styleValue(): string | null {
    if (typeof this.value !== 'number' && Object.values(MinHeight).includes(this.value)) {
      return this.value === MinHeight.Auto ? null : this.value
    } else {
      return `${this.value}`
    }
  }
}

export { StyleMinHeight }
