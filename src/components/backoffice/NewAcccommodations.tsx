import { useState } from "react"

/* interface NewAccommodationObject {
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
} */


const NewAccommodations = function (){

    //const [accommodationTypeSelected, setAccommodationTypeSelected] = useState()


    return(
        <section className="py-5 gap-5">
            <div className="ps-1 mb-3 flex flex-row gap-3">
                
                <form action="flex flex-col">
                    <h5 className="font-bold text-xl py-1">Aggiungi un nuovo alloggio</h5>

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

export default NewAccommodations