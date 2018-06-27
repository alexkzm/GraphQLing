const todo = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
        return {
            id: action.id,
            text: action.text,
            completed: false
        }
        case 'TOGGLE_TODO':
         if(state.id === action.id) {
             return Object.assign({}, state, {
                 completed: !state.completed
             })
         }

         return state;
        default:
         return state;
    }
} 

const todos = (state = [], action) => {
    switch(action.type) {
      case 'ADD_TODO':
        return [
            ...state,
            todo(underfined, action)
        ];
      case 'TOGGLE_TODO':
        return state.map(t => todo(t, action))
      default:
        return state
    }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch(action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter 
        default:
            return state
    }
}

const { combineReducers } = Redux

const todoApp = combineReducers({
    todos,
    visibilityFilter
})

const { createStore } = Redux
const store = createStore(todoApp)
const { Component } = React

const FilterButton = ({filter, currentFilter, children}) => {
    if (filter === currentFilter) {
        return React.createElement('span', {}, children)
    }

    return React.createElement('button', {
        type: 'button',
        onClick: (e) => {
            store.dispatch({
                type: 'SET_VISIBILITY_FILTER',
                filter
            })
        }
    }, children)
}

const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
    }
}

let nextTodoId = 0

function addTodo(text) {
    store.dispatch({
        type: 'ADD_TODO',
        id: nextTodoId++,
        text: text
    })
}

addTodo('Hello')
addTodo('Goodbye')
addTodo('Lucky')

class TodoApp extends Component {
    componentDidMount() {
        this.input = document.getElementById('input')
    }
    render() {
        const {
            todos,
            visibilityFilter
        } = this.props
        const visibleTodos = getVisibleTodos(todos, visibilityFilter)
        const todoElements = visibleTodos.map(todo => {
            const toggle = () => {
                store.dispatch({
                    type: 'TOGGLE_TODO',
                    id: todo.id
                })
            }

            const up = () => {
                store.dispatch({
                    type: 'UP_TODO',
                    id: todo.id
                })
            }

            const down = () => {
                store.dispatch({
                    type: 'DOWN_TODO',
                    id: todo.id
                })
            }

            return (
                <li 
                id={todo.id}
                style={{textDecoration: (todo.completed ? 'line-though': 'none')}}
                >
                {todo.id}: {todo.text}
                <button onClick={toggle}>Toggle</button>
                <button onClick={up}>Up</button>
                <button onClick={down}>Down</button>
                </li>
            )
        })
    }
}