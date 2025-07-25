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
        images: ['https://images.pexels.com/photos/2582818/pexels-photo-2582818.jpeg', 'url2', 'url3'],
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
        images: ['https://plus.unsplash.com/premium_photo-1682500051076-9b4119f644b1?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'url2', 'url3'],
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
        images: ['https://images.pexels.com/photos/749231/pexels-photo-749231.jpeg', 'https://images.pexels.com/photos/751546/pexels-photo-751546.jpeg'],
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
        images: ['https://images.unsplash.com/photo-1582719388123-e03e25d06d51?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.pexels.com/photos/1144694/pexels-photo-1144694.jpeg'],
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
        images: ['https://images.unsplash.com/photo-1642612374066-afa81e251991?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://plus.unsplash.com/premium_photo-1686090450488-48ce19426bbe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
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
        images: ['https://images.pexels.com/photos/2376989/pexels-photo-2376989.jpeg', 'https://images.unsplash.com/photo-1638939674892-5c6d84eec463?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'url3'],
        description: 'Tenda glamour immersa nel verde...',
        size: "10m",
        bedrooms: 0,
        beds: 1,
        guests: 2,
        airCon: true
      },
      {
        id: 'deluxe',
        title: 'Luxury Tent',
        images: ['https://images.unsplash.com/photo-1624254495476-db6cc8b77e98?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'url2', 'url3'],
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
    
    const currentAccommodation = accommodations.find((a) => a.id === selectedAccommodation)
    const currentType = currentAccommodation?.types.find((t) => t.id === selectedType)
    

    console.log(selectedAccommodation, 'selected accomdation')

    return (
      <section className=" bg-green-950  text-white min-h-screen" >

        {/* hero section */}

        <div id="hero" className="flex flex-col justify-center items-center pt-50 lg:pt-60 xl:pt-100 pb-80 bg-[url(glamping-banner.jpg)] bg-cover text-shadow-md/80 bg-green-950">
          <h1 className="text-3xl md:text-5xl text-white0 text-shadow-md/100 font-bold">Scopri i nostri alloggi</h1>
        </div>

        <div className="bg-orange-50 pt-[1050px] md:pt-[450px] xl:pt-[550px] pb-[250px] px-[20px] lg:px-[80px] xl:px-[150px] relative">

          {/* First section with 3 accomodation types */}
          
            <div className="w-full max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-7xl bg-[#f3f4f6] flex flex-col items-center justify-center self-center p-5 md:p-15 text-black absolute left-1/2 -top-20 transform -translate-x-1/2 rounded-2xl shadow-xl">
                  <h2 className="text-3xl md:text-4xl text-center sm:text-5xl mb-6 text-black font-semibold">
                  Dove il tuo viaggio trova casa
                </h2>
                <p className="mb-5 text-xl">Scopri di più, clicca sugli alloggi per vedere più informazioni</p>
                <div className="flex flex-col sm:flex-row gap-8">
                    {accommodations.map((acc) => (
                      <div key={acc.id} className="flex-1 cursor-pointer">
                      
                          <img src={acc.image} alt={acc.title} className="aspect-3/2 object-cover object-bottom rounded-2xl border border-solid border-gray-100 bg-black opacity-85 shadow-lg/30 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" onClick={() => setSelectedAccommodation(acc.id)} />
                        <div className="p-5">
                              <h5 className="mb-2 text-xl tracking-tight text-gray-900 text-center">{acc.title}</h5>
                          </div>
                      </div>

                    ))

                    }
                      
                </div>
            </div>



          {/* accommodation details */}

          {selectedAccommodation && (
            <div className="flex flex-col justify-center items-center gap-8 py-5 px-5 md:px-10 bg-[#f3f4f6] rounded-2xl shadow-xl">
              <h2 className="text-4xl text-center sm:text-5xl text-black">
                    {currentAccommodation?.title}
              </h2>

              <div className="flex flex-col sm:flex-row gap-8">
                {currentAccommodation?.types.map((type) => (
                  <div key={type.id} className="flex-1" onClick={() => setSelectedType(type.id)}>
                    <img src={type.images[0]} alt={type.title} className="aspect-3/2 object-cover object- rounded-2xl border border-solid border-gray-100 bg-black opacity-85 shadow-lg/30 " />

                    <div className="p-5 flex flex-col gap-3">
                      {/* titolo */}
                      <h5 className="mb-2 text-xl font-semibold tracking-tight text-black text-center">{type.title}</h5>
                      
                      <div><p className="text-lg text-black">{type.description}</p></div>
                      
                      {/* dettagli */}

                      <div className="flex flex-col gap-2">
                        <div className=" flex flex-row items-center bg-gray-200 text-black rounded p-3 gap-2">
                            <p><FaPerson /></p>
                            <p>Max. {type.guests} persone</p> 
                        </div>
                        <div className=" flex flex-row items-center bg-gray-200 text-black rounded p-3 gap-2">
                            <p><IoIosResize /></p>
                            <p>Misure {type.size}</p> 
                        </div>
                        {type.bedrooms != 0 && (
                          <div className=" flex flex-row items-center bg-gray-200 text-black rounded p-3 gap-2">
                            <p><MdOutlineBedroomParent /></p>
                            <p>{type.bedrooms} stanze</p> 
                        </div>
                        )}
                        {type.beds != 0 && (
                          <div className=" flex flex-row items-center bg-gray-200 text-black rounded p-3 gap-2">
                            <p><IoBedOutline /></p>
                            <p>{type.beds} letti</p> 
                        </div>
                        )}
                        {type.airCon &&(
                          <div className=" flex flex-row items-center bg-gray-200 text-black rounded p-3 gap-2">
                            <p><PiFanLight /></p>
                            <p>{type.airCon} {type.airCon && ("Aia Condizionata") || "Ventilato"}</p> 
                          </div>

                        )

                        }
                      
                      </div>

                      {/* descrizione */}
                      
                        {/* prenota */}
                      <Link to={`/bookings/${selectedAccommodation}`} className="bg-green-700 self-center p-1 px-4 rounded hover:bg-green-600 text-lg">Prenota! &#129125;</Link>    
                    </div>
                  </div>
                ))

                }
              </div>
            </div>

          )

          }



        

        </div>
      </section>  
    )

}

export default Accomodation