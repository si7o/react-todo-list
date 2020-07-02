import React from 'react'
import './Header.scss'

export default function Header({title, logoImage}) {
    return (
        <header>            
            <img src={logoImage} className="logo" alt="logo" /> 
            {title}
        </header>
    )
}
