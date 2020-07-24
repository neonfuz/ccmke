import React from 'react'
import BackgroundSlider from 'react-background-slider'
import Logo from '../img/cc logo white.svg'

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
  },
  arrow: {
    color: 'white',
    fontSize: '5em',
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
