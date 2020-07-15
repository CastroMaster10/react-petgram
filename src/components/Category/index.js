import React from 'react';
import {Anchor, Image} from './styles';

const DEFAULT_IMG = 'https://i.imgur.com/dJa0Hpl.jpg'

 export const Category = (props) => {
     return(
         <Anchor href= {props.path}>
           <Image src= {props.cover}/>
           {props.emoji}  
         </Anchor>
     )
}

