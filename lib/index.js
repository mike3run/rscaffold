const componentGenerator = require('./component')
const containerGenerator = require('./container')
const autocomplete = require('inquirer-autocomplete-prompt')

module.exports = plop => {
  plop.setPrompt('autocomplete', autocomplete)
  plop.setGenerator('component', componentGenerator)
  plop.setGenerator('container', containerGenerator)
}
