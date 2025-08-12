
import { useState } from "react"
import HandleCustomers from "./HandleCustomers"
import NewCustomer from "./NewCustomer"
import HandleAccommodations from "./HandleAccommodations"
import NewAccommodations from "./NewAcccommodations"




const AccommodationsNavbar = function () {

    /* tabs */

    const [activeTab, setActiveTab] = useState("elenco")

    const tabs = [
        { id: "elenco", label: "Elenco Alloggi" },
        { id: "nuovo", label: "Nuovo Alloggio" }
    ]


    

    return (
        <section className="flex flex-col  text-black">
                    
                    {/* top bar + tabs */}
                     <ul className="flex text-sm font-medium text-center">
                        {tabs.map((tab) => (
                        <li key={tab.id} className="">
                            <button
                            onClick={() => setActiveTab(tab.id)}
                            className={`inline-block py-4 px-2 md:p-4 cursor-pointer ${
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
                        <HandleAccommodations />
                    )}
                    {activeTab === "nuovo" && (
                        <NewAccommodations />
                    )}
                </div> 

                    
                    
                    
                </section>
    )
}

export default AccommodationsNavbar