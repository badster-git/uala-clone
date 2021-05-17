import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  userComment: {
    borderRadius: "12px",
    flexBasis: "25%",
    display: "flex",
  },
  userCommentContainer: {
    background: "#8ea8ff",
    margin: "16px",
    borderRadius: "12px",
    color: "white",
    textAlign: "center",
  },
  userAvatar: {
    justifyContent: "center",
    display: "flex",
    height: "44px",
    "& img": {
      width: "48px",
      height: "48px",
      borderRadius: "50%",
      border: "1px solid white",
      transform: "translate(0px, -24px)",
    },
  },
  userName: {
    fontWeight: 600,
    padding: "0 16px",
    marginBottom: "8px",
  },
  userLocation: {
    padding: "0 16px",
    fontWeight: 300,
    marginBottom: "16px",
  },
  userCommentContent: {
    fontWeight: 300,
    fontSize: "14px",
    padding: "0 16px 16px 16px",
  },
});

export default function UserCard({ name, location, text, src }) {
  const classes = useStyles();
  return (
    <div className={classes.userComment}>
      <div className={classes.userCommentContainer}>
        <div className={classes.userAvatar}>
          <img src={src} alt="User image" />
        </div>
        <div className={classes.userName}>{name}</div>
        <div className={classes.userLocation}>{location}</div>
        <div className={classes.userCommentContent}>{text}</div>
      </div>
    </div>
  );
}
