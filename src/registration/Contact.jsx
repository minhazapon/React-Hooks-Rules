import { useState } from "react"


function Contact() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const handleForm = (e) => {
        e.preventDefault()
        const allData = {
            name,
            email,
            subject,
            message
        }
        console.log(allData)
    }



    return (
        <div className=" m-20 ">
            <div class="p-4 mx-auto max-w-xl bg-white font-[sans-serif] border-[1px]">
                <h1 class="text-2xl text-gray-800 font-bold text-center">Contact us</h1>
                <form onSubmit={handleForm} class="mt-8 space-y-4">
                    <input required type='text'
                        placeholder='Name'
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        class="w-full py-2.5 px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm outline-none transition-all" />
                    <input required type='email'
                        placeholder='Email'
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        class="w-full py-2.5 px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm outline-none transition-all" />
                    <input required type='text'
                        placeholder='Subject'
                        name="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        class="w-full py-2.5 px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm outline-none transition-all" />
                    <textarea required placeholder='Message'
                        rows="4"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        class="w-full px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm pt-3 outline-none transition-all"></textarea>
                    <input class="text-white bg-black hover:bg-gray-900 tracking-wide text-sm px-4 py-2.5 w-full outline-none" type="submit" value="Send" />
                </form>
            </div>
        </div>
    )
}

export default Contact
