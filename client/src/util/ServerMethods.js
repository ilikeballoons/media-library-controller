// const url =
//   process.env.NODE_ENV === "development"
//     ? "http://127.0.0.1:3001"
//     : process.env.URL

const serverURL =
  "http://".concat(process.env.REACT_APP_SERVERURL, ":3001") ||
  "http://127.0.0.1:3001"

export function getDirectory(path) {
  console.log(serverURL)

  const dir = path
    ? serverURL.concat("/videos/path/?=", path)
    : serverURL.concat("/videos")
  return fetch(`${dir}`).then((res) => res.json())
}

export function playFile(path) {
  if (!path) return
  const dir = serverURL.concat("/play?filepath=", path)
  return fetch(`${dir}`)
    .then((res) => res.json())
    .then((json) => console.log(json))
}

export function getDiskUsage(path) {
  if (!path) return
  const dir = serverURL.concat("/diskusage?filepath=", path)
  return fetch(`${dir}`).then((res) => res.json())
}
