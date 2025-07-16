import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import axios from "axios"
import { useRef, useState } from "react"
import { useParams } from "react-router-dom"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"




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

    /* dropdown */



    /* fetch */
    
    const APIUrl = 'http://localhost:8080/camping/bookings'

    const { type } = useParams()



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
        accommodationId: 1,
        accommodationType: type ? type.toUpperCase() : ''
    })

    
    
    const postNewBooking = ()=>{
        axios
        .post<NewBookingObject>(APIUrl, newBooking)
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

        })
        .catch((err) => {
        console.error("errore nella fecth", err)
        console.log(newBooking, 'value tendina')
        })

    }
    console.log(newBooking.accommodationType)

    return(
        
        <section className="flex flex-col bg-white-300 dark:bg-green-950 py-50 items-center justify-content text-black dark:text-gray-200 p-6 gap-8">
            {/* cerca prenotazione */}

            {/* form completo parte da qua */}
            
            <form className="flex flex-col" onSubmit={(e)=>{
                                e.preventDefault()
                                //fetch
                                postNewBooking()
                            }}>

                {/* tasti accomadion type + number of guests */}
                <div className="flex flex-row">
                    <Menu>
                        <MenuButton className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 flex flex-row items-center">
                            Tipi di alloggio
                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                            </svg>
                        </MenuButton>
                        <MenuItems anchor="bottom" className="absolute mt-2 w-44 bg-white dark:bg-slate-800 dark:text-white shadow-md rounded-lg z-10">
                            <MenuItem>
                                <a className="block data-focus:bg-blue-300 dark:data-focus:bg-blue-900  p-2" href="/settings">
                                    Piazzole
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a className="block data-focus:bg-blue-300 dark:data-focus:bg-blue-900  p-2" href="/support">
                                    Bungalows
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a className="block data-focus:bg-blue-300 dark:data-focus:bg-blue-900  p-2" href="/license">
                                    Glamping
                                </a>
                            </MenuItem>
                        </MenuItems>
                    </Menu>
                    <Menu>
                        <MenuButton className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 flex flex-row items-center">
                            Numero di persone
                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                            </svg>
                        </MenuButton>
                        <MenuItems anchor="bottom" className="absolute mt-2 w-44 bg-white dark:bg-slate-800 dark:text-white shadow-md rounded-lg z-10">
                            <MenuItem>
                                <a className="block data-focus:bg-blue-300 dark:data-focus:bg-blue-900  p-2" href="/settings">
                                    1
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a className="block data-focus:bg-blue-300 dark:data-focus:bg-blue-900  p-2" href="/support">
                                    2
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a className="block data-focus:bg-blue-300 dark:data-focus:bg-blue-900  p-2" href="/license">
                                    3
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a className="block data-focus:bg-blue-300 dark:data-focus:bg-blue-900  p-2" href="/license">
                                    4
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a className="block data-focus:bg-blue-300 dark:data-focus:bg-blue-900  p-2" href="/license">
                                    5
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a className="block data-focus:bg-blue-300 dark:data-focus:bg-blue-900  p-2" href="/license">
                                    6
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a className="block data-focus:bg-blue-300 dark:data-focus:bg-blue-900  p-2" href="/license">
                                    7
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a className="block data-focus:bg-blue-300 dark:data-focus:bg-blue-900  p-2" href="/license">
                                    8
                                </a>
                            </MenuItem>
                        </MenuItems>
                    </Menu>
                    
                </div>


                {/* calendario */}
                <div className="flex flex-row">
                    <div>
                        <label className="block mb-1 font-medium">Check-in</label>
                        <DatePicker
                        selected={newBooking.checkInDate ? new Date(newBooking.checkInDate) : null}
                        onChange={(date) =>
                                setNewBooking(prev => ({
                                    ...prev,
                                    checkInDate: date?.toISOString().split("T")[0] || ""
                                }))}
                        selectsStart
                        startDate={newBooking.checkInDate ? new Date(newBooking.checkInDate) : null}
                        endDate={newBooking.checkOutDate ? new Date(newBooking.checkOutDate) : null}
                        minDate={new Date()}
                        className="border p-2 rounded w-full"
                        placeholderText="Seleziona data di arrivo"
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
                        placeholderText="Seleziona data di partenza"
                        />
                    </div>
                </div>

                {/* available accommodations? */}
                <div >

                </div>






                {/* reservation form*/}
                <div>
                
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={newBooking.customer.name} required onChange={(e) => {
                        
                                        setNewBooking({
                                            ...newBooking,
                                            customer: {
                                            ...newBooking.customer,
                                            name: e.target.value,
                                            }
                                        })
                                    }} />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "value={newBooking.customer.surname} required onChange={(e) => {
                        
                                        setNewBooking({
                                            ...newBooking,
                                            customer: {
                                            ...newBooking.customer,
                                            surname: e.target.value,
                                            }
                                        })
                                    }} />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Cognome</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="tel" pattern="^\+?[0-9]{6,15}$" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={newBooking.customer.phoneNumber} onChange={(e) => {
                        
                                        setNewBooking({
                                            ...newBooking,
                                            customer: {
                                            ...newBooking.customer,
                                            phoneNumber: e.target.value,
                                            }
                                        })
                                    }} />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Telefono</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="email"  name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={newBooking.customer.email} onChange={(e) => {
                        
                                        setNewBooking({
                                            ...newBooking,
                                            customer: {
                                            ...newBooking.customer,
                                            email: e.target.value,
                                            }
                                        })
                                    }}/>
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="number" name="floating_number" id="floating_number" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={newBooking.numberOfCustomers} onChange={(e) => {
                        
                                        setNewBooking({
                                            ...newBooking,
                                            numberOfCustomers: Number(e.target.value),
                                        })
                                    }} />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quante persone?</label>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <input type="date" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={newBooking.checkInDate} onChange={(e) => {
                            
                                            setNewBooking({
                                                ...newBooking,
                                                checkInDate: e.target.value,
                                            })
                                        }} />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Check-in</label>
                        <input type="date" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={newBooking.checkOutDate} onChange={(e) => {
                            
                                            setNewBooking({
                                                ...newBooking,
                                                checkOutDate: e.target.value,
                                            })
                                        }} />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Check-out</label>
                    </div>

                    {/* tipo di accomodation + accomodation specifica */}

                    <div className="grid md:grid-cols-2 md:gap-6">
                        <select name="floating_accomodation_type" id="floating_accomodation_type" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={newBooking.accommodationType} onChange={(e) => {
                            
                            setNewBooking({
                            ...newBooking,
                            accommodationType: e.target.value,
                            })
                        }}>
                            <option value="PLOT">Plot</option>
                            <option value="MOBILEHOME">Mobile Home</option>
                            <option value="GLAMPING">Glamping</option>
                        </select>
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Accomodation Type</label>


                        <select name="floating_accomodation_type" id="floating_accomodation_type" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={newBooking.accommodationType} onChange={(e) => {
                            
                            setNewBooking({
                            ...newBooking,
                            accommodationId: Number(e.target.value),
                            })
                        }}>
                            <option value="52">52</option>
                            <option value="53">53</option>
                            <option value="54">54</option>
                        </select>
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Accomodation number</label>
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <textarea name="floating_number" id="floating_number" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={newBooking.preference} required onChange={(e) => {
                        
                                        setNewBooking({
                                            ...newBooking,
                                            preference: e.target.value,
                                        })
                                    }} />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Preferenze...</label>
                    </div>

                    
                    
                    
                
                    
                    
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </div>
            
            </form>
            
        </section>
    )
}

export default Booking