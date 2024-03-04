import { Bottom } from '@/interfaces/css'
import { Units } from '@/interfaces/units'

class StyleBottom {
  private _value: Bottom | number
  unit: Units

  constructor(value: Bottom | number = Bottom.Auto, unit: Units = Units.Pixels) {
    this._value = value
    this.unit = unit
  }

  set value(newValue: string): void {
    this._value = this.getCurrentValue(newValue)
  }

  get value(): Bottom | number {
    return this._value
  }

  get styleValue(): string | null {
    if (typeof this.value !== 'number' && Object.values(Bottom).includes(this.value)) {
      return this.value === Bottom.Auto ? null : this.value
    } else {
      return `${this.value}`
    }
  }

  getCurrentValue(value: string): Bottom | number {
    const findedTextValue = Object.values(Bottom).find((item) => item.toLowerCase().includes(value))

    if (findedTextValue && value.length) {
      return findedTextValue
    } else if (!isNaN(Number(value)) && value.length) {
      return value.toLowerCase() as Bottom
    } else {
      return Bottom.Auto
    }
  }
}

export { StyleBottom }
