import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import api from '../assets/images/api.jpg'

const EmployeeDirectory = props => (
  <Layout>
    <Helmet>
      <title>The Work | Erik Shumkov</title>
      <meta name="description" content="Generic Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Employee Directory</h1>
          </header>
          <span className="image main">
            <img src={api} alt="" />
          </span>
          <h2>
            Utmaning: Bygga en lista med kort på de anställda, samt kunna öppna
            varje individuellt kort för att få fram mer information.
          </h2>
          <h3>
            Lösning: Sidan är byggd med HTML, SCSS och JavaScript från botten
            och upp. Datan hämtas med Fetch från randomuser.me's API.
          </h3>
          <h3>
            Resultat: En lista med 12 anställda. Man kan öppna varje
            individuellt kort så kommer informationen upp i en "modal", det går
            även att bläddra fram och tillbaka mellan de anställda.
          </h3>
          <a
            href="https://erikshumkov.github.io/techdegree-project-ten/"
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

export default EmployeeDirectory
