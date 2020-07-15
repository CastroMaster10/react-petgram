import React from 'react';
import {ListOfCategories} from './components/ListOfCategories';
import {GlobalStyles} from './components/styles/GlobalStyles'
import {ListOfPhotoCards} from './controllers/ListOfPhotoCards';
import {Logo} from './components/Logo';

export const App = () => {
    return(
        <>
        <GlobalStyles/>
        <Logo/>
        <ListOfCategories/>
        <ListOfPhotoCards categoryId= {2}/>
        </>
    )
}

