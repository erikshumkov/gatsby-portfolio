import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import gallery from '../assets/images/gallery.jpg'

const Gallery = props => (
  <Layout>
    <Helmet>
      <title>The Work | Erik Shumkov</title>
      <meta name="description" content="Generic Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>API Gallery</h1>
          </header>
          <span className="image main">
            <img src={gallery} alt="" />
          </span>
          <h2>
            Utmaning: Bygga ett galleri som hämtar bilder från Flickr's API.
          </h2>
          <h3>
            Lösning: Använde React, React Router och Axios för sök funktionen.
            Stylingen gjordes i CSS.
          </h3>
          <h3>
            Resultat: Man kan söka i Flickr's galleri med hjälp av tags / sökord
            för att få fram de senaste bilderna under det sökordet.
          </h3>
          <a
            href="https://erikshumkov.github.io/react-gallery"
            target="_blank"
            className="button special icon fa-home"
          >
            öppna i ny flik
          </a>
        </div>
      </section>
    </div>
  </Layout>
)

export default Gallery
