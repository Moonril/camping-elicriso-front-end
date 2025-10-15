import axios from "axios"
import React, { useState } from "react"
import { FaEye } from "react-icons/fa6"
import Modal from "react-modal"
Modal.setAppElement("#root")

interface AccommodationObject {
  id: number,
  name: string,
  maxNumberOfPeople: number,
  dimentions: string,
  price: number,
  accomodationStatus: string,
  img: string,
  plotType?: string,
  numberOfBeds?: number,
  numberOfBedrooms?: number,
  airConditioning?: boolean,
  mobileType?: string,
  glampingType?: string

}
interface PatchAccommodation {
  name: string,
  maxNumberOfPeople: number,
  dimentions: string,
  price: number,
  accomodationStatus: string,
  img: string
}

const HandleAccommodations = function (){

    const [selectedAccommodation, setSelectedAccommodation] = useState<AccommodationObject | null>(null)
        
    const [selectedAccommodationId, setSelectedAccommodationId] = useState<number | null>(null)

    const [open, setOpen] = useState(false)
         
    const handleOpen = () => setOpen(!open)
    
    const [formData, setFormData] = useState<PatchAccommodation>({
        name: '',
        maxNumberOfPeople: 1,
        dimentions: '',
        price: 1,
        accomodationStatus: '',
        img: ''
    })


    const APIUrl = 'http://localhost:8080/accommodations'

    /* get Accommodations */

    const [accommodations, setAccommodations] = useState<AccommodationObject[] | null>([])

    const getAccommodations = (type:string) => {
        axios.get(`${APIUrl}/${type}`)
        .then((response) =>{
            setAccommodations(response.data.content)
            console.log(response.data)
        })
        .catch((error) => {
            console.error("Errore nella get:", error)
        })

    }

    /*  put accommodations */

    const updateCustomer = (id: number, data: any) => {
        const token = localStorage.getItem("token")
        console.log("Token:", token)

        axios.put(`http://localhost:8080/accommodations/${id}`, data, {
            headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            },
        })
        .then((response) => {
            console.log("Prenotazione aggiornata:", response.data)
            //getAccommodations()
        })
        .catch((error) => {
            console.error("Errore nella modifica:", error)
        })
    }


    return(
        <section className="py-5 gap-5">
            <div className="ps-1 mb-3 flex flex-row gap-3">
                <button type="submit" className="w-50 text-white bg-teal-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-primary-700 dark:focus:ring-primary-800 cursor-pointer" onClick={()=>{
                    getAccommodations('plots')
                }}>Cerca Bungalows</button>
                <button type="submit" className="w-50 text-white bg-teal-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-primary-700 dark:focus:ring-primary-800 cursor-pointer" onClick={()=>{
                    getAccommodations('mobilehomes')
                }}>Cerca Piazzole</button>
                <button type="submit" className="w-50 text-white bg-teal-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-primary-700 dark:focus:ring-primary-800 cursor-pointer" onClick={()=>{
                    getAccommodations('glampings')
                }}>Cerca Glampings</button>
                
            </div>

            {/* Accommodations list */}
            <div>
                {accommodations && (
                    <div className="flex flex-col text-white">
                        <div className="overflow-x-auto w-full rounded-md">
                            <table className="min-w-[800px] table-auto bg-[#90A955] ">
                                <thead className="bg-[#4F772D]">
                                    <tr>
                                        <th></th>
                                        <th>Id</th>
                                        <th className="cursor-pointer">Nome </th>
                                        <th className="cursor-pointer">Tipo </th>
                                        <th className="cursor-pointer">Capienza</th>
                                        <th>Dimensioni</th>
                                        <th>Prezzo</th>
                                        <th>Stato</th>
                                        <th>Img</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {accommodations?.map((acc) => (
                                        <React.Fragment key={acc.id}>
                                            <tr>
                                               <button className="ps-2 pt-4" onClick={() =>
                                                        setSelectedAccommodationId(selectedAccommodationId === acc.id ? null : acc.id)
                                                    }>
                                                    <FaEye className="hover:text-[#31572C]" />
                                                </button>
                                                <td className="ps-2">{acc.id}</td>
                                                <td className="ps-2">{acc.name}</td>
                                                {acc.plotType && (
                                                    <td className="ps-2">{acc.plotType}</td>

                                                )}
                                                {acc.glampingType && (
                                                    <td className="ps-2">{acc.glampingType}</td>

                                                )}
                                                {acc.mobileType && (
                                                    <td className="ps-2">{acc.mobileType}</td>

                                                )}
                                                <td className="ps-2">{acc.maxNumberOfPeople}</td>
                                                <td className="ps-2">{acc.dimentions}</td> 
                                                <td className="ps-2">{acc.price}</td> 
                                                <td className="ps-2">{acc.accomodationStatus}</td> 
                                                <td className="ps-2">{acc.img}</td> 
                                            </tr>
                                            {selectedAccommodationId === acc.id && (
                                                <tr>
                                                    <td colSpan={8}>
                                                       <div className="p-4 bg-[#31572C] rounded-md text-white">
                                                        <p><strong>ID alloggio:</strong>  {acc.id}</p>
                                                        <p><strong>Nome:</strong> {acc.name}</p>
                                                        <p><strong>Tipo:</strong> {acc.plotType}</p>
                                                        <p><strong>Capienza:</strong> {acc.maxNumberOfPeople}</p>
                                                        <p><strong>Dimensioni:</strong> {acc.dimentions}</p>
                                                        <p><strong>Prezzo:</strong> {acc.price}</p>
                                                        <p><strong>Stato:</strong> {acc.accomodationStatus}</p>
                                                        <p><strong>Img:</strong> {acc.img}</p>
                                                        <button className="mt-2 px-4 py-1 bg-yellow-500 text-white rounded me-1 hover:bg-yellow-300"onClick={() => {setSelectedAccommodation(acc)
                                                        setFormData({
                                                                        name: acc.name,
                                                                        maxNumberOfPeople: acc.maxNumberOfPeople,
                                                                        dimentions: acc.dimentions,
                                                                        price: acc.price,
                                                                        accomodationStatus: acc.accomodationStatus,
                                                                        img: acc.img
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
                        {/* modal */}
                        <Modal isOpen={open} onRequestClose={() => setOpen(false)} className="bg-[#ECF39E] p-6 w-full rounded shadow-lg max-w-md mx-auto mt-20" overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
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
                                        <label className="block text-sm font-medium">Capienza</label>
                                        <input type="number" name="preference" value={formData?.maxNumberOfPeople} onChange={(e)=>{
                                            setFormData({
                                                ...formData,
                                                maxNumberOfPeople: Number(e.target.value)
                                            })
                                        }} className="w-full border p-2 rounded" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium">Dimensioni</label>
                                        <input type="text" name="preference" value={formData?.dimentions} onChange={(e)=>{
                                            setFormData({
                                                ...formData,
                                                dimentions: e.target.value
                                            })
                                        }} className="w-full border p-2 rounded" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium">Prezzo</label>
                                        <input type="text" name="preference" value={formData?.price} onChange={(e)=>{
                                            setFormData({
                                                ...formData,
                                                price: Number(e.target.value)
                                            })
                                        }} className="w-full border p-2 rounded" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium">Stato</label>
                                        <input type="text" name="preference" value={formData?.accomodationStatus} onChange={(e)=>{
                                            setFormData({
                                                ...formData,
                                                accomodationStatus: e.target.value
                                            })
                                        }} className="w-full border p-2 rounded" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium">Immagine</label>
                                        <input type="text" name="preference" value={formData?.img} onChange={(e)=>{
                                            setFormData({
                                                ...formData,
                                                img: e.target.value
                                            })
                                        }} className="w-full border p-2 rounded" />
                                    </div>
                                </form>

                                <p className="py-2">Vuoi davvero confermare?</p>
                                <div className="mt-4 flex justify-end gap-2">
                                <button onClick={() => setOpen(false)} className="px-4 py-2 bg-gray-300 rounded">Annulla</button>
                                <button onClick={() => {
                                        if (selectedAccommodation) {
                                        updateCustomer(selectedAccommodation.id, formData)
                                        console.log(formData, 'formdata')
                                        
                                        setOpen(false)
                                        }
                                    }} className="px-4 py-2 bg-[#4F772D] text-white rounded">Conferma</button>
                                </div>
                        </Modal>

                        

                    </div>
                )}
            </div>
        </section>
    )
}

export default HandleAccommodations