import { useState } from "react"
import BookingsNavbar from "./BookingsNavbar"
import { FiSidebar } from "react-icons/fi";
import CustomersNavbar from "./CustomersNavbar";
import RestaurantNavbar from "./RestaurantNavbar";



const Backoffice = function(){

    const [activeTab, setActiveTab] = useState("campeggio")
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const tabs = [
        { id: "campeggio", label: "Prenotazioni Campeggio" },
        { id: "clienti", label: "Clienti" },
        { id: "ristorante", label: "Prenotazioni Ristorante" },
        { id: "alloggi", label: "Alloggi" },
        { id: "pagamenti", label: "Pagamenti" },
        { id: "comunicazioni", label: "Comunicazioni" },
        { id: "sicurezza", label: "Sicurezza" }
    ]

    


    return(
        <section className="bg-[#ecf39f] text-black min-h-screen flex flex-row">
            {/* left side */}
            <div className="hidden md:block bg-[#90a955] flex-1 flex flex-col py-30 ">
                
                <ul className="flex flex-col text-sm font-medium text-center">
                        {tabs.map((tab) => (
                        <li key={tab.id} className="">
                            <button
                            onClick={() => setActiveTab(tab.id)}
                            className={`inline-block p-3 w-full text-start ps-5 ${
                                activeTab === tab.id
                                ? "text-white bg-[#31572c] dark:text-white"
                                : "hover:bg-[#4f772d]"
                            }`}
                            >
                            {tab.label}
                            </button>
                        </li>
                        ))}
                </ul>    
            </div>

                {/* right side */}
            <div className="bg-[#ecf39f] flex-6 min-w-0">
                {/* Contenuto della tab */}
                
                <div className="">
                    {activeTab === "campeggio" && (
                        <div className="flex flex-col py-30 px-2">
                            <h1 className="font-bold text-4xl pb-3">Prenotazioni</h1>
                            <BookingsNavbar />
                        </div>

                    )}
                    {activeTab === "ristorante" && (
                    <div className="flex flex-col py-30 px-2">
                            <h1 className="font-bold text-4xl pb-3">Prenotazioni</h1>
                            <RestaurantNavbar />
                        </div>
                    )}
                    {activeTab === "clienti" && (
                        <div className="flex flex-col py-30 px-2">
                            <h1 className="font-bold text-4xl pb-3">Prenotazioni</h1>
                            <CustomersNavbar />
                        </div>
                    )}
                    {activeTab === "alloggi" && (
                    <div> Elenco Alloggi disponibili o prenotati</div>
                    )}
                </div>     

            </div>

            {/* sidebar mobile */}

                <button className="fixed left-0 top-20 m-5 md:hidden p-2" onClick={() => setIsSidebarOpen(true)}>
                        <FiSidebar />
                </button>
                <aside
                className={`fixed top-0 left-0 h-full w-full pt-30 bg-orange-100 z-50 md:translate-x-0 md:static md:hidden transform transition-transform duration-300 ease-in-out text-black ${
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } `}
                >
                    <button onClick={() => setIsSidebarOpen(false)} className="ps-5 text-2xl"><FiSidebar /></button>
                    <ul className="flex flex-col text-sm font-medium text-center text-black border-b border-gray-200">
                            {tabs.map((tab) => (
                            <li key={tab.id} className="">
                                <button
                                onClick={() => setActiveTab(tab.id)}
                                className={`inline-block p-3 w-full text-start ps-5 ${
                                    activeTab === tab.id
                                    ? "text-black bg-gray-100 dark:bg-stone-900 dark:text-white"
                                    : "hover:text-gray-600 hover:bg-gray-50"
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