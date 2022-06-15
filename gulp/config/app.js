export const isBuild = process.argv.includes("--build")
export const isDev = !isBuild
export { default as gulp } from "gulp"
export { path } from "./path.js"
export { plugins } from "./plugins.js"
