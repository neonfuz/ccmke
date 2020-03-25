import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import styles from './Features.module.sass'

const FeatureGrid = ({ gridItems }) => (
  <div className={styles.Features}>
    {gridItems.map(item => (
      <section className="section" style={{ padding: 0 }}>
        <figure style={{ margin: 0 }}>
          <div classname="has-text-centered">
            <div style={{ width: '100%', display: 'inline-block' }}>
              <PreviewCompatibleImage imageInfo={item} style={{ borderRadius: '50%' }}/>
            </div>
            <figcaption>
              <p className={styles.name}>{item.name}</p>
              <p className={styles.role}>{item.role}</p>
            </figcaption>
          </div>
        </figure>
      </section>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      name: PropTypes.string,
      role: PropTypes.string,
    })
  ),
}

export default FeatureGrid
