import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Services from '../components/Services'

export const ServicesPageTemplate = ({
  services,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content

  return (
    <div className="section">
      <Services {...{services}} />
      <hr />
      <div className="container">
        <PageContent className="content" content={content} />
      </div>
    </div>
  )
}

ServicesPageTemplate.propTypes = {
  services: PropTypes.object,
  content: PropTypes.string
}

const ServicesPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <ServicesPageTemplate
        services={frontmatter.services}
        content={html}
        contentComponent={HTMLContent}
      />
    </Layout>
  )
}

ServicesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
      html: PropTypes.string,
    }),
  }),
}

export default ServicesPage

export const pageQuery = graphql`
  query ServicesPageTemplate {
    markdownRemark(frontmatter: {templateKey: {eq: "services-page" } }) {
      frontmatter {
        services {
          list {
            name
            link
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
      html
    }
  }
`
