import { atom, selector } from "recoil";

// export enum Categories {
//   "TO_DO" = "TO_DO",
//   "DOING" = "DOING",
//   "DONE" = "DONE",
// }

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

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo: any) => category.includes(toDo.category));
  },
});
