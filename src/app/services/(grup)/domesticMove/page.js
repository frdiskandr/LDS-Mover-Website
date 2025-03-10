import ServicePage from "~/components/servicePage";

export default function DomesticsMoves() {
  return (
    <ServicePage
      title="Domestics Moves"
      description= "Professional domestic moving services for homes, apartments, and businesses."
      image="/services/domesticService.jpg"
      benefits={[
        "Experienced and professional team",
        "Wide coverage across Indonesia",
        "Secure packing and transportation"
      ]}
    />
  );
}
