import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import gatsbyLogo from '../images/gatsby-icon.png'

const isActive = ({ isCurent }) => {
  return { className: isCurrent ? 'active' : 'navlink' }
}

const NavLink = props => <Link getProps={isActive} {...props} />

class Header extends React.Component {
  componentDidMount() {

  }

  render() {
    const { siteTitle } = this.props

    return(
      <div
        style={{
          background: `rebeccapurple`,
          marginBottom: `1.45rem`,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
          }}
        >
          { /* Title / Logo */}
          <span
            style={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <img 
              src={gatsbyLogo}
              alt="Gatsby Couture Logo"
              style={{
                borderRadius: '50%',
                border: '3px solid orange',
                margin: '0 5px',
                width: '50px',
              }}
            />
          </span>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
