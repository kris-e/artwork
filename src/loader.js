export default function ImageLoader({ src, width, quality }) {
  return `https://kristinerken.com/${src}?w=${width}&q=${quality || 75}`
}
