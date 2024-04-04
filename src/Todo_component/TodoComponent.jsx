import styles from "./TodoComponent.module.css";

export default function TodoComponent({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("Item Clicked For:", item);
    setTodos(todos.filter((todo) => todo !== item));
  }

  // function handleClick(name) {
  //   console.log("Item Clicked:", name);
  //   const newArr = todos.map((todo) => {
  //     todo.name === name ? { ...todo, done: !todo.done } : todo;
  //   });
  //   setTodos(newArr);
  // console.log(todos);
  // }

  function handleClick(name) {
    console.log("Item Clicked:", name);
    const newArr = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArr);
  }

  const dynamicClass = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName} key={item}>
        <span className={dynamicClass} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            className={styles.deleteButton}
            onClick={() => handleDelete(item)}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
