import Layout from "../components/layouts/Layout.js";
import WithdrawalsTop from "../components/withdrawals/WithdrawalsTop.js";
import WithdrawalSecurity from "../components/withdrawals/WithdrawalSecurity.js";
import WithdrawalMap from "../components/withdrawals/WithdrawalMap.js";
import WithdrawalDetails from "../components/withdrawals/WithdrawalDetails.js";
import WithdrawalVideo from "../components/withdrawals/WithdrawalsVideo.js";

export default function Payments() {
  return (
    <Layout title="Ualá - Withdrawals | Clone">
      <WithdrawalsTop />
      <WithdrawalSecurity />
      <WithdrawalMap />
      <WithdrawalDetails />
      <WithdrawalVideo />
    </Layout>
  );
}
