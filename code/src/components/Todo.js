import React from 'react'
import { useDispatch } from 'react-redux'
import moment from 'moment'
import styled from 'styled-components'

import { todos } from 'reducers/todos'
import { Button } from 'library/Buttons'
import { CustomCheckbox } from 'components/CustomCheckbox'
import { TimeIcon } from 'library/Icons'

export const Todo = (props) => {
  const { id, text, dueDate, complete, startDate } = props.item;
  const dispatch = useDispatch()

  //checkbox click dispatches a toggle completed action to Redux:
  const handleCheckboxClick = () => {
    dispatch(todos.actions.toggleCompleted(id))
  }

  const handleRemoveButtonClick = () => {
    dispatch(todos.actions.removeTodo(id))
  }

  return (
    <ListItem>
      <ItemLineWrapper>
        <ItemTextWrapper>
          <label>
            <CustomCheckbox
              isChecked={complete}
              onChangeHandler={handleCheckboxClick} />
          </label>
          <TextLine checked={complete}>{text}</TextLine>
        </ItemTextWrapper>
        <Button
          type='button'
          onClick={handleRemoveButtonClick}
          background='#d3947a'
        >
          Remove
        </Button>
      </ItemLineWrapper>
      {/* Note to self: Implement functionality so that text turns red if duedate is passed */}
      <ItemLineWrapper>
        <TimeLine>
          {/* Comment in code-review: The startDate property does not exist on the todos so this will always say "a few seconds ago" */}
          <TimeIcon src="../assets/clock.svg" />
          {moment(startDate).fromNow()} 
        </TimeLine>
        {' '}{dueDate &&
          <TimeLine>
            <TimeIcon src="../assets/hourglass.svg" />
            {moment(dueDate).format('MMM Do YYYY')}
          </TimeLine>}
      </ItemLineWrapper>
    </ListItem>
  )
}

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;
  border-bottom: 1px solid #fff;
`;

const ItemLineWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const TextLine = styled.p`
  word-wrap: wrap;
  height: auto;
  ${({ checked }) => checked && `
    text-decoration: line-through;  
    opacity: 0.3;
    `
  }  
`;

const ItemTextWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TimeLine = styled.span`
  display: flex;
  align-items: center;
  font-size: 12px;
`;