import styled from 'styled-components';
import { FadeIn} from '../styles/animation';


export const Article = styled.article`
min-height: 200px;
`

export const ImgWrapper = styled.div`
border-radius: 10px;
display: block;
height: 0;
overflow: hidden;
padding: 56.25% 0 0 0;
position: relative;
width: 100% ;
margin: 10px 0px;
`

export const Img = styled.img`
${FadeIn({time: '1s'})}
box-shadow: 0px 0px 14px rgba(0,0,0,0,3);
height: 100%;
object-fit: cover;
position: absolute;
top: 0;
width: 100%;
`

export const Button = styled.button`
border-radius: 5px;
display: flex;
border: none;
color: #1e3f5a;
background: none;
cursor: pointer;
align-items: center;
& svg {
    margin-right: 4px;
}
`

export const ReactLoadingWrapper = styled.div`
width: 80px;
margin: auto;
min-height: 200px;
justify-content: center;
padding-top: 70px;
`