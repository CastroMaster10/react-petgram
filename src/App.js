import React from 'react';
import {GlobalStyles} from './components/styles/GlobalStyles'
import {Logo} from './components/Logo';
import { PhotoCardWithQuery } from './controllers/PhotoCardWithQuery';
import {Home} from './pages/Home';  
import {Router} from '@reach/router';
import {Detail} from './pages/Detail'
import {Navbar} from './components/Navbar';
import {Favs} from './pages/Favs';
import {User} from './pages/User'
import { NotRegisteredUser} from './pages/NotRegisteredUser';
import Context from './Context'

export const App = () => {


    
    return(
        <>
        <GlobalStyles/>
        <Logo/>
            <Router>
                <Home path='/' />
                <Home path='/pet/:id' />
                <Detail path = '/detail/:detailedId'/>
            </Router>
                <Context.Consumer>
                    {
                        ({isAuth}) => 
                            isAuth
                            ? (<Router>
                                <Favs path='/favs' />
                                <User path='/user' />
                            </Router>)
                            : (<Router>
                                <NotRegisteredUser path='favs' />
                                <NotRegisteredUser path='/user' />
                            </Router>)
                        
                    }
                </Context.Consumer>
               
            <Navbar/>
        </>
    )
}

