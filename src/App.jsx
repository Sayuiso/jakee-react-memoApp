import "./styles.css";
<<<<<<< HEAD
import React, { useState } from "react";
=======
import React from "react";
import { useState } from "react/cjs/react.production.min";
>>>>>>> 0fb7cfe64ae073a49a90a6a3901d492605076179

//可変のものはステートで定義する
export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([
    "ひとつめのtodo",
    "ふたつめのtodo",
  ]);
<<<<<<< HEAD
  const [completeTodos, setCompleteTodos] = useState(["完了したtodo"]);
=======
>>>>>>> 0fb7cfe64ae073a49a90a6a3901d492605076179
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
<<<<<<< HEAD
              <li key={todo} className="list-row">
=======
              <li className="list-row">
>>>>>>> 0fb7cfe64ae073a49a90a6a3901d492605076179
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
<<<<<<< HEAD
          {completeTodos.map((todo) => {
            return (
              <li key="todo" className="list-row">
                <div className="todo-name">{todo}</div>
                <button>戻す</button>
              </li>
            );
          })}
=======
          <li className="list-row">
            <div className="todo-name">todo</div>
            <button>戻す</button>
          </li>
>>>>>>> 0fb7cfe64ae073a49a90a6a3901d492605076179
        </ul>
      </div>
    </>
  );
};
