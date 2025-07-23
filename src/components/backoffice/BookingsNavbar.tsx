
import { useState } from "react"
import HandleBookings from "./HandleBookings"
import ComingSoon from "../ComingSoon"




const BookingsNavbar = function () {

    /* tabs */

    const [activeTab, setActiveTab] = useState("elenco")

    const tabs = [
        { id: "elenco", label: "Elenco Prenotazioni" },
        { id: "nuova", label: "Nuova Prenotazione" },
        { id: "check-in", label: "Check-in/out" }
    ]


    

    return (
        <section className="flex flex-col  text-black">
                    
                    {/* top bar + tabs */}
                     <ul className="flex text-sm font-medium text-center">
                        {tabs.map((tab) => (
                        <li key={tab.id} className="">
                            <button
                            onClick={() => setActiveTab(tab.id)}
                            className={`inline-block py-4 px-2 md:p-4 ${
                                activeTab === tab.id
                                ? "underline underline-offset-8 decoration-[#31572C] decoration-3"
                                : "hover:text-gray-600 hover:bg-gray-5"
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
                    {activeTab === "nuova" && (
                        <ComingSoon />
                    )}
                    {activeTab === "check-in" && (
                        <ComingSoon />
                    )}
                </div> 

                    
                    
                    
                </section>
    )
}

export default BookingsNavbar