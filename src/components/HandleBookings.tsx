import { useState } from "react"

const HandleBookings = function () {

    const [activeTab, setActiveTab] = useState("campeggio")
    const tabs = [
        { id: 'campeggio', label: 'Prenotazioni Campeggio'},
        { id: 'campeggio', label: 'Prenotazioni Ristorante'},
        { id: 'campeggio', label: 'Clienti'},
        { id: 'campeggio', label: 'Alloggi'},
    ]

    return (
        <section className="py-50 bg-green-950">
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                {tabs.map((tab) => (
                <li key={tab.id} className="me-2">
                    <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`inline-block p-4 rounded-t-lg ${
                        activeTab === tab.id
                        ? "text-blue-600 bg-gray-100 dark:bg-gray-800 dark:text-blue-500"
                        : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                    }`}
                    >
                    {tab.label}
                    </button>
                </li>
                ))}
            </ul>

            {/* contenuto */}

            <div className="p-4">
                {activeTab === "campeggio" && (
                <div>📅 Contenuto per Prenotazioni Campeggio</div>
                )}
                {activeTab === "ristorante" && (
                <div>🍽️ Menu del Ristorante: primi, secondi, dolci...</div>
                )}
                {activeTab === "clienti" && (
                <div>👤 Lista Clienti / Dettagli anagrafica</div>
                )}
                {activeTab === "alloggi" && (
                <div>🏕️ Elenco Alloggi disponibili o prenotati</div>
                )}
            </div>

            
            
        </section>
    )
}

export default HandleBookings