
import { useState } from "react"
import HandleBookings from "./HandleBookings"




const BookingsNavbar = function () {

    /* tabs */

    const [activeTab, setActiveTab] = useState("elenco")

    const tabs = [
        { id: "elenco", label: "Elenco Prenotazioni" },
        { id: "filtri", label: "Filtro avanzato" },
        { id: "nuova", label: "Nuova Prenotazione" },
        { id: "check-in", label: "Check-in/out" }
    ]


    

    return (
        <section className="flex flex-col bg-white-300 dark:bg-green-950  text-black dark:text-gray-200">
                    
                    {/* top bar + tabs */}
                     <ul className="flex text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-500 dark:text-gray-400 bg-red-100">
                        {tabs.map((tab) => (
                        <li key={tab.id} className="me-2">
                            <button
                            onClick={() => setActiveTab(tab.id)}
                            className={`inline-block p-4 ${
                                activeTab === tab.id
                                ? "text-black bg-gray-100 dark:bg-red-300 dark:text-black"
                                : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-red-200 dark:hover:text-black"
                            }`}
                            >
                            {tab.label}
                            </button>
                        </li>
                        ))}
                    </ul>
                {/* contenuto tabs */}

                <div className="">
                    {activeTab === "elenco" && (
                        <HandleBookings />
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

                    
                    
                    
                </section>
    )
}

export default BookingsNavbar