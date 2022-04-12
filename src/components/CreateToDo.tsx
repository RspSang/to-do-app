import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { categoryState, selectInputState, toDoState } from "../atoms";

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
    <form onSubmit={handleSubmit(handleValid)}>
      <input {...register("category")} placeholder="Write a category" />
      <input
        {...register("toDo", {
          required: "Please write a To Do",
        })}
        placeholder="Write a to do"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateToDo;
