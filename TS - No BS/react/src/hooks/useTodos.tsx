import { TodoType } from '../components/Todo/types';
import create from 'zustand'
import { mountStoreDevtool } from 'simple-zustand-devtools';

const useTodos = create<{ todos: TodoType[], addTodo: (text: string) => void, removeTodo: (id: number) => void }>(set => ({
    todos: [] as TodoType[],
    addTodo: (text: string) => set(state =>
    ({
        ...state,
        todos: [...state.todos,
        {
            id: state.todos.length,
            text, done: false
        }]
    })
    ),
    removeTodo: (id: number) => (set(state => ({
        ...state,
        todos: state.todos.filter((todo) => todo.id !== id)
    })))
}));

export default useTodos