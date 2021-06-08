import React from 'react'

import Link from 'next/link'
import classes from './Layout.module.css'

const Layout = (props) => {
    return(
        <>
            <header className = {classes.Header}>
                <h3>My Meetups</h3>
                <ul>
                    <li><Link href = "/">Home</Link></li>
                    <li><Link href = "/addmeetup">Add Meetup</Link></li>
                </ul>
            </header>
            <div style = {{width:"55%", margin:"auto"}}>
                {props.children}
            </div>
            
        </>
    )
}

export default Layout