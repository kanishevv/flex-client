import { Left } from '@/interfaces/css'
import { Units } from '@/interfaces/units'

class StyleLeft {
  private _value: Left | number
  unit: Units

  constructor(value: Left | number = Left.Auto, unit: Units = Units.Pixels) {
    this._value = value
    this.unit = unit
  }

  set value(newValue: string): void {
    this._value = this.getCurrentValue(newValue)
  }

  get value(): Left | number {
    return this._value
  }

  get styleValue(): string | null {
    if (typeof this.value !== 'number' && Object.values(Left).includes(this.value)) {
      return this.value === Left.Auto ? null : this.value
    } else {
      return `${this.value + this.unit}`
    }
  }

  getCurrentValue(value: string): Left | number {
    const findedTextValue = Object.values(Left).find((item) => item.toLowerCase().includes(value))

    if (findedTextValue && value.length) {
      return findedTextValue
    } else if (!isNaN(Number(value)) && value.length) {
      return value.toLowerCase() as Left
    } else {
      return Left.Auto
    }
  }
}

export { StyleLeft }
