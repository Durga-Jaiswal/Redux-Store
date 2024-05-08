import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";


const AddTodo = () => {
    const [input, setInput] = useState("")
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput("")
    }
    return(
        <>
            <form
            onSubmit={handleSubmit} className="todo-container">
               
                <input placeholder="What's you are working today..." type ="text" value={input} onChange={(e) => setInput(e.target.value)}/>
                <button type="submit">Add Todo</button>
            </form>
        </>
    )
}
export default AddTodo;