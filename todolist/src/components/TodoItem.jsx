
const TodoItem = (props: TodoItemProps) => {
  const { item, onDelete } = props;

  return (
    <div className="todo-item">
      {item}
      <button onClick={onDelete}>삭제</button>
    </div>
  );
}

export default TodoItem;
