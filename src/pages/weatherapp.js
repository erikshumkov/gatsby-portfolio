import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import weather from '../assets/images/weatherapp.jpg'

const WeatherApp = props => (
  <Layout>
    <Helmet>
      <title>The Work | Erik Shumkov</title>
      <meta name="description" content="Generic Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Weather App</h1>
          </header>
          <span className="image main">
            <img src={weather} alt="" />
          </span>
          <h2>Utmaning: Lära mig React Hooks.</h2>
          <h3>
            Lösning: Bygga en väder applikation med hjälp av React Hooks.
            Hämtade datan från Dark Sky API med Axios. Sök funktionen använder
            google för att hitta platser och koordinater med "react places
            autocomplete".
          </h3>
          <h3>
            Resultat: En funktionerande app som sparar sök historik i local
            storage.
          </h3>
          <a
            href="https://erikshumkov.github.io/weather-app/"
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

export default WeatherApp
