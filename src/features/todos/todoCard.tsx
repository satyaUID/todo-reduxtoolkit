import { FC } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { ITodo } from "../../types/todos";
import Delete from "../../assets/svg/delete";
import Edit from "../../assets/svg/edit";
import CheckCircle from "../../assets/svg/check-circle";
import { deleteTodo, editTodo } from "../../redux/slices/todoSlice";
import { Link } from "react-router-dom";
export type IProps = {
  toDo: ITodo;
};

const TodoCard: FC<IProps> = ({
  toDo: { title, description, id, isCompleted },
}) => {
  const dispatch = useAppDispatch();
  return (
    <article className="flex shadow-[0_-2px_8px_rgba(0,0,0,0.4)] mb-5 justify-between rounded-md p-3 items-center">
      <div>
        <h2>{title}</h2>
        <h2>{description}</h2>
      </div>
      <div className="flex gap-3">
       <Link to={`todo/edit/${id}`}>
        <Edit
            className="cursor-pointer"
            colorLine="#B3B7EE"
            onClick={() => dispatch(editTodo)}
          />
       </Link>
        <Delete
          className="cursor-pointer"
          colorLine="#B3B7EE"
          onClick={() => dispatch(deleteTodo(id))}
        />
        <CheckCircle
          circleColor="#B3B7EE"
          tickColor="#B3B7EE"
          checked={isCompleted}
          onClick={() => dispatch(editTodo(id))}
        />
      </div>
    </article>
  );
};

export default TodoCard;
