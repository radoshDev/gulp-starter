import fs from "fs"
import { path } from "../config/app.js"

export const clean = async () => {
	fs.rmSync(path.buildFolder, { recursive: true, force: true })
}
