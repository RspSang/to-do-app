import { atom, selector } from "recoil";

export const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    const savedToDos = localStorage.getItem(key);
    if (savedToDos != null) {
      setSelf(JSON.parse(savedToDos));
    }
    onSet((newToDos: any, _: any, isReset: boolean) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newToDos));
    });
  };

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
  effects_UNSTABLE: [localStorageEffect("toDo")],
});

export const categoryState = atom<ICategory[]>({
  key: "category",
  default: [],
  effects_UNSTABLE: [localStorageEffect("category")],
});

export const selectInputState = atom<ICategory>({
  key: "selectInput",
  default: "" as any,
  effects_UNSTABLE: [localStorageEffect("selectInput")],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const select = get(selectInputState);
    return toDos.filter((toDo: any) => toDo.category === select);
  },
});
