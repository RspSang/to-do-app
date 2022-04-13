import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { categoryState, selectInputState, toDoState } from "../atoms";

const Form = styled.form`
  margin-top: 2rem;
  display: flex;
  width: 62%;
`;

const Text = styled.input`
  height: 4rem;
  width: 70%;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 1.4rem;
  padding: 0 1.2rem;
  :focus {
    outline: none;
    border-color: #9147ff;
  }
`;

const Category = styled.input`
  margin-left: 0.5rem;
  height: 4rem;
  width: 30%;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 1.4rem;
  padding: 0 0.6rem;
  :focus {
    outline: none;
    border-color: #9147ff;
  }
`;

const Btn = styled.button`
  margin-left: 0.5rem;
  padding: 0.8em 3em;
  height: 4rem;
  background-color: #9147ff;
  border-radius: 1rem;
  font-size: 1rem;
  :active {
    transform: translateY(5px);
  }
`;

interface IForm {
  category: string;
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const setCategory = useSetRecoilState(categoryState);
  const setSelect = useSetRecoilState(selectInputState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ category, toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category },
      ...oldToDos,
    ]);
    setCategory((oldCategory: any) =>
      oldCategory?.includes(category)
        ? [...oldCategory]
        : [category, ...oldCategory]
    );
    setSelect(category as any);
    setValue("category", "");
    setValue("toDo", "");
  };
  return (
    <Form onSubmit={handleSubmit(handleValid)}>
      <Category {...register("category")} placeholder="Category" />
      <Text
        {...register("toDo", {
          required: "Please write a To Do",
        })}
        placeholder="Write a to do"
      />
      <Btn>Add</Btn>
    </Form>
  );
}

export default CreateToDo;
