import React, { useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';

const TodoInsert = ({onInsert}) => {
  const [visible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //inputValue에 값이 없으면 return
    if (!inputValue) return;
    onInsert(inputValue);
    //input박스 값 초기화
    setInputValue('');
  }

  const onClick = () => {
    setVisible(!visible);
  }

  const onChange = useCallback(e => {
    setInputValue(e.target.value);
  }, []);

  return (
    <InsertForm onSubmit={handleSubmit}>
      {visible &&
        <InsertInput 
          autoFocus
          placeholder='할 일 입력 후 Enter' 
          value={inputValue}
          onChange={onChange}
        />
      }
      <AddButton type="button" onClick={onClick} visible={visible}>
        <MdAdd />
      </AddButton>
    </InsertForm>
  )
}

const InsertForm = styled.form`
  display: flex;
`

const InsertInput = styled.input`
  background: var(--light-gray);
  outline: none;
  color: white;
  font-size: 18px;
  border: none;
  padding: 15px;
  width: 80%;
  margin: 0 auto;
  &::placeholder {
    color: white;
  }
`

const AddButton = styled.button`
  background: var(--blue);
  border: none;
  outline: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  color: white;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 15px;
  top: 100px;
  cursor: pointer;
  transition: 0.125s all ease-in;

  &:hover {
    background: var(--blue-gray);
  }

  &:active{
    background: var(--red);
    transform: rotate(50deg);
  }

  ${props =>
    props.visible &&
    css`
      background: var(--red);
      transform: rotate(45deg);
      &:hover {
        background: var(--light-red);
      }
    `
  }
`

export default TodoInsert;