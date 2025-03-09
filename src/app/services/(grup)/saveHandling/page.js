import ServicePage from "~/components/servicePage";

export default function SafeHandling() {
  return (
    <ServicePage
      title="Safe Handling"
      description="Kami menangani barang Anda dengan kehati-hatian ekstra untuk memastikan keamanan maksimal."
      image="/services/save-handling.jpg"
      benefits={[
        "Material packing berkualitas tinggi",
        "Tim yang terlatih menangani barang berharga",
        "Asuransi tersedia untuk perlindungan ekstra",
      ]}
    />
  );
}
