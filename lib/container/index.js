const glob = require('glob')

module.exports = {
  description: 'Add a new container',
  prompts: [{
    type: 'list',
    name: 'base',
    message: 'component base 🐟',
    choices: answers => {
      const allFolders = glob.sync('src/components/**/index.js')
      const components = allFolders.map(folder => {
        const BASE = 'src/components/'
        const component = folder.split(BASE)[1].split('/index.js')[0]
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
    data.cool = 'cool'
    console.log(data)

    return actions
  }
}
