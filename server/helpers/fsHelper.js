const fs = require("fs")
const checkDiskSpace = require("check-disk-space")

const getDiskUsage = (filepath) => {
  return checkDiskSpace(filepath).then((diskspace) => diskspace)
}
module.exports = {
  getDiskUsage
}
