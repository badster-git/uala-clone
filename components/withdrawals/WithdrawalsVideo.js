import MarginContainer from "../layouts/MarginContainer";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  image: {
    display: "flex",
    margin: "0 10%",
  },
});

export default function HowToReload() {
  const classes = useStyles();
  return (
    <MarginContainer container="centerContainer">
      <div className={classes.image}>
        <a href="#">
          <img src="images/videoSacar.svg" alt="Withdraw video" />
        </a>
      </div>
    </MarginContainer>
  );
}
