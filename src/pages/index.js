import React, { Component } from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import ecom from '../assets/images/ecommerce-project.jpg'
import gallery from '../assets/images/gallery.jpg'
import api from '../assets/images/api.jpg'
import weatherapp from '../assets/images/weatherapp.jpg'

class HomeIndex extends Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="The Work | Erik Shumkov"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        ></Helmet>

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article
              style={{
                backgroundImage: `url(${ecom})`,
                backgroundSize: 'cover',
              }}
            >
              <header className="major">
                <h3>#1 Ecommerce Website</h3>
                <p>HTML, SCSS, React</p>
              </header>
              <Link to="/ecommerce" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${weatherapp})` }}>
              <header className="major">
                <h3>#2 Weather App</h3>
                <p>HTML, CSS, React Hooks</p>
              </header>
              <Link to="/weatherapp" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${gallery})` }}>
              <header className="major">
                <h3>#3 API Gallery</h3>
                <p>HTML, CSS, React</p>
              </header>
              <Link to="/gallery" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${api})` }}>
              <header className="major">
                <h3>#4 Employee Directory</h3>
                <p>HTML, SCSS, JavaScript, Fetch API</p>
              </header>
              <Link to="/employeedirectory" className="link primary"></Link>
            </article>
          </section>
          {/* <section id="two">
            <div className="inner">
              <header className="major">
                <h2>About</h2>
              </header>
            </div>
          </section> */}
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
