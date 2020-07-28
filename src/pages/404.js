import React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <div className="container">
      <section className="section">
        <h1 className="title">404 Not Found</h1>
        <p>Page not found.</p>
        <a className="btn"
           style={{marginTop: '1em'}}
           onClick={() => window.history.back()}>
          Back
        </a>
      </section>
    </div>
  </Layout>
)

export default NotFoundPage
