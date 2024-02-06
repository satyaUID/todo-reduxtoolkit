import { FC } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import TodoCard from "../../features/todos/todoCard";
import { ITodos } from "../../types/todos";
import FloatingActionButton from "../../components/buttons/floatingActionButton";

const Todos: FC = () => {
  const todos = useAppSelector<ITodos>((state) => state.todoSlice.toDos);
  console.log({todos})
  return (
    <div>
      <ul>
        {todos && todos?.map((todo) => <TodoCard key={todo.id} toDo={todo} />)}
      </ul>
      <Link to="todo/add">
        <FloatingActionButton />
      </Link>
    </div>
  );
};

export default Todos;
