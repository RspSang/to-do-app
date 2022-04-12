import { atom, selector } from "recoil";

export interface IToDo {
  text: string;
  id: number;
  category: string;
}

export interface ICategory {
  category: string;
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const categoryState = atom<ICategory[]>({
  key: "category",
  default: [],
});

export const selectInputState = atom<ICategory>({
  key: "selectInput",
  default: "" as any,
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const select = get(selectInputState);
    return toDos.filter((toDo: any) => toDo.category === select);
  },
});