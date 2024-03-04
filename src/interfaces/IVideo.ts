import type { IComponent } from './IComponent'

enum VideoPreload {
  None = 'none',
  MetaData = 'metadata',
  Auto = 'auto'
}

enum VideoControlsItem {
  NoDownload = 'nodownload',
  NoFullscreen = 'nofullscreen',
  NoremotePlayback = 'noremoteplayback',
  Autoplay = 'autoplay',
  Loop = 'loop',
  Muted = 'muted',
  Playsinline = 'playsinline'
}

enum VideoCrossorigin {
  Anonymous = 'anonymous',
  UseCredentials = 'use-credentials'
}

type IVideoData = {
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
}

interface IVideo extends IComponent {
  data: IVideoData
}

export { type IVideo, type IVideoData, VideoPreload, VideoControlsItem, VideoCrossorigin }
