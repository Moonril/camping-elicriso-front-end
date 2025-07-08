import { useEffect, useState } from "react"

const MyBookings = function (){

    const APIUrl = 'http://localhost:8080/camping/bookings'

     const [inputValues, setInputValues] = useState({
            bookingNumber: ''
        })
    const [booking, setBooking] = useState([])

    const getBooking = () => {
        fetch(APIUrl + '/' + inputValues.bookingNumber)
        .then(response => {
            if(response.ok){
                return response.json()
            } else {
                throw new Error('Fetch unsuccessful')
            }
        })
        .then(singleBooking => {
            console.log(singleBooking)
        })
        .catch((err=>{
            console.log(err)
        }))
    }



    useEffect(()=>{
        //getBooking()
    }, [])


    return(
        <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Cerca prenotazione
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#" onSubmit={(e)=>{
                        e.preventDefault() //ma sto prevent default mi serve?
                        //fetch
                        getBooking()
                    }} >
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Numero prenotazione:</label>
                            <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="gino123" required value={inputValues.bookingNumber} onChange={(e) => {
                                setInputValues({
                                    ...inputValues,
                                    bookingNumber: e.target.value,
                                })
                            }} />
                        </div>
                        
                        <div className="flex flex-col items-center ">
                            <button type="submit" className="w-50 text-white bg-teal-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Cerca</button>
                        </div>
                        {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet? <a href="#" className="font-medium text-teal-600 hover:underline dark:text-teal-500">Sign up</a>
                        </p> */}
                    </form>
                </div>
            </div>
        </div>
        </section>
    )
}

export default MyBookings