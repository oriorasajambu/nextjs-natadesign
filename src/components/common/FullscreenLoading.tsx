import icon from '../../../public/assets/images/favicon.svg';
import Image from 'next/image';

export default function FullscreenLoading() {
  return (
    <div className='h-screen w-screen bg-primary flex flex-col justify-center content-center items-center'>
      <Image src={icon.src} width={67} height={67} alt="Nat.A Design Logo" priority={true} />
    </div>
  )
}
