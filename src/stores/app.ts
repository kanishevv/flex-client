import type { IBlock } from '@/interfaces'
import { defineStore } from 'pinia'

export enum Tools {
  'move' = 'move',
  'block' = 'block',
  'text' = 'text',
  'image' = 'image',
  'video' = 'video',
  'form' = 'form'
}

interface ToolState {
  current: Tools
}

interface LayerState {
  panel: Boolean
  selected: IBlock[] | []
}

interface State {
  tools: ToolState
  layers: LayerState
}

export const useAppStore = defineStore('app', {
  state: (): State => {
    return {
      tools: {
        current: Tools.move
      },
      layers: {
        panel: false,
        selected: []
      }
    }
  },
  actions: {
    selectTool(name: string): void {
      switch (name) {
        case 'block':
          this.tools.current = Tools.block
          break

        case 'text':
          this.tools.current = Tools.text
          break

        case 'image':
          this.tools.current = Tools.image
          break

        case 'video':
          this.tools.current = Tools.video
          break

        default:
          this.tools.current = Tools.move
          break
      }
    },
    toggleLayersPanel(): void {
      this.layers.panel = !this.layers.panel
    },
    selectLayer(block: IBlock) {
      this.layers.selected[0] = block
    }
  }
  // persist: true
})
