import { Top } from '@/interfaces/css'
import { Units } from '@/interfaces/units'

class StyleTop {
  private _value: Top | number
  unit: Units

  constructor(value: Top | number = Top.Auto, unit: Units = Units.Pixels) {
    this._value = value
    this.unit = unit
  }

  set value(newValue: string): void {
    this._value = this.getCurrentValue(newValue)
  }

  get value(): Top | number {
    return this._value
  }

  get styleValue(): string | null {
    if (typeof this.value !== 'number' && Object.values(Top).includes(this.value)) {
      return this.value === Top.Auto ? null : this.value
    } else {
      return `${this.value + this.unit}`
    }
  }

  getCurrentValue(value: string): Top | number {
    const findedTextValue = Object.values(Top).find((item) => item.toLowerCase().includes(value))

    if (findedTextValue && value.length) {
      return findedTextValue
    } else if (!isNaN(Number(value)) && value.length) {
      return value.toLowerCase() as Top
    } else {
      return Top.Auto
    }
  }
}

export { StyleTop }
