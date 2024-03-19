const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>REST-RANT</h1>
              <div>
            <img src="/images/chad-montano-eeqbbemH9-c-unsplash.jpg" alt="A delicious stack of panackes" />
            Photo by <a href="https://unsplash.com/@briewilly">Chad Montano</a> on <a href="https://unsplash.com/">Unsplash</a>
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = home
