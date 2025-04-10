import React from 'react'
import Link from "next/link";

function Navbar() {
    return (
        <div className='shadow p-4'>
            <Link className='mr-4' href="/">Home</Link>
            <Link href="/blogs">Blog</Link>
        </div>
    )
}

export default Navbar;