import React from 'react'
import PreviewCompatibleImage from './PreviewCompatibleImage'

export default ({images}) => {
  const getAspect = ({image}) => image.childImageSharp ? image.childImageSharp.fluid.aspectRatio : 1
  const barAspect = images.map(getAspect).reduce((a, b) => a + b)
  const getPercent = image => `${getAspect(image)/barAspect*100}%`

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    }} height={320}>
      {images.map((info, i) => (
        <PreviewCompatibleImage
          key={`imagebar-${i}`}
          imageInfo={info}
          style={{ width: getPercent(info) }}
          imgStyle={{ objectFit: 'contain', margin: '1em' }} />
      ))}
    </div>
  )
}
