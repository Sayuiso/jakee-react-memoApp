import "./styles.css";
import React, { useState } from "react";

//可変のものはステートで定義する
export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([
    "ひとつめのtodo",
    "ふたつめのtodo",
  ]);
  const [completeTodos, setCompleteTodos] = useState(["完了したtodo"]);
  return (
    <>
      <div className="input-area">
        <input placeholder="やることを入力" />
        <button>追加</button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完了のtodo</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <li key={todo} className="list-row">
                <div className="todo-name">{todo}</div>
                <button>完了</button>
                <button>削除</button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了したtodo</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <li key="todo" className="list-row">
                <div className="todo-name">{todo}</div>
                <button>戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
