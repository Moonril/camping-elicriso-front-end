import axios from "axios"
import { useState } from "react"
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
        bedrooms: 3,
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
        bedrooms: 3,
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
                  <div className="p-5">
                    <h5 className="mb-2 text-xl tracking-tight text-gray-900 dark:text-white text-center">{type.title}</h5>
                  </div>                 
                </div>
              ))

              }
            </div>
          </div>

        )

        }


        {/* dettagli accommodation nello specifico */}

        {selectedAccommodation && selectedType && currentType && (
          <div className="flex flex-col justify-center items-center gap-8 py-5">
            <h2 className="text-4xl text-center sm:text-5xl text-slate-900 dark:text-white">{currentType.title}</h2>
            <p className="text-white text-center mb-8">{currentType.description}</p>


            <div className="flex flex-col sm:flex-row">
              {currentType.images.map((img, index) =>(
                <div key={index} className="flex-1">
                  <img src={img} alt={`${currentType.title}-${index}`} className="aspect-3/2 object-cover object-bottom  bg-white dark:bg-black opacity-85" />
                  <div className="p-5">
                    <h5 className="mb-2 text-xl tracking-tight text-gray-900 dark:text-white text-center">img1</h5>
                  </div>
                </div>
              ))

              }
            </div>
            <p>Ti piace questo alloggio?</p>
            <button>Prenota ora!</button>

          </div>


        )

        }


        

      
      </section>  
    )

}

export default Accomodation