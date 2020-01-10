import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/cc logo white.svg'
import kaleidoscope from '../img/background.jpg'

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
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
        style={{
          background: '#837bea'
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
            <div className="navbar-end has-text-centered is-size-4">
              <Link className="navbar-item" to="/"
                style={{ color: 'white' }}>
                Home
              </Link>
              <Link className="navbar-item" to="/about"
                style={{ color: 'white' }}>
                About Us
              </Link>
              <Link className="navbar-item" to="/services"
                style={{ color: 'white' }}>
                Services
              </Link>
              <Link className="navbar-item" to="/contact"
                style={{ color: 'white' }}>
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
