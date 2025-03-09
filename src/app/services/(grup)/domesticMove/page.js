import Testimonials from "~/components/layout/testimoni";
import HeaderImage from "~/components/template/headerImage";

function DomesticMovePage() {
    return (
        <div className="relative">
            <HeaderImage>Services</HeaderImage>
            <section id="service" className="relative bg">
                <article className="container mx-auto w-full  bg-[#F4F4F4] p-2 rounded-2xl shadow-md text-black">
                    ini isian service
                </article>
            </section>
            <section id="our-services" className="relative bg p-2">
                <div className="container mx-auto w-full pb-10 bg-[#F4F4F4] p-2 rounded-2xl shadow-2xl text-black pt-10 flex flex-col items-center">
                    <Testimonials />
                    <a
                        href="#"
                        className="mt-8 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-3xl"
                    >
                        Plant Your Next Move
                    </a>
                </div>
            </section>
        </div>
    )
}

export default DomesticMovePage;