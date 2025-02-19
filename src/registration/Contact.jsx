

function Contact() {
    return (
        <div className=" m-20 ">
            <div class="p-4 mx-auto max-w-xl bg-white font-[sans-serif] border-[1px]">
                <h1 class="text-2xl text-gray-800 font-bold text-center">Contact us</h1>
                <form class="mt-8 space-y-4">
                    <input required type='text' placeholder='Name' name="name"
                        class="w-full py-2.5 px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm outline-none transition-all" />
                    <input required type='email' placeholder='Email' name="email"
                        class="w-full py-2.5 px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm outline-none transition-all" />
                    <input required type='text' placeholder='Subject' name="subject"
                        class="w-full py-2.5 px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm outline-none transition-all" />
                    <textarea required placeholder='Message' rows="4" name="message"
                        class="w-full px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm pt-3 outline-none transition-all"></textarea>
                    <input class="text-white bg-black hover:bg-gray-900 tracking-wide text-sm px-4 py-2.5 w-full outline-none" type="submit" value="Send" />
                </form>
            </div>
        </div>
    )
}

export default Contact
