"use client"
import styles from "./page.module.css";
import DateReserve from "@/components/DateReserve";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import getUserprofile from "@/libs/getUserProfile";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch, UseDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addBooking } from "@/redux/features/bookSlice";

export default function Booking() {
    // const session = await getServerSession(authOptions)
    // if (!session || !session.user.token) return null 
    // const profile = await getUserprofile(session.user.token)
    // var createdAt = new Date(profile.data.createdAt)
    
    const [bookDate, setBookDate] = useState<Dayjs|null>(null)
    const [bookHos, setBookHos] = useState<string>("Chula")
    const [bookName, setBookName] = useState<string>("")
    const [bookSurName, setBookSurName] = useState<string>("")
    const [bookId, setBookId] = useState<string>("")

    const dispatch = useDispatch<AppDispatch>()

    const makeBook = ()=>{
        if (bookDate && bookHos && (bookName!=="") && (bookSurName!=="") && (bookId!=="")) {
            const item:BookingItem = {
                name: bookName,
                surname: bookSurName,
                id: bookId,
                hospital: bookHos,
                bookDate: dayjs(bookDate).format("DD/MM/YYYY")

            }
            dispatch(addBooking(item))
        }
    }

    return (
        <main className="w-[100%]">
            {/* <div className="bg-slate-100">
            <div className="text-2xl m-5 p-5">{profile.data.name}</div>
            <table className="table-auto border-separate border-spacing-2">
                <tbody>
                    <tr><td>Email</td><td>{profile.data.email}</td></tr>
                    <tr><td>Tel.</td><td>{profile.data.tel}</td></tr>
                    <tr><td>Member Since</td><td>{createdAt.toString()}</td></tr>
                </tbody>
            </table>
            </div> */}

            <div className="text-2xl py-10 font-bold text-center">Vaccine Booking</div>
            <div className="bg-gray-100 flex flex-col items-center pb-[15px] place-content-center mx-[40%]">
                <DateReserve onDateChange={(value:Dayjs)=>{setBookDate(value)}} 
                onHospitalChange={(value:string)=>{setBookHos(value)}}
                onNameChange={(value:string)=>{setBookName(value)}}
                onSurNameChange={(value:string)=>{setBookSurName(value)}}
                onIdChange={(value:string)=>{setBookId(value)}}/>
                <button name='Book Vaccine'
                className="block rounded-md bg-sky-600 
                hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
                onClick={makeBook}>
                    Book Vaccine
                </button>
            </div>
        </main>        
    );
}