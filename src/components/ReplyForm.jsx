import { useState } from "react"

const ReplyForm = () => {

    const [name, setName] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({name, message})
        // submit to serverless function to push into Hygraph
    }



    return (
        <div className="mt-6">
            <form onSubmit={handleSubmit} >
                <label className="block">
                    <span className="text-gray-700">Name</span>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label className="block">
                    <span className="text-gray-700">Message</span>
                    <textarea className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" rows="3" placeholder="Your message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </label>


            <button className="py-2 px-4 mt-4 bg-brand text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75" type="submit">Submit</button>
            </form>
        </div>
    )
}


export default ReplyForm