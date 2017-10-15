const COMPONENTS_PATH = 'src/components'
const CONTAINERS_PATH = 'src/containers'
const { join } = require('path')

module.exports = data => {
  const actions = []
  const { base } = data
  const explodedBase = base.split('/') // ['gear', 'mobile', 'Phone']
  const name = explodedBase[explodedBase.length - 1]
  const containerName = name + 'Container'
  const containerBase = [...explodedBase.filter(e => e !== name), containerName].join('/')
  const pathToContainer = explodedBase.map(e => '../').join('') // ../../../
  const explodedSrc = COMPONENTS_PATH.split('/').filter((e, i) => i > 0) // ['components']
  const pathToRoot = explodedSrc.map(c => '../').join('')

  data.pathBack = pathToContainer + pathToRoot + 'components'
  data.componentName = name
  data.containerName = containerName
  actions.push({
    type: 'add',
    path: `${CONTAINERS_PATH}/${containerBase}/${containerName}.js`,
    templateFile: join(__dirname, 'container.js.hbs')
  })
  actions.push({
    type: 'add',
    path: `${CONTAINERS_PATH}/${containerBase}/index.js`,
    templateFile: join(__dirname, 'index.js.hbs')
  })
  return actions
}
