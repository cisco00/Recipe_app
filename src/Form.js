import React from 'react'


const Form = ({setInputText, inputText, setStatus, setTodos, todos}) =>{

    const inputTextHandler = (e) => {
        //javascript code and function
        console.log(e.target.valueOf);
        setInputText(e.target.valueOf);
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,{text: inputText, completed: false, id: Math.random() * 100}
        ]);
        setInputText("");
    }
    const statusHandler =(e) =>{
        setStatus(e.target.value);
    }
    return (
        <form>
            <input onChange={inputTextHandler} type='text' className='Todo-input'/>
            <button className="todo-button" type="summit">
                <i className ="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todo" className="filter-todo">
                    <option value="all">All</option>
                    <option value="Positive">Completed</option>
                    <option value="Negative">Uncompleted</option>
                </select>

            </div>
        </form>
    )
}
export default Form;
