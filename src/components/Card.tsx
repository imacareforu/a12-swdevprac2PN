"use client"
import InteractiveCard from './InteractiveCard';
import Image from "next/image";
import { Typography, Rating} from '@mui/material';
import * as React from 'react';


export default function Card({hospitalName, imgSrc, onCompare}:{hospitalName:string, imgSrc:string, onCompare?:Function}) {
    const [value, setValue] = React.useState<number | null>(0)
    return (
        <InteractiveCard>
            <div className="w-full h-[70%] relative rounded-t-lg ">
                <Image 
                src={imgSrc}
                alt='card picture'
                fill = {true}
                className="object-cover rounded-t-lg"
                />
            </div>
            <div className="w-full h-[15%] p-[10px] text-base">
                {hospitalName}
            </div>
            {
                onCompare? <Rating name={hospitalName+" Rating"}
                id={hospitalName+" Rating"}
                data-testid={hospitalName+" Rating"}
                value={value} 
                onChange={(event, newValue)=>{
                    event.stopPropagation
                    setValue(newValue);
                    onCompare(hospitalName, newValue==null?0:newValue)
                }}
                /> : ''
            }
        </InteractiveCard>
    );
}