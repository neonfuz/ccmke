import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.name} className="column is-6">
        <section className="section">
          <figure>
            <div className="has-text-centered">
              <div
                style={{
                  width: '240px',
                  display: 'inline-block',
                }}
              >
                <PreviewCompatibleImage imageInfo={item} />
              </div>
              <figcaption style={{
                fontWeight: 'bold',
                fontSize: '1.5rem',
                lineHeight: '1em',
                fontStyle: 'normal',
              }}>
                <p>{item.name}</p>
                <p>{item.role}</p>
              </figcaption>

            </div>
          </figure>
        </section>
      </div>
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
