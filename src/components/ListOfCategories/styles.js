import styled, {css} from 'styled-components';
import {FadeIn, fadeInKeyFrames} from '../styles/animation'



export const List = styled.ul`

display: flex;
overflow: scroll;
width: 100%;
&::-webkit-scrollbar {
    display: none;
}
margin-bottom: 30px;
${props => props.fixed && css`
${FadeIn()}
background: #fff;
border-radius: 60px;
box-shadow: 0 0 20px rgba(0,0,0,0.3);
width: 300px;
left: 0;
margin:  auto;
padding: 5px;
position: fixed; /* siempre estara en la misma posicion */
right: 0;
top: -20px;
transform: scale(0.7);
z-index: 1;
`}
`

export const Items = styled.li`
padding: 0px 10px;
list-style-type: none;

`





