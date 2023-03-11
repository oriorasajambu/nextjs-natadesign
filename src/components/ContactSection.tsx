import Image from "next/image";
import IconInfo from "../../public/assets/images/icon_info.svg";
import AIcon from "../../public/assets/images/A_icon.png";
import OijiIcon from "../../public/assets/images/oiji_icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faWhatsapp, faTiktok } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link";
import { ContactModel } from "@/model/props";
import useSWR from 'swr';
import dynamic from "next/dynamic";

const ContactForm = dynamic(() => import("@/components/ContactForm"));
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ContactSection() {
    const { data, isLoading, error } = useSWR<ContactModel>(`${process.env.BASE_URL + 'api/contacts'}`, fetcher);
    if (isLoading) return <></>
    if (error) return <></>
    if (!data) return <></>
    return (
        <div className="bg-[#FFFBF2] py-20 xs:py-10 flex flex-row xs:flex-col items-center justify-center">
            <div className="lg:w-[1200px] md:w-[864px] sm:w-[608px] xs:w-[280px] lg:px-20 md:px-0 sm:px-0">
                <div className="flex flex-row xs:flex-col justify-between gap-12">
                    <div className="flex flex-col gap-12">
                        <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-between gap-12">
                            <div className="flex flex-row xs:flex-col xs:gap-6 flex-1 border-b-[1px] border-primary pb-12 ">
                                <p className="text-partial font-dm-sans font-bold lg:text-xl lg:basis-1/3 md:basis-1/4 sm:basis-1/5 xs:text-center">Alamat</p>
                                <p dangerouslySetInnerHTML={{ __html: data.address }} className="font-dm-sans text-partial lg:text-xl lg:basis-2/3 md:basis-3/4 sm:basis-4/5 xs:text-center" />
                            </div>
                            <div className="flex flex-row xs:flex-col xs:gap-6 flex-1 border-b-[1px] border-primary pb-12">
                                <p className="text-partial font-dm-sans font-bold lg:text-xl lg:basis-1/3 md:basis-1/4 basis-1/5 xs:text-center">Lokasi</p>
                                <p dangerouslySetInnerHTML={{ __html: data.location }} className="font-dm-sans text-partial lg:text-xl lg:basis-2/3 md:basis-3/4 basis-4/5 xs:text-center" />
                            </div>
                        </div>
                        <div className="flex lg:flex-row md:flex-col-reverse sm:flex-col-reverse xs:flex-col-reverse justify-between gap-12">
                            <div className="flex flex-col flex-1 gap-12 lg:gap-12">
                                <div className="flex flex-row xs:flex-col xs:gap-6 grow border-b-[1px] border-primary pb-12">
                                    <p className="text-partial font-dm-sans font-bold lg:text-xl lg:basis-1/3 md:basis-1/4 basis-1/5 xs:text-center">Kontak</p>
                                    <p dangerouslySetInnerHTML={{ __html: data.contact }} className="font-dm-sans text-partial lg:text-xl lg:basis-2/3 md:basis-3/4 basis-4/5 xs:text-center"></p>
                                </div>
                                <div className="flex flex-row xs:flex-col xs:gap-6 content-start grow border-b-[1px] border-primary pb-12">
                                    <div className="lg:h-12 md:h-12 h-12 relative self-start xs:self-center lg:basis-1/3 md:basis-1/4 basis-1/5">
                                        <Image width={48} height={48} src={IconInfo.src} alt="Logo Information" />
                                    </div>
                                    <p dangerouslySetInnerHTML={{ __html: data.info }} className="font-dm-sans text-partial leading-8 lg:text-xl lg:basis-2/3 md:basis-3/4 basis-4/5" />
                                </div>
                            </div>
                            <div className="flex-1 h-full min-h-[360px] xs:hidden">
                                <div style={{ position: 'relative', textAlign: 'right', height: '100%', width: '100%' }}>
                                    <div style={{ overflow: 'hidden', background: 'none !important', height: '100%', width: '100%' }}>
                                        <iframe width="100%" height="100%" id="gmap_canvas" title="Nat.A Design Google Map Location"
                                            src={data.map}
                                            style={{ border: 0, overflow: 'hidden', margin: '0 0' }}>
                                        </iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-12">
                            <div className="flex flex-col flex-1 gap-12 lg:gap-12">
                                <div className="flex flex-row xs:flex-col h-[101.80px] xs:gap-6 border-b-[1px] border-primary pb-12">
                                    <p className="text-partial font-dm-sans font-bold lg:text-xl grow-0 lg:basis-1/3 md:basis-1/4 basis-1/5 xs:text-center">Temukan <br className="block xs:hidden" /> Kami</p>
                                    <div className="flex flex-row content-center xs:justify-center gap-6 w-full lg:basis-2/3 md:basis-3/4 basis-4/5 mt-1">
                                        <div className="text-partial h-6">
                                            <Link aria-label="Facebook" href="https://www.facebook.com/nataproduct" target={'_blank'} rel="external"> <FontAwesomeIcon icon={faFacebookF} className="w-full h-full" /></Link>
                                        </div>
                                        <div className="text-partial h-6">
                                            <Link aria-label="Instagram" href="https://www.instagram.com/nat.adesign" target={'_blank'} rel="external"><FontAwesomeIcon icon={faInstagram} className="w-full h-full" /></Link>
                                        </div>
                                        <div className="text-partial h-6">
                                            <Link aria-label="Tiktok" href="https://www.tiktok.com/@nat.adesign" target={'_blank'} rel="external"><FontAwesomeIcon icon={faTiktok} className="w-full h-full" /></Link>
                                        </div>
                                        <div className="text-partial h-6">
                                            <Link aria-label="Whatsapp" href="https://wa.me/6281212301500" target={'_blank'} rel="external"><FontAwesomeIcon icon={faWhatsapp} className="w-full h-full" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-6 lg:gap-12 flex-1">
                                    <p className="text-partial font-dm-sans font-bold text-xl xs:text-center">Subsidiary</p>
                                    <div className="flex flex-row xs:flex-1 xs:gap-6 gap-12 items-center justify-between h-[90px]">
                                        <div className="w-[67px] h-[52px] relative">
                                            <Image src={OijiIcon.src} fill alt="Logo Oiji" />
                                        </div>
                                        <span className="w-0.5 bg-partial py-8 xs:hidden" />
                                        <div className="font-dm-sans text-partial text-xl leading-normal flex-1 xs:text-center">
                                            <p>Brand Designers & <br className="lg:block hidden" /> Social Media Consultant</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row xs:flex-1 xs:gap-6 gap-12 items-center justify-between h-[90px]">
                                        <div className="w-[67px] h-[70px] relative">
                                            <Image src={AIcon.src} fill alt="Logo Andara" />
                                        </div>
                                        <span className="w-0.5 bg-partial py-8 xs:hidden" />
                                        <div className="font-dm-sans text-partial text-xl leading-normal flex-1 xs:text-center">
                                            <p>Architecture & Interiors, <br className="lg:block hidden" /> Custom Furniture, <br className="lg:block hidden" /> Home Decoration</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}