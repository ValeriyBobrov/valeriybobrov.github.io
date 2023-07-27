import React from "react";
import { createRoot } from "react-dom/client";

import AppHeader from "./components/app-header";
import TodoList from "./components/todo-list";
import Footer from "./components/footer";

import './style/style.css';

const App = () => {

  const todoData = [
    {
        completed: true,
        description: 'Completed task',
        created: 'created 17 seconds ago',
        id: 1,  
    },
    {
        completed: false,
        description: 'Editing task',
        created: 'created 5 minutes ago',
        id: 2, 
    },
    {
        completed: true,
        description: 'Active task',
        created: 'created 5 minutes ago',
        id: 3, 
    },
       
];

  return (
    <section className="todoapp">
      <AppHeader />
      <TodoList todos = { todoData } />
      <Footer />
    </section>
  )
}

createRoot(document.getElementById('root')).render(<App />)