import React from 'react'
import {IGetArticle} from "@/app/blogs/page";


function Article({title, description} : IGetArticle) {
    return (
        <div className='shadow p-4'>
            <h2>{title}</h2>
            <p className='pt-4'>
                {description}
            </p>
        </div>
    )
}


export default Article