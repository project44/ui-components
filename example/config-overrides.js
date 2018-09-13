const rewireSass = require('react-app-rewire-scss');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  config = rewireSass(config, env);

  config = rewireLess.withLoaderOptions({
    javascriptEnabled: true,
  })(config, env)

  return config
}
