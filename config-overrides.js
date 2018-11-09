const rewireSass = require('react-app-rewire-scss');
const rewireLess = require('react-app-rewire-less');
const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
    config
  );

  config = rewireSass.withLoaderOptions({ sourceMap: true })(config, env);

  config = rewireLess.withLoaderOptions({
    javascriptEnabled: true,
  })(config, env);
  
  return config;
}
