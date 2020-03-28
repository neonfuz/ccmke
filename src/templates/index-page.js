import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Equalizer from 'react-equalizer'

import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Sticky from '../components/react-sticky-fill'
import Features from '../components/Features'
import Services from '../components/Services'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const Mainpitch = ({
  mainpitch,
}) => (
    <div className="container">
      <div className="section">
        <div className="content">
          <div className="tile">
            <h1 className="title">{mainpitch.title}</h1>
          </div>
          <div className="tile">
            <h3 className="subtitle">{mainpitch.description}</h3>
          </div>
          <Equalizer style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%',
          }} height={320}>
            {mainpitch.pics.map(({width, ...info}, i) => (
              <PreviewCompatibleImage imageInfo={info} style={{
                border: 'solid #837bea .7em',
                minWidth: `${width}%`
              }} />
            ))}
          </Equalizer>
        </div>
      </div>
    </div>
  )

const Body = ({
  heading,
  description,
  intro,
}) => (
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content has-text-centered">
              <h3 className="title is-size-2 is-spaced">
                {heading}
              </h3>
              <p className="subtitle is-size-4" style={{marginBottom: '2em'}}>{description}</p>
            </div>
            <Features gridItems={intro.blurbs.map(item => ({ ...item, alt: item.name }))} />
            <div className="columns">
              <div className="column is-12 has-text-centered">
                <Link className="btn" style={{marginTop: '1em'}} to="/products">
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

const HR = () => <hr style={{
  margin: '2rem 8rem',
  backgroundColor: '#9f98eb',
}}/>

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  services,
}) => (
    <>
      <Hero {...{ image }} />
      <Sticky zIndex="2">
        <Navbar />
      </Sticky>
      <Mainpitch mainpitch={mainpitch} />
      <HR />
      <Body {...{ title, heading, subheading, description, intro }} />
      <HR />
      <Services {...{services}} />
    </>
  )

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout noNavbar>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        services={frontmatter.services}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: {templateKey: {eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
        }
      }
      heading
      subheading
      mainpitch {
        title
        description
        pics {
          alt
          width
          image {
            childImageSharp {
              fluid(maxWidth: 320, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      description
      intro {
        blurbs {
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          name
          role
        }
        heading
        description
      }
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
}`
