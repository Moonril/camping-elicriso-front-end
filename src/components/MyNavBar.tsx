import { useState } from "react";
import { Link } from "react-router-dom"


const MyNavBar = function (){


  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(prev => !prev);

    return(
      <header className='relative bg-transparent px-5 py-2 absolute top-0 left-0 right-0 z-10 font-sans bg-white'>          
        <section className="flex items-center justify-between ">
            <h1 className="text-3xl font-medium">
              <Link to={"/"}><img src="tent-night-.svg" alt="" className="w-10"/> </Link>
            </h1>
            <div>
              <nav className="hidden md:block space-x-4 text-xl" aria-label="main">
                  <Link to={"/accomodation"} className="hover:opacity-80 text-green-700">Alloggi</Link>
                  <Link to={"/bookings"} className="hover:opacity-90 text-green-700">Prenota</Link>
                  <Link to={"/restaurant"} className="hover:opacity-80 text-green-700">Ristorante</Link>
                  <Link to={"/surroundings"} className="hover:opacity-80 text-green-700">Dintorni</Link>
                  <Link to={"/contact"} className="hover:opacity-80 text-green-700">Info & Contatti</Link>
              
              </nav>
              {/* aggiungi cerca */}
            </div>
            <div className="hidden md:block">
                  <Link to={"/myBookings"} className="hover:opacity-80 text-xs text-green-700 pr-2">My bookings</Link>
                  <Link to={"/login"} className="hover:opacity-80 text-xs text-green-700">Admin</Link>
            </div>
              <button id="hamburger-button" onClick={toggleDropdown} className="text-3xl text-green-700 md:hidden cursor-pointer">
                &#9776;
              </button>
          </section>
          {/* <img src="https://cdn.prod.website-files.com/5c0db0b58da8f065edfa6d46/5c0dbc7736137d1606dd867d_painted%20edge.png" className="absolute inset-9 md:inset-0 w-full  z-[-10] -bottom-16" alt="paint-banner" /> */}
          <img src="https://cdn.prod.website-files.com/5c0db0b58da8f065edfa6d46/5c0dbc7736137d1606dd867d_painted%20edge.png" className="absolute inset-9 md:inset-0 w-full  z-[-10] -bottom-16 left-0 right-0" alt="paint-banner" />

          {/* dropdown menu */}
          
            {isOpen && (
              <section id="mobile-menu" className={`fixed top-0 left-0 h-screen w-full bg-green-950 opacity-90 text-5xl text-white transform transition-transform duration-300 ease-in-put z-20 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <button onClick={toggleDropdown} className="text-4xl self-end px-6">&times;</button>
                  <nav className="flex flex-col items-center justify-center gap-6 h-full text-3xl" aria-label="mobile">
                        <Link to={"/"} onClick={() => setIsOpen(false)} className="hover:opacity-80 text-green-700">Home</Link>
                        <Link to={"/accomodation"} onClick={() => setIsOpen(false)} className="hover:opacity-80 text-green-700">Alloggi</Link>
                        <Link to={"/bookings"} onClick={() => setIsOpen(false)} className="hover:opacity-90 text-green-700">Prenota</Link>
                        <Link to={"/news"} onClick={() => setIsOpen(false)} className="hover:opacity-80 text-green-700">News</Link>
                        <Link to={"/restaurant"} onClick={() => setIsOpen(false)} className="hover:opacity-80 text-green-700">Restaurant</Link>
                        <Link to={"/contact"} onClick={() => setIsOpen(false)} className="hover:opacity-80 text-green-700">Info & Contatti</Link>
                        <br />
                        <Link to={"/myBookings"} onClick={() => setIsOpen(false)} className="hover:opacity-80 text-sm text-green-700">My reservations</Link>
                        <Link to={"/login"} onClick={() => setIsOpen(false)} className="hover:opacity-80 text-sm text-green-700">Admin</Link>
                  </nav>
              </section>
            )}
      </header>

    )
}

export default MyNavBar;

/* className="absolute top-0 bg-green-950 w-full text-5xl flex flex-col justify-content-center text-white" */
