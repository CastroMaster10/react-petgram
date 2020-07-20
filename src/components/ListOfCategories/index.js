import React, { Fragment, useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Items } from './styles'
import ReactLoading from 'react-loading';


const CategoriesData = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(function () {   
    setLoading(true)
    window.fetch('https://petgram-server-rdct.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
      
  }, [])
  return {categories, loading }
}




export const ListOfCategories = () => {
 
  const [showFixed, setShowFixed] = useState(false)
  const {categories, loading} = CategoriesData()
 

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])



  const renderList = (fixed) => (
    <List fixed= {fixed}>
      {
      loading ? (<ReactLoading type= 'spokes' color= "#000000"/>) :
       categories.map(category => <Items key={category.id}><Category {...category} path = {`/pet/${category.id}`} /></Items>)
      }
    </List>
  )



  return (
    <>
    
    {renderList()}
    {showFixed && renderList(true)}
   
    </>
  )
}