import React from 'react'
import Sticky from './react-sticky-fill'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const styles = {
  Services: {color: 'white'},
  image: {
    border: 'solid #9f98eb 1em',
    margin: '6rem 0',
  },
  button: {
    background: 'linear-gradient( #9690da, #565281 )',
    padding: '1rem',
    width: '100%',
    borderRadius: '1rem',
    border: 'solid #768 .1em',
    color: 'white',
    fontSize: '1.4em',
  },
  heading: {
    color: 'black',
    fontFamily: 'Abril Fatface, cursive',
    textAlign: 'center',
    fontSize: '3em',
  },
}


export default ({services: {image, list}}) => (
  <div className="container" style={styles.Services}>
    <div className="section">
      <div className="columns">
        <div className="column is-8">
          <Sticky top="6rem">
            <figure className="image">
              <PreviewCompatibleImage
                imageInfo={{alt: 'services graphic', image}}
                style={styles.image} />
            </figure>
          </Sticky>
        </div>
        <div className="column is-4">
          <h2 style={styles.heading}>Our Services:</h2>
          <ul>
            { list.map(service => (
              <li>
                <a href={service.link}>
                  <button style={styles.button}>
                    {service.name}
                  </button>
                </a>
              </li>
            )) }
          </ul>
        </div>
      </div>
    </div>
  </div>
)
