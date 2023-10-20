import "./styles.css";
import React from "react";
import { useState } from "react/cjs/react.production.min";

//可変のものはステートで定義する
export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([
    "ひとつめのtodo",
    "ふたつめのtodo",
  ]);
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
              <li className="list-row">
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
          <li className="list-row">
            <div className="todo-name">todo</div>
            <button>戻す</button>
          </li>
        </ul>
      </div>
    </>
  );
};
