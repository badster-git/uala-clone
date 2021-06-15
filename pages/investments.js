import Layout from "../components/layouts/Layout.js";
import InvestmentsTop from "../components/investments/InvestmentsTop.js";
import InvestmentsDetails from "../components/investments/InvestmentsDetails.js";
import InvestmentsStart from "../components/investments/InvestmentsStart.js";
import InvestmentsLiberty from "../components/investments/InvestmentsLiberty.js";
import InvestmentsResults from "../components/investments/InvestmentsResults.js";
import InvestmentsLegalContainer from "../components/investments/InvestmentsLegalContainer.js";

export default function Payments() {
  return (
    <Layout title="Ualá - Investments | Clone">
      <InvestmentsTop />
      <InvestmentsDetails />
      <InvestmentsStart />
      <InvestmentsLiberty />
      <InvestmentsResults />
      <InvestmentsLegalContainer />
    </Layout>
  );
}
