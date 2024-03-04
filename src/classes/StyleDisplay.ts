import { Display } from '@/interfaces/css'

class StyleDisplay {
  value: Display

  constructor(value: Display = Display.Block) {
    this.value = value
  }

  get styleValue(): string | null {
    if (typeof this.value !== 'number' && Object.values(Display).includes(this.value)) {
      return this.value === Display.Block ? null : this.value
    } else {
      return `${this.value}`
    }
  }
}

export { StyleDisplay }
