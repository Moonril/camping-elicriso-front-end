import axios from "axios"
import { useState } from "react"
import { FaMagnifyingGlass } from "react-icons/fa6"
import { GoDotFill } from "react-icons/go"

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

const HandleAccommodations = function (){

    const APIUrl = 'http://localhost:8080/customers'

    /* get Accommodations */

    const [customers, setCustomers] = useState<AccommodationObject[] | null>([])
    const [pagination, setPagination] = useState<{ totalPages: number, currentPage: number }>({
            totalPages: 0,
            currentPage: 0,
    })

    const getAccommodations = () => {
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



    return(
        <section className="py-5 gap-5">
            <div className="ps-1 mb-3 flex flex-row gap-3">
                <button type="submit" className="w-50 text-white bg-teal-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-primary-700 dark:focus:ring-primary-800 cursor-pointer" onClick={getAccommodations()}>Cerca Alloggi</button>

                <p className="flex items-center justify-center"><GoDotFill /></p>
                <form className="flex flex-row items-center justify-center gap-2" action="#" onSubmit={(e)=>{
                        e.preventDefault() 
                        //fetch
                        
                    }} >
                        
                    <input type="text" name="bookingNumber" id="bookingNumber" className=" border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nome Cliente" required />
                        
        
                    <button type="submit" className=" text-white bg-teal-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"><FaMagnifyingGlass /></button>
                </form>
            </div>
        </section>
    )
}

export default HandleAccommodations