import React from 'react'
import { Link } from 'gatsby'

import Logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

import styles from './Footer.css'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="columns">
                <div className="column">
                  <div className="content has-text-centered">
                    <Logo style={{ width: '14em', height: '10em' }} />
                  </div>
                  <section className="menu">
                    <ul className="menu-list is-right">
                      <li>
                        <Link to="/" className="navbar-item">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link className="navbar-item" to="/about">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link className="navbar-item" to="/products">
                          Products
                        </Link>
                      </li>
                      <li>
                        <Link className="navbar-item" to="/contact/examples">
                          Form Examples
                        </Link>
                      </li>
                      <li>
                        <Link className="navbar-item" to="/blog">
                          Latest Stories
                        </Link>
                      </li>
                      <li>
                        <Link className="navbar-item" to="/contact">
                          Contact
                        </Link>
                      </li>

                      <li>
                        <a
                          className="navbar-item"
                          href="/admin/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Admin
                        </a>
                      </li>
                    </ul>
                  </section>
                  <div className="social">
                    <a title="facebook" href="https://facebook.com">
                      <img
                        src={facebook}
                        alt="Facebook"
                        style={{ width: '1em', height: '1em' }}
                      />
                    </a>
                    <a title="twitter" href="https://twitter.com">
                      <img
                        className="fas fa-lg"
                        src={twitter}
                        alt="Twitter"
                        style={{ width: '1em', height: '1em' }}
                      />
                    </a>
                    <a title="instagram" href="https://instagram.com">
                      <img
                        src={instagram}
                        alt="Instagram"
                        style={{ width: '1em', height: '1em' }}
                      />
                    </a>
                    <a title="vimeo" href="https://vimeo.com">
                      <img
                        src={vimeo}
                        alt="Vimeo"
                        style={{ width: '1em', height: '1em' }}
                      />
                    </a>
                  </div>

                </div>
              </div>
            </div>
            <div className="column">
              <h2>Contact Us:</h2>
              <div className="field">
                <div className="label">Name</div>
                <div className="control">
                  <input className="input" name="name" type="name" value=""/>
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left">
                  <input className="input" name="email" type="email" value="" />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="label">Message</label>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <textarea className="textarea" name="message"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
