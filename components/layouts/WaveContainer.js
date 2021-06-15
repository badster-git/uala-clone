import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles(() => ({
  blueWaveContainer: {
    background:
      "url(images/waveTopDesktopBlue.svg) top/100% auto, url(images/waveBottomDesktopBlue.svg) bottom/100%, linear-gradient(#dee8ff, #f2f7ff) content-box",
    backgroundRepeat: "no-repeat",
    paddingBottom: "3.2vw",
    paddingTop: "4vw",
  },
}));
const WaveContainer = ({ children }) => {
    const classes = useStyles();

    return (
        <section className={classes.blueWaveContainer}>
            {children}
        </section>
    )
}

export default WaveContainer;
