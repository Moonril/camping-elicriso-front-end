import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import axios from "axios"
import { useRef, useState } from "react"
import { Link, Navigate, useNavigate, useParams } from "react-router-dom"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { FaPerson } from "react-icons/fa6"
import { IoIosResize } from "react-icons/io"
import { LuTent } from "react-icons/lu"
import { IoPricetagOutline } from "react-icons/io5"
import Swal from 'sweetalert2'

/* available accommodation */


interface availableAccommodation {
  id: number,
  name: string,
  maxNumberOfPeople: number,
  dimentions: string,
  price: number,
  accomodationStatus: string,
  plotType?: string,
  numberOfBeds?: number,
  numberOfBedrooms?: number,
  airConditioning?: boolean,
  mobileType?: string,
  glampingType?: string
}

/* new booking */

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

const Booking = function () {

    /* date */
    const formatDate = (iso: string) => iso ? new Date(iso).toLocaleDateString("it-IT") : "..."


    /* fetch */
    
    const APIUrlNewBooking = 'http://localhost:8080/camping/bookings'
    const APIUrlAccommodations = 'http://localhost:8080/accommodations'
    /* GET http://localhost:8080/accommodations/plots/available?type=PLOT&guests=3&checkInDate=2025-07-20&checkOutDate=2025-07-25 */

    const accommodationPathMap: Record<string, string> = {
        PLOT: 'plots',
        MOBILEHOME: 'mobilehomes',
        GLAMPING: 'glampings',
    }

    

    const { type } = useParams()

    const [availableAccommodations, setAvailableAccommodations] = useState<availableAccommodation[] | null>(null)


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
        accommodationType: type ? type.toUpperCase() : ''
    })

    /* get */

    function getAvailableAccommodations() {
  const typePath = accommodationPathMap[newBooking.accommodationType]

  if (!typePath) {
    console.warn("Tipo di alloggio non valido o non selezionato")
    return
  }

  if (!newBooking.checkInDate || !newBooking.checkOutDate || !newBooking.numberOfCustomers) {
    console.warn("Dati incomplete: date o numero persone mancanti")
    return
  }

  axios.get(`${APIUrlAccommodations}/${typePath}/available`, {
    params: {
      guests: newBooking.numberOfCustomers,
      checkInDate: newBooking.checkInDate,
      checkOutDate: newBooking.checkOutDate,
    },
  })
    .then((response) => {
      console.log("Alloggi disponibili:", response.data)
      setAvailableAccommodations(response.data)
    })
    .catch((error) => {
      console.error("Errore nel fetch disponibili:", error)
    })
}


    /* post */

    const navigate = useNavigate()
    
    const postNewBooking = ()=>{
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
        })/* .then(function(){navigate("/bookings/checkout")}) */

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

    }



    return(
        
        <section className="bg-orange-50 dark:bg-green-950 text-white min-h-screen">
            {/* cerca prenotazione */}
            <div id="hero" className="flex flex-col justify-center items-center pt-50 pb-80 bg-[url(tree-near-the-ocean.jpg)] bg-cover  text-shadow-md/80 bg-orange-50 dark:bg-green-950">
                <h1 className="text-3xl md:text-5xl text-white text-shadow-md/100 font-bold">Prenota il tuo soggiorno</h1>
                <h1 className="text-2xl md:text-5xl font-bold drop-shadow-lg">immerso nella natura</h1>
            </div>

            <div className="bg-orange-50 py-[500px] md:py-[450px] px-[20px] md:px-30 xl:px-50 relative">

                {/* selezione iniziale */}
                <div className="w-full max-w-xs md:max-w-md lg:max-w-xl bg-[#f3f4f6] flex flex-col items-center justify-center self-center p-5 md:p-15 text-black absolute left-1/2 -top-20 transform -translate-x-1/2 rounded-2xl shadow-xl">

                    <h4 className="self-start text-lg pb-5 font-bold">Seleziona alloggio</h4>
                    {/* tasti accomadion type + number of guests */}
                    <div className="flex flex-row gap-3 md:gap-5">
                        <Menu>
                            

                            
                            <MenuButton className="text-black p-1 md:px-4 md:py-2 text-sm rounded-md hover:bg-slate-800 hover:text-white flex flex-row items-center border border-black m-0">
                                Tipo di alloggio
                                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                </svg>
                            </MenuButton>
                            <MenuItems anchor="bottom" className="bg-white dark:bg-slate-800 dark:text-white shadow-md rounded-lg z-10 overflow-hidden overflow-x-hidden max-w-full m-0">
                                <MenuItem>
                                    <button className="block data-focus:bg-blue-300 p-2 w-full" value={newBooking.accommodationType} onClick={() =>
                                            setNewBooking((prev) => ({
                                                ...prev,
                                                accommodationType: "PLOT",
                                            }))} >
                                        Piazzole
                                    </button>
                                </MenuItem>
                                <MenuItem>
                                    <button className="block data-focus:bg-blue-300 p-2 w-full" onClick={() =>
                                            setNewBooking((prev) => ({
                                                ...prev,
                                                accommodationType: "MOBILEHOME",
                                            }))} >
                                        Bungalows
                                    </button>
                                </MenuItem>
                                <MenuItem>
                                    <button className="block data-focus:bg-blue-300 p-2 w-full" onClick={() =>
                                            setNewBooking((prev) => ({
                                                ...prev,
                                                accommodationType: "GLAMPING",
                                            }))} >
                                        Glamping
                                    </button>
                                </MenuItem>
                            </MenuItems>
                            
                        </Menu>
                        <Menu>
                            <MenuButton className="text-black px-4 py-2 rounded-md hover:bg-slate-800 hover:text-white flex flex-row items-center border border-black">
                                Numero di persone
                                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                </svg>
                            </MenuButton>
                            <MenuItems anchor="bottom" className="absolute mt-2 w-44 bg-white dark:bg-slate-800 dark:text-white shadow-md rounded-lg z-10">
                                <MenuItem>
                                    <button className="block data-focus:bg-blue-300  p-2" onClick={() =>
                                            setNewBooking((prev) => ({
                                                ...prev,
                                                numberOfCustomers: 1,
                                            }))}>
                                        1
                                    </button>
                                </MenuItem>
                                <MenuItem>
                                    <button className="block data-focus:bg-blue-300  p-2" onClick={() =>
                                            setNewBooking((prev) => ({
                                                ...prev,
                                                numberOfCustomers: 2,
                                            }))}>
                                        2
                                    </button>
                                </MenuItem>
                                <MenuItem>
                                    <button className="block data-focus:bg-blue-300  p-2" onClick={() =>
                                            setNewBooking((prev) => ({
                                                ...prev,
                                                numberOfCustomers: 3,
                                            }))}>
                                        3
                                    </button>
                                </MenuItem>
                                <MenuItem>
                                    <button className="block data-focus:bg-blue-300  p-2" onClick={() =>
                                            setNewBooking((prev) => ({
                                                ...prev,
                                                numberOfCustomers: 4,
                                            }))}>
                                        4
                                    </button>
                                </MenuItem>
                                <MenuItem>
                                    <button className="block data-focus:bg-blue-300  p-2" onClick={() =>
                                            setNewBooking((prev) => ({
                                                ...prev,
                                                numberOfCustomers: 5,
                                            }))}>
                                        5
                                    </button>
                                </MenuItem>
                                <MenuItem>
                                    <button className="block data-focus:bg-blue-300  p-2" onClick={() =>
                                            setNewBooking((prev) => ({
                                                ...prev,
                                                numberOfCustomers: 6,
                                            }))}>
                                        6
                                    </button>
                                </MenuItem>
                                <MenuItem>
                                    <button className="block data-focus:bg-blue-300  p-2" onClick={() =>
                                            setNewBooking((prev) => ({
                                                ...prev,
                                                numberOfCustomers: 7,
                                            }))}>
                                        7
                                    </button>
                                </MenuItem>
                                <MenuItem>
                                    <button className="block data-focus:bg-blue-300  p-2" onClick={() =>
                                            setNewBooking((prev) => ({
                                                ...prev,
                                                numberOfCustomers: 8,
                                            }))}>
                                        8
                                    </button>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                        
                    </div>

                    <h4 className="self-start text-lg py-4 font-bold">Seleziona date</h4>
                    
                    {/* calendario */}
                    <div className="flex flex-row gap-3 md:gap-5">
                        <div>
                            <label className="block mb-1 font-medium">Check-in</label>
                            <DatePicker
                            selected={newBooking.checkInDate ? new Date(newBooking.checkInDate) : null}
                            onChange={(date) =>
                                    setNewBooking(prev => ({
                                        ...prev,
                                        checkInDate: date ? date.toLocaleDateString("en-CA")
                                        : ""
                                    }))}
                            selectsStart
                            startDate={newBooking.checkInDate ? new Date(newBooking.checkInDate) : null}
                            endDate={newBooking.checkOutDate ? new Date(newBooking.checkOutDate) : null}
                            minDate={new Date()}
                            className="border p-2 rounded w-full"
                            placeholderText="Data di arrivo"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Check-out</label>
                            <DatePicker
                            selected={newBooking.checkOutDate ? new Date(newBooking.checkOutDate) : null}
                            onChange={(date) =>
                                setNewBooking(prev => ({
                                    ...prev,
                                    checkOutDate: date?.toISOString().split("T")[0] || ""
                                }))}
                            selectsEnd
                            startDate={newBooking.checkInDate ? new Date(newBooking.checkInDate) : null}
                            endDate={newBooking.checkOutDate ? new Date(newBooking.checkOutDate) : null}
                            minDate={newBooking.checkInDate ? new Date(newBooking.checkInDate) : new Date()}
                            className="border p-2 rounded w-full"
                            placeholderText="Data di partenza"
                            />
                        </div>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                        Hai selezionato: <strong>{newBooking.accommodationType}</strong> per <strong>{newBooking.numberOfCustomers}</strong> persona{newBooking.numberOfCustomers > 1 ? 'e' : ''} dal dal <strong>{formatDate(newBooking.checkInDate)}</strong> al <strong>{formatDate(newBooking.checkOutDate)}</strong>
                    </p>

                    {/* submit fetch */}
                    <div className="py-4">
                        <button className="bg-[#e77c29] p-2 px-4 text-white rounded-2xl hover:bg-[#e77b29b2]" onClick={getAvailableAccommodations}>Continua</button>
                    </div>

                </div>


                {/* available accommodations - risultato fetch */}
                    {availableAccommodations && (
                        
                        <div className="flex flex-col justify-center items-center gap-8 py-5 bg-[#f3f4f6] rounded-2xl shadow-xl text-black">
                            <h2 className="font-bold text-3xl md:text-4xl text-center sm:text-5x">
                                
                                {newBooking.accommodationType === "PLOT"
                                    ? "Piazzole disponibili"
                                    : newBooking.accommodationType === "GLAMPING"
                                    ? "Glamping disponibili"
                                    : newBooking.accommodationType === "MOBILEHOME"
                                    ? "Bungalows"
                                    : "Tipologia disponibili"}
                            </h2>

                            <div className="flex flex-row gap-8 w-full flex-wrap items-center justify-center">

                                {availableAccommodations?.map((acc) => (                                
                                    
                                        <div key={acc.id} className="p-5 flex flex-col gap-3 w-full max-w-xs">
                                            <h4 className="text-lg">
                                                {acc.name}
                                            </h4>
                                            <img className="aspect-3/2 object-cover object-bottom rounded-2xl" src="https://images.pexels.com/photos/2123285/pexels-photo-2123285.jpeg" alt="" />
                                            {/* dettagli */}
                                            <div className="flex flex-col gap-2 text-sm">
                                                <div className=" flex flex-row items-center bg-gray-200 text-black rounded p-1 gap-2">
                                                    <p><FaPerson /></p>
                                                    <p>Max. {acc.maxNumberOfPeople} persone</p> 
                                                </div>
                                                <div className=" flex flex-row items-center bg-gray-200 text-black rounded p-1 gap-2">
                                                    <p><IoIosResize /></p>
                                                    <p>Size {acc.dimentions}</p> 
                                                </div>
                                                {acc.plotType && (
                                                    <div className=" flex flex-row items-center bg-gray-200 text-black rounded p-1 gap-2">
                                                        <p>
                                                            <LuTent />
                                                        </p>
                                                        <p>Tipo piazzola: {acc.plotType.toLowerCase()}</p>
                                                    </div>
                                                )}
                                                {acc.mobileType && (
                                                    <div className=" flex flex-col items-center bg-gray-200 text-black rounded p-1 gap-2">
                                                        <p>Tipo Bungalow: {acc.mobileType.toLowerCase()}</p>
                                                        <p>Camere: {acc.numberOfBedrooms}</p>
                                                        <p>Letti: {acc.numberOfBeds}</p>
                                                        {acc.airConditioning &&(
                                                            <p>AirCon: si</p>
                                                        )}
                                                    </div>
                                                )}
                                                {acc.glampingType && (
                                                    <div className=" flex flex-col items-center bg-gray-200 text-black rounded p-1 gap-2">
                                                        <p>Tipo Bungalow: {acc.glampingType.toLowerCase()}</p>
                                                        <p>Letti: {acc.numberOfBeds}</p>
                                                        {acc.airConditioning &&(
                                                            <p>AirCon: si</p>
                                                        )}
                                                    </div>
                                                )}
                                                <div className=" flex flex-row items-center bg-gray-200 text-black rounded p-1 gap-2">
                                                    <p><IoPricetagOutline /></p>
                                                    <p>Prezzo gg/pp {acc.price}€</p> 
                                                </div>
                                                <p className="font-medium">Totale per le date scelte: {acc.price}€</p>
                                            </div>
                                            {/* prenota */}
                                            <button className="bg-[#e77c29] p-2 px-4 text-white rounded-xl self-center hover:bg-[#e77b29b2]" onClick={() => {
                                                setNewBooking((prev) => {
                                                const updated = {
                                                    ...prev,
                                                    accommodationId: acc.id,
                                                }
                                                console.log("ID selezionato:", acc.id)
                                                console.log("newBooking aggiornato:", updated)
                                                return updated
                                                })
                                            }}>
                                                seleziona &#129125;
                                            </button>   
                                        </div>                            
                                ))}
                            </div>
                        </div>
                    )}






                    {newBooking.accommodationId !== 0 && (

                    

                    <form className="flex flex-col justify-center items-center gap-8 py-10 px-9 md:py-15 md:px-20 bg-[#f3f4f6] rounded-2xl shadow-xl text-black mt-20 " onSubmit={(e)=>{
                                        e.preventDefault()
                                        //fetch
                                        postNewBooking()
                                    }}>
                        {/* reservation form*/}
                        <h4 className="text-xl font-bold">Completa la prenotazione con i tuoi dati:</h4>
                    
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="floating_name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  appearance-none border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0  peer" placeholder=" " value={newBooking.customer.name} required onChange={(e) => {
                                
                                                setNewBooking({
                                                    ...newBooking,
                                                    customer: {
                                                    ...newBooking.customer,
                                                    name: e.target.value,
                                                    }
                                                })
                                            }} />
                                <label className="font-bold text-lg peer-focus:font-medium absolute text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="floating_name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:border-blue-500 focus:outline-none focus:ring-0  peer" placeholder=" "value={newBooking.customer.surname} required onChange={(e) => {
                                
                                                setNewBooking({
                                                    ...newBooking,
                                                    customer: {
                                                    ...newBooking.customer,
                                                    surname: e.target.value,
                                                    }
                                                })
                                            }} />
                                <label className="font-bold peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Cognome</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="tel" pattern="^\+?[0-9]{6,15}$" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2  appearance-none border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0  peer" placeholder=" " required value={newBooking.customer.phoneNumber} onChange={(e) => {
                                
                                                setNewBooking({
                                                    ...newBooking,
                                                    customer: {
                                                    ...newBooking.customer,
                                                    phoneNumber: e.target.value,
                                                    }
                                                })
                                            }} />
                                    <label className="font-bold peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Telefono</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="email"  name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2  appearance-none border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " required value={newBooking.customer.email} onChange={(e) => {
                                
                                                setNewBooking({
                                                    ...newBooking,
                                                    customer: {
                                                    ...newBooking.customer,
                                                    email: e.target.value,
                                                    }
                                                })
                                            }}/>
                                    <label className="font-bold peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="number" name="floating_number" id="floating_number" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2  appearance-none border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " required value={newBooking.numberOfCustomers} onChange={(e) => {
                                
                                                setNewBooking({
                                                    ...newBooking,
                                                    numberOfCustomers: Number(e.target.value),
                                                })
                                            }} />
                                <label className="font-bold peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quante persone?</label>
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <input type="date" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2  appearance-none border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " required value={newBooking.checkInDate} onChange={(e) => {
                                    
                                                    setNewBooking({
                                                        ...newBooking,
                                                        checkInDate: e.target.value,
                                                    })
                                                }} />
                                <label className="font-bold peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Check-in</label>
                                <input type="date" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2  appearance-none border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " required value={newBooking.checkOutDate} onChange={(e) => {
                                    
                                                    setNewBooking({
                                                        ...newBooking,
                                                        checkOutDate: e.target.value,
                                                    })
                                                }} />
                                <label className="peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Check-out</label>
                            </div>

                            {/* tipo di accomodation + accomodation specifica */}
{/* 
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <select name="floating_accomodation_type" id="floating_accomodation_type" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer" value={newBooking.accommodationType} onChange={(e) => {
                                    
                                    setNewBooking({
                                    ...newBooking,
                                    accommodationType: e.target.value,
                                    })
                                }}>
                                    <option value="PLOT">Plot</option>
                                    <option value="MOBILEHOME">Mobile Home</option>
                                    <option value="GLAMPING">Glamping</option>
                                </select>
                                <label className="peer-focus:font-medium absolute text-lg font-bold text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Accomodation Type</label>

                            </div> */}

                            <div className="relative z-0 w-full mb-5 group">
                                <textarea name="floating_number" id="floating_number" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2  appearance-none border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " value={newBooking.preference} required onChange={(e) => {
                                
                                                setNewBooking({
                                                    ...newBooking,
                                                    preference: e.target.value,
                                                })
                                            }} />
                                <label className="peer-focus:font-medium absolute text-lg font-bold text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Preferenze...</label>
                            </div>

                            
                            
                            
                        
                            
                            
                            <button type="submit" className="text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Prenota</button>
                    
                    
                    </form>
            )}
            </div>
            
        </section>
    )
}

export default Booking