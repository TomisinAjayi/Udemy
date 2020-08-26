var todos = ["cook dinner"];
var input = prompt("what would you like to do?");


// todo = item; i = index
while(input !== "quit") {
    if(input === "list") {
        todos.forEach(function(todo, i) {
            console.log(i + ": " + todo);
        });
        //console.log(todos);
    } else if(input === "new") {
        var newTodo = prompt("Enter new todo");
        todos.push(newTodo);
        console.log("added todo");
    } else if(input === "delete"){
        var index = prompt("Enter index of todo to delete");
        todos.splice(index, 1);
        console.log("Deleted todo");
    }

    //ask for new input
    input = prompt("what would you like to do?");
}
console.log("OK, YOU QUIT THE APP");
// window.setTimeout(function() {


// }, 500);
