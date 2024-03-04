import type { IBlock, IPage, IText, IVideo } from '@/interfaces'
import type { IImage } from '@/interfaces/IImage'
import { ComponentFactory } from './ComponentFactory'

class Page implements IPage {
  id: string
  name: string
  code: string
  home: boolean
  status: string
  description?: string
  children: Array<IBlock | IImage | IVideo | IText> | []
  created: number | Date
  updated: number | Date

  constructor(parameters: IPage) {
    this.id = parameters.id
    this.name = parameters.name
    this.code = parameters.code
    this.home = parameters.home
    this.status = parameters.status
    this.description = parameters.description
    this.children = parameters?.children
      ? parameters?.children.map((component: IBlock | IImage | IVideo | IText) =>
          new ComponentFactory().create(component)
        )
      : []
    this.created = parameters.created
    this.updated = parameters.updated
  }
}

export { Page }
