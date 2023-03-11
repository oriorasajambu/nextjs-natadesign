import dynamic from 'next/dynamic';
import Image from 'next/image';
import OGE from "../../../public/assets/images/oge.png";
import useSWR from 'swr';
import { EmployeeModel } from '@/model/props';

const DividerXComponent = dynamic(() => import('@/components/common/DividerXComponent'), { ssr: false });
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ItemsEmployeeComponent() {
    const { data, isLoading, error } = useSWR<EmployeeModel[]>(`${process.env.BASE_URL + 'api/employee'}`, fetcher);
    if (isLoading) return <></>
    if (error) return <></>
    if (!data || data.length < 1) return <></>
    return (
        <>
            <DividerXComponent />
            <div className="grid grid-cols-2 xs:grid-cols-1 grid-flow-row justify-center lg:gap-x-20 md:gap-x-10 gap-x-5">
                {
                    data.map((item, i) => {
                        return (
                            i % 2 != 0 ? (
                                <>
                                    <div className='flex flex-col gap-6 mx-auto my-20 sm:my-10 xs:my-10'>
                                        <Image src={process.env.BASE_URL + item.image} width={391} height={336} alt={item.alt} />
                                        <h4 className='font-dm-sans font-bold text-primary uppercase self-start lg:text-3xl md:text-3xl sm:text-2xl xs:text-2xl'>{item.name}</h4>
                                        <p className='font-dm-sans font-bold text-partial self-start lg:text-2xl md:text-2xl sm:text-xl xs:text-xl'>{item.job_desk}</p>
                                    </div>
                                    <DividerXComponent className={'col-span-2 xs:col-span-1'} />
                                </>
                            ) : (
                                <>
                                    <div className='flex flex-col gap-6 mx-auto my-20 sm:my-10 xs:my-10'>
                                        <Image src={process.env.BASE_URL + item.image} width={391} height={336} alt={item.alt} />
                                        <h4 className='font-dm-sans font-bold text-primary uppercase self-start lg:text-3xl md:text-3xl sm:text-2xl xs:text-2xl'>{item.name}</h4>
                                        <p className='font-dm-sans font-bold text-partial self-start lg:text-2xl md:text-2xl sm:text-xl xs:text-xl'>{item.job_desk}</p>
                                    </div>
                                    <DividerXComponent className={'lg:hidden md:hidden sm:hidden xs:block col-span-1'} />
                                </>
                            )
                        )
                    })
                }
            </div>
        </>
    )
}
