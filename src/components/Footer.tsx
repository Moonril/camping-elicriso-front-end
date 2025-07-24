import { CiFacebook, CiLinkedin, CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTent } from "react-icons/fa6";
import { GiFlowers } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";

const Footer = function(){

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const location = useLocation()

    return (
        <div className="p-4 dark:text-black flex flex-col items-center gap-2 sticky top-[100vh] text-sm bg-orange-50">
            <div className="flex flex-row gap-8 md:gap-20">
                <div className="flex flex-col items-center">
                    {/* logo */}
                    <p><FaTent /> logo <GiFlowers /></p>
                    <div className="flex flex-row">
                        {/* link to social media */}
                        <Link to={''}><FaInstagram /></Link>
                        <Link to={''}><CiFacebook /></Link>
                        <Link to={''}><CiTwitter /></Link>
                        <Link to={''}><CiLinkedin /></Link>
                    </div>
                    <a href="#top" className="pt-5" onClick={(e)=>{
                                e.preventDefault()
                                scrollToTop()
                                
                            }}>Torna su &#8593;</a>
                </div>
                <div className="flex flex-col">
                    {/* mappa sito */}
                    <Link to={'/accommodations'} className={`hover:opacity-80 ${location.pathname === '/accommodations' ? 'underline' : ''}`}>Alloggi</Link>
                    <Link to={'/bookings'} className={`hover:opacity-80 ${location.pathname === '/bookings' ? 'underline' : ''}`}>Prenota</Link>
                    <Link to={'/restaurant'} className={`hover:opacity-80 ${location.pathname === '/restaurant' ? 'underline' : ''}`}>Ristorante</Link>
                    <Link to={'/surroundings'} className={`hover:opacity-80 ${location.pathname === '/surroundings' ? 'underline' : ''}`}>Dintorni</Link>
                    <Link to={'/myBookings'} className={`hover:opacity-80 ${location.pathname === '/myBookings' ? 'underline' : ''}`}>My Bookings</Link>
                </div>
                <div>
                    {/* contattaci */}
                    <Link to={'/contact'}  className={`hover:opacity-80 font-medium ${location.pathname === '/contact' ? 'underline' : ''}`}>Contattaci</Link>
                    <p>Reception: +549 5464566</p>
                    <p>Whatsapp: +353 4545345</p>
                    <p>email@email.it</p>

                </div>
                <div>
                    <p className="font-medium">Dove siamo:</p> {/* maybe link to maps? */}
                    <Link to={'https://maps.app.goo.gl/HdMdTYLdQhtW1jodA'}>
                        <address>
                            via di rotondo 24, 23745 <br />
                            Paesello, PA
                        </address>
                    </Link>

                </div>
            </div>
            <p className="font-medium">Camping Elicrisi - {new Date().getFullYear()}</p>
    
        </div>
    )
}

export default Footer;