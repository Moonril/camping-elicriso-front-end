import axios from "axios"
import React, { useState } from "react"
import { FaEye, FaMagnifyingGlass } from "react-icons/fa6"
import { GoDotFill } from "react-icons/go"
import Modal from "react-modal"
import Swal from "sweetalert2"
Modal.setAppElement("#root")

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


    const [open, setOpen] = useState(false)
 
    const handleOpen = () => setOpen(!open)

    const [formData, setFormData] = useState<PatchBooking>({
        checkInDate: "",
        checkOutDate: "",
        numberOfCustomers: 1,
        preference: "",
        customerId: 0
    })

    const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)

    const [selectedBookingId, setSelectedBookingId] = useState<number | null>(null)




    const APIUrl = 'http://localhost:8080/camping/bookings'

    const [bookings, setBookings] = useState<Booking[] | null>([])
    const [pagination, setPagination] = useState<{ totalPages: number, currentPage: number }>({
        totalPages: 0,
        currentPage: 0,
    })

    /* get bookings */

    const getBookings = () => {
        axios.get(APIUrl).then((response) =>{
            setBookings(response.data.content)
            setPagination({
                totalPages: response.data.totalPages,
                currentPage: response.data.pageable.pageNumber,
            })
            console.log(response.data)
        })
        .catch((error) => {
            console.error("Errore nella get:", error)
        })

    }
    
    /* get by id */
    const [inputValues, setInputValues] = useState({bookingNumber: ''})
    
    const getBookingsById = () => {
        axios.get(`${APIUrl}/${inputValues.bookingNumber}`)
        .then((response) => {
        const booking = response.data

        setBookings([booking])

        setPagination({
            totalPages: 1,
            currentPage: 1,
        })

        console.log(response.data)
        })
        .catch((error) => {
            console.error("Errore nella get:", error)
            Swal.fire({
                    title: 'Errore nella richiesta',
                    text: 'Controlla il numero di prenotazione o riprova più tardi.',
                    icon: 'error',
                    confirmButtonText: 'Riprova',
            })
        })
    }

    /* get by customer name */

    /* const [nameValue, setNameValue] = useState({name: ''})
    
    const getBookingsByName = () => {
        axios.get(`${APIUrl}/${nameValue.name}`)
        .then((response) => {
        const booking = response.data

        setBookings([booking])

        setPagination({
            totalPages: 1,
            currentPage: 1,
        })

        console.log(response.data)
        })
        .catch((error) => {
            console.error("Errore nella get:", error)
            Swal.fire({
                    title: 'Errore nella richiesta',
                    text: 'Controlla il numero di prenotazione o riprova più tardi.',
                    icon: 'error',
                    confirmButtonText: 'Riprova',
            })
        })
    } */

    /* patch booking status */

    const updateBookingStatus = (id: number, newStatus: string) => {
    const token = localStorage.getItem("token")

    axios.patch(
        `http://localhost:8080/camping/bookings/${id}/status`,
        { status: newStatus }, 
        {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        } 
    )
        .then((response) => {
        console.log("Stato aggiornato:", response.data)
        getBookings()
        Swal.fire({
                    title: 'Aggiornamento completato!',
                    text: 'Stato aggiornato con successo!',
                    icon: 'success',
                    confirmButtonText: 'Ok',
                })
        })
        .catch((error) => {
            Swal.fire({
                        title: 'Errore nella richiesta',
                        text: 'Errore nell aggiornamento dello stato',
                        icon: 'error',
                        confirmButtonText: 'Riprova',
                })
            console.error("Errore nell'aggiornamento dello stato:", error)
        })
    }

    /* put booking */

    const updateBooking = (id: number, data: any) => {
        const token = localStorage.getItem("token")
        console.log("Token:", token)

        axios.put(`http://localhost:8080/camping/bookings/${id}`, data, {
            headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            },
        })
        .then((response) => {
            console.log("Prenotazione aggiornata:", response.data)
            Swal.fire({
                        title: 'Agiornamento completato!',
                        text: 'La tua prenotazione è stata aggiornata con successo!',
                        icon: 'success',
                        confirmButtonText: 'Ok',
                    })
            getBookings()
        })
        .catch((error) => {
            console.error("Errore nella modifica:", error)
            Swal.fire({
                    title: 'Errore nella richiesta',
                    text: 'Riempi tutti i campi.',
                    icon: 'error',
                    confirmButtonText: 'Riprova',
            })
        })
    }

    /* sorting */
    /* by name */
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

    const sortByName = () => {
        if (!bookings) return


        const sorted = [...bookings].sort((a, b) => {
            const nameA = `${a.customer.name} ${a.customer.surname}`.toLowerCase()
            const nameB = `${b.customer.name} ${b.customer.surname}`.toLowerCase()
            if (nameA < nameB) return sortOrder === 'asc' ? -1 : 1
            if (nameA > nameB) return sortOrder === 'asc' ? 1 : -1
            return 0
        })
        setBookings(sorted)
        setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'))
    }

    /* by date  */

    const sortByDate = () => {
        if (!bookings) return

        const sorted = [...bookings].sort((a, b) => {
            const dateA = new Date(a.bookingCreationDate).getTime()
            const dateB = new Date(b.bookingCreationDate).getTime()
            return sortOrder === 'asc' ? dateA - dateB : dateB - dateA
        })

        setBookings(sorted)
        setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'))
    }

    /* by status */

    const sortByStatus = () => {
        if (!bookings) return


        const sorted = [...bookings].sort((a, b) => {
            const nameA = `${a.bookingStatus}`.toLowerCase()
            const nameB = `${b.bookingStatus}`.toLowerCase()
            if (nameA < nameB) return sortOrder === 'asc' ? -1 : 1
            if (nameA > nameB) return sortOrder === 'asc' ? 1 : -1
            return 0
        })
        setBookings(sorted)
        setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'))
    }


    return(
        <section className="py-5 gap-5">
            <div className="ps-1 mb-3 flex flex-row gap-3">
                <button type="submit" className="w-50 text-white bg-teal-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-primary-700 dark:focus:ring-primary-800 cursor-pointer" onClick={getBookings}>Cerca prenotazioni</button>
                <p className="flex items-center justify-center"><GoDotFill /></p>
                <form className="flex flex-row items-center justify-center gap-2" action="#" onSubmit={(e)=>{
                        e.preventDefault() 
                        //fetch
                        getBookingsById()
                    }} >
                        
                    <input type="text" name="bookingNumber" id="bookingNumber" className=" border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Numero prenotazione" required value={inputValues.bookingNumber} onChange={(e) => {
                        setInputValues({
                            ...inputValues,
                            bookingNumber: e.target.value,
                        })
                    }} />
                        
      
                    <button type="submit" className=" text-white bg-teal-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"><FaMagnifyingGlass /></button>
                </form>
                {/* <p className="flex items-center justify-center"><GoDotFill /></p>
                <form className="flex flex-row items-center justify-center gap-2" action="#" onSubmit={(e)=>{
                        e.preventDefault() 
                        //fetch
                        getBookingsByName()
                    }} >
                        
                    <input type="text" name="bookingNumber" id="bookingNumber" className=" border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nome Cliente" required value={nameValue.name} onChange={(e) => {
                        setNameValue({
                            ...nameValue,
                            name: e.target.value,
                        })
                    }} />
                        
      
                    <button type="submit" className=" text-white bg-teal-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"><FaMagnifyingGlass /></button>
                </form> */}

            </div>
            {/* booking list */}
            <div className=""> 
                          
                    {bookings && bookings.length > 0 && (
                        <div className="flex flex-col text-white">
                            <div className="overflow-x-auto w-full rounded-md">
                                

                            
                                <table className="min-w-[800px] table-auto bg-[#90A955] ">
                                    <thead className="bg-[#4F772D]">
                                        <tr>
                                            <th></th>
                                            <th>Id</th>
                                            <th className="cursor-pointer" onClick={sortByDate}>Creata il {sortOrder === 'asc' ? '↑' : '↓'}</th>
                                            <th className="cursor-pointer" onClick={sortByName}>Nome {sortOrder === 'asc' ? '↑' : '↓'}</th>
                                            <th>Persone</th>
                                            <th className="cursor-pointer" onClick={sortByDate}>Check-in {sortOrder === 'asc' ? '↑' : '↓'}</th>
                                            <th>Check-Out</th>
                                            <th className="cursor-pointer" onClick={sortByStatus}>Stato {sortOrder === 'asc' ? '↑' : '↓'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {bookings?.map((booking) => (
                                        <React.Fragment key={booking.id}>
                                            <tr className="">
                                                <button className="ps-2 pt-4" onClick={() =>
                                                    setSelectedBookingId(selectedBookingId === booking.id ? null : booking.id)
                                                }>
                                                    <FaEye className="hover:text-[#31572C]" />
                                                </button>
                                                <td className="ps-2">{booking.id}</td>
                                                <td className="ps-2">{new Date(booking.bookingCreationDate).toLocaleString('it-IT', {
                                                day: '2-digit',
                                                month: '2-digit',
                                                year: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit'
                                                })}</td>
                                                <td className="ps-2">{booking.customer.name} {booking.customer.surname}</td>
                                                <td className="ps-2">{booking.numberOfCustomers}</td>
                                                <td className="ps-2">{new Date(booking.checkInDate).toLocaleDateString('it-IT')}, 12:00</td>
                                                <td className="ps-2">{new Date(booking.checkOutDate).toLocaleDateString('it-IT')}, 11:00</td>
                                                <td className="ps-2">{booking.bookingStatus}</td>
                                            </tr>

                                            {selectedBookingId === booking.id && (
                                                <tr>
                                                <td colSpan={8}>
                                                    <div className="p-4 bg-[#31572C] rounded-md text-white">
                                                        <p><strong>Booking ID:</strong> {booking.id}</p>
                                                        <p><strong>Creata il:</strong> {new Date(booking.bookingCreationDate).toLocaleString('it-IT', {
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
                                                        <button className="mt-2 px-4 py-1 bg-yellow-500 text-white rounded me-1 hover:bg-yellow-300"onClick={() => {
                                                        setSelectedBooking(booking)
                                                        setFormData({
                                                        checkInDate: booking.checkInDate,
                                                        checkOutDate: booking.checkOutDate,
                                                        numberOfCustomers: booking.numberOfCustomers,
                                                        preference: booking.preference,
                                                        customerId: booking.customer.id
                                                        })
                                                        setOpen(true)
                                                        }} >Modifica</button>

                                                        {/* <button className="mt-2 px-4 py-1 bg-blue-400 text-white rounded me-1 hover:bg-blue-300" onClick={() => updateBookingStatus(booking.id, "CONFIRMED")}>Cliente</button> */}
                                                    </div>
                                                </td>
                                                </tr>
                                            )}
                                        </React.Fragment>
                                    ))}

                                    </tbody>
                                </table>
                                
                            </div>


                            {/* modify modal */}
                                            <Modal
                                                isOpen={open}
                                                onRequestClose={() => setOpen(false)}
                                                className="bg-[#ECF39E] p-6 w-full rounded shadow-lg max-w-md mx-auto mt-20"
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
                                                    <label className="block text-sm font-medium">Preferenze</label>
                                                    <input type="text" name="preference" value={formData?.preference} onChange={(e)=>{
                                                        setFormData({
                                                            ...formData,
                                                            preference: e.target.value
                                                        })
                                                    }} className="w-full border p-2 rounded" />
                                                    </div>
                                                </form>
                                                <p className="py-2">Vuoi davvero confermare?</p>
                                                <div className="mt-4 flex justify-end gap-2">
                                                <button onClick={() => setOpen(false)} className="px-4 py-2 bg-gray-300 rounded">Annulla</button>
                                                <button onClick={() => {
                                                        if (selectedBooking) {
                                                        updateBooking(selectedBooking.id, formData)
                                                        console.log(formData, 'formdata')
                                                        
                                                        setOpen(false)
                                                        }
                                                    }} className="px-4 py-2 bg-[#4F772D] text-white rounded">Conferma</button>
                                                </div>
                                            </Modal>


                            
                        </div>
                    )
        
                    }
                
                

            </div>



            
        </section>
    )
}





export default HandleBookings