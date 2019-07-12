import React from "react"
// import '../../scss/FileBrowser.scss'

import Paper from "@material-ui/core/Paper"
import Container from "@material-ui/core/Container"
import { makeStyles, withStyles } from "@material-ui/core/styles"
import ListSubheader from "@material-ui/core/ListSubheader"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Collapse from "@material-ui/core/Collapse"
import ExpandLess from "@material-ui/icons/ExpandLess"
import ExpandMore from "@material-ui/icons/ExpandMore"
import MovieIcon from "@material-ui/icons/Movie"
import SubtitlesIcon from "@material-ui/icons/Subtitles"
import NoteIcon from "@material-ui/icons/Note"
import FolderIcon from "@material-ui/icons/Folder"
import FolderOpenIcon from "@material-ui/icons/FolderOpen"

import { getDirectory, playFile } from "../../util/ServerMethods"
import { Typography } from "@material-ui/core"

const styles = (theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
})

const filetypes = {
  video: [".avi", ".mkv", ".mp4", ".mpeg"],
  subtitle: [".srt", ".idx"]
}

class FileBrowser extends React.Component {
  constructor() {
    super()
    this.state = { files: [], expanded: {} }
  }

  componentDidMount() {
    getDirectory().then((tree) => {
      this.setState({ files: tree.videosTree })
    })
  }

  getIcon = (extension) => {
    if (filetypes.video.includes(extension)) {
      return <MovieIcon />
    } else if (filetypes.subtitle.includes(extension)) {
      return <SubtitlesIcon />
    } else {
      return <NoteIcon />
    }
  }

  handleFolderClick = (event, key) => {
    const { expanded } = this.state
    expanded[key] = !expanded[key]
    this.setState({ expanded })
  }

  handleFileClick = (event, key) => {
    const extension = key.slice(key.lastIndexOf("."))
    console.log(extension)
    if (filetypes.video.includes(extension)) {
      playFile(key).then(() => console.log("success?"))
    }
  }

  render() {
    const { classes } = this.props
    const { handleFileClick, handleFolderClick, getIcon } = this
    const { expanded } = this.state

    function buildList(tree, level = 0) {
      const spacing = `${level * 16}px`
      if (tree.type === "file") {
        return [
          <ListItem
            button
            style={{ paddingLeft: spacing }}
            key={tree.path}
            onClick={(e) => handleFileClick(e, tree.path)}>
            <ListItemIcon>{getIcon(tree.extension)}</ListItemIcon>
            <ListItemText primary={tree.name} />
          </ListItem>
        ]
      } else if (tree.type === "directory" && tree.children.length > 0) {
        return [
          <List
            component='div'
            disablePadding
            key={tree.path}
            style={{ paddingLeft: spacing }}>
            <ListItem
              button
              onClick={(e) => handleFolderClick(e, tree.path)}
              spacing={level}>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary={tree.name} />
              <ExpandMore />
            </ListItem>
            <Collapse
              in={expanded[tree.path]}
              timeout='auto'
              unmountOnExit
              key={tree.path}>
              {tree.children.reduce((acc, curr) => {
                return [...acc, ...buildList(curr, level + 1)]
              }, [])}
            </Collapse>
          </List>
        ]
      }
    }

    return (
      <div>
        <Typography component='h2' variant='h6' color='primary' gutterBottom>
          File Explorer
        </Typography>
        <List
          component='nav'
          aria-labelledby='file-explorer'
          className={classes.root}>
          {buildList(this.state.files)}
        </List>
      </div>
    )
  }
}
export default withStyles(styles)(FileBrowser)
