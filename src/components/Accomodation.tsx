import axios from "axios"
import { useState } from "react"



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


const Accomodation = function (){

  const APIUrl = 'http://localhost:8080/camping/bookings'

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
  accommodationType: ''
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
      console.log(newBooking)
    })

  }
  //console.log(newBooking)


    return (
      <div>
        {/* First section with 3 accomodation types */}
        <section className="items-center justify-content p-6 "> {/* h-screen */}
            <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
            Our Accomodations
          </h2>
          <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
            <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-20 px-2 rounded-3xl shadow-xl bg-[url(https://images.pexels.com/photos/13192354/pexels-photo-13192354.jpeg)] bg-cover opacity-85 cursor-pointer">
              <h3 className="text-3xl text-center text-slate-900 dark:text-white">Plots</h3>
            </li>
            <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-20 px-2 rounded-3xl shadow-xl bg-[url(https://images.pexels.com/photos/13192354/pexels-photo-13192354.jpeg)] bg-cover opacity-85">
              <h3 className="text-3xl text-center text-slate-900 dark:text-white">Mobile Homes</h3>
            </li>
            <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-20 px-2 rounded-3xl shadow-xl bg-[url(https://images.pexels.com/photos/13192354/pexels-photo-13192354.jpeg)] bg-cover opacity-85">
              <h3 className="text-3xl text-center text-slate-900 dark:text-white">Glamping</h3>
            </li>
          </ul>
        </section>


        {/* reservations */}
        <section className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <form className="max-w-md mx-auto" onSubmit={(e)=>{
                        e.preventDefault()
                        //fetch
                        postNewBooking()
                    }}>
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
            </form>
        </section>

      
      </div>  
    )

}

export default Accomodation