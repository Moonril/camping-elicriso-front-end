import axios from "axios";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa6";
import Modal from "react-modal"
Modal.setAppElement("#root");

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

interface PatchBooking {
  checkInDate: string,
  checkOutDate: string,
  numberOfCustomers: number,
  preference: string,
  customerId: number
}

const HandleBookings = function() {

    /* modal */


    const [open, setOpen] = useState(false);
 
    const handleOpen = () => setOpen(!open);

    const [formData, setFormData] = useState<PatchBooking>({
        checkInDate: "",
        checkOutDate: "",
        numberOfCustomers: 1,
        preference: "",
        customerId: 0
    })

    const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

    const [selectedBookingId, setSelectedBookingId] = useState<number | null>(null);




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

    /* patch booking status */

    const updateBookingStatus = (id: number, newStatus: string) => {
        const token = localStorage.getItem("token")

        axios.patch(`http://localhost:8080/camping/bookings/${id}/status`, {
            status: newStatus
        })
        .then((response) => {
            console.log("Stato aggiornato:", response.data);
            
            getBookings()
        })
        .catch((error) => {
            console.error("Errore nell'aggiornamento dello stato:", error)
        })
    }

    /* put booking */

    const updateBooking = (id: number, data: any) => {
        const token = localStorage.getItem("token");
        console.log("Token:", token);

        axios.put(`http://localhost:8080/camping/bookings/${id}`, data, {
            headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            },
        })
        .then((response) => {
            console.log("Prenotazione aggiornata:", response.data);
            getBookings()
        })
        .catch((error) => {
            console.error("Errore nella modifica:", error);
        });
    };



    return(
        <section className="py-5 gap-5">
            <div>
                <button type="submit" className="w-50 text-white bg-teal-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={getBookings}>Cerca prenotazioni</button>

            </div>
            {/* booking list */}
            <div className="flex flex-row">
                <div className="flex-3">
                    {bookings && (
                        <div className="flex flex-col text-white bg-black">
                            <table className="table-auto">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Creata il</th>
                                        <th>Nome</th>
                                        <th>Persone</th>
                                        <th>Check-in</th>
                                        <th>Check-Out</th>
                                        <th>Stato</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bookings?.map((booking) => (
                                    <React.Fragment key={booking.id}>
                                        <tr>
                                            <td className="ps-2">{booking.id}</td>
                                            <td>{new Date(booking.bookingCreationDate).toLocaleString('it-IT', {
                                            day: '2-digit',
                                            month: '2-digit',
                                            year: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit'
                                            })}</td>
                                            <td>{booking.customer.name} {booking.customer.surname}</td>
                                            <td>{booking.numberOfCustomers}</td>
                                            <td>{new Date(booking.checkInDate).toLocaleDateString('it-IT')}, 12:00</td>
                                            <td>{new Date(booking.checkOutDate).toLocaleDateString('it-IT')}, 11:00</td>
                                            <td>{booking.bookingStatus}</td>
                                            <td>
                                            <button onClick={() =>
                                                setSelectedBookingId(selectedBookingId === booking.id ? null : booking.id)
                                            }>
                                                <FaEye className="hover:text-green-400" />
                                            </button>
                                            </td>
                                        </tr>

                                        {selectedBookingId === booking.id && (
                                            <tr>
                                            <td colSpan={8}>
                                                <div className="p-4 bg-gray-800 rounded-md text-white">
                                                    <p><strong>Booking ID:</strong>  {booking.id}, creata il: {new Date(booking.bookingCreationDate).toLocaleString('it-IT', {
                                                        day: '2-digit',
                                                        month: '2-digit',
                                                        year: 'numeric',
                                                        hour: '2-digit',
                                                        minute: '2-digit'
                                                    })}</p>
                                                    <p><strong>Nome e Cognome:</strong> {booking.customer.name} {booking.customer.surname}</p>
                                                    <p><strong>Numero di persone:</strong> {booking.numberOfCustomers}</p>
                                                    <p><strong>Preferenze:</strong> {booking.preference}</p>
                                                    <p><strong>Check-In:</strong> {new Date(booking.checkInDate).toLocaleDateString('it-IT')}, 12:00</p>
                                                    <p><strong>Check-Out:</strong> {new Date(booking.checkOutDate).toLocaleDateString('it-IT')}, 11:00</p>
                                                    <p><strong>Stato prenotazione:</strong> {booking.bookingStatus}</p>
                                                    <p><strong>Numero di contatto:</strong> {booking.customer.phoneNumber}</p>
                                                    <p><strong>Email di contatto:</strong> {booking.customer.email}</p>
                                                    <button className="mt-2 px-4 py-1 bg-lime-600 text-white rounded me-1 hover:bg-lime-500" onClick={() => updateBookingStatus(booking.id, "CONFIRMED")}>Conferma</button>
                                                    
                                                    <button className="mt-2 px-4 py-1 bg-orange-600 text-white rounded me-1 hover:bg-orange-500" onClick={() => updateBookingStatus(booking.id, "CANCELLED")}>Annulla</button>
                                                    <button className="mt-2 px-4 py-1 bg-yellow-600 text-white rounded me-1 hover:bg-yellow-500"onClick={() => {
                                                    setSelectedBooking(booking);
                                                    setFormData({
                                                    checkInDate: booking.checkInDate,
                                                    checkOutDate: booking.checkOutDate,
                                                    numberOfCustomers: booking.numberOfCustomers,
                                                    preference: booking.preference,
                                                    customerId: booking.customer.id
                                                    });
                                                    setOpen(true);
                                                    }} >Modifica</button>

                                                    <button className="mt-2 px-4 py-1 bg-blue-400 text-white rounded me-1 hover:bg-blue-300" onClick={() => updateBookingStatus(booking.id, "CONFIRMED")}>Cliente</button>
                                                </div>
                                            </td>
                                            </tr>
                                        )}
                                    </React.Fragment>
                                ))}

                                </tbody>
                            </table>


                            {/* modify modal */}
                                            <Modal
                                                isOpen={open}
                                                onRequestClose={() => setOpen(false)}
                                                className="bg-white p-6 w-full rounded shadow-lg max-w-md mx-auto mt-20"
                                                overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
                                            >
                                                <h2 className="text-xl font-bold mb-4">Modifica</h2>
                                                <form className="flex flex-col gap-4">
                                                    <div>
                                                    <label className="block text-sm font-medium">Check-in</label>
                                                    <input type="date" name="checkInDate" value={formData?.checkInDate} onChange={(e)=>{
                                                        setFormData({
                                                            ...formData,
                                                            checkInDate: e.target.value
                                                        })
                                                    }} className="w-full border p-2 rounded" />
                                                    </div>
                                                    <div>
                                                    <label className="block text-sm font-medium">Check-out</label>
                                                    <input type="date" name="checkOutDate" value={formData?.checkOutDate} onChange={(e)=>{
                                                        setFormData({
                                                            ...formData,
                                                            checkOutDate: e.target.value
                                                        })
                                                    }} className="w-full border p-2 rounded" />
                                                    </div>
                                                    <div>
                                                    <label className="block text-sm font-medium">Numero clienti</label>
                                                    <input type="number" name="numberOfCustomers" value={formData?.numberOfCustomers} onChange={(e)=>{
                                                        setFormData({
                                                            ...formData,
                                                            numberOfCustomers: Number(e.target.value)
                                                        })
                                                    }} className="w-full border p-2 rounded" />
                                                    </div>
                                                    <div>
                                                    <label className="block text-sm font-medium">Preferenza</label>
                                                    <input type="text" name="preference" value={formData?.preference} onChange={(e)=>{
                                                        setFormData({
                                                            ...formData,
                                                            preference: e.target.value
                                                        })
                                                    }} className="w-full border p-2 rounded" />
                                                    </div>
                                                </form>
                                                <p>Vuoi davvero confermare?</p>
                                                <div className="mt-4 flex justify-end gap-2">
                                                <button onClick={() => setOpen(false)} className="px-4 py-2 bg-gray-300 rounded">Annulla</button>
                                                <button onClick={() => {
                                                        if (selectedBooking) {
                                                        updateBooking(selectedBooking.id, formData);
                                                        console.log(formData, 'formdata')
                                                        
                                                        setOpen(false);
                                                        }
                                                    }} className="px-4 py-2 bg-green-600 text-white rounded">Conferma</button>
                                                </div>
                                            </Modal>


                            
                        </div>
                    )
        
                    }
                </div>
                

            </div>



            {/* 
            <div key={booking.id} className="p-5 flex flex-col gap-3">
                                        
                                        <div className="flex flex-row">
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
                                            
                                            <button className="text-white bg-teal-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={() => updateBookingStatus(booking.id, "CONFIRMED")}>Accetta</button>
                                            <button className="text-white bg-teal-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-400 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={() => {
                                                setSelectedBooking(booking);
                                                setFormData({
                                                checkInDate: booking.checkInDate,
                                                checkOutDate: booking.checkOutDate,
                                                numberOfCustomers: booking.numberOfCustomers,
                                                preference: booking.preference,
                                                customerId: booking.customer.id
                                                });
                                                setOpen(true);
                                            }}>Modifica</button>
                                            <button className="text-white bg-teal-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={() => updateBookingStatus(booking.id, "CANCELLED")} >Cancella</button>
        
                                            
                                            <Modal
                                                isOpen={open}
                                                onRequestClose={() => setOpen(false)}
                                                className="bg-white p-6 rounded shadow-lg max-w-md mx-auto mt-20"
                                                overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
                                            >
                                                <h2 className="text-xl font-bold mb-4">Modifica</h2>
                                                <form className="flex flex-col gap-4">
                                                    <div>
                                                    <label className="block text-sm font-medium">Check-in</label>
                                                    <input type="date" name="checkInDate" value={formData?.checkInDate} onChange={(e)=>{
                                                        setFormData({
                                                            ...formData,
                                                            checkInDate: e.target.value
                                                        })
                                                    }} className="w-full border p-2 rounded" />
                                                    </div>
                                                    <div>
                                                    <label className="block text-sm font-medium">Check-out</label>
                                                    <input type="date" name="checkOutDate" value={formData?.checkOutDate} onChange={(e)=>{
                                                        setFormData({
                                                            ...formData,
                                                            checkOutDate: e.target.value
                                                        })
                                                    }} className="w-full border p-2 rounded" />
                                                    </div>
                                                    <div>
                                                    <label className="block text-sm font-medium">Numero clienti</label>
                                                    <input type="number" name="numberOfCustomers" value={formData?.numberOfCustomers} onChange={(e)=>{
                                                        setFormData({
                                                            ...formData,
                                                            numberOfCustomers: Number(e.target.value)
                                                        })
                                                    }} className="w-full border p-2 rounded" />
                                                    </div>
                                                    <div>
                                                    <label className="block text-sm font-medium">Preferenza</label>
                                                    <input type="text" name="preference" value={formData?.preference} onChange={(e)=>{
                                                        setFormData({
                                                            ...formData,
                                                            preference: e.target.value
                                                        })
                                                    }} className="w-full border p-2 rounded" />
                                                    </div>
                                                </form>
                                                <p>Vuoi davvero confermare?</p>
                                                <div className="mt-4 flex justify-end gap-2">
                                                <button onClick={() => setOpen(false)} className="px-4 py-2 bg-gray-300 rounded">Annulla</button>
                                                <button onClick={() => {
                                                        if (selectedBooking) {
                                                        updateBooking(selectedBooking.id, formData);
                                                        console.log(formData, 'formdata')
                                                        
                                                        setOpen(false);
                                                        }
                                                    }} className="px-4 py-2 bg-green-600 text-white rounded">Conferma</button>
                                                </div>
                                            </Modal>
                                        </div>
                                </div>
            */}
        </section>
    )
}





export default HandleBookings