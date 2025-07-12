import { CiFacebook, CiLinkedin, CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTent } from "react-icons/fa6";
import { GiFlowers } from "react-icons/gi";
import { Link } from "react-router-dom";

const Footer = function(){
    return (
        <div className="p-4 dark:text-black flex flex-col items-center gap-2">
            <div className="flex flex-col sm:flex-row gap-8 md:gap-20">
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
                </div>
                <div className="flex flex-col">
                    {/* mappa sito */}
                    <Link to={'/accomodations'}>Alloggi</Link>
                    <Link to={'/bookings'}>Prenota</Link>
                    <Link to={'/news'}>News</Link>
                    <Link to={'/restaurant'}>Ristorante</Link>
                    <Link to={'/myBookings'}>My Bookings</Link>
                </div>
                <div>
                    {/* contattaci */}
                    <Link to={'/contact'}>Contattaci</Link>
                    <p>Reception: +549 5464566</p>
                    <p>Whatsapp: +353 4545345</p>
                    <p>email@email.it</p>

                </div>
                <div>
                    <p>Dove siamo:</p> {/* maybe link to maps? */}
                    <Link to={'https://maps.app.goo.gl/HdMdTYLdQhtW1jodA'}>
                        <address>
                            via di rotondo 24, 23745 <br />
                            Paesello, PA
                        </address>
                    </Link>

                </div>
            </div>
            <p>Camping Elicrisi - {new Date().getFullYear()}</p>
    
        </div>
    )
}

export default Footer;