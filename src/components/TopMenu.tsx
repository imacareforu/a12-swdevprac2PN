import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import Link from "next/link";

export default async function TopMenu() {
    const session  = await getServerSession(authOptions)

    return (
        <div className='h-[80px] bg-white fixed top-0 left-0 
        right-0 z-30 border-solid border-y border-gray-300 flex flex-row-reverse'>
            <Image src="/img/logo.png" className='h-[100%] w-auto' 
            alt="logo"
            width={0}
            height={0}
            sizes="100vh"
            />
            <TopMenuItem title="Booking" pageRef="/booking" />
            <div className="flex absolute left-0 h-full text-gray-500 text-lg">
            {
                session? <Link href="api/auth/signout"><div className="flex items-center h-full px-5">
                    Sign-Out of {session.user?.name}</div></Link>
                : <Link href="api/auth/signin"><div className="flex items-center h-full px-5">Sign-In</div></Link>
            }
            <TopMenuItem title="My Booking" pageRef="/mybooking" />
            </div>

        </div>
    );
}
