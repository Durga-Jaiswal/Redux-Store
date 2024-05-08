import AddTodo from "../components/AddTodo";
import Todos from "../components/Todos";

const Todo = () => {
    return(
        <>
             <h1 className="todo-title">Todo</h1>
            <AddTodo/>
            <Todos/>
        </>
    )
}
export default Todo;