import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Services from '../components/Services'

export const ServicesPageTemplate = ({
  image,
  services,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content

  return (
    <div className="container">
      <Services services={{image, services}}/>
      { services.map(service => (
        <section key={`service=${service.id}`} id={service.id} className="section">
          <hr />
          <h3 className="title">
            {service.name}
          </h3>
          <PageContent className="content" content={service.body} />
        </section>
      )) }
    </div>
  )
}

ServicesPageTemplate.propTypes = {
  services: PropTypes.object,
  // TODO: add image
}

const ServicesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ServicesPageTemplate
        services={frontmatter.services}
        image={frontmatter.image}
        contentComponent={HTMLContent}
      />
    </Layout>
  )
}

ServicesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ServicesPage

export const pageQuery = graphql`
  query ServicesPageTemplate {
    markdownRemark(frontmatter: {templateKey: {eq: "services-page" } }) {
      frontmatter {
        services {
          name
          id
          body
        }
        image {
          childImageSharp {
            fluid(maxWidth: 830, quality: 95) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
