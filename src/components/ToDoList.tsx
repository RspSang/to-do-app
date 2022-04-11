import React from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { toDoState, categoryState, toDoSelector } from "../atoms";
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

function ToDoList() {
  const toDos = useRecoilValue(toDoState);
  const newToDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  console.log(category);
  return (
    <Container>
      <Title>To Dos</Title>
      <select onInput={onInput}>
        {toDos.map((toDo) => (
          <option value={toDo.category}>{toDo.category}</option>
        ))}
      </select>
      <CreateToDo />
      {newToDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </Container>
  );
}

export default ToDoList;
