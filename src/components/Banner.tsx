"use client"
import styles from './banner.module.css'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSession } from 'next-auth/react';

export default function Banner() {
    const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg', '/img/cover4.jpg']
    const [index, setIndex] = useState(0);
    const router = useRouter();

    const {data:session} = useSession()
    return (
        <div className={styles.banner} onClick={()=>{setIndex(index+1)}}>
            <Image src={covers[index%4]}
            alt='banner'
            fill={true}
            priority
            objectFit='cover'
            />
            <div className='relative top-[120px] z-20 text-center'>
                <div className='font-bold text-7xl'>Vaccine Service Center</div>
                <div className='font-medium text-2xl relative top-[15px]'>เลือกนัดกับโรงพยาบาลชั้นนำได้เลย</div>
            </div>
            
            {
                session? <div className='z-30 absolute top-5 right-10 font-semibold text-gray-800 text-xl'>
                    Welcome {session.user?.name}</div>
                : null
            }


            {/* button */}
            <button className='bg-white text-gray-500 border border-gray-600 
            font-semibold py-2 px-2 m-8 rounded-md z-30 absolute bottom-0 right-0
            hover:bg-gray-600 hover:text-white hover:boder-transparent'
            onClick={(e)=>{e.stopPropagation(); router.push('/hospital')}}
            >
                Select Hospital
            </button>
        </div>
    );
}