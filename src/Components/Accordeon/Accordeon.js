import './Accordeon.css';
import React from 'react'
import {useState, useEffect, useRef} from 'react';
import Chevron from './chevron.svg';

export default function Accordeon() {

    const [toggle, setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState();

    const theToggle = () => {
        setToggle(!toggle);
    }

    const refHeight = useRef();
    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, [])




    return (
        <>
            <div className="accord">
                <div onClick={theToggle} className="accord-visible">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <img src={Chevron} alt="chevron down" />
                </div>

                <div ref={refHeight} className={toggle ? 'accord-toggle animated' : 'accord-toggle'} style={{height: toggle ? `${heightEl}` : "0px"}}>
                    <p aria-hidden={toggle ? "true" : "false"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga perspiciatis maiores quia aliquid sint eos officia cum ab labore quae incidunt alias exercitationem autem perferendis cumque, laboriosam eum corrupti optio?</p>
                </div>
            </div>
        </>
    )
}
