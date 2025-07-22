const BookingsTest = function (){
    return(
        <section className="relative">
            
            <div className="h-[60vh] bg-cover bg-center flex flex-col justify-center items-center text-white text-center bg-[url(tree-near-the-ocean.jpg)]">
                <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">Prenota la tua vacanza</h1>
                <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow-md transition">Prenota Ora</button>
            </div>

            
            <div className="absolute left-1/2 -bottom-20 transform -translate-x-1/2 w-[90%] max-w-4xl bg-white p-6 md:p-8 rounded-2xl shadow-xl z-10">
                <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input type="date" className="border rounded-lg px-4 py-2 w-full" placeholder="Check-in" />
                
                <select className="border rounded-lg px-4 py-2 w-full">
                    <option>Tipo alloggio</option>
                    <option>Tenda</option>
                    <option>Camper</option>
                    <option>Bungalow</option>
                </select>
                
                <select className="border rounded-lg px-4 py-2 w-full">
                    <option>Numero ospiti</option>
                    <option>1 adulto</option>
                    <option>2 adulti</option>
                    <option>Famiglia</option>
                </select>

                <div className="md:col-span-3 text-center mt-4">
                    <button type="submit" className="bg-green-700 text-white px-8 py-2 rounded-lg hover:bg-green-800 transition">Continua</button>
                </div>
                </form>
            </div>

            
            <div className="pt-40 bg-gray-100 px-6 md:px-20 pb-20">
                
                <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold mb-2">Offerta Speciale</h3>
                    <p>Sconto del 20% per soggiorni infrasettimanali!</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold mb-2">Recensione</h3>
                    <p>“Un campeggio immerso nella natura, perfetto per rilassarsi.”</p>
                    <div className="text-yellow-400 mt-2">★★★★★</div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default BookingsTest