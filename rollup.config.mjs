/**
 * @type {import('rollup').RollupOptions}
 */
import { defineConfig } from 'rollup'
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from 'rollup-plugin-postcss'
import packageJson from "./package.json" assert { type: "json" };
export default defineConfig([
  {
    external: [/\.css$/u],
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      postcss({
        config: {
          path: './postcss.config.js'
        }
      }),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },

  {
    external: [/\.css$/u],
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()]
  },
])
