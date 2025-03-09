import ServicePage from "~/components/servicePage";

export default function DomesticsMoves() {
  return (
    <ServicePage
      title="Domestics Moves"
      description="Layanan pindahan dalam negeri untuk rumah, apartemen, dan bisnis dengan profesional."
      image="/services/domesticService.jpg"
      benefits={[
        "Tim profesional dan berpengalaman",
        "Jangkauan luas di seluruh Indonesia",
        "Packing dan transportasi aman",
      ]}
    />
  );
}
