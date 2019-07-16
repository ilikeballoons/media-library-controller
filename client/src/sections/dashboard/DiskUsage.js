import React from "react"
import Link from "@material-ui/core/Link"
import Paper from "@material-ui/core/Paper"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import {
  Chart,
  PieSeries,
  Title as ChartTitle
} from "@devexpress/dx-react-chart-material-ui"
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

  componentWillMount() {
    const test = process.env.REACT_APP_SERVERURL.startsWith("127")
      ? "C:/Users/wisem/Videos"
      : "D:/Denny/Downloads/Videos"
    getDiskUsage(test).then((diskusage) => {
      this.setState({ diskusage }) //{diskPath: "C:", free: 297667661824, size: 510913409024}
    })
  }

  getChart = () => (
    // <Paper>
    <Chart
      height='100'
      data={[
        { argument: 1, value: this.state.diskusage.size },
        { argument: 2, value: this.state.diskusage.free }
      ]}>
      <PieSeries valueField='value' argumentField='argument' />
    </Chart>
    // </Paper>
  )
  render() {
    const { classes } = this.props
    const { diskusage } = this.state
    const { diskpath, free, size } = diskusage

    return (
      <div>
        <Title>Files on disk {this.state.diskusage.diskpath} </Title>

        <Container>
          <Typography component='p' variant='h4'>
            {(free / 1000000000).toFixed(2)} GB
          </Typography>
          {this.getChart()}
          <Typography color='textSecondary' className={classes.depositContext}>
            / {(size / 1000000000).toFixed(2)} GB (
            {100 - ((free / size) * 100).toFixed(2)}% available)
          </Typography>
        </Container>
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
