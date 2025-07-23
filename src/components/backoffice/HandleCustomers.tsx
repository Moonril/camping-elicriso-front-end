import axios from "axios"
import React, { useState } from "react"
import { FaEye } from "react-icons/fa6"
import Modal from "react-modal"
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

    const [open, setOpen] = useState(false);
     
    const handleOpen = () => setOpen(!open);
    
    const [formData, setFormData] = useState<PatchCustomer>({
            name: "",
            surname: "",
            email: "",
            phoneNumber: ""
    })
    
    const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
    
    const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null);
    

    /* get customers */

    const [customers, setCustomers] = useState<Customer[] | null>([])
    const [pagination, setPagination] = useState<{ totalPages: number, currentPage: number }>({
            totalPages: 0,
            currentPage: 0,
    })

    const getCustomers = () => {
        const token = localStorage.getItem("token");
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

    /* put booking */

    const updateCustomer = (id: number, data: any) => {
        const token = localStorage.getItem("token");
        console.log("Token:", token);

        axios.put(`http://localhost:8080/customers/${id}`, data, {
            headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            },
        })
        .then((response) => {
            console.log("Prenotazione aggiornata:", response.data);
            getCustomers()
        })
        .catch((error) => {
            console.error("Errore nella modifica:", error);
        });
    };



    return(
        <section className="py-5 gap-5">
            <div className="ps-1 mb-3">
                <button type="submit" className="w-50 text-white bg-teal-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={getCustomers}>Cerca Clienti</button> 
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
                                              <th>Nome</th>
                                                <th>Cognome</th>
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
                                                                        setSelectedCustomer(customer);
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
                                                                        updateCustomer(selectedCustomer.id, formData);
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


        </section>
    ) 
}

export default HandleCustomers;