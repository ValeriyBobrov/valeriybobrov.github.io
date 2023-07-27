import React from "react";

import TodoListItem from "../todo-list-item";

const TodoList = ({ todos }) => {
    const elements = todos.map((item) => {
        return (
            <li className={item.completed ? 'completed' : 'view'} key = {item.id}>
                <TodoListItem
                    description = {item.description}
                    created = {item.created}
                />
            </li>
        )
    })

    return (
        <section className="main">
            <ul className="todo-list">
                { elements }
            </ul>
        </section>
    )
}

export default TodoList;