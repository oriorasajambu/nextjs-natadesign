import Image from 'next/image';
import { motion } from "framer-motion";
import { ClientModel } from '@/model/props';
import { Reveal } from '@/components/animation/animate';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface ClientType {
    api: string,
    loadingItems?: Number
}

function Loading({ loadingItems }: { loadingItems?: Number }) {
    const items = [...Array(loadingItems)];
    return (
        <div
            className="flex flex-row flex-1 flex-nowrap overflow-x-auto lg:grid lg:grid-cols-5 md:grid md:grid-cols-3 gap-6 w-full items-center">
            {items.map((_, i) => {
                return (
                    <div key={i} className='grow w-full'>
                        <div className="aspect-square w-full animate-pulse bg-secondary" />
                    </div>
                )
            })}
        </div>
    )
}

export default function ClientComponent({ props }: { props: ClientType }) {
    const { data, isLoading, error } = useSWR<ClientModel[]>(props.api, fetcher);
    if (error) return <></>
    if (isLoading) return <Loading loadingItems={props?.loadingItems ? props?.loadingItems : 15} />
    if (!data || data.length < 1) return <></>
    return (
        <motion.div initial="hidden"
            whileInView="visible"
            variants={Reveal}
            viewport={{ once: true }}
            className="flex flex-row flex-1 flex-nowrap overflow-x-auto lg:grid lg:grid-cols-5 md:grid md:grid-cols-4 sm:grid sm:grid-cols-3 gap-6 w-full items-center">
            {data.map((item, i) => {
                return (
                    <div key={i} className='grow w-full xs:h-[300px] border-2 border-primary aspect-square relative'>
                        <Image className="w-full p-10" src={`${process.env.BASE_URL + item.image}`} fill alt={`${item.alt}`} />
                    </div>
                )
            })}
        </motion.div>
    )
}
