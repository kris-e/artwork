import { YouTubeEmbed } from '@next/third-parties/google'

export default function VideoComponent({ videoId }) {

  return <YouTubeEmbed videoid={videoId} params="controls=1?rel=0" />
}
