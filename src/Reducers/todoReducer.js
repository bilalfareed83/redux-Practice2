
import TodoAction from '../Action/actionTodo'

const TodoReducer = (state = {
    isLoading: false,
    isError: false,
    errorMessage: "",
    successMessage: "",
    todos:[]
}, action) => {
    switch (action.type) {
        case TodoAction.GET_TODO:
            return {
                ...state,
                isLoading: true                                    
            }
        case TodoAction.GET_TODO_SUCCESSFUL:
            return {
                ...state,
                isLoading: false,
                todos: action.data,
                isError: false
            }
        case TodoAction.GET_TODO_FAILED:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            return state
    }
}

export default TodoReducer