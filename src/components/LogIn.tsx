import axios from "axios"
import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

const LogIn = function (){

    const APIUrl = 'http://localhost:8080/auth/login'

    const navigate = useNavigate()

    const [inputValues, setInputValues] = useState({
        username: '',
        password: ''
    })

    const logIn = ()=>{
        axios
        .post(APIUrl, inputValues)
        .then((response) => {
            setInputValues({
                username: '',
                password: ''
            })
            console.log("Login completed", response.data)
            const token = response.data
            localStorage.setItem("token", token)
            login(token)
            navigate("/")
            
        })
        .catch((err) => {
            console.log("Errore nel login: ", err)
        })
    }

    const { login } = useAuth()


    return(
                <section className="bg-green-950">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 text-black">
            
            <div className="w-full bg-orange-50 rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                        Sign in to your account
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#" onSubmit={(e)=>{
                        e.preventDefault()
                        //fetch
                        logIn()
                    }} >
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Your username</label>
                            <input type="text" name="username" id="username" className="0 border text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  border-gray-600 placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500" placeholder="gino123" required value={inputValues.username} onChange={(e) => {
                                setInputValues({
                                    ...inputValues,
                                    username: e.target.value,
                                })
                            }} />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="0 border text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  border-gray-600 dplaceholder-gray-400  focus:ring-blue-500 focus:border-blue-500" required value={inputValues.password} onChange={(e)=>{
                                setInputValues({
                                    ...inputValues,
                                    password: e.target.value,
                                })
                            }} />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border rounded  focus:ring-3 focus:ring-primary-300 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800" required />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label className="text-gray-500">Remember me</label>
                                </div>
                            </div>
                            <a href="#" className="text-sm font-medium hover:underline text-teal-500">Forgot password?</a>
                        </div>
                        <button type="submit" className="w-full text-white  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-teal-600 hover:bg-primary-700 focus:ring-primary-800 hover:bg-teal-500">Sign in</button>
                        {/* <p className="text-sm font-light text-gray-400">
                            Don’t have an account yet? <a href="#" className="font-medium hover:underline text-teal-500">Sign up</a>
                        </p> */}
                    </form>
                </div>
            </div>
        </div>
        </section>
    )
}

export default LogIn