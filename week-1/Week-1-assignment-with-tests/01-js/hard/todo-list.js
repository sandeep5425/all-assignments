/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor() {
    this.todoList = [];
  }
  add(todo) {
    this.todoList.push(todo);
  }
  remove(todoInd) {
    if (todoInd >= this.todoList.length) return null;
    const res = this.todoList.filter((a, i) => {
      return i !== todoInd;
    });
    this.todoList = res;
  }

  update(ind, todo) {
    if (ind >= this.todoList.length) return null;
    this.todoList[ind] = todo;
  }

  getAll() {
    return this.todoList;
  }

  get(i) {
    if (i < this.todoList.length) return this.todoList[i];
    return null;
  }

  clear() {
    this.todoList = [];
  }
}

module.exports = Todo;
