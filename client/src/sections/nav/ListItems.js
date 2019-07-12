import React from "react"
import { Redirect } from "react-router-dom"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import ListSubheader from "@material-ui/core/ListSubheader"
import DashboardIcon from "@material-ui/icons/Dashboard"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions"
import BarChartIcon from "@material-ui/icons/BarChart"
import SettingsIcon from "@material-ui/icons/Settings"
import AssignmentIcon from "@material-ui/icons/Assignment"

class ListItems extends React.Component {
  constructor() {
    super()
    this.state = { redirect: null }
  }

  handleListItemClick(event, route) {
    console.log("clicked", route)
    this.setState({ redirect: <Redirect push to={route} /> })
  }

  render() {
    const { redirect } = this.state
    return (
      <List>
        {redirect}
        <div>
          <ListItem button onClick={(e) => this.handleListItemClick(e, "/")}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary='Dashboard' />
          </ListItem>
          <ListItem
            button
            onClick={(e) => this.handleListItemClick(e, "/folders")}>
            <ListItemIcon>
              <VideoLibraryIcon />
            </ListItemIcon>
            <ListItemText primary='Folders' />
          </ListItem>
          <ListItem button disabled>
            <ListItemIcon>
              <SubscriptionsIcon />
            </ListItemIcon>
            <ListItemText primary='Subscriptions' />
          </ListItem>
          <ListItem button disabled>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary='Reports' />
          </ListItem>
          <ListItem button disabled>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary='Settings' />
          </ListItem>
        </div>
      </List>
    )
  }
}
export default ListItems

// export const secondaryListItems = (
//   <div>
//     <ListSubheader inset>Saved reports</ListSubheader>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItem>
//   </div>
// );
