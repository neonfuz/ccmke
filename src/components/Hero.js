import React from 'react'
import Logo from '../img/cc logo white.svg'

export default ({ image }) => (
  <div className="full-width-image hero is-fullsize"
    style={{
      backgroundImage:
        `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ),url(${
        !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      backgroundPosition: `top`,
      backgroundAttachment: `fixed`,
      backgroundSize: '100vw 52vw',
      maxHeight: '52vw',
      height: '80vh',
    }}>
    <div className="hero-body">
      <div className="container" style={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Logo style={{
          maxWidth: '70vw',
          maxHeight: '50vh',
        }} />
      </div>
    </div>
  </div>
)
