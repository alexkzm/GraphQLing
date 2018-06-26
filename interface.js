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