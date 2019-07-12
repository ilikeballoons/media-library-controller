import React from "react"
import Link from "@material-ui/core/Link"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Title from "./Title"
import { getDiskUsage } from "../../util/ServerMethods"

const styles = (theme) => ({
  depositContext: {
    flex: 1
  }
})

class DiskUsage extends React.Component {
  constructor() {
    super()
    this.state = { diskusage: {} }
  }

  componentDidMount() {
    getDiskUsage("C:/").then((diskusage) => {
      this.setState({ diskusage })
    })
  }
  render() {
    const { classes } = this.props
    const { diskusage } = this.state
    console.log(diskusage) //{diskPath: "C:", free: 297667661824, size: 510913409024}
    const { diskpath, free, size } = diskusage

    return (
      <div>
        <Title>Files on disk {diskpath} </Title>
        <Typography component='p' variant='h4'>
          {(free / 1000000000).toFixed(2)} GB
        </Typography>
        <Typography color='textSecondary' className={classes.depositContext}>
          / {(size / 1000000000).toFixed(2)} GB (
          {100 - ((free / size) * 100).toFixed(2)}% available)
        </Typography>
        <div>
          <Link color='primary' href='javascript:;'>
            View drive status
          </Link>
        </div>
      </div>
    )
  }
}
export default withStyles(styles)(DiskUsage)
