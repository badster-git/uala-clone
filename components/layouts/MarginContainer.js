import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  marginContainer: {
    display: "flex",
    maxWidth: "1080px",
    margin: "0 auto",
    padding: "90px 0",
  },
});

export default function MarginContainer(props) {
  const classes = useStyles();
  return (
    <section
      className={`${props.alignStyle ? props.alignStyle : ""} ${
        props.container ? props.container : ""
      } ${classes.marginContainer}`}
    >
      {props.children}
    </section>
  );
}
