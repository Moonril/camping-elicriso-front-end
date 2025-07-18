import { useState } from "react"
import { CiFacebook, CiLinkedin, CiTwitter } from "react-icons/ci"
import { FaInstagram } from "react-icons/fa"
import { Link } from "react-router-dom"

const ContactUs = function () {

    const [newMessage, setNewMessage] = useState() /* aggiungere use params */  



    return(
        <section className="flex flex-col bg-white-300 dark:bg-green-950 py-20 lg:py-30 xl:py-50 items-center justify-content text-black dark:text-gray-200 p-6 gap-8">
            {/* title */}
            <div>
                <h1 className=" text-4xl">CONTATTACI</h1>
            </div>
            {/* details */}
            <div className="flex flex-col w-full md:flex-row gap-8 md:gap-50 items-center justify-between lg:p-10">
                {/* form */}

                <div className="flex flex-col w-full items-center justify-content">
                    <h3>Mandaci un messaggio!</h3>
                    {/* form */}
                    <form className="max-w-md mx-auto w-full px-10 md:px-0" onSubmit={(e)=>{
                        e.preventDefault() //ma sto prevent default mi serve?
                        //fetch
                        
                    }}>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <textarea name="floating_number" id="floating_number" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "/>
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Scrivi..</label>
                    </div>
                    
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="tel" pattern="^\+?[0-9]{6,15}$" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required/>
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Telefono</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Numero prenotazione</label>
                        </div>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
                </div>


                {/* details */}
                <div className="flex flex-col items-center justify-content gap-4">
                    <div className="flex flex-col items-center justify-content">
                        <h5 className="font-bold">Email:</h5>
                        <p>email@email.it</p>
                    </div>
                    <div className="flex flex-col items-center justify-content">
                        <h5 className="font-bold">Reception:</h5>
                        <p>+39 0586 345678</p>
                        <p>Orario: 8:00 - 22:00</p>
                    </div>
                    <div className="flex flex-col items-center justify-content">
                        <h5 className="font-bold">Whatsapp:</h5>
                        <p>+39 348 3489589</p>
                    </div>
                    <div className="flex flex-col items-center justify-content">
                        <h5 className="font-bold">Indirizzo:</h5>
                            <p>via di rotondo 24,</p>
                            <p>23745</p>
                            <p>Paesello, PA</p>
                    </div>
                    <div className="flex flex-row gap-5 text-2xl">
                        {/* link to social media */}
                        <Link to={''}><FaInstagram /></Link>
                        <Link to={''}><CiFacebook /></Link>
                        <Link to={''}><CiTwitter /></Link>
                        <Link to={''}><CiLinkedin /></Link>
                    </div>

                </div>


            </div>
            {/* where + map */}

            <div className="flex flex-col w-full items-center justify-content gap-8 p-6">
                <h3 className="text-3xl">Come trovarci:</h3>
                <p>piccola descrizione su quale strada/autostrada/aeroporto</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5790.225290108554!2d10.32744894740432!3d43.47911951957426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d5e61e2519c089%3A0x70bfd41bcbc381dd!2sCalafuria%20Province%20of%20Livorno%2C%20Italy!5e0!3m2!1sen!2ses!4v1752496589592!5m2!1sen!2ses" width="600" height="450" loading="lazy" className="w-full"></iframe>
            </div>


        </section>
    )
}

export default ContactUs