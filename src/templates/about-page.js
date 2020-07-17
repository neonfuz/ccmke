import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Image from '../components/PreviewCompatibleImage'

const Intro = ({image, imageText, body}) => (
  <div className="columns">
    <div className="column is-4">
      <Image imageInfo={{image, alt: imageText}} />
      {/* TODO: Replace this with loading image */}
      {/* TODO: style text more */}
    </div>
    <div className="column is-8" style={{
      fontSize: '1.8rem',
      lineHeight: '1.5em',
    }}>
      {body}
    </div>
  </div>
)

Intro.propTypes = {
  image: PropTypes.string,
  imageText: PropTypes.string,
  body: PropTypes.string,
}

const TherapistSection = ({id, image, name, phone, email, specialties, body}) => (
  <>
    <div className="section" id={id}>
      <div style={{
        float: 'left',
        width: '33%',
        marginRight: '2em',
        marginBottom: '2em',
        fontSize: '1.5rem'
      }}>
        <Image imageInfo={{image, alt: `${name} picture`}} />
      </div>
      <div style={{float: 'right'}}>
        {!specialties ? null : (
          <>
            <div style={{fontWeight: 'bold'}}>Specialties:</div>
            <ul style={{fontSize: '0.85em', marginLeft: '1em'}}>
              {specialties.map(item => (<li key={item}>{item}</li>))}
            </ul>
          </>
        )}
      </div>
      <div>
        <div style={{
          fontWeight: 'bold',
        }}>{name}</div>
        <div>{phone}</div>
        <div>{email}</div>
      </div>
      <div className="is-clearfix" style={{fontSize: '0.9em', padding: '0.75rem'}} >
        {body}
      </div>
    </div>
    <hr />
  </>
)

TherapistSection.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  specialties: PropTypes.arrayOf(
    PropTypes.string
  ),
  body: PropTypes.string,
}

const Therapists = ({therapists}) => (
  <>
    {therapists.map(t => (
      <TherapistSection key={t.id} {...t} />
    ))}
  </> // TODO: is okay to just return an array here?
)



export const AboutPageTemplate = ({ title, intro, therapists }) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-2 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <Intro {...intro} />
              <hr />
              <Therapists therapists={therapists} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.shape,
  therapists: PropTypes.array,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        title={post.frontmatter.title}
        intro={post.frontmatter.intro}
        therapists={post.frontmatter.therapists}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

// TODO: fix image widths
export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        intro {
          image {
            childImageSharp {
              fluid(maxWidth: 830, quality: 95) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          imageText
          body
        }
        therapists {
          id
          image {
            childImageSharp {
              fluid(maxWidth: 830, quality: 95) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          name
          phone
          email
          specialties
          body
        }
      }
    }
  }
`
