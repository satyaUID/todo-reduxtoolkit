import { FormEvent, useState, useDeferredValue, useRef, useEffect, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { ITodos } from "../types/todos";
import { addTodo, editTodo } from "../redux/slices/todoSlice";

export const useTodoForm = () => {
  const todos = useAppSelector<ITodos>((state) => state.todoSlice.toDos);
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const formEle = useRef<HTMLFormElement>(null);
  const [title, setTitle] = useState<string>("");
  const deferredTitle = useDeferredValue(title);
  const [desc, setDesc] = useState<string>("");
  const deferredDesc = useDeferredValue(desc);

  // const getDescription = (id: string | undefined):string => {
  //   if(id){
  //     forif
  //   }
  //   return "";
  // }

  // const getTile = (id: string | undefined):string => {
  //   if(id){
  //     console.log(todos)
  //   }
  //   return "";
  // }

  useEffect(() => {
    if (id) {
      for (let todo of todos) {
        if (id === todo.id) {
          setTitle(todo.title);
          setDesc(todo.description);
        }
      }
    }
  }, [id]);

  console.log(title, desc);  

  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (title && desc) {
      const actionToDispatch = !id ? addTodo : editTodo
      dispatch(actionToDispatch({
        title,
        description: desc,
        id
      }));
    }
    setTitle('');
    setDesc('');
  };

  return {
    formRef: formEle,
    deferredTitle,
    deferredDesc,
    setTitle,
    setDesc,
    submitHandler,
  };
};
