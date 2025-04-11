import React from 'react'
import Link from "next/link";

function Navbar() {
    return (
        <div className='shadow p-4'>
            <Link className='mr-4' href="/">Home</Link>
            <Link className='mr-4' href="/blogs">Blog</Link>
            <Link className='mr-4' href="/blogs/create">Create</Link>
        </div>
    )
}

export default Navbar;