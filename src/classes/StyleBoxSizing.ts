import { BoxSizing } from '@/interfaces/css'

class StyleBoxSizing {
  value: BoxSizing

  constructor(value: BoxSizing = BoxSizing.BorderBox) {
    this.value = value
  }

  get styleValue(): string | null {
    if (typeof this.value !== 'number' && Object.values(BoxSizing).includes(this.value)) {
      return this.value === BoxSizing.BorderBox ? null : this.value
    } else {
      return `${this.value}`
    }
  }
}

export { StyleBoxSizing }
