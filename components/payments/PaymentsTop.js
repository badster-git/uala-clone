import TopSection from "../layouts/TopSection";

export default function PaymentsTop() {
  return (
    <TopSection
      title={"All your payments in one place"}
      subtitle={[
        "Recharge your prepaid services,",
        "pay your bills or upload to SUBE",
        "and without leaving your home.",
      ]}
      blue={""}
      src={"images/payment.gif"}
    />
  );
}
