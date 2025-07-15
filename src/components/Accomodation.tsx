import axios from "axios"
import { useState } from "react"
import { FaPerson } from "react-icons/fa6"
import { IoIosResize } from "react-icons/io"
import { IoBedOutline } from "react-icons/io5"
import { MdOutlineBedroomParent } from "react-icons/md"
import { PiFanLight } from "react-icons/pi"
import { Link } from "react-router-dom"

/* accomodation types */

interface AccommodationType {
  id: string,
  title: string,
  images: string[],
  description: string,
  size: string,
  guests: number,
  airCon: boolean,
  beds: number,
  bedrooms: number
}

interface Accommodation {
  id: string,
  title: string,
  image: string,
  types: AccommodationType[],
}

const accommodations: Accommodation[] = [
  {
    id: 'plots',
    title: 'Piazzole',
    image: 'https://images.pexels.com/photos/2123285/pexels-photo-2123285.jpeg',
    types: [
      {
        id: 'standard',
        title: 'Standard Plot',
        images: ['https://images.pexels.com/photos/2123285/pexels-photo-2123285.jpeg', 'url2', 'url3'],
        description: 'Piazzola standard in mezzo alla natura...',
        size: "75m-80m",
        guests: 6,
        airCon: false,
        beds: 0,
        bedrooms: 0
      },
      {
        id: 'deluxe',
        title: 'Deluxe Plot',
        images: ['https://images.pexels.com/photos/2123285/pexels-photo-2123285.jpeg', 'url2', 'url3'],
        description: 'Piazzola deluxe con più spazio e ombra e bagno privato...',
        size: "100m-120m",
        guests: 8,
        airCon: false,
        beds: 0,
        bedrooms: 0
      },
    ]
  },
  {
    id: 'mobile',
    title: 'Bungalows',
    image: 'https://images.pexels.com/photos/2174992/pexels-photo-2174992.jpeg',
    types: [
      {
        id: 'small',
        title: 'Small Bungalow',
        images: ['https://images.pexels.com/photos/2174992/pexels-photo-2174992.jpeg', 'url2'],
        description: 'Perfetto per famiglie, con angolo cottura...',
        size: "20m",
        bedrooms: 1,
        beds: 2,
        guests: 4,
        airCon: true
      },
      {
        id: 'medium',
        title: 'Medium Bungalow',
        images: ['https://images.pexels.com/photos/2174992/pexels-photo-2174992.jpeg', 'url2'],
        description: 'Con patio e comfort moderni...',
        size: "25m",
        bedrooms: 2,
        beds: 3,
        guests: 6,
        airCon: true
      },
      {
        id: 'deluxe',
        title: 'Deluxe Bungalow',
        images: ['https://images.pexels.com/photos/2174992/pexels-photo-2174992.jpeg', 'url2'],
        description: 'Con patio, comfort moderni e giardino personale...',
        size: "30m",
        bedrooms: 3,
        beds: 4,
        guests: 8,
        airCon: true
      },
    ]
  },
  {
    id: 'glamping',
    title: 'Glamping',
    image: 'https://images.pexels.com/photos/17396037/pexels-photo-17396037.jpeg',
    types: [
      {
        id: 'medium',
        title: 'Medium Tent',
        images: ['https://images.pexels.com/photos/17396037/pexels-photo-17396037.jpeg', 'url2', 'url3'],
        description: 'Tenda glamour immersa nel verde...',
        size: "10m",
        bedrooms: 0,
        beds: 1,
        guests: 2,
        airCon: false
      },
      {
        id: 'deluxe',
        title: 'Luxury Tent',
        images: ['https://images.pexels.com/photos/17396037/pexels-photo-17396037.jpeg', 'url2', 'url3'],
        description: 'Tenda glamour immersa nel verde...',
        size: "15m",
        bedrooms: 0,
        beds: 2,
        guests: 3,
        airCon: true
      }
    ]
  }
]

const Accomodation = function (){




  /* clicking statuses */
  const [selectedAccommodation, setSelectedAccommodation] = useState<string | null>(null)
  const [selectedType, setSelectedType] = useState<string | null>(null)
  
  const currentAccommodation = accommodations.find((a) => a.id === selectedAccommodation);
  const currentType = currentAccommodation?.types.find((t) => t.id === selectedType);
  

  console.log(selectedAccommodation, 'selected accomdation')

    return (
      <section className="bg-green-950 p-10 md:px-20" >
        {/* First section with 3 accomodation types */}
        <div className="flex flex-col justify-center items-center gap-8 pt-10 lg:pt-15">
            <h2 className="text-4xl text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
            I nostri alloggi
          </h2>
           <div className="flex flex-col sm:flex-row gap-8">
              {accommodations.map((acc) => (
                <div key={acc.id} className="flex-1 cursor-pointer">
                 
                    <img src={acc.image} alt={acc.title} className="aspect-3/2 object-cover object-bottom rounded-2xl border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black opacity-85" onClick={() => setSelectedAccommodation(acc.id)} />
                   <div className="p-5">
                        <h5 className="mb-2 text-xl tracking-tight text-gray-900 dark:text-white text-center">{acc.title}</h5>
                    </div>
                </div>

              ))

              }
                
           </div>
        </div>



        {/* accommodation details */}

        {selectedAccommodation && (
          <div className="flex flex-col justify-center items-center gap-8 py-5">
            <h2 className="text-4xl text-center sm:text-5xl text-slate-900 dark:text-white">
                  {currentAccommodation?.title}
            </h2>

            <div className="flex flex-col sm:flex-row gap-8">
              {currentAccommodation?.types.map((type) => (
                <div key={type.id} className="flex-1" onClick={() => setSelectedType(type.id)}>
                  <img src={type.images[0]} alt={type.title} className="aspect-3/2 object-cover object-bottom rounded-2xl border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black opacity-85 cursor-pointer" />

                  <div className="p-5 flex flex-col gap-3">
                    {/* titolo */}
                    <h5 className="mb-2 text-lg tracking-tight text-gray-900 dark:text-white text-center">{type.title}</h5>
                    {/* dettagli */}
                    <div className="flex flex-col gap-2 text-sm">
                      <div className=" flex flex-row items-center bg-gray-200 text-black rounded p-1 gap-2">
                        <p><FaPerson /></p>
                        <p>Max. {type.guests} persone</p> 
                      </div>
                      <div className=" flex flex-row items-center bg-gray-200 text-black rounded p-1 gap-2">
                        <p><IoIosResize /></p>
                        <p>Size {type.size}</p> 
                      </div>
                      {type.bedrooms != 0 && (
                        <div className=" flex flex-row items-center bg-gray-200 text-black rounded p-1 gap-2">
                        <p><MdOutlineBedroomParent /></p>
                        <p>{type.bedrooms} bedrooms</p> 
                      </div>
                      )}
                      {type.beds != 0 && (
                        <div className=" flex flex-row items-center bg-gray-200 text-black rounded p-1 gap-2">
                        <p><IoBedOutline /></p>
                        <p>{type.beds} beds</p> 
                      </div>
                      )}
                      
                        <div className=" flex flex-row items-center bg-gray-200 text-black rounded p-1 gap-2">
                        <p><PiFanLight /></p>
                        <p>{type.airCon} {type.airCon && ("Air Conditioning") || "Ventilated"}</p> 
                      </div>
                     
                    </div>

                    {/* descrizione */}
                    <div><p className="text-sm">{type.description}</p></div>
                      {/* prenota */}
                    <Link to={`/bookings/${selectedAccommodation}`} className="bg-green-500 self-center p-1 px-4 rounded-xl">Prenota! &#129125;</Link>    
                  </div>
                </div>
              ))

              }
            </div>
          </div>

        )

        }



        

      
      </section>  
    )

}

export default Accomodation