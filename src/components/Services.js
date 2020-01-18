import React from 'react'
import services from '../img/services.png'
import ourServices from '../img/our services.png'

export default () => (
  <div style={{
    background: '#837bea'
  }}>
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-8">
            <figure className="image">
              <img src={services} alt="services" style={{ border: 'solid black 1em' }} />
            </figure>
          </div>
          <div className="column is-4">
            <figure className="image">
              <img src={ourServices} alt="our services" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
)
