import React, {useState} from 'react'
import { Link } from 'gatsby'
import logo from '../img/cc logo white.svg'

const Navbar = ({ fixed, navRef }) => {
  const [active, setActive] = useState(false)
  const toggleHamburger = () => setActive(active => !active)
  return (
    <nav
      className={`navbar is-transparent${fixed ? ' is-fixed-top' : ''}`}
      role="navigation"
      aria-label="main-navigation"
      style={{
        background: '#837bea',
        borderBottom: 'solid #3c3ea3 .2rem',
      }}
      ref={navRef}
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo" style={{ paddingLeft: '0', paddingTop: '0', paddingBottom: '0' }}>
            <img src={logo} alt="Creative Counseling of Milwaukee" style={{ height: '75px', maxHeight: '75px' }} />

          </Link>
          {/* Hamburger menu */}
          <button
            className={`navbar-burger burger ${active ? 'is-active' : ''}`}
            data-target="navMenu"
            onClick={toggleHamburger}
            style={{ background: 'none', border: 'none' }}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div
          id="navMenu"
          className={`navbar-menu ${active ? 'is-active' : ''}`}
        >
          <div className="navbar-end has-text-centered is-size-4">
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

export default Navbar
