import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

import logo from '../img/cc logo white.svg'

const Hero = ({ image, logo }) => (
  <div className="full-width-image hero is-fullsize"
    style={{
      backgroundImage:
        `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ),url(${
        !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      backgroundPosition: `center 75px`,
      backgroundAttachment: `fixed`,
      backgroundSize: '100vw 52vw',
      height: 'calc(100vh - 3em)',
    }}>
    <div className="hero-body" style={{
      paddingTop: '75px',
    }}>
      <div className="container" style={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <img src={logo} style={{
          maxWidth: '70vw',
          maxHeight: '50vh',
          margin: '8rem',
        }} />
      </div>
    </div>
  </div>
)

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
            <div className="content">
              <h3 className="has-text-weight-semibold is-size-2">
                {heading}
              </h3>
              <p>{description}</p>
            </div>
            <Features gridItems={intro.blurbs} />
            <div className="columns">
              <div className="column is-12 has-text-centered">
                <Link className="btn" to="/products">
                  See all products
                      </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

const Stories = () => (
  <div className="container">
    <div className="column is-12">
      <h3 className="has-text-weight-semibold is-size-2">
        Latest stories
    </h3>
      <BlogRoll />
      <div className="column is-12 has-text-centered">
        <Link className="btn" to="/blog">
          Read more
      </Link>
      </div>
    </div>
  </div>
)

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
    <>
      <Hero {...{ image, logo }} />
      <Mainpitch mainpitch={mainpitch} />
      <Body {...{ title, heading, subheading, description, intro }} />
      <Stories />
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
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
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
}
}
}
`
