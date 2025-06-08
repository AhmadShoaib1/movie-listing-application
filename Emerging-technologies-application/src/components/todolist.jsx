import TodoItem from './todoitems';


function TodoList(props) {
  return (
    <ul>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={props.onToggle}
          onEdit={props.onEdit}
          onDelete={props.onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
