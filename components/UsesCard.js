import { makeStyles } from "@material-ui/styles";
import Link from "./Link";

const useStyles = makeStyles({
  boxContainer: {
    marginBottom: "16px",
    display: "flex",
    flexBasis: "calc(100% / 4)",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    flexBasis: "100%",
    background: "white",
    margin: "16px",
    borderRadius: "8px",
    boxShadow: "0px 0px 10px 0px #2d2d2d3d",
    padding: "24px",
  },
  boxImage: {
    flex: 0,
    display: "block",
    marginBottom: "16px",
    "& img": {
      width: "72px",
    },
  },
  boxTitle: {
    flex: 0,
    fontSize: "24px",
    lineHeight: 1.4,
    color: "#3e6bfd",
    whiteSpace: "normal",
    marginBottom: "12px",
  },
  boxContent: {
    whiteSpace: "initial",
    flex: 1,
    fontSize: "15px",
    color: "#656565",
  },
  viewMore: {
    flex: 0,
    marginTop: "32px",
    display: "block",
  },
  btn: {
    border: "1px solid #3e6bfd",
    borderRadius: "40px",
    padding: "12px 52px",
    fontSize: "14px",
    color: "#3e6bfd",
    background: "#fdfdfd",
    textAlign: "center",
    cursor: "pointer",
  },
});

export default function UsesCard({ title, text, src, href }) {
  const classes = useStyles();
  return (
    <div className={classes.boxContainer}>
      <div className={classes.box}>
        <div className={classes.boxImage}>
          <img src={src} />
        </div>
        <div className={classes.boxTitle}>{title}</div>
        <div className={classes.boxContent}>{text}</div>
        <div className={classes.viewMore}>
          <Link className={classes.btn} href={href}>View more</Link>
        </div>
      </div>
    </div>
  );
}
