import React from 'react'
import BackgroundSlider from 'react-background-slider'
import Logo from '../img/cc logo white.svg'

export default ({ images }) => {
  const imglist = images.map(({image}) => !!image.childImageSharp ? image.childImageSharp.fluid.src : image)
  console.log(JSON.stringify(imglist, null, 2))
  return (
    <>
      <BackgroundSlider
        duration={5}
        transition={2}
        images={imglist}
      />
      <div className="hero-body" style={{
        height: 'calc(100vh - 120px)',
        background: '#00000060',
      }}>
        <div className="container" style={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}>
          <Logo style={{
            maxWidth: '70vw',
            maxHeight: '50vh',
          }} />
        </div>
      </div>
    </>
  )
}
