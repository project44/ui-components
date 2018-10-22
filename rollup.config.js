import autoprefixer from 'autoprefixer';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { eslint } from 'rollup-plugin-eslint';
import external from 'rollup-plugin-peer-deps-external';
import less from 'rollup-plugin-less';
import minify from 'rollup-plugin-babel-minify';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify-es';
import url from 'rollup-plugin-url';
import stylelint from 'stylelint';

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
  external: [ 'antd', 'react' ],
  plugins: [
    external(),
    less({
      output: 'dist/ant.css',
      option: { compress: true }
    }),
    postcss({
      minimize: true,
      plugins: [ autoprefixer, stylelint ],
      extensions: ['.scss'],
      extract: 'dist/build.css',
      exclude: '**/*.less'
    }),
    url(),
    eslint({
      throwOnError: false
    }),
    babel({
      exclude: 'node_modules/**',
      plugins: [ 'external-helpers' ]
    }),
    resolve(),
    commonjs(),
    minify(),
    uglify()
  ]
};
