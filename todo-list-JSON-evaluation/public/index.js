
let tdlistBox = document.getElementById("todolist-box")

// console.log("heyhey",tdlistBox)

// fetch function
fetch("http://localhost:3000/todos")
    .then(res => res.json())
    .then(json => {
        json.map(data => {
            console.log(data)
            tdlistBox.append(td_fun(data));
        })
    })

// create td
