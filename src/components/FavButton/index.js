import React from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import {Button} from './styles';

export const FavButton = ({liked, likes, onClick}) => {

    const Icon = liked ? MdFavorite : MdFavoriteBorder  // iconos

    return(
        <Button >
            <Icon onClick={onClick} size='25' /> {likes} likes!
        </Button>
    )
}