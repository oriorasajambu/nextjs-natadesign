import dynamic from "next/dynamic";
const DividerXComponent = dynamic(() => import("@/components/common/DividerXComponent"), { ssr: false });

interface InputProps {
    label: string;
    id: string;
    placeHolder: string;
    isTextArea?: boolean | null;
    type: string;
    className?: string;
    onChangeListener: (value: string) => void;
}

export default function InputComponent({ props }: { props: InputProps }) {
    return (
        <>
            <div className={`${props.className} flex flex-col gap-6`}>
                <label htmlFor={props.id} className='font-dm-sans font-normal text-2xl select-none'>
                    {props.label} <span className='text-red-600'>*</span>
                </label>
                {
                    props.isTextArea ? (
                        <textarea id={props.id} name={props.id}
                            placeholder={props.placeHolder} required onChange={(event) => { props.onChangeListener(event.target.value) }}
                            className='appearance-none bg-transparent border-none w-full h-20 text-partial font-dm-sans leading-tight focus:outline-none'>
                        </textarea>
                    ) : (
                        <input id={props.id} name={props.id} type={props.type}
                            placeholder={props.placeHolder} required onChange={(event) => { props.onChangeListener(event.target.value) }}
                            className='appearance-none bg-transparent border-none w-full text-partial font-dm-sans leading-tight focus:outline-none' />
                    )
                }
                <DividerXComponent />
            </div>

        </>
    )
}
