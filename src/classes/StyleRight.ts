import { Right } from '@/interfaces/css'
import { Units } from '@/interfaces/units'

class StyleRight {
  private _value: Right | number
  unit: Units

  constructor(value: Right | number = Right.Auto, unit: Units = Units.Pixels) {
    this._value = value
    this.unit = unit
  }

  set value(newValue: string): void {
    this._value = this.getCurrentValue(newValue)
  }

  get value(): Right | number {
    return this._value
  }

  get styleValue(): string | null {
    if (typeof this.value !== 'number' && Object.values(Right).includes(this.value)) {
      return this.value === Right.Auto ? null : this.value
    } else {
      return `${this.value + this.unit}`
    }
  }

  getCurrentValue(value: string): Right | number {
    const findedTextValue = Object.values(Right).find((item) => item.toLowerCase().includes(value))

    if (findedTextValue && value.length) {
      return findedTextValue
    } else if (!isNaN(Number(value)) && value.length) {
      return value.toLowerCase() as Right
    } else {
      return Right.Auto
    }
  }
}

export { StyleRight }
