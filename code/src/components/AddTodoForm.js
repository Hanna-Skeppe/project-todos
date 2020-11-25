import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import DatePicker from 'react-date-picker';
import styled from 'styled-components'

import { todos } from 'reducers/todos'
import { AddButton } from 'library/Buttons'
import { AddTodoEmoji } from 'library/Emojis'
import { InputText } from 'library/Text'
import { Select } from 'library/Select'
import 'styles/AddTodoForm.css'

export const AddTodoForm = () => {
  const [text, setText] = useState('')
  const [category, setCategory] = useState('')
  const [dueDate, setDueDate] = useState()
  const [complete, setComplete] = useState(false)
  const date = new Date()
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(todos.actions.addItem({ text, category, complete, dueDate: date.getTime() }))
    // text, category & dueDate as payloads
    setText('') // clears input
    setCategory('') // clears input
    setDueDate('') // clears input
  }

  return (
    <ToDoForm onSubmit={handleSubmit}>
      <FormElementsWrapper> 
        <FormTextInputWrapper> 
          <AddTodoEmoji>📝</AddTodoEmoji>
          <label aria-label='add todo'>
            <InputText
              placeholder='New task...'
              type='text'
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
          </label>
        </FormTextInputWrapper>
        <FormCategoryDateWrapper> 
          <label>
            <Select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value=''>Category</option>
              <option value='Work'>Work</option>
              <option value='Study'>Study</option>
              <option value='Household'>Household</option>
              <option value='Shopping'>Shopping</option>
              <option value='Fun'>Fun</option>
              <option value='Other'>Other</option>
            </Select>
          </label>
          
          {/* date-picker to set dueDate below */}
          <DueDateLabel>
            Choose Due Date
            <DatePicker 
              name='Due date'
              selected={dueDate}
              onChange={(date) => setDueDate(date)} 
              value={dueDate} 
            />
          </DueDateLabel>
        </FormCategoryDateWrapper>
      </FormElementsWrapper>
      <AddButtonWrapper> 
        <AddButton 
          type='submit' 
          disabled={text.length < 3}
        >
          Add to list
        </AddButton>
      </AddButtonWrapper>
    </ToDoForm>
  )
}

const ToDoForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 85vw;
`;

const FormElementsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormTextInputWrapper = styled.div`
  width: 85vw;  
  margin-bottom: 1vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormCategoryDateWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const DueDateLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  margin-left: 10px;
  color: #606060;
`;
const AddButtonWrapper = styled.div`
  margin-top: 2vh;
`;


