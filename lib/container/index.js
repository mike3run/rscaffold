const glob = require('glob')
const COMPONENTS_PATH = 'src/components'

module.exports = {
  description: 'Add a new container',
  prompts: [{
    type: 'list',
    name: 'base',
    message: 'component base 🐟',
    choices: answers => {
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
  }],
  actions: data => {
    const actions = []
    const { base } = data
    const explodedBase = base.split('/') // ['gear', 'mobile', 'Phone']
    const name = explodedBase[explodedBase.length - 1]
    const pathToContainer = explodedBase.map(e => '../').join('') // ../../../
    const explodedSrc = COMPONENTS_PATH.split('/').filter((e, i) => i > 0) // ['components']
    const pathToRoot = explodedSrc.map(c => '../').join('')

    data.pathBack = pathToContainer + pathToRoot
    data.componentName = name
    data.containerName = name + 'Container'
    console.log(data)
    return actions
  }
}
