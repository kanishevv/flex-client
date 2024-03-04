import type { IPage } from './IPage'

interface ISite {
  id?: string
  name: string
  active: boolean
  pages: IPage[]
  created: Date | null
  updated: Date | null
  viewed: Date | null
}

export { type ISite }
