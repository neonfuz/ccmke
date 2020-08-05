import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import classes from './Services.module.sass'

const Services = ({services, image}) => (
  <div className={`section ${classes.Services}`}>
    <div className="container">
      <div className="columns is-vcentered">
        <div className="column is-8">
          <figure className="image">
            <PreviewCompatibleImage
              imageInfo={{alt: 'services graphic', image}}
              className={classes.image} />
          </figure>
        </div>
        <div className="column is-4">
          <h2 className="title is-size-2 has-text-centered">Our Services</h2>
          <ul>
            { services.map(service => (
              <li>
                <AnchorLink to={`/services#${service.id}`}>
                  <button>
                    {service.name}
                  </button>
                </AnchorLink>
              </li>
            )) }
          </ul>
        </div>
      </div>
    </div>
  </div>
)

const LiveServices = () => {
  const {markdownRemark: {frontmatter: {services, image}}} = useStaticQuery(graphql`
    query ServicesComponent {
      markdownRemark(frontmatter: {templateKey: {eq: "services-page" } }) {
        frontmatter {
          services {
            name
            id
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
  `)
  return <Services {...{services, image}} />
}

export default ({services}) => {
  if (services)
    return <Services {...services} />
  else
    return <LiveServices />
}
