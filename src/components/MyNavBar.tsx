import { Link } from "react-router-dom"


const MyNavBar = function (){
    return(
        <section className="max-w-6xl mx-auto p-4 flex justify-between items-center">
          <h1 className="text-3xl font-medium">
            <Link to={"/"}>🏕️ Camping Elicrisi</Link>
          </h1>
          <div>
            <button id="modile-open-button" className="text-3xl sm:hidden focus:outline-none">
              &#9776;
            </button>
            <nav className="hidden sm:block space-x-8 text-xl" aria-label="main">
                <Link to={"/accomodation"} className="hover:opacity-80">Alloggi</Link>
                <Link to={"/bookings"} className="hover:opacity-80">Prenotazioni</Link>
                <Link to={"/news"} className="hover:opacity-80">News</Link>
                <Link to={"/restaurant"} className="hover:opacity-80">Ristorante</Link>
                <Link to={"/contact"} className="hover:opacity-80">Contattaci</Link>
                <Link to={"/login"} className="hover:opacity-80 text-xs">Admin</Link>
            
            </nav>
            {/* aggiungi cerca */}
          </div>
        </section>
    )
}

export default MyNavBar;
