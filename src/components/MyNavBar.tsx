import { useState } from "react";
import { Link, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext";
import { CiHome } from "react-icons/ci";
import { LuNotebookPen, LuTent } from "react-icons/lu";
import { IoRestaurantOutline } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import { MdPermDeviceInformation } from "react-icons/md";


const MyNavBar = function (){

  /* log in check */
  const { user, logout, isLoggedIn } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(prev => !prev);

  const location = useLocation()


  console.log("Navbar render:", isLoggedIn, user);
    return(
      <header className='relative px-5 py-2 absolute top-0 left-0 right-0 z-101 font-sans bg-orange-50'>          
        <section className="flex items-center justify-between xl:py-3">
            <h1 className="text-3xl font-medium">
              <Link to={"/"} className={location.pathname === '/accommodations' ? 'underline' : ''}><img src="tent-night-.svg" alt="" className="w-10"/> </Link>
            </h1>
            <div>
              <nav className="hidden md:block space-x-4 text-xl" aria-label="main">
                  <Link to={"/accommodations"} className={`hover:opacity-80 text-green-700 ${location.pathname === '/accommodations' ? 'underline' : ''}`}>Alloggi</Link>

                  <Link to={"/bookings"} className={`hover:opacity-80 text-green-700 ${location.pathname === '/bookings' ? 'underline' : ''}`}>Prenota</Link>

                  <Link to={"/restaurant"} className={`hover:opacity-80 text-green-700 ${location.pathname === '/restaurant' ? 'underline' : ''}`}>Ristorante</Link>

                  <Link to={"/surroundings"} className={`hover:opacity-80 text-green-700 ${location.pathname === '/surroundings' ? 'underline' : ''}`}>Dintorni</Link>

                  <Link to={"/contact"} className={`hover:opacity-80 text-green-700 ${location.pathname === '/contact' ? 'underline' : ''}`}>Info & Contatti</Link>
              {/* {`hover:opacity-80 text-green-700 text-xs pr-2 ${location.pathname === '/contact' ? 'underline' : ''}`} */}
              </nav>
              {/* aggiungi cerca */}
            </div>
            <div className="hidden md:block flex-row">
                  <Link to={"/myBookings"} className={`hover:opacity-80 text-green-700 text-xs pr-2 ${location.pathname === '/myBookings' ? 'underline' : ''}`}>Le mie prenotazioni</Link>
                  <div className="inline-block">
                  {isLoggedIn ? (
                          <div className="text-xs text-green-700">
                            <span>- Ciao, {user?.name}! -</span>
                            <Link to={"/backoffice"} onClick={() => setIsOpen(false)} className={`hover:opacity-80 text-green-700 text-xs pr-2 ${location.pathname === '/backoffice' ? 'underline' : ''}`}> Backoffice </Link>
                            <button onClick={logout} className="hover:opacity-80">Logout</button>
                          </div>
                        ) : (
                          <Link to={"/login"} onClick={() => setIsOpen(false)} className={`hover:opacity-80 text-green-700 text-sm pr-2 ${location.pathname === '/login' ? 'underline' : ''}`}>Admin</Link>
                        )

                        }
                  </div>      
            </div>
              <button id="hamburger-button" onClick={toggleDropdown} className="text-3xl text-green-700 md:hidden cursor-pointer">
                &#9776;
              </button>
          </section>

          <img src="painted-edge-cream.png" className="absolute inset-9 md:inset-0 w-full  z-[-10] -bottom-16 left-0 right-0" alt="paint-banner" /> 


          {/* dropdown menu mobile */}
          
            {isOpen && (
              <section id="mobile-menu" className={`fixed top-0 left-0 h-screen w-full bg-green-950 opacity-90 text-5xl text-white transform transition-transform duration-300 ease-in-put ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <button onClick={toggleDropdown} className="text-4xl self-end px-6">&times;</button>
                  <nav className="flex flex-col items-left justify-center gap-6 h-full text-3xl ps-15" aria-label="mobile">
                        <Link to={"/"} onClick={() => setIsOpen(false)} className={`hover:opacity-80 flex flex-row gap-2 ${location.pathname === '/' ? 'underline text-green-100' : 'text-green-600'}`}><CiHome /> Home</Link>
                        <Link to={"/accommodations"} onClick={() => setIsOpen(false)} className={`hover:opacity-80 flex flex-row gap-2 ${location.pathname === '/accommodations' ? 'underline text-green-100' : 'text-green-300'}`}><LuTent /> Alloggi</Link>
                        <Link to={"/bookings"} onClick={() => setIsOpen(false)} className={`hover:opacity-90 flex flex-row gap-2 ${location.pathname === '/bookings' ? 'underline text-green-100' : 'text-green-300'}`}><LuNotebookPen /> Prenota</Link>
                        <Link to={"/restaurant"} onClick={() => setIsOpen(false)} className={`hover:opacity-80 flex flex-row gap-2 ${location.pathname === '/news' ? 'underline text-green-100' : 'text-green-300'}`}><IoRestaurantOutline /> Ristorante</Link>
                        <Link to={"/surroundings"} onClick={() => setIsOpen(false)} className={`hover:opacity-80 flex flex-row gap-2 ${location.pathname === '/restaurant' ? 'underline text-green-100' : 'text-green-300'}`}><BiWorld /> Dintorni</Link>
                        <Link to={"/contact"} onClick={() => setIsOpen(false)} className={`hover:opacity-80 flex flex-row gap-2 ${location.pathname === '/contact' ? 'underline text-green-100' : 'text-green-300'}`}><MdPermDeviceInformation /> Info & Contatti</Link>
                        <br />
                        <Link to={"/myBookings"} onClick={() => setIsOpen(false)} className={`hover:opacity-80 flex flex-row gap-2 text-sm ${location.pathname === '/myBookings' ? 'underline text-green-100' : 'text-green-300'}`}>Le mie prenotazioni</Link>
                        {isLoggedIn ? (
                          <div>
                            <span>Ciao, {user?.name}</span>
                            <button onClick={logout}>Logout</button>
                          </div>
                        ) : (
                          <Link to={"/login"} onClick={() => setIsOpen(false)} className={`hover:opacity-80 text-sm ${location.pathname === '/myBookings' ? 'underline text-green-100' : 'text-green-300'}`}>Admin</Link>
                        )

                        }
                  </nav>
              </section>
            )}
      </header>

    )
}

export default MyNavBar;

