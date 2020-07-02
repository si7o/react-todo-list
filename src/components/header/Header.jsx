import React from 'react'
import './Header.scss'

export default function Header({title, logoImage, isLoading=true}) {
    const loading = isLoading ? (
        <span className="loading">(loading...)</span>
        ): '';

    return (
        <header>
            <img src={logoImage} className={' logo '+ (isLoading ? 'loading':'')} alt="logo" />                     
            <div className="title">
                {title} {loading}
            </div>   
        </header>
    )
}
