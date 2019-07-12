import React from "react"
import Container from "@material-ui/core/Container"
import { withStyles } from "@material-ui/core/styles"
const styles = (theme) => ({
  root: {
    display: "flex",
    width: "100%",
    maxHeight: "100vh",
    padding: 0
  },
  iframe: {
    width: "100%",
    height: "90vh"
  }
})
class Subscriptions extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <Container className={classes.root}>
        <iframe className={classes.iframe} src='http://localhost:8989' />
      </Container>
    )
  }
}
export default withStyles(styles)(Subscriptions)
