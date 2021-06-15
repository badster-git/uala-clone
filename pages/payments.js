import Layout from "../components/layouts/Layout.js";
import PaymentsTop from "../components/payments/PaymentsTop.js";
import RechargeCard from "../components/payments/RechargeCard.js";
import PayBills from "../components/payments/PayBills.js";
import SubeRecharge from "../components/payments/SubeRecharge.js";

export default function Payments() {
  return (
    <Layout title="Ualá - Payments | Clone">
      <PaymentsTop />
      <RechargeCard />
      <PayBills />
      <SubeRecharge />
    </Layout>
  );
}
