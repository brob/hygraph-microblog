import { useState } from "react"
import ReplyForm from "./ReplyForm"


const Reply = (props) => {
    const [open, setOpen] = useState(false)
    const replyToggle = () => {
        setOpen(!open)
    }

    return (       
    <>
        {open && <ReplyForm />}
        <button className="block mt-4" onClick={replyToggle}>{open ? "Nevermind" : "Reply"}</button>
    </>
    )
}

export default Reply