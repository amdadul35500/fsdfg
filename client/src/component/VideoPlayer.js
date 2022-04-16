import React, { useContext } from "react";
import { Typography, Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { SocketContext } from "../SocketContext";

const useStyles = makeStyles((theme) => ({
  video: {
    width: "500px",
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "300px !important",
    },
  },
  gridContainer: {
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column !important",
    },
  },
  paper: {
    padding: "10px",
    border: "2px solid black",
    margin: "10px",
  },
}));

const VideoPlayer = () => {
  const {
    name,
    callAccepted,
    myVideo,
    userVideo,
    call,
    callEnded,
    stream,
  } = useContext(SocketContext);
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.gridContainer}>
        {/* our own video */}
        {stream && (
          <Paper className={classes.paper}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                {name || "Name"}
              </Typography>
              <video
                playsInline
                muted
                ref={myVideo}
                autoPlay
                className={classes.video}
              />
            </Grid>
          </Paper>
        )}

        {/* users video */}
        {callAccepted && !callEnded && (
          <Paper className={classes.paper}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                {call.name || "Name"}
              </Typography>
              <video
                playsInline
                ref={userVideo}
                autoPlay
                className={classes.video}
              />
            </Grid>
          </Paper>
        )}
      </Grid>
    </div>
  );
};

export default VideoPlayer;
