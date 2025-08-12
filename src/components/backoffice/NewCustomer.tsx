
/* Interfaces */

import axios from "axios"
import { useState } from "react"
import Swal from "sweetalert2"

interface NewCustomerObject {
    name: string,
    surname: string,
    email: string,
    phoneNumber: string
}


const NewCustomer = function (){

    /* POST New Customer */
    const APIUrl = 'http://localhost:8080/customers'
    
    const [newCustomer, setNewCustomer] = useState<NewCustomerObject>({
            name: '',
            surname: '',
            email: '',
            phoneNumber: ''
    })

    const postNewCustomer = () => {

        const token = localStorage.getItem("token")


        axios
          .post<NewCustomerObject>(APIUrl, newCustomer,
            {headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },})
          .then((response) => {
                setNewCustomer({
                name: '',
                surname: '',
                email: '',
                phoneNumber: ''
            })
          console.log("Nuovo cliente salvato: ", response.data)
          Swal.fire({
                      title: 'Salvataggio completato!',
                      text: 'Nuovo cliente salvato con successo.',
                      icon: 'success',
                      confirmButtonText: 'OK',
                  })
          })
          .catch((err) => {
            console.error("Errore nel salvataggio: ", err)
            Swal.fire({
                        title: 'Errore!',
                        text: 'Si è verificato un problema durante il salvataggio.',
                        icon: 'error',
                        confirmButtonText: 'Riprova',
                    })
          })
      }


    return(
        <section className="py-5 gap-5">
            <div className="ps-1 mb-3 flex flex-row gap-3">
                
                <form action="flex flex-col"  onSubmit={(e)=>{
                            e.preventDefault()
                            //fetch
                            postNewCustomer()
                        }}>
                    <h5 className="font-bold text-xl py-1">Aggiungi un nuovo cliente</h5>

                    <div className="flex flex-row gap-5 py-3">
                        <div className="flex flex-col">
                            <label >Nome</label>
                            <input type="text" name="name" id="name" className="bg-white rounded-md p-1" required value={newCustomer.name} onChange={(e) => {
                                        setNewCustomer({
                                            ...newCustomer,
                                            name: e.target.value,
                                        })
                                    }}/>
                        </div>
                        <div className="flex flex-col">
                            <label >Cognome</label>
                            <input type="text" name="surname" id="surname" className="bg-white rounded-md p-1" required value={newCustomer.surname} onChange={(e) => {
                                        setNewCustomer({
                                            ...newCustomer,
                                            surname: e.target.value,
                                        })
                                    }}/>
                        </div>
                    </div>

                    <div className="flex flex-row gap-5 py-3">
                        <div className="flex flex-col">
                            <label >Email</label>
                            <input type="email" name="email" id="email" className="bg-white rounded-md p-1" required value={newCustomer.email} onChange={(e) => {
                                        setNewCustomer({
                                            ...newCustomer,
                                            email: e.target.value,
                                        })
                                    }}/>
                        </div>
                        <div className="flex flex-col">
                            <label >Numero di telefono</label>
                            <input type="tel" pattern="^\+?[0-9]{6,15}$" name="phone" id="phone" className="bg-white rounded-md p-1" required value={newCustomer.phoneNumber} onChange={(e) => {
                                        setNewCustomer({
                                            ...newCustomer,
                                            phoneNumber: e.target.value,
                                        })
                                    }}/>
                        </div>
                    </div>

                    <button type="submit" className="w-50 text-white bg-teal-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-primary-700 dark:focus:ring-primary-800 cursor-pointer my-3">Crea</button>

                </form>
            </div>

        </section>
    )
}

export default NewCustomer