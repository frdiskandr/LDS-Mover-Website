import ServicePage from "~/components/servicePage";

export default function SafeHandling() {
    return (
        <ServicePage
            title="Safe Handling"
            image="/services/safeHandling.jpg"
            benefits={[
                { title: "High-quality packing materials" },
                { title: "Trained team for handling valuable items" },
                { title: "Insurance available for extra protection" },
            ]}
        >
            We handle your belongings with extra care to ensure maximum safety.
        </ServicePage>
    );
}
