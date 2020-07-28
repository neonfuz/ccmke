import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import './Features.module.sass'

const FeatureGrid = ({ gridItems }) => (
  <div className="Features">
    {gridItems.map(item => (
      <section className="section" style={{ padding: 0 }}>
        <figure style={{ margin: 0 }}>
          <div>
            <div style={{ width: '100%', display: 'inline-block' }}>
              <PreviewCompatibleImage className="no-shadow" imageInfo={item} style={{ borderRadius: '50%' }}/>
            </div>
            <figcaption className="has-text-centered">
              <p className="has-text-weight-bold">{item.name}</p>
              <p className="is-italic">{item.role}</p>
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
