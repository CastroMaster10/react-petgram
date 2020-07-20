import React from 'react';
import {Link, Image} from './styles';

const DEFAULT_IMG = 'https://i.imgur.com/dJa0Hpl.jpg'

 export const Category = (props) => {
     return(
         <Link to= {props.path}>
           <Image src= {props.cover}/>
           {props.emoji}  
         </Link>
     )
}

