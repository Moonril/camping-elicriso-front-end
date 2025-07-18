import { useState } from "react"
import Modal from "react-modal"
import HandleBookings from "./HandleBookings"



const Backoffice = function(){

    const [activeTab, setActiveTab] = useState("campeggio")

    const tabs = [
        { id: "campeggio", label: "Prenotazioni Campeggio" },
        { id: "ristorante", label: "Prenotazioni Ristorante" },
        { id: "clienti", label: "Clienti" },
        { id: "alloggi", label: "Alloggi" },
    ]
    


    return(
        <section className="bg-green-950 py-20 lg:py-30 xl:py-40 text-white dark:text-gray-200 gap-8 min-h-screen">
           <ul className="flex flex-wrap md:flex-nowrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                {tabs.map((tab) => (
                <li key={tab.id} className="me-2">
                    <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`inline-block p-4 rounded-t-lg ${
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

            {/* Contenuto della tab */}
            <div className="p-4">
                {activeTab === "campeggio" && (
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

export default Backoffice