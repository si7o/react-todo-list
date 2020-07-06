import React from 'react'
import './Footer.scss'

function Footer({sourceCodeUrl}) {
    
    return (
        <footer>
            <a className="repo-link" href={sourceCodeUrl}>view source code <img src={process.env.PUBLIC_URL + '/github-logo.png'} alt="github logo" /></a> 
        </footer>
    )
}

export default Footer
