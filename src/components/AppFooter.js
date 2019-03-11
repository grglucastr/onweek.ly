import React, { Fragment } from "react";
import { AppBar, withStyles, Typography, Link } from "@material-ui/core";

const styles = theme => ({
  appBar: {
    top: "auto",
    bottom: 0,
    height: 35,
    backgroundColor: "#000",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },

  typo: {
    border: "1px solid red",
    color: "#fff",
    fontSize: 12,
    textAlign: "center"
  },

  contactSupport: {
    cursor: "pointer",
    color: "#fff",
    textTransform: "uppercase",
    letterSpacing: 2,
    display: "inline-block",
    "&:hover": {
      textDecoration: "none"
    }
  },

  grow: {
    grow: 1,
    width: "25%"
  }
});

class AppFooter extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <AppBar className={classes.appBar}>
          <div style={{ display: "block" }}>
            <Typography className={classes.typo}>
              OnWeek.ly - Copyright 2019
            </Typography>
          </div>

          <div>
            <Typography className={[classes.typo]}>
              <Link className={classes.contactSupport}>Contact Support</Link>
            </Typography>
          </div>
        </AppBar>
      </Fragment>
    );
  }
}

export default withStyles(styles)(AppFooter);
