import TodoComponent from "./TodoComponent";
import styles from "./TodoList.module.css";

export default function TodoList({ todos, setTodos }) {
  return (
    <div className={styles.list}>
      {todos.map((item) => {
        return (
          <div>
            <TodoComponent
              key={item.name}
              item={item}
              todos={todos}
              setTodos={setTodos}
            />
          </div>
        );
      })}
    </div>
  );
}
