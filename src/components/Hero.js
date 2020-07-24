import React from 'react'
import BackgroundSlider from 'react-background-slider'
import Logo from '../img/cc logo white.svg'

const style = {
  hero: {
    height: 'calc(100vh - 95px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#00000060'
  },
  logo: {
    maxHeight: '80%',
    maxWidth: '80%',
  },
  arrow: {
    color: 'white',
    fontSize: '5rem',
  },
}

const getSharpImage = ({image}) =>
      !!image.childImageSharp ? image.childImageSharp.fluid.src : image

export default ({ images }) => (
  <>
    <BackgroundSlider
      duration={5}
      transition={1}
      images={images.map(getSharpImage)} />
    <div style={style.hero}>
      <div style={style.arrow}>{'<'}</div>
      <Logo style={style.logo}/>
      <div style={style.arrow}>{'>'}</div>
    </div>
  </>
)
