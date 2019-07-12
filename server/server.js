const express = require("express")
const dirTree = require("directory-tree")
const bodyParser = require("body-parser")
const cors = require("cors")
const vlcHelper = require("./helpers/vlcHelper.js")
const fsHelper = require("./helpers/fsHelper.js")
const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("*", cors())

app.get("/", (req, res) => res.send("Hello World"))

app.get("/videos", (req, res) => {
  const videosTree = dirTree("C:/Users/wisem/Videos")
  res.send({ videosTree })
})

app.get("/videos/:path", (req, res) => {
  const tree = dirTree(req.params.path)
  res.send({ tree })
})

app.get("/play", (req, res) => {
  console.log(vlcHelper)

  const filepath = req.query.filepath
  if (!filepath) res.status(400).send()
  vlcHelper.playFile(filepath)
  res.send({ message: `Played ${filepath}.` })
})

app.get("/diskusage", (req, res) => {
  const filepath = req.query.filepath
  if (!filepath) res.status(400).send()
  fsHelper.getDiskUsage(filepath).then((diskUsage) => res.send(diskUsage))
})

app.listen(port, () => console.log(`Server listening on port ${port}...`))
