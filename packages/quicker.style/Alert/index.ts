import { render, h } from 'vue'
import QAlert from './QAlert.vue'

interface Params {
  closable?: boolean
  variant?: string
  duration?: number
  message: string
}

let instances: Array<Params> = []

const QAlertProgrammatic = {
  show(params: Params) {
    instances.push({
      closable: params.closable,
      variant: params.variant,
      duration: 3000,
      message: params.message
    })

    const container = h(
      'div',
      { class: 'q-toast-stack' },
      instances.map((instance) => {
        return h(
          QAlert,
          {
            open: true,
            ...instance,
            onHide: () => {
              instances = instances.filter((inst) => inst !== instance)
            }
          },
          instance.message
        )
      })
    )

    render(container, document.body)
  }
}

export { QAlert, QAlertProgrammatic }
