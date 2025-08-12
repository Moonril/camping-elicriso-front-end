/* Interfaces */

import axios from "axios"
import { useState } from "react"
import Swal from "sweetalert2"

interface NewReservationObject {
    name: string,
    numberOfPeople: number,
    reservationDate: string,
    additionalNotes?: string,
    phoneNumber: string,
    bookingId?: number
}




const NewRestaurantReservation = function (){

    /* new reservation */

    const APIUrl = 'http://localhost:8080/restaurant/reservations'

    const [newReservation, setNewReservation] = useState<NewReservationObject>({
        name: '',
        numberOfPeople: 1,
        reservationDate: '',
        additionalNotes: '',
        phoneNumber: ''
    })


    function postRestaurantReservation() {
    axios
      .post<NewReservationObject>(APIUrl, newReservation)
      .then((response) => {
            setNewReservation({
            name: '',
            numberOfPeople: 1,
            reservationDate: '',
            additionalNotes: '',
            phoneNumber: ''
        })
      console.log("Prenotazione salvata: ", response.data)
      Swal.fire({
                  title: 'Prenotazione riuscita!',
                  text: 'La tua prenotazione è stata salvata con successo.',
                  icon: 'success',
                  confirmButtonText: 'OK',
              })
      })
      .catch((err) => {
        console.error("Errore nella prenotazione: ", err)
        Swal.fire({
                    title: 'Errore!',
                    text: 'Si è verificato un problema durante la prenotazione.',
                    icon: 'error',
                    confirmButtonText: 'Riprova',
                })
      })
  }


    return(
        <section className="py-5 gap-5">
            <div className="ps-1 mb-3 flex flex-row gap-3">
                
                <form action="flex flex-col" onSubmit={(e)=>{
                            e.preventDefault()
                            //fetch
                            postRestaurantReservation()
                        }}>
                    <h5 className="font-bold text-xl py-1">Aggiungi una nuova prenotazione</h5>

                    <div className="flex flex-row gap-5 py-3">
                        <div className="flex flex-col">
                            <label >Nome</label>
                            <input type="text" name="name" id="name" className="bg-white rounded-md p-1" required value={newReservation.name} onChange={(e) => {
                                        setNewReservation({
                                            ...newReservation,
                                            name: e.target.value,
                                        })
                                    }} />
                        </div>
                        <div className="flex flex-col">
                            <label >Numero di persone</label>
                            <input type="number" name="people" id="people" className="bg-white rounded-md p-1" required value={newReservation.numberOfPeople === 0 ? '' : newReservation.numberOfPeople} onChange={(e) => {
                                        setNewReservation({
                                            ...newReservation,
                                            numberOfPeople: Number(e.target.value),
                                        })
                                    }} />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="">Note</label>
                        <textarea name="notes" id="notes" className="bg-white rounded-md p-1" value={newReservation.additionalNotes} onChange={(e) => {
                                        setNewReservation({
                                            ...newReservation,
                                            additionalNotes: e.target.value,
                                        })
                                    }} />
                    </div>

                    <div className="flex flex-row gap-5 py-3">
                        <div className="flex flex-col">
                            <label >Giorno e ora</label>
                            <input type="datetime-local" name="date-time" id="date-time" className="bg-white rounded-md p-1" required value={newReservation.reservationDate} onChange={(e) => {
                                            setNewReservation({
                                                ...newReservation,
                                                reservationDate: e.target.value,
                                            })
                                        }} />
                        </div>
                        <div className="flex flex-col">
                            <label >Numero di telefono</label>
                            <input type="tel" pattern="^\+?[0-9]{6,15}$" name="phone" id="phone" className="bg-white rounded-md p-1" required value={newReservation.phoneNumber} onChange={(e) => {
                                            setNewReservation({
                                                ...newReservation,
                                                phoneNumber: e.target.value,
                                            })
                                        }} />
                        </div>
                    </div>

                    <button type="submit" className="w-50 text-white bg-teal-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-primary-700 dark:focus:ring-primary-800 cursor-pointer my-3">Crea</button>

                </form>
            </div>

        </section>
    )
}

export default NewRestaurantReservation