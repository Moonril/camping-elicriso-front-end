import { useState } from "react"
import BookingsNavbar from "./BookingsNavbar"
import { FiSidebar } from "react-icons/fi";



const Backoffice = function(){

    const [activeTab, setActiveTab] = useState("campeggio")
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
                <button className="m-5 md:hidden p-2" onClick={() => setIsSidebarOpen(true)}>
                        <FiSidebar />
                </button>
                <ul className="flex flex-col text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                        {tabs.map((tab) => (
                        <li key={tab.id} className="">
                            <button
                            onClick={() => setActiveTab(tab.id)}
                            className={`inline-block p-3 rounded-t-lg w-full text-start ps-5 ${
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
            <div className="bg-yellow-950 flex-6">
                {/* Contenuto della tab */}
                
                <div className="">
                    {activeTab === "campeggio" && (
                        <div className="flex flex-col py-30 ps-5">
                            <h1 className="font-bold text-4xl pb-3">Prenotazioni</h1>
                            <BookingsNavbar />
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

            {/* sidebar mobile */}

                <aside
                className={`fixed top-0 left-0 h-full w-full pt-30 bg-orange-100 z-50 md:translate-x-0 md:static md:hidden transform transition-transform duration-300 ease-in-out text-black ${
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } `}
                >
                    <button onClick={() => setIsSidebarOpen(false)} className="ps-5 text-2xl"><FiSidebar /></button>
                    <ul className="flex flex-col text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                            {tabs.map((tab) => (
                            <li key={tab.id} className="">
                                <button
                                onClick={() => setActiveTab(tab.id)}
                                className={`inline-block p-3 rounded-t-lg w-full text-start ps-5 ${
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
                
                </aside>




        </section>
    )
}

export default Backoffice