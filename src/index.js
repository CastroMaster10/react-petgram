import React from 'react'
import ReactDOM from 'react-dom'
import {App} from './App';
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import Context  from './Context';

const client = new ApolloClient({
    uri: 'https://petgram-server-rdct.castromaster10.vercel.app/graphql'
})

ReactDOM.render(
<Context.Provider value= {{isAuth: false}}>
<ApolloProvider client={client}>
<App />
</ApolloProvider>
</Context.Provider>
, document.getElementById('app')
)
