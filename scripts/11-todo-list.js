let todoArray = [];

  function addTodo() {
    let inputElement = document.querySelector('.name-input');

    let name = inputElement.value;
    todoArray.push(name);
    console.log(todoArray);

    inputElement.value = '';
  }

