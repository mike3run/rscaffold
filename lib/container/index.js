const choicesGenerator = require('./choices')
const actions = require('./actions')

const fuzzy = require('fuzzy')
const components = choicesGenerator()
const Promise = require('promise')

const source = (answers, input) => new Promise(resolve => {
  const fuzzyResult = fuzzy.filter(input, components)
  resolve(fuzzyResult.map(el => el.original))
})

module.exports = {
  description: 'Add a new container',
  prompts: [{
    type: 'autocomplete',
    name: 'base',
    message: 'component base 🐟',
    pageSize: 5,
    choices: components,
    source
  }],
  actions
}
