import { createContext, FunctionComponent, useCallback, useContext, useReducer } from 'react'
import { ActionType, TodoType } from '../components/Todo/types';

const reducer = (state: TodoType[], action: ActionType) => {
    switch (action.type) {
        case 'ADD':
            return [...state, {
                id: state.length,
                text: action.text,
                done: false
            }];
        case 'REMOVE':
            return state.filter(({ id }) => id !== action.id);
        default:
            return state;
    }
};

type UseTodosResult = ReturnType<typeof useTodos>;

export const TodoContext = createContext<UseTodosResult>({
    todos: [],
    addTodo: () => { },
    removeTodo: () => { }
})

const useTodos = (initialState: TodoType[] = []): { todos: TodoType[]; addTodo: (text: string) => void; removeTodo: (id: number) => void } => {
    const [todos, dispatch] = useReducer(reducer, initialState);

    const addTodo = useCallback((text: string) => {
        dispatch({
            type: 'ADD',
            text
        })
    }, []);

    const removeTodo = useCallback((id: number) => {
        dispatch({
            type: 'REMOVE',
            id
        })
    }, [])

    return { todos, addTodo, removeTodo };
}

export default useTodos

export const TodosProvider: FunctionComponent<{ initialTodos: TodoType[] }> = ({ initialTodos, children }) => (
    <TodoContext.Provider value={useTodos(initialTodos)}>
        {children}
    </TodoContext.Provider>
);

export const useGetTodos = (): TodoType[] => {
    const { todos } = useContext(TodoContext)
    return todos
}

export const useAddTodo = (): UseTodosResult["addTodo"] => {
    const { addTodo } = useContext(TodoContext)
    return addTodo
}

export const useRemoveTodo = (): UseTodosResult["removeTodo"] => {
    const { removeTodo } = useContext(TodoContext);
    return removeTodo
}