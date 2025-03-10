import ServicePage from "~/components/servicePage";

export default function OfficeMoving() {
    return (
        <ServicePage
            title="Office Moving"
            description="We help relocate your office efficiently with minimal operational disruption."
            image="/services/officeService.jpg"
            benefits={[
                "Well-planned moving process",
                "Secure packing and transportation",
                "Minimal operational downtime",
            ]}
        />
    );
}
