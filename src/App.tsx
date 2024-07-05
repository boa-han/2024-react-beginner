import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodos from "./hooks/useTodo";

function App() {          
  const {
    todos,
    addTodo,
    setTodoCompleted,
    deleteTodo,
    deleteAllCompletedTodos,
  } = useTodos();

  return (
    <main className="py-10 h-screen space-y-5 overflow-y-auto">
      <h1 className="font-bold text-3xl text-center">Your Todos</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <AddTodoForm onSubmit={addTodo} />
        <TodoList 
        todos={todos} 
        onCompletedChange={setTodoCompleted}
        onDelete={deleteTodo} />
        
        {/* <div  className="space-y-2">
          {todos.map(todo => (
            <TodoItem 
            key={todo.id}
            todo={todo}
            onCompletedChange={setTodoCompleted}/>
          ))}
          </div> */}

      </div>
      <TodoSummary
        todos={todos}
        deleteAllCompleted={deleteAllCompletedTodos}
      >
      </TodoSummary>
    </main>
  )
}

export default App
