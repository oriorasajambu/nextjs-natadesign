import Image from "next/image";
import icon from '../../public/assets/images/favicon.svg';

export default function FooterSection() {
    return (
        <div className="bg-primary py-10 flex flex-row justify-center">
            <div className="lg:w-[1200px] md:w-[864px] sm:w-[608px] xs:w-[280px] lg:px-20 md:px-0 sm:px-0">
                <div className="flex flex-col lg:flex-row md:flex-row sm:flex-row justify-center lg:justify-between md:justify-between sm:justify-between items-center text-center lg:text-start md:text-start sm:text-start">
                    <div className="flex flex-col lg:flex-row md:flex-row sm:flex-row items-center mb-0">
                        <Image width={67} height={67} src={icon.src} className="mb-0" alt="" />
                        <div className="flex flex-col lg:ml-6 md:ml-6 sm:ml-6">
                            <p className="text-white font-dm-sans text-base leading-6">Nat.a Design | Arsitek dan
                                Interior Desain <br /> spesialis di bidang F&B sejak 2014.</p>
                        </div>
                    </div>
                    <p className="text-white font-dm-sans text-base leading-6 text-end">Design by Oijii Studio <br /> Nat.a Design ©
                        2023</p>
                </div>
            </div>
        </div>
    )
}