import { FlexWrap } from '@/interfaces/css'

class StyleFlexWrap {
  value: FlexWrap

  constructor(value: FlexWrap = FlexWrap.Nowrap) {
    this.value = value
  }

  get styleValue(): string | null {
    if (typeof this.value !== 'number' && Object.values(FlexWrap).includes(this.value)) {
      return this.value === FlexWrap.Nowrap ? null : this.value
    } else {
      return `${this.value}`
    }
  }
}

export { StyleFlexWrap }
