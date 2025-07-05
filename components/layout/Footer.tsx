import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-gray-400 py-6 mt-6">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6 border-b border-gray-700 pb-6">
                <div>
                    <Image
                        src="/assets/Footer Logo.png"
                        alt="Footer-Logo"
                        width={50}
                        height={32}
                    />
                    <p className="mt-2 text-sm">
                        ALX is a platform where travelers can discover and book unique, comfortable, and affordable lodging options worldwide. From cozy city apartments and tranquil countryside retreats to exotic beachside villas, ALX connects you with the perfect place to stay for any trip.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold text-lg mb-2">Explore</h4>
                    <ul>
                        <li className="mb-2">
                            <Link href="/listings" className="hover:underline">
                                Apartments in Dubai
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/listings" className="hover:underline">
                                Hotels in New York
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/listings" className="hover:underline">
                                Villa in Spain
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/listings" className="hover:underline">
                                Mansion in Indonesia
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-lg mb-2">Company</h4>
                    <ul>
                        <li className="mb-2">
                            <Link href="/about" className="hover:underline">
                                About Us
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/blog" className="hover:underline">
                                Blog
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/career" className="hover:underline">
                                Career
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/customers" className="hover:underline">
                                Customers
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/brand" className="hover:underline">
                                Brand
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-lg mb-2">Help</h4>
                    <ul>
                        <li className="mb-2">
                            <Link href="/support" className="hover:underline">
                                Support
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/cancelBooking" className="hover:underline">
                                Cancel Booking
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/refundsProcess" className="hover:underline">
                                Refunds Process
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex items-center justify-between mx-auto p-3 ">
                <p className="text-sm">
                    Some hotel requires you cancel more than 24 hours before check-in. Details <Link href=" " className="text-green-700">Here</Link>
                </p>

                <div>
                    <ul className="flex flex-col md:flex-row gap-2 md:gap-6">
                        <li className="text-sm">
                            <Link href="/terms" className="hover:underline">
                                Terms of Service
                            </Link>
                        </li>
                        <li className="text-sm">
                            <Link href="/policy" className="hover:underline">
                                Policy Service
                            </Link>
                        </li>
                        <li className="text-sm">
                            <Link href="/cookies" className="hover:underline">
                                Cookies Policy
                            </Link> 
                        </li>
                        <li className="text-sm">
                            <Link href="/partners" className="hover:underline">
                                Partners
                            </Link> 
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;