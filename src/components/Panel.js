import React from "react";


function Panel() {
  return(
<h2>
  <div class="container pt-5">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Счетчик: <span id="counter"></span></h5>
      <button class="btn btn-primary" id="add">Добавить</button>
      <button class="btn btn-danger" id="sub">Убрать</button>
      <button class="btn btn-success" id="async">Async</button>
    </div>
  </div>
  </div></h2>
  );
}

export default Panel;