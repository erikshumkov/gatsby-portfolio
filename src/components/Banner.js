import React from 'react'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header>
        <h2 className="intro-hi">Hej och välkommen! 🙂</h2>
        <h2 className="intro-pres">
          Jag heter <strong>Erik</strong>, jag är en{' '}
          <strong>front-end utvecklare</strong> som är nischad till
          webbutveckling. Jag gillar att bygga och designa hemsidor / webbappar.
          Några teknologier jag har jobbat med den senaste tiden är:
          <br />
          <strong>
            JavaScript (ES6+), React, Ajax (Axios), <br />
            HTML & CSS / SCSS.
          </strong>
        </h2>
      </header>
      {/* <div className="content">
        <p>Frontend Utvecklare</p>
        <ul className="actions">
          <li>
            <a href="#one" className="button next scrolly">
              Check it out
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  </section>
)

export default Banner
