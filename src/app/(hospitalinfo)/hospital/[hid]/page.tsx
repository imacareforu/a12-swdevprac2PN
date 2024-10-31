import getHospital from "@/libs/getHospital";
import Image from "next/image";

export default async function HospitalDetailPage({params}:{params:{hid:string}}){
    const hospitalDetail = await getHospital(params.hid)


    return (
        <main className="text-center p-5">
            {/* <h1 className="text-lg font-medium">Car ID {params.hid}</h1> */}
            <div className="flex flex-row my-5">
                <Image src={ hospitalDetail.data.picture }
                alt="Hospital Image"
                width = {0} height = {0} sizes = "100vw"
                className="rounded-lg w-[30%]"
                />
                <div className="tect-lg mx-5 text-left font-medium">{ hospitalDetail.data.name }
                    <div className="text-md mx-5 font-normal">Name: { hospitalDetail.data.name }</div>
                    <div className="text-md mx-5 font-normal">Address: { hospitalDetail.data.address }</div>
                    <div className="text-md mx-5 font-normal">District: { hospitalDetail.data.district }</div>
                    <div className="text-md mx-5 font-normal">Province: { hospitalDetail.data.province }</div>
                    <div className="text-md mx-5 font-normal">Postal Code: { hospitalDetail.data.postalcode }</div>
                    <div className="text-md mx-5 font-normal">Tel: { hospitalDetail.data.tel }</div>
                </div>
            </div>
        </main>
    );
}

// export async function generateStaticParams() {
//     return [{hid:'001'}, {hid:'002'}, {hid:'003'}]
// }