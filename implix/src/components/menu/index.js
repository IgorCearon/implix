import React from 'react';
import Logo from '../../assets/Imagem/logo.png';
import './menu.css'
import Button from '../Button';
//import ButtonLink from './ButtonLink';


function Menu () {
    return (
        <nav className='Menu'>
            <a href='/'>
                <img className='Logo' src={Logo} />
            </a> 

            <Button as='a' className='ButtonLink' href='/'>
                Novo video
            </Button>

        </nav>
    )
}


export default Menu;