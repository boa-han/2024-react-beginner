import { useEffect, useState } from "react";
import { Todo } from "../types/todo";
import { dummyDate } from "../data/todos";

export default function useTodos() {
                            //useState(dummyDate);
    const [todos, setTodos] = useState(() => {
        const savedTodos:Todo[] = JSON.parse(localStorage.getItem("todos") || "[]")
        return savedTodos.length > 0 ? savedTodos : dummyDate
      });
    
      useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
      }, [todos])
    
      function setTodoCompleted(id: number, completed: boolean){
        //alert(`Todo with id ${id} is now ${completed ? "completed" : "not completed"}`);
    
        //todos.map(todo => (todo.id === id ? {...todo, completed} : todo ))
        
        setTodos((prevTodos) => 
          prevTodos.map(todo => (
            todo.id === id ? {...todo, completed} : todo ))
          );
        }
    
        function addTodo(title : string) {
          setTodos(prevTodos => [
            {
              id : Date.now(),//prevTodos.length +1,
              title,
              completed: false
            },
            ...prevTodos
          ])
          console.log(Date.now());
        }
    
        function deleteTodo(id: number){
          setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
        }
    
        function deleteAllCompletedTodos() {
          setTodos(prevTodos => prevTodos.filter(todo => !todo.completed))
        }

        return {
            todos,
            setTodoCompleted,
            addTodo,
            deleteTodo,
            deleteAllCompletedTodos
        }
}