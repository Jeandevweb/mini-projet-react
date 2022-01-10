import React from 'react'
import { useState, useEffect } from 'react';
import './Modal.css';



export default function Modal() {
    
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }
    
    return (
        <>
            <button onClick={toggleModal} className="btn-modal">Open</button>


        {modal && (
            <div className="overlay">
                <div className="modal">
                    <div className="modal-content">
                        <h2>Hello modal!</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolores ab soluta optio odio, esse praesentium. Ea earum eos cumque nihil doloribus at ad sunt! Non esse numquam totam. Sequi distinctio labore deleniti facilis repudiandae animi aperiam commodi minus maxime. Tenetur ut aut corporis deleniti magni quo numquam recusandae perspiciatis.</p>
                        <button onClick={toggleModal} className="close-modal">Fermer</button>
                    </div>
                </div>
            </div>
        )}
        </>
    )
}
