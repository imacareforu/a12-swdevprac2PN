'use client'

import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers" 
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Select, MenuItem } from "@mui/material"
import { TextField } from "@mui/material"
import { useState } from "react"
import { Dayjs } from "dayjs"

export default function DateReserve({onDateChange, onHospitalChange, onNameChange, onSurNameChange, onIdChange}:
    {onDateChange:Function, onHospitalChange:Function, onNameChange:Function, onSurNameChange:Function, onIdChange:Function}){
    
    const [bookingDate, setBookingDate] = useState<Dayjs|null>(null)
    const [hospital, setHospital] = useState("Chula")
    const [bookingName, setBookingName] = useState<string|null>(null)
    const [bookingSurName, setBookingSurName] = useState<string|null>(null)
    const [bookingId, setBookingId] = useState<string|null>(null)

    return(
        <div className="flex flex-col items-start space-y-10 p-[30px]">
            <TextField variant='standard' name='Name' label='Name' value={bookingName} onChange={(e)=>{setBookingName(e.target.value); onNameChange(e.target.value)}}/>
            <TextField variant='standard' name='Lastname' label='Lastname' value={bookingSurName} onChange={(e)=>{setBookingSurName(e.target.value); onSurNameChange(e.target.value)}}/>
            <TextField variant='standard' name='Citizen ID' label='Citizen ID' value={bookingId} onChange={(e)=>{setBookingId(e.target.value); onIdChange(e.target.value)}}/>
            <Select variant="standard" name='hospital' id='hospital' 
            label='Select Hospital' value={hospital}
            onChange={(e)=>{setHospital(e.target.value); onHospitalChange(e.target.value)}}
            className="h-[2em] w-[200px]">
                <MenuItem value='Chula'>Chulalongkorn Hospital</MenuItem>
                <MenuItem value='Rajavithi'>Rajavithi Hospital</MenuItem>
                <MenuItem value='Thammasat'>Thammasat University Hospital</MenuItem>
            </Select>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white" value={bookingDate}
                onChange={(value)=>{setBookingDate(value); onDateChange(value)}}/>
            </LocalizationProvider>
        </div>
    );
}