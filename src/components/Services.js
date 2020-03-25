import React from 'react'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import styles from './Services.module.sass'

export default ({services: {image, list}}) => (
  <div className={"section" + ' ' + styles.Services}>
    <div className="container">
      <div className="columns is-vcentered">
        <div className="column is-8">
          <figure className="image">
            <PreviewCompatibleImage
              imageInfo={{alt: 'services graphic', image}}
              className={styles.image} />
          </figure>
        </div>
        <div className="column is-4">
          <h2 className={styles.heading}>Our Services:</h2>
          <ul>
            { list.map(service => (
              <li>
                <a href={service.link}>
                  <button>
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
