
import React, { useState, useEffect } from 'react'
import ListItem from './list-item';
import api from '../services/api'



const List = () => {  
  const [ lista, setLista ] = useState([])
  useEffect(()=> {
    api.get('/todos').then(response => {
      const todos_list = response.data
      setLista(todos_list)
    })
  }, [])
    return (
        <ul>
          {
            lista.reverse().map(item => (
              <ListItem
                title={item.title}
                status={item.completed}
              />
            ))
          }
        </ul>
    )
}

export default List