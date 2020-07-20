import React from 'react';
import {PhotoCard} from '../components/PhotoCard';
import { gql } from 'apollo-boost';
import {Query} from 'react-apollo'  // nos permitirá utilizar la técnica de render props

const query = gql`
query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`

export const PhotoCardWithQuery = ({id}) => {
return(
    <Query query= {query} variables= {{id}}>
        {

            ({loading,error, data}) => {
                if(data) {
                    const {photo = {} } = data;
                    return <PhotoCard {...photo} />
                } else {
                    return null
                }
                
             
            }
        }
    </Query>
)
}