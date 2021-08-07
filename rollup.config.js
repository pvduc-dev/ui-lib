import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from "rollup-plugin-terser";

const PACKAGE_ROOT_PATH = process.cwd();

export default {
  input: `${PACKAGE_ROOT_PATH}/index.ts`,
  external: [/@babel\/runtime/],
  output: [
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'esm',
    },
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'runtime',
      skipPreflightCheck: true
    }),
    typescript({ clean: true }),
    peerDepsExternal(),
    terser()
  ],
};
