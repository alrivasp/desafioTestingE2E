// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  'Probar cambios de estilos en titulo': browser => {
    browser
      .init()
      .waitForElementVisible('#header')
      .assert.cssProperty('#portada', 'color', 'rgba(255, 0, 0, 1)')
      .end()
  },
}
