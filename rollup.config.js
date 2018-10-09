import autoprefixer from 'autoprefixer';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import less from 'rollup-plugin-less';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';

import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      exports: 'named'
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
      exports: 'named'
    }
  ],
  external: [ 'antd' ],
  plugins: [
    external(),
    less({
      output: 'dist/ant.css',
      option: { compress: true }
    }),
    postcss({
      sourceMap: true,
      minimize: true,
      plugins: [ autoprefixer ],
      use: [['sass']],
      extensions: ['.scss'],
      extract: 'dist/build.css',
      exclude: '**/*.less'
    }),
    url(),
    babel({
      exclude: 'node_modules/**',
      plugins: [ 'external-helpers' ]
    }),
    resolve(),
    commonjs()
  ]
};
