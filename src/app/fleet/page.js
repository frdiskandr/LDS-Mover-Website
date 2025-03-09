import CompanyProfile from "~/components/companyProfile";
import OurFleet from "~/components/layout/ourFleet";
import HeaderImage from "~/components/template/headerImage";

function FlatePage() {
    return (
        <div className="relative">
            <HeaderImage img="https://www.telkomsel.com/enterprise/sites/default/files/2024-01/ragam%20armada%20yang%20dapat%20dikelola%20dengan%20fleet%20management%20system.png">Fleet</HeaderImage>
            <section id="our-services" className="relative bg">
                <div className="container mx-auto w-full  bg-[#F4F4F4] p-2 rounded-2xl shadow-md text-black">
                    <OurFleet/>
                </div>
            </section>
            <CompanyProfile/>
        </div>
    );
}

export default FlatePage;
