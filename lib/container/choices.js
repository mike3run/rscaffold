const glob = require('glob')
const COMPONENTS_PATH = 'src/components'

module.exports = answers => {
  const allFolders = glob.sync(`${COMPONENTS_PATH}/**/index.js`)
  const components = allFolders.map(folder => {
    const component = folder.split(`${COMPONENTS_PATH}/`)[1].split('/index.js')[0]
    return component
  })
  .filter(folder => {
    const exploded = folder.split('/')
    const parent = exploded[exploded.length - 1]
    const parentLetter = parent.charAt(0)
    // Component folders start with Capital
    return parentLetter === parentLetter.toUpperCase()
  })
  return components
}
