import TodoAction from "../Action/actionTodo"

class TodoMiddleware {
    static getTodo(data) {
        return (dispatch) => {
            dispatch(TodoAction.getTodo())

                fetch('https://jsonplaceholder.typicode.com/todos')
                    .then(response => response.json())
                    .then(json => {
                        console.log(json)
                        dispatch(TodoAction.getTodoSuccessfull({
                            todos:json
                        }))
                    })
        }
    }
}

export default TodoMiddleware