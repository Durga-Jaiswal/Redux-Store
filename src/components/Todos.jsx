import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../store/todoSlice";
import { GiCancel } from "react-icons/gi";


const Todos = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch()

    if (!todos) {
        return <div>Loading...</div>; // Render a loading indicator
    }

    // Check if todos array is empty
    if (todos.length === 0) {
        return <div className="No-todos-text">No todos found.</div>; // Render a message indicating no todos
    }
    return(
        <>
            
            
           
                <ul  className="todo-box">
                   
                    {todos.map((todo) => (
                        <li key={todo.id} className="list-item">
                            <div>{todo.text}</div>
                            <button className="cross-btn" 
                            onClick={() => dispatch(removeTodo(todo.id))}
                            ><GiCancel className="cross-icon"/></button>
                        </li>
                    ))}
                </ul>
           
        </>
    )
}
export default Todos;