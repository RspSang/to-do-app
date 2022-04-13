import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, IToDo, selectInputState, toDoState } from "../atoms";
import styled from "styled-components";
import React from "react";

const CardContainer = styled.li`
  list-style-type: none;
  margin-top: 1rem;
  width: 60%;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.textColor};
  height: 50px;
  border-radius: 10px;
  width: 100%;
`;
const Text = styled.div`
  color: ${(props) => props.theme.bgColor};
  font-size: 2rem;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0%;
`;

const Category = styled.button`
  background-color: #9147ff;
  border-radius: 15px;
  color: ${(props) => props.theme.textColor};
  margin-right: 1rem;
  min-width: 3rem;
  font-size: 1.5rem;
  text-align: center;
  padding: 5px;
  cursor: pointer;
`;

const Delete = styled.button`
  margin-right: 2rem;
  border-radius: 5px;
  width: 2rem;
  border-color: ${(props) => props.theme.bgColor};
  padding: 5px;
  cursor: pointer;
`;

function ToDo({ text, category, id }: IToDo) {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const [newCategory, setCategory] = useRecoilState(categoryState);
  const setSelect = useSetRecoilState(selectInputState);
  const onDeleteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    let result: any = [];
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      return [
        ...oldToDos.slice(0, targetIndex),
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
    setCategory((oldCategory) => {
      if (toDos.filter((toDo) => toDo.category === category).length > 1) {
        result = [...oldCategory];
        return result;
      }
      const targetIndex = oldCategory.findIndex((cat: any) => cat === category);
      result = [
        ...oldCategory.slice(0, targetIndex),
        ...oldCategory.slice(targetIndex + 1),
      ];
      return result;
    });
    setSelect((oldSelect) =>
      result.includes(oldSelect)
        ? oldSelect
        : result.length > 0
        ? result[0]
        : ""
    );
  };
  const otherCategory = newCategory.filter(
    (categorys: any) => categorys !== category
  );
  const onCategoryClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    let result: any = [];
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
    setCategory((oldCategory) => {
      if (toDos.filter((toDo) => toDo.category === category).length > 1) {
        result = [...oldCategory];
        return result;
      }
      const targetIndex = oldCategory.findIndex((cat: any) => cat === category);
      result = [
        ...oldCategory.slice(0, targetIndex),
        ...oldCategory.slice(targetIndex + 1),
      ];
      return result;
    });
    setSelect((oldSelect) =>
      result.includes(oldSelect)
        ? oldSelect
        : result.length > 0
        ? result[0]
        : ""
    );
  };

  return (
    <CardContainer>
      <Card>
        <Text>{text}</Text>
        {otherCategory?.map((other) => (
          <Category name={other as any} onClick={onCategoryClick}>
            {other}
          </Category>
        ))}
        <Delete onClick={onDeleteClick}>🗑</Delete>
      </Card>
    </CardContainer>
  );
}

export default ToDo;
