import React, { useState, useEffect, useRef  } from 'react';
import {Button, ImgWrapper, Img, Article, ReactLoadingWrapper} from './styles';
import {MdFavoriteBorder, MdFavorite} from 'react-icons/md';
import {useLocalStorage} from '../../hooks/useLocalStorage';
import {useNearScreen } from '../../hooks/useNearScreen';
import ReactLoading from 'react-loading';

const DEFAULT_IMG = 'https://images.unsplash.com/photo-1518001589401-1743b61d1def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'


export const PhotoCard = ({id, likes = 0, src = DEFAULT_IMG }) => {

    const key = `like-${id}`  
    const [liked, setLiked] = useLocalStorage(key, false)
    const [show,element] = useNearScreen()
    

    const Icon = liked ? MdFavorite : MdFavoriteBorder  // iconos
   
    return(

        <Article ref={element} >
            {show ? (
                <>
                    <a href={`/details/${id}`}>
                        <ImgWrapper>
                            <Img src={src} />
                        </ImgWrapper>
                    </a>


                    <Button >
                        <Icon onClick={() => setLiked(!liked)} size='25' /> {likes} likes!
                    </Button>
                </>
            ):
            (<ReactLoadingWrapper>
                <ReactLoading type="spinningBubbles" color="ffffff" size="5" />
            </ReactLoadingWrapper>)}
           
        </Article>
    );
}

