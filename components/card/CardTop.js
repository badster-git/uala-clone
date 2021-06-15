import TopSection from "../layouts/TopSection";

export default function CardTop() {
  return (
    <TopSection
      title={"A card for everyone for everything"}
      subtitle={[
        "Buy in any store or any online site that accepts Mastercard.",
      ]}
      blue={["Remember:", "If they accept Mastercard, they accept Ualá."]}
      src={"images/card.gif"}
    />
  );
}
