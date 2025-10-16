import { useState } from "react"
import { Link, useLocation } from "react-router-dom"


const CheckOut = function (){

    const location = useLocation()
    const booking = location.state?.booking
    //const [selectedMethod, setSelectedMethod] = useState("paypal")



    return(
        <section className="bg-orange-50 text-black min-h-screen">
            <div id="hero" className="flex flex-col justify-center items-center pt-50 pb-80 bg-[url(https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg)] bg-cover  text-shadow-md/80 bg-orange-50 dark:bg-green-950">
                <h1 className="text-2xl md:text-5xl text-white text-shadow-md/100 font-bold text-center">Sei a un passo dalla tua vacanza!</h1>
            </div>

            <div className="bg-orange-50 py-[160px] md:py-[500px] px-[20px] md:px-30 xl:px-50 relative">
                <div className="w-full max-w-5xl bg-[#f3f4f6] flex flex-col md:flex-row items-center justify-center self-center p-5 md:p-15 text-black absolute left-1/2 -top-20 transform -translate-x-1/2 rounded-2xl shadow-xl">
                    
                    {/* recap */}
                    {booking ? (
                        <div>
                            <div >
                                <h3 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl  text-center mb-3">Riepilogo</h3>
                                <div className="border rounded-md p-5">
                                    <p><strong>Nome e Cognome:</strong> {booking.customer.name}, {booking.customer.surname}</p>
                                    <p><strong>Data check-in:</strong> {booking.checkInDate}</p>
                                    <p><strong>Data check-out:</strong> {booking.checkOutDate}</p>
                                    <p><strong>Persone:</strong> {booking.numberOfCustomers}</p>
                                    <p><strong>Alloggio:</strong> {booking.accommodationType || 'maremmina'}</p>
                                    <p><strong>Totale:</strong> {booking.totalPrice}</p>
                                    <hr />
                                    <p><strong>Telefono:</strong> {booking.customer.phoneNumber}</p>
                                    <p><strong>Email:</strong> {booking.customer.email}</p>
                                    <p><strong>Preferenze:</strong> {booking.preference}</p>

                                </div>
                            </div>
                        {/* payment */}
                            <div>
                                <h3 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl  text-center mb-3">Scegli il metodo di pagamento</h3>
                                <div className="border rounded-md">
                                    <div className="bg-gray-400 w-full">
                                        <input type="radio" name="paypal" id="paypal"  />
                                    </div>
                                    <div className="w-full">
                                        <input type="radio" name="paypal" id="paypal"  />
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <h3 className="text-2xl">C'è qualcosa che non va, torna alla <Link to={'/'} className="text-blue-500 underline">Home</Link></h3>
                        </div>
                    )}


                        <div className="App">
            
                </div>
          
                </div>
            </div>

        </section>
    )
}

export default CheckOut