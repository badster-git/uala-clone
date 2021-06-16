import Layout from "../components/layouts/Layout.js";
import CreditsTop from "../components/credits/CreditsTop.js";
import CreditTabs from "../components/credits/CreditTabs.js";
import QuotaContainer from "../components/credits/QuotaContainer.js";
import CreditFinancialInfo from "../components/credits/CreditFinancialInfo.js";

export default function Card() {
  return (
    <Layout title="Ualá - Credits | Clone">
      <CreditsTop />
      <CreditTabs />
      <QuotaContainer />
      <CreditFinancialInfo />
    </Layout>
  );
}
