import ServicePage from "~/components/servicePage";

export default function OfficeMoving() {
    return (
        <ServicePage
            title="Office Moving"
            image="/services/officeMove.jpg"
            benefits={[
                {
                    title: "Pre-move Survey",
                    description:
                        "Our professional moving consultants will arrange a free pre-move survey at your residence to make an estimation of volume you have in order to be able for us to provide our competitive rates for your move.",
                },
                {
                    title: "Packing and Unpacking",
                    description:
                        "We use high-quality packing materials to protect your belongings. From fragile items to large furniture, our team ensures everything is securely packed for transport.",
                },
                {
                    title: "Transportation",
                    description:
                        "We arrange transportation for your office goods from origin to your new office to ensure the safe and timely delivery of your office goods.",
                },
            ]}
        >
            LDS Movers specialise in office relocations. We move offices, banks,
            hospitals, restaurants, factories and also embassies. There is
            absolutely no limitation to what we can move. Best of all, we make
            all this happen stress free. <br /> <br />
            Moving a business be a very critical operation for your company.
            During the moving process, sections of your company will be out of
            business. Your everyday office equipment, files, computers, records
            and phones will be inaccessible. Staff may not be able to access the
            tools they need to serve your customers. You can not afford to trust
            your company to a mover that may not perform to your expectations..{" "}
            <br /> <br />
            At LDS Movers we know about commercial moving and have built a
            reputation for excellence. Having dealt with many high profile
            clients, we know how sensitive the downtime can be <br /> <br />
            Hiring an experienced, office relocation company will assure your
            business is moved quickly, efficiently and cost effectively,
            minimizing the time you are unable to continue working. <br /><br />
            <h3 className="font-bold">Comprehensive International Moving Solutions</h3>
            At LDS, we understand that every move is unique. That’s why we offer{" "}
            <b>end-to-end moving solutions</b> tailored to your specific
            requirements. Our services cover:
        </ServicePage>
    );
}
