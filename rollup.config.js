import autoprefixer from 'autoprefixer';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
// import { eslint } from 'rollup-plugin-eslint';
import external from 'rollup-plugin-peer-deps-external';
import less from 'rollup-plugin-less';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import stylelint from 'stylelint';
import copy from 'rollup-plugin-copy-glob';

import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
      exports: 'named',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
  ],
  external: ['antd', 'react', 'react-dom', 'styled-components'],
  plugins: [
    external(),
    less({
      output: 'dist/ant.css',
      option: { compress: true },
    }),
    postcss({
      minimize: {
        safe: true,
      },
      sourceMap: true,
      plugins: [autoprefixer, stylelint],
      extensions: ['.scss', '.css'],
      extract: 'dist/build.css',
      exclude: '**/*.less',
    }),
    url(),
    babel({
      exclude: 'node_modules/**',
      plugins: [
        'external-helpers',
        '@quickbaseoss/babel-plugin-styled-components-css-namespace',
        'babel-plugin-styled-components',
      ],
    }),
    resolve(),
    commonjs(),
    copy(
      [
        {
          files: 'src/index.d.ts',
          dest: 'dist',
        },
      ],
      { verbose: true, watch: true }
    ),
  ],
};
