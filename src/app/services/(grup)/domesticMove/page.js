import ServicePage from "~/components/servicePage";

export default function DomesticsMoves() {
    return (
        <ServicePage
            title="Domestics Moves"
            image="/services/domesticService.jpg"
            benefits={[
              {
                "title": "Pre-move Survey",
                "description": "Our professional moving consultants will arrange a free pre-move survey at your residence to make an estimation of volume you have in order to be able for us to provide our competitive rates for your move."
              },
              {
                "title": "Packing and Unpacking",
                "description": "We use high-quality packing materials to protect your belongings. From fragile items to large furniture, our team ensures everything is securely packed for Domestic transport."
              },
              {
                "title": "Shipping Options",
                "description": "Depending on your destination and timeline, we offer flexible shipping solutions, including sea freight, air freight, and land transportation, to ensure the safe and timely delivery of your goods."
              },
              {
                "title": "Insurance Coverage",
                "description": "For added peace of mind, we provide comprehensive insurance options to safeguard your items during transit."
              },
              {
                "title": "Destination Services",
                "description": "Our global network of trusted partners ensures that your belongings are safely delivered to your new location, with optional unpacking services available."
              }
            ]}
        >
            If you want to move within Indonesia or within city in Indonesia,
            with LDS Movers you can experience a smooth and hassle-free
            transition to your new home or office within cities in Indonesia.
            LDS specializes also in <b>Domestic moving services</b>  designed to cater
            to individuals and families. We provide comprehensive and customized
            solutions to meet all your moving needs. <br /> <br /> 
            <h3 className="font-bold">Comprehensive International Moving Solutions</h3>
            <p>At LDS, we understand that every move is unique. That’s why we offer <span className="font-bold">end-to-end moving solutions </span> tailored to your specific requirements. Our services cover:</p>
        </ServicePage>
    );
}
