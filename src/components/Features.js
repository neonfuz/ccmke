import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.name} className="column is-2">
        <section className="section light" style={{ padding: 0 }}>
          <figure style={{ margin: 0 }}>
            <div className="has-text-centered">
              <div
                style={{
                  width: '100%',
                  display: 'inline-block',
                }}
              >
                <PreviewCompatibleImage imageInfo={item} />
              </div>
              <figcaption style={{
                fontSize: '1.2rem',
                lineHeight: '.2rem',
                fontStyle: 'normal',
                paddingTop: '1em',
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
