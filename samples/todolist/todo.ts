
// let todoItems: any; //any를 Todo로 바꿈

type Todo =  {id:number , title:string , done: boolean};
let todoItems: Todo[];

//api

function fetchTodoItems(): Todo {
    const todos =[
        {di: 1 , title: '안녕', done: false},
        {di: 2 , title: '타입', done: false},
        {di: 3 , title: '스크립트', done: false},
    ];

    return todos;
}


// CRUD methods

function fetchTodos() {
    const todos = fetchTodoItems();
    return todos;
}



function addTodo(todo: Todo) {
    todoItems.push(todo);
}

function deleteTodo(index : number) {
    todoItems.splice(index, 1);
}


function completeTodo(index : number, todo : Todo) {
    todo.done = true;
    todoItems.splice(index, 1, todo);
}

// business logic

function logFirstTodo(): Todo {  //할일 목록에서 첫번째 출력함
    return todoItems[0];
}

function showCompletedTodo(): Todo[] {
    return todoItems.filter((item) => {return item.done});
}

function log() : void {
    console.log(todoItems);
}

// TODO  addTodo() 함수를 이용하여 2개의 새 할일을 추가하는 함수임
function addTwoTodoItems(): void {
    const item1 = {
        id: 4,
        title: "아이템 4",
        done: false
    }
    addTodo(item1);

    addTodo({
        id: 5,
        title: "아이템5",
        done: true,
    });
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
completeTodo(1, todoItems[1]);
log();

