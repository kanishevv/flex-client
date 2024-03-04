import {
  type IVideoData,
  VideoControlsItem,
  VideoCrossorigin,
  VideoPreload
} from '@/interfaces/IVideo'

class VideoData implements IVideoData {
  src: string
  controls: boolean
  width: string
  height: string
  autoplay: boolean
  loop: boolean
  muted: boolean
  poster: string
  preload: VideoPreload
  controlslist: VideoControlsItem[]
  playsinline: boolean
  crossorigin: VideoCrossorigin

  constructor(parameters?: IVideoData) {
    this.src = parameters?.src || ''
    this.controls = parameters?.controls || true
    this.width = parameters?.width || ''
    this.height = parameters?.height || ''
    this.autoplay = parameters?.autoplay || false
    this.loop = parameters?.loop || false
    this.muted = parameters?.muted || false
    this.poster = parameters?.poster || ''
    this.preload = parameters?.preload || VideoPreload.Auto
    this.controlslist = parameters?.controlslist || []
    this.playsinline = parameters?.playsinline || false
    this.crossorigin = parameters?.crossorigin || VideoCrossorigin.Anonymous
  }
}

export { VideoData }
