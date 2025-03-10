import ServicePage from "~/components/servicePage";

export default function SafeHandling() {
    return (
        <ServicePage
            title="Safe Handling"
            description="We handle your belongings with extra care to ensure maximum safety."
            image="/services/save-handling.jpg"
            benefits={[
                "High-quality packing materials",
                "Trained team for handling valuable items",
                "Insurance available for extra protection",
            ]}
        />
    );
}
