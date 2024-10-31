'use client'
import { useRef, useEffect, useState } from "react"

export default function VideoPlayer({vdoSrc, isPlaying} : {vdoSrc:string, isPlaying:boolean}) {
    
    const vdoRef = useRef<HTMLVideoElement>(null)
    
    useEffect(()=>{
        //alert('width is ' + vdoRef.current?.videoWidth)
        if (isPlaying){
            //alert("Play VDO")
            vdoRef.current?.play()
        } else {
            //alert("Pause VDO")
            vdoRef.current?.pause()
        }
    }, [isPlaying])

    const [winwidth, setWinwidth] = useState(0)
    useEffect(()=>{
        const handelWinwidthChange = ()=>{
            setWinwidth(window.innerWidth)
            //alert('window wifth ' + window.innerWidth)
        }
        window.addEventListener("resize", handelWinwidthChange)

        return ()=>{
            window.removeEventListener("resize", handelWinwidthChange)
        }
    }, [])


    return (
        <video className="w-[40%]" src = {vdoSrc} controls loop muted ref = {vdoRef}/>
    )
}