import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodosLayout from "./Layouts/Todos";
import Todos from "./pages/todos/todos";
import AddTodo from "./pages/todos/addTodo";

function App() {
  const router = createBrowserRouter([
    {
      id: "root",
      path: "/",
      Component: TodosLayout,
      children: [
        {
          index: true,
          Component: Todos,
        },
        {
          path: "todo/add",
          Component: AddTodo,
        },
        {
          path: "todo/edit/:id",
          Component: AddTodo,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider
        router={router}
        fallbackElement={<p>Initial Load...</p>}
      />
    </div>
  );
}

export default App;
