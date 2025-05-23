import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../features/Todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const textfieldRef = useRef(null);

  const todoToUpdate = useSelector((state) =>
    state.todos.find((todo) => todo.isUpdate === true)
  );

  useEffect(() => {
    if (todoToUpdate) {
      setInput(todoToUpdate.text);
      textfieldRef.current?.focus();
      textfieldRef.current?.select();
    } else {
      setInput("");
    }
  }, [todoToUpdate]);

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(addTodo(input.trim()));
    setInput("");
  };

  const updateTodoHandler = (e) => {
    e.preventDefault();
    if (!input.trim() || !todoToUpdate) return;
    dispatch(updateTodo({ id: todoToUpdate.id, text: input.trim() }));
    setInput("");
  };

  return (
    <form
      className="space-x-3 mt-12"
      onSubmit={todoToUpdate ? updateTodoHandler : addTodoHandler}
    >
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        ref={textfieldRef}
      />
      {todoToUpdate ? (
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Update Todo
        </button>
      ) : (
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Add Todo
        </button>
      )}
    </form>
  );
}

export default AddTodo;
