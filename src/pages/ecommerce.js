import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'
import ecom from '../assets/images/ecommerce-project.jpg'
import ecom2 from '../assets/images/ecommerce-project2.jpg'

const Ecommerce = props => (
  <Layout>
    <Helmet>
      <title>The Work | Erik Shumkov</title>
      <meta name="description" content="Generic Page" />
    </Helmet>

    <div id="main" className="alt ecommerce">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Ecommerce Website</h1>
          </header>
          <span className="image main">
            <img src={ecom} alt="" />
          </span>
          <p className="image-info">Första sidan. Visar kategorierna.</p>
          <h2>
            {/* Utmaning: Det är svårt att hitta bra vinterkläder på nätet. Jag
            ville skapa en hemsida där det är lätt att hitta snygga kläder som
            är lätt att hantera. */}
            Utmaning: Bygga en portfölj med professionella hemsidor och projekt.
          </h2>
          <span className="image main">
            <img src={ecom2} alt="" />
          </span>
          <p className="image-info">Shopping Carten är öppen.</p>
          <h3>
            Lösning: Bygga en Ecommerce Hemsida från början. Började att bygga
            upp allt i HTML och SCSS. För att göra hemsidan dynamisk använde jag
            React och React Router för att lägga till all funktionalitet.
          </h3>
          <h3>
            Resultat: En snygg hemsida som kan användas av företag som vill
            finnas tillgängliga på internet.
          </h3>
          <a
            href="https://erikshumkov.github.io/storage/"
            target="_blank"
            className="button special icon fa-home"
          >
            öppna i ny flik
          </a>
          {/* <a
            href="/"
            className="button special icon fa-file"
            style={{ marginLeft: '20px' }}
          >
            check the code
          </a> */}
        </div>
      </section>
    </div>
  </Layout>
)

export default Ecommerce
