import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
    faFacebookF,
    faInstagram,
    faWhatsapp,
    faTiktok
} from "@fortawesome/free-brands-svg-icons"
import Link from "next/link";

export default function BottomBarSection() {
    return (
        <div className="lg:py-20 py-10 lg:px-20 md:px-0 sm:px-0">
            <div
                className="flex lg:flex-row md:flex-row sm:flex-row flex-row-reverse lg:flex-nowrap md:flex-nowrap sm:flex-nowrap flex-wrap items-center justify-center lg:justify-between">
                <p className="text-white opacity-50 font-dm-serif lg:text-base md:text-sm sm:text-sm italic lg:text-center md:text-left sm:text-left xs:text-center">
                    We are
                    Architects and
                    Interior Design
                    specialists in the field of F&B.</p>
                <div className="w-auto lg:hidden md:hidden sm:hidden xs:block">
                    <ul
                        className="lg:hidden md:hidden sm:hidden xs:flex flex-row justify-center">
                        <li>
                            <Link href="https://www.instagram.com/nat.adesign" rel="external" aria-label="Instagram" target={'_blank'} tabIndex={6}
                                className="block py-2 pl-3 pr-4 text-white font-dm-serif">
                                <FontAwesomeIcon icon={faInstagram} />
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.facebook.com/nataproduct" rel="external" aria-label="Facebook" target={'_blank'} tabIndex={7}
                                className="block py-2 pl-3 pr-4 text-white font-dm-serif">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.tiktok.com/@nat.adesign" rel="external" aria-label="Tiktok" target={'_blank'} tabIndex={8}
                                className="block py-2 pl-3 pr-4 text-white font-dm-serif">
                                <FontAwesomeIcon icon={faTiktok} />
                            </Link>
                        </li>
                        <li>
                            <Link href="https://wa.me/6281212301500" rel="external" aria-label="Whatsapp" target={'_blank'} tabIndex={9}
                                className="block py-2 pl-3 pr-4 text-white font-dm-serif">
                                <FontAwesomeIcon icon={faWhatsapp} />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="hidden w-full lg:block md:block sm:block lg:w-auto md:mt-auto sm:mt-auto">
                    <ul
                        className="flex flex-row lg:justify-center md:justify-end sm:justify-end gap-8 md:text-sm sm:text-sm md:font-medium md:border-0 content-end">
                        <li>
                            <Link href="https://www.instagram.com/nat.adesign" rel="external" aria-label="Instagram" target={'_blank'}
                                className="block text-white font-dm-sans md:bg-transparent">Instagram</Link>
                        </li>
                        <li>
                            <Link href="https://www.facebook.com/nataproduct" rel="external" aria-label="Facebook" target={'_blank'}
                                className="block text-white font-dm-sans md:bg-transparent">Facebook</Link>
                        </li>
                        <li>
                            <Link href="https://www.tiktok.com/@nat.adesign" rel="external" aria-label="Tiktok" target={'_blank'}
                                className="block text-white font-dm-sans md:bg-transparent">Tiktok</Link>
                        </li>
                        <li>
                            <Link href="https://wa.me/6281212301500" rel="external" aria-label="Whatsapp" target={'_blank'}
                                className="block text-white font-dm-sans md:bg-transparent">Whatsapp</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}