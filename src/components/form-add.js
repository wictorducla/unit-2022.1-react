import React, { useState } from "react"
import api from '../services/api'

const FormAdd = () => {
  const [ lista, setLista ] = useState([])
  const [ newTask, setNewTask ] = useState()
  
  const handleSubmit = (event) => {
    event.preventDefault()
    // define a estrutura da task que será enviada ao servidor
    const task = {
      title: newTask,
      userId: 1,
      completed: false
    }
    // faz uma chamada via metodo POST
    api.post('todos', task).then(response => {
      // printa a resposta no console
      console.log(response)
      
      // Informa ao usuário que deu certo
      alert('Deu certo!')
      
      // Adiciona o item criado à lista
      lista.push(task)
      setLista(lista)
    }).catch( error => {
      // Adiciona erro ao console
      console.log(error)
    })
    // limpa o input
    setNewTask('')
  }
  
  return (
    <section id="new-item-form">
    <form onSubmit={handleSubmit}>
    <input type="text" id="title" onChange={(e) => setNewTask(e.target.value)} value={newTask} placeholder="title" />
    </form>
    </section>
    )
  }
  
  export default FormAdd