import dynamic from "next/dynamic";

const ClientComponent = dynamic(() => import('@/components/common/ClientComponent'));
const SubtitleComponent = dynamic(() => import('@/components/common/SubtitleComponent'), { ssr: false });

export default function ClientsSection() {
    return (
        <div className="bg-[#FFFBF2] py-20 flex flex-row justify-center">
            <div className='lg:w-[1200px] md:w-[864px] sm:w-[608px] xs:w-[280px] lg:px-20 md:px-0 sm:px-0'>
                <div className="flex flex-col items-center justify-evenly gap-10 lg:gap-20">
                    <div className="flex flex-col justify-evenly items-center w-full h-full lg:gap-12 gap-10">
                        <SubtitleComponent className='text-primary' subTitle='Klien Kami' />
                        <ClientComponent props={{ api: `${process.env.BASE_URL + 'api/clients'}` }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
