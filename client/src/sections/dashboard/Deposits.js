/* eslint-disable no-script-url */

import React from "react"
import Link from "@material-ui/core/Link"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Title from "./Title"

const useStyles = makeStyles({
  depositContext: {
    flex: 1
  }
})

export default function Deposits() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Title>Files on disk</Title>
      <Typography component='p' variant='h4'>
        1 000 000
      </Typography>
      <Typography color='textSecondary' className={classes.depositContext}>
        / 2 000 000 (50%)
      </Typography>
      <div>
        <Link color='primary' href='javascript:;'>
          View drive status
        </Link>
      </div>
    </React.Fragment>
  )
}
