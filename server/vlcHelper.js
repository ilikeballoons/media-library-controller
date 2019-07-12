const util = require("util")
// const exec = util.promisify(require("child_process").exec)

// const playFile = async (filepath) => {
//   const { stdout, stderr } = await exec(`vlc ${filepath}`)
//   console.log("stdout:", stdout)
//   console.log("stderr:", stderr)
// }

const cmd = require("node-cmd")
const runAsync = util.promisify(cmd.run, { multiArgs: true, context: cmd })
const playFile = async (filepath) => {
  console.log(filepath)

  runAsync(`vlc ${filepath} -f`)
    .then((data) => {
      console.log("cmd data", data)
    })
    .catch((err) => {
      console.log("cmd err", err)
    })
}
module.exports = {
  playFile
}
