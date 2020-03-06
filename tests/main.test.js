QUnit.module('MAIN', {}) 

QUnit.test('TEST')



window.addEventListener('load', () => {
    const appURL = '../calculation.html' // reach out to the html for the app (js-gui)
    const openingTag = '<main class="container mt-5 flex-fill">'
    const closingTag = '</main>' // go grab it!
    fetch(appURL, { method: 'GET' })
      .then(response => {
        return response.text() // returns promise
      })
      .then(txt => {                
        const start = txt.indexOf(openingTag)
        const end = txt.indexOf(closingTag) + closingTag.length
        const html = txt.substring(start, end) // we only want part of the page
        const qunitFixtureBody = document.querySelector('#qunit-fixture')
        qunitFixtureBody.innerHTML = html // put the page into the DOM - the second div associated with this page
        console.info(qunitFixtureBody) // print it out so we can see it (it doesn't get inserted into the page)
        QUnit.start() // start the actual testing - it finds and runs both the tests, defined in QUnit.test()
      })
      .catch(error => {
        console.error('error:', error);
        QUnit.start()
      })
  })

 QUnit.test("TEST Values Equal", assert => {
    const current = document.querySelector('#cOdometer')
    const past = document.querySelector('#pOdometer')
    assert.equal(current, past, "The Values are Equal")
  })

  QUnit.test("TEST Values Negative", assert => {
    const current = document.querySelector('#cOdometer')
    const past = document.querySelector('#pOdometer')
    let x = current - past
    if (x < 0){
        assert.equal(current, past, "The Values are Equal")
    }
  })