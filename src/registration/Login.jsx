import { useState } from "react"


function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleForm = (e) => {
        e.preventDefault()
        const formData = {
            email,
            password
        }
        console.log(formData)
    }


    return (
        <div className=" flex justify-center m-20 ">

            <div className="flex flex-col w-full p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">

                <form onSubmit={handleForm} className="space-y-12">

                    <div className="space-y-4">

                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="leroy@jenkins.com"
                                required
                                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
                        </div>

                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-400">Forgot password?</a>
                            </div>
                            <input type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="password"
                                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
                        </div>

                    </div>


                    <div className="space-y-2">
                        <div>
                            <input type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900" value="login" />
                        </div>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default Login
