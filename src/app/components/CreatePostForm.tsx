'use client'

import { useState } from "react"

function CreatePostForm(){

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handelSubmitPost = ()=> {
        fetch("http://localhost:3001/article", {
            method: "POST",
            body: JSON.stringify({
                id: Math.floor(Math.random() * 100),
                title: title,
                description: description
            })
        })
    }

    return (
        <div className="bg-gray-100 flex flex-col">
            <label>Title</label>
            <input className="border" type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />

            <label>Description</label>
            <textarea className="border" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>

            <button className="px-4 py-2 bg-amber-800 rounded-2xl" onClick={handelSubmitPost}>Submit</button>
        </div>
    )
}


export default CreatePostForm