"use client"
import { useAppSelector, AppDispatch } from "@/redux/store"
import { useDispatch } from "react-redux"
import { removeBooking } from "@/redux/features/bookSlice"

export default function BookingList() {
    
    const bookItems = useAppSelector( (state)=> state.bookSlice.bookItems)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <>
        {
            bookItems.length==0?<div className="m-5 text-xl text-center font-medium">No Vaccine Booking</div>:<div></div>
        }
        {
            bookItems.map((reservationItem)=>(
                <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={reservationItem.id}>
                    <div className="text-xl">{reservationItem.name} {reservationItem.surname}</div>
                    <div className="text-sm">{reservationItem.id}</div>
                    <div className="text-sm">{reservationItem.hospital}</div>
                    <div className="text-sm">{reservationItem.bookDate}</div>
                    <button className="block rounded-md bg-sky-600 
                        hover:bg-indigo-600 px-3 py-2 text-white shadow-sm" onClick={()=>dispatch(removeBooking(reservationItem.id))}>
                        Cancel Booking
                    </button>
                </div>
            ))
        }
        </>
    )
}