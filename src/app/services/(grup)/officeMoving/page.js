import ServicePage from "~/components/servicePage";

export default function OfficeMoving() {
  return (
    <ServicePage
      title="Office Moving"
      description="Kami membantu Anda memindahkan kantor dengan efisiensi dan minim gangguan operasional."
      image="/services/officeService.jpg"
      benefits={[
        "Perencanaan pindahan yang matang",
        "Pengemasan dan transportasi aman",
        "Minim gangguan operasional",
      ]}
    />
  );
}
