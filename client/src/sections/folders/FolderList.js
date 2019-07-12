import React from "react"
import ReactDOM from "react-dom"
import Moment from "moment"
import "../../scss/FileBrowser.scss"

import FileBrowser, {
  FileRenderers,
  FolderRenderers,
  Groupers,
  Icons
} from "react-keyed-file-browser"

import { getDirectory } from "../../util/ServerMethods"
// import { styles } from "./FileBrowser"

export default class FolderList extends React.Component {
  constructor() {
    super()
    this.state = { files: [] }
  }

  componentDidMount() {
    getDirectory().then((tree) => {
      // console.log(JSON.stringify(tree));
      // console.log(tree);
      const flat = this.flattenTree(tree.videosTree)
      console.log(flat)

      this.setState({ files: flat })
    })
  }

  flattenTree(tree) {
    if (tree.type === "file") {
      return [
        {
          key: `${tree.path.slice(tree.path.indexOf("Videos"))}`,
          size: tree.size
        }
      ]
    } else if (tree.type === "directory" && tree.children.length > 0) {
      return tree.children.reduce((acc, curr) => {
        return [...acc, ...this.flattenTree(curr)]
      }, [])
    }
  }

  handleCreateFolder = (key) => {
    // this.setState(state => {
    //   state.files = state.files.concat([
    //     {
    //       key: key
    //     }
    //   ]);
    //   return state;
    // });
  }
  handleCreateFiles = (files, prefix) => {
    // this.setState(state => {
    //   const newFiles = files.map(file => {
    //     let newKey = prefix;
    //     if (
    //       prefix !== "" &&
    //       prefix.substring(prefix.length - 1, prefix.length) !== "/"
    //     ) {
    //       newKey += "/";
    //     }
    //     newKey += file.name;
    //     return {
    //       key: newKey,
    //       size: file.size,
    //       modified: +Moment()
    //     };
    //   });
    //   const uniqueNewFiles = [];
    //   newFiles.map(newFile => {
    //     let exists = false;
    //     state.files.map(existingFile => {
    //       if (existingFile.key === newFile.key) {
    //         exists = true;
    //       }
    //     });
    //     if (!exists) {
    //       uniqueNewFiles.push(newFile);
    //     }
    //   });
    //   state.files = state.files.concat(uniqueNewFiles);
    //   return state;
    // });
  }
  handleRenameFolder = (oldKey, newKey) => {
    // this.setState(state => {
    //   const newFiles = [];
    //   state.files.map(file => {
    //     if (file.key.substr(0, oldKey.length) === oldKey) {
    //       newFiles.push({
    //         ...file,
    //         key: file.key.replace(oldKey, newKey),
    //         modified: +Moment()
    //       });
    //     } else {
    //       newFiles.push(file);
    //     }
    //   });
    //   state.files = newFiles;
    //   return state;
    // });
  }
  handleRenameFile = (oldKey, newKey) => {
    // this.setState(state => {
    //   const newFiles = [];
    //   state.files.map(file => {
    //     if (file.key === oldKey) {
    //       newFiles.push({
    //         ...file,
    //         key: newKey,
    //         modified: +Moment()
    //       });
    //     } else {
    //       newFiles.push(file);
    //     }
    //   });
    //   state.files = newFiles;
    //   return state;
    // });
  }
  handleDeleteFolder = (folderKey) => {
    // this.setState(state => {
    //   const newFiles = [];
    //   state.files.map(file => {
    //     if (file.key.substr(0, folderKey.length) !== folderKey) {
    //       newFiles.push(file);
    //     }
    //   });
    //   state.files = newFiles;
    //   return state;
    // });
  }
  handleDeleteFile = (fileKey) => {
    //   this.setState(state => {
    //     const newFiles = [];
    //     state.files.map(file => {
    //       if (file.key !== fileKey) {
    //         newFiles.push(file);
    //       }
    //     });
    //     state.files = newFiles;
    //     return state;
    //   });
  }

  render() {
    return (
      <div>
        <FileBrowser
          renderStyle='list'
          nestChildren
          headerRenderer={null}
          fileRenderer={FileRenderers.ListThumbnailFile}
          folderRenderer={FolderRenderers.ListThumbnailFolder}
          files={this.state.files}
          icons={Icons.FontAwesome(4)}
          onCreateFolder={this.handleCreateFolder}
          onCreateFiles={this.handleCreateFiles}
          onMoveFolder={this.handleRenameFolder}
          onMoveFile={this.handleRenameFile}
          onRenameFolder={this.handleRenameFolder}
          onRenameFile={this.handleRenameFile}
          onDeleteFolder={this.handleDeleteFolder}
          onDeleteFile={this.handleDeleteFile}
        />
      </div>
    )
  }
}
