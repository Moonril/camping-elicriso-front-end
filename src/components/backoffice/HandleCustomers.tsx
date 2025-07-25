import axios from "axios"
import React, { useState } from "react"
import { FaEye, FaMagnifyingGlass } from "react-icons/fa6"
import { GoDotFill } from "react-icons/go"
import Modal from "react-modal"
import Swal from "sweetalert2"
Modal.setAppElement("#root")

interface Customer {
    id: number,
    name: string,
    surname: string,
    email: string,
    phoneNumber: string
}

interface PatchCustomer {
  name: string,
  surname: string,
  email: string,
  phoneNumber: string
}





const HandleCustomers = function () {

    const APIUrl = 'http://localhost:8080/customers'

    const [open, setOpen] = useState(false)
     
    const handleOpen = () => setOpen(!open)
    
    const [formData, setFormData] = useState<PatchCustomer>({
            name: "",
            surname: "",
            email: "",
            phoneNumber: ""
    })
    
    const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null)
    
    const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null)
    

    /* get customers */

    const [customers, setCustomers] = useState<Customer[] | null>([])
    const [pagination, setPagination] = useState<{ totalPages: number, currentPage: number }>({
            totalPages: 0,
            currentPage: 0,
    })

    const getCustomers = () => {
        const token = localStorage.getItem("token")
        axios.get(APIUrl, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        }).then((response) =>{
            setCustomers(response.data.content)
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

    /* get by name */

    const [nameValue, setNameValue] = useState({name: ''})
    
    const getCustomersByName = () => {
        const token = localStorage.getItem("token")
        axios.get(`${APIUrl}/search?name=${encodeURIComponent(nameValue.name)}`,{
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        })
        .then((response) => {
        setCustomers(response.data)

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

    /* put booking */

    const updateCustomer = (id: number, data: any) => {
        const token = localStorage.getItem("token")
        console.log("Token:", token)

        axios.put(`http://localhost:8080/customers/${id}`, data, {
            headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            },
        })
        .then((response) => {
            console.log("Prenotazione aggiornata:", response.data)
            getCustomers()
        })
        .catch((error) => {
            console.error("Errore nella modifica:", error)
        })
    }


    /* sorting */
    /* by name */
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

    const sortByName = () => {
        if (!customers) return


        const sorted = [...customers].sort((a, b) => {
            const nameA = `${a.name} ${a.surname}`.toLowerCase()
            const nameB = `${b.name} ${b.surname}`.toLowerCase()
            if (nameA < nameB) return sortOrder === 'asc' ? -1 : 1
            if (nameA > nameB) return sortOrder === 'asc' ? 1 : -1
            return 0
        })
        setCustomers(sorted)
        setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'))
    }



    return(
        <section className="py-5 gap-5">
            <div className="ps-1 mb-3 flex flex-row gap-3">
                <button type="submit" className="w-50 text-white bg-teal-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-primary-700 dark:focus:ring-primary-800 cursor-pointer" onClick={getCustomers}>Cerca Clienti</button>

                <p className="flex items-center justify-center"><GoDotFill /></p>
                <form className="flex flex-row items-center justify-center gap-2" action="#" onSubmit={(e)=>{
                        e.preventDefault() 
                        //fetch
                        getCustomersByName()
                    }} >
                        
                    <input type="text" name="bookingNumber" id="bookingNumber" className=" border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nome Cliente" required value={nameValue.name} onChange={(e) => {
                        setNameValue({
                            ...nameValue,
                            name: e.target.value,
                        })
                    }} />
                        
        
                    <button type="submit" className=" text-white bg-teal-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"><FaMagnifyingGlass /></button>
                </form>
            </div>

            {/* Customers' list */}
            <div>
                {customers && (
                        <div className="flex flex-col text-white">
                            <div className="overflow-x-auto w-full rounded-md">
                                                
                
                                            
                                <table className="min-w-[800px] table-auto bg-[#90A955] ">
                                    <thead className="bg-[#4F772D]">
                                          <tr>
                                              <th></th>
                                              <th>Id</th>
                                              <th className="cursor-pointer" onClick={sortByName}>Nome {sortOrder === 'asc' ? '↑' : '↓'}</th>
                                                <th className="cursor-pointer" onClick={sortByName}>Cognome {sortOrder === 'asc' ? '↑' : '↓'}</th>
                                              <th>Email</th>
                                               <th>Numero di telefono</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                            {customers?.map((customer) => (
                                            <React.Fragment key={customer.id}>
                                                <tr className="">
                                                    <button className="ps-2 pt-4" onClick={() =>
                                                           setSelectedCustomerId(selectedCustomerId === customer.id ? null : customer.id)
                                                       }>
                                                           <FaEye className="hover:text-[#31572C]" />
                                                    </button>
                                                    <td className="ps-2">{customer.id}</td>
                                                    <td className="ps-2">{customer.name}</td>
                                                    <td className="ps-2">{customer.surname}</td>
                                                    <td className="ps-2">{customer.email}</td>
                                                    <td className="ps-2">{customer.phoneNumber}</td>
                                                </tr>
                
                                           {selectedCustomerId === customer.id && (
                                               <tr>
                                               <td colSpan={8}>
                                                   <div className="p-4 bg-[#31572C] rounded-md text-white">
                                                       <p><strong>Booking ID:</strong>  {customer.id}</p>
                                                      <p><strong>Nome e Cognome:</strong> {customer.name} {customer.surname}</p>
                                                      <p><strong>Email:</strong> {customer.email}</p>
                                                      <p><strong>Numero di telefono:</strong> {customer.phoneNumber}</p>
                                                    <button className="mt-2 px-4 py-1 bg-yellow-500 text-white rounded me-1 hover:bg-yellow-300"onClick={() => {
                                                                        setSelectedCustomer(customer)
                                                                        setFormData({
                                                                        name: customer.name,
                                                                        surname: customer.surname,
                                                                        email: customer.email,
                                                                        phoneNumber: customer.phoneNumber
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
                                                                        <label className="block text-sm font-medium">Nome</label>
                                                                        <input type="text" name="preference" value={formData?.name} onChange={(e)=>{
                                                                            setFormData({
                                                                                ...formData,
                                                                                name: e.target.value
                                                                            })
                                                                        }} className="w-full border p-2 rounded" />
                                                                    </div>
                                                                    <div>
                                                                        <label className="block text-sm font-medium">Cognome</label>
                                                                        <input type="text" name="preference" value={formData?.surname} onChange={(e)=>{
                                                                            setFormData({
                                                                                ...formData,
                                                                                surname: e.target.value
                                                                            })
                                                                        }} className="w-full border p-2 rounded" />
                                                                    </div>
                                                                    <div>
                                                                        <label className="block text-sm font-medium">Email</label>
                                                                        <input type="text" name="preference" value={formData?.email} onChange={(e)=>{
                                                                            setFormData({
                                                                                ...formData,
                                                                                email: e.target.value
                                                                            })
                                                                        }} className="w-full border p-2 rounded" />
                                                                    </div>
                                                                    <div>
                                                                        <label className="block text-sm font-medium">Numero di telefono</label>
                                                                        <input type="text" name="preference" value={formData?.phoneNumber} onChange={(e)=>{
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
                                                                        if (selectedCustomer) {
                                                                        updateCustomer(selectedCustomer.id, formData)
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

export default HandleCustomers