import axios from "axios"
import { useState } from "react"
import Swal from 'sweetalert2'

interface RestaurantReservation {
    name: string,
    id: number,
    reservationCreationDate: string,
    numberOfPeople: number,
    reservationDate: string,
    additionalNotes: string,
    booking: {
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
}

interface NewReservationObject {
            name: string,
            numberOfPeople: number,
            reservationDate: string,
            additionalNotes?: string,
            phoneNumber: string,
            bookingId?: number
        }

const Restaurant = function(){

    /* tabs */

    const [activeTab, setActiveTab] = useState("daily")
    const tabs = [
        { id: 'daily', label: 'Oggi'},
        { id: 'venerdi', label: 'Venerdì'},
        { id: 'sabato', label: 'Sabato'}
    ]

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



    return (
        /* form prenotazioni ristorante */
        <section className="bg-orange-50 bg-green-950 flex flex-col items-center justify-center px-6 py-20 lg:py-30 xl:py-20 mx-auto gap-8 text-black ">
            <div className="w-fullmd: p-10 rounded-2xl text-center">
                <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg" alt="dishes" className="rounded-2xl md:h-[200px] xl:h-[250px] w-full object-cover object-top my-5" />
                <h1 className=" text-6xl text-shadow-md/30 pb-10">Ristorante Rosmarino</h1>
                <p>Vieni a trovarci nel nostro ristorante, pizzeria e bar situato vicino alla piscina. altre brevi desscrizioni Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis qui quos, quis quibusdam, non culpa alias eaque numquam nesciunt ex voluptatem officia adipisci officiis reprehenderit. Illum fugit laborum dignissimos pariatur!</p>
                <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg" alt="dishes" className="hidden md:block rounded-2xl md:h-[200px] xl:h-[250px] w-full object-cover object-[25%_70%] my-5" />
            </div>

            <h1 className=" text-6xl text-shadow-md/30">Menù</h1>
            
            <div className="flex flex-col w-full lg:flex-row gap-8">

                <div className=" text-black flex-1 rounded-2xl md:p-10"> {/* bg-red-300/75 */}

                    <ul className="flex text-sm font-medium text-center text-gray-400 bg-red-100 rounded-t-2xl">
                        {tabs.map((tab) => (
                        <li key={tab.id} className="me-2">
                            <button
                            onClick={() => setActiveTab(tab.id)}
                            className={`inline-block p-4 rounded-t-lg ${
                                activeTab === tab.id
                                ? "text-black bg-red-300 "
                                : "hover:bg-red-200 hover:text-black"
                            }`}
                            >
                            {tab.label}
                            </button>
                        </li>
                        ))}
                    </ul>

                    <div className="p-4 playfair-font bg-red-200 rounded-b-2xl shadow-2xl">
                        {activeTab === "daily" && (
                        <div> 

                            <h4 className="text-xl font-medium">Antipasti</h4>
                            <p className="text-slate-800">Bruschette al pomodoro</p>
                            <p className="text-slate-800 pb-4">Tagliere di affettati</p>
                            

                            <h4 className="text-xl font-medium">Primi</h4>
                            <p className="text-slate-800">Risotto ai porcini</p>
                            <p className="text-slate-800">Tagliatelle al sugo</p>
                            <p className="text-slate-800 pb-4">Primo di mare</p>

                            <h4 className="text-xl font-medium">Secondi</h4>
                            <p className="text-slate-800">Pesce al forno</p>
                            <p className="text-slate-800 pb-4">Verdure gratinate</p>

                            <h4 className="text-xl font-medium">Contorni</h4>
                            <p className="text-slate-800">Patate arrosto</p>
                            <p className="text-slate-800 pb-4">Insalata di campo</p>

                            <h4 className="text-xl font-medium">Dolce</h4>
                            <p className="text-slate-800">Tiramisù</p>
                            <p className="text-slate-800">Torta della nonna</p>
                        </div>
                        )}
                        {activeTab === "venerdi" && (
                        <div> 

                            <h4 className="text-xl font-medium">Antipasti</h4>
                            <p className="text-slate-800">Bruschette al pomodoro</p>
                            <p className="text-slate-800 pb-4">Tagliere di affettati</p>
                            

                            <h4 className="text-xl font-medium">Primi</h4>
                            <p className="text-slate-800">Risotto ai porcini</p>
                            <p className="text-slate-800">Tagliatelle al sugo</p>
                            <p className="text-slate-800 pb-4">Primo di mare</p>

                            <h4 className="text-xl font-medium">Secondi</h4>
                            <p className="text-slate-800">Pesce al forno</p>
                            <p className="text-slate-800 pb-4">Verdure gratinate</p>

                            <h4 className="text-xl font-medium">Contorni</h4>
                            <p className="text-slate-800">Patate arrosto</p>
                            <p className="text-slate-800 pb-4">Insalata di campo</p>

                            <h4 className="text-xl font-medium">Dolce</h4>
                            <p className="text-slate-800">Tiramisù</p>
                            <p className="text-slate-800">Torta della nonna</p>
                        </div>
                        )}
                        {activeTab === "sabato" && (
                        <div> 

                            <h4 className="text-xl font-medium">Antipasti</h4>
                            <p className="text-slate-800">Bruschette al pomodoro</p>
                            <p className="text-slate-800 pb-4">Tagliere di affettati</p>
                            

                            <h4 className="text-xl font-medium">Primi</h4>
                            <p className="text-slate-800">Risotto ai porcini</p>
                            <p className="text-slate-800">Tagliatelle al sugo</p>
                            <p className="text-slate-800 pb-4">Primo di mare</p>

                            <h4 className="text-xl font-medium">Secondi</h4>
                            <p className="text-slate-800">Pesce al forno</p>
                            <p className="text-slate-800 pb-4">Verdure gratinate</p>

                            <h4 className="text-xl font-medium">Contorni</h4>
                            <p className="text-slate-800">Patate arrosto</p>
                            <p className="text-slate-800 pb-4">Insalata di campo</p>

                            <h4 className="text-xl font-medium">Dolce</h4>
                            <p className="text-slate-800">Tiramisù</p>
                            <p className="text-slate-800">Torta della nonna</p>
                        </div>
                        )}
                    </div>
                    

                </div>
                <div className="flex flex-col items-center justify-center gap-4 flex-1 text-black">
                    <div className="flex flex-col items-center justify-content">
                        <h5 className="font-bold">Info:</h5>
                        <p className="text-center">Tutti i nostri menu includono delle varianti vegane/vegetariane anche se non specificate, per ogni dubbio contattaci o visitaci direttamente</p>
                    </div>
                    <div className="flex flex-col items-center justify-content">
                        <h5 className="font-bold">Orari:</h5>
                        <p>8:00 - 24:00</p>
                    </div>
                    <div className="flex flex-col items-center justify-content">
                        <h5 className="font-bold">Whatsapp:</h5>
                        <p>+39 348 3489589</p>
                    </div>
                    <div className="flex flex-col items-center justify-content">
                        <h5 className="font-bold">Posizione:</h5>
                            <p>Zona A, vicino alla piscina</p>
                    </div>

                </div>
            </div>
                <form className="max-w-md mx-auto flex-1 w-full text-black" onSubmit={(e)=>{
                            e.preventDefault()
                            //fetch
                            postRestaurantReservation()
                        }}>
                            <h4 className="text-2xl text-center">Prenota</h4>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_name" id="floating_name" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2  appearance-none  border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " value={newReservation.name} required onChange={(e) => {
                                        setNewReservation({
                                            ...newReservation,
                                            name: e.target.value,
                                        })
                                    }} />
                        <label className="peer-focus:font-medium absolute text-md text-gray-400 font-bold duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="number" name="floating_number" id="floating_number" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2  appearance-none  border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " required value={newReservation.numberOfPeople === 0 ? '' : newReservation.numberOfPeople} onChange={(e) => {
                                        setNewReservation({
                                            ...newReservation,
                                            numberOfPeople: Number(e.target.value),
                                        })
                                    }} />
                        <label className="peer-focus:font-medium absolute text-md text-gray-400 font-bold duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quante persone?</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <textarea name="floating_number" id="floating_number" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2  appearance-none  border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " value={newReservation.additionalNotes} onChange={(e) => {
                                        setNewReservation({
                                            ...newReservation,
                                            additionalNotes: e.target.value,
                                        })
                                    }}/>
                        <label className="peer-focus:font-medium absolute text-md text-gray-400 font-bold duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Preferenze, allergie...</label>
                    </div>
                    
                    
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="datetime-local" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2  appearance-none  border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " required value={newReservation.reservationDate} onChange={(e) => {
                                            setNewReservation({
                                                ...newReservation,
                                                reservationDate: e.target.value,
                                            })
                                        }}/>
                        <label className="peer-focus:font-medium absolute text-md text-gray-400 font-bold duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Giorno e ora</label>
                    </div>
                        
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="tel" pattern="^\+?[0-9]{6,15}$" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2  appearance-none  border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " required value={newReservation.phoneNumber} onChange={(e) => {
                                            setNewReservation({
                                                ...newReservation,
                                                phoneNumber: e.target.value,
                                            })
                                        }}/>
                                <label className="peer-focus:font-medium absolute text-md text-gray-400 font-bold duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Telefono</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2  appearance-none  border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " value={newReservation.bookingId} onChange={(e) => {
                                            setNewReservation({
                                                ...newReservation,
                                                bookingId: Number(e.target.value),
                                            })
                                        }}/>
                                <label className="peer-focus:font-medium absolute text-md text-gray-400 font-bold duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Numero prenotazione</label>
                            </div>
                        </div>
                    <button type="submit" className="text-white  focus:ring-4 focus:outline-none font-medium rounded-lg text-md sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Prenota</button>
                </form>
        </section>
    )
}

export default Restaurant