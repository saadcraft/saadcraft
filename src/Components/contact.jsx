import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import Net from '../images/networking.png';

export default function Contact(){
    return (
        <div className='cnt'>
            <div>
                <h2>Contact</h2>
                <p><FontAwesomeIcon icon={faPhone} /> +213551755666</p>
                <p><FontAwesomeIcon icon={faMailBulk} />  saadkhouani@gmail.com</p>
                <p></p>
            </div>
            <div>
                <h2>About</h2>
                <p>About</p>
                <p>FAQ</p>
                <p></p>
            </div>
            <div>
                <h2>More Information</h2>
                <p>badge cisco:</p>
                <img src={Net}/>
                <p></p>
            </div>
        </div>
    )
}