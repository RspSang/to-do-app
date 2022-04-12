import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, IToDo, toDoState } from "../atoms";
import styled from "styled-components";

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
`;

const Category = styled.div`
  background-color: #9147ff;
  border-radius: 10px;
  color: ${(props) => props.theme.textColor};
  margin-right: 1rem;
  min-width: 3rem;
  text-align: center;
`;

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const oldCategory = useRecoilValue(categoryState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
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
  };
  // const aa = oldCategory.filter((old) => old.category !== category);
  // console.log(aa);

  return (
    <CardContainer>
      <Card>
        <Text>{text}</Text>
        <Category>{category}</Category>
      </Card>

      {/* {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          Done
        </button>
      )} */}
    </CardContainer>
  );
}

export default ToDo;
