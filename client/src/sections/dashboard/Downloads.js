/* eslint-disable no-script-url */

import React from "react"
import Link from "@material-ui/core/Link"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Title from "./Title"

// Generate Download Data
// function createData(id, date, name, shipTo, paymentMethod, amount) {
//   return { id, date, name, shipTo, paymentMethod, amount };
// }

function createData(id, filename, fileType, size, downloadDate /*,thumbnail*/) {
  return { id, filename, fileType, size, downloadDate }
}

const rows = [
  createData(
    0,
    "16 Mar, 2019",
    "Elvis Presley",
    "Tupelo, MS",
    "VISA ⠀•••• 3719",
    312.44
  ),
  createData(
    1,
    "16 Mar, 2019",
    "Paul McCartney",
    "London, UK",
    "VISA ⠀•••• 2574",
    866.99
  ),
  createData(
    2,
    "16 Mar, 2019",
    "Tom Scholz",
    "Boston, MA",
    "MC ⠀•••• 1253",
    100.81
  ),
  createData(
    3,
    "16 Mar, 2019",
    "Michael Jackson",
    "Gary, IN",
    "AMEX ⠀•••• 2000",
    654.39
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "Long Branch, NJ",
    "VISA ⠀•••• 5919",
    212.79
  )
]

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}))

export default function Downloads() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Title>Recent Downloads</Title>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>Filename</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Filesize</TableCell>
            <TableCell>Date Created</TableCell>
            {/* <TableCell align="right">Sale Amount</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.filename}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.size}</TableCell>
              <TableCell>{row.dateCreated}</TableCell>
              {/* <TableCell align="right">{row.amount}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color='primary' href='javascript:;'>
          See more Downloads
        </Link>
      </div>
    </React.Fragment>
  )
}
