const HomePage = function (){
    return(

        <section className="min-h-screen bg-slate-50 dark:bg-black dark:text-white ">
            {/* hero */}
            <div id="hero" className="flex flex-col justify-center py-80 2xl:py-80 px-5 items-center gap-8 h-screen bg-[url(https://images.pexels.com/photos/388303/pexels-photo-388303.jpeg)] bg-cover">
                <h3 id="hero-welcome" className="text-2xl md:text-3xl delius-regular xl:text-5xl">Welcome to</h3>
                <h1 className="text-4xl md:text-6xl xl:text-8xl delius-regular">Camping Elicrisi</h1>
            </div>
            {/* rest of the page */}
            <div className="relative text-black z-10 bg-white">
                <img src="https://cdn.prod.website-files.com/5c0db0b58da8f065edfa6d46/5c0dbc7736137d1606dd867d_painted%20edge.png" className="absolute top-[-20px] lg:top-[-30px] xl:top-[-50px] left-0 z-[-10]" alt="paint-banner" />
                <div className="flex flex-col justify-center items-center gap-8 py-20 px-10 md:px-20"> {/* big container */}
                    
                    {/* about us */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                        <h2 className="text-4xl quicksand-titles font-medium md:self-start text-center flex-1">About Us</h2>

                        <p className=" flex-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed vel recusandae corrupti natus distinctio amet velit accusamus numquam adipisci dicta, nisi voluptatibus corporis, obcaecati, explicabo officia nobis illo? Sit, dolores.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed vel recusandae corrupti natus distinctio amet velit accusamus numquam adipisci dicta, nisi voluptatibus corporis, obcaecati, explicabo officia nobis illo? Sit, dolores.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa reiciendis vero odio ullam voluptatibus, mollitia eius fuga facere. Dolorum aut atque numquam aliquam ea error delectus fugiat corporis exercitationem magni!
                        Quibusdam commodi quis aperiam officiis voluptatibus error veniam fugit molestiae hic? Voluptatibus minus commodi ut et obcaecati maiores distinctio autem quidem, itaque in illo quaerat, molestias maxime a voluptates sint!
                        Facilis error quod sequi, praesentium corrupti dicta non veritatis sed quas, repellendus laboriosam numquam enim quo possimus doloribus natus! Doloremque ex exercitationem reiciendis iusto accusamus explicabo dolorum ducimus ad obcaecati.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed vel recusandae corrupti natus distinctio amet velit accusamus numquam adipisci dicta, nisi voluptatibus corporis, obcaecati, explicabo officia nobis illo? Sit, dolores.</p>
                    </div>


                    {/* Explore */}
                    
                        <div className="flex flex-col justify-between items-center gap-8 center">

                        
                            <h2 className="text-3xl quicksand-titles font-medium">Explore &#9978;</h2>
                            
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed vel recusandae corrupti natus distinctio amet velit accusamus numquam adipisci dicta, nisi voluptatibus corporis, obcaecati, explicabo officia nobis illo? Sit, dolores.</p>
                            <div className="flex flex-col sm:flex-row gap-8">
                                <div className="flex-1">
                                    <img src="https://images.pexels.com/photos/2123285/pexels-photo-2123285.jpeg" alt="" className="aspect-3/2 object-cover object-bottom rounded-2xl" />
                                    <div className="p-5">
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black text-center">Our Tents</h5>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <img src="https://images.pexels.com/photos/2174992/pexels-photo-2174992.jpeg" alt="" className="aspect-3/2 object-cover object-bottom rounded-2xl" />
                                    <div className="p-5">
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black text-center">Mobile Homes</h5>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <img src="https://images.pexels.com/photos/17396037/pexels-photo-17396037.jpeg" alt="" className="aspect-3/2 object-cover object-bottom rounded-2xl" />
                                    <div className="p-5">
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black text-center">Glamping</h5>
                                    </div>
                                </div>
                            
                            </div>
                        </div>


                        {/* facilities */}
                        <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center justify-content gap-8 ">

                            
                            <h3 className="text-3xl quicksand-titles font-medium">Our facilities &#128703;</h3>

                            <div className="w-full max-w-screen-xl mx-auto">
                                <div className="w-full h-[200px]">
                                    <img
                                    src="https://images.pexels.com/photos/19781912/pexels-photo-19781912.jpeg"
                                    alt="swimming pool"
                                    className="w-full h-full object-cover object-[25%_70%] rounded-2xl"
                                    />
                                </div>
                                <div className="p-5">
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black text-center">Swimming Pool</h5>
                                </div>
                            </div>
                            <div className="w-full max-w-screen-xl mx-auto">
                                <div className="w-full h-[200px]">
                                    <img
                                    src="https://images.pexels.com/photos/1229753/pexels-photo-1229753.jpeg"
                                    alt="swimming pool"
                                    className="w-full h-full object-cover object-[25%_70%] rounded-2xl"
                                    />
                                </div>
                                <div className="p-5">
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black text-center">Relax</h5>
                                </div>
                            </div>
                            <div className="w-full max-w-screen-xl mx-auto">
                                <div className="w-full h-[200px]">
                                    <img
                                    src="https://images.pexels.com/photos/1237073/pexels-photo-1237073.jpeg"
                                    alt="swimming pool"
                                    className="w-full h-full object-cover object-[25%_70%] rounded-2xl"
                                    />
                                </div>
                                <div className="p-5">
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black text-center">Restaurant</h5>
                                </div>
                            </div>
                        </div>

                        {/* amenities */}

                        <div className="flex flex-col justify-between items-center gap-8">
                            <h3 className="text-3xl quicksand-titles font-medium">Our facilities &#128703;</h3>

                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col sm:flex-row gap-8">
                                    <div className="flex-1">
                                        <img src="https://images.pexels.com/photos/17791283/pexels-photo-17791283.jpeg" alt="" className="aspect-3/2 object-cover object-bottom rounded-2xl" />
                                        <div className="p-5">
                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black text-center">Bathrooms, hot shower</h5>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <img src="https://images.pexels.com/photos/67184/pexels-photo-67184.jpeg" alt="" className="aspect-3/2 object-cover object-bottom rounded-2xl" />
                                        <div className="p-5">
                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black text-center">outdoor sink</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-8">
                                    
                                    <div className="flex-1">
                                        <img src="https://images.pexels.com/photos/1309067/pexels-photo-1309067.jpeg" alt="" className="aspect-3/2 object-cover object-bottom rounded-2xl" />
                                        <div className="p-5">
                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black text-center">grilling stations</h5>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <img src="https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg" alt="" className="aspect-3/2 object-cover object-bottom rounded-2xl" />
                                        <div className="p-5">
                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black text-center">Bonfire pits</h5>
                                        </div>
                                    </div>
                                </div>
                          
                            </div>

                        </div>

                        {/* dintorni */}
                        <div className="flex flex-col justify-between items-center gap-8 center">
                            <h3 className="text-3xl quicksand-titles font-medium">Dintorni</h3>
                            <div className="flex flex-col sm:flex-row gap-8">
                                <div className="flex-1">
                                    <img src="https://images.pexels.com/photos/1309067/pexels-photo-1309067.jpeg" alt="" className="aspect-3/2 object-cover object-bottom rounded-2xl" />
                                        <div className="p-5">
                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black text-center">Spiagge</h5>
                                        </div>
                                </div>
                                <div className="flex-1">
                                    <img src="https://images.pexels.com/photos/1309067/pexels-photo-1309067.jpeg" alt="" className="aspect-3/2 object-cover object-bottom rounded-2xl" />
                                        <div className="p-5">
                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black text-center">Trekking</h5>
                                        </div>
                                </div>
                                <div className="flex-1">
                                    <img src="https://images.pexels.com/photos/1309067/pexels-photo-1309067.jpeg" alt="" className="aspect-3/2 object-cover object-bottom rounded-2xl" />
                                        <div className="p-5">
                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black text-center">Nightlife</h5>
                                        </div>
                                </div>
                            </div>

                        </div>
                        
                    

                </div> {/* end of big container */}

            </div>
            {/* find us */}
                        <div className="flex flex-col bg-gray-300 items-center  gap-8 p-6">
                            <h3 className="text-3xl">Dove siamo</h3>
                            
                            <div className="flex flex-col md:flex-row flex-grow gap-20">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5790.225290108554!2d10.32744894740432!3d43.47911951957426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d5e61e2519c089%3A0x70bfd41bcbc381dd!2sCalafuria%20Province%20of%20Livorno%2C%20Italy!5e0!3m2!1sen!2ses!4v1752496589592!5m2!1sen!2ses" width="600" height="450" loading="lazy" className="w-full flex-2"></iframe>
                                <div className="flex-1 w-full text-center">
                                    <p>descrizione strada</p>
                                    <p>Via aereo:</p>
                                    <p>Aeroporto di pisa</p>
                                    <p>Autostrada</p>
                                </div>
                            </div>

                        </div>

        </section>
    )
}

export default HomePage;