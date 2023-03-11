import { AlbumModel } from '@/model/props';
import Image from "next/image";

export default function ItemVerticalAlbumComponent({ data }: { data: AlbumModel }) {
    return (
        <div className='grid grid-cols-1'>
            <h3 className='font-dm-sans font-bold text-partial text-2xl'>Zircon CHill</h3>
            <p className="text-partial font-dm-sans text-xs leading-6 line-clamp-3 my-6">Desain Café / Desain Exterior dan Interior / Medan</p>
            <div className='w-full h-auto aspect-square relative'>
                <Image src={data.image} fill alt={data.alt ? data.alt : 'Album Cover'} />
            </div>
        </div>
    )
}
