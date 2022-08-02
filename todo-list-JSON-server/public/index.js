let todolistBox = document.getElementById("todolist-box");

// console.log("heyhey",tdlistBox)

// fetch function
fetch("http://localhost:3000/todos")
  .then((res) => res.json())
  .then((json) => {
    json.map((data) => {
      console.log(data);
      todolistBox.append(addTodo(data));
    });
  });

// create td
function addTodo({ id, title, completed }) {
  let newTodo = document.createElement("div");
  // add class to element
  newTodo.classList.add("flex", "items-center", "justify-center", "space-x-4", "my-4");
  newTodo.innerHTML = `
        <p>haha, did it succesed?</p>
        <button class="py-2 px-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">Edit</button>
        <button class="py-2 px-4 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75">Delete</button>
    `;
  return newTodo;
}
