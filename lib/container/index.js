const actions = require('./actions')
const source = require('./fuzzy')
const choicesGenerator = require('./choices')
const components = choicesGenerator()

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
