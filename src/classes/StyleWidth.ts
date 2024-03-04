import { Width } from '@/interfaces/css'
import { Units } from '@/interfaces/units'

class StyleWidth {
  value: Width | number
  unit: Units

  constructor(value: Width | number = Width.Auto, unit: Units = Units.Pixels) {
    this.value = value
    this.unit = unit
  }

  get styleValue(): string | null {
    if (typeof this.value !== 'number' && Object.values(Width).includes(this.value)) {
      return this.value === Width.Auto ? null : this.value
    } else {
      return `${this.value + this.unit}`
    }
  }
}

export { StyleWidth }
