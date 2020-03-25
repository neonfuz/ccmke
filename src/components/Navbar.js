import React, {useState} from 'react'
import { Link } from 'gatsby'
import Logo from '../img/cc logo white.svg'

const Navbar = ({ fixed, navRef }) => {
  const [active, setActive] = useState(false)
  const toggleHamburger = () => setActive(active => !active)
  return (
    <nav
      className={`navbar is-transparent${fixed ? ' is-fixed-top' : ''}`}
      role="navigation"
      aria-label="main-navigation"
      style={{
        backgroundImage: 'linear-gradient(180deg, #837bea 0%, #423e75 100%)',
        borderTop: 'solid black .05rem',
        borderBottom: 'solid black .05rem',
      }}
      ref={navRef}
    >
      <div className="container">
        <div className="navbar-brand" style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          <Link to="/" className="navbar-item" title="Logo" >
            <Logo style={{ height: '75px', maxHeight: '75px' }} />
          </Link>
          {/* Hamburger menu */}
          <button
            className={`navbar-burger burger ${active ? 'is-active' : ''}`}
            data-target="navMenu"
            onClick={toggleHamburger}
            style={{ color: 'white', background: 'none', border: 'none' }}
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
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/about">
              About Us
            </Link>
            <Link className="navbar-item" to="/services">
              Services
            </Link>
            <Link className="navbar-item" to="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
