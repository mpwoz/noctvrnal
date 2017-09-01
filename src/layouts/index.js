import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import 'typeface-source-sans-pro'

import './index.scss'
import styles from './header.module.scss';

const Header = () => (
  <div className={styles.header}>
    <div className={styles.linkList}>
      <h1 style={{margin: 0}}>

        <Link to="/">Home</Link>
        <Link to="/work/">Work</Link>

        <Link
          to="/"
          style={{
            color: 'white',
          }}>
          Noctvrnal
        </Link>

        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

      </h1>
    </div>
  </div>
)

const TemplateWrapper = ({children}) => (
  <div style={{
    background: 'black',
  }}>
    <Helmet
      title="Noctvrnal"
      meta={[
        {name: 'description', content: 'Sample'},
        {name: 'keywords', content: 'sample, something'},
      ]}
    />
    <Header/>
    <div
      style={{
        margin: '3rem auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
