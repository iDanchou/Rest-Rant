const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
            <img src="/images/manja-vitolic-gKXKBY-C-Dk-unsplash.jpg" alt="A black and white cat" />
              </div>
          Photo by <a href="https://unsplash.com/@madhatterzone?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Manja Vitolic</a> on <a href="https://unsplash.com/photos/black-and-white-cat-lying-on-brown-bamboo-chair-inside-room-gKXKBY-C-Dk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

          </main>
      </Def>
    )
  }
  

module.exports = error404
