import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Sticky from '../components/react-sticky-fill'
import Features from '../components/Features'
import Services from '../components/Services'
import ImageBar from '../components/ImageBar'

const Mainpitch = ({ mainpitch }) => (
    <div className="container">
      <div className="section">
        <div className="content">
          <h1 className="title is-size-2 has-text-centered"
              style={{marginBottom: '1em'}}>
            {mainpitch.title}
          </h1>
          <h3 className="subtitle has-text-justified">
            {mainpitch.description}
          </h3>
          <ImageBar images={mainpitch.pics} />
        </div>
      </div>
    </div>
  )

const Body = ({ intro }) => (
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-12">
            <div className="content has-text-centered">
              <h3 className="title is-size-2 is-spaced">
                {intro.heading}
              </h3>
              <p className="subtitle is-size-4" style={{marginBottom: '2em'}}>{intro.subheading}</p>
            </div>
            <Features gridItems={intro.blurbs.map(item => ({ ...item, alt: item.name }))} />
            <div className="columns">
              <div className="column is-12 has-text-centered">
                <Link className="btn" style={{marginTop: '1em'}} to="/about">
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )


export const IndexPageTemplate = ({
  images,
  title,
  mainpitch,
  intro,
  services,
}) => (
    <>
      <Hero {...{ images }} />
      <Sticky><Navbar /></Sticky>
      <div style={{background: 'linear-gradient(0deg, #a49eed 0%, #d7d6e6 100%)'}}>
        <Mainpitch mainpitch={mainpitch} />
        <hr />
        <Body {...{ title, intro }} />
        <hr />
        {services && <Services {...{services}} />}
      </div>
    </>
  )

IndexPageTemplate.propTypes = {
  images: PropTypes.array, // TODO specify this further
  title: PropTypes.string,
  mainpitch: PropTypes.object,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.indexPage

  return (
    <Layout noNavbar transparent>
      <IndexPageTemplate
        images={frontmatter.images}
        title={frontmatter.title}
        mainpitch={frontmatter.mainpitch}
        intro={frontmatter.intro}
        services={data.servicesPage.frontmatter.services}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    indexPage: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
    servicesPage: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    indexPage: markdownRemark(frontmatter: {templateKey: {eq: "index-page" } }) {
      frontmatter {
        title
        images {
          image {
            childImageSharp {
              fluid(maxWidth: 1600, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        mainpitch {
          title
          description
          pics {
            alt
            image {
              childImageSharp {
                fluid(maxHeight: 380, quality: 80) {
                  ...GatsbyImageSharpFluid
                  aspectRatio
                }
              }
            }
          }
        }
        intro {
          heading
          subheading
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, maxHeight: 240, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            name
            role
          }
        }
      }
    }
    servicesPage: markdownRemark(frontmatter: {templateKey: {eq: "services-page" } }) {
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
    }
  }
`
