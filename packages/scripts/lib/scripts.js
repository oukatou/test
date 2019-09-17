const babel = require("rollup-plugin-babel");
const rollup = require("rollup");
const path = require("path")
function createBuildPreset() {
    return {
      exclude: [
        "**/node_modules/**"
      ],
      presets: [
        [
          "env",
          {
            modules: false,
            targets: {
              browser: ">1%"
            }
          }
        ],
        "stage-2",
        "react"
      ],
      plugins: ["react-docgen"]
    };
  };
const packageMeta = require(path.resolve(process.cwd(), "package.json"));
const {
    name: packageName,
    version: packageVersion
} = packageMeta
const inputOptions = {
    input: "src/index.js",
    plugins: [
        babel({
            babelrc: false,
            ...createBuildPreset()
            }),
    ]
};
const esModulesOutputOptions = {
    file: "build/index.es.js",
    format: "es"
}
const cjsOutputOptions = {
    file: "build/index.js",
    format: "cjs",
    exports: "named"
}
async function scripts() {
    console.log(`Bundling ${packageName} v${packageVersion}.`)

    const bundle = await rollup.rollup(inputOptions)

    return Promise.all([
        bundle.write(esModulesOutputOptions),
        bundle.write(cjsOutputOptions)])
}

module.exports = scripts;