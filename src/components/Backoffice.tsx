import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"

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
    phoneNumber: string,
  },
}

interface BookingPage {
  content: Booking[],
  totalPages: number,
  totalElements: number,
  pageable: {
    pageNumber: number,
    pageSize: number,
    offset: number,
    paged: boolean,
    unpaged: boolean,
  },
  last: boolean,
  first: boolean,
  number: number,
  size: number,
}


const Backoffice = function(){

    const APIUrl = 'http://localhost:8080/camping/bookings'

    const [bookings, setBookings] = useState<Booking[] | null>([])
    const [pagination, setPagination] = useState<{ totalPages: number, currentPage: number }>({
        totalPages: 0,
        currentPage: 0,
    })

    /* get booking */

    const getBookings = () => {
        axios.get(APIUrl).then((response) =>{
            setBookings(response.data.content)
            setPagination({
                totalPages: response.data.totalPages,
                currentPage: response.data.pageable.pageNumber,
            });
            console.log(response.data)
        })

    }

    /* patch booking */
    /* put booking */
    /* delete booking */

    return(
        <section className="flex flex-col bg-white-300 dark:bg-green-950 py-50 items-center justify-content text-black dark:text-gray-200 p-6 gap-8">
            <button type="submit" className="w-50 text-white bg-teal-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={getBookings}>Cerca prenotazioni</button>
            {bookings && (
                <div className="flex flex-col items-center justify-center p-8 mx-auto text-white bg-black">
                    {bookings?.map((booking)=>(
                        <div key={booking.id} className="p-5 flex flex-col gap-3">
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
                                <div className=" flex flex-row gap-3">
                                    <button className="text-white bg-teal-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Accetta</button>
                                    <button className="text-white bg-teal-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-400 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Modifica</button>
                                    <button className="text-white bg-teal-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Cancella</button>
                                </div>
                        </div>

                    ))

                    }
                </div>
            )

            }
        </section>
    )
}

export default Backoffice