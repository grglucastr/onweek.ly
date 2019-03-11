import React, { Component } from "react";
import { Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

class Home extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.statusContainer}>
        <div className={classes.statusCol}>
          <Paper>
            <h3>Plan</h3>
          </Paper>
        </div>
        <div className={classes.statusCol}>
          <Paper>
            <h3>In Progress</h3>
          </Paper>
        </div>

        <div className={classes.statusCol}>
          <Paper>
            <h3>Done</h3>
          </Paper>
        </div>
      </div>
    );
  }
}

const styles = theme => ({
  statusContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  },
  statusCol: {
    border: "1px solid #000",
    borderRadius: 3,
    fontFamily: "sans-serif",
    width: "30%",
    height: 100,
    padding: 10,
    "& h3": {
      textAlign: "center"
    }
  }
});

export default withStyles(styles)(Home);
