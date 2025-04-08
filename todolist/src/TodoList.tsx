import { useState } from "react";
import { Button } from "react-bootstrap";

const TodoList: React.FC = () => {
  type Todo = {
    id: number;
    text: string;
    isChecked: boolean;
  };
  const title: string = "오늘 할 일";
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      text: "공부하기",
      isChecked: true,
    },
    {
      id: 2,
      text: "잠자기",
      isChecked: false,
    },
    {
      id: 3,
      text: "미팅하기",
      isChecked: false,
    },
  ]);

  const [newTodo, setNewTodo] = useState<string>("");

  const handleChecked = (id: number) => {
    console.log(id);
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const handleSetTodo = (e: string) => {
    setNewTodo(e);
  };

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: newTodo,
          isChecked: false,
        },
      ]);
      setNewTodo("");
    }
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo>();
  const handleTodoClick = (todo: Todo) => {
    setShowDetail(true);
    setSelectedTodo(todo);
  };
  const handleCloseDetail = () => {
    setShowDetail(false);
  };
  return (
    <div>
      <h1>{title}</h1>
      <p></p>
      <div className="container">
        <div>
          <input
            type="text"
            placeholder="할 일 입력"
            style={{ marginRight: "10px", writingMode: "horizontal-tb" }}
            value={newTodo}
            onChange={(e) => {
              handleSetTodo(e.target.value);
            }}
          />
          <Button variant="primary" onClick={addTodo}>
            추가
          </Button>
        </div>

        <div className="board">
          <ul>
            {todos.map((t, i) => {
              return (
                <li key={t.id}>
                  <input
                    type="checkbox"
                    defaultChecked={t.isChecked}
                    onChange={() => {
                      handleChecked(t.id);
                    }}
                  ></input>
                  <span>
                    {t.isChecked ? <del>{t.text}</del> : <span>{t.text}</span>}
                  </span>
                  <button
                    onClick={() => {
                      removeTodo(t.id);
                    }}
                    className="deleteBtn"
                  >
                    삭제
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
