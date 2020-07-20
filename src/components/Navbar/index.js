import React from 'react';
import {Nav, Link} from './styles';
import {MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'

export const Navbar = () => {
    return(
        <Nav>
            <Link to= '/'><MdHome size= '20'/></Link>
            <Link to='/favs'><MdFavoriteBorder size='20'/></Link>
            <Link to='/user'><MdPersonOutline size='20'/></Link>
        </Nav>
    )
}