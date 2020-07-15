import React, { useState} from 'react';
import {PhotoCard} from '../PhotoCard';
import {withPhotos} from '../../hoc/withPhotos';



 export const ListOfPhotoCardsComponent = ({data: {photos = []}} = {}) => {

  return(
        <ul>
            {
              photos.map(photo => {
                return(
                    <PhotoCard key= {photo.id} {...photo}/>
                )
              })
            }
        </ul>
    );
}

