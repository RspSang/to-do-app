import React from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoSelector, selectInputState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 5rem;
  margin-top: 5rem;
`;

const Select = styled.select`
  margin-top: 2rem;
  width: 60%;
  height: 4rem;
  font-size: 2rem;
  :focus {
    outline: none;
    border-color: #9147ff;
  }
`;

function ToDoList() {
  const newToDos = useRecoilValue(toDoSelector);
  const category = useRecoilValue(categoryState);
  const [select, setSelect] = useRecoilState(selectInputState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setSelect(event.currentTarget.value as any);
  };
  return (
    <Container>
      <Title>To Dos</Title>
      <Select value={select as any} onInput={onInput}>
        {category.map((oldCategory: any) => (
          <option value={oldCategory}>{oldCategory}</option>
        ))}
      </Select>
      <CreateToDo />
      {newToDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </Container>
  );
}

export default ToDoList;
