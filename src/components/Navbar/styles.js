import styled from 'styled-components'
import {Link as LinkRouter} from '@reach/router';
import {fadeIn, fadeInKeyFrames} from '../styles/animation';

export const Nav = styled.nav`
align-items: center;
background: #fcfcfc;
border-top: 1px solid #e0e0e0;
bottom: 0;
display: flex;
height: 50px;
justify-content: space-around;
left: 0;
margin: 0 auto;
max-width: 500px;
position: fixed;
right: 0;
width: 100%;
z-index: 1000;

`

export const Link = styled(LinkRouter)`
border: none;
text-decoration: none;
color: #03224C;
align-items: center;
height: 100%;
justify-content: center;
display: inline-flex;

&[aria-current]{
    color: #000;  

    &:after {
        ${fadeIn}
        content: '·';
        position: absolute;
        bottom: 0;
        font-size: 34px;
        line-height: 20px;


    } 
}

`