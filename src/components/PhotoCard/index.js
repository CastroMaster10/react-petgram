import React from 'react';
import { ImgWrapper, Img, Article, ReactLoadingWrapper} from './styles';
import {useLocalStorage} from '../../hooks/useLocalStorage';
import {useNearScreen } from '../../hooks/useNearScreen';
import ReactLoading from 'react-loading';
import {FavButton} from '../FavButton'
import {ToggleLikeMutation} from '../../controllers/ToggleLikeMutation';
import {Link} from '@reach/router';

const DEFAULT_IMG = 'https://images.unsplash.com/photo-1518001589401-1743b61d1def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'


export const PhotoCard = ({id, likes = 0, src = DEFAULT_IMG }) => {

    const key = `like-${id}`  
    const [liked, setLiked] = useLocalStorage(key, false)
    const [show,element] = useNearScreen()
    
   

   
   
    return(

        <Article ref={element} >
            {show ? (
                <>
                    <Link to={`/detail/${id}`}>
                        <ImgWrapper>
                            <Img src={src} />
                        </ImgWrapper>
                    </Link>
                    <ToggleLikeMutation>
                        {
                            (toggleLike) => {
                                const handleFavClick = () => {
                                   !liked && toggleLike({variables: {
                                       input: {id}
                                   }})
                                    setLiked(!liked)
                                }
                                return(
                                    <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
                                )
                            }
                        }
                    </ToggleLikeMutation>
                    
                </>
            ):
            (<ReactLoadingWrapper>
                <ReactLoading type="spinningBubbles" color="ffffff" size="5" />
            </ReactLoadingWrapper>)}
           
        </Article>
    );
}

