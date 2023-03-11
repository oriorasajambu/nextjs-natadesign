import dynamic from "next/dynamic";
import Link from "next/link";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faWhatsapp, faTiktok } from "@fortawesome/free-brands-svg-icons"

const InputComponent = dynamic(() => import("@/components/common/InputComponent"), { ssr: false });
const DividerXComponent = dynamic(() => import("@/components/common/DividerXComponent"), { ssr: false });
const SubtitleComponent = dynamic(() => import('@/components/common/SubtitleComponent'), { ssr: false });

interface Result {
    code: number;
    success: boolean;
    data?: Data;
}

interface Data {
    name?: string;
    email?: string;
    question?: string;
    old?: Old;
}

interface Old {
    name?: string;
    email?: string;
    question?: string;
}

export default function PriceEstimation() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [type, setType] = useState("");
    const [size, setSize] = useState("");
    const [location, setLocation] = useState("");
    const [job, setJob] = useState("");
    const [time, setTime] = useState("");
    const [info, setInfo] = useState("");
    const [result, setResult] = useState<Result | null>();
    const [loading, setLoading] = useState<boolean>(false);
    const form = useRef<HTMLFormElement>(null);

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        setLoading(true);
        setResult(null);

        e.preventDefault();
        const formData = new URLSearchParams();
        formData.append("name", name);
        formData.append("phone", phone);
        formData.append("email", email);
        formData.append("type", type);
        formData.append("size", size);
        formData.append("location", location);
        formData.append("job", job);
        formData.append("time", time);
        formData.append("info", info);

        fetch(`${process.env.BASE_URL + 'api/inquiryform'}`, {
            body: formData.toString(),
            method: "post",
            headers: {
                "content-type": "application/x-www-form-urlencoded",
            },
        }).then(async (result) => {
            form.current?.reset();
            setLoading(false);
            setResult(await result.json());
        });
    };
    return (
        <div className='w-full flex flex-row justify-center bg-[#FFFBF2]'>
            <div className='lg:w-[1200px] md:w-[864px] sm:w-[608px] xs:w-[280px] lg:px-20 md:px-0 sm:px-0'>
                <div className='grid grid-cols-1 grid-flow-row'>
                    <div className='flex flex-row justify-between items-center pt-14'>
                        <SubtitleComponent className='uppercase text-primary' subTitle='Estimasi Harga' />
                    </div>
                    <form ref={form} onSubmit={handleSubmit} className="lg:grid lg:grid-cols-2 flex flex-col gap-x-20 gap-y-6 pt-10">
                        <DividerXComponent />
                        <DividerXComponent className={'lg:block hidden'} />
                        <InputComponent props={{
                            type: 'text',
                            id: 'name',
                            label: 'Nama',
                            placeHolder: 'Masukkan Nama Lengkap Anda',
                            onChangeListener: setName
                        }} />
                        <InputComponent props={{
                            type: 'text',
                            id: 'phone',
                            label: 'Nomor HP / WhatsApp',
                            placeHolder: '0812 3456 7890',
                            onChangeListener: setPhone
                        }} />
                        <InputComponent props={{
                            type: 'text',
                            id: 'email',
                            label: 'Email',
                            placeHolder: 'emailanda@gmail.com',
                            onChangeListener: setEmail
                        }} />
                        <InputComponent props={{
                            type: 'text',
                            id: 'type',
                            label: 'Jenis',
                            placeHolder: 'Café / Restoran / Coffee Shop / dll',
                            onChangeListener: setType
                        }} />
                        <InputComponent props={{
                            type: 'text',
                            id: 'size',
                            label: 'Ukuran',
                            placeHolder: 'Dalam satuan m2',
                            onChangeListener: setSize
                        }} />
                        <InputComponent props={{
                            type: 'text',
                            id: 'location',
                            label: 'Lokasi',
                            placeHolder: 'Nama Kota',
                            onChangeListener: setLocation
                        }} />
                        <InputComponent props={{
                            type: 'text',
                            id: 'job',
                            label: 'Pengerjaan',
                            placeHolder: 'Konstruksi atau Renovasi',
                            onChangeListener: setJob
                        }} />
                        <InputComponent props={{
                            type: 'text',
                            id: 'time',
                            label: 'Estimasi Waktu',
                            placeHolder: '3 Bulan',
                            onChangeListener: setTime
                        }} />
                        <InputComponent props={{
                            className: 'col-span-2',
                            type: 'text',
                            id: 'additional_info',
                            label: 'Informasi Tambahan',
                            isTextArea: true,
                            placeHolder: 'Untuk mempercepat proses estimasi harga, mohon berikan rincian deskripsi proyek Anda secara detail dan lengkap. Terima kasih.',
                            onChangeListener: setInfo
                        }} />
                        <div className="flex flex-row xs:flex-col justify-between col-span-2 my-6">
                            <button disabled={loading} type="reset" className={`${loading ? 'animate-pulse bg-secondary' : ''} border-2 border-[#707070] text-center py-6 px-10 text-partial font-dm-sans font-bold lg:text-xl text-base`}>
                                {loading ? 'Sedang Mengirim..' : result?.success ? 'Terimakasih, Tunggu balasan dari kami ya..' : 'Kirim Pesan'}
                            </button>
                            <div className="flex flex-col justify-between items-end xs:items-center xs:gap-6 xs:mt-6">
                                <h4 className="text-xl text-partial font-dm-sans font-bold">Temukan Kami</h4>
                                <div className="flex justify-end gap-6">
                                    <div className="text-partial h-6">
                                        <Link aria-label="Facebook" href="https://www.facebook.com/nataproduct" target={'_blank'} rel="external">
                                            <FontAwesomeIcon icon={faFacebookF} className="w-full h-full" />
                                        </Link>
                                    </div>
                                    <div className="text-partial h-6">
                                        <Link aria-label="Instagram" href="https://www.instagram.com/nat.adesign" target={'_blank'} rel="external">
                                            <FontAwesomeIcon icon={faInstagram} className="w-full h-full" />
                                        </Link>
                                    </div>
                                    <div className="text-partial h-6">
                                        <Link aria-label="Tiktok" href="https://www.tiktok.com/@nat.adesign" target={'_blank'} rel="external">
                                            <FontAwesomeIcon icon={faTiktok} className="w-full h-full" />
                                        </Link>
                                    </div>
                                    <div className="text-partial h-6">
                                        <Link aria-label="Whatsapp" href="https://wa.me/6281212301500" target={'_blank'} rel="external">
                                            <FontAwesomeIcon icon={faWhatsapp} className="w-full h-full" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <DividerXComponent className={'col-span-2'} />
                    </form>
                </div>
            </div>
        </div>
    )
}
