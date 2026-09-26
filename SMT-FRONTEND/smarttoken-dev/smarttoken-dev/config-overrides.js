const path = require('path');

/**
 * Override CRA4 (webpack 4) agar juga mentranspile paket @walletconnect
 * yang menyertakan syntax modern (optional chaining) di dist-nya.
 * Tanpa ini, webpack 4 gagal parse: "Module parse failed: Unexpected token".
 */
module.exports = function override(config) {
  const jsLoaders = [];

  const findBabelRules = (rules) => {
    for (const rule of rules) {
      if (rule.oneOf) {
        findBabelRules(rule.oneOf);
      } else if (
        rule.loader &&
        String(rule.loader).includes('babel-loader') &&
        rule.include
      ) {
        jsLoaders.push(rule);
      }
    }
  };
  findBabelRules(config.module.rules);

  for (const rule of jsLoaders) {
    rule.include = [
      ...(Array.isArray(rule.include) ? rule.include : [rule.include]),
      path.resolve(__dirname, 'node_modules/@walletconnect'),
      path.resolve(__dirname, 'node_modules/unstorage')
    ];
  }

  return config;
};
