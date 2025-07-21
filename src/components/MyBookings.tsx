import axios from "axios";
import { useEffect, useState } from "react"
import React from "react";
import { Link } from "react-router-dom";

interface Booking {
    id: number,
    bookingCreationDate: string,
    checkInDate: string,
    checkOutDate: string,
    numberOfCustomers: number,
    preference: string,
    bookingStatus: string,
    customer: {
        id: number,
        name: string,
        surname: string,
        email: string,
        phoneNumber: string
    }
}

const MyBookings = function (){

    const APIUrl = 'http://localhost:8080/camping/bookings'

     const [inputValues, setInputValues] = useState({
            bookingNumber: ''
        })
    const [booking, setBooking] = useState<Booking | null>(null)

    /* const getBooking = () => {
        fetch(APIUrl + '/' + inputValues.bookingNumber)
        .then(response => {
            if(response.ok){
                return response.json()
            } else {
                throw new Error('Fetch unsuccessful')
            }
        })
        .then(singleBooking => {
            console.log(singleBooking)
        })
        .catch((err=>{
            console.log(err)
        }))
    } */

    function getBooking(){
        axios.get(`${APIUrl}/${inputValues.bookingNumber}`).then((response) =>{
            setBooking(response.data)
            console.log(response.data)
        })
    }



    /* useEffect(()=>{
        //getBooking()
    }, []) */


    return(
        <section className="bg-gray-50 dark:bg-orange-50 bg-[url(https://images.pexels.com/photos/388303/pexels-photo-388303.jpeg)] bg-cover min-h-screen flex flex-col py-20 lg:py-30 items-center px-20">
            {/* search section */}
            <div className="bg-green-950 w-full p-5 rounded-2xl">
                
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center mb-3">
                            Cerca prenotazione
                </h1>
                <div className="flex flex-row items-center justify-center gap-5">
                    
                    <form className="flex flex-row items-center justify-center gap-5" action="#" onSubmit={(e)=>{
                            e.preventDefault() 
                            //fetch
                            getBooking()
                        }} >
                            
                                <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Numero prenotazione" required value={inputValues.bookingNumber} onChange={(e) => {
                                    setInputValues({
                                        ...inputValues,
                                        bookingNumber: e.target.value,
                                    })
                                }} />
                            
                            
                            
                                <button type="submit" className="w-50 text-white bg-teal-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Cerca</button>
                            
                    </form>
                    
                </div>
            

                    {/* prenotazione */}
                    {booking && (
                        <div className="flex flex-col items-center justify-center p-8 mx-auto text-white">
                            
                            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-700 dark:border-gray-700">
                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                        La tua prenotazione:
                                    </h1>
                                        <div>
                                            <p>Booking ID: {booking.id}, creata il: {new Date(booking.bookingCreationDate).toLocaleString('it-IT', {
                                                                                                                                        day: '2-digit',
                                                                                                                                        month: '2-digit',
                                                                                                                                        year: 'numeric',
                                                                                                                                        hour: '2-digit',
                                                                                                                                        minute: '2-digit'
                                                                                                                                    })}</p>
                                            <p>Nome e Cognome: {booking.customer.name} {booking.customer.surname}</p>
                                            <p>Numero di persone: {booking.numberOfCustomers}</p>
                                            <p>Preferenze: {booking.preference}</p>
                                            <p>Check-In: {new Date(booking.checkInDate).toLocaleDateString('it-IT')}, 12:00</p>
                                            <p>Check-Out: {new Date(booking.checkOutDate).toLocaleDateString('it-IT')}, 11:00</p>
                                            <p>Stato prenotazione: {booking.bookingStatus}</p>
                                            <p>Numero di contatto: {booking.customer.phoneNumber}</p>
                                            <p>Email di contatto: {booking.customer.email}</p>
                                            
                                        </div>
                                        <p>C'è qualcosa che non va nella tua prenotazione? <Link to={`/contact/${booking.id}`} className="text-blue-600" >contattaci!</Link> </p>
                                </div>
                            </div>
                        </div>
                    )}
            </div>       
                    
        </section>
    )
}

export default MyBookings