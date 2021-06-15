import MarginContainer from "../layouts/MarginContainer";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  text: {
    fontSize: "1.5rem",
    fontWeight: "700",
    marginBottom: "1rem",
    color: "#656565",
  },
  textContent: {
    marginBottom: "2rem",
  },
});

export default function InvestmentsLegalContainer() {
  const classes = useStyles();
  return (
    <MarginContainer container="legalContainer">
      <div className={classes.text}>
        What does it mean to invest in an FCI (Common Investment Fund)?
      </div>
      <p className={classes.textContent}>
        A common investment fund (CRF) is a collective investment instrument
        made up of different financial assets (for example, bonds or fixed
        terms) managed by a professional. When you subscribe money to a Common
        Investment Fund, what you do is buy small parts of the fund at a certain
        value. These parts are called quotas and when their price changes the
        result of your investment varies. The FCI administrator tries to
        generate the best result by buying and selling the assets that make up
        the fund.
      </p>
      <div className={classes.text}>Where is your money invested?</div>
      <p>
        When you invest through Ualá, with your money you subscribe shares of
        the SBS Savings Pesos FCI fund, managed by SBS Asset Management
        S.A.S.G.F.C.I. You can learn more about the composition of the FCI{" "}
        <a style={{ color: "#3e6bfd", textDecoration: "none" }} href="http://www.sbsfondos.com/">
          here.
        </a>
      </p>
      <p>
        According to Law 24,083, mutual funds are regulated by the CNV (National
        Securities Commission), and since they are not deposits, they do not
        have a guarantee from the BCRA (Central Bank of the Argentine Republic).
      </p>
      <p>
        * Subscription to the Common Investment Fund does not guarantee or
        guarantee the result of the investment.
      </p>
    </MarginContainer>
  );
}
