"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdown, setDropdown] = useState({ services: false, fleet: false });
    const router = useRouter();

    return (
        <nav className="bg-primary shadow-md fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold">
                    LDS Movers
                    <div className="flex flex-row">
                        <div className="bg-red-600 w-1/3 h-2 rounded-l-full  relative left-1"></div>
                        <div className="bg-yellow-500 w-1/3 h-2  relative right-1"></div>
                        <div className="bg-white w-1/3 h-2 rounded-r-full relative right-1"></div>
                    </div>
                </Link>

                {/* Menu Desktop */}
                <ul className="hidden md:flex space-x-8  font-medium">
                    <li>
                        <Link
                            href="/#"
                            className="hover:text-blue-500 transition"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className="hover:text-blue-500 transition"
                        >
                            About
                        </Link>
                    </li>

                    {/* Dropdown Services */}
                    <li
                        className="relative group"
                        onMouseLeave={() =>
                            setDropdown({
                                ...dropdown,
                                services: false,
                            })
                        }
                        onMouseEnter={() =>
                            setDropdown({
                                ...dropdown,
                                services: !dropdown.services,
                            })
                        }
                    >
                        <button
                            onClick={() => {
                                router.push("/services");
                            }}
                            className="flex items-center hover:text-blue-500 transitio relative"
                        >
                            <div className="absolute w-[50px] h-[50px]"></div>
                            Services <ChevronDown size={18} className="ml-1" />
                        </button>
                        {dropdown.services && (
                            <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden text-gray-900">
                                <li>
                                    <Link
                                        href="/services/international-moving-service"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        International moving service
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services/domesticMove"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Domestics moves
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services/officeMoving"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Office moving
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services/saveHandling"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Safe handling
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* Dropdown Our Fleet */}
                    <li
                        className="relative group"
                        onMouseLeave={() =>
                            setDropdown({
                                ...dropdown,
                                fleet: false,
                            })
                        }
                        onMouseEnter={() =>
                            setDropdown({
                                ...dropdown,
                                fleet: !dropdown.fleet,
                            })
                        }
                    >
                        <button
                            onClick={() => {
                                router.push("/fleet");
                            }}
                            className="flex items-center hover:text-blue-500 transition relative"
                        >
                            <div className="absolute w-[50px] h-[50px]"></div>
                            Our Fleet <ChevronDown size={18} className="ml-1" />
                        </button>
                        {dropdown.fleet && (
                            <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden text-gray-900">
                                <li>
                                    <Link
                                        href="/fleet/truckCooler"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Truck Cooler/Frezer
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/fleet/truckBox"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Truck Box
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/fleet/truckBak"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Truck Bak Terbuka
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <Link
                            href="/clients"
                            className="hover:text-blue-500 transition"
                        >
                            Clients
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Button Menu Mobile */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden "
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Menu untuk Mobile */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md absolute top-full left-0 w-full py-4">
                    <ul className="flex flex-col items-center space-y-4 text-gray-700 font-medium">
                        <li>
                            <Link href="/" onClick={() => setIsOpen(false)}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </Link>
                        </li>

                        {/* Dropdown Services di Mobile */}
                        <li className="relative">
                            <button
                                onClick={() =>
                                    setDropdown({
                                        ...dropdown,
                                        services: !dropdown.services,
                                    })
                                }
                                className="flex items-center"
                            >
                                Services{" "}
                                <ChevronDown size={18} className="ml-1" />
                            </button>
                            {dropdown.services && (
                                <ul className="w-full bg-gray-100 rounded-md">
                                    <li>
                                        <Link
                                            href="/services/moving"
                                            className="block px-4 py-2"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Moving Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/services/logistics"
                                            className="block px-4 py-2"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Logistics
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/services/storage"
                                            className="block px-4 py-2"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Storage Solutions
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        {/* Dropdown Our Fleet di Mobile */}
                        <li className="relative">
                            <button
                                onClick={() =>
                                    setDropdown({
                                        ...dropdown,
                                        fleet: !dropdown.fleet,
                                    })
                                }
                                className="flex items-center"
                            >
                                Our Fleet{" "}
                                <ChevronDown size={18} className="ml-1" />
                            </button>
                            {dropdown.fleet && (
                                <ul className="w-full bg-gray-100 rounded-md">
                                    <li>
                                        <Link
                                            href="/fleet/trucks"
                                            className="block px-4 py-2"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Trucks
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/fleet/vans"
                                            className="block px-4 py-2"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Vans
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/fleet/specialty"
                                            className="block px-4 py-2"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Specialty Vehicles
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li>
                            <Link
                                href="/clients"
                                onClick={() => setIsOpen(false)}
                            >
                                Clients
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
