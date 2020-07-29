import React from 'react'
import BackgroundSlider from 'react-background-slider'

const style = {
  hero: {
    height: 'calc(100vh - 95px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: '#00000060',
    padding: '1em',
  },
  logo: {
    maxHeight: '80%',
    maxWidth: '80%',
    width: '100%',
  },
  arrow: {
    color: '#00000000',
    fontSize: '5em',
  },
}

const getSharpImage = minWidth => ({image}) => {
  if (!image.childImageSharp)
    return image

  const images = image.childImageSharp.fluid.srcSet
    .split(',\n')
    .map(src => {
      const [line, file, width] = src.match(/(.*) ([0-9]*)w$/)
      return { width: Number(width), file }
    })

  const match = [...images, {width: Math.infinity, file: image}]
        .filter(a => a.width >= minWidth)
        .reduce((a, b) => a.width < b.width ? a : b)

  return match.file
}

// default to 1024 for SSR
const windowWidth = typeof window !== "undefined" ? window.innerWidth : 1024

const useWidth = () => {
  const [width, setWidth] = React.useState(windowWidth())
  const updateWidth = () => setWidth(windowWidth())
  React.useEffect(() => {
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  })
  return width
}

export default ({ images }) => {
  const width = useWidth()
  const sizedImages = images.map(getSharpImage(width))
  return (
    <>
      <BackgroundSlider
        duration={5}
        transition={1}
        images={sizedImages} />
      <div style={style.hero}>
        <div style={style.arrow}>{'<'}</div>
        <img style={style.logo}
             src="/img/logo.svg"
             alt="Creative Counseling of Milwaukee" />
        <div style={style.arrow}>{'>'}</div>
      </div>
    </>
  )
}
