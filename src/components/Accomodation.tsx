const Accomodation = function (){
    return (
        <section className="p-6 my-12">
            <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
            Our Accomodations
          </h2>
          <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
            <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-20 px-2 rounded-3xl shadow-xl bg-[url(https://images.pexels.com/photos/13192354/pexels-photo-13192354.jpeg)] bg-cover opacity-85 cursor-pointer">
              <h3 className="text-3xl text-center text-slate-900 dark:text-white">Plots</h3>
            </li>
            <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-20 px-2 rounded-3xl shadow-xl bg-[url(https://images.pexels.com/photos/13192354/pexels-photo-13192354.jpeg)] bg-cover opacity-85">
              <h3 className="text-3xl text-center text-slate-900 dark:text-white">Mobile Homes</h3>
            </li>
            <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-20 px-2 rounded-3xl shadow-xl bg-[url(https://images.pexels.com/photos/13192354/pexels-photo-13192354.jpeg)] bg-cover opacity-85">
              <h3 className="text-3xl text-center text-slate-900 dark:text-white">Glamping</h3>
            </li>
          </ul>
        </section>
    )

}

export default Accomodation