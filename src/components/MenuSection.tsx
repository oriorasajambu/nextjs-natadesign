import Image from 'next/image';
import icon from '../../public/assets/images/favicon.svg';
import Link from 'next/link';
import React from 'react'

interface MenuProps {
    dismissModal: () => void;
}

export default function MenuSection({ props }: { props: MenuProps }) {
    return (
        <div
            onClick={props.dismissModal}
            className='fixed backdrop-blur-xl w-screen h-screen z-10 flex flex-col justify-center p-8'>
            <div className='rounded-xl bg-primary w-full h-full shadow-lg flex flex-col xs:block'>
                <div className='flex flex-col justify-center h-full'>
                    <Link href="/" aria-label='Home Page' className="mx-auto h-[67px] w-[67px] relative mb-10">
                        <Image src={icon.src} fill alt="Natadesign Logo" />
                    </Link>
                    <Link aria-label='Home Page' className="block py-2 pl-3 pr-3 text-center text-white lg:text-lg md:text-sm font-dm-sans border-b-2 border-transparent md:bg-transparent md:p-0 hover:border-white"
                        href="/">Beranda</Link>
                    <Link aria-label='Portofolio' className="block py-2 pl-3 pr-3 text-center text-white lg:text-lg md:text-sm font-dm-sans border-b-2 border-transparent md:bg-transparent md:p-0 hover:border-white"
                        href="/portofolio">Portofolio</Link>
                    <Link aria-label='About Us' className="block py-2 pl-3 pr-3 text-center text-white lg:text-lg md:text-sm font-dm-sans border-b-2 border-transparent md:bg-transparent md:p-0 hover:border-white"
                        href="/about">Tentang</Link>
                    <Link aria-label='Articles' className="block py-2 pl-3 pr-3 text-center text-white lg:text-lg md:text-sm font-dm-sans border-b-2 border-transparent md:bg-transparent md:p-0 hover:border-white"
                        href="/articles">Artikel</Link>
                    <Link aria-label='Articles' className="block py-2 pl-3 pr-3 text-center text-white lg:text-lg md:text-sm font-dm-sans border-b-2 border-transparent md:bg-transparent md:p-0 hover:border-white"
                        href="/media">Media</Link>
                    <Link aria-label='Estimate Price' className="block py-2 pl-3 pr-3 text-center text-white lg:text-lg md:text-sm font-dm-sans border-b-2 border-transparent md:bg-transparent md:p-0 hover:border-white"
                        href="/information">Estimasi Harga</Link>
                    <Link aria-label='Contact' className="block py-2 pl-3 pr-3 text-center text-white lg:text-lg md:text-sm font-dm-sans border-b-2 border-transparent md:bg-transparent md:p-0 hover:border-white"
                        href="/contact">Kontak</Link>
                </div>
            </div>
        </div>
    )
}
