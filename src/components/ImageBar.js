import React from 'react'
import PreviewCompatibleImage from './PreviewCompatibleImage'

export default ({images, gap = 3}) => {
  const getAspect = ({image}) => image.childImageSharp ? image.childImageSharp.fluid.aspectRatio : 1
  const barAspect = images.map(getAspect).reduce((a, b) => a + b) / (1 - 0.01*gap)
  const getPercent = image => `${getAspect(image)/barAspect*100}%`

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    }} height={320}>
      {images.filter(a => a).map((info, i) => (
        <PreviewCompatibleImage
          key={`imagebar-${i}`}
          imageInfo={info}
          style={{ width: getPercent(info) }}
          imgStyle={{ objectFit: 'contain' }} />
      ))}
    </div>
  )
}
