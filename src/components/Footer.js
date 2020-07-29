import React from 'react'
import { Link } from 'gatsby'
import Logo from '../img/logo.svg'

// TODO: fix fields up

const Footer = class extends React.Component {
  render() {
    return (
      <footer className={`${styles.Footer} has-background-black has-text-white-ter`}>
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
                        <Link className="navbar-item" to="/contact">
                          Contact
                        </Link>
                      </li>
                      <li>
                        <Link className="navbar-item" to="/services">
                          Services
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
                </div>
              </div>
            </div>
            <div className="column">
              <section className="section">
                <h2 className="title">Contact Us:</h2>
                <div className="field">
                  <div className="control">
                    <div className="label">
                      Name
                      <input className="input" name="name" type="name" value=""/>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <div className="control has-icons-left">
                    <label className="label">
                      Email
                      <input className="input" name="email" type="email" value="" />
                    </label>
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <label className="label">
                          Message
                          <textarea className="textarea" name="message"></textarea>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
