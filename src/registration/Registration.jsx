import { useState } from "react"


function Registration() {

    const [user, setUser] = useState({

        name: "",
        username: "",
        email: "",
        password: "",
        confirm_password: ""

    })

    return (
        <div className=' m-20 '>
            <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">

                <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">

                        <form >


                            <div>
                                <label for="email" class="block text-sm font-medium leading-5  text-gray-700">Name</label>
                                <div class="mt-1 relative rounded-md shadow-sm">
                                    <input id="name"
                                        name="name"
                                        placeholder="John Doe"
                                        type="text"
                                        value={user.name}
                                        required
                                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                </div>
                            </div>




                            <div class="mt-6">
                                <label for="username" class="block text-sm font-medium leading-5 text-gray-700">Username</label>
                                <div class="mt-1 flex rounded-md shadow-sm">
                                    <span
                                        class="inline-flex h-10 items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                                        iworkedon.com
                                    </span>
                                    <input id="username"
                                        name="username"
                                        placeholder="john"
                                        type="text"
                                        value={user.username}
                                        required
                                        class="flex-1  border border-gray-300 form-input pl-3 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                </div>
                            </div>




                            <div class="mt-6">
                                <label for="email" class="block text-sm font-medium leading-5 text-gray-700">
                                    Email address
                                </label>
                                <div class="mt-1 relative rounded-md shadow-sm">
                                    <input id="email"
                                        name="email"
                                        placeholder="user@example.com"
                                        type="email"
                                        value={user.email}
                                        required
                                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                </div>
                            </div>



                            <div class="mt-6">
                                <label for="password" class="block text-sm font-medium leading-5 text-gray-700">
                                    Password
                                </label>
                                <div class="mt-1 rounded-md shadow-sm">
                                    <input id="password"
                                        name="password"
                                        type="password"
                                        value={user.password}
                                        required
                                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                </div>
                            </div>



                            <div class="mt-6">
                                <label for="password_confirmation" class="block text-sm font-medium leading-5 text-gray-700">
                                    Confirm Password
                                </label>
                                <div class="mt-1 rounded-md shadow-sm">
                                    <input id="password_confirmation"
                                        name="confirm_password"
                                        value={user.confirm_password}
                                        type="password"
                                        required
                                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                </div>
                            </div>

                            <div class="mt-6">
                                <span class="block w-full rounded-md shadow-sm">
                                    <input type="submit"
                                        class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                                        value="Submit" />
                                </span>
                            </div>



                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration
