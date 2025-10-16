
/* Interfaces */

import axios from "axios"
import { useState } from "react"
import Swal from "sweetalert2"

interface NewBookingObject {
  checkInDate: string,
  checkOutDate: string,
  numberOfCustomers: number,
  preference: string,
  customer: {
    name: string,
    surname: string,
    email: string,
    phoneNumber: string,
    },
  accommodationId: number,
  accommodationType: string
}

const NewBooking = function (){

    /* post */

    /* const navigate = useNavigate() */ /* redirection to payment page coming soon */
    

    const [newBooking, setNewBooking] = useState<NewBookingObject>({
        checkInDate: '',
        checkOutDate: '',
        numberOfCustomers: 1,
        preference: '',
        customer: {
        name: '',
        surname: '',
        email: '',
        phoneNumber: '',
        },
        accommodationId: 0,
        accommodationType: ''
    })


    const APIUrlNewBooking = 'http://localhost:8080/camping/bookings'

 /*    const postNewBooking = ()=>{
        axios
        .post<NewBookingObject>(APIUrlNewBooking, newBooking)
        .then((response) => {
        setNewBooking({
        checkInDate: '',
        checkOutDate: '',
        numberOfCustomers: 1,
        preference: '',
        customer: {
        name: '',
        surname: '',
        email: '',
        phoneNumber: '',
        },
        accommodationId: 1,
        accommodationType: ''
        })
        console.log("Prenotazione salvata: ", response.data)
        Swal.fire({
            title: 'Prenotazione riuscita!',
            text: 'La tua prenotazione è stata salvata con successo!',
            icon: 'success',
            confirmButtonText: 'Effettua il pagamento',
        })

        })
        .catch((err) => {
        console.error("errore nella fecth", err)
        console.log(newBooking, 'value tendina')
        Swal.fire({
            title: 'Errore!',
            text: 'Si è verificato un problema durante la prenotazione.',
            icon: 'error',
            confirmButtonText: 'Riprova',
        })
        })

    } */



    return(
        <section className="py-5 gap-5">
            <div className="ps-1 mb-3 flex flex-row gap-3">
                
                <form action="flex flex-col">
                    <h5 className="font-bold text-xl py-1">Crea una nuova prenotazione</h5>

                    <div className="flex flex-row gap-5 py-3">
                        <div className="flex flex-col">
                            <label >Nome</label>
                            <input type="text" name="name" id="name" className="bg-white rounded-md p-1" />
                        </div>
                        <div className="flex flex-col">
                            <label >Cognome</label>
                            <input type="text" name="surname" id="surname" className="bg-white rounded-md p-1" />
                        </div>
                    </div>

                    <div className="flex flex-row gap-5 py-3">
                        <div className="flex flex-col">
                            <label >Email</label>
                            <input type="email" name="email" id="email" className="bg-white rounded-md p-1" />
                        </div>
                        <div className="flex flex-col">
                            <label >Numero di telefono</label>
                            <input type="tel" pattern="^\+?[0-9]{6,15}$" name="phone" id="phone" className="bg-white rounded-md p-1" />
                        </div>
                    </div>

                    <button type="submit" className="w-50 text-white bg-teal-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-primary-700 dark:focus:ring-primary-800 cursor-pointer my-3">Crea</button>

                </form>
            </div>

        </section>

    )
}

export default NewBooking