const rewireSass = require('react-app-rewire-scss');
const rewireLess = require('react-app-rewire-less');
const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
    config
  )

  // config = rewireSass(config, env)
  config = rewireSass.withLoaderOptions({ sourceMap: true})(config, env);

  config = rewireLess.withLoaderOptions({
    modifyVars: {
      '@primary-color': '#1DA57A',
      '@btn-border-radius-base': '0px',
      '@btn-border-radius-sm': '0px',
    },
    javascriptEnabled: true,
  })(config, env)
  return config
}
