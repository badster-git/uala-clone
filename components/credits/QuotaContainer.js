import MarginContainer from "../layouts/MarginContainer";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  fullGray: {
    flexBasis: "100%",
    color: "#656565",
  },
  big: {
    fontSize: "32px",
  },
  fullGrayBig: {
    flexBasis: "100%",
    color: "#656565",
    fontSize: "32px",
  },
  textContent: {
    marginBottom: "2rem",
  },
});

export default function QuotaContainer() {
  const classes = useStyles();
  return (
    <MarginContainer container="creditsDataContainer wrapContainer">
      <div className={classes.fullGray}>
        The Quota feature is available only to selected users.
      </div>
      <div className={classes.fullGray}>
        The Annual Nominal Rate (TNA), the Annual Effective Rate (TEA) and the
        Total Financial Cost (CFT) vary according to the credit profile of the
        loan applicant and chosen term. All loans are at a fixed rate, in pesos
        and granted under the French repayment system with monthly and
        consecutive installments.
      </div>
      <div className={classes.fullGray}>
        In all cases, the TNA, TEA and the applicable CFT will be informed prior
        to the acceptance of the loan offer by the applicant.
      </div>
      <div className={classes.fullGray}>
        Annual Nominal Rate (TNA): Minimum: 30.00% - Maximum 90.00%
      </div>
      <div className={classes.fullGray}>
        Annual Effective Rate (TEA): Minimum: 34.99% - Maximum 138.18%
      </div>
      <div className={classes.fullGrayBig}>
        Total Financial Cost: Minimum: 143.56% - Maximum 279.70%
      </div>
      <div className={classes.fullGray}>
        Loan example: Amount requested from $1,000 to 5 months | TNA: 59.00% -
        TEA: 77.88% - <span className={classes.big}>CFT: 143.56% </span>| Fee:
        $247.76 | Total to pay: $1,238.80
      </div>
      <div className={classes.fullGray}>
        The granting of the loan is subject to a credit evaluation.
      </div>
    </MarginContainer>
  );
}
