import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { Todo } from 'components/Todo'
import { SelectCategory } from 'library/Select'
import { ClearButton } from 'components/ClearButton'
import { CompleteAllButton } from 'components/CompleteAllButton'
import { Subtitle } from 'library/Text'
import logo from '../assets/bored-cat.gif'

export const TodoList = () => {
  const [category, setCategory] = useState('')

  const items = useSelector((store) => {
    if (!category) return store.todos.items
    else return store.todos.items.filter(item => item.category === category)
  })
  
  if (items.length === 0 && !category) {
    return (
      <ListWrapper>
        <CatGif src={logo} alt='bored cat' />
      </ListWrapper>
    )
  } else if (items.length === 0 && category) {
    return (
      <ListWrapper>
        <label>
          <SelectCategory
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value=''>Filter by category</option>
            <option value='Work'>Work</option>
            <option value='Study'>Study</option>
            <option value='Household'>Household</option>
            <option value='Shopping'>Shopping</option>
            <option value='Fun'>Fun</option>
            <option value='Other'>Other</option>
          </SelectCategory>
        </label>
        <Subtitle>No tasks in this category</Subtitle>
      </ListWrapper>
    )
  }

  return (
    <ListWrapper>
      <label>
        <SelectCategory
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value=''>Filter by category</option>
          <option value='Work'>Work</option>
          <option value='Study'>Study</option>
          <option value='Household'>Household</option>
          <option value='Shopping'>Shopping</option>
          <option value='Fun'>Fun</option>
          <option value='Other'>Other</option>
        </SelectCategory>
      </label>
      <ToDoList>
        {items.map((item) => (
          <Todo key={item.id} item={item} />
        )).reverse()}
      </ToDoList>
      {items.length > 0 &&
      <>
      <ClearButton />
      <CompleteAllButton />
      </>
      } 
    </ListWrapper>
  )
}

const ListWrapper = styled.div`
  width: 85vw;
  max-width: 1000px;
  min-height: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: rgba(3, 77, 136, .4);
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  margin-top: 3vh;
  margin-bottom: 3vh;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
`
const ToDoList = styled.ul`
  list-style: none;
  padding: 0;
  width: 95%;
  max-width: 500px;
`;

const CatGif = styled.img`
  width: 200px;
`;