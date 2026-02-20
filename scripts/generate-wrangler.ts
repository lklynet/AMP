import fs from "node:fs"

const databaseId = process.env.D1_DATABASE_ID
if (!databaseId) {
  throw new Error("D1_DATABASE_ID is required")
}

const templatePath = new URL("../wrangler.template.toml", import.meta.url)
const template = fs.readFileSync(templatePath, "utf8")
const output = template.replace("{{D1_DATABASE_ID}}", databaseId)
const outputPath = new URL("../wrangler.toml", import.meta.url)
fs.writeFileSync(outputPath, output)
