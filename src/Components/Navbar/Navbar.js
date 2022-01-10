import React from 'react'
import './navbar.css'
import { useState, useEffect } from 'react';

export default function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {

        const changeWidth = () => {
            setLargeur(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
        
    }, [])






    return (
        <nav>
            {(toggleMenu || largeur > 500)&& (
            <ul className="liste">
                <li className="items">Accueil</li>
                <li className="items">Services</li>
                <li className="items">Contact</li>
            </ul>
            )}
            <button onClick={toggleNav}className="btn">Fermer</button>
        </nav>
    )
}
