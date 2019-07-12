import React from "react"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"

class MadeWithLove extends React.Component {
  render() {
    return (
      <Typography
        variant='body2'
        color='textSecondary'
        align='center'
        gutterTop>
        {"Built with love by "}
        <Link color='inherit' href='https://github.com/ilikeballoons'>
          Denny
        </Link>
        {"."}
      </Typography>
    )
  }
}
export default MadeWithLove
