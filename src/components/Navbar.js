import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/cc logo white.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent is-fixed-top"
        role="navigation"
        aria-label="main-navigation"
        style={{
          background: '#837bea',
          border: 'solid #3c3ea3 .2rem',
        }}
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo" style={{ paddingLeft: '0', paddingTop: '0', paddingBottom: '0' }}>
              <img src={logo} alt="Creative Counseling of Milwaukee" style={{ height: '75px', maxHeight: '75px' }} />

            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered is-size-4 ">
              <Link className="navbar-item light" to="/">
                Home
              </Link>
              <Link className="navbar-item light" to="/about">
                About Us
              </Link>
              <Link className="navbar-item light" to="/services">
                Services
              </Link>
              <Link className="navbar-item light" to="/contact">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
