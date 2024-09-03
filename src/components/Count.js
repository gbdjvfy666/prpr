import React, { useState } from "react";

function Countlike() {
  const [count, setCount] = useState(1);
  const [value, setValue] = useState('текст в инпуте')

  function addCount() {
    setCount(count + 1);
  }

  function deleteCount() {
    setCount(count - 1);
  }

  return (
    <div className="container pt-5">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            Счетчик: {count} <br/>
            Коментарий: {value} <br/>
            <input 
              type="text" 
              value={value} 
              onChange={event => setValue(event.target.value)}
            />
            <span id="counter"></span>
          </h5>
          <button className="btn btn-primary" id="add" onClick={addCount}>
            Добавить
          </button>
          <button className="btn btn-danger" id="sub" onClick={deleteCount}>
            Убрать
          </button>
          <button className="btn btn-success" id="async">
            Async
          </button>
        </div>
      </div>
    </div>
  );
}

export default Countlike;
