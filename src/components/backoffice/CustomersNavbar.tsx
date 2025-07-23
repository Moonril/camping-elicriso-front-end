
import { useState } from "react"
import HandleCustomers from "./HandleCustomers"
import ComingSoon from "../ComingSoon"




const CustomersNavbar = function () {

    /* tabs */

    const [activeTab, setActiveTab] = useState("elenco")

    const tabs = [
        { id: "elenco", label: "Elenco Clienti" },
        { id: "nuova", label: "Nuovo Cliente" }
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
                        <HandleCustomers />
                    )}
                    {activeTab === "nuova" && (
                        <ComingSoon />
                    )}
                </div> 

                    
                    
                    
                </section>
    )
}

export default CustomersNavbar