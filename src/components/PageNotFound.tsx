import { Link } from "react-router-dom"

const PageNotFound = function () {
    return(
        <section className="bg-green-950 py-50">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-500">404</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold  md:text-4xl text-white">Something's missing.</p>
                    <p className="mb-4 text-lg font-light text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                    <Link to={"/"} className="hover:opacity-80 text-gray-200">Back to Homepage</Link>
                </div>   
            </div>
        </section>
    ) 
}

export default PageNotFound