/**
 * autopack 配置文件加载器
 */

const fs = require('fs')
const mergeWith = require('lodash/mergeWith')
const isArray = require('lodash/isArray')

module.exports = (cwd = process.cwd(), pkg, cliConfig, custumConfig) => {
  const defaultConfig = require('../config/default.config.js')({ pkg, cwd })
  const configPath = `${cwd}/autopack.config.js`

  if (fs.existsSync(configPath)) {
    let config = require(configPath)
    if (typeof config === 'function') {
      config = config({ pkg, cwd, defaultConfig, custumConfig })
    }
    return mergeWith(defaultConfig, config, function (objValue, srcValue) {
      if (isArray(objValue)) {
        return (objValue = srcValue)
      }
    })
  } else if (pkg.autopackConfig) {
    console.log('💡使用package的autopack配置...')
    return mergeWith(
      defaultConfig,
      pkg.autopackConfig,
      function (objValue, srcValue) {
        if (isArray(objValue)) {
          return (objValue = srcValue)
        }
      }
    )
  } else {
    if (cliConfig.debug) {
      console.warn('💡未找到 autopack 配置，将使用默认配置构建...')
    }
    return defaultConfig
  }
}
