import Link from "next/link"
import Card from "./Card"


export default async function HospitalCatalog({hospitalsJson}:{hospitalsJson:Promise<HospitalJson>}){
    const hospitalsJsonReady = await hospitalsJson
    return (
        <div className="text-center text-md my-5">
        Explore {hospitalsJsonReady.count} hospitals in our catalog
        <div className='m-[30px]' style={{display:"flex", flexDirection:"row", 
                flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
                {
                    hospitalsJsonReady.data.map((hospitalItem:HospitalItem)=>(
                        <Link href={`/hospital/${hospitalItem.id}`} className="w-1/5">
                            <Card hospitalName={hospitalItem.name} imgSrc={hospitalItem.picture}/>
                        </Link>
                    ))
                }
        </div>
        </div>
    )
}