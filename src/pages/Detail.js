import React from 'react';
import {PhotoCardWithQuery} from '../controllers/PhotoCardWithQuery'

export const Detail = ({detailedId}) => {
    return <PhotoCardWithQuery id= {detailedId}/>
}