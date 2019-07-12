const util = require("util")
const cmd = require("node-cmd")
const runAsync = util.promisify(cmd.run, { multiArgs: true, context: cmd })

const playFile = async (filepath) => {
  runAsync(`vlc "${filepath}" -f`)
}
module.exports = {
  playFile
}
