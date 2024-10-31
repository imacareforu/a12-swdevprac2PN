import Link from "next/link";

export default function TopMenuItem( {title, pageRef} : {title:string, pageRef:string} ) {
    return (
        <Link href={pageRef} className='w-[120px] mt-auto mb-auto text-center text-gray-500 text-lg'>
            {title}
        </Link>
    );
}