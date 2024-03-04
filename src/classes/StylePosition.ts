import { Position } from '@/interfaces/css'

class StylePosition {
  value: Position

  constructor(position: Position = Position.Static) {
    this.value = position
  }

  get styleValue(): string | null {
    if (typeof this.value !== 'number' && Object.values(Position).includes(this.value)) {
      return this.value === Position.Static ? null : this.value
    } else {
      return `${this.value}`
    }
  }
}

export { StylePosition }
