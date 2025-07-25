import { Link } from "react-router-dom";

const HomePage = function (){


    return(

        <section className="min-h-screen bg-slate-50  text-white ">
            {/* hero */}
            <div id="hero" className="flex flex-col justify-center py-80 2xl:py-80 px-5 items-center gap-8 h-screen bg-[url(https://images.pexels.com/photos/388303/pexels-photo-388303.jpeg)] bg-cover">
                <h3 id="hero-welcome" className="text-2xl md:text-3xl delius-regular xl:text-5xl text-white text-shadow-md/80">Welcome to</h3>
                <h1 className="text-4xl md:text-6xl xl:text-8xl delius-regular text-white0 text-shadow-md/80">Camping Elicrisi</h1>
            </div>
            {/* rest of the page */}
            <div className="relative text-black z-10 bg-orange-50">
                {/* white painted: https://cdn.prod.website-files.com/5c0db0b58da8f065edfa6d46/5c0dbc7736137d1606dd867d_painted%20edge.png */}
                <img src="painted-edge-cream.png" className="absolute top-[-20px] lg:top-[-30px] xl:top-[-50px] left-0 z-[-10]" alt="paint-banner" />
                <div className="flex flex-col justify-center items-center gap-8 py-20 px-10 md:px-20"> {/* big container */}
                    
                    {/* about us */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-15">

                        <h2 className="text-4xl quicksand-titles font-medium md:self-start text-center flex-1 text-shadow-md/30">About Us</h2>

                        <p className=" flex-2 text-lg">Nato dal desiderio di vivere a contatto con la natura e accogliere viaggiatori da ogni angolo del mondo, il nostro campeggio è il frutto di un sogno condiviso da due amici di lunga data, Luca e Martina. Amanti del mare, dell’avventura e delle serate sotto le stelle, hanno trasformato la loro passione in un luogo in cui semplicità, relax e autenticità si incontrano ogni giorno.
                            <br />

                        Situato a pochi passi dal mare, il campeggio offre piazzole immerse nel verde, angoli tranquilli per leggere all’ombra degli alberi e spazi comuni dove nascono nuove amicizie. Che tu viaggi con la tua tenda, il camper o cerchi un bungalow accogliente, qui troverai sempre un sorriso e un’atmosfera familiare.
                        <br />
                        Qui il tempo rallenta. Le piazzole sono circondate dal verde, il profumo della salsedine accompagna le giornate, e ogni tramonto sulla spiaggia sembra dipinto apposta per i nostri ospiti. Il campeggio offre anche bungalow accoglienti, servizi curati e spazi comuni dove chiacchierare, giocare, cucinare o semplicemente lasciarsi cullare dal suono delle onde.
                            <br />
                        Un luogo dove si viene per fermarsi, ma si riparte sempre con un ricordo speciale nel cuore.
                        </p>
                    </div>


                    {/* Explore */}
                    
                        <div className="flex flex-col justify-between items-center gap-8 center lg:px-10 pb-15">

                        
                            <h2 className="text-3xl quicksand-titles font-medium text-shadow-md/20">Esplora &#9978;</h2>
                            
                            
                            <div className="flex flex-col sm:flex-row gap-8">
                                <div className="flex-1">
                                    <Link to={'/accommodations'}>
                                        <img src="https://images.pexels.com/photos/2123285/pexels-photo-2123285.jpeg" alt="" className="aspect-3/2 object-cover object-bottom rounded-2xl shadow-lg/30 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" />
                                    </Link>
                                    <div className="p-5">
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-black text-center">Le nostre piazzole</h5>
                                        <p>Semplicità e natura allo stato puro. Le nostre piazzole sono immerse nel verde, ombreggiate e dotate di allacci elettrici, perfette per tende, camper o roulotte. A due passi dai servizi e dal mare, offrono tutto ciò che serve per vivere un soggiorno libero, rilassante e a contatto con la terra.</p>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <Link to={'/accommodations'}>
                                        <img src="https://images.pexels.com/photos/2174992/pexels-photo-2174992.jpeg" alt="" className="aspect-3/2 object-cover object-bottom rounded-2xl shadow-lg/30 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" />
                                    </Link>
                                    <div className="p-5">
                                        <h5 className="mb-2 text-xl font-bold tracking-tighttext-black text-center">I nostri bungalows</h5>
                                        <p>Per chi ama la comodità senza rinunciare all’atmosfera del campeggio. I nostri bungalow in legno, accoglienti e funzionali, sono ideali per famiglie, coppie o amici. Dotati di angolo cottura, bagno privato e veranda esterna, promettono momenti di relax assoluto con il profumo della salsedine nell’aria.</p>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <Link to={'/accommodations'}>
                                        <img src="https://images.pexels.com/photos/17396037/pexels-photo-17396037.jpeg" alt="" className="aspect-3/2 object-cover object-bottom rounded-2xl shadow-lg/30 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" />
                                    </Link>
                                    <div className="p-5">
                                        <h5 className="mb-2 text-xl font-bold tracking-tighttext-black text-center">Le nostre tende lussuose</h5>
                                        <p>L’anima selvaggia incontra il comfort. Il nostro glamping offre tende attrezzate dallo stile unico, con letti veri, arredi curati e scorci sulla natura circostante. Per chi cerca un’esperienza originale, romantica e indimenticabile, con quel tocco di magia sotto le stelle.</p>
                                    </div>
                                </div>
                            
                            </div>
                        </div>


                        {/* facilities */}
                        <div className="w-full mx-auto flex flex-col items-center justify-content gap-8 pb-10">

                            
                            <h3 className="text-3xl quicksand-titles font-medium text-shadow-md/20">Le strutture</h3>
                            <p>Goditi una mattina rinfrescante in piscina, riposati nelle nostre amache e goditi un aperitivo nel nostro ristorante</p>

                            <div className="w-full mx-auto">
                                <div className="w-full h-[200px]">
                                    <img
                                    src="https://images.pexels.com/photos/19781912/pexels-photo-19781912.jpeg"
                                    alt="swimming pool"
                                    className="w-full h-full object-cover object-[25%_70%] rounded-2xl  shadow-lg/30"
                                    />
                                </div>
                                <div className="py-2">
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-black text-center">Piscina</h5>
                                </div>
                            </div>

                            
                            <div className="w-full mx-auto">
                                <div className="w-full h-[200px]">
                                    <img
                                    src="https://images.pexels.com/photos/1229753/pexels-photo-1229753.jpeg"
                                    alt="swimming pool"
                                    className="w-full h-full object-cover object-[25%_70%] rounded-2xl  shadow-lg/30"
                                    />
                                </div>
                                <div className="py-2">
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-black text-center">Relax</h5>
                                </div>
                            </div>
                            <div className="w-full mx-auto">
                                <div className="w-full h-[200px]">
                                    <img
                                    src="https://images.pexels.com/photos/1237073/pexels-photo-1237073.jpeg"
                                    alt="swimming pool"
                                    className="w-full h-full object-cover object-[25%_70%] rounded-2xl  shadow-lg/30"
                                    />
                                </div>
                                <div className="py-2">
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-black text-center">Ristorante</h5>
                                </div>
                            </div>
                        </div>

                        {/* amenities */}

                        <div className="flex flex-col justify-between items-center gap-8 px-10 lg:px-20 pb-10">
                            <h3 className="text-3xl quicksand-titles font-medium text-shadow-md/20">I servizi &#128703;</h3>

                            <div className="flex flex-col gap-8 items-center justify-center">
                                <div className="flex flex-col md:max-w-screen-lg sm:flex-row gap-8">
                                    <div className="flex-1">
                                        <img src="https://images.pexels.com/photos/4989099/pexels-photo-4989099.jpeg" alt="" className="aspect-3/2 object-cover object-[25%_70%] rounded-2xl shadow-lg/30" />
                                        <div className="p-5">
                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-black text-center">Bagni e docce calde</h5>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <img src="https://images.pexels.com/photos/67184/pexels-photo-67184.jpeg" alt="" className="aspect-3/2 object-cover object-bottom rounded-2xl shadow-lg/30" />
                                        <div className="p-5">
                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-black text-center">Lavandini all'aperto</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col md:max-w-screen-lg sm:flex-row gap-8">
                                    
                                    <div className="flex-1">
                                        <img src="https://images.pexels.com/photos/1309067/pexels-photo-1309067.jpeg" alt="" className="aspect-3/2 object-cover object-bottom rounded-2xl shadow-lg/30" />
                                        <div className="p-5">
                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-black text-center">Barbecue</h5>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <img src="https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg" alt="" className="aspect-3/2 object-cover object-bottom rounded-2xl shadow-lg/30" />
                                        <div className="p-5">
                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-black text-center">Falò</h5>
                                        </div>
                                    </div>
                                </div>
                          
                            </div>

                        </div>

                        {/* dintorni */}
                        <div className="flex flex-col justify-between items-center gap-8 center">
                            <h3 className="text-3xl quicksand-titles font-medium text-shadow-md/20">Dintorni</h3>
                            <p className="text-lg">Visita la toscana! da spiagge caraibiche a discoteche a picco sul mare.</p>
                            <div className="flex flex-col sm:flex-row gap-8">
                                <div className="flex-1">
                                    <Link to={'/surroundings'}>
                                        <img src="https://images.pexels.com/photos/2049422/pexels-photo-2049422.jpeg" alt="" className="aspect-3/2 object-cover object-bottom rounded-2xl shadow-lg/30 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" />
                                    </Link>
                                        <div className="p-2">
                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-black text-center">Mare</h5>
                                            <p className="text-center">Troverai di tutto di più: spiagge bianche, scogli colorati e resort con piscine sul mare</p>
                                        </div>
                                </div>
                                <div className="flex-1">
                                    <Link to={'/surroundings'}>
                                        <img src="https://images.pexels.com/photos/2629233/pexels-photo-2629233.jpeg" alt="" className="aspect-3/2 object-cover object-center rounded-2xl shadow-lg/30 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" />
                                    </Link>
                                        <div className="p-2">
                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-black text-center">Trekking</h5>
                                            <p className="text-center">Percorri una delle tante antiche strade romane immerse nel verde</p>
                                        </div>
                                </div>
                                <div className="flex-1">
                                    <Link to={'/surroundings'}>
                                        <img src="https://images.pexels.com/photos/4430307/pexels-photo-4430307.jpeg" alt="" className="aspect-3/2 object-cover object-center rounded-2xl shadow-lg/30 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" />
                                    </Link>
                                        <div className="p-2">
                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-black text-center">Vita notturna</h5>
                                            <p className="text-center">Da ristoranti chic in giacca e cravatta ad aperitivi scalzi in spiaggia</p>
                                        </div>
                                </div>
                            </div>

                        </div>
                        
                    

                </div> {/* end of big container */}

            </div>
            {/* find us */}
                        <div className="flex flex-col bg-gray-300 items-center gap-8 p-6 text-black">
                            <h3 className="text-3xl text-shadow-md/20">Dove siamo</h3>
                            
                            <div className="flex flex-col md:flex-row w-full gap-20">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5790.225290108554!2d10.32744894740432!3d43.47911951957426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d5e61e2519c089%3A0x70bfd41bcbc381dd!2sCalafuria%20Province%20of%20Livorno%2C%20Italy!5e0!3m2!1sen!2ses!4v1752496589592!5m2!1sen!2ses" width="600" height="450" loading="lazy" className="w-full flex-2"></iframe>
                                <div className="flex flex-col items-center justify-center flex-1 w-full text-center">
                                    <p>Aeroporto più vicino:</p>
                                    <p>Aeroporto di pisa</p>
                                    <p>Uscita Autostrada Genova - Grosseto: 92</p>
                                </div>
                            </div>

                            

                        </div>

        </section>
    )
}

export default HomePage;