import React, { Suspense } from "react";
import Notifications from "./component/Notifications";
import Options from "./component/Options";
import VideoPlayer from "./component/VideoPlayer";
import { Typography, AppBar } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 100px",
    display: "flex !important",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "600px !important",
    border: "2px solid black",

    [theme.breakpoints.down("sm")]: {
      width: "90% !important",
    },
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.wrapper}>
        <Suspense fallback={<h2>Loading...</h2>}>
          <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography variant="h2" align="center">
              Video Chat
            </Typography>
          </AppBar>
        </Suspense>

        <Suspense fallback={<h2>Loading...</h2>}>
          <VideoPlayer />
        </Suspense>

        <Suspense fallback={<h2>Loading...</h2>}>
          <Options>
            <Notifications />
          </Options>
        </Suspense>
      </div>
    </>
  );
}

export default App;
