const url =
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:3001"
    : process.env.URL

export function getDirectory(path) {
  const dir = path ? url.concat("/videos/path/?=", path) : url.concat("/videos")
  return fetch(`${dir}`).then((res) => res.json())
}

export function playFile(path) {
  if (!path) return
  const dir = url.concat("/play?filepath=", path)
  return fetch(`${dir}`)
    .then((res) => res.json())
    .then((json) => console.log(json))
}

export function getDiskUsage(path) {
  if (!path) return
  const dir = url.concat("/diskusage?filepath=", path)
  return fetch(`${dir}`).then((res) => res.json())
}
