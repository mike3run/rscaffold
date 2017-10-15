const Promise = require('promise')
const fuzzy = require('fuzzy')
const choicesGenerator = require('./choices')
const components = choicesGenerator()

module.exports = (answers, input) => new Promise(resolve => {
  const fuzzyResult = fuzzy.filter(input, components)
  resolve(fuzzyResult.map(el => el.original))
})
