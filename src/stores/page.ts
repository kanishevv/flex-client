import type { IBlock, IPage, IPicture, IText, IVideo } from '@/interfaces'
import { defineStore } from 'pinia'
import { PageService } from '@/services'
import { useAppStore } from '.'
import { findFirst, findAll, findAndDeleteFirst, findAndModifyFirst } from 'obj-traverse/lib/obj-traverse'
import Block from '@/classes/Block'
import { Page } from '@/classes/Page'
import type { IImage } from '@/interfaces/IImage'
import { ComponentFactory } from '@/classes/ComponentFactory'

interface State {
  current: IPage | null
  history?: IPage[] | []
  selected: IBlock | IImage | IVideo | IText | null
}

export const usePageStore = defineStore('page', {
  state: (): State => {
    return {
      current: null,
      history: [],
      selected: null
    }
  },
  getters: {
    // selectedBlock: (state: State) => {
    //   return findFirst(state.current, 'data', { id: state.selected })
    // },
    // getBlocksById: (state: State) => {
    //   return (id: string): IBlock[] | boolean => {
    //     return findAll(state.current, 'data', { id: id })
    //   }
    // }
  },
  actions: {
    setState(id: string) {
      PageService.view(id).then((response: IPage) => (this.current = new Page(response)))
    },
    selectBlockState(id: string) {
      const findedComponents = findAll(this.current, 'children', { id: id })

      this.selected = findedComponents ? findedComponents[0] : null
    },
    updateBlockState(component: IBlock | IImage | IVideo | IText) {
      findAndModifyFirst(
        this.current,
        'children',
        { id: component.id },
        component
      )
    },
    createBlock() {
      const store = useAppStore()

      const currentBlock: IBlock | IImage | IVideo | IText = new ComponentFactory().create({
        component: store.tools.current
      })

      if (this.current && currentBlock) {
        this.current.children.push(currentBlock)

        store.selectTool('move')
      }
    },
    updateBlock(block: IBlock) {
      this.selected = block
    },
    removeBlock(id: string): void {
      findAndDeleteFirst(this.current, 'data', { id: id })
    },
    toggleBlockVisible(id: string): void {
      console.log(id)

      const currentBlockState: IBlock | false = findFirst(this.current, 'data', {
        id: id
      })

      if (currentBlockState) currentBlockState.visible = !currentBlockState.visible
    },
    save() {
      PageService.update(this.current.id, this.current).then(
        (response) => console.log(response),
        (error) => console.error(error)
      )
    }
  }
  // persist: true
})
