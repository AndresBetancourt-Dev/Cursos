import { useCallback, useReducer, useRef } from 'react'
import { Heading } from '../Heading';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import { ActionType, TodoType } from './types';
import styles from "./styles.module.css";

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

const initialState = [] as TodoType[]

const Todo = () => {
    const [todos, dispatch] = useReducer(reducer, initialState);
    const textRef = useRef<HTMLInputElement>(null);
    const onAddTodo = useCallback(() => {
        if (textRef.current) {
            dispatch({
                type: 'ADD',
                text: textRef.current!.value
            })
            textRef.current.value = "";
        }
    }, []);

    return (
        <div className={styles.container}>
            <Heading title="Todos" styles={styles} center />
            <div className={styles.todos}>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} dispatch={dispatch} styles={styles}></TodoItem>
                ))}
            </div>
            <AddTodo textRef={textRef} onAddTodo={onAddTodo} styles={styles} />
        </div>

    )
}

export default Todo