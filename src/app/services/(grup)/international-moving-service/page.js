import ServicePage from "~/components/servicePage";

export default function InternationalMoving() {
    return (
        <ServicePage
            title="International Moving Service"
            description="We provide seamless and secure international relocation services."
            image="https://fidelisglobal.in/sites/default/files/content-images/service-slider/intro-international-relocation.jpg"
            benefits={[
                "Complete and secure documentation",
                "Door-to-door service",
                "Guaranteed item safety",
            ]}
        />
    );
}
