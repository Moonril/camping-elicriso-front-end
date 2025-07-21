import { useState } from "react"
import Modal from "react-modal"
import HandleBookings from "./HandleBookings"



const Backoffice = function(){

    const [activeTab, setActiveTab] = useState("campeggio")

    const tabs = [
        { id: "campeggio", label: "Prenotazioni Campeggio" },
        { id: "clienti", label: "Clienti" },
        { id: "ristorante", label: "Prenotazioni Ristorante" },
        { id: "alloggi", label: "Alloggi" },
        { id: "pagamenti", label: "Pagamenti" },
        { id: "sicurezza", label: "Sicurezza" }
    ]
    


    return(
        <section className="bg-green-950 text-white dark:text-gray-200 min-h-screen flex flex-row">
            {/* left side */}
            <div className="bg-red-950 flex-1 flex flex-col py-30">
                <ul className="flex flex-col text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                        {tabs.map((tab) => (
                        <li key={tab.id} className="">
                            <button
                            onClick={() => setActiveTab(tab.id)}
                            className={`inline-block p-4 rounded-t-lg w-full text-start ps-15 ${
                                activeTab === tab.id
                                ? "text-black bg-gray-100 dark:bg-stone-900 dark:text-white"
                                : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-stone-800 dark:hover:text-gray-300"
                            }`}
                            >
                            {tab.label}
                            </button>
                        </li>
                        ))}
                    </ul>    
            </div>

                {/* right side */}
            <div className="bg-yellow-950 flex-4">
                {/* Contenuto della tab */}
                
                <div className="">
                    {activeTab === "campeggio" && (
                        <div className="flex flex-col py-30 ps-10">
                            <h1 className="font-bold text-4xl pb-3">Prenotazioni</h1>
                            <HandleBookings />
                        </div>

                    )}
                    {activeTab === "ristorante" && (
                    <div> prenotazioni ristorante</div>
                    )}
                    {activeTab === "clienti" && (
                    <div> Lista Clienti / Dettagli anagrafica</div>
                    )}
                    {activeTab === "alloggi" && (
                    <div> Elenco Alloggi disponibili o prenotati</div>
                    )}
                </div>     

            </div>


        </section>
    )
}

export default Backoffice