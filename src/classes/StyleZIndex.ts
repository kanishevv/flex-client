import { ZIndex } from '@/interfaces/css'

class StyleZIndex {
  private _value: ZIndex | number

  constructor(value: ZIndex | number = ZIndex.Auto) {
    this._value = value
  }

  set value(newValue: string): void {
    this._value = this.getCurrentValue(newValue)
  }

  get value(): Right | number {
    return this._value
  }

  get styleValue(): string | null {
    if (typeof this.value !== 'number' && Object.values(ZIndex).includes(this.value)) {
      return this.value === ZIndex.Auto ? null : this.value
    } else {
      return `${this.value}`
    }
  }

  getCurrentValue(value: string): ZIndex | number {
    const findedTextValue = Object.values(ZIndex).find((item) => item.toLowerCase().includes(value))

    if (findedTextValue && value.length) {
      return findedTextValue
    } else if (!isNaN(Number(value)) && value.length) {
      return value.toLowerCase() as ZIndex
    } else {
      return ZIndex.Auto
    }
  }
}

export { StyleZIndex }
