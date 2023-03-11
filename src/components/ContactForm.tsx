import dynamic from "next/dynamic";
import { useState, useRef } from "react";
const InputComponent = dynamic(() => import("@/components/common/InputComponent"), { ssr: false });

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

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [question, setQuestion] = useState("");
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
        formData.append("email", email);
        formData.append("question", question);

        fetch(`${process.env.BASE_URL + 'api/contactform'}`, {
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
        <form ref={form} onSubmit={handleSubmit} className="flex-1 grid grid-cols-1 gap-6">
            <InputComponent props={{ type: 'text', id: 'name', label: 'Nama lengkap', placeHolder: 'Nama lengkap', onChangeListener: setName }} />
            <InputComponent props={{ type: 'email', id: 'email', label: 'Email', placeHolder: 'Alamat Email', onChangeListener: setEmail }} />
            <InputComponent props={{ type: 'text', id: 'question', label: 'Pertanyaan', isTextArea: true, placeHolder: 'Apa ada pertanyaan yang ingin Anda tanyakan? Tim Terbaik kami siap untuk membantu.', onChangeListener: setQuestion }} />
            {
                loading ? (
                    <div className="flex flex-row justify-between">
                        <button disabled={loading} type="reset" className="w-full animate-pulse bg-secondary my-6 py-6 px-10 font-dm-sans font-bold lg:text-xl text-base">
                            Sedang Mengirim..
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-row justify-between">
                        <button disabled={loading} type="submit" className="border-2 border-[#707070] text-center my-6 py-6 px-10 text-partial font-dm-sans font-bold lg:text-xl text-base">
                            {result?.success ? 'Terimakasih, Tunggu balasan dari kami ya..' : 'Kirim'}
                        </button>
                    </div>
                )
            }
        </form>
    )
}
