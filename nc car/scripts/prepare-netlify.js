const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const output = path.join(root, "dist");
const publicFiles = ["index.html", "app.js", "styles.css", ".nojekyll"];

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });

for (const file of publicFiles) {
  fs.copyFileSync(path.join(root, file), path.join(output, file));
}

fs.cpSync(path.join(root, "assets"), path.join(output, "assets"), { recursive: true });
console.log("Netlify public files prepared in dist/.");
