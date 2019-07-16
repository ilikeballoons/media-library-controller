import React from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"

//import Chart from './Chart';
import DiskUsage from "./DiskUsage"
import Downloads from "./Downloads"

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 380
  }
}))

export default function Dashboard() {
  const classes = useStyles()
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  return (
    <Grid container spacing={3}>
      {/* Chart */}
      <Grid item xs={12} md={8} lg={9}>
        <Paper className={fixedHeightPaper}>{}</Paper>
      </Grid>
      {/* Recent DiskUsage */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={fixedHeightPaper}>
          <DiskUsage />
        </Paper>
      </Grid>
      {/* Recent Downloads */}
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Downloads />
        </Paper>
      </Grid>
    </Grid>
  )
}
