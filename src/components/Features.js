import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="Features">
    {gridItems.map(item => (
      <section className="section" style={{ padding: 0 }}>
        <a href={`/about#${item.id}`}>
          <figure style={{ margin: 0 }}>
            <div style={{ width: '100%', display: 'inline-block' }}>
              <PreviewCompatibleImage className="no-shadow" imageInfo={item} style={{ borderRadius: '50%' }}/>
            </div>
            <figcaption className="has-text-centered">
              <p className="has-text-weight-bold">{item.name}</p>
              <p className="is-italic">{item.role}</p>
            </figcaption>
          </figure>
        </a>
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
