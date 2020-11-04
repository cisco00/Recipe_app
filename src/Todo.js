import React from 'react'


const Todo = ({text, todo, setTodos, todos}) =>{
    //Events
    const deleteHandler = () =>{
        setTodos(todos.fitlter((e1) => e1.id !== todo.id));
    }
    const CompleteHandler = () => {
        setTodos(todos.map((item) =>{
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed,
                };
            }
            return item;
        })
        );
    };

    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>Heyy</li>
            <button onClick={CompleteHandler} className="complete-btn">
                <i className="fas fa-check">{text}</i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}
export default Todo;
