import ServicePage from "~/components/servicePage";

export default function InternationalMoving() {
  return (
    <ServicePage
      title="International Moving Service"
      description="Kami menyediakan layanan pindahan internasional dengan proses yang mudah dan aman."
      image="https://fidelisglobal.in/sites/default/files/content-images/service-slider/intro-international-relocation.jpg"
      benefits={[
        "Dokumentasi lengkap dan aman",
        "Layanan door-to-door",
        "Keamanan barang terjamin",
      ]}
    />
  );
}
