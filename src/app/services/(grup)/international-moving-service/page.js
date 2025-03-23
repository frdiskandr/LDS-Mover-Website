import ServicePage from "~/components/servicePage";

export default function InternationalMoving() {
    return (
        <ServicePage
            title="International Moving Service"
            image="/services/international-relocation.jpg"
            benefits={[
                {
                    title: "Pre-move Survey",
                    description:
                        "Our professional moving consultants will arrange a free pre-move survey at your residence to make an estimation of volume you have in order to be able for us to provide our competitive rates for your move.",
                },
                {
                    title: "Packing and Unpacking",
                    description:
                        "We use high-quality packing materials to protect your belongings. From fragile items to large furniture, our team ensures everything is securely packed for international transport.",
                },
                {
                    title: "Customs Clearance",
                    description:
                        "Our experienced team manages all the necessary paperwork and complies with local customs regulations, ensuring smooth border crossings and avoiding delays.",
                },
                {
                    title: "Shipping Options",
                    description:
                        "Depending on your destination and timeline, we offer flexible shipping solutions, including sea freight, air freight, and land transportation, to ensure the safe and timely delivery of your goods.",
                },
                {
                    title: "Insurance Coverage",
                    description:
                        "For added peace of mind, we provide comprehensive insurance options to safeguard your items during transit.",
                },
                {
                    title: "Destination Services",
                    description:
                        "Our global network of trusted partners ensures that your belongings are safely delivered to your new location, with optional unpacking services available.",
                },
            ]}
        >
            Planning an International move can be quite hard and stressful
            process. We know from our experience what it is like to move across
            borders with children, but with LDS Movers you can experience a
            smooth and hassle-free transition to your new home or office abroad.
            LDS specializes in <b>International moving services</b> designed to cater
            to individuals and families. We provide comprehensive and customized
            solutions to meet all your moving needs. <br />
            <br />
            <h3 className="font-bold">Comprehensive International Moving Solutions</h3>
            At LDS, we understand that every international move is unique.
            That’s why we offer <b>end-to-end moving solutions</b> tailored to your
            specific requirements. Our services cover:
        </ServicePage>
    );
}
