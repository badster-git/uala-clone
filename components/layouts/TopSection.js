import MarginContainer from "./MarginContainer";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  leftContainer: {
    flexBasis: "50%",
  },
  rightContainer: {
    flexBasis: "50%",
  },
  titlePrimary: {
    marginRight: "15%",
    marginTop: "4rem",
    fontSize: "48px",
    fontWeight: 500,
    lineHeight: 1.4,
    color: "#3e6bfd",
  },
  subtitle: {
    fontSize: "22px",
    lineHeight: 1.5,
    fontWeight: 400,
    color: "grey",

    "&.blue": {
      marginTop: "16px",
      color: "blue",
    },
  },
});

export default function TopSection({ title, subtitle, blue, src }) {
  const classes = useStyles();
  return (
    <MarginContainer>
      <div className={classes.leftContainer}>
        <h3 className={classes.titlePrimary}>{title}</h3>
        <div className={classes.subtitle}>{subtitle}</div>
        {blue && (
          <div className={`blue ${classes.subtitle}`}>
            {blue.map((text, idx) => (
              <div key={idx}>{text}</div>
            ))}
          </div>
        )}
      </div>
      <div className={classes.rightContainer}>
        <div>
          <img src={src} alt="Animation" />
        </div>
      </div>
    </MarginContainer>
  );
}
