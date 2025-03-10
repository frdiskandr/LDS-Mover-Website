"use server";
import Link from "next/link";

export default async function Footer() {
    return (
        <div className="flex items-end w-full relative bg-gray-100">
            <footer className="w-full text-gray-700 bg-gray-100 body-font">
                <div className="container flex flex-col flex-wrap px-5 py-16 mx-auto md:items-center lg:items-start md:flex-row">
                    {/* Logo & Company Info */}
                    <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
                        <div className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                            <Link
                                href="/"
                                className="text-2xl font-bold w-[60%]"
                            >
                                LDS Movers
                                <div className="flex flex-row mt-1">
                                    <div className="bg-red-600 w-1/3 h-2 rounded-l-full"></div>
                                    <div className="bg-yellow-500 w-1/3 h-2"></div>
                                    <div className="bg-white w-1/3 h-2 rounded-r-full"></div>
                                </div>
                            </Link>
                        </div>
                        <p className="mt-3 text-sm text-gray-500">
                            Solusi logistik dan relokasi profesional di
                            Indonesia.
                        </p>

                        {/* Social Media Icons */}
                        <div className="mt-4">
                            <span className="inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
                                <a
                                    href="#"
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <svg
                                        fill="currentColor"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="ml-3 text-gray-500 hover:text-gray-700"
                                >
                                    <svg
                                        fill="currentColor"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="ml-3 text-gray-500 hover:text-gray-700"
                                >
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <rect
                                            width="20"
                                            height="20"
                                            x="2"
                                            y="2"
                                            rx="5"
                                        ></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="ml-3 text-gray-500 hover:text-gray-700"
                                >
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="none"
                                            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                        ></path>
                                        <circle
                                            cx="4"
                                            cy="4"
                                            r="2"
                                            stroke="none"
                                        ></circle>
                                    </svg>
                                </a>
                            </span>
                        </div>
                    </div>

                    {/* Footer Links */}
                    <div className="flex flex-wrap flex-grow mt-10 text-center md:pl-20 md:mt-0 md:text-left">
                        {[
                            {
                                title: "Company",
                                links: [
                                    { name: "About", link: "/about" },
                                    { name: "Our Team", link: "#" },
                                    { name: "Careers", link: "#" },
                                ],
                            },
                            {
                                title: "Services",
                                links: [
                                    {name: "Relocation", link:"#"},
                                    {name: "Relocation", link:"#"},
                                    {name: "Storage", link:"#"},
                                    {name:"Packing", link:"#"},
                                ],
                            },
                            {
                                title: "Support",
                                links: [{name: "FAQ", link:"#"}, {name: "Contact", link:"/contact"}, {name:"Track Shipment", link:"/fleet"}],
                            },
                            {
                                title: "Contact",
                                links: [
                                    {name: "info@ldsmovers.com", link:"mailto:info@ldsmovers.com"},
                                    { name: "+62 812-3456-7890", link: "tel:+6281234567890" },
                                    {name: "+62 896-3788-8298", link:"https://wa.me/+6289637888298"},
                                ],
                            },
                        ].map((section, index) => (
                            <div
                                key={index}
                                className="w-full px-4 lg:w-1/4 md:w-1/2"
                            >
                                <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase">
                                    {section.title}
                                </h2>
                                <nav className="mb-10 list-none">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex} className="mt-3">
                                            <Link
                                                href={link.link}
                                                className="text-gray-500 cursor-pointer hover:text-gray-900"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </nav>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="bg-gray-300 w-screen relative">
                    <div className="container px-5 py-4 mx-auto">
                        <p className="text-sm text-gray-700 capitalize xl:text-center">
                            © 2025 LDS Movers Indonesia. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
