
import React, { useState } from "react"
import axios from "axios"
import Modal from "react-modal"
import { FaEye } from "react-icons/fa6"
Modal.setAppElement("#root")

interface Reservation {
    id: number,
    name: string,
    numberOfPeople: number,
    reservationDate: string,
    additionalNotes: string,
    phoneNumber: string
}

interface PutReservation {
    name: string,
    numberOfPeople: number,
    reservationDate: string,
    additionalNotes: string,
    phoneNumber: string
}


const HandleRestaurant = function () {

    /* modal */
    
    
    const [open, setOpen] = useState(false);
     
    const handleOpen = () => setOpen(!open);
    
    const [formData, setFormData] = useState<PutReservation>({
        name: '',
        numberOfPeople: 0,
        reservationDate: '',
        additionalNotes: '',
        phoneNumber: '',
    })
    
    const [selectedReservation, setSelectedReservation] = useState<Reservation | null>(null)
    
    const [selectedReservationId, setSelectedReservationId] = useState<number | null>(null)

    const APIUrl = 'http://localhost:8080/restaurant/reservations'

    /* get reservations */

    const [reservations, setReservations] = useState<Reservation[] | null>([])
    const [pagination, setPagination] = useState<{ totalPages: number, currentPage: number }>({
            totalPages: 0,
            currentPage: 0,
    })

    const getReservations = () => {
        const token = localStorage.getItem("token");
        axios.get(APIUrl, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        }).then((response) =>{
            setReservations(response.data.content)
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


    /* put reservation */

    const updateReservation = (id: number, data: any) => {
        const token = localStorage.getItem("token");
        console.log("Token:", token)

        axios.put(`http://localhost:8080/restaurant/reservations/${id}`, data, {
            headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            },
        })
        .then((response) => {
            console.log("Prenotazione aggiornata:", response.data);
            getReservations()
        })
        .catch((error) => {
            console.error("Errore nella modifica:", error);
        })
    }
    

    return (
        <section className="py-5 gap-5">
            <div className="ps-1 mb-3">
                <button type="submit" className="w-50 text-white bg-teal-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={getReservations}>Cerca prenotazioni</button> 
            </div>
            <div>
                <div className="">            
                    {reservations && (
                        <div className="flex flex-col text-white">
                            <div className="overflow-x-auto w-full rounded-md">
                                

                            
                                <table className="min-w-[800px] table-auto bg-[#90A955] ">
                                    <thead className="bg-[#4F772D]">
                                        <tr>
                                            <th></th>
                                            <th>Id</th>
                                            <th>Data</th>
                                            <th>Nome</th>
                                            <th>Persone</th>
                                            <th>Preferenze</th>
                                            <th>Numero di telefono</th>
                                            <th>Numero Prenotazione</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {reservations?.map((reservation) => (
                                        <React.Fragment key={reservation.id}>
                                            <tr className="">
                                                <button className="ps-2 pt-4" onClick={() =>
                                                    setSelectedReservationId(selectedReservationId === reservation.id ? null : reservation.id)
                                                }>
                                                    <FaEye className="hover:text-[#31572C]" />
                                                </button>
                                                <td className="ps-2">{reservation.id}</td>
                                                <td className="ps-2">{new Date(reservation.reservationDate).toLocaleString('it-IT', {
                                                day: '2-digit',
                                                month: '2-digit',
                                                year: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit'
                                                })}</td>
                                                <td className="ps-2">{reservation.name}</td>
                                                <td className="ps-2">{reservation.numberOfPeople}</td>
                                                <td className="ps-2">{reservation.additionalNotes}</td>
                                                <td className="ps-2">{reservation.phoneNumber}</td>

                                               
                                            </tr>

                                            {selectedReservationId === reservation.id && (
                                                <tr>
                                                <td colSpan={8}>
                                                    <div className="p-4 bg-[#31572C] rounded-md text-white">
                                                        <p><strong>Booking ID:</strong> {reservation.id}</p>
                                                        <p><strong>Creata il:</strong> {new Date(reservation.reservationDate).toLocaleString('it-IT', {
                                                            day: '2-digit',
                                                            month: '2-digit',
                                                            year: 'numeric',
                                                            hour: '2-digit',
                                                            minute: '2-digit'
                                                        })}</p>
                                                        <p><strong>Nome:</strong> {reservation.name}</p>
                                                        <p><strong>Numero di persone:</strong> {reservation.numberOfPeople}</p>
                                                        <p><strong>Preferenze:</strong> {reservation.additionalNotes}</p>
                                                        <p><strong>Numero di Telefono:</strong> {reservation.phoneNumber}</p>
                                                        

                                                        <button className="mt-2 px-4 py-1 bg-yellow-500 text-white rounded me-1 hover:bg-yellow-300"onClick={() => {
                                                        setSelectedReservation(reservation)
                                                        setFormData({
                                                            reservationDate: reservation.reservationDate,
                                                            name: reservation.name,
                                                            numberOfPeople: reservation.numberOfPeople,
                                                            additionalNotes: reservation.additionalNotes,
                                                            phoneNumber: reservation.phoneNumber,

                                                        })
                                                        setOpen(true)
                                                        }} >Modifica</button>

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
                                                        <label className="block text-sm font-medium">Data Prenotazione</label>
                                                        <input type="datetime-local" name="reservationDate" value={formData?.reservationDate} onChange={(e)=>{
                                                            setFormData({
                                                                ...formData,
                                                                reservationDate: e.target.value
                                                            })
                                                        }} className="w-full border p-2 rounded" />
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm font-medium">Nome</label>
                                                        <input type="text" name="name" value={formData?.name} onChange={(e)=>{
                                                            setFormData({
                                                                ...formData,
                                                                name: e.target.value
                                                            })
                                                        }} className="w-full border p-2 rounded" />
                                                    </div>
                                                
                                                    <div>
                                                        <label className="block text-sm font-medium">Numero clienti</label>
                                                        <input type="number" name="numberOfPeople" value={formData?.numberOfPeople} onChange={(e)=>{
                                                            setFormData({
                                                                ...formData,
                                                                numberOfPeople: Number(e.target.value)
                                                            })
                                                        }} className="w-full border p-2 rounded" />
                                                    </div>
                                                    
                                                    <div>
                                                        <label className="block text-sm font-medium">Preferenze</label>
                                                        <input type="text" name="additionalNotes" value={formData?.additionalNotes} onChange={(e)=>{
                                                            setFormData({
                                                                ...formData,
                                                                additionalNotes: e.target.value
                                                            })
                                                        }} className="w-full border p-2 rounded" />
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm font-medium">Numero di Telefono</label>
                                                        <input type="text" name="phoneNumber" value={formData?.phoneNumber} onChange={(e)=>{
                                                            setFormData({
                                                                ...formData,
                                                                phoneNumber: e.target.value
                                                            })
                                                        }} className="w-full border p-2 rounded" />
                                                    </div>
                                                </form>
                                                <p className="py-2">Vuoi davvero confermare?</p>
                                                <div className="mt-4 flex justify-end gap-2">
                                                <button onClick={() => setOpen(false)} className="px-4 py-2 bg-gray-300 rounded">Annulla</button>
                                                <button onClick={() => {
                                                        if (selectedReservation) {
                                                        updateReservation(selectedReservation.id, formData);
                                                        console.log(formData, 'formdata')
                                                        
                                                        setOpen(false);
                                                        }
                                                    }} className="px-4 py-2 bg-[#4F772D] text-white rounded">Conferma</button>
                                                </div>
                                            </Modal>


                            
                        </div>
                    )
        
                    }
                                
                                
                
                            </div>
            </div>
                    

                    
                    
                    
        </section>
    )
}

export default HandleRestaurant