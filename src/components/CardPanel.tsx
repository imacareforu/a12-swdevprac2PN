"use client"
import Card from '@/components/Card'
import { useReducer } from 'react';
import Link from 'next/link';

export default function CardPanel() {
    const compareReducer = (compareList:Map<string, number>, action:{type:string, hospitalName:string, rating:number})=>{
        switch(action.type){
            case 'add':{
                return new Map(compareList.set(action.hospitalName, action.rating))
            } case 'remove':{
                compareList.delete(action.hospitalName)
                return (new Map(compareList))
            }
            default: return compareList
        }
    }
    const [compareList, dispatchCompare] = useReducer(compareReducer, new Map<string, number>([["Chulalongkorn Hospital", 0], ["Rajavithi Hospital", 0], ["Thammasat University Hospital",0]]))

    //Mock Data
    const mockHospitalRepo = [
        {hid:"001", name:"Chulalongkorn Hospital", image:"/img/chula.jpg"},
        {hid:"002", name:"Rajavithi Hospital", image:"/img/rajavithi.jpg"},
        {hid:"003", name:"Thammasat University Hospital", image:"/img/thammasat.jpg"}
    ]

    return (
        <div>    
            <div className='m-[30px]' style={{display:"flex", flexDirection:"row", 
                flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
                {
                    mockHospitalRepo.map((hospitalItem)=>(
                        <Link href={`/hospital/${hospitalItem.hid}`} className="w-1/5">
                            <Card hospitalName={hospitalItem.name} imgSrc={hospitalItem.image}
                            onCompare={ (name:string, value:number)=>dispatchCompare({type:'add', hospitalName:name, rating:value}) }
                            />
                        </Link>
                    ))
                }
            </div>
            <div className='w-full text-xl font-medium p-[20px]'>Hospital List with Ratings : {compareList.size}</div>
            { Array.from(compareList).map(([key, value])=><div data-testid={key} 
            className='p-[20px]' key = {key}
            onClick={()=>dispatchCompare({type:'remove', hospitalName:key, rating:value})}
            >{key} : {value}</div>) }
        </div>
    );
}