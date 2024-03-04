import type { IComponent } from './IComponent'

type TypeTextString = {
  text: string
}

type TypeTextHeader = {
  text: string
  level: number
}

type TypeTextParagraph = {
  text: string
}

type TypeText<T> = {
  id: string
  type: string
  data: T
}

interface IText extends IComponent {
  data: TypeText<TypeTextString | TypeTextHeader | TypeTextParagraph>[]
}

export type { IText, TypeText, TypeTextString, TypeTextHeader, TypeTextParagraph }
